import PropTypes from 'prop-types';
import React$1 from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var camelCaseRE = /([a-z])([A-Z])/g;

var toDash = function toDash(_, left, right) {
  return "".concat(left, "-").concat(right);
};

var camelCaseToDash = function camelCaseToDash(s) {
  return s.replace(camelCaseRE, toDash).toLowerCase();
};

function classNames() {
  var names = [];

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var _i = 0, _args = args; _i < _args.length; _i++) {
    var arg = _args[_i];

    if (typeof arg === 'string') {
      names.push(arg);
    } else {
      for (var _i2 = 0, _Object$entries = Object.entries(arg); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (value) {
          names.push(camelCaseToDash(key));
        }
      }
    }
  }

  return names.join(' ');
}

var Gutter = /*#__PURE__*/function (_React$Component) {
  _inherits(Gutter, _React$Component);

  var _super = _createSuper(Gutter);

  function Gutter(props) {
    var _this;

    _classCallCheck(this, Gutter);

    _this = _super.call(this, props);

    _this.handleMouseDownAndTouchStart = function (e) {
      var onMouseDownAndTouchStart = _this.props.onMouseDownAndTouchStart;
      onMouseDownAndTouchStart(e);
    };

    _this.elementRef = React.createRef();
    return _this;
  }

  _createClass(Gutter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // There's no way in React 16 to add passive false event listeners
      // which means there is no way to drag a splitter and prevent mobile browsers
      // from scrolling without doing this manually.
      var elem = this.elementRef.current;
      elem.addEventListener('mousedown', this.handleMouseDownAndTouchStart, {
        passive: false
      });
      elem.addEventListener('touchstart', this.handleMouseDownAndTouchStart, {
        passive: false
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var elem = this.elementRef.current;
      elem.removeEventListener('mousedown', this.handleMouseDownAndTouchStart);
      elem.removeEventListener('touchstart', this.handleMouseDownAndTouchStart);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          direction = _this$props.direction,
          dragging = _this$props.dragging,
          current = _this$props.current,
          style = _this$props.style,
          gutterClassName = _this$props.gutterClassName;
      return /*#__PURE__*/React.createElement("div", {
        ref: this.elementRef,
        className: "".concat(gutterClassName, " ").concat(gutterClassName, "-").concat(direction, " ").concat(dragging && current ? "".concat(gutterClassName, "-dragging") : ''),
        style: style
      });
    }
  }]);

  return Gutter;
}(React.Component);

function computeSize(sizes, start, end) {
  var size = 0;

  for (var i = start; i < end; ++i) {
    size += sizes[i];
  }

  return size;
}

function moveGuttersComputeNewSizes(_ref) {
  var startSizes = _ref.startSizes,
      prevPaneNdx = _ref.prevPaneNdx,
      minSize = _ref.minSize,
      delta = _ref.delta;
  var nextPaneNdx = prevPaneNdx + 1; //    0           1        2        3
  // |---------|---prev--G--next---|------|
  //                     u
  //                     t
  //                     t
  //                     e
  //                     r

  if (delta < 0) {
    // we're dragging gutter left
    var minSizeBeforeNext = nextPaneNdx * minSize;
    var currentSizeBeforeNext = computeSize(startSizes, 0, nextPaneNdx);
    var movableSize = currentSizeBeforeNext - minSizeBeforeNext;
    var totalDelta = Math.min(-delta, movableSize); // distribute the delta to the left

    var newSizes = startSizes.slice();
    newSizes[nextPaneNdx] += totalDelta;

    for (var i = prevPaneNdx; totalDelta > 0 || i >= 0; --i) {
      var oldSize = newSizes[i];
      var newSize = Math.max(oldSize - totalDelta, minSize);
      newSizes[i] = newSize;
      totalDelta -= oldSize - newSize;
    }

    return newSizes;
  } else {
    // we're dragging gutter right
    var minSizeAfterPrev = (startSizes.length - nextPaneNdx) * minSize;
    var currentSizeAfterPrev = computeSize(startSizes, nextPaneNdx, startSizes.length);

    var _movableSize = currentSizeAfterPrev - minSizeAfterPrev;

    var _totalDelta = Math.min(delta, _movableSize); // distribute the delta to the right


    var _newSizes = startSizes.slice();

    _newSizes[prevPaneNdx] += _totalDelta;

    for (var _i = nextPaneNdx; _totalDelta > 0 || _i < _newSizes.length; ++_i) {
      var _oldSize = _newSizes[_i];

      var _newSize = Math.max(_oldSize - _totalDelta, minSize);

      _newSizes[_i] = _newSize;
      _totalDelta -= _oldSize - _newSize;
    }

    return _newSizes;
  }
}

