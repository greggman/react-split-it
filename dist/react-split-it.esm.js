import PropTypes from 'prop-types';
import React from 'react';

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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
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

function computeNewSizes(_ref) {
  var startSizes = _ref.startSizes,
      prevPaneNdx = _ref.prevPaneNdx,
      minSizePX = _ref.minSizePX,
      deltaPX = _ref.deltaPX,
      innerSizePX = _ref.innerSizePX;
  var nextPaneNdx = prevPaneNdx + 1;
  var pairSize = startSizes[prevPaneNdx] + startSizes[nextPaneNdx];
  var pairSizePX = pairSize * innerSizePX;
  var prevPaneStartSizePX = startSizes[prevPaneNdx] * pairSizePX / pairSize;
  var prevPaneNewSizePX = Math.min(Math.max(minSizePX, prevPaneStartSizePX + deltaPX), pairSizePX - minSizePX);
  var nextPaneNewSizePX = pairSizePX - prevPaneNewSizePX;
  var newSizes = [].concat(_toConsumableArray(startSizes.slice(0, prevPaneNdx)), [prevPaneNewSizePX / innerSizePX, nextPaneNewSizePX / innerSizePX], _toConsumableArray(startSizes.slice(prevPaneNdx + 2, startSizes.length)));
  return newSizes;
}

var stopMobileBrowserFromScrolling = function stopMobileBrowserFromScrolling(e) {
  return e.preventDefault();
};

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

    _this.elementRef = /*#__PURE__*/React.createRef();
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

