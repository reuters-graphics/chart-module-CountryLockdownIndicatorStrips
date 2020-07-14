import * as d3 from 'd3';
import { selection, interpolateHcl } from 'd3';
import merge from 'lodash/merge';
import { timeFormat, timeParse } from 'd3-time-format';
import 'd3-selection-multi';
import D3Locale from '@reuters-graphics/d3-locale';

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

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
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

var ChartError = /*#__PURE__*/function (_Error) {
  _inherits(ChartError, _Error);

  var _super = _createSuper(ChartError);

  function ChartError() {
    var _this;

    var constructorName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Chart component';

    _classCallCheck(this, ChartError);

    _this = _super.call(this, constructorName);
    _this.constructorName = constructorName;
    _this.name = 'ChartComponentError';
    return _this;
  }

  return ChartError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var ErrorDrawMethodUndefined = /*#__PURE__*/function (_ChartError) {
  _inherits(ErrorDrawMethodUndefined, _ChartError);

  var _super2 = _createSuper(ErrorDrawMethodUndefined);

  function ErrorDrawMethodUndefined() {
    var _this2;

    _classCallCheck(this, ErrorDrawMethodUndefined);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "message", "".concat(_this2.constructorName, " should have a draw method"));

    return _this2;
  }

  return ErrorDrawMethodUndefined;
}(ChartError);
var ErrorSelectorType = /*#__PURE__*/function (_ChartError2) {
  _inherits(ErrorSelectorType, _ChartError2);

  var _super3 = _createSuper(ErrorSelectorType);

  function ErrorSelectorType() {
    var _this3;

    _classCallCheck(this, ErrorSelectorType);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super3.call.apply(_super3, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this3), "message", "".concat(_this3.constructorName, " selector should be a DOM Element or selector string"));

    return _this3;
  }

  return ErrorSelectorType;
}(ChartError);
var ErrorPropsType = /*#__PURE__*/function (_ChartError3) {
  _inherits(ErrorPropsType, _ChartError3);

  var _super4 = _createSuper(ErrorPropsType);

  function ErrorPropsType() {
    var _this4;

    _classCallCheck(this, ErrorPropsType);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this4 = _super4.call.apply(_super4, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this4), "message", "".concat(_this4.constructorName, " props should be an Object"));

    return _this4;
  }

  return ErrorPropsType;
}(ChartError);
var ErrorDataType = /*#__PURE__*/function (_ChartError4) {
  _inherits(ErrorDataType, _ChartError4);

  var _super5 = _createSuper(ErrorDataType);

  function ErrorDataType() {
    var _this5;

    _classCallCheck(this, ErrorDataType);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this5 = _super5.call.apply(_super5, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this5), "message", "".concat(_this5.constructorName, " data should be an Array"));

    return _this5;
  }

  return ErrorDataType;
}(ChartError);

selection.prototype.moveToFront = function () {
  return this.each(function () {
    this.parentNode.appendChild(this);
  });
};

selection.prototype.moveToBack = function () {
  return this.each(function () {
    var firstChild = this.parentNode.firstChild;

    if (firstChild) {
      this.parentNode.insertBefore(this, firstChild);
    }
  });
}; // ... and the important addition. ⬇️⬇️⬇️

/**
 * appendSelect either selects a matching child element of your current
 * selection if one exists or appends that child and selects it. It's useful
 * for writing idempotent chart functions.
 *
 * Use it like this:
 *
 * selection.appendSelect(<query selector>)
 *
 * It can be chained like any normal d3 selection:
 *
 * const g = d3.select(myNode).appendSelect('g', 'viz-group');
 * g.appendSelect('rect')
 *   .attr('x', 0); etc.
 *
 * @param  {string} querySelector  String representation of element to be
 *                                 appended/selected, e.g., div.myClass, svg,
 *                                 button.myClass.anotherClass.
 * @return {object}     d3 selection of child element
 */


