import PropTypes from 'prop-types';
import React from 'react';

import {classNames} from './css-utils.js';
import Gutter from './gutter.js';
import moveGuttersComputeNewSizes from './move-gutters-compute-new-sizes.js';
import stableGuttersComputeNewSizes from './stable-gutters-compute-new-sizes.js';

export {
  moveGuttersComputeNewSizes,
  stableGuttersComputeNewSizes,
};

function normalizeSizes(sizes) {
  const totalSize = sizes.reduce((sum, v) => sum + v, 0);
  return sizes.map(v => v / totalSize);
}

const getMouseOrTouchPosition = (e, clientAxis) => e.touches ? e.touches[0][clientAxis] : e[clientAxis];

function addSpaceForChildren(sizes, numChildren, gutterSize, minSizePX, totalSizePX) {
  // const numGutters = numChildren - 1;
  // const totalGutterSpacePX = numGutters * gutterSize;
  // const availableSpacePX = totalSizePX - totalGutterSpacePX;
  //
  // this is not so trivial
  // let's say we have 3 items and we add 2 more.
  // each of those 2 has a minSize. So need to take 2 * minSize
  // from the 3 items or (2 * minSize / 3). But any of those items
  // themselves might already be at or near minSize
  //
  // This seems like it's then iterative.
  //
  // go through and try to remove (minSize * numNewElements / numOldElements)
  // from each old element but only remove such that that element
  // is still >= minSize. When done there's possibly some amount
  // you haven't distributed yet so repeat the process over and over
  // until it's all distributed.
  //
  // given that we don't know which elements are new, for now
  // lets just reset all the sizes
  return new Array(numChildren).fill(1 / numChildren);
}

const getDirectionProps = direction => (direction === 'horizontal')
  ? {
      dimension: 'width',
      clientAxis: 'clientX',
      position: 'left',
      positionEnd: 'right',
      clientSize: 'clientWidth',
    }
  : {
      dimension: 'height',
      clientAxis: 'clientY',
      position: 'top',
      positionEnd: 'bottom',
      clientSize: 'clientHeight',
    };

const stopMobileBrowserFromScrolling = e => e.preventDefault();