var Split = /*#__PURE__*/function (_React$Component2) {
  _inherits(Split, _React$Component2);

  var _super2 = _createSuper(Split);

  function Split(props) {
    var _this2;

    _classCallCheck(this, Split);

    _this2 = _super2.call(this, props);

    _this2._setSizes = function (sizes) {
      _this2.setState({
        sizes: sizes
      });
    };

    _this2.handleMouseUpAndTouchEnd = function () {
      document.removeEventListener("mousemove", _this2.handleMouseAndTouchMove);
      document.removeEventListener("mouseup", _this2.handleMouseUpAndTouchEnd);
      document.removeEventListener("touchmove", _this2.handleMouseAndTouchMove);
      document.removeEventListener("touchend", _this2.handleMouseUpAndTouchEnd);

      _this2.setState({
        dragging: false
      });
    };

    _this2.handleMouseAndTouchMove = function (e) {
      stopMobileBrowserFromScrolling(e);
      var _this2$props = _this2.props,
          gutterSize = _this2$props.gutterSize,
          direction = _this2$props.direction,
          minSize = _this2$props.minSize,
          _this2$props$computeN = _this2$props.computeNewSizesFn,
          computeNewSizesFn = _this2$props$computeN === void 0 ? computeNewSizes : _this2$props$computeN,
          onSetSizes = _this2$props.onSetSizes,
          propSizes = _this2$props.sizes;
      var _this2$state = _this2.state,
          prevPaneNdx = _this2$state.prevPaneNdx,
          mouseStart = _this2$state.mouseStart,
          startSizes = _this2$state.startSizes,
          stateSizes = _this2$state.sizes;
      var setSizes = onSetSizes || _this2._setSizes;
      var sizes = onSetSizes ? propSizes : stateSizes;

      var _getDirectionProps = getDirectionProps(direction),
          clientAxis = _getDirectionProps.clientAxis,
          clientSize = _getDirectionProps.clientSize;

      var numPanes = sizes.length;
      var numGutters = numPanes - 1;
      var totalGutterSizePX = numGutters * gutterSize;
      var deltaPX = getMouseOrTouchPosition(e, clientAxis) - mouseStart;
      var outerSizePX = _this2.elementRef.current[clientSize];
      var innerSizePX = outerSizePX - totalGutterSizePX;
      var newSizes = computeNewSizesFn({
        startSizes: startSizes,
        prevPaneNdx: prevPaneNdx,
        minSizePX: minSize,
        innerSizePX: innerSizePX,
        deltaPX: deltaPX
      });
      setSizes(newSizes);
    };

    _this2.handleMouseDownAndTouchStart = function (e) {
      stopMobileBrowserFromScrolling(e);
      var _this2$props2 = _this2.props,
          direction = _this2$props2.direction,
          onSetSizes = _this2$props2.onSetSizes,
          propsSizes = _this2$props2.sizes;

      var _getDirectionProps2 = getDirectionProps(direction),
          clientAxis = _getDirectionProps2.clientAxis;

      document.addEventListener("mousemove", _this2.handleMouseAndTouchMove, {
        passive: false
      });
      document.addEventListener("mouseup", _this2.handleMouseUpAndTouchEnd);
      document.addEventListener("touchmove", _this2.handleMouseAndTouchMove, {
        passive: false
      });
      document.addEventListener("touchend", _this2.handleMouseUpAndTouchEnd);
      var gutterNdx = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
      var prevPaneNdx = (gutterNdx - 1) / 2;
      var sizes = onSetSizes ? propsSizes : _this2.state.sizes;
      var startSizes = sizes.slice();

      _this2.setState({
        startSizes: startSizes,
        mouseStart: getMouseOrTouchPosition(e, clientAxis),
        prevPaneNdx: prevPaneNdx,
        dragging: true
      });
    };

    _this2.recomputeSizes = function () {
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
      var sizes = _this2.state.sizes;
      var _this2$props3 = _this2.props,
          minSize = _this2$props3.minSize,
          direction = _this2$props3.direction,
          gutterSize = _this2$props3.gutterSize;

      var _getDirectionProps3 = getDirectionProps(direction),
          clientSize = _getDirectionProps3.clientSize;

      var numChildren = React.Children.count(_this2.props.children);
      var newSizes = numChildren < sizes.length // a child was removed, normalizes the sizes
      ? normalizeSizes(sizes.slice(0, numChildren)) // children were added, make space for them
      : addSpaceForChildren(sizes, numChildren, gutterSize, minSize, _this2.elementRef.current.parentElement[clientSize]);

      _this2._setSizes(newSizes);
    };

    var children = props.children,
        _sizes = props.sizes;

    var _numPanes = React.Children.count(children);

    var size = 1 / _numPanes;
    _this2.state = {
      sizes: _sizes || new Array(_numPanes).fill(size)
    };
    _this2.elementRef = /*#__PURE__*/React.createRef();
    return _this2;
  }

  _createClass(Split, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          onSetSizes = _this$props2.onSetSizes; // we need to check if new elements were added.

      if (onSetSizes) {
        return; // not our responsibility
      }

      var sizes = this.state.sizes;
      var numChildren = React.Children.count(children);

      if (sizes.length !== numChildren) {
        setTimeout(this.recomputeSizes);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          children = _this$props3.children,
          direction = _this$props3.direction,
          gutterSize = _this$props3.gutterSize,
          propSizes = _this$props3.sizes,
          onSetSizes = _this$props3.onSetSizes,
          minSize = _this$props3.minSize,
          splitClassName = _this$props3.className,
          gutterClassName = _this$props3.gutterClassName,
          paneClassName = _this$props3.paneClassName,
          rest = _objectWithoutProperties(_this$props3, ["children", "direction", "gutterSize", "sizes", "onSetSizes", "minSize", "className", "gutterClassName", "paneClassName"]);

      var _this$state = this.state,
          dragging = _this$state.dragging,
          prevPaneNdx = _this$state.prevPaneNdx,
          stateSizes = _this$state.sizes;
      var sizes = onSetSizes ? propSizes : stateSizes;
      var gutterStyle = {
        flexBasis: gutterSize ? "".concat(gutterSize, "px") : '0'
      };
      var childNdx = 0;
      var first = true;
      var newChildren = [];
      React.Children.forEach(children, function (child) {
        if (! /*#__PURE__*/React.isValidElement(child)) {
          return null;
        }

        if (!first) {
          newChildren.push( /*#__PURE__*/React.createElement(Gutter, {
            key: "gutter".concat(newChildren.length),
            direction: direction,
            dragging: dragging,
            current: dragging && childNdx === prevPaneNdx + 1,
            style: gutterStyle,
            gutterClassName: gutterClassName,
            onMouseDownAndTouchStart: _this3.handleMouseDownAndTouchStart
          }));
        }

        var style = {
          flexBasis: "".concat(sizes[childNdx] * 100, "%")
        };
        newChildren.push( /*#__PURE__*/React.createElement("div", {
          key: "pane".concat(newChildren.length),
          className: paneClassName,
          style: style
        }, /*#__PURE__*/React.cloneElement(child)));
        first = false;
        ++childNdx;
      });
      return /*#__PURE__*/React.createElement("div", _extends({
        className: classNames(splitClassName, "".concat(splitClassName, "-").concat(direction), _defineProperty({}, "".concat(splitClassName, "-dragging"), dragging)),
        ref: this.elementRef,
        style: _objectSpread2(_objectSpread2({}, this.props.style), dragging && {
          userSelect: 'none'
        })
      }, rest), newChildren, dragging ? /*#__PURE__*/React.createElement("style", null, "iframe ", '{', "pointer-events: none !important;", '}') : []);
    }
  }]);

  return Split;
}(React.Component);
Split.defaultProps = {
  className: 'split',
  gutterClassName: 'gutter',
  paneClassName: 'pane',
  gutterSize: 10,
  minSize: 10,
  direction: 'horizontal'
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

export default Split;
