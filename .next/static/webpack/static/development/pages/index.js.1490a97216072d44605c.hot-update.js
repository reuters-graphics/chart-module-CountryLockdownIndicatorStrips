webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // see docs on https://github.com/reuters-graphics/graphics-atlas-client\n// import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';\n// const atlastClient = new AtlasMetadataClient();\n\nvar dateParse = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeParse('%Y-%m-%d');\nvar dateFormat = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeFormat('%b %e');\nvar dateFormat_tt = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeFormat('%B %e');\nvar numberFormat_tt = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].format(',');\n\nvar CountryLockdownIndicatorStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryLockdownIndicatorStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryLockdownIndicatorStrips);\n\n  function CountryLockdownIndicatorStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryLockdownIndicatorStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      dataParams: {\n        date: 'date',\n        index: 'c1',\n        steps: 2,\n        // stepValue = 0, 1...\n        stepValue: 'flag'\n      },\n      height: 50,\n      margin: {\n        top: 10,\n        right: 10,\n        bottom: 10,\n        left: 10\n      },\n      valign: 'center',\n      // start, center, baseline\n      baseColor: '#ECEFF4',\n      stripColor: {\n        0: '#ECEFF4',\n        1: '#d1eeea',\n        2: '#ffe47f',\n        3: '#a50f15'\n      },\n      legendItems: {\n        // should contain items from stripColor\n        'null': 'No data',\n        'stepLegend': {\n          0: 'targeted',\n          1: 'nationwide'\n        },\n        0: 'no measures',\n        1: 'recommend closing',\n        2: 'require closing on some levels',\n        3: 'require closing all levels'\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryLockdownIndicatorStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node(); // get country details from AtlasClient from ISO-2\n      // props.country = atlastClient.getCountry(props.countryISO2);\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // main chart container\n\n      var chartDiv = this.selection().appendSelect('div') // see docs in ./utils/d3.js\n      .attr('class', \"CountryLockdownIndicatorStrips\").style('width', \"\".concat(width, \"px\")).style('height', \"\".concat(props.height, \"px\")).appendSelect('div').style('transform', \"translate(\".concat(props.margin.left, \"px, \").concat(props.margin.top, \"px)\")); // set scales\n\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, props.dataParams.steps - 1]).range([props.height - props.margin.bottom, props.margin.top]);\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleBand().domain(data.map(function (d) {\n        return dateParse(d[props.dataParams.date]);\n      })).range([props.margin.left, width - props.margin.right]).padding(0);\n      var colorDomain = props.stripColor ? Object.keys(props.stripColor).map(function (d) {\n        return +d;\n      }) : _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(data.map(function (d) {\n        return d[props.dataParams.index];\n      }));\n      var colorRange = props.stripColor ? colorDomain.map(function (d) {\n        return props.stripColor[\"\".concat(d)];\n      }) : ['#cccccc', '#333333'];\n      var colorScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(colorDomain).range(colorRange).interpolate(d3__WEBPACK_IMPORTED_MODULE_10__[\"interpolateHcl\"]); // make bars\n\n      var bars = chartDiv.appendSelect('div.bars-container').style('display', 'flex').style('align-items', \"\".concat(props.valign)).selectAll('.bar').data(data, function (d, i) {\n        return d[props.dataParams.date];\n      }); // for smooth data updation\n\n      bars.enter().append('div').attr('class', function (d) {\n        return \"bar \".concat(d[props.dataParams.date]);\n      }).style('display', 'inline-block').style('height', function (d) {\n        var stepSize = (props.height - props.margin.top - props.margin.bottom) / props.dataParams.steps;\n        var step = d[props.dataParams.stepValue] + 1;\n        return d[props.dataParams.index] ? step ? step * stepSize + 'px' : stepSize + 'px' : stepSize + 'px';\n      }).style('width', xScale.bandwidth() + 'px').style('background', function (d) {\n        var val = parseFloat(d[props.dataParams.index]);\n        return val !== null && !isNaN(val) ? colorScale(val) : props.baseColor;\n      }).merge(bars).transition(transition).style('display', 'inline-block').style('height', function (d) {\n        var stepSize = (props.height - props.margin.top - props.margin.bottom) / props.dataParams.steps;\n        var step = d[props.dataParams.stepValue] + 1;\n        return d[props.dataParams.index] ? step ? step * stepSize + 'px' : stepSize + 'px' : stepSize + 'px';\n      }).style('width', xScale.bandwidth() + 'px').style('background', function (d) {\n        var val = parseFloat(d[props.dataParams.index]);\n        console.log(val === null || isNaN(val));\n        return val !== null && !isNaN(val) ? colorScale(val) : props.baseColor;\n      });\n      bars.exit().transition(transition).attr('height', 0).remove();\n\n      if (props.legendItems) {} // make legend\n\n\n      var legend = chartDiv.appendSelect('div.legend-container') // .style('display', 'flex')\n      // .style('align-items', `${props.valign}`)\n      .selectAll('.legend-div').data([props.legendItems]); // for smooth data updation\n\n      console.log(legend.data);\n      return this;\n    }\n  }]);\n\n  return CountryLockdownIndicatorStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]); // console.log(this.defaultProps);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryLockdownIndicatorStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiZGF0ZVBhcnNlIiwiZDMiLCJ0aW1lUGFyc2UiLCJkYXRlRm9ybWF0IiwidGltZUZvcm1hdCIsImRhdGVGb3JtYXRfdHQiLCJudW1iZXJGb3JtYXRfdHQiLCJmb3JtYXQiLCJDb3VudHJ5TG9ja2Rvd25JbmRpY2F0b3JTdHJpcHMiLCJkYXRhUGFyYW1zIiwiZGF0ZSIsImluZGV4Iiwic3RlcHMiLCJzdGVwVmFsdWUiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ2YWxpZ24iLCJiYXNlQ29sb3IiLCJzdHJpcENvbG9yIiwibGVnZW5kSXRlbXMiLCJkZWZhdWx0RGF0YSIsImRhdGEiLCJwcm9wcyIsIm5vZGUiLCJzZWxlY3Rpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNoYXJ0RGl2IiwiYXBwZW5kU2VsZWN0IiwiYXR0ciIsInN0eWxlIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInhTY2FsZSIsInNjYWxlQmFuZCIsIm1hcCIsImQiLCJwYWRkaW5nIiwiY29sb3JEb21haW4iLCJPYmplY3QiLCJrZXlzIiwiZXh0ZW50IiwiY29sb3JSYW5nZSIsImNvbG9yU2NhbGUiLCJpbnRlcnBvbGF0ZSIsImludGVycG9sYXRlSGNsIiwiYmFycyIsInNlbGVjdEFsbCIsImkiLCJlbnRlciIsImFwcGVuZCIsInN0ZXBTaXplIiwic3RlcCIsImJhbmR3aWR0aCIsInZhbCIsInBhcnNlRmxvYXQiLCJpc05hTiIsIm1lcmdlIiwiY29uc29sZSIsImxvZyIsImV4aXQiLCJyZW1vdmUiLCJsZWdlbmQiLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFDQTs7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QXVELGVBQU8sQ0FBQ0MsR0FBUixDQUFhTCxHQUFHLEtBQUssSUFBVCxJQUFtQkUsS0FBSyxDQUFDRixHQUFELENBQXBDO0FBQ0EsZUFBUUEsR0FBRyxLQUFLLElBQVQsSUFBa0IsQ0FBRUUsS0FBSyxDQUFDRixHQUFELENBQXpCLEdBQWtDWCxVQUFVLENBQUNXLEdBQUQsQ0FBNUMsR0FBb0RwQyxLQUFLLENBQUNMLFNBQWpFO0FBQ0gsT0ExQkw7QUE0QkFpQyxVQUFJLENBQUNjLElBQUwsR0FDS3JDLFVBREwsQ0FDZ0JBLFVBRGhCLEVBRUtJLElBRkwsQ0FFVSxRQUZWLEVBRW9CLENBRnBCLEVBR0trQyxNQUhMOztBQU1BLFVBQUkzQyxLQUFLLENBQUNILFdBQVYsRUFBdUIsQ0FFdEIsQ0F0RkUsQ0F1Rkg7OztBQUNBLFVBQU0rQyxNQUFNLEdBQUdyQyxRQUFRLENBQUNDLFlBQVQsQ0FBc0Isc0JBQXRCLEVBQ1g7QUFDQTtBQUZXLE9BR1ZxQixTQUhVLENBR0EsYUFIQSxFQUlWOUIsSUFKVSxDQUlMLENBQUNDLEtBQUssQ0FBQ0gsV0FBUCxDQUpLLENBQWYsQ0F4RkcsQ0E0RjZCOztBQUVoQzJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRyxNQUFNLENBQUM3QyxJQUFuQjtBQUdBLGFBQU8sSUFBUDtBQUNIOzs7O0VBeEl3QzhDLDRELEdBMEk3Qzs7O0FBQ2UvRCw2RkFBZiIsImZpbGUiOiIuL3NyYy9saWIvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnLi9iYXNlL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCBkMyBmcm9tICcuL3V0aWxzL2QzJztcbmltcG9ydCBkZWZhdWx0RGF0YSBmcm9tICcuL2RlZmF1bHREYXRhLmpzb24nO1xuaW1wb3J0IHsgaW50ZXJwb2xhdGUsIGludGVycG9sYXRlSHNsLCBpbnRlcnBvbGF0ZUhjbCB9IGZyb20gJ2QzJztcbi8vIHNlZSBkb2NzIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9yZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudFxuLy8gaW1wb3J0IEF0bGFzTWV0YWRhdGFDbGllbnQgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50Jztcbi8vIGNvbnN0IGF0bGFzdENsaWVudCA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG5cbmNvbnN0IGRhdGVQYXJzZSA9IGQzLnRpbWVQYXJzZSgnJVktJW0tJWQnKTtcbmNvbnN0IGRhdGVGb3JtYXQgPSBkMy50aW1lRm9ybWF0KCclYiAlZScpO1xuY29uc3QgZGF0ZUZvcm1hdF90dCA9IGQzLnRpbWVGb3JtYXQoJyVCICVlJyk7XG5jb25zdCBudW1iZXJGb3JtYXRfdHQgPSBkMy5mb3JtYXQoJywnKTtcblxuY2xhc3MgQ291bnRyeUxvY2tkb3duSW5kaWNhdG9yU3RyaXBzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICAgIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZGF0YVBhcmFtczoge1xuICAgICAgICAgICAgZGF0ZTogJ2RhdGUnLFxuICAgICAgICAgICAgaW5kZXg6ICdjMScsXG4gICAgICAgICAgICBzdGVwczogMiwgLy8gc3RlcFZhbHVlID0gMCwgMS4uLlxuICAgICAgICAgICAgc3RlcFZhbHVlOiAnZmxhZycsXG4gICAgICAgIH0sXG4gICAgICAgIGhlaWdodDogNTAsXG4gICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgICAgIHJpZ2h0OiAxMCxcbiAgICAgICAgICAgIGJvdHRvbTogMTAsXG4gICAgICAgICAgICBsZWZ0OiAxMCxcbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWduOiAnY2VudGVyJywgLy8gc3RhcnQsIGNlbnRlciwgYmFzZWxpbmVcbiAgICAgICAgYmFzZUNvbG9yOiAnI0VDRUZGNCcsXG4gICAgICAgIHN0cmlwQ29sb3I6IHtcbiAgICAgICAgICAgIDA6ICcjRUNFRkY0JyxcbiAgICAgICAgICAgIDE6ICcjZDFlZWVhJyxcbiAgICAgICAgICAgIDI6ICcjZmZlNDdmJyxcbiAgICAgICAgICAgIDM6ICcjYTUwZjE1JyxcbiAgICAgICAgfSxcbiAgICAgICAgbGVnZW5kSXRlbXM6IHsgLy8gc2hvdWxkIGNvbnRhaW4gaXRlbXMgZnJvbSBzdHJpcENvbG9yXG4gICAgICAgICAgICAnbnVsbCc6ICdObyBkYXRhJyxcbiAgICAgICAgICAgICdzdGVwTGVnZW5kJzoge1xuICAgICAgICAgICAgICAgIDA6ICd0YXJnZXRlZCcsXG4gICAgICAgICAgICAgICAgMTogJ25hdGlvbndpZGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMDogJ25vIG1lYXN1cmVzJyxcbiAgICAgICAgICAgIDE6ICdyZWNvbW1lbmQgY2xvc2luZycsXG4gICAgICAgICAgICAyOiAncmVxdWlyZSBjbG9zaW5nIG9uIHNvbWUgbGV2ZWxzJyxcbiAgICAgICAgICAgIDM6ICdyZXF1aXJlIGNsb3NpbmcgYWxsIGxldmVscydcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBkZWZhdWx0RGF0YSA9IGRlZmF1bHREYXRhO1xuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YSgpO1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VsZWN0aW9uKCkubm9kZSgpO1xuXG4gICAgICAgIC8vIGdldCBjb3VudHJ5IGRldGFpbHMgZnJvbSBBdGxhc0NsaWVudCBmcm9tIElTTy0yXG4gICAgICAgIC8vIHByb3BzLmNvdW50cnkgPSBhdGxhc3RDbGllbnQuZ2V0Q291bnRyeShwcm9wcy5jb3VudHJ5SVNPMik7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgIH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb24gPSBkMy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbig3NTApO1xuXG4gICAgICAgIC8vIG1haW4gY2hhcnQgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IGNoYXJ0RGl2ID0gdGhpcy5zZWxlY3Rpb24oKVxuICAgICAgICAgICAgLmFwcGVuZFNlbGVjdCgnZGl2JykgLy8gc2VlIGRvY3MgaW4gLi91dGlscy9kMy5qc1xuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgYENvdW50cnlMb2NrZG93bkluZGljYXRvclN0cmlwc2ApXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywgYCR7d2lkdGh9cHhgKVxuICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBgJHtwcm9wcy5oZWlnaHR9cHhgKVxuICAgICAgICAgICAgLmFwcGVuZFNlbGVjdCgnZGl2JylcbiAgICAgICAgICAgIC5zdHlsZSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3Byb3BzLm1hcmdpbi5sZWZ0fXB4LCAke3Byb3BzLm1hcmdpbi50b3B9cHgpYCk7XG5cbiAgICAgICAgLy8gc2V0IHNjYWxlc1xuICAgICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFswLCBwcm9wcy5kYXRhUGFyYW1zLnN0ZXBzIC0gMV0pXG4gICAgICAgICAgICAucmFuZ2UoW3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b20sIHByb3BzLm1hcmdpbi50b3BdKTtcblxuICAgICAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgICAgICAgLmRvbWFpbihkYXRhLm1hcChkID0+IGRhdGVQYXJzZShkW3Byb3BzLmRhdGFQYXJhbXMuZGF0ZV0pKSlcbiAgICAgICAgICAgIC5yYW5nZShbcHJvcHMubWFyZ2luLmxlZnQsIHdpZHRoIC0gcHJvcHMubWFyZ2luLnJpZ2h0XSlcbiAgICAgICAgICAgIC5wYWRkaW5nKDApO1xuXG4gICAgICAgIGNvbnN0IGNvbG9yRG9tYWluID0gcHJvcHMuc3RyaXBDb2xvciA/IChPYmplY3Qua2V5cyhwcm9wcy5zdHJpcENvbG9yKSkubWFwKGQgPT4gK2QpIDogZDMuZXh0ZW50KGRhdGEubWFwKGQgPT4gZFtwcm9wcy5kYXRhUGFyYW1zLmluZGV4XSkpO1xuXG4gICAgICAgIGNvbnN0IGNvbG9yUmFuZ2UgPSBwcm9wcy5zdHJpcENvbG9yID8gY29sb3JEb21haW4ubWFwKGQgPT4gcHJvcHMuc3RyaXBDb2xvcltgJHtkfWBdKSA6IFsnI2NjY2NjYycsICcjMzMzMzMzJ11cblxuICAgICAgICBjb25zdCBjb2xvclNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihjb2xvckRvbWFpbilcbiAgICAgICAgICAgIC5yYW5nZShjb2xvclJhbmdlKVxuICAgICAgICAgICAgLmludGVycG9sYXRlKGludGVycG9sYXRlSGNsKTtcblxuICAgICAgICAvLyBtYWtlIGJhcnNcbiAgICAgICAgY29uc3QgYmFycyA9IGNoYXJ0RGl2LmFwcGVuZFNlbGVjdCgnZGl2LmJhcnMtY29udGFpbmVyJylcbiAgICAgICAgICAgIC5zdHlsZSgnZGlzcGxheScsICdmbGV4JylcbiAgICAgICAgICAgIC5zdHlsZSgnYWxpZ24taXRlbXMnLCBgJHtwcm9wcy52YWxpZ259YClcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoJy5iYXInKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSwgKGQsIGkpID0+IGRbcHJvcHMuZGF0YVBhcmFtcy5kYXRlXSk7IC8vIGZvciBzbW9vdGggZGF0YSB1cGRhdGlvblxuXG4gICAgICAgIGJhcnMuZW50ZXIoKS5hcHBlbmQoJ2RpdicpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBkID0+IGBiYXIgJHtkW3Byb3BzLmRhdGFQYXJhbXMuZGF0ZV19YClcbiAgICAgICAgICAgIC5zdHlsZSgnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKVxuICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwU2l6ZSA9IChwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4udG9wIC0gcHJvcHMubWFyZ2luLmJvdHRvbSkgLyBwcm9wcy5kYXRhUGFyYW1zLnN0ZXBzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBkW3Byb3BzLmRhdGFQYXJhbXMuc3RlcFZhbHVlXSArIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRbcHJvcHMuZGF0YVBhcmFtcy5pbmRleF0gPyAoc3RlcCA/IHN0ZXAgKiBzdGVwU2l6ZSArICdweCcgOiBzdGVwU2l6ZSArICdweCcpIDogc3RlcFNpemUgKyAncHgnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCB4U2NhbGUuYmFuZHdpZHRoKCkgKyAncHgnKVxuICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IHBhcnNlRmxvYXQoZFtwcm9wcy5kYXRhUGFyYW1zLmluZGV4XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh2YWwgIT09IG51bGwpICYmICEoaXNOYU4odmFsKSkgPyBjb2xvclNjYWxlKHZhbCkgOiBwcm9wcy5iYXNlQ29sb3I7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1lcmdlKGJhcnMpXG4gICAgICAgICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpXG4gICAgICAgICAgICAuc3R5bGUoJ2hlaWdodCcsIGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBTaXplID0gKHByb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi50b3AgLSBwcm9wcy5tYXJnaW4uYm90dG9tKSAvIHByb3BzLmRhdGFQYXJhbXMuc3RlcHM7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RlcCA9IGRbcHJvcHMuZGF0YVBhcmFtcy5zdGVwVmFsdWVdICsgMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZFtwcm9wcy5kYXRhUGFyYW1zLmluZGV4XSA/IChzdGVwID8gc3RlcCAqIHN0ZXBTaXplICsgJ3B4JyA6IHN0ZXBTaXplICsgJ3B4JykgOiBzdGVwU2l6ZSArICdweCc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsIHhTY2FsZS5iYW5kd2lkdGgoKSArICdweCcpXG4gICAgICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCBkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gcGFyc2VGbG9hdChkW3Byb3BzLmRhdGFQYXJhbXMuaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygodmFsID09PSBudWxsKSB8fCAoaXNOYU4odmFsKSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuICh2YWwgIT09IG51bGwpICYmICEoaXNOYU4odmFsKSkgPyBjb2xvclNjYWxlKHZhbCkgOiBwcm9wcy5iYXNlQ29sb3I7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBiYXJzLmV4aXQoKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgICAgICAgLnJlbW92ZSgpO1xuXG5cbiAgICAgICAgaWYgKHByb3BzLmxlZ2VuZEl0ZW1zKSB7XG5cbiAgICAgICAgfVxuICAgICAgICAvLyBtYWtlIGxlZ2VuZFxuICAgICAgICBjb25zdCBsZWdlbmQgPSBjaGFydERpdi5hcHBlbmRTZWxlY3QoJ2Rpdi5sZWdlbmQtY29udGFpbmVyJylcbiAgICAgICAgICAgIC8vIC5zdHlsZSgnZGlzcGxheScsICdmbGV4JylcbiAgICAgICAgICAgIC8vIC5zdHlsZSgnYWxpZ24taXRlbXMnLCBgJHtwcm9wcy52YWxpZ259YClcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoJy5sZWdlbmQtZGl2JylcbiAgICAgICAgICAgIC5kYXRhKFtwcm9wcy5sZWdlbmRJdGVtc10pOyAvLyBmb3Igc21vb3RoIGRhdGEgdXBkYXRpb25cblxuICAgICAgICBjb25zb2xlLmxvZyhsZWdlbmQuZGF0YSlcblxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbi8vIGNvbnNvbGUubG9nKHRoaXMuZGVmYXVsdFByb3BzKTtcbmV4cG9ydCBkZWZhdWx0IENvdW50cnlMb2NrZG93bkluZGljYXRvclN0cmlwczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})