selection.prototype.appendSelect = function (querySelector) {
  // Test querySlector w/ classes
  if (!/^[a-zA-Z]+[0-9]?\.-?[_a-zA-Z][_a-zA-Z0-9.-]*[a-zA-Z0-9]*$/.test(querySelector)) {
    // Test querySelector just an element
    if (!/^[a-zA-Z]+[0-9]?$/.test(querySelector)) {
      throw new Error("Invalid query selector passed to appendSelect. Must be an element with zero or more classes: \"div.myClass.another\". Got \"".concat(querySelector, "\"."));
    }
  }

  var element = querySelector.split('.')[0];
  var classes = querySelector.split('.').slice(1);
  var selection = this.select(querySelector);
  if (!selection.empty()) return selection;
  selection = this.append(element);
  classes.forEach(function (cls) {
    return selection.classed(cls, true);
  });
  return selection;
};

var ChartComponent = /*#__PURE__*/function () {
  function ChartComponent(selector, props, data) {
    _classCallCheck(this, ChartComponent);

    _defineProperty(this, "defaultProps", {});

    _defineProperty(this, "defaultData", []);

    this.selection(selector);
    this.props(props);
    this.data(data);
  }
  /**
   * Getter/setter for DOM node chart is drawn into
   * @param  {String or Element} selector
   */


  _createClass(ChartComponent, [{
    key: "selection",
    value: function selection(selector) {
      if (!selector) return this._selection;

      if (!(selector instanceof Element) && typeof selector !== 'string') {
        throw new ErrorSelectorType(this.constructor.name);
      }

      this._selection = d3.select(selector);
      return this;
    }
    /**
     * Default props
     * @type {Object}
     */

  }, {
    key: "props",

    /**
     * Getter/setter for props object
     * @param  {Object} obj props
     */
    value: function props(obj) {
      if (!obj) return this._props || this.defaultProps;

      if (!(obj instanceof Object)) {
        throw new ErrorPropsType(this.constructor.name);
      }

      this._props = merge(this._props || this.defaultProps, obj);
      return this;
    }
    /**
     * Default data
     * @type {Array}
     */

  }, {
    key: "data",

    /**
     * Getter/setter for chart data
     * @param  {Array} arr data
     */
    value: function data(arr) {
      if (!arr) return this._data || this.defaultData;

      if (!(arr instanceof Array)) {
        throw new ErrorDataType(this.constructor.name);
      }

      this._data = arr;
      return this;
    }
  }, {
    key: "draw",
    value: function draw() {
      throw new ErrorDrawMethodUndefined(this.constructor.name);
    }
  }]);

  return ChartComponent;
}();

var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
  }

  interval.floor = function(date) {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}

var durationMinute = 6e4;
var durationDay = 864e5;

var day = newInterval(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
}, function(date) {
  return date.getDate() - 1;
});

//   startDate = new Date(startDate);
//   stopDate = new Date(stopDate);
//   const dateArray = [];
//   const currentDate = startDate;
//   while (currentDate <= stopDate) {
//     const dt = new Date(currentDate);
//     dateArray.push(dt);
//     currentDate.setDate(currentDate.getDate() + 1);
//   }
//   return dateArray;
// }
// function formatDateObject(date, separator) {
//   if (!separator) {
//     separator = '-';
//   }
//   const yyyy = date.getFullYear();
//   const mm = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
//   const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
//   return `${yyyy}${separator}${mm}${separator}${dd}`;
//

function getDates(startDate, stopDate) {
  var dateParse = timeParse('%Y-%m-%d'); // include last day

  stopDate = dateParse(stopDate);
  var endDate = new Date(stopDate.getFullYear(), stopDate.getMonth(), stopDate.getDate() + 1);
  var dateArray = day.range(dateParse(startDate), endDate, 1);
  return dateArray;
}

function formatDateObject(date, separator) {
  if (!separator) {
    separator = '-';
  }

  return timeFormat("%Y".concat(separator, "%m").concat(separator, "%d"))(date);
}

