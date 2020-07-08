webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n // see docs on https://github.com/reuters-graphics/graphics-atlas-client\n\n\nvar atlastClient = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_10___default.a();\nvar dateParse = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeParse('%Y-%m-%d');\nvar dateFormat = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeFormat('%b %e');\nvar dateFormat_tt = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeFormat('%B %e');\nvar numberFormat_tt = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].format(',');\n\nvar CountryLockdownIndicatorStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryLockdownIndicatorStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryLockdownIndicatorStrips);\n\n  function CountryLockdownIndicatorStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryLockdownIndicatorStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      locale: 'en',\n      countryISO2: 'IN',\n      dataParams: {\n        date: 'date',\n        index: 'c1',\n        steps: 2,\n        // stepValue = 0, 1...\n        stepValue: 'flag'\n      },\n      height: 200,\n      margin: {\n        top: 10,\n        right: 10,\n        bottom: 10,\n        left: 10\n      },\n      valign: 'center',\n      // start, center, baseline\n      baseColor: '#ECEFF4',\n      stripColor: {\n        0: '#ECEFF4',\n        1: '#d1eeea',\n        2: '#ffe47f',\n        3: '#a50f15'\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryLockdownIndicatorStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node(); // get country details from AtlasClient from ISO-2\n\n      props.country = atlastClient.getCountry(props.countryISO2);\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // main chart container\n\n      var chartDiv = this.selection().appendSelect('div') // see docs in ./utils/d3.js\n      .attr('class', 'CountryLockdownIndicatorStrips').style('width', \"\".concat(width, \"px\")).style('height', \"\".concat(props.height, \"px\")).appendSelect('div').style('transform', \"translate(\".concat(props.margin.left, \"px, \").concat(props.margin.top, \"px)\")); // set scales\n\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, props.dataParams.steps - 1]).range([props.height - props.margin.bottom, props.margin.top]);\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleBand().domain(data.map(function (d) {\n        return dateParse(d[props.dataParams.date]);\n      })).range([props.margin.left, width - props.margin.right]).padding(0);\n      var colorDomain = props.stripColor ? Object.keys(props.stripColor).map(function (d) {\n        return +d;\n      }) : _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(data.map(function (d) {\n        return d[props.dataParams.index];\n      }));\n      var colorScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(colorDomain).range(['green', 'red']); // make bars\n\n      var bars = chartDiv.appendSelect('div.bars-container').style('display', 'flex').style('align-items', \"\".concat(props.valign)).selectAll('.bar').data(data, function (d, i) {\n        return d[props.dataParams.date];\n      }); // for smooth data updation\n\n      bars.enter().append('div').attr('class', function (d) {\n        return \"bar \".concat(d[props.dataParams.date]);\n      }).style('height', function (d) {\n        var stepSize = (props.height - props.margin.top - props.margin.bottom) / props.dataParams.steps;\n        var step = d[props.dataParams.stepValue] + 1;\n        return d[props.dataParams.index] ? step ? step * stepSize + 'px' : stepSize + 'px' : stepSize + 'px';\n      }).style('width', xScale.bandwidth() + 'px').style('display', 'inline-block').style('background', props.baseColor).style('background', function (d) {\n        var val = parseFloat(d[props.dataParams.index]);\n        console.log(val !== null && !val.isNaN());\n        return val !== null && !val.isNaN() ? colorScale(val) : props.baseColor;\n      }); // const circles = g.selectAll('circle')\n      //   .data(data, (d, i) => d[props.dataParams.date]);\n      // circles\n      //   .style('fill', props.fill)\n      //   .style('stroke', props.stroke);\n      // circles.enter().append('circle')\n      //   .style('fill', props.fill)\n      //   .style('stroke', props.stroke)\n      //   .style('stroke-width', props.strokeWidth)\n      //   .attr('cy', props.height / 2)\n      //   .attr('cx', (d, i) =>\n      //     data.slice(0, i).reduce((a, b) => a + b, 0) + (d / 2)\n      //   )\n      //   .merge(circles)\n      //   .transition(transition)\n      //   .attr('cx', (d, i) =>\n      //     data.slice(0, i).reduce((a, b) => a + b, 0) + (d / 2)\n      //   )\n      //   .attr('r', d => d / 2);\n      // circles.exit()\n      //   .transition(transition)\n      //   .attr('r', 0)\n      //   .remove();\n\n      return this;\n    }\n  }]);\n\n  return CountryLockdownIndicatorStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]); // console.log(this.defaultProps);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryLockdownIndicatorStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiYXRsYXN0Q2xpZW50IiwiQXRsYXNNZXRhZGF0YUNsaWVudCIsImRhdGVQYXJzZSIsImQzIiwidGltZVBhcnNlIiwiZGF0ZUZvcm1hdCIsInRpbWVGb3JtYXQiLCJkYXRlRm9ybWF0X3R0IiwibnVtYmVyRm9ybWF0X3R0IiwiZm9ybWF0IiwiQ291bnRyeUxvY2tkb3duSW5kaWNhdG9yU3RyaXBzIiwibG9jYWxlIiwiY291bnRyeUlTTzIiLCJkYXRhUGFyYW1zIiwiZGF0ZSIsImluZGV4Iiwic3RlcHMiLCJzdGVwVmFsdWUiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ2YWxpZ24iLCJiYXNlQ29sb3IiLCJzdHJpcENvbG9yIiwiZGVmYXVsdERhdGEiLCJkYXRhIiwicHJvcHMiLCJub2RlIiwic2VsZWN0aW9uIiwiY291bnRyeSIsImdldENvdW50cnkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNoYXJ0RGl2IiwiYXBwZW5kU2VsZWN0IiwiYXR0ciIsInN0eWxlIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInhTY2FsZSIsInNjYWxlQmFuZCIsIm1hcCIsImQiLCJwYWRkaW5nIiwiY29sb3JEb21haW4iLCJPYmplY3QiLCJrZXlzIiwiZXh0ZW50IiwiY29sb3JTY2FsZSIsImJhcnMiLCJzZWxlY3RBbGwiLCJpIiwiZW50ZXIiLCJhcHBlbmQiLCJzdGVwU2l6ZSIsInN0ZXAiLCJiYW5kd2lkdGgiLCJ2YWwiLCJwYXJzZUZsb2F0IiwiY29uc29sZSIsImxvZyIsImlzTmFOIiwiQ2hhcnRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHLElBQUlDLCtFQUFKLEVBQXJCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyxpREFBRSxDQUFDQyxTQUFILENBQWEsVUFBYixDQUFsQjtBQUNBLElBQU1DLFVBQVUsR0FBR0YsaURBQUUsQ0FBQ0csVUFBSCxDQUFjLE9BQWQsQ0FBbkI7QUFDQSxJQUFNQyxhQUFhLEdBQUdKLGlEQUFFLENBQUNHLFVBQUgsQ0FBYyxPQUFkLENBQXRCO0FBQ0EsSUFBTUUsZUFBZSxHQUFHTCxpREFBRSxDQUFDTSxNQUFILENBQVUsR0FBVixDQUF4Qjs7SUFFTUMsOEI7Ozs7Ozs7Ozs7Ozs7Ozs7dU5BQ2E7QUFDWEMsWUFBTSxFQUFFLElBREc7QUFFWEMsaUJBQVcsRUFBRSxJQUZGO0FBR1hDLGdCQUFVLEVBQUU7QUFDUkMsWUFBSSxFQUFFLE1BREU7QUFFUkMsYUFBSyxFQUFFLElBRkM7QUFHUkMsYUFBSyxFQUFFLENBSEM7QUFHRTtBQUNWQyxpQkFBUyxFQUFFO0FBSkgsT0FIRDtBQVNYQyxZQUFNLEVBQUUsR0FURztBQVVYQyxZQUFNLEVBQUU7QUFDSkMsV0FBRyxFQUFFLEVBREQ7QUFFSkMsYUFBSyxFQUFFLEVBRkg7QUFHSkMsY0FBTSxFQUFFLEVBSEo7QUFJSkMsWUFBSSxFQUFFO0FBSkYsT0FWRztBQWdCWEMsWUFBTSxFQUFFLFFBaEJHO0FBZ0JPO0FBQ2xCQyxlQUFTLEVBQUUsU0FqQkE7QUFrQlhDLGdCQUFVLEVBQUU7QUFDUixXQUFHLFNBREs7QUFFUixXQUFHLFNBRks7QUFHUixXQUFHLFNBSEs7QUFJUixXQUFHO0FBSks7QUFsQkQsSzs7c05BMEJEQyw4Qzs7Ozs7OzsyQkFFUDtBQUNILFVBQU1DLElBQUksR0FBRyxLQUFLQSxJQUFMLEVBQWI7QUFDQSxVQUFNQyxLQUFLLEdBQUcsS0FBS0EsS0FBTCxFQUFkO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLEtBQUtDLFNBQUwsR0FBaUJELElBQWpCLEVBQWIsQ0FIRyxDQUtIOztBQUNBRCxXQUFLLENBQUNHLE9BQU4sR0FBZ0JoQyxZQUFZLENBQUNpQyxVQUFiLENBQXdCSixLQUFLLENBQUNqQixXQUE5QixDQUFoQjs7QUFORyxrQ0FVQ2tCLElBQUksQ0FBQ0kscUJBQUwsRUFWRDtBQUFBLFVBU0NDLEtBVEQseUJBU0NBLEtBVEQ7O0FBWUgsVUFBTUMsVUFBVSxHQUFHakMsaURBQUUsQ0FBQ2lDLFVBQUgsR0FDZEMsUUFEYyxDQUNMLEdBREssQ0FBbkIsQ0FaRyxDQWVIOztBQUNBLFVBQU1DLFFBQVEsR0FBRyxLQUFLUCxTQUFMLEdBQ1pRLFlBRFksQ0FDQyxLQURELEVBQ1E7QUFEUixPQUVaQyxJQUZZLENBRVAsT0FGTyxFQUVFLGdDQUZGLEVBR1pDLEtBSFksQ0FHTixPQUhNLFlBR01OLEtBSE4sU0FJWk0sS0FKWSxDQUlOLFFBSk0sWUFJT1osS0FBSyxDQUFDWCxNQUpiLFNBS1pxQixZQUxZLENBS0MsS0FMRCxFQU1aRSxLQU5ZLENBTU4sV0FOTSxzQkFNb0JaLEtBQUssQ0FBQ1YsTUFBTixDQUFhSSxJQU5qQyxpQkFNNENNLEtBQUssQ0FBQ1YsTUFBTixDQUFhQyxHQU56RCxTQUFqQixDQWhCRyxDQXdCSDs7QUFDQSxVQUFNc0IsTUFBTSxHQUFHdkMsaURBQUUsQ0FBQ3dDLFdBQUgsR0FDVkMsTUFEVSxDQUNILENBQUMsQ0FBRCxFQUFJZixLQUFLLENBQUNoQixVQUFOLENBQWlCRyxLQUFqQixHQUF5QixDQUE3QixDQURHLEVBRVY2QixLQUZVLENBRUosQ0FBQ2hCLEtBQUssQ0FBQ1gsTUFBTixHQUFlVyxLQUFLLENBQUNWLE1BQU4sQ0FBYUcsTUFBN0IsRUFBcUNPLEtBQUssQ0FBQ1YsTUFBTixDQUFhQyxHQUFsRCxDQUZJLENBQWY7QUFJQSxVQUFNMEIsTUFBTSxHQUFHM0MsaURBQUUsQ0FBQzRDLFNBQUgsR0FDVkgsTUFEVSxDQUNIaEIsSUFBSSxDQUFDb0IsR0FBTCxDQUFTLFVBQUFDLENBQUM7QUFBQSxlQUFJL0MsU0FBUyxDQUFDK0MsQ0FBQyxDQUFDcEIsS0FBSyxDQUFDaEIsVUFBTixDQUFpQkMsSUFBbEIsQ0FBRixDQUFiO0FBQUEsT0FBVixDQURHLEVBRVYrQixLQUZVLENBRUosQ0FBQ2hCLEtBQUssQ0FBQ1YsTUFBTixDQUFhSSxJQUFkLEVBQW9CWSxLQUFLLEdBQUdOLEtBQUssQ0FBQ1YsTUFBTixDQUFhRSxLQUF6QyxDQUZJLEVBR1Y2QixPQUhVLENBR0YsQ0FIRSxDQUFmO0FBS0EsVUFBTUMsV0FBVyxHQUFHdEIsS0FBSyxDQUFDSCxVQUFOLEdBQW9CMEIsTUFBTSxDQUFDQyxJQUFQLENBQVl4QixLQUFLLENBQUNILFVBQWxCLENBQUQsQ0FBZ0NzQixHQUFoQyxDQUFvQyxVQUFBQyxDQUFDO0FBQUEsZUFBSSxDQUFDQSxDQUFMO0FBQUEsT0FBckMsQ0FBbkIsR0FBa0U5QyxpREFBRSxDQUFDbUQsTUFBSCxDQUFVMUIsSUFBSSxDQUFDb0IsR0FBTCxDQUFTLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNwQixLQUFLLENBQUNoQixVQUFOLENBQWlCRSxLQUFsQixDQUFMO0FBQUEsT0FBVixDQUFWLENBQXRGO0FBRUEsVUFBTXdDLFVBQVUsR0FBR3BELGlEQUFFLENBQUN3QyxXQUFILEdBQ2RDLE1BRGMsQ0FDUE8sV0FETyxFQUVkTixLQUZjLENBRVIsQ0FBQyxPQUFELEVBQVUsS0FBVixDQUZRLENBQW5CLENBcENHLENBd0NIOztBQUNBLFVBQU1XLElBQUksR0FBR2xCLFFBQVEsQ0FBQ0MsWUFBVCxDQUFzQixvQkFBdEIsRUFDUkUsS0FEUSxDQUNGLFNBREUsRUFDUyxNQURULEVBRVJBLEtBRlEsQ0FFRixhQUZFLFlBRWdCWixLQUFLLENBQUNMLE1BRnRCLEdBR1JpQyxTQUhRLENBR0UsTUFIRixFQUlSN0IsSUFKUSxDQUlIQSxJQUpHLEVBSUcsVUFBQ3FCLENBQUQsRUFBSVMsQ0FBSjtBQUFBLGVBQVVULENBQUMsQ0FBQ3BCLEtBQUssQ0FBQ2hCLFVBQU4sQ0FBaUJDLElBQWxCLENBQVg7QUFBQSxPQUpILENBQWIsQ0F6Q0csQ0E2Q2tEOztBQUVyRDBDLFVBQUksQ0FBQ0csS0FBTCxHQUFhQyxNQUFiLENBQW9CLEtBQXBCLEVBQ0twQixJQURMLENBQ1UsT0FEVixFQUNtQixVQUFBUyxDQUFDO0FBQUEsNkJBQVdBLENBQUMsQ0FBQ3BCLEtBQUssQ0FBQ2hCLFVBQU4sQ0FBaUJDLElBQWxCLENBQVo7QUFBQSxPQURwQixFQUVLMkIsS0FGTCxDQUVXLFFBRlgsRUFFcUIsVUFBQVEsQ0FBQyxFQUFJO0FBQ2xCLFlBQU1ZLFFBQVEsR0FBRyxDQUFDaEMsS0FBSyxDQUFDWCxNQUFOLEdBQWVXLEtBQUssQ0FBQ1YsTUFBTixDQUFhQyxHQUE1QixHQUFrQ1MsS0FBSyxDQUFDVixNQUFOLENBQWFHLE1BQWhELElBQTBETyxLQUFLLENBQUNoQixVQUFOLENBQWlCRyxLQUE1RjtBQUNBLFlBQU04QyxJQUFJLEdBQUdiLENBQUMsQ0FBQ3BCLEtBQUssQ0FBQ2hCLFVBQU4sQ0FBaUJJLFNBQWxCLENBQUQsR0FBZ0MsQ0FBN0M7QUFDQSxlQUFPZ0MsQ0FBQyxDQUFDcEIsS0FBSyxDQUFDaEIsVUFBTixDQUFpQkUsS0FBbEIsQ0FBRCxHQUE2QitDLElBQUksR0FBR0EsSUFBSSxHQUFHRCxRQUFQLEdBQWtCLElBQXJCLEdBQTRCQSxRQUFRLEdBQUcsSUFBeEUsR0FBZ0ZBLFFBQVEsR0FBRyxJQUFsRztBQUNILE9BTkwsRUFPS3BCLEtBUEwsQ0FPVyxPQVBYLEVBT29CSyxNQUFNLENBQUNpQixTQUFQLEtBQXFCLElBUHpDLEVBUUt0QixLQVJMLENBUVcsU0FSWCxFQVFzQixjQVJ0QixFQVNLQSxLQVRMLENBU1csWUFUWCxFQVN5QlosS0FBSyxDQUFDSixTQVQvQixFQVVLZ0IsS0FWTCxDQVVXLFlBVlgsRUFVeUIsVUFBQVEsQ0FBQyxFQUFJO0FBQ3RCLFlBQUllLEdBQUcsR0FBR0MsVUFBVSxDQUFDaEIsQ0FBQyxDQUFDcEIsS0FBSyxDQUFDaEIsVUFBTixDQUFpQkUsS0FBbEIsQ0FBRixDQUFwQjtBQUNBbUQsZUFBTyxDQUFDQyxHQUFSLENBQVlILEdBQUcsS0FBSyxJQUFSLElBQWdCLENBQUVBLEdBQUcsQ0FBQ0ksS0FBSixFQUE5QjtBQUNBLGVBQVFKLEdBQUcsS0FBSyxJQUFULElBQWtCLENBQUVBLEdBQUcsQ0FBQ0ksS0FBSixFQUFwQixHQUFtQ2IsVUFBVSxDQUFDUyxHQUFELENBQTdDLEdBQXFEbkMsS0FBSyxDQUFDSixTQUFsRTtBQUNILE9BZEwsRUEvQ0csQ0ErREg7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFPLElBQVA7QUFDSDs7OztFQXhId0M0Qyw0RCxHQTBIN0M7OztBQUNlM0QsNkZBQWYiLCJmaWxlIjoiLi9zcmMvbGliL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJy4vYmFzZS9DaGFydENvbXBvbmVudCc7XG5pbXBvcnQgZDMgZnJvbSAnLi91dGlscy9kMyc7XG5pbXBvcnQgZGVmYXVsdERhdGEgZnJvbSAnLi9kZWZhdWx0RGF0YS5qc29uJztcblxuLy8gc2VlIGRvY3Mgb24gaHR0cHM6Ly9naXRodWIuY29tL3JldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50XG5pbXBvcnQgQXRsYXNNZXRhZGF0YUNsaWVudCBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9ncmFwaGljcy1hdGxhcy1jbGllbnQnO1xuY29uc3QgYXRsYXN0Q2xpZW50ID0gbmV3IEF0bGFzTWV0YWRhdGFDbGllbnQoKTtcblxuY29uc3QgZGF0ZVBhcnNlID0gZDMudGltZVBhcnNlKCclWS0lbS0lZCcpO1xuY29uc3QgZGF0ZUZvcm1hdCA9IGQzLnRpbWVGb3JtYXQoJyViICVlJyk7XG5jb25zdCBkYXRlRm9ybWF0X3R0ID0gZDMudGltZUZvcm1hdCgnJUIgJWUnKTtcbmNvbnN0IG51bWJlckZvcm1hdF90dCA9IGQzLmZvcm1hdCgnLCcpO1xuXG5jbGFzcyBDb3VudHJ5TG9ja2Rvd25JbmRpY2F0b3JTdHJpcHMgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gICAgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBsb2NhbGU6ICdlbicsXG4gICAgICAgIGNvdW50cnlJU08yOiAnSU4nLFxuICAgICAgICBkYXRhUGFyYW1zOiB7XG4gICAgICAgICAgICBkYXRlOiAnZGF0ZScsXG4gICAgICAgICAgICBpbmRleDogJ2MxJyxcbiAgICAgICAgICAgIHN0ZXBzOiAyLCAvLyBzdGVwVmFsdWUgPSAwLCAxLi4uXG4gICAgICAgICAgICBzdGVwVmFsdWU6ICdmbGFnJyxcbiAgICAgICAgfSxcbiAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgICAgIHJpZ2h0OiAxMCxcbiAgICAgICAgICAgIGJvdHRvbTogMTAsXG4gICAgICAgICAgICBsZWZ0OiAxMCxcbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWduOiAnY2VudGVyJywgLy8gc3RhcnQsIGNlbnRlciwgYmFzZWxpbmVcbiAgICAgICAgYmFzZUNvbG9yOiAnI0VDRUZGNCcsXG4gICAgICAgIHN0cmlwQ29sb3I6IHtcbiAgICAgICAgICAgIDA6ICcjRUNFRkY0JyxcbiAgICAgICAgICAgIDE6ICcjZDFlZWVhJyxcbiAgICAgICAgICAgIDI6ICcjZmZlNDdmJyxcbiAgICAgICAgICAgIDM6ICcjYTUwZjE1JyxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZGVmYXVsdERhdGEgPSBkZWZhdWx0RGF0YTtcblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEoKTtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcblxuICAgICAgICAvLyBnZXQgY291bnRyeSBkZXRhaWxzIGZyb20gQXRsYXNDbGllbnQgZnJvbSBJU08tMlxuICAgICAgICBwcm9wcy5jb3VudHJ5ID0gYXRsYXN0Q2xpZW50LmdldENvdW50cnkocHJvcHMuY291bnRyeUlTTzIpO1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICB9ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zdCB0cmFuc2l0aW9uID0gZDMudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oNzUwKTtcblxuICAgICAgICAvLyBtYWluIGNoYXJ0IGNvbnRhaW5lclxuICAgICAgICBjb25zdCBjaGFydERpdiA9IHRoaXMuc2VsZWN0aW9uKClcbiAgICAgICAgICAgIC5hcHBlbmRTZWxlY3QoJ2RpdicpIC8vIHNlZSBkb2NzIGluIC4vdXRpbHMvZDMuanNcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdDb3VudHJ5TG9ja2Rvd25JbmRpY2F0b3JTdHJpcHMnKVxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsIGAke3dpZHRofXB4YClcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgYCR7cHJvcHMuaGVpZ2h0fXB4YClcbiAgICAgICAgICAgIC5hcHBlbmRTZWxlY3QoJ2RpdicpXG4gICAgICAgICAgICAuc3R5bGUoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtwcm9wcy5tYXJnaW4ubGVmdH1weCwgJHtwcm9wcy5tYXJnaW4udG9wfXB4KWApO1xuXG4gICAgICAgIC8vIHNldCBzY2FsZXNcbiAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbMCwgcHJvcHMuZGF0YVBhcmFtcy5zdGVwcyAtIDFdKVxuICAgICAgICAgICAgLnJhbmdlKFtwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4uYm90dG9tLCBwcm9wcy5tYXJnaW4udG9wXSk7XG5cbiAgICAgICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVCYW5kKClcbiAgICAgICAgICAgIC5kb21haW4oZGF0YS5tYXAoZCA9PiBkYXRlUGFyc2UoZFtwcm9wcy5kYXRhUGFyYW1zLmRhdGVdKSkpXG4gICAgICAgICAgICAucmFuZ2UoW3Byb3BzLm1hcmdpbi5sZWZ0LCB3aWR0aCAtIHByb3BzLm1hcmdpbi5yaWdodF0pXG4gICAgICAgICAgICAucGFkZGluZygwKTtcblxuICAgICAgICBjb25zdCBjb2xvckRvbWFpbiA9IHByb3BzLnN0cmlwQ29sb3IgPyAoT2JqZWN0LmtleXMocHJvcHMuc3RyaXBDb2xvcikpLm1hcChkID0+ICtkKSA6IGQzLmV4dGVudChkYXRhLm1hcChkID0+IGRbcHJvcHMuZGF0YVBhcmFtcy5pbmRleF0pKTtcblxuICAgICAgICBjb25zdCBjb2xvclNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihjb2xvckRvbWFpbilcbiAgICAgICAgICAgIC5yYW5nZShbJ2dyZWVuJywgJ3JlZCddKTtcblxuICAgICAgICAvLyBtYWtlIGJhcnNcbiAgICAgICAgY29uc3QgYmFycyA9IGNoYXJ0RGl2LmFwcGVuZFNlbGVjdCgnZGl2LmJhcnMtY29udGFpbmVyJylcbiAgICAgICAgICAgIC5zdHlsZSgnZGlzcGxheScsICdmbGV4JylcbiAgICAgICAgICAgIC5zdHlsZSgnYWxpZ24taXRlbXMnLCBgJHtwcm9wcy52YWxpZ259YClcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoJy5iYXInKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSwgKGQsIGkpID0+IGRbcHJvcHMuZGF0YVBhcmFtcy5kYXRlXSk7IC8vIGZvciBzbW9vdGggZGF0YSB1cGRhdGlvblxuXG4gICAgICAgIGJhcnMuZW50ZXIoKS5hcHBlbmQoJ2RpdicpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBkID0+IGBiYXIgJHtkW3Byb3BzLmRhdGFQYXJhbXMuZGF0ZV19YClcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RlcFNpemUgPSAocHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLnRvcCAtIHByb3BzLm1hcmdpbi5ib3R0b20pIC8gcHJvcHMuZGF0YVBhcmFtcy5zdGVwcztcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwID0gZFtwcm9wcy5kYXRhUGFyYW1zLnN0ZXBWYWx1ZV0gKyAxO1xuICAgICAgICAgICAgICAgIHJldHVybiBkW3Byb3BzLmRhdGFQYXJhbXMuaW5kZXhdID8gKHN0ZXAgPyBzdGVwICogc3RlcFNpemUgKyAncHgnIDogc3RlcFNpemUgKyAncHgnKSA6IHN0ZXBTaXplICsgJ3B4JztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywgeFNjYWxlLmJhbmR3aWR0aCgpICsgJ3B4JylcbiAgICAgICAgICAgIC5zdHlsZSgnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKVxuICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgcHJvcHMuYmFzZUNvbG9yKVxuICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IHBhcnNlRmxvYXQoZFtwcm9wcy5kYXRhUGFyYW1zLmluZGV4XSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsICE9PSBudWxsICYmICEodmFsLmlzTmFOKCkpKVxuICAgICAgICAgICAgICAgIHJldHVybiAodmFsICE9PSBudWxsKSAmJiAhKHZhbC5pc05hTigpKSA/IGNvbG9yU2NhbGUodmFsKSA6IHByb3BzLmJhc2VDb2xvcjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNvbnN0IGNpcmNsZXMgPSBnLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgLy8gICAuZGF0YShkYXRhLCAoZCwgaSkgPT4gZFtwcm9wcy5kYXRhUGFyYW1zLmRhdGVdKTtcblxuICAgICAgICAvLyBjaXJjbGVzXG4gICAgICAgIC8vICAgLnN0eWxlKCdmaWxsJywgcHJvcHMuZmlsbClcbiAgICAgICAgLy8gICAuc3R5bGUoJ3N0cm9rZScsIHByb3BzLnN0cm9rZSk7XG5cbiAgICAgICAgLy8gY2lyY2xlcy5lbnRlcigpLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLy8gICAuc3R5bGUoJ2ZpbGwnLCBwcm9wcy5maWxsKVxuICAgICAgICAvLyAgIC5zdHlsZSgnc3Ryb2tlJywgcHJvcHMuc3Ryb2tlKVxuICAgICAgICAvLyAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgcHJvcHMuc3Ryb2tlV2lkdGgpXG4gICAgICAgIC8vICAgLmF0dHIoJ2N5JywgcHJvcHMuaGVpZ2h0IC8gMilcbiAgICAgICAgLy8gICAuYXR0cignY3gnLCAoZCwgaSkgPT5cbiAgICAgICAgLy8gICAgIGRhdGEuc2xpY2UoMCwgaSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkgKyAoZCAvIDIpXG4gICAgICAgIC8vICAgKVxuICAgICAgICAvLyAgIC5tZXJnZShjaXJjbGVzKVxuICAgICAgICAvLyAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gICAgICAgIC8vICAgLmF0dHIoJ2N4JywgKGQsIGkpID0+XG4gICAgICAgIC8vICAgICBkYXRhLnNsaWNlKDAsIGkpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApICsgKGQgLyAyKVxuICAgICAgICAvLyAgIClcbiAgICAgICAgLy8gICAuYXR0cigncicsIGQgPT4gZCAvIDIpO1xuXG4gICAgICAgIC8vIGNpcmNsZXMuZXhpdCgpXG4gICAgICAgIC8vICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgICAgLy8gICAuYXR0cigncicsIDApXG4gICAgICAgIC8vICAgLnJlbW92ZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbi8vIGNvbnNvbGUubG9nKHRoaXMuZGVmYXVsdFByb3BzKTtcbmV4cG9ydCBkZWZhdWx0IENvdW50cnlMb2NrZG93bkluZGljYXRvclN0cmlwczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})