export default class Split extends React.Component {
  constructor(props) {
    super(props);
    const {
      children,
      sizes,
      onSetSizes,
    } = props;
    const numPanes = React.Children.count(children);
    const size = 1 / numPanes;
    this.state = {
      sizes: sizes ? (onSetSizes ? sizes : normalizeSizes(sizes)) : new Array(numPanes).fill(size),
    };
    this.elementRef = React.createRef();
  }
  _setSizes = (sizes) => {
    this.setState({sizes});
  }
  handleMouseUpAndTouchEnd = () => {
    document.removeEventListener("mousemove", this.handleMouseAndTouchMove);
    document.removeEventListener("mouseup", this.handleMouseUpAndTouchEnd);
    document.removeEventListener("touchmove", this.handleMouseAndTouchMove);
    document.removeEventListener("touchend", this.handleMouseUpAndTouchEnd);
    this.setState({dragging: false});

		const { onSetSizes, sizes: propsSizes, onDragEnd } = this.props;
		const sizes = onSetSizes ? propsSizes : this.state.sizes;
		onDragEnd(sizes);
  };
  handleMouseAndTouchMove = (e) => {
    stopMobileBrowserFromScrolling(e);
    const {
      gutterSize,
      direction,
      minSize,
      computeNewSizesFn,
      onSetSizes,
      sizes: propSizes,
    } = this.props;
    const {
      prevPaneNdx,
      mouseStart,
      startSizes,
      sizes: stateSizes,
    } = this.state;
    const setSizes = onSetSizes || this._setSizes;
    const sizes = onSetSizes ? propSizes : stateSizes;

    const {
      clientAxis,
      clientSize,
    } = getDirectionProps(direction);

    const numPanes = sizes.length;
    const numGutters = numPanes - 1;
    const totalGutterSizePX = numGutters * gutterSize;

    const deltaPX = getMouseOrTouchPosition(e, clientAxis) - mouseStart;
    const outerSizePX = this.elementRef.current[clientSize];
    const innerSizePX = outerSizePX - totalGutterSizePX;

    const newSizes = computeNewSizesFn({
      startSizes,
      prevPaneNdx,
      minSize: minSize / innerSizePX,
      minSizePX: minSize,
      innerSizePX,
      delta: deltaPX / innerSizePX,
      deltaPX,
    });
    setSizes(newSizes);
  };
  handleMouseDownAndTouchStart = (e) => {
    // Because we can now have custom gutter elements, we need to check if the
    // target is a gutter or not, as the user might have clicked on a child
		if (!e.target.classList.contains('gutter')) return;

    stopMobileBrowserFromScrolling(e);
    const {
      direction,
      onSetSizes,
			onDragStart,
      sizes: propsSizes,
    } = this.props;
    const {
      clientAxis,
    } = getDirectionProps(direction);

    document.addEventListener("mousemove", this.handleMouseAndTouchMove, {passive: false});
    document.addEventListener("mouseup", this.handleMouseUpAndTouchEnd);
    document.addEventListener("touchmove", this.handleMouseAndTouchMove, {passive: false});
    document.addEventListener("touchend", this.handleMouseUpAndTouchEnd);
    const gutterNdx = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
    const prevPaneNdx = (gutterNdx - 1) / 2;    
    const sizes = onSetSizes ? propsSizes : this.state.sizes;
    const startSizes = sizes.slice();
    this.setState({
      startSizes: startSizes,
      mouseStart: getMouseOrTouchPosition(e, clientAxis),
      prevPaneNdx,
      dragging: true,
    });
		onDragStart(sizes);
  };
  recomputeSizes = () => {
    // here it's not entirely clear what to do. Maybe we need options
    // If they user removes a child which sizes do they want? I guess
    // since they removed a child they passed in new sizes so we should
    // pass sizes back? Ugh!
    //
    // Example:
    //
    //   * start: 3 panes, sizes a(33%), b(33%), c(33%)
    //   * user adjusts to sizes a(10%), b(80%), c(10%)
    //   * user deletes pane (a)
    //
    // If we just continue to use the current sizes the we'd get
    //
    //   b(10%), c(90%)
    //
    // We have no way of knowing that b should get the 90%
    //
    // One way would be to pass responsibility for saving the sizes
    // up to the parent. Basically if you want to add/remove children
    // then you need need to keep their state. In that case
    // passing an `onSetSize` prop. It's a function that will be called
    // with an array of sizes.  Update your sizes and pass them in as
    // props
    //
    // But, just so we don't completely fail if the user has not opted
    // into managing the size state then at least do something.
    const {sizes} = this.state;
    const {minSize, direction, gutterSize} = this.props;
    const {
      clientSize,
    } = getDirectionProps(direction);

    const numChildren = React.Children.count(this.props.children);
    const newSizes = numChildren < sizes.length
      // a child was removed, normalizes the sizes
      ? normalizeSizes(sizes.slice(0, numChildren))
      // children were added, make space for them
      : addSpaceForChildren(sizes, numChildren, gutterSize, minSize, this.elementRef.current.parentElement[clientSize]);
    this._setSizes(newSizes);
  }
  componentDidUpdate() {
    const {children, onSetSizes} = this.props;
    // we need to check if new elements were added.
    if (onSetSizes) {
      return; // not our responsibility
    }

    const {sizes} = this.state;
    const numChildren = React.Children.count(children);
    if (sizes.length !== numChildren) {
      this.recomputeSizes();
    }
  }
  render() {
    const {
      children,
      direction,
      gutterSize,
      sizes: propSizes,
      onSetSizes,
      minSize,
      className: splitClassName,
      gutterClassName,
      paneClassName,
      gutter
    } = this.props;
    const {
      dragging,
      prevPaneNdx,
      sizes: stateSizes,
    } = this.state;

    const sizes = onSetSizes ? propSizes : stateSizes;
    const gutterStyle = {flexBasis: gutterSize ? `${gutterSize}px` : '0'};

    let childNdx = 0;
    let first = true;
    const newChildren = [];
    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) {
        return null;
      }
      if (!first) {
        newChildren.push(
          <Gutter
            key={`gutter${newChildren.length}`}
            direction={direction}
            dragging={dragging}
            current={dragging && childNdx === prevPaneNdx + 1}
            style={gutterStyle}
            gutterClassName={gutterClassName}
            onMouseDownAndTouchStart={this.handleMouseDownAndTouchStart}
            gutter={gutter}
          />
        );
      }

      const style = {
        flexBasis: `${sizes[childNdx] * 100}%`,
      };
      const className = classNames(paneClassName, {[`${paneClassName}-dragging`]: dragging});

      newChildren.push(
        <div key={`pane${newChildren.length}`} className={className} style={style}>
          {React.cloneElement(child)}
        </div>
      );
      first = false;
      ++childNdx;
    });
    return (
      <div
        className={classNames(splitClassName, `${splitClassName}-${direction}`, {[`${splitClassName}-dragging`]: dragging})}
        ref={this.elementRef}
        style={{
          ...this.props.style,
          ...(dragging && {userSelect: 'none'})
        }}
      >
        {newChildren}
        {dragging ?
          <style>
            iframe {'{'}
              pointer-events: none !important;
            {'}'}
          </style> : []
        }
      </div>
    );
  }
}

Split.defaultProps = {
  className: 'split',
  gutterClassName: 'gutter',
  paneClassName: 'pane',
  gutterSize: 10,
  minSize: 10,
  direction: 'horizontal',
  computeNewSizesFn: stableGuttersComputeNewSizes,
  gutter: null,
	onDragStart: () => {},
	onDragEnd: () => {},
};

Split.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  sizes: PropTypes.arrayOf(PropTypes.number),

  minSize: PropTypes.number,
  gutterSize: PropTypes.number,
  gutter: PropTypes.element,

  className: PropTypes.string,
  gutterClassName: PropTypes.string,
  paneClassName: PropTypes.string,

  onSetSizes: PropTypes.func,
  computeNewSizesFn: PropTypes.func,
	onDragStart: PropTypes.func,
	onDragEnd: PropTypes.func
};

Split.moveGuttersComputeNewSizes = moveGuttersComputeNewSizes;
Split.stableGuttersComputeNewSizes = stableGuttersComputeNewSizes;
