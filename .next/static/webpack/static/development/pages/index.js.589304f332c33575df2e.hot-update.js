webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // see docs on https://github.com/reuters-graphics/graphics-atlas-client\n// import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';\n// const atlastClient = new AtlasMetadataClient();\n\nvar dateParse = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeParse('%Y-%m-%d');\nvar dateFormat = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeFormat('%b %e');\nvar dateFormat_tt = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeFormat('%B %e');\nvar numberFormat_tt = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].format(',');\n\nvar CountryLockdownIndicatorStrips = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CountryLockdownIndicatorStrips, _ChartComponent);\n\n  var _super = _createSuper(CountryLockdownIndicatorStrips);\n\n  function CountryLockdownIndicatorStrips() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CountryLockdownIndicatorStrips);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      dataParams: {\n        date: 'date',\n        index: 'c1',\n        steps: 2,\n        // stepValue = 0, 1...\n        stepValue: 'flag'\n      },\n      height: 200,\n      margin: {\n        top: 10,\n        right: 10,\n        bottom: 10,\n        left: 10\n      },\n      valign: 'center',\n      // start, center, baseline\n      baseColor: '#ECEFF4',\n      stripColor: {\n        // should be numeric values that are mapped from the data\n        0: '#ECEFF4',\n        1: '#d1eeea',\n        2: '#ffe47f',\n        3: '#a50f15'\n      },\n      legendItems: {\n        // should contain items from stripColor\n        // 'null': 'No data',\n        'stepLegend': {\n          0: 'targeted',\n          1: 'nationwide'\n        },\n        'indexLegend': {\n          0: 'no measures',\n          1: 'recommend closing',\n          2: 'require closing (only some levels or categories, eg just high school, or just public schools)',\n          3: 'require closing all levels'\n        }\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_9__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CountryLockdownIndicatorStrips, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node(); // get country details from AtlasClient from ISO-2\n      // props.country = atlastClient.getCountry(props.countryISO2);\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750); // main chart container\n\n      var chartDiv = this.selection().appendSelect('div') // see docs in ./utils/d3.js\n      .attr('class', \"CountryLockdownIndicatorStrips\").style('width', \"\".concat(width, \"px\")).style('height', \"\".concat(props.height, \"px\")).appendSelect('div').style('transform', \"translate(\".concat(props.margin.left, \"px, \").concat(props.margin.top, \"px)\")); // set scales\n\n      var yScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain([0, props.dataParams.steps - 1]).range([props.height - props.margin.bottom, props.margin.top]);\n      var xScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleBand().domain(data.map(function (d) {\n        return dateParse(d[props.dataParams.date]);\n      })).range([props.margin.left, width - props.margin.right]).padding(0);\n      var colorDomain = props.stripColor ? Object.keys(props.stripColor).map(function (d) {\n        return +d;\n      }) : _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(data.map(function (d) {\n        return d[props.dataParams.index];\n      }));\n      var colorRange = props.stripColor ? colorDomain.map(function (d) {\n        return props.stripColor[\"\".concat(d)];\n      }) : ['#cccccc', '#333333'];\n      var colorScale = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().domain(colorDomain).range(colorRange).interpolate(d3__WEBPACK_IMPORTED_MODULE_10__[\"interpolateHcl\"]); // make bars\n\n      var bars = chartDiv.appendSelect('div.bars-container').style('display', 'flex').style('align-items', \"\".concat(props.valign)).selectAll('.bar').data(data, function (d, i) {\n        return d[props.dataParams.date];\n      }); // for smooth data updation\n\n      var stripheight = props.legendItems ? (props.height - props.margin.top - props.margin.bottom) * 0.2 : props.height - props.margin.top - props.margin.bottom;\n      bars.enter().append('div').attr('class', function (d) {\n        return \"bar \".concat(d[props.dataParams.date]);\n      }).style('display', 'inline-block').style('height', function (d) {\n        var stepSize = stripheight / props.dataParams.steps;\n        var step = d[props.dataParams.stepValue] + 1;\n        return d[props.dataParams.index] ? step ? step * stepSize + 'px' : stepSize + 'px' : stepSize + 'px';\n      }).style('width', xScale.bandwidth() + 'px').style('background', function (d) {\n        var val = parseFloat(d[props.dataParams.index]);\n        return val !== null && !isNaN(val) ? colorScale(val) : props.baseColor;\n      }).merge(bars).transition(transition).style('display', 'inline-block').style('height', function (d) {\n        var stepSize = stripheight / props.dataParams.steps;\n        var step = d[props.dataParams.stepValue] + 1;\n        return d[props.dataParams.index] ? step ? step * stepSize + 'px' : stepSize + 'px' : stepSize + 'px';\n      }).style('width', xScale.bandwidth() + 'px').style('background', function (d) {\n        var val = parseFloat(d[props.dataParams.index]);\n        return val !== null && !isNaN(val) ? colorScale(val) : props.baseColor;\n      });\n      bars.exit().transition(transition).attr('height', 0).remove();\n\n      if (props.legendItems) {\n        var indexLegendItems = [];\n        Object.keys(props.legendItems.indexLegend).forEach(function (d) {\n          var item = {\n            key: d,\n            value: props.legendItems.indexLegend[d]\n          };\n          indexLegendItems.push(item);\n        });\n\n        if (props.legendItems['null']) {\n          indexLegendItems.push({\n            key: 'null',\n            value: props.legendItems['null']\n          });\n        }\n\n        var legendWidth = (width - props.margin.right - props.margin.left) / indexLegendItems.length;\n        console.log(indexLegendItems); // make legend\n\n        var indexLegend = chartDiv.appendSelect('div.legend-container') // .style('align-items', `${props.valign}`)\n        .selectAll('.legend-div').data(indexLegendItems); // for smooth data updation\n\n        indexLegend.enter().append('div').attr('class', \"legend-div indexLegend\").style('display', 'flex').style('align-items', \"start\").style('width', \"\".concat(legendWidth, \"px\")).html(function (d) {\n          var color = +d.key ? props.stripColor[+d.key] : props.baseColor;\n          return \"<span style=\\\"width:1rem; height:1rem;min-width:1rem; min-height:1rem; background: \".concat(color, \"\\\"></span> <p style=\\\"margin:0 0 0 0.5rem;\\\">\").concat(d.value, \"</p>\");\n        }).merge(indexLegend).style('width', \"\".concat(legendWidth, \"px\")).html(function (d) {\n          var color = +d.key ? props.stripColor[+d.key] : props.baseColor;\n          return \"<span style=\\\"width:1rem; height:1rem;min-width:1rem; min-height:1rem; background: \".concat(color, \"\\\"></span> <p style=\\\"margin:0 0 0 0.5rem;\\\">\").concat(d.value, \"</p>\");\n        });\n        indexLegend.exit().transition(transition).remove();\n      }\n\n      return this;\n    }\n  }]);\n\n  return CountryLockdownIndicatorStrips;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]); // console.log(this.defaultProps);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryLockdownIndicatorStrips);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiZGF0ZVBhcnNlIiwiZDMiLCJ0aW1lUGFyc2UiLCJkYXRlRm9ybWF0IiwidGltZUZvcm1hdCIsImRhdGVGb3JtYXRfdHQiLCJudW1iZXJGb3JtYXRfdHQiLCJmb3JtYXQiLCJDb3VudHJ5TG9ja2Rvd25JbmRpY2F0b3JTdHJpcHMiLCJkYXRhUGFyYW1zIiwiZGF0ZSIsImluZGV4Iiwic3RlcHMiLCJzdGVwVmFsdWUiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ2YWxpZ24iLCJiYXNlQ29sb3IiLCJzdHJpcENvbG9yIiwibGVnZW5kSXRlbXMiLCJkZWZhdWx0RGF0YSIsImRhdGEiLCJwcm9wcyIsIm5vZGUiLCJzZWxlY3Rpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNoYXJ0RGl2IiwiYXBwZW5kU2VsZWN0IiwiYXR0ciIsInN0eWxlIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInhTY2FsZSIsInNjYWxlQmFuZCIsIm1hcCIsImQiLCJwYWRkaW5nIiwiY29sb3JEb21haW4iLCJPYmplY3QiLCJrZXlzIiwiZXh0ZW50IiwiY29sb3JSYW5nZSIsImNvbG9yU2NhbGUiLCJpbnRlcnBvbGF0ZSIsImludGVycG9sYXRlSGNsIiwiYmFycyIsInNlbGVjdEFsbCIsImkiLCJzdHJpcGhlaWdodCIsImVudGVyIiwiYXBwZW5kIiwic3RlcFNpemUiLCJzdGVwIiwiYmFuZHdpZHRoIiwidmFsIiwicGFyc2VGbG9hdCIsImlzTmFOIiwibWVyZ2UiLCJleGl0IiwicmVtb3ZlIiwiaW5kZXhMZWdlbmRJdGVtcyIsImluZGV4TGVnZW5kIiwiZm9yRWFjaCIsIml0ZW0iLCJrZXkiLCJ2YWx1ZSIsInB1c2giLCJsZWdlbmRXaWR0aCIsImxlbmd0aCIsImNv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cEIsQ0FBWCxHQUFzQy9DLEtBQUssQ0FBQ0wsU0FBeEQ7QUFDQSw4R0FBNEY0RCxLQUE1RiwwREFBOElyQyxDQUFDLENBQUM4QixLQUFoSjtBQUNILFNBZEw7QUFnQkFKLG1CQUFXLENBQUNILElBQVosR0FDS3BDLFVBREwsQ0FDZ0JBLFVBRGhCLEVBRUtxQyxNQUZMO0FBS0g7O0FBQ0QsYUFBTyxJQUFQO0FBQ0g7Ozs7RUEzS3dDYyw0RCxHQTZLN0M7OztBQUNlMUUsNkZBQWYiLCJmaWxlIjoiLi9zcmMvbGliL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJy4vYmFzZS9DaGFydENvbXBvbmVudCc7XG5pbXBvcnQgZDMgZnJvbSAnLi91dGlscy9kMyc7XG5pbXBvcnQgZGVmYXVsdERhdGEgZnJvbSAnLi9kZWZhdWx0RGF0YS5qc29uJztcbmltcG9ydCB7IGludGVycG9sYXRlLCBpbnRlcnBvbGF0ZUhzbCwgaW50ZXJwb2xhdGVIY2wgfSBmcm9tICdkMyc7XG4vLyBzZWUgZG9jcyBvbiBodHRwczovL2dpdGh1Yi5jb20vcmV1dGVycy1ncmFwaGljcy9ncmFwaGljcy1hdGxhcy1jbGllbnRcbi8vIGltcG9ydCBBdGxhc01ldGFkYXRhQ2xpZW50IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudCc7XG4vLyBjb25zdCBhdGxhc3RDbGllbnQgPSBuZXcgQXRsYXNNZXRhZGF0YUNsaWVudCgpO1xuXG5jb25zdCBkYXRlUGFyc2UgPSBkMy50aW1lUGFyc2UoJyVZLSVtLSVkJyk7XG5jb25zdCBkYXRlRm9ybWF0ID0gZDMudGltZUZvcm1hdCgnJWIgJWUnKTtcbmNvbnN0IGRhdGVGb3JtYXRfdHQgPSBkMy50aW1lRm9ybWF0KCclQiAlZScpO1xuY29uc3QgbnVtYmVyRm9ybWF0X3R0ID0gZDMuZm9ybWF0KCcsJyk7XG5cbmNsYXNzIENvdW50cnlMb2NrZG93bkluZGljYXRvclN0cmlwcyBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRhdGFQYXJhbXM6IHtcbiAgICAgICAgICAgIGRhdGU6ICdkYXRlJyxcbiAgICAgICAgICAgIGluZGV4OiAnYzEnLFxuICAgICAgICAgICAgc3RlcHM6IDIsIC8vIHN0ZXBWYWx1ZSA9IDAsIDEuLi5cbiAgICAgICAgICAgIHN0ZXBWYWx1ZTogJ2ZsYWcnLFxuICAgICAgICB9LFxuICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICB0b3A6IDEwLFxuICAgICAgICAgICAgcmlnaHQ6IDEwLFxuICAgICAgICAgICAgYm90dG9tOiAxMCxcbiAgICAgICAgICAgIGxlZnQ6IDEwLFxuICAgICAgICB9LFxuICAgICAgICB2YWxpZ246ICdjZW50ZXInLCAvLyBzdGFydCwgY2VudGVyLCBiYXNlbGluZVxuICAgICAgICBiYXNlQ29sb3I6ICcjRUNFRkY0JyxcbiAgICAgICAgc3RyaXBDb2xvcjogeyAvLyBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMgdGhhdCBhcmUgbWFwcGVkIGZyb20gdGhlIGRhdGFcbiAgICAgICAgICAgIDA6ICcjRUNFRkY0JyxcbiAgICAgICAgICAgIDE6ICcjZDFlZWVhJyxcbiAgICAgICAgICAgIDI6ICcjZmZlNDdmJyxcbiAgICAgICAgICAgIDM6ICcjYTUwZjE1JyxcbiAgICAgICAgfSxcbiAgICAgICAgbGVnZW5kSXRlbXM6IHsgLy8gc2hvdWxkIGNvbnRhaW4gaXRlbXMgZnJvbSBzdHJpcENvbG9yXG4gICAgICAgICAgICAvLyAnbnVsbCc6ICdObyBkYXRhJyxcbiAgICAgICAgICAgICdzdGVwTGVnZW5kJzoge1xuICAgICAgICAgICAgICAgIDA6ICd0YXJnZXRlZCcsXG4gICAgICAgICAgICAgICAgMTogJ25hdGlvbndpZGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2luZGV4TGVnZW5kJzoge1xuICAgICAgICAgICAgICAgIDA6ICdubyBtZWFzdXJlcycsXG4gICAgICAgICAgICAgICAgMTogJ3JlY29tbWVuZCBjbG9zaW5nJyxcbiAgICAgICAgICAgICAgICAyOiAncmVxdWlyZSBjbG9zaW5nIChvbmx5IHNvbWUgbGV2ZWxzIG9yIGNhdGVnb3JpZXMsIGVnIGp1c3QgaGlnaCBzY2hvb2wsIG9yIGp1c3QgcHVibGljIHNjaG9vbHMpJyxcbiAgICAgICAgICAgICAgICAzOiAncmVxdWlyZSBjbG9zaW5nIGFsbCBsZXZlbHMnXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGRlZmF1bHREYXRhID0gZGVmYXVsdERhdGE7XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhKCk7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG5cbiAgICAgICAgLy8gZ2V0IGNvdW50cnkgZGV0YWlscyBmcm9tIEF0bGFzQ2xpZW50IGZyb20gSVNPLTJcbiAgICAgICAgLy8gcHJvcHMuY291bnRyeSA9IGF0bGFzdENsaWVudC5nZXRDb3VudHJ5KHByb3BzLmNvdW50cnlJU08yKTtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IGQzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDc1MCk7XG5cbiAgICAgICAgLy8gbWFpbiBjaGFydCBjb250YWluZXJcbiAgICAgICAgY29uc3QgY2hhcnREaXYgPSB0aGlzLnNlbGVjdGlvbigpXG4gICAgICAgICAgICAuYXBwZW5kU2VsZWN0KCdkaXYnKSAvLyBzZWUgZG9jcyBpbiAuL3V0aWxzL2QzLmpzXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBgQ291bnRyeUxvY2tkb3duSW5kaWNhdG9yU3RyaXBzYClcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCBgJHt3aWR0aH1weGApXG4gICAgICAgICAgICAuc3R5bGUoJ2hlaWdodCcsIGAke3Byb3BzLmhlaWdodH1weGApXG4gICAgICAgICAgICAuYXBwZW5kU2VsZWN0KCdkaXYnKVxuICAgICAgICAgICAgLnN0eWxlKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7cHJvcHMubWFyZ2luLmxlZnR9cHgsICR7cHJvcHMubWFyZ2luLnRvcH1weClgKTtcblxuICAgICAgICAvLyBzZXQgc2NhbGVzXG4gICAgICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oWzAsIHByb3BzLmRhdGFQYXJhbXMuc3RlcHMgLSAxXSlcbiAgICAgICAgICAgIC5yYW5nZShbcHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLmJvdHRvbSwgcHJvcHMubWFyZ2luLnRvcF0pO1xuXG4gICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAgICAgICAuZG9tYWluKGRhdGEubWFwKGQgPT4gZGF0ZVBhcnNlKGRbcHJvcHMuZGF0YVBhcmFtcy5kYXRlXSkpKVxuICAgICAgICAgICAgLnJhbmdlKFtwcm9wcy5tYXJnaW4ubGVmdCwgd2lkdGggLSBwcm9wcy5tYXJnaW4ucmlnaHRdKVxuICAgICAgICAgICAgLnBhZGRpbmcoMCk7XG5cbiAgICAgICAgY29uc3QgY29sb3JEb21haW4gPSBwcm9wcy5zdHJpcENvbG9yID8gKE9iamVjdC5rZXlzKHByb3BzLnN0cmlwQ29sb3IpKS5tYXAoZCA9PiArZCkgOiBkMy5leHRlbnQoZGF0YS5tYXAoZCA9PiBkW3Byb3BzLmRhdGFQYXJhbXMuaW5kZXhdKSk7XG5cbiAgICAgICAgY29uc3QgY29sb3JSYW5nZSA9IHByb3BzLnN0cmlwQ29sb3IgPyBjb2xvckRvbWFpbi5tYXAoZCA9PiBwcm9wcy5zdHJpcENvbG9yW2Ake2R9YF0pIDogWycjY2NjY2NjJywgJyMzMzMzMzMnXVxuXG4gICAgICAgIGNvbnN0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKGNvbG9yRG9tYWluKVxuICAgICAgICAgICAgLnJhbmdlKGNvbG9yUmFuZ2UpXG4gICAgICAgICAgICAuaW50ZXJwb2xhdGUoaW50ZXJwb2xhdGVIY2wpO1xuXG4gICAgICAgIC8vIG1ha2UgYmFyc1xuICAgICAgICBjb25zdCBiYXJzID0gY2hhcnREaXYuYXBwZW5kU2VsZWN0KCdkaXYuYmFycy1jb250YWluZXInKVxuICAgICAgICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2ZsZXgnKVxuICAgICAgICAgICAgLnN0eWxlKCdhbGlnbi1pdGVtcycsIGAke3Byb3BzLnZhbGlnbn1gKVxuICAgICAgICAgICAgLnNlbGVjdEFsbCgnLmJhcicpXG4gICAgICAgICAgICAuZGF0YShkYXRhLCAoZCwgaSkgPT4gZFtwcm9wcy5kYXRhUGFyYW1zLmRhdGVdKTsgLy8gZm9yIHNtb290aCBkYXRhIHVwZGF0aW9uXG5cbiAgICAgICAgY29uc3Qgc3RyaXBoZWlnaHQgPSBwcm9wcy5sZWdlbmRJdGVtcyA/IChwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4udG9wIC0gcHJvcHMubWFyZ2luLmJvdHRvbSkgKiAwLjIgOiAocHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLnRvcCAtIHByb3BzLm1hcmdpbi5ib3R0b20pO1xuXG4gICAgICAgIGJhcnMuZW50ZXIoKS5hcHBlbmQoJ2RpdicpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBkID0+IGBiYXIgJHtkW3Byb3BzLmRhdGFQYXJhbXMuZGF0ZV19YClcbiAgICAgICAgICAgIC5zdHlsZSgnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKVxuICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwU2l6ZSA9IChzdHJpcGhlaWdodCkgLyBwcm9wcy5kYXRhUGFyYW1zLnN0ZXBzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBkW3Byb3BzLmRhdGFQYXJhbXMuc3RlcFZhbHVlXSArIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRbcHJvcHMuZGF0YVBhcmFtcy5pbmRleF0gPyAoc3RlcCA/IHN0ZXAgKiBzdGVwU2l6ZSArICdweCcgOiBzdGVwU2l6ZSArICdweCcpIDogc3RlcFNpemUgKyAncHgnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCB4U2NhbGUuYmFuZHdpZHRoKCkgKyAncHgnKVxuICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IHBhcnNlRmxvYXQoZFtwcm9wcy5kYXRhUGFyYW1zLmluZGV4XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh2YWwgIT09IG51bGwpICYmICEoaXNOYU4odmFsKSkgPyBjb2xvclNjYWxlKHZhbCkgOiBwcm9wcy5iYXNlQ29sb3I7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1lcmdlKGJhcnMpXG4gICAgICAgICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpXG4gICAgICAgICAgICAuc3R5bGUoJ2hlaWdodCcsIGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBTaXplID0gKHN0cmlwaGVpZ2h0KSAvIHByb3BzLmRhdGFQYXJhbXMuc3RlcHM7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RlcCA9IGRbcHJvcHMuZGF0YVBhcmFtcy5zdGVwVmFsdWVdICsgMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZFtwcm9wcy5kYXRhUGFyYW1zLmluZGV4XSA/IChzdGVwID8gc3RlcCAqIHN0ZXBTaXplICsgJ3B4JyA6IHN0ZXBTaXplICsgJ3B4JykgOiBzdGVwU2l6ZSArICdweCc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsIHhTY2FsZS5iYW5kd2lkdGgoKSArICdweCcpXG4gICAgICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCBkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gcGFyc2VGbG9hdChkW3Byb3BzLmRhdGFQYXJhbXMuaW5kZXhdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHZhbCAhPT0gbnVsbCkgJiYgIShpc05hTih2YWwpKSA/IGNvbG9yU2NhbGUodmFsKSA6IHByb3BzLmJhc2VDb2xvcjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGJhcnMuZXhpdCgpXG4gICAgICAgICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDApXG4gICAgICAgICAgICAucmVtb3ZlKCk7XG5cblxuICAgICAgICBpZiAocHJvcHMubGVnZW5kSXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4TGVnZW5kSXRlbXMgPSBbXTtcbiAgICAgICAgICAgIChPYmplY3Qua2V5cyhwcm9wcy5sZWdlbmRJdGVtcy5pbmRleExlZ2VuZCkpLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLmxlZ2VuZEl0ZW1zLmluZGV4TGVnZW5kW2RdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZGV4TGVnZW5kSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHByb3BzLmxlZ2VuZEl0ZW1zWydudWxsJ10pIHtcbiAgICAgICAgICAgICAgICBpbmRleExlZ2VuZEl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdudWxsJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLmxlZ2VuZEl0ZW1zWydudWxsJ11cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGVnZW5kV2lkdGggPSAod2lkdGggLSBwcm9wcy5tYXJnaW4ucmlnaHQgLSBwcm9wcy5tYXJnaW4ubGVmdCkgLyBpbmRleExlZ2VuZEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4TGVnZW5kSXRlbXMpXG4gICAgICAgICAgICAgICAgLy8gbWFrZSBsZWdlbmRcbiAgICAgICAgICAgIGNvbnN0IGluZGV4TGVnZW5kID0gY2hhcnREaXYuYXBwZW5kU2VsZWN0KCdkaXYubGVnZW5kLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgLy8gLnN0eWxlKCdhbGlnbi1pdGVtcycsIGAke3Byb3BzLnZhbGlnbn1gKVxuICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoJy5sZWdlbmQtZGl2JylcbiAgICAgICAgICAgICAgICAuZGF0YShpbmRleExlZ2VuZEl0ZW1zKTsgLy8gZm9yIHNtb290aCBkYXRhIHVwZGF0aW9uXG5cbiAgICAgICAgICAgIGluZGV4TGVnZW5kLmVudGVyKCkuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGBsZWdlbmQtZGl2IGluZGV4TGVnZW5kYClcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnZmxleCcpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdhbGlnbi1pdGVtcycsIGBzdGFydGApXG4gICAgICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsIGAke2xlZ2VuZFdpZHRofXB4YClcbiAgICAgICAgICAgICAgICAuaHRtbChkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gKCtkLmtleSkgPyBwcm9wcy5zdHJpcENvbG9yWytkLmtleV0gOiBwcm9wcy5iYXNlQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPHNwYW4gc3R5bGU9XCJ3aWR0aDoxcmVtOyBoZWlnaHQ6MXJlbTttaW4td2lkdGg6MXJlbTsgbWluLWhlaWdodDoxcmVtOyBiYWNrZ3JvdW5kOiAke2NvbG9yfVwiPjwvc3Bhbj4gPHAgc3R5bGU9XCJtYXJnaW46MCAwIDAgMC41cmVtO1wiPiR7ZC52YWx1ZX08L3A+YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1lcmdlKGluZGV4TGVnZW5kKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCBgJHtsZWdlbmRXaWR0aH1weGApXG4gICAgICAgICAgICAgICAgLmh0bWwoZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2xvciA9ICgrZC5rZXkpID8gcHJvcHMuc3RyaXBDb2xvclsrZC5rZXldIDogcHJvcHMuYmFzZUNvbG9yO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxzcGFuIHN0eWxlPVwid2lkdGg6MXJlbTsgaGVpZ2h0OjFyZW07bWluLXdpZHRoOjFyZW07IG1pbi1oZWlnaHQ6MXJlbTsgYmFja2dyb3VuZDogJHtjb2xvcn1cIj48L3NwYW4+IDxwIHN0eWxlPVwibWFyZ2luOjAgMCAwIDAuNXJlbTtcIj4ke2QudmFsdWV9PC9wPmBcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW5kZXhMZWdlbmQuZXhpdCgpXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XG5cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbi8vIGNvbnNvbGUubG9nKHRoaXMuZGVmYXVsdFByb3BzKTtcbmV4cG9ydCBkZWZhdWx0IENvdW50cnlMb2NrZG93bkluZGljYXRvclN0cmlwczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})