webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var _casesData_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./casesData.json */ \"./src/demo/casesData.json\");\nvar _casesData_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./casesData.json */ \"./src/demo/casesData.json\", 1);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @reuters-graphics/style-color/dist/categorical */ \"./node_modules/@reuters-graphics/style-color/dist/categorical/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _reuters_graphics_chart_module_weeklyaverage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @reuters-graphics/chart-module-weeklyaverage */ \"./node_modules/@reuters-graphics/chart-module-weeklyaverage/dist/index.js\");\n/* harmony import */ var _reuters_graphics_chart_module_weeklyaverage__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_chart_module_weeklyaverage__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/prasanta/ReutersWork/INTERACTIVES/COVID-APP/chart-module-CountryLockdownIndicatorStrips/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: ''\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chartContainer\", react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"myChartContainer\", react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"myChart\", new _reuters_graphics_chart_module_weeklyaverage__WEBPACK_IMPORTED_MODULE_13___default.a());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_12___default()(function () {\n      _this.chart.draw();\n\n      _this.myChart.draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      // Use our chart module.\n      this.chart.selection(this.chartContainer.current) // .props({ fill: base.blue.hex })\n      // .data()\n      .draw(); // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize); // Gurman's chart\n\n      this.myChart.selection(this.myChartContainer.current).data(_casesData_json__WEBPACK_IMPORTED_MODULE_9__).props({\n        stroke: 'rgba(255, 255, 255, 0.25)',\n        // colour of line\n        strokeWidth: 1,\n        // width of the line\n        fill: '#eee',\n        // colour of the bars\n        height: 120,\n        // chart height\n        avg_days: 7,\n        // avg line should be an how many day rolling avg\n        left_y_axis: true,\n        x_axis: false,\n        bars: false,\n        // True by default.\n        // If you want just the line, set value to true\n        margin: {\n          left: 18,\n          right: 18,\n          top: 10,\n          bottom: 5\n        },\n        date_range: ['2019-12-31', '2020-07-07'],\n        padding: 0,\n        // to set padding between the bars.\n        // value should be between 0 to 1\n        labels: true,\n        // Setting this to true will show a label\n        // to explain what the bars and line are\n        // text: {\n        //   subhed: 'Weekly average infections reported',\n        // },\n        variable_name: 'cases' // What is this a chart of? Infections? Deaths? Tests?\n\n      }).draw();\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart.draw();\n      this.myChart.draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var width = this.state.width;\n      return __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this2.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 9\n        }\n      }, \" \", __jsx(\"div\", {\n        id: \"myChart\",\n        ref: this.myChartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }\n      }), __jsx(\"div\", {\n        id: \"chart\",\n        ref: this.chartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }\n      }));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbIkNoYXJ0Q29tcG9uZW50Iiwid2lkdGgiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIkNoYXJ0IiwiV2Vla2x5QXZlcmFnZSIsImRlYm91bmNlIiwiY2hhcnQiLCJkcmF3IiwibXlDaGFydCIsInNlbGVjdGlvbiIsImNoYXJ0Q29udGFpbmVyIiwiY3VycmVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemUiLCJteUNoYXJ0Q29udGFpbmVyIiwiZGF0YSIsImNhc2VzRGF0YSIsInByb3BzIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJmaWxsIiwiaGVpZ2h0IiwiYXZnX2RheXMiLCJsZWZ0X3lfYXhpcyIsInhfYXhpcyIsImJhcnMiLCJtYXJnaW4iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJkYXRlX3JhbmdlIiwicGFkZGluZyIsImxhYmVscyIsInZhcmlhYmxlX25hbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RhdGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0lBRU1BLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ007QUFBRUMsV0FBSyxFQUFFO0FBQVQsSzs7eU5BQ1NDLDZDQUFLLENBQUNDLFNBQU4sRTs7Mk5BRUVELDZDQUFLLENBQUNDLFNBQU4sRTs7Z05BR1gsSUFBSUMscURBQUosRTs7a05BQ0UsSUFBSUMsb0ZBQUosRTs7aU5BR0RDLHVEQUFRLENBQUMsWUFBTTtBQUN0QixZQUFLQyxLQUFMLENBQVdDLElBQVg7O0FBQ0EsWUFBS0MsT0FBTCxDQUFhRCxJQUFiO0FBQ0QsS0FIZ0IsRUFHZCxHQUhjLEM7Ozs7Ozs7d0NBS0c7QUFDbEI7QUFDQSxXQUFLRCxLQUFMLENBQ0dHLFNBREgsQ0FDYSxLQUFLQyxjQUFMLENBQW9CQyxPQURqQyxFQUVBO0FBQ0E7QUFIQSxPQUlHSixJQUpILEdBRmtCLENBUWxCOztBQUNBSyxZQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtDLE1BQXZDLEVBVGtCLENBV2xCOztBQUVBLFdBQUtOLE9BQUwsQ0FDR0MsU0FESCxDQUNhLEtBQUtNLGdCQUFMLENBQXNCSixPQURuQyxFQUVHSyxJQUZILENBRVFDLDRDQUZSLEVBR0dDLEtBSEgsQ0FHUztBQUNMQyxjQUFNLEVBQUUsMkJBREg7QUFDZ0M7QUFDckNDLG1CQUFXLEVBQUUsQ0FGUjtBQUVXO0FBQ2hCQyxZQUFJLEVBQUUsTUFIRDtBQUdTO0FBQ2RDLGNBQU0sRUFBRSxHQUpIO0FBSVE7QUFDYkMsZ0JBQVEsRUFBRSxDQUxMO0FBS1E7QUFDYkMsbUJBQVcsRUFBRSxJQU5SO0FBT0xDLGNBQU0sRUFBRSxLQVBIO0FBUUxDLFlBQUksRUFBRSxLQVJEO0FBUVE7QUFDYjtBQUNBQyxjQUFNLEVBQUU7QUFDTkMsY0FBSSxFQUFFLEVBREE7QUFDSUMsZUFBSyxFQUFFLEVBRFg7QUFDZUMsYUFBRyxFQUFFLEVBRHBCO0FBQ3dCQyxnQkFBTSxFQUFFO0FBRGhDLFNBVkg7QUFhTEMsa0JBQVUsRUFBRSxDQUFDLFlBQUQsRUFBZSxZQUFmLENBYlA7QUFjTEMsZUFBTyxFQUFFLENBZEo7QUFjTztBQUNaO0FBRUFDLGNBQU0sRUFBRSxJQWpCSDtBQWlCUztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLHFCQUFhLEVBQUUsT0F0QlYsQ0FzQm1COztBQXRCbkIsT0FIVCxFQTJCRzVCLElBM0JIO0FBNEJEOzs7MkNBRXNCO0FBQ3JCO0FBQ0FLLFlBQU0sQ0FBQ3dCLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUt0QixNQUExQztBQUNEOzs7eUNBRW9CO0FBQ25CO0FBQ0E7QUFDQSxXQUFLUixLQUFMLENBQVdDLElBQVg7QUFDQSxXQUFLQyxPQUFMLENBQWFELElBQWI7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsVUFDQ1AsS0FERCxHQUNXLEtBQUtxQyxLQURoQixDQUNDckMsS0FERDtBQUVQLGFBQ0UsTUFBQyxpRUFBRDtBQUNFLGFBQUssRUFBRUEsS0FEVDtBQUVFLGdCQUFRLEVBQ04sa0JBQUNBLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUNzQyxRQUFMLENBQWM7QUFBRXRDLGlCQUFLLEVBQUxBO0FBQUYsV0FBZCxDQUFYO0FBQUEsU0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTUU7QUFBSyxVQUFFLEVBQUMsU0FBUjtBQUFrQixXQUFHLEVBQUUsS0FBS2UsZ0JBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFORixFQU9FO0FBQUssVUFBRSxFQUFDLE9BQVI7QUFBZ0IsV0FBRyxFQUFFLEtBQUtMLGNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFQRixDQURGO0FBV0Q7Ozs7RUFwRndCVCw2Q0FBSyxDQUFDc0MsUzs7QUF1RnBCeEMsNkVBQWYiLCJmaWxlIjoiLi9zcmMvZGVtby9DaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydCBmcm9tICcuLi9saWIvY2hhcnQuanMnO1xuaW1wb3J0IENoYXJ0Q29udGFpbmVyIGZyb20gJy4vZnVybml0dXJlL0NoYXJ0Q29udGFpbmVyJztcbmltcG9ydCBjYXNlc0RhdGEgZnJvbSAnLi9jYXNlc0RhdGEuanNvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL3N0eWxlLWNvbG9yL2Rpc3QvY2F0ZWdvcmljYWwnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XG5cbmltcG9ydCBXZWVrbHlBdmVyYWdlIGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2NoYXJ0LW1vZHVsZS13ZWVrbHlhdmVyYWdlJztcblxuY2xhc3MgQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0geyB3aWR0aDogJycgfTtcbiAgICBjaGFydENvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgbXlDaGFydENvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgLy8gSW5zdGFudGlhdGUgYW5kIGFkZCBvdXIgY2hhcnQgY2xhc3MgdG8gdGhpcyBjb21wb25lbnQuXG4gICAgY2hhcnQgPSBuZXcgQ2hhcnQoKTtcbiAgICBteUNoYXJ0ID0gbmV3IFdlZWtseUF2ZXJhZ2UoKTtcblxuICAgIC8vIEEgcmVzaXplIGZ1bmN0aW9uIHRvIHJlZHJhdyB0aGUgY2hhcnQuXG4gICAgcmVzaXplID0gZGVib3VuY2UoKCkgPT4ge1xuICAgICAgdGhpcy5jaGFydC5kcmF3KCk7XG4gICAgICB0aGlzLm15Q2hhcnQuZHJhdygpO1xuICAgIH0sIDI1MCk7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIC8vIFVzZSBvdXIgY2hhcnQgbW9kdWxlLlxuICAgICAgdGhpcy5jaGFydFxuICAgICAgICAuc2VsZWN0aW9uKHRoaXMuY2hhcnRDb250YWluZXIuY3VycmVudClcbiAgICAgIC8vIC5wcm9wcyh7IGZpbGw6IGJhc2UuYmx1ZS5oZXggfSlcbiAgICAgIC8vIC5kYXRhKClcbiAgICAgICAgLmRyYXcoKTtcblxuICAgICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gcmVzaXplIGNoYXJ0IHdpdGggdGhlIHdpbmRvdy5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG5cbiAgICAgIC8vIEd1cm1hbidzIGNoYXJ0XG5cbiAgICAgIHRoaXMubXlDaGFydFxuICAgICAgICAuc2VsZWN0aW9uKHRoaXMubXlDaGFydENvbnRhaW5lci5jdXJyZW50KVxuICAgICAgICAuZGF0YShjYXNlc0RhdGEpXG4gICAgICAgIC5wcm9wcyh7XG4gICAgICAgICAgc3Ryb2tlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KScsIC8vIGNvbG91ciBvZiBsaW5lXG4gICAgICAgICAgc3Ryb2tlV2lkdGg6IDEsIC8vIHdpZHRoIG9mIHRoZSBsaW5lXG4gICAgICAgICAgZmlsbDogJyNlZWUnLCAvLyBjb2xvdXIgb2YgdGhlIGJhcnNcbiAgICAgICAgICBoZWlnaHQ6IDEyMCwgLy8gY2hhcnQgaGVpZ2h0XG4gICAgICAgICAgYXZnX2RheXM6IDcsIC8vIGF2ZyBsaW5lIHNob3VsZCBiZSBhbiBob3cgbWFueSBkYXkgcm9sbGluZyBhdmdcbiAgICAgICAgICBsZWZ0X3lfYXhpczogdHJ1ZSxcbiAgICAgICAgICB4X2F4aXM6IGZhbHNlLFxuICAgICAgICAgIGJhcnM6IGZhbHNlLCAvLyBUcnVlIGJ5IGRlZmF1bHQuXG4gICAgICAgICAgLy8gSWYgeW91IHdhbnQganVzdCB0aGUgbGluZSwgc2V0IHZhbHVlIHRvIHRydWVcbiAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgIGxlZnQ6IDE4LCByaWdodDogMTgsIHRvcDogMTAsIGJvdHRvbTogNSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGVfcmFuZ2U6IFsnMjAxOS0xMi0zMScsICcyMDIwLTA3LTA3J10sXG4gICAgICAgICAgcGFkZGluZzogMCwgLy8gdG8gc2V0IHBhZGRpbmcgYmV0d2VlbiB0aGUgYmFycy5cbiAgICAgICAgICAvLyB2YWx1ZSBzaG91bGQgYmUgYmV0d2VlbiAwIHRvIDFcblxuICAgICAgICAgIGxhYmVsczogdHJ1ZSwgLy8gU2V0dGluZyB0aGlzIHRvIHRydWUgd2lsbCBzaG93IGEgbGFiZWxcbiAgICAgICAgICAvLyB0byBleHBsYWluIHdoYXQgdGhlIGJhcnMgYW5kIGxpbmUgYXJlXG4gICAgICAgICAgLy8gdGV4dDoge1xuICAgICAgICAgIC8vICAgc3ViaGVkOiAnV2Vla2x5IGF2ZXJhZ2UgaW5mZWN0aW9ucyByZXBvcnRlZCcsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICB2YXJpYWJsZV9uYW1lOiAnY2FzZXMnLCAvLyBXaGF0IGlzIHRoaXMgYSBjaGFydCBvZj8gSW5mZWN0aW9ucz8gRGVhdGhzPyBUZXN0cz9cbiAgICAgICAgfSlcbiAgICAgICAgLmRyYXcoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIC8vIFJlbW92ZSBsaXN0ZW5lciBpZiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQsIHRvby5cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgLy8gVXBkYXRlIHRoZSBjaGFydCB3aXRoIHRoZSBjb21wb25lbnQuXG4gICAgICAvLyBDYW4gY2hhbmdlIGRhdGEgb3IgcHJvcHMgaGVyZSwgd2hhdGV2ZXIuLi5cbiAgICAgIHRoaXMuY2hhcnQuZHJhdygpO1xuICAgICAgdGhpcy5teUNoYXJ0LmRyYXcoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHdpZHRoIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENoYXJ0Q29udGFpbmVyXG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIHNldFdpZHRoPXtcbiAgICAgICAgICAgICh3aWR0aCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHdpZHRoIH0pXG4gICAgICAgICAgfVxuICAgICAgICA+IHsvKiBUaGlzIGlzIG91ciBjaGFydCBjb250YWluZXIg8J+RhyAqL31cbiAgICAgICAgICA8ZGl2IGlkPSdteUNoYXJ0JyByZWY9e3RoaXMubXlDaGFydENvbnRhaW5lcn0gLz5cbiAgICAgICAgICA8ZGl2IGlkPSdjaGFydCcgcmVmPXt0aGlzLmNoYXJ0Q29udGFpbmVyfSAvPlxuICAgICAgICA8L0NoYXJ0Q29udGFpbmVyPlxuICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q29tcG9uZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})