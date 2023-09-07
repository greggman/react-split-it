<img src="https://greggman.github.io/react-split-it/resources/logo192.png">

# react-split-it

Yet another react splitter component.

[Demos](https://greggman.github.io/react-split-it)

## How

```
npm install react-split-it
```

```javascript
import Split from 'react-split-it';

function SomeComponent(props) {
  return (
    <div className="classThatSpecifiesTheSizeToWorkWith">
      <Split>
        <ThingInPane1 />
        <ThingInPane2 />
        <ThingInPane3 />
        <ThingInPane4 />  ... etc ...
      </Split>
    </div>
  );
}
```

Example

```javascript
import Split from 'react-split-it';

function SomeComponent(props) {
  return (
    <div className="outer">
      <Split>
        <div>pane one</div>
        <div>pane two</div>
        <div>pane three</div>
      </Split>
    </div>
  );
}
```

See [here](https://greggman.github.io/react-split-it/#simple)

There is also [a UMD version](http://unpkg.com/react-split-it). See [Example](https://jsfiddle.net/greggman/ctreapqm/)

**Important!!!**

You need to make sure that `.outer` specifies some size
large enough make space for the things inside `<Split>`.
And it's up to you to make sure the contents of each
pane expand to fill their container.

Further, you must supply the your own CSS. The goal of
react-split-it is to do as little as possible and pass
on the rest to you. That way it's more flexible since
almost nothing is hard coded.

Here is the minimal css you need to provide.
<sub>(assuming you don't change the class names, see below)</sub>

```css
.split-horizontal {
  display: flex;
  width: 100%;
  height: 100%;
}
.split-vertical {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.gutter {
  flex-shrink: 0;
  flex-grow: 0;
  background: gray;
}
.gutter-horizontal {
  cursor: col-resize;
}
.gutter-vertical {
  cursor: row-resize;
}
.gutter:hover {
  background: #8cF;
}
.gutter-dragging:hover {
  background: cyan;
}

.pane {
  flex-shrink: 1;
  flex-grow: 1;
  position: relative;
}
.pane-dragging {
  overflow: hidden;
}
```

## How it works

Given the example above this is what your actual HTML elements will look like

```html
<div class="outer">
  <div class="split split-horizontal">
    <div style="flex-basis: 33.33333333%">
      <div>pane one</div>
    </div>
    <div class="gutter gutter-horizontal" style="flex-basis: 10px"></div>
    <div style="flex-basis: 33.33333333%">
      <div>pane two</div>
    </div>
    <div class="gutter gutter-horizontal" style="flex-basis: 10px"></div>
    <div style="flex-basis: 33.33333333%">
      <div>pane three</div>
    </div>
  </div>
</div>
```

If you click and drag on the first gutter it will adjust
the percentages in the wrappers to either side. The reason to use percentages is because if the window is resized the elements will do the correct thing. No need to run any code.

The reason for the wrappers (vs split.js) is react can't
set the style of children without their cooperation so
react-split-it makes its own children, the wrappers,
that it can manipulate.

The reason it uses flex-basis is because the browser will automatically handle the gutters
where as using something like `width: 33.33333%` will not.

## Props

* `direction` (default: 'horizontal')

  Can be 'horizontal' or 'vertical'

* `sizes` (default: 1 / number-of-panes)

  Sizes are in normalized values. In other words they should add up to 1.0.
  By default they are copied to local state and only used at creation time.
  If you want to be able to change them after creation see `onSetSizes`

* `minSize` (default: 10)

  The minimum size of each pane in CSS pixels

* `gutterSize` (default: 10)

  The size of gutters. Currently all gutters must be the same size
  and they must be specified as a number of CSS pixels.

* `className` (default: 'split')

  The base class name to use for the outer most div. By default it will be 
  `<div class="split split-<direction>">...`.

* `gutterClassName` (default: 'gutter')

  The base class name to use for the gutters. By default the gutter will
  have `gutter`, `gutter-<direction>`, and `gutter-dragging` if being dragged.

* `paneClassName` (default: 'pane')

  The class name to use for each pane

* `onSetSizes` (default: undefined)

  This is a function you supply if you want to be responsible for storing
  the state of the sizes. Anytime react-split-it needs to store new sizes
  it will call `onSetSize` with an array of normalized size numbers.

  If you supply this function then whatever values are sent to `onSetSize`
  should in general be passed back via props as `sizes`.

  [See this example](https://greggman.github.io/react-split-it/#add-remove-panes-managed)
  and [this section](#Handling-adding-and-removing-panes-and-or-recording-sizes).

* `computeNewSizesFn` (default: undefined)

  This is a function called while dragging a gutter to compute new sizes.
  react-split-it provides 2 functions, the default is `Split.stableGuttersComputeNewSizes`
  which only lets a gutter move in the space of the 2 panes to either side.

  An alternative is `Split.moveGuttersComputeNewSizes`. You can see an example of its
  usage [here](https://greggman.githib.io/react-split-it/#move-gutters).

  Otherwise if you want more complex behavior you can provide your own function.
  See [this section](#Changing-behavior)

## Handling adding and removing panes and/or recording sizes

By default react-split-it manages the sizes of the panes for you.
You can pass in initial sizes but after that it's on its own.

But let's say you have dynamic panes as in

```javascript
<Split>
  {panes.map(p => <SomePane {...p}/>)}
</Split>
```

Let's say it starts as 3 panes

```
+---------+---------+---------+
|   33%   |   33%   |   33%   |
+---------+---------+---------+
```

The user drags them to this

```
+---+---------------------+---+
|10%|         80%         |10%|
+---+---------------------+---+
```

Now you delete a pane so `panes` in the code above is 2 elements?
Which element was deleted? The react-split-it `<Split>` component
has no idea. Was the first element deleted and so it should now be

```
+------------------------+----+
|           85%          | 15%|
+------------------------+----+
```

Or the second element so it should now be

```
+--------------+--------------+
|      50%     |     50%      |
+--------------+--------------+
```

Or the 3rd element?

```
+----+------------------------+
|15% |           85%          |
+----+------------------------+
```

So, if you want to be able to tell react-split-it what happened you're required
to store the state of the sizes by providing an `onSetSize` function as a prop.
[See this example](https://greggman.github.io/react-split-it/#add-remove-panes-managed).

Now since you are in charge of the sizes you know if you delete `pane[2]`
then you should also delete `sizes[2]`.

If you don't provide a `onSetSize` function then if you remove a pane
the space will be evenly distributed as if the last pane was deleted.
If you add a pane all the sizes will be reset to `1 / numPanes`

## Changing behavior

As it is if you have a split like this

```
+-----+-----+-----+
|     |     |     |
|     A     B     |
|     |     |     |
+-----+-----+-----+
```

If you drag `A` to the right it will stop at `B`.

You can change this by providing a function `computeNewSizesFn` as a prop. The function you pass in will be called to compute the sizes off all the panes
when a splitter is dragged. It is passed an object
with the following properties.

* `startSizes`: [number]

  An array of numbers of the size of each pane before dragging started.
  These are in normalized values. In other words each value is a number between 0 and 1 and they should all add up to 1. In a 3 pane split by default this
  would be an array of `[0.333, 0.333, 0.333]`

* `prevPaneNdx`: integer

  The index of the pane before the splitter being dragged.
  In other words if you were dragging `B` in the diagram
  above this would be 1.

* `gutter`: ReactComponent

	The React elements rendered inside the gutter. This is
	useful if you want to add a custom handle to the gutter.

* `minSize`: number

  The minimum size specified for panes in normalized values

* `minSizePX`: number

  The minimum size specified for panes in CSS pixels

* `delta`: number

  The amount the gutter has been dragged in normalized values
  since the start of dragging

* `deltaPX`: number

  The amount the gutter has been dragged in CSS pixels
  since the start of dragging

* `innerSizePX`: number

  The size of the space to work in. In other words
  the size of `outer` in the example above minus
  `gutterSize * numPanes - 1`. In other words if there are 3
  pane then there are 2 gutters. If the space of outer
  is 100px then subtracting the space for the 2 gutters
  means `innerSizePX` will be 80.

* `onDragStart`: function

	A function that's called before the drag starts. This returns 
	the sizes from where the drag started. This is useful if you
	want to reset the sizes if the user drags too far.

* `onDragEnd`: function

	A function that's called once dragging ends. This is useful if you
	want to set different sizes after dragging the gutter.

Given this your function should return the new sizes
of all the panes. As the simplest example

```javascript
function badComputeNewSizes({
  startSizes,
  prevPaneNdx,
  delta,
}) {
  return [
    ...startSizes.slice(0, prevPaneNdx),
    startSizes[prevPaneNdx    ] + delta,
    startSizes[prevPaneNdx + 1] - delta,
    ...startSizes.slice(prevPaneNdx + 2, startSizes.length),
  ];
}
```

You can see the code above, all it does is add `delta` to
the pane before the splitter and subtracts it from the pane after
the splitter. [If you try it](https://greggman.github.io/react-split-it/#bad-custom-compute-sizes)
you'll see it kind of works!

Why it's bad is because it doesn't check that we don't make any size less then 0
and it also doesn't check we don't make it less than `minSize` but it's
the simplest example.

You can supply your own function if you want to do something fancy like
different minimum sizes per pane or some gutters able to push other gutters
and some not. To see how to write one take a look at [the source for
the default function](https://github.com/greggman/react-split-it/blob/main/src/stable-gutters-compute-new-sizes.js) and [the provided alternative](https://github.com/greggman/react-split-it/blob/main/src/move-gutters-compute-new-sizes.js)

## Why react-split-it?

Because all the others were broken for me.

`react-split` fails if you add or remove children because it's not actually a react aware solution. It's just a wrapper around split.js which inserts its own elements which
are not part of the react virtual DOM. When react re-creates the elements it's managing the 2 get out of sync.

`react-split-pane` didn't do what I want. I want that
when you drag a splitter only the thing to the left
and right of that splitter get affected. `react-split-pane` though doesn't do that.

`react-reflex` would probably have been my solution but it failed to work with React 16. It's out of date.

## Disclaimer

I make no promises this works for you. If it doesn't do something you need then **fork it** and adapt it for your needs.

## License

[MIT](LICENSE.md)
