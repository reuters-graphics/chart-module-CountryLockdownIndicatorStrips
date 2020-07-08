webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // see docs on https://github.com/reuters-graphics/graphics-atlas-client\n// import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';\n// const atlastClient = new AtlasMetadataClient();\n\nvar dateParse = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeParse('%Y-%m-%d');\nvar dateFormat = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeFormat('%b %e');\nvar dateFormat_tt = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeFormat('%B %e');\nvar numberFormat_tt = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].format(',');\n\nvar CountryLockdownIndicatorStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryLockdownIndicatorStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryLockdownIndicatorStrips);\n\n  function CountryLockdownIndicatorStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryLockdownIndicatorStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      dataParams: {\n        date: 'date',\n        index: 'c1',\n        steps: 2,\n        // stepValue = 0, 1...\n        stepValue: 'flag'\n      },\n      height: 50,\n      margin: {\n        top: 10,\n        right: 10,\n        bottom: 10,\n        left: 10\n      },\n      valign: 'center',\n      // start, center, baseline\n      baseColor: '#ECEFF4',\n      stripColor: {\n        0: '#ECEFF4',\n        1: '#d1eeea',\n        2: '#ffe47f',\n        3: '#a50f15'\n      },\n      legendItems: {\n        // should contain items from stripColor\n        'null': 'No data',\n        'stepLegend': {\n          0: 'targeted',\n          1: 'nationwide'\n        },\n        'indexLegend': {\n          0: 'no measures',\n          1: 'recommend closing',\n          2: 'require closing on some levels',\n          3: 'require closing all levels'\n        },\n        'textSize': '1rem'\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryLockdownIndicatorStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node(); // get country details from AtlasClient from ISO-2\n      // props.country = atlastClient.getCountry(props.countryISO2);\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // main chart container\n\n      var chartDiv = this.selection().appendSelect('div') // see docs in ./utils/d3.js\n      .attr('class', \"CountryLockdownIndicatorStrips\").style('width', \"\".concat(width, \"px\")).style('height', \"\".concat(props.height, \"px\")).appendSelect('div').style('transform', \"translate(\".concat(props.margin.left, \"px, \").concat(props.margin.top, \"px)\")); // set scales\n\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, props.dataParams.steps - 1]).range([props.height - props.margin.bottom, props.margin.top]);\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleBand().domain(data.map(function (d) {\n        return dateParse(d[props.dataParams.date]);\n      })).range([props.margin.left, width - props.margin.right]).padding(0);\n      var colorDomain = props.stripColor ? Object.keys(props.stripColor).map(function (d) {\n        return +d;\n      }) : _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(data.map(function (d) {\n        return d[props.dataParams.index];\n      }));\n      var colorRange = props.stripColor ? colorDomain.map(function (d) {\n        return props.stripColor[\"\".concat(d)];\n      }) : ['#cccccc', '#333333'];\n      var colorScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(colorDomain).range(colorRange).interpolate(d3__WEBPACK_IMPORTED_MODULE_10__[\"interpolateHcl\"]); // make bars\n\n      var bars = chartDiv.appendSelect('div.bars-container').style('display', 'flex').style('align-items', \"\".concat(props.valign)).selectAll('.bar').data(data, function (d, i) {\n        return d[props.dataParams.date];\n      }); // for smooth data updation\n\n      bars.enter().append('div').attr('class', function (d) {\n        return \"bar \".concat(d[props.dataParams.date]);\n      }).style('display', 'inline-block').style('height', function (d) {\n        var stepSize = (props.height - props.margin.top - props.margin.bottom) / props.dataParams.steps;\n        var step = d[props.dataParams.stepValue] + 1;\n        return d[props.dataParams.index] ? step ? step * stepSize + 'px' : stepSize + 'px' : stepSize + 'px';\n      }).style('width', xScale.bandwidth() + 'px').style('background', function (d) {\n        var val = parseFloat(d[props.dataParams.index]);\n        return val !== null && !isNaN(val) ? colorScale(val) : props.baseColor;\n      }).merge(bars).transition(transition).style('display', 'inline-block').style('height', function (d) {\n        var stepSize = (props.height - props.margin.top - props.margin.bottom) / props.dataParams.steps;\n        var step = d[props.dataParams.stepValue] + 1;\n        return d[props.dataParams.index] ? step ? step * stepSize + 'px' : stepSize + 'px' : stepSize + 'px';\n      }).style('width', xScale.bandwidth() + 'px').style('background', function (d) {\n        var val = parseFloat(d[props.dataParams.index]);\n        console.log(val === null || isNaN(val));\n        return val !== null && !isNaN(val) ? colorScale(val) : props.baseColor;\n      });\n      bars.exit().transition(transition).attr('height', 0).remove();\n\n      if (props.legendItems) {}\n\n      var indexLegendItems = [];\n      Object.keys(props.legendItems.indexLegend).foreach(function (d) {\n        var item = {\n          key: d,\n          value: props.legendItems.indexLegend[d]\n        };\n        indexLegendItems.push(item);\n      });\n      console.log(indexLegendItems); // make legend\n\n      var indexLegend = chartDiv.appendSelect('div.legend-container') // .style('display', 'flex')\n      // .style('align-items', `${props.valign}`)\n      .selectAll('.legend-div').data([props.legendItems]); // for smooth data updation\n\n      indexLegend.enter().append('div').attr('class', \"legend-div indexLegend\").style('width', \"\".concat(0.5 * (width - props.margin.right - props.margin.left), \"px\"));\n      return this;\n    }\n  }]);\n\n  return CountryLockdownIndicatorStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]); // console.log(this.defaultProps);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryLockdownIndicatorStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiZGF0ZVBhcnNlIiwiZDMiLCJ0aW1lUGFyc2UiLCJkYXRlRm9ybWF0IiwidGltZUZvcm1hdCIsImRhdGVGb3JtYXRfdHQiLCJudW1iZXJGb3JtYXRfdHQiLCJmb3JtYXQiLCJDb3VudHJ5TG9ja2Rvd25JbmRpY2F0b3JTdHJpcHMiLCJkYXRhUGFyYW1zIiwiZGF0ZSIsImluZGV4Iiwic3RlcHMiLCJzdGVwVmFsdWUiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ2YWxpZ24iLCJiYXNlQ29sb3IiLCJzdHJpcENvbG9yIiwibGVnZW5kSXRlbXMiLCJkZWZhdWx0RGF0YSIsImRhdGEiLCJwcm9wcyIsIm5vZGUiLCJzZWxlY3Rpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNoYXJ0RGl2IiwiYXBwZW5kU2VsZWN0IiwiYXR0ciIsInN0eWxlIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInhTY2FsZSIsInNjYWxlQmFuZCIsIm1hcCIsImQiLCJwYWRkaW5nIiwiY29sb3JEb21haW4iLCJPYmplY3QiLCJrZXlzIiwiZXh0ZW50IiwiY29sb3JSYW5nZSIsImNvbG9yU2NhbGUiLCJpbnRlcnBvbGF0ZSIsImludGVycG9sYXRlSGNsIiwiYmFycyIsInNlbGVjdEFsbCIsImkiLCJlbnRlciIsImFwcGVuZCIsInN0ZXBTaXplIiwic3RlcCIsImJhbmR3aWR0aCIsInZhbCIsInBhcnNlRmxvYXQiLCJpc05hTiIsIm1lcmdlIiwiY29uc29sZSIsImxvZyIsImV4aXQiLCJyZW1vdmUiLCJpbmRleExlZ2VuZEl0ZW1zIiwiaW5kZXhMZWdlbmQiLCJmb3JlYWNoIiwiaXRlbSIsImtleSIsInZhbHVlIiwicHVzaCIsIkNoYXJ0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBR0MsaURBQUUsQ0FBQ0MsU0FBSCxDQUFhLFVBQWIsQ0FBbEI7QUFDQSxJQUFNQyxVQUFVLEdBQUdGLGlEQUFFLENBQUNHLFVBQUgsQ0FBYyxPQUFkLENBQW5CO0FBQ0EsSUFBTUMsYUFBYSxHQUFHSixpREFBRSxDQUFDRyxVQUFILENBQWMsT0FBZCxDQUF0QjtBQUNBLElBQU1FLGVBQWUsR0FBR0wsaURBQUUsQ0FBQ00sTUFBSCxDQUFVLEdBQVYsQ0FBeEI7O0lBRU1DLDhCOzs7Ozs7Ozs7Ozs7Ozs7O3VOQUNhO0FBQ1hDLGdCQUFVLEVBQUU7QUFDUkMsWUFBSSxFQUFFLE1BREU7QUFFUkMsYUFBSyxFQUFFLElBRkM7QUFHUkMsYUFBSyxFQUFFLENBSEM7QUFHRTtBQUNWQyxpQkFBUyxFQUFFO0FBSkgsT0FERDtBQU9YQyxZQUFNLEVBQUUsRUFQRztBQVFYQyxZQUFNLEVBQUU7QUFDSkMsV0FBRyxFQUFFLEVBREQ7QUFFSkMsYUFBSyxFQUFFLEVBRkg7QUFHSkMsY0FBTSxFQUFFLEVBSEo7QUFJSkMsWUFBSSxFQUFFO0FBSkYsT0FSRztBQWNYQyxZQUFNLEVBQUUsUUFkRztBQWNPO0FBQ2xCQyxlQUFTLEVBQUUsU0FmQTtBQWdCWEMsZ0JBQVUsRUFBRTtBQUNSLFdBQUcsU0FESztBQUVSLFdBQUcsU0FGSztBQUdSLFdBQUcsU0FISztBQUlSLFdBQUc7QUFKSyxPQWhCRDtBQXNCWEMsaUJBQVcsRUFBRTtBQUFFO0FBQ1gsZ0JBQVEsU0FEQztBQUVULHNCQUFjO0FBQ1YsYUFBRyxVQURPO0FBRVYsYUFBRztBQUZPLFNBRkw7QUFNVCx1QkFBZTtBQUNYLGFBQUcsYUFEUTtBQUVYLGFBQUcsbUJBRlE7QUFHWCxhQUFHLGdDQUhRO0FBSVgsYUFBRztBQUpRLFNBTk47QUFZVCxvQkFBWTtBQVpIO0FBdEJGLEs7O3NOQXNDREMsOEM7Ozs7Ozs7MkJBRVA7QUFDSCxVQUFNQyxJQUFJLEdBQUcsS0FBS0EsSUFBTCxFQUFiO0FBQ0EsVUFBTUMsS0FBSyxHQUFHLEtBQUtBLEtBQUwsRUFBZDtBQUNBLFVBQU1DLElBQUksR0FBRyxLQUFLQyxTQUFMLEdBQWlCRCxJQUFqQixFQUFiLENBSEcsQ0FLSDtBQUNBOztBQU5HLGtDQVVDQSxJQUFJLENBQUNFLHFCQUFMLEVBVkQ7QUFBQSxVQVNDQyxLQVRELHlCQVNDQSxLQVREOztBQVlILFVBQU1DLFVBQVUsR0FBRzlCLGlEQUFFLENBQUM4QixVQUFILEdBQ2RDLFFBRGMsQ0FDTCxHQURLLENBQW5CLENBWkcsQ0FlSDs7QUFDQSxVQUFNQyxRQUFRLEdBQUcsS0FBS0wsU0FBTCxHQUNaTSxZQURZLENBQ0MsS0FERCxFQUNRO0FBRFIsT0FFWkMsSUFGWSxDQUVQLE9BRk8sb0NBR1pDLEtBSFksQ0FHTixPQUhNLFlBR01OLEtBSE4sU0FJWk0sS0FKWSxDQUlOLFFBSk0sWUFJT1YsS0FBSyxDQUFDWixNQUpiLFNBS1pvQixZQUxZLENBS0MsS0FMRCxFQU1aRSxLQU5ZLENBTU4sV0FOTSxzQkFNb0JWLEtBQUssQ0FBQ1gsTUFBTixDQUFhSSxJQU5qQyxpQkFNNENPLEtBQUssQ0FBQ1gsTUFBTixDQUFhQyxHQU56RCxTQUFqQixDQWhCRyxDQXdCSDs7QUFDQSxVQUFNcUIsTUFBTSxHQUFHcEMsaURBQUUsQ0FBQ3FDLFdBQUgsR0FDVkMsTUFEVSxDQUNILENBQUMsQ0FBRCxFQUFJYixLQUFLLENBQUNqQixVQUFOLENBQWlCRyxLQUFqQixHQUF5QixDQUE3QixDQURHLEVBRVY0QixLQUZVLENBRUosQ0FBQ2QsS0FBSyxDQUFDWixNQUFOLEdBQWVZLEtBQUssQ0FBQ1gsTUFBTixDQUFhRyxNQUE3QixFQUFxQ1EsS0FBSyxDQUFDWCxNQUFOLENBQWFDLEdBQWxELENBRkksQ0FBZjtBQUlBLFVBQU15QixNQUFNLEdBQUd4QyxpREFBRSxDQUFDeUMsU0FBSCxHQUNWSCxNQURVLENBQ0hkLElBQUksQ0FBQ2tCLEdBQUwsQ0FBUyxVQUFBQyxDQUFDO0FBQUEsZUFBSTVDLFNBQVMsQ0FBQzRDLENBQUMsQ0FBQ2xCLEtBQUssQ0FBQ2pCLFVBQU4sQ0FBaUJDLElBQWxCLENBQUYsQ0FBYjtBQUFBLE9BQVYsQ0FERyxFQUVWOEIsS0FGVSxDQUVKLENBQUNkLEtBQUssQ0FBQ1gsTUFBTixDQUFhSSxJQUFkLEVBQW9CVyxLQUFLLEdBQUdKLEtBQUssQ0FBQ1gsTUFBTixDQUFhRSxLQUF6QyxDQUZJLEVBR1Y0QixPQUhVLENBR0YsQ0FIRSxDQUFmO0FBS0EsVUFBTUMsV0FBVyxHQUFHcEIsS0FBSyxDQUFDSixVQUFOLEdBQW9CeUIsTUFBTSxDQUFDQyxJQUFQLENBQVl0QixLQUFLLENBQUNKLFVBQWxCLENBQUQsQ0FBZ0NxQixHQUFoQyxDQUFvQyxVQUFBQyxDQUFDO0FBQUEsZUFBSSxDQUFDQSxDQUFMO0FBQUEsT0FBckMsQ0FBbkIsR0FBa0UzQyxpREFBRSxDQUFDZ0QsTUFBSCxDQUFVeEIsSUFBSSxDQUFDa0IsR0FBTCxDQUFTLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNsQixLQUFLLENBQUNqQixVQUFOLENBQWlCRSxLQUFsQixDQUFMO0FBQUEsT0FBVixDQUFWLENBQXRGO0FBRUEsVUFBTXVDLFVBQVUsR0FBR3hCLEtBQUssQ0FBQ0osVUFBTixHQUFtQndCLFdBQVcsQ0FBQ0gsR0FBWixDQUFnQixVQUFBQyxDQUFDO0FBQUEsZUFBSWxCLEtBQUssQ0FBQ0osVUFBTixXQUFvQnNCLENBQXBCLEVBQUo7QUFBQSxPQUFqQixDQUFuQixHQUFvRSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBQXZGO0FBRUEsVUFBTU8sVUFBVSxHQUFHbEQsaURBQUUsQ0FBQ3FDLFdBQUgsR0FDZEMsTUFEYyxDQUNQTyxXQURPLEVBRWROLEtBRmMsQ0FFUlUsVUFGUSxFQUdkRSxXQUhjLENBR0ZDLGtEQUhFLENBQW5CLENBdENHLENBMkNIOztBQUNBLFVBQU1DLElBQUksR0FBR3JCLFFBQVEsQ0FBQ0MsWUFBVCxDQUFzQixvQkFBdEIsRUFDUkUsS0FEUSxDQUNGLFNBREUsRUFDUyxNQURULEVBRVJBLEtBRlEsQ0FFRixhQUZFLFlBRWdCVixLQUFLLENBQUNOLE1BRnRCLEdBR1JtQyxTQUhRLENBR0UsTUFIRixFQUlSOUIsSUFKUSxDQUlIQSxJQUpHLEVBSUcsVUFBQ21CLENBQUQsRUFBSVksQ0FBSjtBQUFBLGVBQVVaLENBQUMsQ0FBQ2xCLEtBQUssQ0FBQ2pCLFVBQU4sQ0FBaUJDLElBQWxCLENBQVg7QUFBQSxPQUpILENBQWIsQ0E1Q0csQ0FnRGtEOztBQUVyRDRDLFVBQUksQ0FBQ0csS0FBTCxHQUFhQyxNQUFiLENBQW9CLEtBQXBCLEVBQ0t2QixJQURMLENBQ1UsT0FEVixFQUNtQixVQUFBUyxDQUFDO0FBQUEsNkJBQVdBLENBQUMsQ0FBQ2xCLEtBQUssQ0FBQ2pCLFVBQU4sQ0FBaUJDLElBQWxCLENBQVo7QUFBQSxPQURwQixFQUVLMEIsS0FGTCxDQUVXLFNBRlgsRUFFc0IsY0FGdEIsRUFHS0EsS0FITCxDQUdXLFFBSFgsRUFHcUIsVUFBQVEsQ0FBQyxFQUFJO0FBQ2xCLFlBQU1lLFFBQVEsR0FBRyxDQUFDakMsS0FBSyxDQUFDWixNQUFOLEdBQWVZLEtBQUssQ0FBQ1gsTUFBTixDQUFhQyxHQUE1QixHQUFrQ1UsS0FBSyxDQUFDWCxNQUFOLENBQWFHLE1BQWhELElBQTBEUSxLQUFLLENBQUNqQixVQUFOLENBQWlCRyxLQUE1RjtBQUNBLFlBQU1nRCxJQUFJLEdBQUdoQixDQUFDLENBQUNsQixLQUFLLENBQUNqQixVQUFOLENBQWlCSSxTQUFsQixDQUFELEdBQWdDLENBQTdDO0FBQ0EsZUFBTytCLENBQUMsQ0FBQ2xCLEtBQUssQ0FBQ2pCLFVBQU4sQ0FBaUJFLEtBQWxCLENBQUQsR0FBNkJpRCxJQUFJLEdBQUdBLElBQUksR0FBR0QsUUFBUCxHQUFrQixJQUFyQixHQUE0QkEsUUFBUSxHQUFHLElBQXhFLEdBQWdGQSxRQUFRLEdBQUcsSUFBbEc7QUFDSCxPQVBMLEVBUUt2QixLQVJMLENBUVcsT0FSWCxFQVFvQkssTUFBTSxDQUFDb0IsU0FBUCxLQUFxQixJQVJ6QyxFQVNLekIsS0FUTCxDQVNXLFlBVFgsRUFTeUIsVUFBQVEsQ0FBQyxFQUFJO0FBQ3RCLFlBQUlrQixHQUFHLEdBQUdDLFVBQVUsQ0FBQ25CLENBQUMsQ0FBQ2xCLEtBQUssQ0FBQ2pCLFVBQU4sQ0FBaUJFLEtBQWxCLENBQUYsQ0FBcEI7QUFDQSxlQUFRbUQsR0FBRyxLQUFLLElBQVQsSUFBa0IsQ0FBRUUsS0FBSyxDQUFDRixHQUFELENBQXpCLEdBQWtDWCxVQUFVLENBQUNXLEdBQUQsQ0FBNUMsR0FBb0RwQyxLQUFLLENBQUNMLFNBQWpFO0FBQ0gsT0FaTCxFQWFLNEMsS0FiTCxDQWFXWCxJQWJYLEVBY0t2QixVQWRMLENBY2dCQSxVQWRoQixFQWVLSyxLQWZMLENBZVcsU0FmWCxFQWVzQixjQWZ0QixFQWdCS0EsS0FoQkwsQ0FnQlcsUUFoQlgsRUFnQnFCLFVBQUFRLENBQUMsRUFBSTtBQUNsQixZQUFNZSxRQUFRLEdBQUcsQ0FBQ2pDLEtBQUssQ0FBQ1osTUFBTixHQUFlWSxLQUFLLENBQUNYLE1BQU4sQ0FBYUMsR0FBNUIsR0FBa0NVLEtBQUssQ0FBQ1gsTUFBTixDQUFhRyxNQUFoRCxJQUEwRFEsS0FBSyxDQUFDakIsVUFBTixDQUFpQkcsS0FBNUY7QUFDQSxZQUFNZ0QsSUFBSSxHQUFHaEIsQ0FBQyxDQUFDbEIsS0FBSyxDQUFDakIsVUFBTixDQUFpQkksU0FBbEIsQ0FBRCxHQUFnQyxDQUE3QztBQUNBLGVBQU8rQixDQUFDLENBQUNsQixLQUFLLENBQUNqQixVQUFOLENBQWlCRSxLQUFsQixDQUFELEdBQTZCaUQsSUFBSSxHQUFHQSxJQUFJLEdBQUdELFFBQVAsR0FBa0IsSUFBckIsR0FBNEJBLFFBQVEsR0FBRyxJQUF4RSxHQUFnRkEsUUFBUSxHQUFHLElBQWxHO0FBQ0gsT0FwQkwsRUFxQkt2QixLQXJCTCxDQXFCVyxPQXJCWCxFQXFCb0JLLE1BQU0sQ0FBQ29CLFNBQVAsS0FBcUIsSUFyQnpDLEVBc0JLekIsS0F0QkwsQ0FzQlcsWUF0QlgsRUFzQnlCLFVBQUFRLENBQUMsRUFBSTtBQUN0QixZQUFJa0IsR0FBRyxHQUFHQyxVQUFVLENBQUNuQixDQUFDLENBQUNsQixLQUFLLENBQUNqQixVQUFOLENBQWlCRSxLQUFsQixDQUFGLENBQXBCO0FBQ0F1RCxlQUFPLENBQUNDLEdBQVIsQ0FBYUwsR0FBRyxLQUFLLElBQVQsSUFBbUJFLEtBQUssQ0FBQ0YsR0FBRCxDQUFwQztBQUNBLGVBQVFBLEdBQUcsS0FBSyxJQUFULElBQWtCLENBQUVFLEtBQUssQ0FBQ0YsR0FBRCxDQUF6QixHQUFrQ1gsVUFBVSxDQUFDVyxHQUFELENBQTVDLEdBQW9EcEMsS0FBSyxDQUFDTCxTQUFqRTtBQUNILE9BMUJMO0FBNEJBaUMsVUFBSSxDQUFDYyxJQUFMLEdBQ0tyQyxVQURMLENBQ2dCQSxVQURoQixFQUVLSSxJQUZMLENBRVUsUUFGVixFQUVvQixDQUZwQixFQUdLa0MsTUFITDs7QUFNQSxVQUFJM0MsS0FBSyxDQUFDSCxXQUFWLEVBQXVCLENBRXRCOztBQUNELFVBQU0rQyxnQkFBZ0IsR0FBRyxFQUF6QjtBQUNDdkIsWUFBTSxDQUFDQyxJQUFQLENBQVl0QixLQUFLLENBQUNILFdBQU4sQ0FBa0JnRCxXQUE5QixDQUFELENBQTZDQyxPQUE3QyxDQUFxRCxVQUFBNUIsQ0FBQyxFQUFJO0FBQ3RELFlBQUk2QixJQUFJLEdBQUc7QUFDUEMsYUFBRyxFQUFFOUIsQ0FERTtBQUVQK0IsZUFBSyxFQUFFakQsS0FBSyxDQUFDSCxXQUFOLENBQWtCZ0QsV0FBbEIsQ0FBOEIzQixDQUE5QjtBQUZBLFNBQVg7QUFJQTBCLHdCQUFnQixDQUFDTSxJQUFqQixDQUFzQkgsSUFBdEI7QUFDSCxPQU5EO0FBUUFQLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRyxnQkFBWixFQWhHRyxDQWlHQzs7QUFDSixVQUFNQyxXQUFXLEdBQUd0QyxRQUFRLENBQUNDLFlBQVQsQ0FBc0Isc0JBQXRCLEVBQ2hCO0FBQ0E7QUFGZ0IsT0FHZnFCLFNBSGUsQ0FHTCxhQUhLLEVBSWY5QixJQUplLENBSVYsQ0FBQ0MsS0FBSyxDQUFDSCxXQUFQLENBSlUsQ0FBcEIsQ0FsR0csQ0FzRzZCOztBQUVoQ2dELGlCQUFXLENBQUNkLEtBQVosR0FBb0JDLE1BQXBCLENBQTJCLEtBQTNCLEVBQ0t2QixJQURMLENBQ1UsT0FEViw0QkFFS0MsS0FGTCxDQUVXLE9BRlgsWUFFdUIsT0FBS04sS0FBSyxHQUFHSixLQUFLLENBQUNYLE1BQU4sQ0FBYUUsS0FBckIsR0FBNkJTLEtBQUssQ0FBQ1gsTUFBTixDQUFhSSxJQUEvQyxDQUZ2QjtBQU1BLGFBQU8sSUFBUDtBQUNIOzs7O0VBeEp3QzBELDRELEdBMEo3Qzs7O0FBQ2VyRSw2RkFBZiIsImZpbGUiOiIuL3NyYy9saWIvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnLi9iYXNlL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCBkMyBmcm9tICcuL3V0aWxzL2QzJztcbmltcG9ydCBkZWZhdWx0RGF0YSBmcm9tICcuL2RlZmF1bHREYXRhLmpzb24nO1xuaW1wb3J0IHsgaW50ZXJwb2xhdGUsIGludGVycG9sYXRlSHNsLCBpbnRlcnBvbGF0ZUhjbCB9IGZyb20gJ2QzJztcbi8vIHNlZSBkb2NzIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9yZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudFxuLy8gaW1wb3J0IEF0bGFzTWV0YWRhdGFDbGllbnQgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50Jztcbi8vIGNvbnN0IGF0bGFzdENsaWVudCA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG5cbmNvbnN0IGRhdGVQYXJzZSA9IGQzLnRpbWVQYXJzZSgnJVktJW0tJWQnKTtcbmNvbnN0IGRhdGVGb3JtYXQgPSBkMy50aW1lRm9ybWF0KCclYiAlZScpO1xuY29uc3QgZGF0ZUZvcm1hdF90dCA9IGQzLnRpbWVGb3JtYXQoJyVCICVlJyk7XG5jb25zdCBudW1iZXJGb3JtYXRfdHQgPSBkMy5mb3JtYXQoJywnKTtcblxuY2xhc3MgQ291bnRyeUxvY2tkb3duSW5kaWNhdG9yU3RyaXBzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICAgIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZGF0YVBhcmFtczoge1xuICAgICAgICAgICAgZGF0ZTogJ2RhdGUnLFxuICAgICAgICAgICAgaW5kZXg6ICdjMScsXG4gICAgICAgICAgICBzdGVwczogMiwgLy8gc3RlcFZhbHVlID0gMCwgMS4uLlxuICAgICAgICAgICAgc3RlcFZhbHVlOiAnZmxhZycsXG4gICAgICAgIH0sXG4gICAgICAgIGhlaWdodDogNTAsXG4gICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgICAgIHJpZ2h0OiAxMCxcbiAgICAgICAgICAgIGJvdHRvbTogMTAsXG4gICAgICAgICAgICBsZWZ0OiAxMCxcbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWduOiAnY2VudGVyJywgLy8gc3RhcnQsIGNlbnRlciwgYmFzZWxpbmVcbiAgICAgICAgYmFzZUNvbG9yOiAnI0VDRUZGNCcsXG4gICAgICAgIHN0cmlwQ29sb3I6IHtcbiAgICAgICAgICAgIDA6ICcjRUNFRkY0JyxcbiAgICAgICAgICAgIDE6ICcjZDFlZWVhJyxcbiAgICAgICAgICAgIDI6ICcjZmZlNDdmJyxcbiAgICAgICAgICAgIDM6ICcjYTUwZjE1JyxcbiAgICAgICAgfSxcbiAgICAgICAgbGVnZW5kSXRlbXM6IHsgLy8gc2hvdWxkIGNvbnRhaW4gaXRlbXMgZnJvbSBzdHJpcENvbG9yXG4gICAgICAgICAgICAnbnVsbCc6ICdObyBkYXRhJyxcbiAgICAgICAgICAgICdzdGVwTGVnZW5kJzoge1xuICAgICAgICAgICAgICAgIDA6ICd0YXJnZXRlZCcsXG4gICAgICAgICAgICAgICAgMTogJ25hdGlvbndpZGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2luZGV4TGVnZW5kJzoge1xuICAgICAgICAgICAgICAgIDA6ICdubyBtZWFzdXJlcycsXG4gICAgICAgICAgICAgICAgMTogJ3JlY29tbWVuZCBjbG9zaW5nJyxcbiAgICAgICAgICAgICAgICAyOiAncmVxdWlyZSBjbG9zaW5nIG9uIHNvbWUgbGV2ZWxzJyxcbiAgICAgICAgICAgICAgICAzOiAncmVxdWlyZSBjbG9zaW5nIGFsbCBsZXZlbHMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3RleHRTaXplJzogJzFyZW0nXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZGVmYXVsdERhdGEgPSBkZWZhdWx0RGF0YTtcblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEoKTtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcblxuICAgICAgICAvLyBnZXQgY291bnRyeSBkZXRhaWxzIGZyb20gQXRsYXNDbGllbnQgZnJvbSBJU08tMlxuICAgICAgICAvLyBwcm9wcy5jb3VudHJ5ID0gYXRsYXN0Q2xpZW50LmdldENvdW50cnkocHJvcHMuY291bnRyeUlTTzIpO1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICB9ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zdCB0cmFuc2l0aW9uID0gZDMudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oNzUwKTtcblxuICAgICAgICAvLyBtYWluIGNoYXJ0IGNvbnRhaW5lclxuICAgICAgICBjb25zdCBjaGFydERpdiA9IHRoaXMuc2VsZWN0aW9uKClcbiAgICAgICAgICAgIC5hcHBlbmRTZWxlY3QoJ2RpdicpIC8vIHNlZSBkb2NzIGluIC4vdXRpbHMvZDMuanNcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGBDb3VudHJ5TG9ja2Rvd25JbmRpY2F0b3JTdHJpcHNgKVxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsIGAke3dpZHRofXB4YClcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgYCR7cHJvcHMuaGVpZ2h0fXB4YClcbiAgICAgICAgICAgIC5hcHBlbmRTZWxlY3QoJ2RpdicpXG4gICAgICAgICAgICAuc3R5bGUoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtwcm9wcy5tYXJnaW4ubGVmdH1weCwgJHtwcm9wcy5tYXJnaW4udG9wfXB4KWApO1xuXG4gICAgICAgIC8vIHNldCBzY2FsZXNcbiAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbMCwgcHJvcHMuZGF0YVBhcmFtcy5zdGVwcyAtIDFdKVxuICAgICAgICAgICAgLnJhbmdlKFtwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4uYm90dG9tLCBwcm9wcy5tYXJnaW4udG9wXSk7XG5cbiAgICAgICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVCYW5kKClcbiAgICAgICAgICAgIC5kb21haW4oZGF0YS5tYXAoZCA9PiBkYXRlUGFyc2UoZFtwcm9wcy5kYXRhUGFyYW1zLmRhdGVdKSkpXG4gICAgICAgICAgICAucmFuZ2UoW3Byb3BzLm1hcmdpbi5sZWZ0LCB3aWR0aCAtIHByb3BzLm1hcmdpbi5yaWdodF0pXG4gICAgICAgICAgICAucGFkZGluZygwKTtcblxuICAgICAgICBjb25zdCBjb2xvckRvbWFpbiA9IHByb3BzLnN0cmlwQ29sb3IgPyAoT2JqZWN0LmtleXMocHJvcHMuc3RyaXBDb2xvcikpLm1hcChkID0+ICtkKSA6IGQzLmV4dGVudChkYXRhLm1hcChkID0+IGRbcHJvcHMuZGF0YVBhcmFtcy5pbmRleF0pKTtcblxuICAgICAgICBjb25zdCBjb2xvclJhbmdlID0gcHJvcHMuc3RyaXBDb2xvciA/IGNvbG9yRG9tYWluLm1hcChkID0+IHByb3BzLnN0cmlwQ29sb3JbYCR7ZH1gXSkgOiBbJyNjY2NjY2MnLCAnIzMzMzMzMyddXG5cbiAgICAgICAgY29uc3QgY29sb3JTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oY29sb3JEb21haW4pXG4gICAgICAgICAgICAucmFuZ2UoY29sb3JSYW5nZSlcbiAgICAgICAgICAgIC5pbnRlcnBvbGF0ZShpbnRlcnBvbGF0ZUhjbCk7XG5cbiAgICAgICAgLy8gbWFrZSBiYXJzXG4gICAgICAgIGNvbnN0IGJhcnMgPSBjaGFydERpdi5hcHBlbmRTZWxlY3QoJ2Rpdi5iYXJzLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnZmxleCcpXG4gICAgICAgICAgICAuc3R5bGUoJ2FsaWduLWl0ZW1zJywgYCR7cHJvcHMudmFsaWdufWApXG4gICAgICAgICAgICAuc2VsZWN0QWxsKCcuYmFyJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEsIChkLCBpKSA9PiBkW3Byb3BzLmRhdGFQYXJhbXMuZGF0ZV0pOyAvLyBmb3Igc21vb3RoIGRhdGEgdXBkYXRpb25cblxuICAgICAgICBiYXJzLmVudGVyKCkuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBgYmFyICR7ZFtwcm9wcy5kYXRhUGFyYW1zLmRhdGVdfWApXG4gICAgICAgICAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJylcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RlcFNpemUgPSAocHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLnRvcCAtIHByb3BzLm1hcmdpbi5ib3R0b20pIC8gcHJvcHMuZGF0YVBhcmFtcy5zdGVwcztcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwID0gZFtwcm9wcy5kYXRhUGFyYW1zLnN0ZXBWYWx1ZV0gKyAxO1xuICAgICAgICAgICAgICAgIHJldHVybiBkW3Byb3BzLmRhdGFQYXJhbXMuaW5kZXhdID8gKHN0ZXAgPyBzdGVwICogc3RlcFNpemUgKyAncHgnIDogc3RlcFNpemUgKyAncHgnKSA6IHN0ZXBTaXplICsgJ3B4JztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywgeFNjYWxlLmJhbmR3aWR0aCgpICsgJ3B4JylcbiAgICAgICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsIGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YWwgPSBwYXJzZUZsb2F0KGRbcHJvcHMuZGF0YVBhcmFtcy5pbmRleF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiAodmFsICE9PSBudWxsKSAmJiAhKGlzTmFOKHZhbCkpID8gY29sb3JTY2FsZSh2YWwpIDogcHJvcHMuYmFzZUNvbG9yO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tZXJnZShiYXJzKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgICAgICAgIC5zdHlsZSgnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKVxuICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwU2l6ZSA9IChwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4udG9wIC0gcHJvcHMubWFyZ2luLmJvdHRvbSkgLyBwcm9wcy5kYXRhUGFyYW1zLnN0ZXBzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBkW3Byb3BzLmRhdGFQYXJhbXMuc3RlcFZhbHVlXSArIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRbcHJvcHMuZGF0YVBhcmFtcy5pbmRleF0gPyAoc3RlcCA/IHN0ZXAgKiBzdGVwU2l6ZSArICdweCcgOiBzdGVwU2l6ZSArICdweCcpIDogc3RlcFNpemUgKyAncHgnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCB4U2NhbGUuYmFuZHdpZHRoKCkgKyAncHgnKVxuICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IHBhcnNlRmxvYXQoZFtwcm9wcy5kYXRhUGFyYW1zLmluZGV4XSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coKHZhbCA9PT0gbnVsbCkgfHwgKGlzTmFOKHZhbCkpKVxuICAgICAgICAgICAgICAgIHJldHVybiAodmFsICE9PSBudWxsKSAmJiAhKGlzTmFOKHZhbCkpID8gY29sb3JTY2FsZSh2YWwpIDogcHJvcHMuYmFzZUNvbG9yO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgYmFycy5leGl0KClcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgMClcbiAgICAgICAgICAgIC5yZW1vdmUoKTtcblxuXG4gICAgICAgIGlmIChwcm9wcy5sZWdlbmRJdGVtcykge1xuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXhMZWdlbmRJdGVtcyA9IFtdO1xuICAgICAgICAoT2JqZWN0LmtleXMocHJvcHMubGVnZW5kSXRlbXMuaW5kZXhMZWdlbmQpKS5mb3JlYWNoKGQgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAga2V5OiBkLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5sZWdlbmRJdGVtcy5pbmRleExlZ2VuZFtkXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXhMZWdlbmRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhpbmRleExlZ2VuZEl0ZW1zKVxuICAgICAgICAgICAgLy8gbWFrZSBsZWdlbmRcbiAgICAgICAgY29uc3QgaW5kZXhMZWdlbmQgPSBjaGFydERpdi5hcHBlbmRTZWxlY3QoJ2Rpdi5sZWdlbmQtY29udGFpbmVyJylcbiAgICAgICAgICAgIC8vIC5zdHlsZSgnZGlzcGxheScsICdmbGV4JylcbiAgICAgICAgICAgIC8vIC5zdHlsZSgnYWxpZ24taXRlbXMnLCBgJHtwcm9wcy52YWxpZ259YClcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoJy5sZWdlbmQtZGl2JylcbiAgICAgICAgICAgIC5kYXRhKFtwcm9wcy5sZWdlbmRJdGVtc10pOyAvLyBmb3Igc21vb3RoIGRhdGEgdXBkYXRpb25cblxuICAgICAgICBpbmRleExlZ2VuZC5lbnRlcigpLmFwcGVuZCgnZGl2JylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGBsZWdlbmQtZGl2IGluZGV4TGVnZW5kYClcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCBgJHswLjUqKHdpZHRoIC0gcHJvcHMubWFyZ2luLnJpZ2h0IC0gcHJvcHMubWFyZ2luLmxlZnQpfXB4YClcblxuXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuLy8gY29uc29sZS5sb2codGhpcy5kZWZhdWx0UHJvcHMpO1xuZXhwb3J0IGRlZmF1bHQgQ291bnRyeUxvY2tkb3duSW5kaWNhdG9yU3RyaXBzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})