function stableGuttersComputeNewSizes(_ref) {
  var startSizes = _ref.startSizes,
      prevPaneNdx = _ref.prevPaneNdx,
      minSize = _ref.minSize,
      delta = _ref.delta;
  var nextPaneNdx = prevPaneNdx + 1;
  var pairSize = startSizes[prevPaneNdx] + startSizes[nextPaneNdx];
  var prevPaneStartSize = startSizes[prevPaneNdx];
  var prevPaneNewSize = Math.min(Math.max(minSize, prevPaneStartSize + delta), pairSize - minSize);
  var nextPaneNewSize = pairSize - prevPaneNewSize;
  var newSizes = [].concat(_toConsumableArray(startSizes.slice(0, prevPaneNdx)), [prevPaneNewSize, nextPaneNewSize], _toConsumableArray(startSizes.slice(prevPaneNdx + 2, startSizes.length)));
  return newSizes;
}

function normalizeSizes(sizes) {
  var totalSize = sizes.reduce(function (sum, v) {
    return sum + v;
  }, 0);
  return sizes.map(function (v) {
    return v / totalSize;
  });
}

var getMouseOrTouchPosition = function getMouseOrTouchPosition(e, clientAxis) {
  return e.touches ? e.touches[0][clientAxis] : e[clientAxis];
};

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

var getDirectionProps = function getDirectionProps(direction) {
  return direction === 'horizontal' ? {
    dimension: 'width',
    clientAxis: 'clientX',
    position: 'left',
    positionEnd: 'right',
    clientSize: 'clientWidth'
  } : {
    dimension: 'height',
    clientAxis: 'clientY',
    position: 'top',
    positionEnd: 'bottom',
    clientSize: 'clientHeight'
  };
};

var stopMobileBrowserFromScrolling = function stopMobileBrowserFromScrolling(e) {
  return e.preventDefault();
};