var defaultData = [
	{
		date: "2020-01-01",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-02",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-03",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-04",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-05",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-06",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-07",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-08",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-09",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-10",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-11",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-12",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-13",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-14",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-15",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-16",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-17",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-18",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-19",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-20",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-21",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-22",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-23",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-24",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-25",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-26",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-27",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-28",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-29",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-30",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-01-31",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-01",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-02",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-03",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-04",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-05",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-06",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-07",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-08",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-09",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-10",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-11",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-12",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-13",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-14",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-15",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-16",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-17",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-18",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-19",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-20",
		c1: 0,
		flag: ""
	},
	{
		date: "2020-02-21",
		c1: 1,
		flag: ""
	},
	{
		date: "2020-02-22",
		c1: 1,
		flag: ""
	},
	{
		date: "2020-02-23",
		c1: 1,
		flag: ""
	},
	{
		date: "2020-02-24",
		c1: 1,
		flag: ""
	},
	{
		date: "2020-02-25",
		c1: 1,
		flag: ""
	},
	{
		date: "2020-02-26",
		c1: 1,
		flag: ""
	},
	{
		date: "2020-02-27",
		c1: 1,
		flag: ""
	},
	{
		date: "2020-02-28",
		c1: 1,
		flag: ""
	},
	{
		date: "2020-02-29",
		c1: 1,
		flag: ""
	},
	{
		date: "2020-03-01",
		c1: 1,
		flag: ""
	},
	{
		date: "2020-03-02",
		c1: 1,
		flag: ""
	},
	{
		date: "2020-03-03",
		c1: 1,
		flag: ""
	},
	{
		date: "2020-03-04",
		c1: 2,
		flag: 0
	},
	{
		date: "2020-03-05",
		c1: 2,
		flag: 0
	},
	{
		date: "2020-03-06",
		c1: 2,
		flag: 0
	},
	{
		date: "2020-03-07",
		c1: 2,
		flag: 0
	},
	{
		date: "2020-03-08",
		c1: 2,
		flag: 0
	},
	{
		date: "2020-03-09",
		c1: 2,
		flag: 0
	},
	{
		date: "2020-03-10",
		c1: 2,
		flag: 0
	},
	{
		date: "2020-03-11",
		c1: 2,
		flag: 0
	},
	{
		date: "2020-03-12",
		c1: 2,
		flag: 0
	},
	{
		date: "2020-03-13",
		c1: 3,
		flag: 0
	},
	{
		date: "2020-03-14",
		c1: 3,
		flag: 0
	},
	{
		date: "2020-03-15",
		c1: 3,
		flag: 0
	},
	{
		date: "2020-03-16",
		c1: 3,
		flag: 0
	},
	{
		date: "2020-03-17",
		c1: 3,
		flag: 0
	},
	{
		date: "2020-03-18",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-03-19",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-03-20",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-03-21",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-03-22",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-03-23",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-03-24",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-03-25",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-03-26",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-03-27",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-03-28",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-03-29",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-03-30",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-03-31",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-01",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-02",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-03",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-04",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-05",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-06",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-07",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-08",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-09",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-10",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-11",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-12",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-13",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-14",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-15",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-16",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-17",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-18",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-19",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-20",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-21",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-22",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-23",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-24",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-25",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-26",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-27",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-28",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-29",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-04-30",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-01",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-02",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-03",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-04",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-05",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-06",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-07",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-08",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-09",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-10",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-11",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-12",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-13",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-14",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-15",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-16",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-17",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-18",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-19",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-20",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-21",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-22",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-23",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-24",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-25",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-26",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-27",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-28",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-29",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-30",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-05-31",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-01",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-02",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-03",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-04",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-05",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-06",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-07",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-08",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-09",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-10",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-11",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-12",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-13",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-14",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-15",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-16",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-17",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-18",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-19",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-20",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-21",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-22",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-23",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-24",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-25",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-26",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-27",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-28",
		c1: 3,
		flag: 1
	},
	{
		date: "2020-06-29",
		c1: "",
		flag: ""
	},
	{
		date: "2020-06-30",
		c1: "",
		flag: ""
	},
	{
		date: "2020-07-01",
		c1: "",
		flag: ""
	},
	{
		date: "2020-07-02",
		c1: "",
		flag: ""
	},
	{
		date: "2020-07-03",
		c1: "",
		flag: ""
	},
	{
		date: "2020-07-04",
		c1: "",
		flag: ""
	},
	{
		date: "2020-07-05",
		c1: "",
		flag: ""
	},
	{
		date: "2020-07-06",
		c1: "",
		flag: ""
	}
];

