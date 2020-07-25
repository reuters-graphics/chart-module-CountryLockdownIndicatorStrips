webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _reuters_graphics_chart_module_weeklyaverage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reuters-graphics/chart-module-weeklyaverage */ \"./node_modules/@reuters-graphics/chart-module-weeklyaverage/dist/index.js\");\n/* harmony import */ var _reuters_graphics_chart_module_weeklyaverage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_chart_module_weeklyaverage__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @reuters-graphics/style-color/dist/categorical */ \"./node_modules/@reuters-graphics/style-color/dist/categorical/index.js\");\n/* harmony import */ var _casesData_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./casesData.json */ \"./src/demo/casesData.json\");\nvar _casesData_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./casesData.json */ \"./src/demo/casesData.json\", 1);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./defaultData.json */ \"./src/demo/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/demo/defaultData.json\", 1);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/prasanta/ReutersWork/INTERACTIVES/COVID-APP/chart-module-CountryLockdownIndicatorStrips/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: ''\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chartContainer\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"myChartContainer\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"myChart\", new _reuters_graphics_chart_module_weeklyaverage__WEBPACK_IMPORTED_MODULE_10___default.a());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_13___default()(function () {\n      _this.chart.props({\n        legendItems: {\n          // should contain items from stripColor\n          // null: null,\n          // stepLegend: {\n          //   0: null,\n          //   1: null,\n          // },\n          indexLegend: {\n            0: 'no NONO',\n            1: 'recommend closing',\n            2: 'require closing on some levels',\n            3: 'require closing all levels',\n            4: null\n          }\n        }\n      }).draw();\n\n      _this.myChart.draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      // Use our chart module.\n      this.chart.selection(this.chartContainer.current).data(_defaultData_json__WEBPACK_IMPORTED_MODULE_14__).props({\n        locale: 'en',\n        dateSeries: ['2019-12-31', '2020-07-07'],\n        dataParams: {\n          date: 'date',\n          index: 'c1',\n          stepValue: 'flag',\n          steps: 2 // stepValue = 0, 1...\n\n        },\n        margin: {\n          top: 10,\n          right: 18,\n          bottom: 10,\n          left: 18\n        },\n        baseColor: 'rgba(255,255,255,0.1)',\n        stripColor: {\n          0: '#4C566A',\n          1: '#948072',\n          2: '#f68e26' // 3: '#de2d26',\n\n        },\n        legendItems: {\n          // should contain items from stripColor\n          \"null\": 'no data',\n          stepLegend: {\n            0: 'targeted',\n            1: 'nationwide'\n          },\n          indexLegend: {\n            0: 'no measures',\n            1: 'recommend closing',\n            2: 'require closing on some levels',\n            3: 'require closing all levels',\n            4: 'something'\n          }\n        },\n        chartTitle: 'School closing measures',\n        axis: true\n      }).draw(); // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize); // Gurman's chart\n\n      this.myChart.selection(this.myChartContainer.current).data(_casesData_json__WEBPACK_IMPORTED_MODULE_12__).props({\n        stroke: 'rgba(255, 255, 255, 0.15)',\n        // colour of line\n        strokeWidth: 3.14,\n        // width of the line\n        fill: '#eee',\n        // colour of the bars\n        height: 120,\n        // chart height\n        avg_days: 7,\n        // avg line should be an how many day rolling avg\n        left_y_axis: true,\n        x_axis: false,\n        bars: false,\n        // True by default.\n        // If you want just the line, set value to true\n        margin: {\n          left: 18,\n          right: 18,\n          top: 10,\n          bottom: 5\n        },\n        date_range: ['2019-12-31', '2020-07-07'],\n        padding: 0,\n        // to set padding between the bars.\n        // value should be between 0 to 1\n        labels: true,\n        // Setting this to true will show a label\n        // to explain what the bars and line are\n        // text: {\n        //   subhed: 'Weekly average infections reported',\n        // },\n        variable_name: 'cases' // What is this a chart of? Infections? Deaths? Tests?\n\n      }).draw();\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart.draw();\n      this.myChart.draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var width = this.state.width;\n      return __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this2.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 9\n        }\n      }, \" \", __jsx(\"div\", {\n        id: \"myChart\",\n        ref: this.myChartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 11\n        }\n      }), __jsx(\"div\", {\n        id: \"chart\",\n        ref: this.chartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 146,\n          columnNumber: 11\n        }\n      }));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbIkNoYXJ0Q29tcG9uZW50Iiwid2lkdGgiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIkNoYXJ0IiwiV2Vla2x5QXZlcmFnZSIsImRlYm91bmNlIiwiY2hhcnQiLCJwcm9wcyIsImxlZ2VuZEl0ZW1zIiwiaW5kZXhMZWdlbmQiLCJkcmF3IiwibXlDaGFydCIsInNlbGVjdGlvbiIsImNoYXJ0Q29udGFpbmVyIiwiY3VycmVudCIsImRhdGEiLCJkZWZhdWx0RGF0YSIsImxvY2FsZSIsImRhdGVTZXJpZXMiLCJkYXRhUGFyYW1zIiwiZGF0ZSIsImluZGV4Iiwic3RlcFZhbHVlIiwic3RlcHMiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJiYXNlQ29sb3IiLCJzdHJpcENvbG9yIiwic3RlcExlZ2VuZCIsImNoYXJ0VGl0bGUiLCJheGlzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZSIsIm15Q2hhcnRDb250YWluZXIiLCJjYXNlc0RhdGEiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImZpbGwiLCJoZWlnaHQiLCJhdmdfZGF5cyIsImxlZnRfeV9heGlzIiwieF9heGlzIiwiYmFycyIsImRhdGVfcmFuZ2UiLCJwYWRkaW5nIiwibGFiZWxzIiwidmFyaWFibGVfbmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ007QUFBRUMsV0FBSyxFQUFFO0FBQVQsSzs7eU5BQ1NDLDRDQUFLLENBQUNDLFNBQU4sRTs7Mk5BRUVELDRDQUFLLENBQUNDLFNBQU4sRTs7Z05BR1gsSUFBSUMscURB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Q2lCLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtmLE1BQTFDO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkI7QUFDQTtBQUNBLFdBQUs5QixLQUFMLENBQVdJLElBQVg7QUFDQSxXQUFLQyxPQUFMLENBQWFELElBQWI7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsVUFDQ1YsS0FERCxHQUNXLEtBQUtvRCxLQURoQixDQUNDcEQsS0FERDtBQUVQLGFBQ0UsTUFBQyxpRUFBRDtBQUNFLGFBQUssRUFBRUEsS0FEVDtBQUVFLGdCQUFRLEVBQ04sa0JBQUNBLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUNxRCxRQUFMLENBQWM7QUFBRXJELGlCQUFLLEVBQUxBO0FBQUYsV0FBZCxDQUFYO0FBQUEsU0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTUU7QUFBSyxVQUFFLEVBQUMsU0FBUjtBQUFrQixXQUFHLEVBQUUsS0FBS3FDLGdCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTkYsRUFPRTtBQUFLLFVBQUUsRUFBQyxPQUFSO0FBQWdCLFdBQUcsRUFBRSxLQUFLeEIsY0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVBGLENBREY7QUFXRDs7OztFQTNJd0JaLDRDQUFLLENBQUNxRCxTOztBQThJcEJ2RCw2RUFBZiIsImZpbGUiOiIuL3NyYy9kZW1vL0NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0IGZyb20gJy4uL2xpYi9jaGFydC5qcyc7XG5pbXBvcnQgQ2hhcnRDb250YWluZXIgZnJvbSAnLi9mdXJuaXR1cmUvQ2hhcnRDb250YWluZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBXZWVrbHlBdmVyYWdlIGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2NoYXJ0LW1vZHVsZS13ZWVrbHlhdmVyYWdlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9zdHlsZS1jb2xvci9kaXN0L2NhdGVnb3JpY2FsJztcbmltcG9ydCBjYXNlc0RhdGEgZnJvbSAnLi9jYXNlc0RhdGEuanNvbic7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcbmltcG9ydCBkZWZhdWx0RGF0YSBmcm9tICcuL2RlZmF1bHREYXRhLmpzb24nO1xuXG5jbGFzcyBDaGFydENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7IHdpZHRoOiAnJyB9O1xuICAgIGNoYXJ0Q29udGFpbmVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICBteUNoYXJ0Q29udGFpbmVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICAvLyBJbnN0YW50aWF0ZSBhbmQgYWRkIG91ciBjaGFydCBjbGFzcyB0byB0aGlzIGNvbXBvbmVudC5cbiAgICBjaGFydCA9IG5ldyBDaGFydCgpO1xuICAgIG15Q2hhcnQgPSBuZXcgV2Vla2x5QXZlcmFnZSgpO1xuXG4gICAgLy8gQSByZXNpemUgZnVuY3Rpb24gdG8gcmVkcmF3IHRoZSBjaGFydC5cbiAgICByZXNpemUgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLmNoYXJ0XG4gICAgICAgIC5wcm9wcyh7XG4gICAgICAgICAgbGVnZW5kSXRlbXM6IHsgLy8gc2hvdWxkIGNvbnRhaW4gaXRlbXMgZnJvbSBzdHJpcENvbG9yXG4gICAgICAgICAgICAvLyBudWxsOiBudWxsLFxuICAgICAgICAgICAgLy8gc3RlcExlZ2VuZDoge1xuICAgICAgICAgICAgLy8gICAwOiBudWxsLFxuICAgICAgICAgICAgLy8gICAxOiBudWxsLFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIGluZGV4TGVnZW5kOiB7XG4gICAgICAgICAgICAgIDA6ICdubyBOT05PJyxcbiAgICAgICAgICAgICAgMTogJ3JlY29tbWVuZCBjbG9zaW5nJyxcbiAgICAgICAgICAgICAgMjogJ3JlcXVpcmUgY2xvc2luZyBvbiBzb21lIGxldmVscycsXG4gICAgICAgICAgICAgIDM6ICdyZXF1aXJlIGNsb3NpbmcgYWxsIGxldmVscycsXG4gICAgICAgICAgICAgIDQ6IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC5kcmF3KCk7XG4gICAgICB0aGlzLm15Q2hhcnQuZHJhdygpO1xuICAgIH0sIDI1MCk7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIC8vIFVzZSBvdXIgY2hhcnQgbW9kdWxlLlxuICAgICAgdGhpcy5jaGFydFxuICAgICAgICAuc2VsZWN0aW9uKHRoaXMuY2hhcnRDb250YWluZXIuY3VycmVudClcbiAgICAgICAgLmRhdGEoZGVmYXVsdERhdGEpXG4gICAgICAgIC5wcm9wcyh7XG4gICAgICAgICAgbG9jYWxlOiAnZW4nLFxuICAgICAgICAgIGRhdGVTZXJpZXM6IFsnMjAxOS0xMi0zMScsICcyMDIwLTA3LTA3J10sXG4gICAgICAgICAgZGF0YVBhcmFtczoge1xuICAgICAgICAgICAgZGF0ZTogJ2RhdGUnLFxuICAgICAgICAgICAgaW5kZXg6ICdjMScsXG4gICAgICAgICAgICBzdGVwVmFsdWU6ICdmbGFnJyxcbiAgICAgICAgICAgIHN0ZXBzOiAyLCAvLyBzdGVwVmFsdWUgPSAwLCAxLi4uXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgIHRvcDogMTAsXG4gICAgICAgICAgICByaWdodDogMTgsXG4gICAgICAgICAgICBib3R0b206IDEwLFxuICAgICAgICAgICAgbGVmdDogMTgsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBiYXNlQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMSknLFxuICAgICAgICAgIHN0cmlwQ29sb3I6IHtcbiAgICAgICAgICAgIDA6ICcjNEM1NjZBJyxcbiAgICAgICAgICAgIDE6ICcjOTQ4MDcyJyxcbiAgICAgICAgICAgIDI6ICcjZjY4ZTI2JyxcbiAgICAgICAgICAgIC8vIDM6ICcjZGUyZDI2JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxlZ2VuZEl0ZW1zOiB7IC8vIHNob3VsZCBjb250YWluIGl0ZW1zIGZyb20gc3RyaXBDb2xvclxuICAgICAgICAgICAgbnVsbDogJ25vIGRhdGEnLFxuICAgICAgICAgICAgc3RlcExlZ2VuZDoge1xuICAgICAgICAgICAgICAwOiAndGFyZ2V0ZWQnLFxuICAgICAgICAgICAgICAxOiAnbmF0aW9ud2lkZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5kZXhMZWdlbmQ6IHtcbiAgICAgICAgICAgICAgMDogJ25vIG1lYXN1cmVzJyxcbiAgICAgICAgICAgICAgMTogJ3JlY29tbWVuZCBjbG9zaW5nJyxcbiAgICAgICAgICAgICAgMjogJ3JlcXVpcmUgY2xvc2luZyBvbiBzb21lIGxldmVscycsXG4gICAgICAgICAgICAgIDM6ICdyZXF1aXJlIGNsb3NpbmcgYWxsIGxldmVscycsXG4gICAgICAgICAgICAgIDQ6ICdzb21ldGhpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoYXJ0VGl0bGU6ICdTY2hvb2wgY2xvc2luZyBtZWFzdXJlcycsXG4gICAgICAgICAgYXhpczogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICAgLmRyYXcoKTtcblxuICAgICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gcmVzaXplIGNoYXJ0IHdpdGggdGhlIHdpbmRvdy5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG5cbiAgICAgIC8vIEd1cm1hbidzIGNoYXJ0XG5cbiAgICAgIHRoaXMubXlDaGFydFxuICAgICAgICAuc2VsZWN0aW9uKHRoaXMubXlDaGFydENvbnRhaW5lci5jdXJyZW50KVxuICAgICAgICAuZGF0YShjYXNlc0RhdGEpXG4gICAgICAgIC5wcm9wcyh7XG4gICAgICAgICAgc3Ryb2tlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KScsIC8vIGNvbG91ciBvZiBsaW5lXG4gICAgICAgICAgc3Ryb2tlV2lkdGg6IDMuMTQsIC8vIHdpZHRoIG9mIHRoZSBsaW5lXG4gICAgICAgICAgZmlsbDogJyNlZWUnLCAvLyBjb2xvdXIgb2YgdGhlIGJhcnNcbiAgICAgICAgICBoZWlnaHQ6IDEyMCwgLy8gY2hhcnQgaGVpZ2h0XG4gICAgICAgICAgYXZnX2RheXM6IDcsIC8vIGF2ZyBsaW5lIHNob3VsZCBiZSBhbiBob3cgbWFueSBkYXkgcm9sbGluZyBhdmdcbiAgICAgICAgICBsZWZ0X3lfYXhpczogdHJ1ZSxcbiAgICAgICAgICB4X2F4aXM6IGZhbHNlLFxuICAgICAgICAgIGJhcnM6IGZhbHNlLCAvLyBUcnVlIGJ5IGRlZmF1bHQuXG4gICAgICAgICAgLy8gSWYgeW91IHdhbnQganVzdCB0aGUgbGluZSwgc2V0IHZhbHVlIHRvIHRydWVcbiAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgIGxlZnQ6IDE4LCByaWdodDogMTgsIHRvcDogMTAsIGJvdHRvbTogNSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGVfcmFuZ2U6IFsnMjAxOS0xMi0zMScsICcyMDIwLTA3LTA3J10sXG4gICAgICAgICAgcGFkZGluZzogMCwgLy8gdG8gc2V0IHBhZGRpbmcgYmV0d2VlbiB0aGUgYmFycy5cbiAgICAgICAgICAvLyB2YWx1ZSBzaG91bGQgYmUgYmV0d2VlbiAwIHRvIDFcblxuICAgICAgICAgIGxhYmVsczogdHJ1ZSwgLy8gU2V0dGluZyB0aGlzIHRvIHRydWUgd2lsbCBzaG93IGEgbGFiZWxcbiAgICAgICAgICAvLyB0byBleHBsYWluIHdoYXQgdGhlIGJhcnMgYW5kIGxpbmUgYXJlXG4gICAgICAgICAgLy8gdGV4dDoge1xuICAgICAgICAgIC8vICAgc3ViaGVkOiAnV2Vla2x5IGF2ZXJhZ2UgaW5mZWN0aW9ucyByZXBvcnRlZCcsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICB2YXJpYWJsZV9uYW1lOiAnY2FzZXMnLCAvLyBXaGF0IGlzIHRoaXMgYSBjaGFydCBvZj8gSW5mZWN0aW9ucz8gRGVhdGhzPyBUZXN0cz9cbiAgICAgICAgfSlcbiAgICAgICAgLmRyYXcoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIC8vIFJlbW92ZSBsaXN0ZW5lciBpZiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQsIHRvby5cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgLy8gVXBkYXRlIHRoZSBjaGFydCB3aXRoIHRoZSBjb21wb25lbnQuXG4gICAgICAvLyBDYW4gY2hhbmdlIGRhdGEgb3IgcHJvcHMgaGVyZSwgd2hhdGV2ZXIuLi5cbiAgICAgIHRoaXMuY2hhcnQuZHJhdygpO1xuICAgICAgdGhpcy5teUNoYXJ0LmRyYXcoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHdpZHRoIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENoYXJ0Q29udGFpbmVyXG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIHNldFdpZHRoPXtcbiAgICAgICAgICAgICh3aWR0aCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHdpZHRoIH0pXG4gICAgICAgICAgfVxuICAgICAgICA+IHsvKiBUaGlzIGlzIG91ciBjaGFydCBjb250YWluZXIg8J+RhyAqL31cbiAgICAgICAgICA8ZGl2IGlkPSdteUNoYXJ0JyByZWY9e3RoaXMubXlDaGFydENvbnRhaW5lcn0gLz5cbiAgICAgICAgICA8ZGl2IGlkPSdjaGFydCcgcmVmPXt0aGlzLmNoYXJ0Q29udGFpbmVyfSAvPlxuICAgICAgICA8L0NoYXJ0Q29udGFpbmVyPlxuICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q29tcG9uZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})