var Split = /*#__PURE__*/function (_React$Component) {
  _inherits(Split, _React$Component);

  var _super = _createSuper(Split);

  function Split(props) {
    var _this;

    _classCallCheck(this, Split);

    _this = _super.call(this, props);

    _this._setSizes = function (sizes) {
      _this.setState({
        sizes: sizes
      });
    };

    _this.handleMouseUpAndTouchEnd = function () {
      document.removeEventListener("mousemove", _this.handleMouseAndTouchMove);
      document.removeEventListener("mouseup", _this.handleMouseUpAndTouchEnd);
      document.removeEventListener("touchmove", _this.handleMouseAndTouchMove);
      document.removeEventListener("touchend", _this.handleMouseUpAndTouchEnd);

      _this.setState({
        dragging: false
      });
    };

    _this.handleMouseAndTouchMove = function (e) {
      stopMobileBrowserFromScrolling(e);
      var _this$props = _this.props,
          gutterSize = _this$props.gutterSize,
          direction = _this$props.direction,
          minSize = _this$props.minSize,
          computeNewSizesFn = _this$props.computeNewSizesFn,
          onSetSizes = _this$props.onSetSizes,
          propSizes = _this$props.sizes;
      var _this$state = _this.state,
          prevPaneNdx = _this$state.prevPaneNdx,
          mouseStart = _this$state.mouseStart,
          startSizes = _this$state.startSizes,
          stateSizes = _this$state.sizes;
      var setSizes = onSetSizes || _this._setSizes;
      var sizes = onSetSizes ? propSizes : stateSizes;

      var _getDirectionProps = getDirectionProps(direction),
          clientAxis = _getDirectionProps.clientAxis,
          clientSize = _getDirectionProps.clientSize;

      var numPanes = sizes.length;
      var numGutters = numPanes - 1;
      var totalGutterSizePX = numGutters * gutterSize;
      var deltaPX = getMouseOrTouchPosition(e, clientAxis) - mouseStart;
      var outerSizePX = _this.elementRef.current[clientSize];
      var innerSizePX = outerSizePX - totalGutterSizePX;
      var newSizes = computeNewSizesFn({
        startSizes: startSizes,
        prevPaneNdx: prevPaneNdx,
        minSize: minSize / innerSizePX,
        minSizePX: minSize,
        innerSizePX: innerSizePX,
        delta: deltaPX / innerSizePX,
        deltaPX: deltaPX
      });
      setSizes(newSizes);
    };

    _this.handleMouseDownAndTouchStart = function (e) {
      stopMobileBrowserFromScrolling(e);
      var _this$props2 = _this.props,
          direction = _this$props2.direction,
          onSetSizes = _this$props2.onSetSizes,
          propsSizes = _this$props2.sizes;

      var _getDirectionProps2 = getDirectionProps(direction),
          clientAxis = _getDirectionProps2.clientAxis;

      document.addEventListener("mousemove", _this.handleMouseAndTouchMove, {
        passive: false
      });
      document.addEventListener("mouseup", _this.handleMouseUpAndTouchEnd);
      document.addEventListener("touchmove", _this.handleMouseAndTouchMove, {
        passive: false
      });
      document.addEventListener("touchend", _this.handleMouseUpAndTouchEnd);
      var gutterNdx = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
      var prevPaneNdx = (gutterNdx - 1) / 2;
      var sizes = onSetSizes ? propsSizes : _this.state.sizes;
      var startSizes = sizes.slice();

      _this.setState({
        startSizes: startSizes,
        mouseStart: getMouseOrTouchPosition(e, clientAxis),
        prevPaneNdx: prevPaneNdx,
        dragging: true
      });
    };

    _this.recomputeSizes = function () {
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
      var sizes = _this.state.sizes;
      var _this$props3 = _this.props,
          minSize = _this$props3.minSize,
          direction = _this$props3.direction,
          gutterSize = _this$props3.gutterSize;

      var _getDirectionProps3 = getDirectionProps(direction),
          clientSize = _getDirectionProps3.clientSize;

      var numChildren = React$1.Children.count(_this.props.children);
      var newSizes = numChildren < sizes.length // a child was removed, normalizes the sizes
      ? normalizeSizes(sizes.slice(0, numChildren)) // children were added, make space for them
      : addSpaceForChildren(sizes, numChildren, gutterSize, minSize, _this.elementRef.current.parentElement[clientSize]);

      _this._setSizes(newSizes);
    };

    var children = props.children,
        _sizes = props.sizes,
        _onSetSizes = props.onSetSizes;

    var _numPanes = React$1.Children.count(children);

    var size = 1 / _numPanes;
    _this.state = {
      sizes: _sizes ? _onSetSizes ? _sizes : normalizeSizes(_sizes) : new Array(_numPanes).fill(size)
    };
    _this.elementRef = /*#__PURE__*/React$1.createRef();
    return _this;
  }

  _createClass(Split, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          onSetSizes = _this$props4.onSetSizes; // we need to check if new elements were added.

      if (onSetSizes) {
        return; // not our responsibility
      }

      var sizes = this.state.sizes;
      var numChildren = React$1.Children.count(children);

      if (sizes.length !== numChildren) {
        this.recomputeSizes();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          children = _this$props5.children,
          direction = _this$props5.direction,
          gutterSize = _this$props5.gutterSize,
          propSizes = _this$props5.sizes,
          onSetSizes = _this$props5.onSetSizes,
          minSize = _this$props5.minSize,
          splitClassName = _this$props5.className,
          gutterClassName = _this$props5.gutterClassName,
          paneClassName = _this$props5.paneClassName;
      var _this$state2 = this.state,
          dragging = _this$state2.dragging,
          prevPaneNdx = _this$state2.prevPaneNdx,
          stateSizes = _this$state2.sizes;
      var sizes = onSetSizes ? propSizes : stateSizes;
      var gutterStyle = {
        flexBasis: gutterSize ? "".concat(gutterSize, "px") : '0'
      };
      var childNdx = 0;
      var first = true;
      var newChildren = [];
      React$1.Children.forEach(children, function (child) {
        if (! /*#__PURE__*/React$1.isValidElement(child)) {
          return null;
        }

        if (!first) {
          newChildren.push( /*#__PURE__*/React$1.createElement(Gutter, {
            key: "gutter".concat(newChildren.length),
            direction: direction,
            dragging: dragging,
            current: dragging && childNdx === prevPaneNdx + 1,
            style: gutterStyle,
            gutterClassName: gutterClassName,
            onMouseDownAndTouchStart: _this2.handleMouseDownAndTouchStart
          }));
        }

        var style = {
          flexBasis: "".concat(sizes[childNdx] * 100, "%")
        };
        newChildren.push( /*#__PURE__*/React$1.createElement("div", {
          key: "pane".concat(newChildren.length),
          className: paneClassName,
          style: style
        }, /*#__PURE__*/React$1.cloneElement(child)));
        first = false;
        ++childNdx;
      });
      return /*#__PURE__*/React$1.createElement("div", {
        className: classNames(splitClassName, "".concat(splitClassName, "-").concat(direction), _defineProperty({}, "".concat(splitClassName, "-dragging"), dragging)),
        ref: this.elementRef,
        style: _objectSpread2(_objectSpread2({}, this.props.style), dragging && {
          userSelect: 'none'
        })
      }, newChildren, dragging ? /*#__PURE__*/React$1.createElement("style", null, "iframe ", '{', "pointer-events: none !important;", '}') : []);
    }
  }]);

  return Split;
}(React$1.Component);
Split.defaultProps = {
  className: 'split',
  gutterClassName: 'gutter',
  paneClassName: 'pane',
  gutterSize: 10,
  minSize: 10,
  direction: 'horizontal',
  computeNewSizesFn: stableGuttersComputeNewSizes
};
Split.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  sizes: PropTypes.arrayOf(PropTypes.number),
  minSize: PropTypes.number,
  gutterSize: PropTypes.number,
  className: PropTypes.string,
  gutterClassName: PropTypes.string,
  paneClassName: PropTypes.string,
  onSetSizes: PropTypes.func,
  computeNewSizesFn: PropTypes.func
};
Split.moveGuttersComputeNewSizes = moveGuttersComputeNewSizes;
Split.stableGuttersComputeNewSizes = stableGuttersComputeNewSizes;

export default Split;
export { moveGuttersComputeNewSizes, stableGuttersComputeNewSizes };