// import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';
// const atlastClient = new AtlasMetadataClient();
// const dateFormat_tt = d3.timeFormat('%B %e');
// const numberFormat_tt = d3.format(',');

var dateParse = d3.timeParse('%Y-%m-%d');

var CountryLockdownIndicatorStrips = /*#__PURE__*/function (_ChartComponent) {
  _inherits(CountryLockdownIndicatorStrips, _ChartComponent);

  var _super = _createSuper(CountryLockdownIndicatorStrips);

  function CountryLockdownIndicatorStrips() {
    var _this;

    _classCallCheck(this, CountryLockdownIndicatorStrips);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "defaultProps", {
      locale: 'en',
      // See docs https://github.com/reuters-graphics/d3-locale 
      // dateSeries: ['2019-12-31', '2020-07-07'], // yyyy-mm-dd format
      // dataParams: {
      //   date: 'date',
      //   index: 'c1',
      //   stepValue: 'flag',
      //   steps: 2, // stepValue = 0, 1...
      // },
      height: 150,
      stripHeight: 50,
      margin: {
        top: 10,
        right: 18,
        bottom: 10,
        left: 18
      },
      valign: 'center',
      // start, center, baseline
      baseColor: 'rgba(255,255,255,0.1)',
      // stripColor: { // should be numeric values that are mapped from the data
      //   0: 'rgba(255,255,255,0.25)', // '#4C566A',
      //   1: 'rgba(255,255,255,0.5)',
      //   2: 'rgba(255,255,255,0.75)',
      //   3: 'rgba(255,195,195,1)',
      // },
      // legendItems: { // should contain items from stripColor
      //   null: 'no data',
      //   stepLegend: {
      //     0: 'targeted',
      //     1: 'nationwide',
      //   },
      //   indexLegend: {
      //     0: 'no measures',
      //     1: 'recommend closing',
      //     2: 'require closing on some levels',
      //     3: 'require closing all levels',
      //   },
      // },
      // chartTitle: 'School closing measures',
      axis: true // markDates: ['2019-12-31', '2020-03-25', '2020-07-07'], // yyyy-mm-dddd

    });

    _defineProperty(_assertThisInitialized(_this), "defaultData", defaultData);

    return _this;
  }

  _createClass(CountryLockdownIndicatorStrips, [{
    key: "draw",
    value: function draw() {
      var allData = this.data();
      var props = this.props();
      var node = this.selection().node(); // date formatters

      var locale = new D3Locale(props.locale);
      var dateFormat = locale.formatTime('%b %e'); // get date range to be plotted

      if (!props.dateSeries) {
        props.dateSeries = [dateParse(allData[0].date), dateParse(allData[allData.length - 1].date)];
      }

      var dateSeries = getDates(props.dateSeries[0], props.dateSeries[1]); // console.log((dateSeries));
      // set data for the date series

      var data = dateSeries.map(function (d) {
        var match = allData.find(function (e) {
          return e[props.dataParams.date] === formatDateObject(d);
        });

        if (match) {
          return match;
        } else {
          var obj = {};
          obj[props.dataParams.date] = formatDateObject(d);
          return obj;
        }
      }); // console.log(data);
      // get country details from AtlasClient from ISO-2
      // props.country = atlastClient.getCountry(props.countryISO2);

      var _node$getBoundingClie = node.getBoundingClientRect(),
          width = _node$getBoundingClie.width;

      var transition = d3.transition().duration(750);
      var stripheight = props.legendItems ? props.stripHeight - props.margin.top : props.height - props.margin.top - props.margin.bottom; // set scales

      var xScale = d3.scaleBand().domain(dateSeries).range([0, width - props.margin.left - props.margin.right]).padding(0);
      var yScale = d3.scaleLinear().domain([0, props.dataParams.steps - 1]).range([stripheight / props.dataParams.steps, stripheight]);
      var colorDomain = props.stripColor ? Object.keys(props.stripColor).map(function (d) {
        return +d;
      }) : d3.extent(data.map(function (d) {
        return d[props.dataParams.index];
      }));
      var colorRange = props.stripColor ? colorDomain.map(function (d) {
        return props.stripColor["".concat(d)];
      }) : ['#333333', '#cccccc'];
      var colorScale = d3.scaleLinear().domain(colorDomain).range(colorRange).interpolate(interpolateHcl); // main chart container

      var chartDiv = this.selection().appendSelect('div') // see docs in ./utils/d3.js
      .attr('class', 'CountryLockdownIndicatorStrips').style('width', "".concat(width, "px")) // .style('height', `${props.height}px`)
      .appendSelect('div').styles({
        'padding-top': "".concat(props.margin.top, "px"),
        'padding-right': "".concat(props.margin.right, "px"),
        'padding-bottom': "".concat(props.margin.bottom, "px"),
        'padding-left': "".concat(props.margin.left, "px")
      }); // make bars

      var bars = chartDiv.appendSelect('div.bars-container').styles({
        display: 'flex',
        'align-items': "".concat(props.valign),
        'justify-content': 'center'
      }).selectAll('.bar').data(data, function (d, i) {
        return d[props.dataParams.date];
      }); // for smooth data updation

      bars.enter().append('div').attr('class', function (d) {
        return "bar ".concat(d[props.dataParams.date]);
      }).style('display', 'inline-block').style('height', function (d) {
        if (isNaN(d[props.dataParams.stepValue])) {
          return yScale(0) + 'px';
        } else {
          return yScale(d[props.dataParams.stepValue]) + 'px';
        }
      }).style('width', xScale.bandwidth() + 'px').style('background', function (d) {
        var val = parseFloat(d[props.dataParams.index]);
        return val !== null && !isNaN(val) ? colorScale(val) : props.baseColor;
      }).merge(bars).transition(transition).style('display', 'inline-block').style('height', function (d) {
        if (isNaN(d[props.dataParams.stepValue])) {
          return yScale(0) + 'px';
        } else {
          return yScale(d[props.dataParams.stepValue]) + 'px';
        }
      }).style('width', xScale.bandwidth() + 'px').style('background', function (d) {
        var val = parseFloat(d[props.dataParams.index]);
        return val !== null && !isNaN(val) ? colorScale(val) : props.baseColor;
      });
      bars.exit().transition(transition).attr('height', 0).remove(); // add axis
      // console.log(xScale(dateParse('2020-07-07')));

      if (props.axis) {
        var stepChange = [];

        if (props.dataParams.steps > 1) {
          var _loop = function _loop(i) {
            var match = data.find(function (e) {
              return e[props.dataParams.stepValue] === i;
            });

            if (match) {
              stepChange.push(dateParse(match[props.dataParams.date]));
            }
          };

          for (var i = 1; i < props.dataParams.steps; i++) {
            _loop(i);
          }
        }

        var markDates = props.markDates ? props.markDates.map(function (d) {
          if (!isNaN(xScale(dateParse(d)))) {
            return dateParse(d);
          }
        }).filter(function (d) {
          return !isNaN(d);
        }) : [dateSeries[0], dateSeries.slice(-1)[0]].concat(stepChange); // console.log(markDates);

        var xAxis = chartDiv.appendSelect('svg').attr('width', width - props.margin.left - props.margin.right).attr('height', 25).attr('transform', 'translate(0, 0)');
        xAxis.appendSelect('g.axis-x').attr('class', 'axis-x axis').transition(transition).attr('transform', 'translate(0,0)').call(d3.axisBottom(xScale).tickValues(markDates).tickFormat(dateFormat));
      } // add chart title


      if (props.chartTitle) {
        chartDiv.appendSelect('div.chart-title').attr('class', 'font-display chart-title').html("<h6>".concat(props.chartTitle, "</h6>"));
      } // chart legend


      if (props.legendItems) {
        // make legend
        var legendDiv = chartDiv.appendSelect('div.legend-container');

        if (props.legendItems.indexLegend) {
          var indexLegendItems = [];
          Object.keys(props.legendItems.indexLegend).forEach(function (d) {
            var item = {
              key: d,
              value: props.legendItems.indexLegend[d]
            };
            indexLegendItems.push(item);
          });

          if (props.legendItems["null"]) {
            indexLegendItems.unshift({
              key: 'null',
              value: props.legendItems["null"]
            });
          } // const legendWidth = (width - props.margin.right - props.margin.left) / indexLegendItems.length;


          var indexLegend = legendDiv.appendSelect('div.legend.indexLegend').selectAll('.legend-item').data(indexLegendItems); // for smooth data updation

          indexLegend.enter().append('div').attr('class', 'legend-item').style('display', 'flex').style('margin', function (d) {
            if (d.key === 'null') {
              return '1rem 0';
            }
          }) // .style('width', `${legendWidth}px`)
          .html(function (d) {
            var color = +d.key !== null && !isNaN(+d.key) ? colorScale(+d.key) : props.baseColor;
            return "<span style=\"width:1.5rem;min-width:1rem; min-height:1rem; background: ".concat(color, "\"></span> <p style=\"margin:0 0 0 0.5rem;\">").concat(d.value, "</p>");
          }).merge(indexLegend).style('display', 'flex') // .style('width', `${legendWidth}px`)
          .html(function (d) {
            var color = +d.key !== null && !isNaN(+d.key) ? colorScale(+d.key) : props.baseColor;
            return "<span style=\"width:1.5rem; min-width:1rem; min-height:1rem; background: ".concat(color, "\"></span> <p style=\"margin:0 0 0 0.5rem;\">").concat(d.value, "</p>");
          });
          indexLegend.exit().transition(transition).remove();
        }

        if (props.legendItems.stepLegend) {
          // step legend stuff
          var stepLegendItems = [];
          Object.keys(props.legendItems.stepLegend).forEach(function (d) {
            var item = {
              key: d,
              value: props.legendItems.stepLegend[d]
            };
            stepLegendItems.push(item);
          }); // console.log(stepLegendItems);

          var stepLegend = legendDiv.appendSelect('div.legend.stepLegend').style('align-items', "".concat(props.valign)).selectAll('.legend-item').data(stepLegendItems); // for smooth data updation

          stepLegend.enter().append('div').attr('class', 'legend-item').style('display', 'flex').style('flex-flow', 'column-reverse') // .style('width', `${legendWidth}px`)
          .html(function (d, i) {
            var stepSize = stripheight / stepLegendItems.length;
            return "<span style=\"width:100%; height:".concat((+d.key + 1) * stepSize, "px; background-color:").concat(props.baseColor, ";\"></span><p style=\"margin:0 0.5rem 0.5rem 0.5rem;\">").concat(d.value, "</p>");
          }).merge(stepLegend).style('display', 'flex').style('flex-flow', 'column-reverse') // .style('width', `${legendWidth}px`)
          .html(function (d, i) {
            var stepSize = stripheight / stepLegendItems.length;
            return "<span style=\"width:100%; height:".concat((+d.key + 1) * stepSize, "px; background-color:").concat(props.baseColor, ";\"></span><p style=\"margin:0 0.5rem 0.5rem 0.5rem;\">").concat(d.value, "</p>");
          });
          stepLegend.exit().transition(transition).remove();
        }
      }

      return this;
    }
  }]);

  return CountryLockdownIndicatorStrips;
}(ChartComponent); // console.log(this.defaultProps);

export default CountryLockdownIndicatorStrips;
