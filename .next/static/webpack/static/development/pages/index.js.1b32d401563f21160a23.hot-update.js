webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n // see docs on https://github.com/reuters-graphics/graphics-atlas-client\n\n\n\nvar atlastClient = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_10___default.a();\nvar dateParse = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeParse('%Y-%m-%d');\nvar dateFormat = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeFormat('%b %e');\nvar dateFormat_tt = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeFormat('%B %e');\nvar numberFormat_tt = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].format(',');\n\nvar CountryLockdownIndicatorStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryLockdownIndicatorStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryLockdownIndicatorStrips);\n\n  function CountryLockdownIndicatorStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryLockdownIndicatorStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      locale: 'en',\n      countryISO2: 'IN',\n      dataParams: {\n        date: 'date',\n        index: 'c1',\n        steps: 2,\n        // stepValue = 0, 1...\n        stepValue: 'flag'\n      },\n      height: 50,\n      margin: {\n        top: 10,\n        right: 10,\n        bottom: 10,\n        left: 10\n      },\n      valign: 'center',\n      // start, center, baseline\n      baseColor: '#ECEFF4',\n      stripColor: {\n        0: '#ECEFF4',\n        1: '#d1eeea',\n        2: '#ffe47f',\n        3: '#a50f15'\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryLockdownIndicatorStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node(); // get country details from AtlasClient from ISO-2\n\n      props.country = atlastClient.getCountry(props.countryISO2);\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // main chart container\n\n      var chartDiv = this.selection().appendSelect('div') // see docs in ./utils/d3.js\n      .attr('class', 'CountryLockdownIndicatorStrips').style('width', \"\".concat(width, \"px\")).style('height', \"\".concat(props.height, \"px\")).appendSelect('div').style('transform', \"translate(\".concat(props.margin.left, \"px, \").concat(props.margin.top, \"px)\")); // set scales\n\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, props.dataParams.steps - 1]).range([props.height - props.margin.bottom, props.margin.top]);\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleBand().domain(data.map(function (d) {\n        return dateParse(d[props.dataParams.date]);\n      })).range([props.margin.left, width - props.margin.right]).padding(0);\n      var colorDomain = props.stripColor ? Object.keys(props.stripColor).map(function (d) {\n        return +d;\n      }) : _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(data.map(function (d) {\n        return d[props.dataParams.index];\n      }));\n      var colorRange = props.stripColor ? colorDomain.map(function (d) {\n        return props.stripColor[\"\".concat(d)];\n      }) : ['#cccccc', '#333333'];\n      var colorScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(colorDomain).range(colorRange).interpolate(d3__WEBPACK_IMPORTED_MODULE_11__[\"interpolateHcl\"]); // make bars\n\n      var bars = chartDiv.appendSelect('div.bars-container').style('display', 'flex').style('align-items', \"\".concat(props.valign)).selectAll('.bar').data(data, function (d, i) {\n        return d[props.dataParams.date];\n      }); // for smooth data updation\n\n      bars.enter().append('div').attr('class', function (d) {\n        return \"bar \".concat(d[props.dataParams.date]);\n      }).style('display', 'inline-block').style('height', function (d) {\n        var stepSize = (props.height - props.margin.top - props.margin.bottom) / props.dataParams.steps;\n        var step = d[props.dataParams.stepValue] + 1;\n        return d[props.dataParams.index] ? step ? step * stepSize + 'px' : stepSize + 'px' : stepSize + 'px';\n      }).style('width', xScale.bandwidth() + 'px').style('background', function (d) {\n        var val = parseFloat(d[props.dataParams.index]);\n        return val !== null && !isNaN(val) ? colorScale(val) : props.baseColor;\n      }).merge(bars).transition(transition).style('display', 'inline-block').style('height', function (d) {\n        var stepSize = (props.height - props.margin.top - props.margin.bottom) / props.dataParams.steps;\n        var step = d[props.dataParams.stepValue] + 1;\n        return d[props.dataParams.index] ? step ? step * stepSize + 'px' : stepSize + 'px' : stepSize + 'px';\n      }).style('width', xScale.bandwidth() + 'px').style('background', function (d) {\n        var val = parseFloat(d[props.dataParams.index]);\n        console.log(val === null || isNaN(val));\n        return val !== null && !isNaN(val) ? colorScale(val) : props.baseColor;\n      });\n      bars.exit().transition(transition).attr('height', 0).remove(); // const circles = g.selectAll('circle')\n      //   .data(data, (d, i) => d[props.dataParams.date]);\n      // circles\n      //   .style('fill', props.fill)\n      //   .style('stroke', props.stroke);\n      // circles.enter().append('circle')\n      //   .style('fill', props.fill)\n      //   .style('stroke', props.stroke)\n      //   .style('stroke-width', props.strokeWidth)\n      //   .attr('cy', props.height / 2)\n      //   .attr('cx', (d, i) =>\n      //     data.slice(0, i).reduce((a, b) => a + b, 0) + (d / 2)\n      //   )\n      //   .merge(circles)\n      //   .transition(transition)\n      //   .attr('cx', (d, i) =>\n      //     data.slice(0, i).reduce((a, b) => a + b, 0) + (d / 2)\n      //   )\n      //   .attr('r', d => d / 2);\n      // circles.exit()\n      //   .transition(transition)\n      //   .attr('r', 0)\n      //   .remove();\n\n      return this;\n    }\n  }]);\n\n  return CountryLockdownIndicatorStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]); // console.log(this.defaultProps);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryLockdownIndicatorStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiYXRsYXN0Q2xpZW50IiwiQXRsYXNNZXRhZGF0YUNsaWVudCIsImRhdGVQYXJzZSIsImQzIiwidGltZVBhcnNlIiwiZGF0ZUZvcm1hdCIsInRpbWVGb3JtYXQiLCJkYXRlRm9ybWF0X3R0IiwibnVtYmVyRm9ybWF0X3R0IiwiZm9ybWF0IiwiQ291bnRyeUxvY2tkb3duSW5kaWNhdG9yU3RyaXBzIiwibG9jYWxlIiwiY291bnRyeUlTTzIiLCJkYXRhUGFyYW1zIiwiZGF0ZSIsImluZGV4Iiwic3RlcHMiLCJzdGVwVmFsdWUiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ2YWxpZ24iLCJiYXNlQ29sb3IiLCJzdHJpcENvbG9yIiwiZGVmYXVsdERhdGEiLCJkYXRhIiwicHJvcHMiLCJub2RlIiwic2VsZWN0aW9uIiwiY291bnRyeSIsImdldENvdW50cnkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNoYXJ0RGl2IiwiYXBwZW5kU2VsZWN0IiwiYXR0ciIsInN0eWxlIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInhTY2FsZSIsInNjYWxlQmFuZCIsIm1hcCIsImQiLCJwYWRkaW5nIiwiY29sb3JEb21haW4iLCJPYmplY3QiLCJrZXlzIiwiZXh0ZW50IiwiY29sb3JSYW5nZSIsImNvbG9yU2NhbGUiLCJpbnRlcnBvbGF0ZSIsImludGVycG9sYXRlSGNsIiwiYmFycyIsInNlbGVjdEFsbCIsImkiLCJlbnRlciIsImFwcGVuZCIsInN0ZXBTaXplIiwic3RlcCIsImJhbmR3aWR0aCIsInZhbCIsInBhcnNlRmxvYXQiLCJpc05hTiIsIm1lcmdlIiwiY29uc29sZSIsImxvZyIsImV4aXQiLCJyZW1vdmUiLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQSxJQUFNQSxZQUFZLEdBQUcsSUFBSUMsK0VBQUosRUFBckI7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLGlEQUFFLENBQUNDLFNBQUgsQ0FBYSxVQUFiLENBQWxCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHRixpREFBRSxDQUFDRyxVQUFILENBQWMsT0FBZCxDQUFuQjtBQUNBLElBQU1DLGFBQWEsR0FBR0osaURBQUUsQ0FBQ0csVUFBSCxDQUFjLE9BQWQsQ0FBdEI7QUFDQSxJQUFNRSxlQUFlLEdBQUdMLGlEQUFFLENBQUNNLE1BQUgsQ0FBVSxHQUFWLENBQXhCOztJQUVNQyw4Qjs7Ozs7Ozs7Ozs7Ozs7Ozt1TkFDYTtBQUNYQyxZQUFNLEVBQUUsSUFERztBQUVYQyxpQkFBVyxFQUFFLElBRkY7QUFHWEMsZ0JBQVUsRUFBRTtBQUNSQyxZQUFJLEVBQUUsTUFERTtBQUVSQyxhQUFLLEVBQUUsSUFGQztBQUdSQyxhQUFLLEVBQUUsQ0FIQztBQUdFO0FBQ1ZDLGlCQUFTLEVBQUU7QUFKSCxPQUhEO0FBU1hDLFlBQU0sRUFBRSxFQVRHO0FBVVhDLFlBQU0sRUFBRTtBQUNKQyxXQUFHLEVBQUUsRUFERDtBQUVKQyxhQUFLLEVBQUUsRUFGSDtBQUdKQyxjQUFNLEVBQUUsRUFISjtBQUlKQyxZQUFJLEVBQUU7QUFKRixPQVZHO0FBZ0JYQyxZQUFNLEVBQUUsUUFoQkc7QUFnQk87QUFDbEJDLGVBQVMsRUFBRSxTQWpCQTtBQWtCWEMsZ0JBQVUsRUFBRTtBQUNSLFdBQUcsU0FESztBQUVSLFdBQUcsU0FGSztBQUdSLFdBQUcsU0FISztBQUlSLFdBQUc7QUFKSztBQWxCRCxLOztzTkEwQkRDLDhDOzs7Ozs7OzJCQUVQO0FBQ0gsVUFBTUMsSUFBSSxHQUFHLEtBQUtBLElBQUwsRUFBYjtBQUNBLFVBQU1DLEtBQUssR0FBRyxLQUFLQSxLQUFMLEVBQWQ7QUFDQSxVQUFNQyxJQUFJLEdBQUcsS0FBS0MsU0FBTCxHQUFpQkQsSUFBakIsRUFBYixDQUhHLENBS0g7O0FBQ0FELFdBQUssQ0FBQ0csT0FBTixHQUFnQmhDLFlBQVksQ0FBQ2lDLFVBQWIsQ0FBd0JKLEtBQUssQ0FBQ2pCLFdBQTlCLENBQWhCOztBQU5HLGtDQVVDa0IsSUFBSSxDQUFDSSxxQkFBTCxFQVZEO0FBQUEsVUFTQ0MsS0FURCx5QkFTQ0EsS0FURDs7QUFZSCxVQUFNQyxVQUFVLEdBQUdqQyxpREFBRSxDQUFDaUMsVUFBSCxHQUNkQyxRQURjLENBQ0wsR0FESyxDQUFuQixDQVpHLENBZUg7O0FBQ0EsVUFBTUMsUUFBUSxHQUFHLEtBQUtQLFNBQUwsR0FDWlEsWUFEWSxDQUNDLEtBREQsRUFDUTtBQURSLE9BRVpDLElBRlksQ0FFUCxPQUZPLEVBRUUsZ0NBRkYsRUFHWkMsS0FIWSxDQUdOLE9BSE0sWUFHTU4sS0FITixTQUlaTSxLQUpZLENBSU4sUUFKTSxZQUlPWixLQUFLLENBQUNYLE1BSmIsU0FLWnFCLFlBTFksQ0FLQyxLQUxELEVBTVpFLEtBTlksQ0FNTixXQU5NLHNCQU1vQlosS0FBSyxDQUFDVixNQUFOLENBQWFJLElBTmpDLGlCQU00Q00sS0FBSyxDQUFDVixNQUFOLENBQWFDLEdBTnpELFNBQWpCLENBaEJHLENBd0JIOztBQUNBLFVBQU1zQixNQUFNLEdBQUd2QyxpREFBRSxDQUFDd0MsV0FBSCxHQUNWQyxNQURVLENBQ0gsQ0FBQyxDQUFELEVBQUlmLEtBQUssQ0FBQ2hCLFVBQU4sQ0FBaUJHLEtBQWpCLEdBQXlCLENBQTdCLENBREcsRUFFVjZCLEtBRlUsQ0FFSixDQUFDaEIsS0FBSyxDQUFDWCxNQUFOLEdBQWVXLEtBQUssQ0FBQ1YsTUFBTixDQUFhRyxNQUE3QixFQUFxQ08sS0FBSyxDQUFDVixNQUFOLENBQWFDLEdBQWxELENBRkksQ0FBZjtBQUlBLFVBQU0wQixNQUFNLEdBQUczQyxpREFBRSxDQUFDNEMsU0FBSCxHQUNWSCxNQURVLENBQ0hoQixJQUFJLENBQUNvQixHQUFMLENBQVMsVUFBQUMsQ0FBQztBQUFBLGVBQUkvQyxTQUFTLENBQUMrQyxDQUFDLENBQUNwQixLQUFLLENBQUNoQixVQUFOLENBQWlCQyxJQUFsQixDQUFGLENBQWI7QUFBQSxPQUFWLENBREcsRUFFVitCLEtBRlUsQ0FFSixDQUFDaEIsS0FBSyxDQUFDVixNQUFOLENBQWFJLElBQWQsRUFBb0JZLEtBQUssR0FBR04sS0FBSyxDQUFDVixNQUFOLENBQWFFLEtBQXpDLENBRkksRUFHVjZCLE9BSFUsQ0FHRixDQUhFLENBQWY7QUFLQSxVQUFNQyxXQUFXLEdBQUd0QixLQUFLLENBQUNILFVBQU4sR0FBb0IwQixNQUFNLENBQUNDLElBQVAsQ0FBWXhCLEtBQUssQ0FBQ0gsVUFBbEIsQ0FBRCxDQUFnQ3NCLEdBQWhDLENBQW9DLFVBQUFDLENBQUM7QUFBQSxlQUFJLENBQUNBLENBQUw7QUFBQSxPQUFyQyxDQUFuQixHQUFrRTlDLGlEQUFFLENBQUNtRCxNQUFILENBQVUxQixJQUFJLENBQUNvQixHQUFMLENBQVMsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ3BCLEtBQUssQ0FBQ2hCLFVBQU4sQ0FBaUJFLEtBQWxCLENBQUw7QUFBQSxPQUFWLENBQVYsQ0FBdEY7QUFFQSxVQUFNd0MsVUFBVSxHQUFHMUIsS0FBSyxDQUFDSCxVQUFOLEdBQW1CeUIsV0FBVyxDQUFDSCxHQUFaLENBQWdCLFVBQUFDLENBQUM7QUFBQSxlQUFJcEIsS0FBSyxDQUFDSCxVQUFOLFdBQW9CdUIsQ0FBcEIsRUFBSjtBQUFBLE9BQWpCLENBQW5CLEdBQW9FLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FBdkY7QUFFQSxVQUFNTyxVQUFVLEdBQUdyRCxpREFBRSxDQUFDd0MsV0FBSCxHQUNkQyxNQURjLENBQ1BPLFdBRE8sRUFFZE4sS0FGYyxDQUVSVSxVQUZRLEVBR2RFLFdBSGMsQ0FHRkMsa0RBSEUsQ0FBbkIsQ0F0Q0csQ0EyQ0g7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHckIsUUFBUSxDQUFDQyxZQUFULENBQXNCLG9CQUF0QixFQUNSRSxLQURRLENBQ0YsU0FERSxFQUNTLE1BRFQsRUFFUkEsS0FGUSxDQUVGLGFBRkUsWUFFZ0JaLEtBQUssQ0FBQ0wsTUFGdEIsR0FHUm9DLFNBSFEsQ0FHRSxNQUhGLEVBSVJoQyxJQUpRLENBSUhBLElBSkcsRUFJRyxVQUFDcUIsQ0FBRCxFQUFJWSxDQUFKO0FBQUEsZUFBVVosQ0FBQyxDQUFDcEIsS0FBSyxDQUFDaEIsVUFBTixDQUFpQkMsSUFBbEIsQ0FBWDtBQUFBLE9BSkgsQ0FBYixDQTVDRyxDQWdEa0Q7O0FBRXJENkMsVUFBSSxDQUFDRyxLQUFMLEdBQWFDLE1BQWIsQ0FBb0IsS0FBcEIsRUFDS3ZCLElBREwsQ0FDVSxPQURWLEVBQ21CLFVBQUFTLENBQUM7QUFBQSw2QkFBV0EsQ0FBQyxDQUFDcEIsS0FBSyxDQUFDaEIsVUFBTixDQUFpQkMsSUFBbEIsQ0FBWjtBQUFBLE9BRHBCLEVBRUsyQixLQUZMLENBRVcsU0FGWCxFQUVzQixjQUZ0QixFQUdLQSxLQUhMLENBR1csUUFIWCxFQUdxQixVQUFBUSxDQUFDLEVBQUk7QUFDbEIsWUFBTWUsUUFBUSxHQUFHLENBQUNuQyxLQUFLLENBQUNYLE1BQU4sR0FBZVcsS0FBSyxDQUFDVixNQUFOLENBQWFDLEdBQTVCLEdBQWtDUyxLQUFLLENBQUNWLE1BQU4sQ0FBYUcsTUFBaEQsSUFBMERPLEtBQUssQ0FBQ2hCLFVBQU4sQ0FBaUJHLEtBQTVGO0FBQ0EsWUFBTWlELElBQUksR0FBR2hCLENBQUMsQ0FBQ3BCLEtBQUssQ0FBQ2hCLFVBQU4sQ0FBaUJJLFNBQWxCLENBQUQsR0FBZ0MsQ0FBN0M7QUFDQSxlQUFPZ0MsQ0FBQyxDQUFDcEIsS0FBSyxDQUFDaEIsVUFBTixDQUFpQkUsS0FBbEIsQ0FBRCxHQUE2QmtELElBQUksR0FBR0EsSUFBSSxHQUFHRCxRQUFQLEdBQWtCLElBQXJCLEdBQTRCQSxRQUFRLEdBQUcsSUFBeEUsR0FBZ0ZBLFFBQVEsR0FBRyxJQUFsRztBQUNILE9BUEwsRUFRS3ZCLEtBUkwsQ0FRVyxPQVJYLEVBUW9CSyxNQUFNLENBQUNvQixTQUFQLEtBQXFCLElBUnpDLEVBU0t6QixLQVRMLENBU1csWUFUWCxFQVN5QixVQUFBUSxDQUFDLEVBQUk7QUFDdEIsWUFBSWtCLEdBQUcsR0FBR0MsVUFBVSxDQUFDbkIsQ0FBQyxDQUFDcEIsS0FBSyxDQUFDaEIsVUFBTixDQUFpQkUsS0FBbEIsQ0FBRixDQUFwQjtBQUNBLGVBQVFvRCxHQUFHLEtBQUssSUFBVCxJQUFrQixDQUFFRSxLQUFLLENBQUNGLEdBQUQsQ0FBekIsR0FBa0NYLFVBQVUsQ0FBQ1csR0FBRCxDQUE1QyxHQUFvRHRDLEtBQUssQ0FBQ0osU0FBakU7QUFDSCxPQVpMLEVBYUs2QyxLQWJMLENBYVdYLElBYlgsRUFjS3ZCLFVBZEwsQ0FjZ0JBLFVBZGhCLEVBZUtLLEtBZkwsQ0FlVyxTQWZYLEVBZXNCLGNBZnRCLEVBZ0JLQSxLQWhCTCxDQWdCVyxRQWhCWCxFQWdCcUIsVUFBQVEsQ0FBQyxFQUFJO0FBQ2xCLFlBQU1lLFFBQVEsR0FBRyxDQUFDbkMsS0FBSyxDQUFDWCxNQUFOLEdBQWVXLEtBQUssQ0FBQ1YsTUFBTixDQUFhQyxHQUE1QixHQUFrQ1MsS0FBSyxDQUFDVixNQUFOLENBQWFHLE1BQWhELElBQTBETyxLQUFLLENBQUNoQixVQUFOLENBQWlCRyxLQUE1RjtBQUNBLFlBQU1pRCxJQUFJLEdBQUdoQixDQUFDLENBQUNwQixLQUFLLENBQUNoQixVQUFOLENBQWlCSSxTQUFsQixDQUFELEdBQWdDLENBQTdDO0FBQ0EsZUFBT2dDLENBQUMsQ0FBQ3BCLEtBQUssQ0FBQ2hCLFVBQU4sQ0FBaUJFLEtBQWxCLENBQUQsR0FBNkJrRCxJQUFJLEdBQUdBLElBQUksR0FBR0QsUUFBUCxHQUFrQixJQUFyQixHQUE0QkEsUUFBUSxHQUFHLElBQXhFLEdBQWdGQSxRQUFRLEdBQUcsSUFBbEc7QUFDSCxPQXBCTCxFQXFCS3ZCLEtBckJMLENBcUJXLE9BckJYLEVBcUJvQkssTUFBTSxDQUFDb0IsU0FBUCxLQUFxQixJQXJCekMsRUFzQkt6QixLQXRCTCxDQXNCVyxZQXRCWCxFQXNCeUIsVUFBQVEsQ0FBQyxFQUFJO0FBQ3RCLFlBQUlrQixHQUFHLEdBQUdDLFVBQVUsQ0FBQ25CLENBQUMsQ0FBQ3BCLEtBQUssQ0FBQ2hCLFVBQU4sQ0FBaUJFLEtBQWxCLENBQUYsQ0FBcEI7QUFDQXdELGVBQU8sQ0FBQ0MsR0FBUixDQUFhTCxHQUFHLEtBQUssSUFBVCxJQUFtQkUsS0FBSyxDQUFDRixHQUFELENBQXBDO0FBQ0EsZUFBUUEsR0FBRyxLQUFLLElBQVQsSUFBa0IsQ0FBRUUsS0FBSyxDQUFDRixHQUFELENBQXpCLEdBQWtDWCxVQUFVLENBQUNXLEdBQUQsQ0FBNUMsR0FBb0R0QyxLQUFLLENBQUNKLFNBQWpFO0FBQ0gsT0ExQkw7QUE0QkFrQyxVQUFJLENBQUNjLElBQUwsR0FDS3JDLFVBREwsQ0FDZ0JBLFVBRGhCLEVBRUtJLElBRkwsQ0FFVSxRQUZWLEVBRW9CLENBRnBCLEVBR0trQyxNQUhMLEdBOUVHLENBbUZIO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBTyxJQUFQO0FBQ0g7Ozs7RUE1SXdDQyw0RCxHQThJN0M7OztBQUNlakUsNkZBQWYiLCJmaWxlIjoiLi9zcmMvbGliL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJy4vYmFzZS9DaGFydENvbXBvbmVudCc7XG5pbXBvcnQgZDMgZnJvbSAnLi91dGlscy9kMyc7XG5pbXBvcnQgZGVmYXVsdERhdGEgZnJvbSAnLi9kZWZhdWx0RGF0YS5qc29uJztcblxuLy8gc2VlIGRvY3Mgb24gaHR0cHM6Ly9naXRodWIuY29tL3JldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50XG5pbXBvcnQgQXRsYXNNZXRhZGF0YUNsaWVudCBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9ncmFwaGljcy1hdGxhcy1jbGllbnQnO1xuaW1wb3J0IHsgaW50ZXJwb2xhdGUsIGludGVycG9sYXRlSHNsLCBpbnRlcnBvbGF0ZUhjbCB9IGZyb20gJ2QzJztcbmNvbnN0IGF0bGFzdENsaWVudCA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG5cbmNvbnN0IGRhdGVQYXJzZSA9IGQzLnRpbWVQYXJzZSgnJVktJW0tJWQnKTtcbmNvbnN0IGRhdGVGb3JtYXQgPSBkMy50aW1lRm9ybWF0KCclYiAlZScpO1xuY29uc3QgZGF0ZUZvcm1hdF90dCA9IGQzLnRpbWVGb3JtYXQoJyVCICVlJyk7XG5jb25zdCBudW1iZXJGb3JtYXRfdHQgPSBkMy5mb3JtYXQoJywnKTtcblxuY2xhc3MgQ291bnRyeUxvY2tkb3duSW5kaWNhdG9yU3RyaXBzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICAgIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgbG9jYWxlOiAnZW4nLFxuICAgICAgICBjb3VudHJ5SVNPMjogJ0lOJyxcbiAgICAgICAgZGF0YVBhcmFtczoge1xuICAgICAgICAgICAgZGF0ZTogJ2RhdGUnLFxuICAgICAgICAgICAgaW5kZXg6ICdjMScsXG4gICAgICAgICAgICBzdGVwczogMiwgLy8gc3RlcFZhbHVlID0gMCwgMS4uLlxuICAgICAgICAgICAgc3RlcFZhbHVlOiAnZmxhZycsXG4gICAgICAgIH0sXG4gICAgICAgIGhlaWdodDogNTAsXG4gICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgICAgIHJpZ2h0OiAxMCxcbiAgICAgICAgICAgIGJvdHRvbTogMTAsXG4gICAgICAgICAgICBsZWZ0OiAxMCxcbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWduOiAnY2VudGVyJywgLy8gc3RhcnQsIGNlbnRlciwgYmFzZWxpbmVcbiAgICAgICAgYmFzZUNvbG9yOiAnI0VDRUZGNCcsXG4gICAgICAgIHN0cmlwQ29sb3I6IHtcbiAgICAgICAgICAgIDA6ICcjRUNFRkY0JyxcbiAgICAgICAgICAgIDE6ICcjZDFlZWVhJyxcbiAgICAgICAgICAgIDI6ICcjZmZlNDdmJyxcbiAgICAgICAgICAgIDM6ICcjYTUwZjE1JyxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZGVmYXVsdERhdGEgPSBkZWZhdWx0RGF0YTtcblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEoKTtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcblxuICAgICAgICAvLyBnZXQgY291bnRyeSBkZXRhaWxzIGZyb20gQXRsYXNDbGllbnQgZnJvbSBJU08tMlxuICAgICAgICBwcm9wcy5jb3VudHJ5ID0gYXRsYXN0Q2xpZW50LmdldENvdW50cnkocHJvcHMuY291bnRyeUlTTzIpO1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICB9ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zdCB0cmFuc2l0aW9uID0gZDMudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oNzUwKTtcblxuICAgICAgICAvLyBtYWluIGNoYXJ0IGNvbnRhaW5lclxuICAgICAgICBjb25zdCBjaGFydERpdiA9IHRoaXMuc2VsZWN0aW9uKClcbiAgICAgICAgICAgIC5hcHBlbmRTZWxlY3QoJ2RpdicpIC8vIHNlZSBkb2NzIGluIC4vdXRpbHMvZDMuanNcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdDb3VudHJ5TG9ja2Rvd25JbmRpY2F0b3JTdHJpcHMnKVxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsIGAke3dpZHRofXB4YClcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgYCR7cHJvcHMuaGVpZ2h0fXB4YClcbiAgICAgICAgICAgIC5hcHBlbmRTZWxlY3QoJ2RpdicpXG4gICAgICAgICAgICAuc3R5bGUoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtwcm9wcy5tYXJnaW4ubGVmdH1weCwgJHtwcm9wcy5tYXJnaW4udG9wfXB4KWApO1xuXG4gICAgICAgIC8vIHNldCBzY2FsZXNcbiAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbMCwgcHJvcHMuZGF0YVBhcmFtcy5zdGVwcyAtIDFdKVxuICAgICAgICAgICAgLnJhbmdlKFtwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4uYm90dG9tLCBwcm9wcy5tYXJnaW4udG9wXSk7XG5cbiAgICAgICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVCYW5kKClcbiAgICAgICAgICAgIC5kb21haW4oZGF0YS5tYXAoZCA9PiBkYXRlUGFyc2UoZFtwcm9wcy5kYXRhUGFyYW1zLmRhdGVdKSkpXG4gICAgICAgICAgICAucmFuZ2UoW3Byb3BzLm1hcmdpbi5sZWZ0LCB3aWR0aCAtIHByb3BzLm1hcmdpbi5yaWdodF0pXG4gICAgICAgICAgICAucGFkZGluZygwKTtcblxuICAgICAgICBjb25zdCBjb2xvckRvbWFpbiA9IHByb3BzLnN0cmlwQ29sb3IgPyAoT2JqZWN0LmtleXMocHJvcHMuc3RyaXBDb2xvcikpLm1hcChkID0+ICtkKSA6IGQzLmV4dGVudChkYXRhLm1hcChkID0+IGRbcHJvcHMuZGF0YVBhcmFtcy5pbmRleF0pKTtcblxuICAgICAgICBjb25zdCBjb2xvclJhbmdlID0gcHJvcHMuc3RyaXBDb2xvciA/IGNvbG9yRG9tYWluLm1hcChkID0+IHByb3BzLnN0cmlwQ29sb3JbYCR7ZH1gXSkgOiBbJyNjY2NjY2MnLCAnIzMzMzMzMyddXG5cbiAgICAgICAgY29uc3QgY29sb3JTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oY29sb3JEb21haW4pXG4gICAgICAgICAgICAucmFuZ2UoY29sb3JSYW5nZSlcbiAgICAgICAgICAgIC5pbnRlcnBvbGF0ZShpbnRlcnBvbGF0ZUhjbCk7XG5cbiAgICAgICAgLy8gbWFrZSBiYXJzXG4gICAgICAgIGNvbnN0IGJhcnMgPSBjaGFydERpdi5hcHBlbmRTZWxlY3QoJ2Rpdi5iYXJzLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnZmxleCcpXG4gICAgICAgICAgICAuc3R5bGUoJ2FsaWduLWl0ZW1zJywgYCR7cHJvcHMudmFsaWdufWApXG4gICAgICAgICAgICAuc2VsZWN0QWxsKCcuYmFyJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEsIChkLCBpKSA9PiBkW3Byb3BzLmRhdGFQYXJhbXMuZGF0ZV0pOyAvLyBmb3Igc21vb3RoIGRhdGEgdXBkYXRpb25cblxuICAgICAgICBiYXJzLmVudGVyKCkuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBgYmFyICR7ZFtwcm9wcy5kYXRhUGFyYW1zLmRhdGVdfWApXG4gICAgICAgICAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJylcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RlcFNpemUgPSAocHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLnRvcCAtIHByb3BzLm1hcmdpbi5ib3R0b20pIC8gcHJvcHMuZGF0YVBhcmFtcy5zdGVwcztcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwID0gZFtwcm9wcy5kYXRhUGFyYW1zLnN0ZXBWYWx1ZV0gKyAxO1xuICAgICAgICAgICAgICAgIHJldHVybiBkW3Byb3BzLmRhdGFQYXJhbXMuaW5kZXhdID8gKHN0ZXAgPyBzdGVwICogc3RlcFNpemUgKyAncHgnIDogc3RlcFNpemUgKyAncHgnKSA6IHN0ZXBTaXplICsgJ3B4JztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywgeFNjYWxlLmJhbmR3aWR0aCgpICsgJ3B4JylcbiAgICAgICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsIGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YWwgPSBwYXJzZUZsb2F0KGRbcHJvcHMuZGF0YVBhcmFtcy5pbmRleF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiAodmFsICE9PSBudWxsKSAmJiAhKGlzTmFOKHZhbCkpID8gY29sb3JTY2FsZSh2YWwpIDogcHJvcHMuYmFzZUNvbG9yO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tZXJnZShiYXJzKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgICAgICAgIC5zdHlsZSgnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKVxuICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwU2l6ZSA9IChwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4udG9wIC0gcHJvcHMubWFyZ2luLmJvdHRvbSkgLyBwcm9wcy5kYXRhUGFyYW1zLnN0ZXBzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBkW3Byb3BzLmRhdGFQYXJhbXMuc3RlcFZhbHVlXSArIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRbcHJvcHMuZGF0YVBhcmFtcy5pbmRleF0gPyAoc3RlcCA/IHN0ZXAgKiBzdGVwU2l6ZSArICdweCcgOiBzdGVwU2l6ZSArICdweCcpIDogc3RlcFNpemUgKyAncHgnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCB4U2NhbGUuYmFuZHdpZHRoKCkgKyAncHgnKVxuICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IHBhcnNlRmxvYXQoZFtwcm9wcy5kYXRhUGFyYW1zLmluZGV4XSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coKHZhbCA9PT0gbnVsbCkgfHwgKGlzTmFOKHZhbCkpKVxuICAgICAgICAgICAgICAgIHJldHVybiAodmFsICE9PSBudWxsKSAmJiAhKGlzTmFOKHZhbCkpID8gY29sb3JTY2FsZSh2YWwpIDogcHJvcHMuYmFzZUNvbG9yO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgYmFycy5leGl0KClcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgMClcbiAgICAgICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgICAvLyBjb25zdCBjaXJjbGVzID0gZy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC8vICAgLmRhdGEoZGF0YSwgKGQsIGkpID0+IGRbcHJvcHMuZGF0YVBhcmFtcy5kYXRlXSk7XG5cbiAgICAgICAgLy8gY2lyY2xlc1xuICAgICAgICAvLyAgIC5zdHlsZSgnZmlsbCcsIHByb3BzLmZpbGwpXG4gICAgICAgIC8vICAgLnN0eWxlKCdzdHJva2UnLCBwcm9wcy5zdHJva2UpO1xuXG4gICAgICAgIC8vIGNpcmNsZXMuZW50ZXIoKS5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC8vICAgLnN0eWxlKCdmaWxsJywgcHJvcHMuZmlsbClcbiAgICAgICAgLy8gICAuc3R5bGUoJ3N0cm9rZScsIHByb3BzLnN0cm9rZSlcbiAgICAgICAgLy8gICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHByb3BzLnN0cm9rZVdpZHRoKVxuICAgICAgICAvLyAgIC5hdHRyKCdjeScsIHByb3BzLmhlaWdodCAvIDIpXG4gICAgICAgIC8vICAgLmF0dHIoJ2N4JywgKGQsIGkpID0+XG4gICAgICAgIC8vICAgICBkYXRhLnNsaWNlKDAsIGkpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApICsgKGQgLyAyKVxuICAgICAgICAvLyAgIClcbiAgICAgICAgLy8gICAubWVyZ2UoY2lyY2xlcylcbiAgICAgICAgLy8gICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgICAvLyAgIC5hdHRyKCdjeCcsIChkLCBpKSA9PlxuICAgICAgICAvLyAgICAgZGF0YS5zbGljZSgwLCBpKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSArIChkIC8gMilcbiAgICAgICAgLy8gICApXG4gICAgICAgIC8vICAgLmF0dHIoJ3InLCBkID0+IGQgLyAyKTtcblxuICAgICAgICAvLyBjaXJjbGVzLmV4aXQoKVxuICAgICAgICAvLyAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gICAgICAgIC8vICAgLmF0dHIoJ3InLCAwKVxuICAgICAgICAvLyAgIC5yZW1vdmUoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4vLyBjb25zb2xlLmxvZyh0aGlzLmRlZmF1bHRQcm9wcyk7XG5leHBvcnQgZGVmYXVsdCBDb3VudHJ5TG9ja2Rvd25JbmRpY2F0b3JTdHJpcHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})