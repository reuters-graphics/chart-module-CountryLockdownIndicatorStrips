webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _reuters_graphics_chart_module_weeklyaverage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reuters-graphics/chart-module-weeklyaverage */ \"./node_modules/@reuters-graphics/chart-module-weeklyaverage/dist/index.js\");\n/* harmony import */ var _reuters_graphics_chart_module_weeklyaverage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_chart_module_weeklyaverage__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @reuters-graphics/style-color/dist/categorical */ \"./node_modules/@reuters-graphics/style-color/dist/categorical/index.js\");\n/* harmony import */ var _casesData_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./casesData.json */ \"./src/demo/casesData.json\");\nvar _casesData_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./casesData.json */ \"./src/demo/casesData.json\", 1);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./defaultData.json */ \"./src/demo/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/demo/defaultData.json\", 1);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/prasanta/ReutersWork/INTERACTIVES/COVID-APP/chart-module-CountryLockdownIndicatorStrips/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: ''\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chartContainer\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"myChartContainer\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"myChart\", new _reuters_graphics_chart_module_weeklyaverage__WEBPACK_IMPORTED_MODULE_10___default.a());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_13___default()(function () {\n      _this.chart.props({\n        legendItems: {\n          // should contain items from stripColor\n          // null: null,\n          // stepLegend: {\n          //   0: null,\n          //   1: null,\n          // },\n          indexLegend: {\n            0: 'no NONO',\n            1: 'recommend closing',\n            2: 'require closing on some levels',\n            3: 'require closing all levels',\n            4: null\n          }\n        }\n      }).draw();\n\n      _this.myChart.draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      // Use our chart module.\n      this.chart.selection(this.chartContainer.current).data(_defaultData_json__WEBPACK_IMPORTED_MODULE_14__).props({\n        locale: 'en',\n        dateSeries: ['2019-12-31', '2020-07-07'],\n        dataParams: {\n          date: 'date',\n          index: 'c1',\n          stepValue: 'flag',\n          steps: 2 // stepValue = 0, 1...\n\n        },\n        margin: {\n          top: 10,\n          right: 18,\n          bottom: 10,\n          left: 18\n        },\n        baseColor: 'rgba(255,255,255,0.1)',\n        stripColor: {\n          0: '#4C566A',\n          1: '#948072',\n          2: '#f68e26',\n          3: '#e6550d',\n          4: '#de2d26'\n        },\n        legendItems: {\n          // should contain items from stripColor\n          \"null\": 'no data',\n          stepLegend: {\n            0: 'targeted',\n            1: 'nationwide'\n          },\n          indexLegend: {\n            0: 'no measures',\n            1: 'recommend closing',\n            2: 'require closing on some levels',\n            3: 'require closing all levels',\n            4: 'strict'\n          }\n        },\n        chartTitle: 'School closing measures',\n        axis: true\n      }).draw(); // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize); // Gurman's chart\n\n      this.myChart.selection(this.myChartContainer.current).data(_casesData_json__WEBPACK_IMPORTED_MODULE_12__).props({\n        stroke: 'rgba(255, 255, 255, 0.15)',\n        // colour of line\n        strokeWidth: 3.14,\n        // width of the line\n        fill: '#eee',\n        // colour of the bars\n        height: 120,\n        // chart height\n        avg_days: 7,\n        // avg line should be an how many day rolling avg\n        left_y_axis: true,\n        x_axis: false,\n        bars: false,\n        // True by default.\n        // If you want just the line, set value to true\n        margin: {\n          left: 18,\n          right: 18,\n          top: 10,\n          bottom: 5\n        },\n        date_range: ['2019-12-31', '2020-07-07'],\n        padding: 0,\n        // to set padding between the bars.\n        // value should be between 0 to 1\n        labels: true,\n        // Setting this to true will show a label\n        // to explain what the bars and line are\n        // text: {\n        //   subhed: 'Weekly average infections reported',\n        // },\n        variable_name: 'cases' // What is this a chart of? Infections? Deaths? Tests?\n\n      }).draw();\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart.draw();\n      this.myChart.draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var width = this.state.width;\n      return __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this2.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 9\n        }\n      }, \" \", __jsx(\"div\", {\n        id: \"myChart\",\n        ref: this.myChartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 146,\n          columnNumber: 11\n        }\n      }), __jsx(\"div\", {\n        id: \"chart\",\n        ref: this.chartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 147,\n          columnNumber: 11\n        }\n      }));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbIkNoYXJ0Q29tcG9uZW50Iiwid2lkdGgiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIkNoYXJ0IiwiV2Vla2x5QXZlcmFnZSIsImRlYm91bmNlIiwiY2hhcnQiLCJwcm9wcyIsImxlZ2VuZEl0ZW1zIiwiaW5kZXhMZWdlbmQiLCJkcmF3IiwibXlDaGFydCIsInNlbGVjdGlvbiIsImNoYXJ0Q29udGFpbmVyIiwiY3VycmVudCIsImRhdGEiLCJkZWZhdWx0RGF0YSIsImxvY2FsZSIsImRhdGVTZXJpZXMiLCJkYXRhUGFyYW1zIiwiZGF0ZSIsImluZGV4Iiwic3RlcFZhbHVlIiwic3RlcHMiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJiYXNlQ29sb3IiLCJzdHJpcENvbG9yIiwic3RlcExlZ2VuZCIsImNoYXJ0VGl0bGUiLCJheGlzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZSIsIm15Q2hhcnRDb250YWluZXIiLCJjYXNlc0RhdGEiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImZpbGwiLCJoZWlnaHQiLCJhdmdfZGF5cyIsImxlZnRfeV9heGlzIiwieF9heGlzIiwiYmFycyIsImRhdGVfcmFuZ2UiLCJwYWRkaW5nIiwibGFiZWxzIiwidmFyaWFibGVfbmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ007QUFBRUMsV0FBSyxFQUFFO0FBQVQsSzs7eU5BQ1NDLDRDQUFLLENBQUNDLFNBQU4sRTs7Mk5BRUVELDRDQUFLLENBQUNDLFNBQU4sRTs7Z05BR1gsSUFBSUMscURB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Q3JCO0FBQ0F3QixZQUFNLENBQUNpQixtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLZixNQUExQztBQUNEOzs7eUNBRW9CO0FBQ25CO0FBQ0E7QUFDQSxXQUFLOUIsS0FBTCxDQUFXSSxJQUFYO0FBQ0EsV0FBS0MsT0FBTCxDQUFhRCxJQUFiO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUFBLFVBQ0NWLEtBREQsR0FDVyxLQUFLb0QsS0FEaEIsQ0FDQ3BELEtBREQ7QUFFUCxhQUNFLE1BQUMsaUVBQUQ7QUFDRSxhQUFLLEVBQUVBLEtBRFQ7QUFFRSxnQkFBUSxFQUNOLGtCQUFDQSxLQUFEO0FBQUEsaUJBQVcsTUFBSSxDQUFDcUQsUUFBTCxDQUFjO0FBQUVyRCxpQkFBSyxFQUFMQTtBQUFGLFdBQWQsQ0FBWDtBQUFBLFNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU1FO0FBQUssVUFBRSxFQUFDLFNBQVI7QUFBa0IsV0FBRyxFQUFFLEtBQUtxQyxnQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU5GLEVBT0U7QUFBSyxVQUFFLEVBQUMsT0FBUjtBQUFnQixXQUFHLEVBQUUsS0FBS3hCLGNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFQRixDQURGO0FBV0Q7Ozs7RUE1SXdCWiw0Q0FBSyxDQUFDcUQsUzs7QUErSXBCdkQsNkVBQWYiLCJmaWxlIjoiLi9zcmMvZGVtby9DaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydCBmcm9tICcuLi9saWIvY2hhcnQuanMnO1xuaW1wb3J0IENoYXJ0Q29udGFpbmVyIGZyb20gJy4vZnVybml0dXJlL0NoYXJ0Q29udGFpbmVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgV2Vla2x5QXZlcmFnZSBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9jaGFydC1tb2R1bGUtd2Vla2x5YXZlcmFnZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3Mvc3R5bGUtY29sb3IvZGlzdC9jYXRlZ29yaWNhbCc7XG5pbXBvcnQgY2FzZXNEYXRhIGZyb20gJy4vY2FzZXNEYXRhLmpzb24nO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XG5pbXBvcnQgZGVmYXVsdERhdGEgZnJvbSAnLi9kZWZhdWx0RGF0YS5qc29uJztcblxuY2xhc3MgQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0geyB3aWR0aDogJycgfTtcbiAgICBjaGFydENvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgbXlDaGFydENvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgLy8gSW5zdGFudGlhdGUgYW5kIGFkZCBvdXIgY2hhcnQgY2xhc3MgdG8gdGhpcyBjb21wb25lbnQuXG4gICAgY2hhcnQgPSBuZXcgQ2hhcnQoKTtcbiAgICBteUNoYXJ0ID0gbmV3IFdlZWtseUF2ZXJhZ2UoKTtcblxuICAgIC8vIEEgcmVzaXplIGZ1bmN0aW9uIHRvIHJlZHJhdyB0aGUgY2hhcnQuXG4gICAgcmVzaXplID0gZGVib3VuY2UoKCkgPT4ge1xuICAgICAgdGhpcy5jaGFydFxuICAgICAgICAucHJvcHMoe1xuICAgICAgICAgIGxlZ2VuZEl0ZW1zOiB7IC8vIHNob3VsZCBjb250YWluIGl0ZW1zIGZyb20gc3RyaXBDb2xvclxuICAgICAgICAgICAgLy8gbnVsbDogbnVsbCxcbiAgICAgICAgICAgIC8vIHN0ZXBMZWdlbmQ6IHtcbiAgICAgICAgICAgIC8vICAgMDogbnVsbCxcbiAgICAgICAgICAgIC8vICAgMTogbnVsbCxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBpbmRleExlZ2VuZDoge1xuICAgICAgICAgICAgICAwOiAnbm8gTk9OTycsXG4gICAgICAgICAgICAgIDE6ICdyZWNvbW1lbmQgY2xvc2luZycsXG4gICAgICAgICAgICAgIDI6ICdyZXF1aXJlIGNsb3Npbmcgb24gc29tZSBsZXZlbHMnLFxuICAgICAgICAgICAgICAzOiAncmVxdWlyZSBjbG9zaW5nIGFsbCBsZXZlbHMnLFxuICAgICAgICAgICAgICA0OiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAuZHJhdygpO1xuICAgICAgdGhpcy5teUNoYXJ0LmRyYXcoKTtcbiAgICB9LCAyNTApO1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAvLyBVc2Ugb3VyIGNoYXJ0IG1vZHVsZS5cbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnNlbGVjdGlvbih0aGlzLmNoYXJ0Q29udGFpbmVyLmN1cnJlbnQpXG4gICAgICAgIC5kYXRhKGRlZmF1bHREYXRhKVxuICAgICAgICAucHJvcHMoe1xuICAgICAgICAgIGxvY2FsZTogJ2VuJyxcbiAgICAgICAgICBkYXRlU2VyaWVzOiBbJzIwMTktMTItMzEnLCAnMjAyMC0wNy0wNyddLFxuICAgICAgICAgIGRhdGFQYXJhbXM6IHtcbiAgICAgICAgICAgIGRhdGU6ICdkYXRlJyxcbiAgICAgICAgICAgIGluZGV4OiAnYzEnLFxuICAgICAgICAgICAgc3RlcFZhbHVlOiAnZmxhZycsXG4gICAgICAgICAgICBzdGVwczogMiwgLy8gc3RlcFZhbHVlID0gMCwgMS4uLlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICB0b3A6IDEwLFxuICAgICAgICAgICAgcmlnaHQ6IDE4LFxuICAgICAgICAgICAgYm90dG9tOiAxMCxcbiAgICAgICAgICAgIGxlZnQ6IDE4LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmFzZUNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjEpJyxcbiAgICAgICAgICBzdHJpcENvbG9yOiB7XG4gICAgICAgICAgICAwOiAnIzRDNTY2QScsXG4gICAgICAgICAgICAxOiAnIzk0ODA3MicsXG4gICAgICAgICAgICAyOiAnI2Y2OGUyNicsXG4gICAgICAgICAgICAzOiAnI2U2NTUwZCcsXG4gICAgICAgICAgICA0OiAnI2RlMmQyNicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZWdlbmRJdGVtczogeyAvLyBzaG91bGQgY29udGFpbiBpdGVtcyBmcm9tIHN0cmlwQ29sb3JcbiAgICAgICAgICAgIG51bGw6ICdubyBkYXRhJyxcbiAgICAgICAgICAgIHN0ZXBMZWdlbmQ6IHtcbiAgICAgICAgICAgICAgMDogJ3RhcmdldGVkJyxcbiAgICAgICAgICAgICAgMTogJ25hdGlvbndpZGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluZGV4TGVnZW5kOiB7XG4gICAgICAgICAgICAgIDA6ICdubyBtZWFzdXJlcycsXG4gICAgICAgICAgICAgIDE6ICdyZWNvbW1lbmQgY2xvc2luZycsXG4gICAgICAgICAgICAgIDI6ICdyZXF1aXJlIGNsb3Npbmcgb24gc29tZSBsZXZlbHMnLFxuICAgICAgICAgICAgICAzOiAncmVxdWlyZSBjbG9zaW5nIGFsbCBsZXZlbHMnLFxuICAgICAgICAgICAgICA0OiAnc3RyaWN0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGFydFRpdGxlOiAnU2Nob29sIGNsb3NpbmcgbWVhc3VyZXMnLFxuICAgICAgICAgIGF4aXM6IHRydWUsXG4gICAgICAgIH0pXG4gICAgICAgIC5kcmF3KCk7XG5cbiAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIHJlc2l6ZSBjaGFydCB3aXRoIHRoZSB3aW5kb3cuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuXG4gICAgICAvLyBHdXJtYW4ncyBjaGFydFxuXG4gICAgICB0aGlzLm15Q2hhcnRcbiAgICAgICAgLnNlbGVjdGlvbih0aGlzLm15Q2hhcnRDb250YWluZXIuY3VycmVudClcbiAgICAgICAgLmRhdGEoY2FzZXNEYXRhKVxuICAgICAgICAucHJvcHMoe1xuICAgICAgICAgIHN0cm9rZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSknLCAvLyBjb2xvdXIgb2YgbGluZVxuICAgICAgICAgIHN0cm9rZVdpZHRoOiAzLjE0LCAvLyB3aWR0aCBvZiB0aGUgbGluZVxuICAgICAgICAgIGZpbGw6ICcjZWVlJywgLy8gY29sb3VyIG9mIHRoZSBiYXJzXG4gICAgICAgICAgaGVpZ2h0OiAxMjAsIC8vIGNoYXJ0IGhlaWdodFxuICAgICAgICAgIGF2Z19kYXlzOiA3LCAvLyBhdmcgbGluZSBzaG91bGQgYmUgYW4gaG93IG1hbnkgZGF5IHJvbGxpbmcgYXZnXG4gICAgICAgICAgbGVmdF95X2F4aXM6IHRydWUsXG4gICAgICAgICAgeF9heGlzOiBmYWxzZSxcbiAgICAgICAgICBiYXJzOiBmYWxzZSwgLy8gVHJ1ZSBieSBkZWZhdWx0LlxuICAgICAgICAgIC8vIElmIHlvdSB3YW50IGp1c3QgdGhlIGxpbmUsIHNldCB2YWx1ZSB0byB0cnVlXG4gICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICBsZWZ0OiAxOCwgcmlnaHQ6IDE4LCB0b3A6IDEwLCBib3R0b206IDUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRlX3JhbmdlOiBbJzIwMTktMTItMzEnLCAnMjAyMC0wNy0wNyddLFxuICAgICAgICAgIHBhZGRpbmc6IDAsIC8vIHRvIHNldCBwYWRkaW5nIGJldHdlZW4gdGhlIGJhcnMuXG4gICAgICAgICAgLy8gdmFsdWUgc2hvdWxkIGJlIGJldHdlZW4gMCB0byAxXG5cbiAgICAgICAgICBsYWJlbHM6IHRydWUsIC8vIFNldHRpbmcgdGhpcyB0byB0cnVlIHdpbGwgc2hvdyBhIGxhYmVsXG4gICAgICAgICAgLy8gdG8gZXhwbGFpbiB3aGF0IHRoZSBiYXJzIGFuZCBsaW5lIGFyZVxuICAgICAgICAgIC8vIHRleHQ6IHtcbiAgICAgICAgICAvLyAgIHN1YmhlZDogJ1dlZWtseSBhdmVyYWdlIGluZmVjdGlvbnMgcmVwb3J0ZWQnLFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgdmFyaWFibGVfbmFtZTogJ2Nhc2VzJywgLy8gV2hhdCBpcyB0aGlzIGEgY2hhcnQgb2Y/IEluZmVjdGlvbnM/IERlYXRocz8gVGVzdHM/XG4gICAgICAgIH0pXG4gICAgICAgIC5kcmF3KCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAvLyBSZW1vdmUgbGlzdGVuZXIgaWYgdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkLCB0b28uXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgY2hhcnQgd2l0aCB0aGUgY29tcG9uZW50LlxuICAgICAgLy8gQ2FuIGNoYW5nZSBkYXRhIG9yIHByb3BzIGhlcmUsIHdoYXRldmVyLi4uXG4gICAgICB0aGlzLmNoYXJ0LmRyYXcoKTtcbiAgICAgIHRoaXMubXlDaGFydC5kcmF3KCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyB3aWR0aCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDaGFydENvbnRhaW5lclxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBzZXRXaWR0aD17XG4gICAgICAgICAgICAod2lkdGgpID0+IHRoaXMuc2V0U3RhdGUoeyB3aWR0aCB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPiB7LyogVGhpcyBpcyBvdXIgY2hhcnQgY29udGFpbmVyIPCfkYcgKi99XG4gICAgICAgICAgPGRpdiBpZD0nbXlDaGFydCcgcmVmPXt0aGlzLm15Q2hhcnRDb250YWluZXJ9IC8+XG4gICAgICAgICAgPGRpdiBpZD0nY2hhcnQnIHJlZj17dGhpcy5jaGFydENvbnRhaW5lcn0gLz5cbiAgICAgICAgPC9DaGFydENvbnRhaW5lcj5cbiAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydENvbXBvbmVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})