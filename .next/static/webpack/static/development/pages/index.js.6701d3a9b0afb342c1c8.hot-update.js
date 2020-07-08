webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var d3_selection_multi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-selection-multi */ \"./node_modules/d3-selection-multi/index.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n // see docs on https://github.com/reuters-graphics/graphics-atlas-client\n// import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';\n// const atlastClient = new AtlasMetadataClient();\n\nvar dateParse = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeParse('%Y-%m-%d');\nvar dateFormat = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeFormat('%b %e');\nvar dateFormat_tt = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeFormat('%B %e');\nvar numberFormat_tt = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].format(',');\n\nvar CountryLockdownIndicatorStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryLockdownIndicatorStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryLockdownIndicatorStrips);\n\n  function CountryLockdownIndicatorStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryLockdownIndicatorStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      dataParams: {\n        date: 'date',\n        index: 'c1',\n        steps: 2,\n        // stepValue = 0, 1...\n        stepValue: 'flag'\n      },\n      height: 250,\n      margin: {\n        top: 10,\n        right: 10,\n        bottom: 10,\n        left: 10\n      },\n      valign: 'center',\n      // start, center, baseline\n      baseColor: '#ECEFF4',\n      stripColor: {\n        // should be numeric values that are mapped from the data\n        0: '#d1eeea',\n        1: '#ffe47f',\n        2: 'orange',\n        3: '#a50f15'\n      },\n      legendItems: {\n        // should contain items from stripColor\n        'null': 'no data',\n        'stepLegend': {\n          0: 'targeted',\n          1: 'nationwide'\n        },\n        'indexLegend': {\n          0: 'no measures',\n          1: 'recommend closing',\n          2: 'require closing (only some levels or categories, eg just high school, or just public schools)',\n          3: 'require closing all levels'\n        }\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryLockdownIndicatorStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node(); // get country details from AtlasClient from ISO-2\n      // props.country = atlastClient.getCountry(props.countryISO2);\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // main chart container\n\n      var chartDiv = this.selection().appendSelect('div') // see docs in ./utils/d3.js\n      .attr('class', \"CountryLockdownIndicatorStrips\").style('width', \"\".concat(width, \"px\")).style('height', \"auto\").appendSelect('div').styles({\n        'margin-top': \"\".concat(props.margin.top, \"px\"),\n        'margin-right': \"\".concat(props.margin.right, \"px\"),\n        'margin-bottom': \"\".concat(props.margin.bottom, \"px\"),\n        'margin-left': \"\".concat(props.margin.left, \"px\")\n      }); // set scales\n\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, props.dataParams.steps - 1]).range([props.height - props.margin.bottom, props.margin.top]);\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleBand().domain(data.map(function (d) {\n        return dateParse(d[props.dataParams.date]);\n      })).range([props.margin.left, width - props.margin.right]).padding(0);\n      var colorDomain = props.stripColor ? Object.keys(props.stripColor).map(function (d) {\n        return +d;\n      }) : _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(data.map(function (d) {\n        return d[props.dataParams.index];\n      }));\n      var colorRange = props.stripColor ? colorDomain.map(function (d) {\n        return props.stripColor[\"\".concat(d)];\n      }) : ['#cccccc', '#333333'];\n      var colorScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(colorDomain).range(colorRange).interpolate(d3__WEBPACK_IMPORTED_MODULE_10__[\"interpolateHcl\"]); // make bars\n\n      var bars = chartDiv.appendSelect('div.bars-container').style('display', 'flex').style('align-items', \"\".concat(props.valign)).selectAll('.bar').data(data, function (d, i) {\n        return d[props.dataParams.date];\n      }); // for smooth data updation\n\n      var stripheight = props.legendItems ? (props.height - props.margin.top - props.margin.bottom) * 0.2 : props.height - props.margin.top - props.margin.bottom;\n      bars.enter().append('div').attr('class', function (d) {\n        return \"bar \".concat(d[props.dataParams.date]);\n      }).style('display', 'inline-block').style('height', function (d) {\n        var stepSize = stripheight / props.dataParams.steps;\n        var step = d[props.dataParams.stepValue] + 1;\n        return d[props.dataParams.index] ? step ? step * stepSize + 'px' : stepSize + 'px' : stepSize + 'px';\n      }).style('width', xScale.bandwidth() + 'px').style('background', function (d) {\n        var val = parseFloat(d[props.dataParams.index]);\n        return val !== null && !isNaN(val) ? colorScale(val) : props.baseColor;\n      }).merge(bars).transition(transition).style('display', 'inline-block').style('height', function (d) {\n        var stepSize = stripheight / props.dataParams.steps;\n        var step = d[props.dataParams.stepValue] + 1;\n        return d[props.dataParams.index] ? step ? step * stepSize + 'px' : stepSize + 'px' : stepSize + 'px';\n      }).style('width', xScale.bandwidth() + 'px').style('background', function (d) {\n        var val = parseFloat(d[props.dataParams.index]);\n        return val !== null && !isNaN(val) ? colorScale(val) : props.baseColor;\n      });\n      bars.exit().transition(transition).attr('height', 0).remove();\n\n      if (props.legendItems) {\n        var indexLegendItems = [];\n        Object.keys(props.legendItems.indexLegend).forEach(function (d) {\n          var item = {\n            key: d,\n            value: props.legendItems.indexLegend[d]\n          };\n          indexLegendItems.push(item);\n        });\n\n        if (props.legendItems['null']) {\n          indexLegendItems.push({\n            key: 'null',\n            value: props.legendItems['null']\n          });\n        }\n\n        var legendWidth = (width - props.margin.right - props.margin.left) / indexLegendItems.length;\n        console.log(indexLegendItems); // make legend\n\n        var indexLegend = chartDiv.appendSelect('div.legend-container') // .style('align-items', `${props.valign}`)\n        .selectAll('.legend-div').data(indexLegendItems); // for smooth data updation\n\n        indexLegend.enter().append('div').attr('class', \"legend-div indexLegend\").style('display', 'flex').style('align-items', \"start\") // .style('width', `${legendWidth}px`)\n        .html(function (d) {\n          var color = +d.key !== null && !isNaN(+d.key) ? props.stripColor[+d.key] : props.baseColor;\n          return \"<span style=\\\"width:1rem; height:1rem;min-width:1rem; min-height:1rem; background: \".concat(color, \"\\\"></span> <p style=\\\"margin:0 0 0 0.5rem;\\\">\").concat(d.value, \"</p>\");\n        }).merge(indexLegend) // .style('width', `${legendWidth}px`)\n        .html(function (d) {\n          var color = +d.key !== null && !isNaN(+d.key) ? props.stripColor[+d.key] : props.baseColor;\n          return \"<span style=\\\"width:1rem; height:1rem;min-width:1rem; min-height:1rem; background: \".concat(color, \"\\\"></span> <p style=\\\"margin:0 0 0 0.5rem;\\\">\").concat(d.value, \"</p>\");\n        });\n        indexLegend.exit().transition(transition).remove();\n      }\n\n      return this;\n    }\n  }]);\n\n  return CountryLockdownIndicatorStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]); // console.log(this.defaultProps);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryLockdownIndicatorStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiZGF0ZVBhcnNlIiwiZDMiLCJ0aW1lUGFyc2UiLCJkYXRlRm9ybWF0IiwidGltZUZvcm1hdCIsImRhdGVGb3JtYXRfdHQiLCJudW1iZXJGb3JtYXRfdHQiLCJmb3JtYXQiLCJDb3VudHJ5TG9ja2Rvd25JbmRpY2F0b3JTdHJpcHMiLCJkYXRhUGFyYW1zIiwiZGF0ZSIsImluZGV4Iiwic3RlcHMiLCJzdGVwVmFsdWUiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ2YWxpZ24iLCJiYXNlQ29sb3IiLCJzdHJpcENvbG9yIiwibGVnZW5kSXRlbXMiLCJkZWZhdWx0RGF0YSIsImRhdGEiLCJwcm9wcyIsIm5vZGUiLCJzZWxlY3Rpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNoYXJ0RGl2IiwiYXBwZW5kU2VsZWN0IiwiYXR0ciIsInN0eWxlIiwic3R5bGVzIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInhTY2FsZSIsInNjYWxlQmFuZCIsIm1hcCIsImQiLCJwYWRkaW5nIiwiY29sb3JEb21haW4iLCJPYmplY3QiLCJrZXlzIiwiZXh0ZW50IiwiY29sb3JSYW5nZSIsImNvbG9yU2NhbGUiLCJpbnRlcnBvbGF0ZSIsImludGVycG9sYXRlSGNsIiwiYmFycyIsInNlbGVjdEFsbCIsImkiLCJzdHJpcGhlaWdodCIsImVudGVyIiwiYXBwZW5kIiwic3RlcFNpemUiLCJzdGVwIiwiYmFuZHdpZHRoIiwidmFsIiwicGFyc2VGbG9hdCIsImlzTmFOIiwibWVyZ2UiLCJleGl0IiwicmVtb3ZlIiwiaW5kZXhMZWdlbmRJdGVtcyIsImluZGV4TGVnZW5kIiwiZm9yRWFjaCIsIml0ZW0iLCJrZXkiLCJ2YWx1ZSIsInB1c2giLCJsZWdlbmRXaWR0aCIsImxl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QVdLVSxJQVhMLENBV1UsVUFBQXBDLENBQUMsRUFBSTtBQUNQLGNBQUlxQyxLQUFLLEdBQUksQ0FBQ3JDLENBQUMsQ0FBQzZCLEdBQUgsS0FBVyxJQUFaLElBQXFCLENBQUVSLEtBQUssQ0FBQyxDQUFDckIsQ0FBQyxDQUFDNkIsR0FBSixDQUE1QixHQUF3Q2hELEtBQUssQ0FBQ0osVUFBTixDQUFpQixDQUFDdUIsQ0FBQyxDQUFDNkIsR0FBcEIsQ0FBeEMsR0FBbUVoRCxLQUFLLENBQUNMLFNBQXJGO0FBQ0EsOEdBQTRGNkQsS0FBNUYsMERBQThJckMsQ0FBQyxDQUFDOEIsS0FBaEo7QUFDSCxTQWRMO0FBZ0JBSixtQkFBVyxDQUFDSCxJQUFaLEdBQ0tyQyxVQURMLENBQ2dCQSxVQURoQixFQUVLc0MsTUFGTDtBQUtIOztBQUNELGFBQU8sSUFBUDtBQUNIOzs7O0VBaEx3Q2MsNEQsR0FrTDdDOzs7QUFDZTNFLDZGQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuaW1wb3J0IGRlZmF1bHREYXRhIGZyb20gJy4vZGVmYXVsdERhdGEuanNvbic7XG5pbXBvcnQgeyBpbnRlcnBvbGF0ZSwgaW50ZXJwb2xhdGVIc2wsIGludGVycG9sYXRlSGNsIH0gZnJvbSAnZDMnO1xuaW1wb3J0IGQzU2VsZWN0aW9uTXVsdGkgZnJvbSAnZDMtc2VsZWN0aW9uLW11bHRpJztcbi8vIHNlZSBkb2NzIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9yZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudFxuLy8gaW1wb3J0IEF0bGFzTWV0YWRhdGFDbGllbnQgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50Jztcbi8vIGNvbnN0IGF0bGFzdENsaWVudCA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG5cbmNvbnN0IGRhdGVQYXJzZSA9IGQzLnRpbWVQYXJzZSgnJVktJW0tJWQnKTtcbmNvbnN0IGRhdGVGb3JtYXQgPSBkMy50aW1lRm9ybWF0KCclYiAlZScpO1xuY29uc3QgZGF0ZUZvcm1hdF90dCA9IGQzLnRpbWVGb3JtYXQoJyVCICVlJyk7XG5jb25zdCBudW1iZXJGb3JtYXRfdHQgPSBkMy5mb3JtYXQoJywnKTtcblxuY2xhc3MgQ291bnRyeUxvY2tkb3duSW5kaWNhdG9yU3RyaXBzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICAgIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZGF0YVBhcmFtczoge1xuICAgICAgICAgICAgZGF0ZTogJ2RhdGUnLFxuICAgICAgICAgICAgaW5kZXg6ICdjMScsXG4gICAgICAgICAgICBzdGVwczogMiwgLy8gc3RlcFZhbHVlID0gMCwgMS4uLlxuICAgICAgICAgICAgc3RlcFZhbHVlOiAnZmxhZycsXG4gICAgICAgIH0sXG4gICAgICAgIGhlaWdodDogMjUwLFxuICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgIHRvcDogMTAsXG4gICAgICAgICAgICByaWdodDogMTAsXG4gICAgICAgICAgICBib3R0b206IDEwLFxuICAgICAgICAgICAgbGVmdDogMTAsXG4gICAgICAgIH0sXG4gICAgICAgIHZhbGlnbjogJ2NlbnRlcicsIC8vIHN0YXJ0LCBjZW50ZXIsIGJhc2VsaW5lXG4gICAgICAgIGJhc2VDb2xvcjogJyNFQ0VGRjQnLFxuICAgICAgICBzdHJpcENvbG9yOiB7IC8vIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcyB0aGF0IGFyZSBtYXBwZWQgZnJvbSB0aGUgZGF0YVxuICAgICAgICAgICAgMDogJyNkMWVlZWEnLFxuICAgICAgICAgICAgMTogJyNmZmU0N2YnLFxuICAgICAgICAgICAgMjogJ29yYW5nZScsXG4gICAgICAgICAgICAzOiAnI2E1MGYxNScsXG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZEl0ZW1zOiB7IC8vIHNob3VsZCBjb250YWluIGl0ZW1zIGZyb20gc3RyaXBDb2xvclxuICAgICAgICAgICAgJ251bGwnOiAnbm8gZGF0YScsXG4gICAgICAgICAgICAnc3RlcExlZ2VuZCc6IHtcbiAgICAgICAgICAgICAgICAwOiAndGFyZ2V0ZWQnLFxuICAgICAgICAgICAgICAgIDE6ICduYXRpb253aWRlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdpbmRleExlZ2VuZCc6IHtcbiAgICAgICAgICAgICAgICAwOiAnbm8gbWVhc3VyZXMnLFxuICAgICAgICAgICAgICAgIDE6ICdyZWNvbW1lbmQgY2xvc2luZycsXG4gICAgICAgICAgICAgICAgMjogJ3JlcXVpcmUgY2xvc2luZyAob25seSBzb21lIGxldmVscyBvciBjYXRlZ29yaWVzLCBlZyBqdXN0IGhpZ2ggc2Nob29sLCBvciBqdXN0IHB1YmxpYyBzY2hvb2xzKScsXG4gICAgICAgICAgICAgICAgMzogJ3JlcXVpcmUgY2xvc2luZyBhbGwgbGV2ZWxzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBkZWZhdWx0RGF0YSA9IGRlZmF1bHREYXRhO1xuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YSgpO1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VsZWN0aW9uKCkubm9kZSgpO1xuXG4gICAgICAgIC8vIGdldCBjb3VudHJ5IGRldGFpbHMgZnJvbSBBdGxhc0NsaWVudCBmcm9tIElTTy0yXG4gICAgICAgIC8vIHByb3BzLmNvdW50cnkgPSBhdGxhc3RDbGllbnQuZ2V0Q291bnRyeShwcm9wcy5jb3VudHJ5SVNPMik7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGhcbiAgICAgICAgfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IGQzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDc1MCk7XG5cbiAgICAgICAgLy8gbWFpbiBjaGFydCBjb250YWluZXJcbiAgICAgICAgY29uc3QgY2hhcnREaXYgPSB0aGlzLnNlbGVjdGlvbigpXG4gICAgICAgICAgICAuYXBwZW5kU2VsZWN0KCdkaXYnKSAvLyBzZWUgZG9jcyBpbiAuL3V0aWxzL2QzLmpzXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBgQ291bnRyeUxvY2tkb3duSW5kaWNhdG9yU3RyaXBzYClcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCBgJHt3aWR0aH1weGApXG4gICAgICAgICAgICAuc3R5bGUoJ2hlaWdodCcsIGBhdXRvYClcbiAgICAgICAgICAgIC5hcHBlbmRTZWxlY3QoJ2RpdicpXG4gICAgICAgICAgICAuc3R5bGVzKHtcbiAgICAgICAgICAgICAgICAnbWFyZ2luLXRvcCc6IGAke3Byb3BzLm1hcmdpbi50b3B9cHhgLFxuICAgICAgICAgICAgICAgICdtYXJnaW4tcmlnaHQnOiBgJHtwcm9wcy5tYXJnaW4ucmlnaHR9cHhgLFxuICAgICAgICAgICAgICAgICdtYXJnaW4tYm90dG9tJzogYCR7cHJvcHMubWFyZ2luLmJvdHRvbX1weGAsXG4gICAgICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzogYCR7cHJvcHMubWFyZ2luLmxlZnR9cHhgLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc2V0IHNjYWxlc1xuICAgICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFswLCBwcm9wcy5kYXRhUGFyYW1zLnN0ZXBzIC0gMV0pXG4gICAgICAgICAgICAucmFuZ2UoW3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b20sIHByb3BzLm1hcmdpbi50b3BdKTtcblxuICAgICAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgICAgICAgLmRvbWFpbihkYXRhLm1hcChkID0+IGRhdGVQYXJzZShkW3Byb3BzLmRhdGFQYXJhbXMuZGF0ZV0pKSlcbiAgICAgICAgICAgIC5yYW5nZShbcHJvcHMubWFyZ2luLmxlZnQsIHdpZHRoIC0gcHJvcHMubWFyZ2luLnJpZ2h0XSlcbiAgICAgICAgICAgIC5wYWRkaW5nKDApO1xuXG4gICAgICAgIGNvbnN0IGNvbG9yRG9tYWluID0gcHJvcHMuc3RyaXBDb2xvciA/IChPYmplY3Qua2V5cyhwcm9wcy5zdHJpcENvbG9yKSkubWFwKGQgPT4gK2QpIDogZDMuZXh0ZW50KGRhdGEubWFwKGQgPT4gZFtwcm9wcy5kYXRhUGFyYW1zLmluZGV4XSkpO1xuXG4gICAgICAgIGNvbnN0IGNvbG9yUmFuZ2UgPSBwcm9wcy5zdHJpcENvbG9yID8gY29sb3JEb21haW4ubWFwKGQgPT4gcHJvcHMuc3RyaXBDb2xvcltgJHtkfWBdKSA6IFsnI2NjY2NjYycsICcjMzMzMzMzJ11cblxuICAgICAgICBjb25zdCBjb2xvclNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihjb2xvckRvbWFpbilcbiAgICAgICAgICAgIC5yYW5nZShjb2xvclJhbmdlKVxuICAgICAgICAgICAgLmludGVycG9sYXRlKGludGVycG9sYXRlSGNsKTtcblxuICAgICAgICAvLyBtYWtlIGJhcnNcbiAgICAgICAgY29uc3QgYmFycyA9IGNoYXJ0RGl2LmFwcGVuZFNlbGVjdCgnZGl2LmJhcnMtY29udGFpbmVyJylcbiAgICAgICAgICAgIC5zdHlsZSgnZGlzcGxheScsICdmbGV4JylcbiAgICAgICAgICAgIC5zdHlsZSgnYWxpZ24taXRlbXMnLCBgJHtwcm9wcy52YWxpZ259YClcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoJy5iYXInKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSwgKGQsIGkpID0+IGRbcHJvcHMuZGF0YVBhcmFtcy5kYXRlXSk7IC8vIGZvciBzbW9vdGggZGF0YSB1cGRhdGlvblxuXG4gICAgICAgIGNvbnN0IHN0cmlwaGVpZ2h0ID0gcHJvcHMubGVnZW5kSXRlbXMgPyAocHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLnRvcCAtIHByb3BzLm1hcmdpbi5ib3R0b20pICogMC4yIDogKHByb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi50b3AgLSBwcm9wcy5tYXJnaW4uYm90dG9tKTtcblxuICAgICAgICBiYXJzLmVudGVyKCkuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBgYmFyICR7ZFtwcm9wcy5kYXRhUGFyYW1zLmRhdGVdfWApXG4gICAgICAgICAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJylcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RlcFNpemUgPSAoc3RyaXBoZWlnaHQpIC8gcHJvcHMuZGF0YVBhcmFtcy5zdGVwcztcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwID0gZFtwcm9wcy5kYXRhUGFyYW1zLnN0ZXBWYWx1ZV0gKyAxO1xuICAgICAgICAgICAgICAgIHJldHVybiBkW3Byb3BzLmRhdGFQYXJhbXMuaW5kZXhdID8gKHN0ZXAgPyBzdGVwICogc3RlcFNpemUgKyAncHgnIDogc3RlcFNpemUgKyAncHgnKSA6IHN0ZXBTaXplICsgJ3B4JztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywgeFNjYWxlLmJhbmR3aWR0aCgpICsgJ3B4JylcbiAgICAgICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsIGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YWwgPSBwYXJzZUZsb2F0KGRbcHJvcHMuZGF0YVBhcmFtcy5pbmRleF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiAodmFsICE9PSBudWxsKSAmJiAhKGlzTmFOKHZhbCkpID8gY29sb3JTY2FsZSh2YWwpIDogcHJvcHMuYmFzZUNvbG9yO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tZXJnZShiYXJzKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgICAgICAgIC5zdHlsZSgnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKVxuICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwU2l6ZSA9IChzdHJpcGhlaWdodCkgLyBwcm9wcy5kYXRhUGFyYW1zLnN0ZXBzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBkW3Byb3BzLmRhdGFQYXJhbXMuc3RlcFZhbHVlXSArIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRbcHJvcHMuZGF0YVBhcmFtcy5pbmRleF0gPyAoc3RlcCA/IHN0ZXAgKiBzdGVwU2l6ZSArICdweCcgOiBzdGVwU2l6ZSArICdweCcpIDogc3RlcFNpemUgKyAncHgnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCB4U2NhbGUuYmFuZHdpZHRoKCkgKyAncHgnKVxuICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IHBhcnNlRmxvYXQoZFtwcm9wcy5kYXRhUGFyYW1zLmluZGV4XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh2YWwgIT09IG51bGwpICYmICEoaXNOYU4odmFsKSkgPyBjb2xvclNjYWxlKHZhbCkgOiBwcm9wcy5iYXNlQ29sb3I7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBiYXJzLmV4aXQoKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgICAgICAgLnJlbW92ZSgpO1xuXG5cbiAgICAgICAgaWYgKHByb3BzLmxlZ2VuZEl0ZW1zKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleExlZ2VuZEl0ZW1zID0gW107XG4gICAgICAgICAgICAoT2JqZWN0LmtleXMocHJvcHMubGVnZW5kSXRlbXMuaW5kZXhMZWdlbmQpKS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5sZWdlbmRJdGVtcy5pbmRleExlZ2VuZFtkXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRleExlZ2VuZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChwcm9wcy5sZWdlbmRJdGVtc1snbnVsbCddKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhMZWdlbmRJdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnbnVsbCcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5sZWdlbmRJdGVtc1snbnVsbCddXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxlZ2VuZFdpZHRoID0gKHdpZHRoIC0gcHJvcHMubWFyZ2luLnJpZ2h0IC0gcHJvcHMubWFyZ2luLmxlZnQpIC8gaW5kZXhMZWdlbmRJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleExlZ2VuZEl0ZW1zKVxuICAgICAgICAgICAgICAgIC8vIG1ha2UgbGVnZW5kXG4gICAgICAgICAgICBjb25zdCBpbmRleExlZ2VuZCA9IGNoYXJ0RGl2LmFwcGVuZFNlbGVjdCgnZGl2LmxlZ2VuZC1jb250YWluZXInKVxuICAgICAgICAgICAgICAgIC8vIC5zdHlsZSgnYWxpZ24taXRlbXMnLCBgJHtwcm9wcy52YWxpZ259YClcbiAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKCcubGVnZW5kLWRpdicpXG4gICAgICAgICAgICAgICAgLmRhdGEoaW5kZXhMZWdlbmRJdGVtcyk7IC8vIGZvciBzbW9vdGggZGF0YSB1cGRhdGlvblxuXG4gICAgICAgICAgICBpbmRleExlZ2VuZC5lbnRlcigpLmFwcGVuZCgnZGl2JylcbiAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCBgbGVnZW5kLWRpdiBpbmRleExlZ2VuZGApXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2ZsZXgnKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgnYWxpZ24taXRlbXMnLCBgc3RhcnRgKVxuICAgICAgICAgICAgICAgIC8vIC5zdHlsZSgnd2lkdGgnLCBgJHtsZWdlbmRXaWR0aH1weGApXG4gICAgICAgICAgICAgICAgLmh0bWwoZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2xvciA9ICgrZC5rZXkgIT09IG51bGwpICYmICEoaXNOYU4oK2Qua2V5KSkgPyBwcm9wcy5zdHJpcENvbG9yWytkLmtleV0gOiBwcm9wcy5iYXNlQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPHNwYW4gc3R5bGU9XCJ3aWR0aDoxcmVtOyBoZWlnaHQ6MXJlbTttaW4td2lkdGg6MXJlbTsgbWluLWhlaWdodDoxcmVtOyBiYWNrZ3JvdW5kOiAke2NvbG9yfVwiPjwvc3Bhbj4gPHAgc3R5bGU9XCJtYXJnaW46MCAwIDAgMC41cmVtO1wiPiR7ZC52YWx1ZX08L3A+YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1lcmdlKGluZGV4TGVnZW5kKVxuICAgICAgICAgICAgICAgIC8vIC5zdHlsZSgnd2lkdGgnLCBgJHtsZWdlbmRXaWR0aH1weGApXG4gICAgICAgICAgICAgICAgLmh0bWwoZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2xvciA9ICgrZC5rZXkgIT09IG51bGwpICYmICEoaXNOYU4oK2Qua2V5KSkgPyBwcm9wcy5zdHJpcENvbG9yWytkLmtleV0gOiBwcm9wcy5iYXNlQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPHNwYW4gc3R5bGU9XCJ3aWR0aDoxcmVtOyBoZWlnaHQ6MXJlbTttaW4td2lkdGg6MXJlbTsgbWluLWhlaWdodDoxcmVtOyBiYWNrZ3JvdW5kOiAke2NvbG9yfVwiPjwvc3Bhbj4gPHAgc3R5bGU9XCJtYXJnaW46MCAwIDAgMC41cmVtO1wiPiR7ZC52YWx1ZX08L3A+YFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpbmRleExlZ2VuZC5leGl0KClcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcblxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuLy8gY29uc29sZS5sb2codGhpcy5kZWZhdWx0UHJvcHMpO1xuZXhwb3J0IGRlZmF1bHQgQ291bnRyeUxvY2tkb3duSW5kaWNhdG9yU3RyaXBzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})