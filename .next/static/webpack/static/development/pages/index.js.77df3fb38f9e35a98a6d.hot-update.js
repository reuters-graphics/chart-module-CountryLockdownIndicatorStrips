webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var _casesData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./casesData.json */ \"./src/demo/casesData.json\");\nvar _casesData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./casesData.json */ \"./src/demo/casesData.json\", 1);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @reuters-graphics/style-color/dist/categorical */ \"./node_modules/@reuters-graphics/style-color/dist/categorical/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _reuters_graphics_chart_module_weeklyaverage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @reuters-graphics/chart-module-weeklyaverage */ \"./node_modules/@reuters-graphics/chart-module-weeklyaverage/dist/index.js\");\n/* harmony import */ var _reuters_graphics_chart_module_weeklyaverage__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_chart_module_weeklyaverage__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/prasanta/ReutersWork/INTERACTIVES/COVID-APP/chart-module-CountryLockdownIndicatorStrips/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: ''\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chartContainer\", react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"myChartContainer\", react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"myChart\", new _reuters_graphics_chart_module_weeklyaverage__WEBPACK_IMPORTED_MODULE_13___default.a());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_12___default()(function () {\n      _this.chart.draw();\n\n      _this.myChart.draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      // Use our chart module.\n      this.chart.selection(this.chartContainer.current) // .props({ fill: base.blue.hex })\n      // .data()\n      .draw(); // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize); // Gurman's chart\n\n      this.myChart.selection(this.myChartContainer.current).data(_casesData_json__WEBPACK_IMPORTED_MODULE_9__).props({\n        stroke: 'rgba(252, 229, 135, 0.35)',\n        // colour of line\n        strokeWidth: 2.5,\n        // width of the line\n        fill: '#eee',\n        // colour of the bars\n        height: 150,\n        // chart height\n        avg_days: 7,\n        // avg line should be an how many day rolling avg\n        left_y_axis: true,\n        x_axis: false,\n        bars: false,\n        // True by default.\n        // If you want just the line, set value to true\n        margin: {\n          left: 18,\n          right: 18,\n          top: 10,\n          bottom: 5\n        },\n        date_range: ['2019-12-31', '2020-07-07'],\n        padding: 0,\n        // to set padding between the bars.\n        // value should be between 0 to 1\n        labels: false,\n        // Setting this to true will show a label\n        // to explain what the bars and line are\n        text: {\n          subhed: 'Weekly average infections reported'\n        },\n        variable_name: 'cases' // What is this a chart of? Infections? Deaths? Tests?\n\n      }).draw();\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart.draw();\n      this.myChart.draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var width = this.state.width;\n      return __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this2.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 9\n        }\n      }, \" \", __jsx(\"div\", {\n        id: \"myChart\",\n        ref: this.myChartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }\n      }), __jsx(\"div\", {\n        id: \"chart\",\n        ref: this.chartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }\n      }));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbIkNoYXJ0Q29tcG9uZW50Iiwid2lkdGgiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIkNoYXJ0IiwiV2Vla2x5QXZlcmFnZSIsImRlYm91bmNlIiwiY2hhcnQiLCJkcmF3IiwibXlDaGFydCIsInNlbGVjdGlvbiIsImNoYXJ0Q29udGFpbmVyIiwiY3VycmVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemUiLCJteUNoYXJ0Q29udGFpbmVyIiwiZGF0YSIsImNhc2VzRGF0YSIsInByb3BzIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJmaWxsIiwiaGVpZ2h0IiwiYXZnX2RheXMiLCJsZWZ0X3lfYXhpcyIsInhfYXhpcyIsImJhcnMiLCJtYXJnaW4iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJkYXRlX3JhbmdlIiwicGFkZGluZyIsImxhYmVscyIsInRleHQiLCJzdWJoZWQiLCJ2YXJpYWJsZV9uYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXRlIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztJQUVNQSxjOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNNO0FBQUVDLFdBQUssRUFBRTtBQUFULEs7O3lOQUNTQyw2Q0FBSyxDQUFDQyxTQUFOLEU7OzJOQUVFRCw2Q0FBSyxDQUFDQyxTQUFOLEU7O2dOQUdYLElBQUlDLHFEQUFKLEU7O2tOQUNFLElBQUlDLG9GQUFKLEU7O2lOQUdEQyx1REFBUSxDQUFDLFlBQU07QUFDdEIsWUFBS0MsS0FBTCxDQUFXQyxJQUFYOztBQUNBLFlBQUtDLE9BQUwsQ0FBYUQsSUFBYjtBQUNELEtBSGdCLEVBR2QsR0FIYyxDOzs7Ozs7O3dDQUtHO0FBQ2xCO0FBQ0EsV0FBS0QsS0FBTCxDQUNHRyxTQURILENBQ2EsS0FBS0MsY0FBTCxDQUFvQkMsT0FEakMsRUFFQTtBQUNBO0FBSEEsT0FJR0osSUFKSCxHQUZrQixDQVFsQjs7QUFDQUssWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLQyxNQUF2QyxFQVRrQixDQVdsQjs7QUFFQSxXQUFLTixPQUFMLENBQ0dDLFNBREgsQ0FDYSxLQUFLTSxnQkFBTCxDQUFzQkosT0FEbkMsRUFFR0ssSUFGSCxDQUVRQyw0Q0FGUixFQUdHQyxLQUhILENBR1M7QUFDTEMsY0FBTSxFQUFFLDJCQURIO0FBQ2dDO0FBQ3JDQyxtQkFBVyxFQUFFLEdBRlI7QUFFYTtBQUNsQkMsWUFBSSxFQUFFLE1BSEQ7QUFHUztBQUNkQyxjQUFNLEVBQUUsR0FKSDtBQUlRO0FBQ2JDLGdCQUFRLEVBQUUsQ0FMTDtBQUtRO0FBQ2JDLG1CQUFXLEVBQUUsSUFOUjtBQU9MQyxjQUFNLEVBQUUsS0FQSDtBQVFMQyxZQUFJLEVBQUUsS0FSRDtBQVFRO0FBQ2I7QUFDQUMsY0FBTSxFQUFFO0FBQ05DLGNBQUksRUFBRSxFQURBO0FBQ0lDLGVBQUssRUFBRSxFQURYO0FBQ2VDLGFBQUcsRUFBRSxFQURwQjtBQUN3QkMsZ0JBQU0sRUFBRTtBQURoQyxTQVZIO0FBYUxDLGtCQUFVLEVBQUUsQ0FBQyxZQUFELEVBQWUsWUFBZixDQWJQO0FBY0xDLGVBQU8sRUFBRSxDQWRKO0FBY087QUFDWjtBQUVBQyxjQUFNLEVBQUUsS0FqQkg7QUFpQlU7QUFDZjtBQUNBQyxZQUFJLEVBQUU7QUFDSkMsZ0JBQU0sRUFBRTtBQURKLFNBbkJEO0FBc0JMQyxxQkFBYSxFQUFFLE9BdEJWLENBc0JtQjs7QUF0Qm5CLE9BSFQsRUEyQkc5QixJQTNCSDtBQTRCRDs7OzJDQUVzQjtBQUNyQjtBQUNBSyxZQUFNLENBQUMwQixtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLeEIsTUFBMUM7QUFDRDs7O3lDQUVvQjtBQUNuQjtBQUNBO0FBQ0EsV0FBS1IsS0FBTCxDQUFXQyxJQUFYO0FBQ0EsV0FBS0MsT0FBTCxDQUFhRCxJQUFiO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUFBLFVBQ0NQLEtBREQsR0FDVyxLQUFLdUMsS0FEaEIsQ0FDQ3ZDLEtBREQ7QUFFUCxhQUNFLE1BQUMsaUVBQUQ7QUFDRSxhQUFLLEVBQUVBLEtBRFQ7QUFFRSxnQkFBUSxFQUNOLGtCQUFDQSxLQUFEO0FBQUEsaUJBQVcsTUFBSSxDQUFDd0MsUUFBTCxDQUFjO0FBQUV4QyxpQkFBSyxFQUFMQTtBQUFGLFdBQWQsQ0FBWDtBQUFBLFNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU1FO0FBQUssVUFBRSxFQUFDLFNBQVI7QUFBa0IsV0FBRyxFQUFFLEtBQUtlLGdCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTkYsRUFPRTtBQUFLLFVBQUUsRUFBQyxPQUFSO0FBQWdCLFdBQUcsRUFBRSxLQUFLTCxjQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUEYsQ0FERjtBQVdEOzs7O0VBcEZ3QlQsNkNBQUssQ0FBQ3dDLFM7O0FBdUZwQjFDLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL2RlbW8vQ2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnQgZnJvbSAnLi4vbGliL2NoYXJ0LmpzJztcbmltcG9ydCBDaGFydENvbnRhaW5lciBmcm9tICcuL2Z1cm5pdHVyZS9DaGFydENvbnRhaW5lcic7XG5pbXBvcnQgY2FzZXNEYXRhIGZyb20gJy4vY2FzZXNEYXRhLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9zdHlsZS1jb2xvci9kaXN0L2NhdGVnb3JpY2FsJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gvZGVib3VuY2UnO1xuXG5pbXBvcnQgV2Vla2x5QXZlcmFnZSBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9jaGFydC1tb2R1bGUtd2Vla2x5YXZlcmFnZSc7XG5cbmNsYXNzIENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHsgd2lkdGg6ICcnIH07XG4gICAgY2hhcnRDb250YWluZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgIG15Q2hhcnRDb250YWluZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgIC8vIEluc3RhbnRpYXRlIGFuZCBhZGQgb3VyIGNoYXJ0IGNsYXNzIHRvIHRoaXMgY29tcG9uZW50LlxuICAgIGNoYXJ0ID0gbmV3IENoYXJ0KCk7XG4gICAgbXlDaGFydCA9IG5ldyBXZWVrbHlBdmVyYWdlKCk7XG5cbiAgICAvLyBBIHJlc2l6ZSBmdW5jdGlvbiB0byByZWRyYXcgdGhlIGNoYXJ0LlxuICAgIHJlc2l6ZSA9IGRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMuY2hhcnQuZHJhdygpO1xuICAgICAgdGhpcy5teUNoYXJ0LmRyYXcoKTtcbiAgICB9LCAyNTApO1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAvLyBVc2Ugb3VyIGNoYXJ0IG1vZHVsZS5cbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnNlbGVjdGlvbih0aGlzLmNoYXJ0Q29udGFpbmVyLmN1cnJlbnQpXG4gICAgICAvLyAucHJvcHMoeyBmaWxsOiBiYXNlLmJsdWUuaGV4IH0pXG4gICAgICAvLyAuZGF0YSgpXG4gICAgICAgIC5kcmF3KCk7XG5cbiAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIHJlc2l6ZSBjaGFydCB3aXRoIHRoZSB3aW5kb3cuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuXG4gICAgICAvLyBHdXJtYW4ncyBjaGFydFxuXG4gICAgICB0aGlzLm15Q2hhcnRcbiAgICAgICAgLnNlbGVjdGlvbih0aGlzLm15Q2hhcnRDb250YWluZXIuY3VycmVudClcbiAgICAgICAgLmRhdGEoY2FzZXNEYXRhKVxuICAgICAgICAucHJvcHMoe1xuICAgICAgICAgIHN0cm9rZTogJ3JnYmEoMjUyLCAyMjksIDEzNSwgMC4zNSknLCAvLyBjb2xvdXIgb2YgbGluZVxuICAgICAgICAgIHN0cm9rZVdpZHRoOiAyLjUsIC8vIHdpZHRoIG9mIHRoZSBsaW5lXG4gICAgICAgICAgZmlsbDogJyNlZWUnLCAvLyBjb2xvdXIgb2YgdGhlIGJhcnNcbiAgICAgICAgICBoZWlnaHQ6IDE1MCwgLy8gY2hhcnQgaGVpZ2h0XG4gICAgICAgICAgYXZnX2RheXM6IDcsIC8vIGF2ZyBsaW5lIHNob3VsZCBiZSBhbiBob3cgbWFueSBkYXkgcm9sbGluZyBhdmdcbiAgICAgICAgICBsZWZ0X3lfYXhpczogdHJ1ZSxcbiAgICAgICAgICB4X2F4aXM6IGZhbHNlLFxuICAgICAgICAgIGJhcnM6IGZhbHNlLCAvLyBUcnVlIGJ5IGRlZmF1bHQuXG4gICAgICAgICAgLy8gSWYgeW91IHdhbnQganVzdCB0aGUgbGluZSwgc2V0IHZhbHVlIHRvIHRydWVcbiAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgIGxlZnQ6IDE4LCByaWdodDogMTgsIHRvcDogMTAsIGJvdHRvbTogNSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGVfcmFuZ2U6IFsnMjAxOS0xMi0zMScsICcyMDIwLTA3LTA3J10sXG4gICAgICAgICAgcGFkZGluZzogMCwgLy8gdG8gc2V0IHBhZGRpbmcgYmV0d2VlbiB0aGUgYmFycy5cbiAgICAgICAgICAvLyB2YWx1ZSBzaG91bGQgYmUgYmV0d2VlbiAwIHRvIDFcblxuICAgICAgICAgIGxhYmVsczogZmFsc2UsIC8vIFNldHRpbmcgdGhpcyB0byB0cnVlIHdpbGwgc2hvdyBhIGxhYmVsXG4gICAgICAgICAgLy8gdG8gZXhwbGFpbiB3aGF0IHRoZSBiYXJzIGFuZCBsaW5lIGFyZVxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIHN1YmhlZDogJ1dlZWtseSBhdmVyYWdlIGluZmVjdGlvbnMgcmVwb3J0ZWQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFyaWFibGVfbmFtZTogJ2Nhc2VzJywgLy8gV2hhdCBpcyB0aGlzIGEgY2hhcnQgb2Y/IEluZmVjdGlvbnM/IERlYXRocz8gVGVzdHM/XG4gICAgICAgIH0pXG4gICAgICAgIC5kcmF3KCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAvLyBSZW1vdmUgbGlzdGVuZXIgaWYgdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkLCB0b28uXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgY2hhcnQgd2l0aCB0aGUgY29tcG9uZW50LlxuICAgICAgLy8gQ2FuIGNoYW5nZSBkYXRhIG9yIHByb3BzIGhlcmUsIHdoYXRldmVyLi4uXG4gICAgICB0aGlzLmNoYXJ0LmRyYXcoKTtcbiAgICAgIHRoaXMubXlDaGFydC5kcmF3KCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyB3aWR0aCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDaGFydENvbnRhaW5lclxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBzZXRXaWR0aD17XG4gICAgICAgICAgICAod2lkdGgpID0+IHRoaXMuc2V0U3RhdGUoeyB3aWR0aCB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPiB7LyogVGhpcyBpcyBvdXIgY2hhcnQgY29udGFpbmVyIPCfkYcgKi99XG4gICAgICAgICAgPGRpdiBpZD0nbXlDaGFydCcgcmVmPXt0aGlzLm15Q2hhcnRDb250YWluZXJ9IC8+XG4gICAgICAgICAgPGRpdiBpZD0nY2hhcnQnIHJlZj17dGhpcy5jaGFydENvbnRhaW5lcn0gLz5cbiAgICAgICAgPC9DaGFydENvbnRhaW5lcj5cbiAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydENvbXBvbmVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})