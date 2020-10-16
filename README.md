# react-split-it

Yet another react splitter component.

[Demos](https://greggman.github.io/react-split-it)

## How

```
npm install react-split-it
```

```
import Split as 'react-split-it';

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

```
import Split as 'react-split-it';

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

You need to make sure that `.outer` specifies some size
large enough make space for the things inside `<Split>`.
And it's up to you to make sure the contents of each
pane expand to fill their container.

See [here](https://greggman.github.io/react-split-it/#simple)

## How it works

Given the example above this is what your actual HTML elements will look like

```
<div class="outer>
  <div class="split">
    <div style="width: calc(33%-7px)">
      <div>pane one</div>
    </div>
    <div class="gutter gutter-horizontal"></div>
    <div style="width: calc(33%-7px)">
      <div>pane two</div>
    </div>
    <div class="gutter gutter-horizontal"></div>
    <div style="width: calc(33%-6px)">
      <div>pane three</div>
    </div>
  </div>
</div>
```

If you click and drag on the first gutter it will adjust
the percentages in the wrappers to either size. The reason to use percentages is because if the window is resizes the elements will do the correct thing. No need run any code.

The reason for the wrappers (vs split.js) react can't
set the style of children without their cooperation so
it react-split-it makes its own children, the wrappers,
that it can manipulate

## Handling adding and removing panes and/or recording sizes

By default react-split-it manages the sizes of the panes for you.
You can pass in initial sizes but after that it's on it's own.

But let's say you have dynamic panes as in

```
<Split>
  {panes.map(p => <SomePane {...p}/>)}
</Split>
```

Let's say say it starts as 3 panes

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
Example:

```
class Outer extends React.Component {
  constructor (props) {
    super(props);
    const panes = ['one', 'two', 'three'];
    const sizes = panes.map(() => 1 / panes.length);
    this.state = {
      panes,
      sizes,
    };
  }
  setSizes = (sizes) => {
    this.setState({sizes});
  }
  render() {
    return (
      <div className="outer">
        <Split sizes={sizes} onSetSize={setSizes}>
          {panes.map(p => <SomePane {...p}/>)}
        </Split>
      </div>
    );
  }
}
```

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

You can change this by providing a function `computeNewSizesFn` as a prop. The function you pass in
will be called to compute the sizes off all the panes
when a spitter is dragged. It is passed an object
with the following properties.

* `startSizes`: [number]

  An array of numbers of the size of each pane before dragging started.
  These are in normalized values. In other words each value is a number between 0 and 1 and they should all add up to 1. In a 3 pane split by default this
  would be an array of `[0.333, 0.333, 0.333]`

* `currentSizes`: [number]

  The current sizes of each pane. In other words,
  whatever you returned last time.

* `prevPaneNdx`: integer

  In index of the pane before the spitter being dragged.
  In other words if you were dragging `B` in the diagram
  above this would be 1.

* `gutterReservedSizesPX`: [number]

  The size of that will be reserved for gutters for each pane. For example
  if there are 2 panes and `gutterSize` is 10 then each pane's wrapper
  will have its size set to `calc(50% - 5px)` and so `gutterReservedSizesPX`
  would be `[5, 5]`. If there are 3 panes then it would be `[7, 6, 7]`
  because we need to reserve 20px for the two 10px splitters.

  You need this to compute the correct percent for enforcing a minimum size.

* `minSizePX`: integer

  The minimum size specified for panes in CSS pixels

* `deltaPX`: number

  The amount the gutter has been dragged in CSS pixels
  since the start of dragging

* `outerSizePX`: number

  The size of the space to work in. In other words
  the size of `outer` in the example above.

Given this your function should return the new sizes
of all the panes. As the simplest example

```
function badComputeSizes({
  startSizes,
  currentSizes,
  prevPaneNdx,
  gutterReservedSizesPX,
  minSizePX,
  deltaPX,
  outerSizePX,
}) {
  const deltaPercent = deltaPX / outerSizePX;
  return [
    ...currentSizes.slice(0, prevPaneNdx),
    startSizes[prevPaneNdx    ] + deltaPercent,
    startSizes[prevPaneNdx + 1] - deltaPercent,
    ...currentSizes.slice(prevPaneNdx + 2, currentSizes.length),
 ];
}
```

You can see the code above, all it does figure out the percentage
of movement represented by `deltaPX` and the adds that amount to
the pane before the spitter and subtracts it from the pane after
the splitter. If you try it you'll see it works!

Why it's `bad`. It doesn't check that we don't make any size less then 0
and it also doesn't check we don't make it less than `minSize`.

## Why

Because all the others were broken for me.

`react-split` fails if you add or remove children because it's not actually a react aware solution. It's just a wrapper
around split.js which inserts its own elements which
are not part of the react virtual DOM. When react re-creates the elements it's managing the 2 get out of sync.

`react-split-pane` didn't do what I want. I want that
when you drag a splitter only the thing to the left
and right of that splitter get affected. `react-split-pane` though doesn't do that.

`react-reflex` would probably have been my solution but it failed to work with React 16. It's out of date.

## Disclaimer

I make no promises this works for you. If it doesn't do something you need then **fork it** and adapt it for your needs.

## License

[MIT](LICENSE.md)