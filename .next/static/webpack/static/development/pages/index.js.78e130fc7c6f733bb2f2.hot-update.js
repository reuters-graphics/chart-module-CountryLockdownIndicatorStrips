webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/utils/utils.js":
/*!********************************!*\
  !*** ./src/lib/utils/utils.js ***!
  \********************************/
/*! exports provided: getDates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDates\", function() { return getDates; });\nfunction getDates(startDate, stopDate) {\n  startDate = new Date(startDate);\n  stopDate = new Date(stopDate);\n  var dateArray = new Array(stopDate - startDate + 1);\n  var currentDate = startDate;\n\n  while (currentDate <= stopDate) {\n    dateArray.push(new Date(currentDate));\n    currentDate.setDate(currentDate.getDate() + 1);\n  }\n\n  return dateArray;\n}\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3V0aWxzL3V0aWxzLmpzP2I2OTkiXSwibmFtZXMiOlsiZ2V0RGF0ZXMiLCJzdGFydERhdGUiLCJzdG9wRGF0ZSIsIkRhdGUiLCJkYXRlQXJyYXkiLCJBcnJheSIsImN1cnJlbnREYXRlIiwicHVzaCIsInNldERhdGUiLCJnZXREYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsU0FBU0EsUUFBVCxDQUFrQkMsU0FBbEIsRUFBNkJDLFFBQTdCLEVBQXVDO0FBQ3JDRCxXQUFTLEdBQUcsSUFBSUUsSUFBSixDQUFTRixTQUFULENBQVo7QUFDQUMsVUFBUSxHQUFHLElBQUlDLElBQUosQ0FBU0QsUUFBVCxDQUFYO0FBRUEsTUFBTUUsU0FBUyxHQUFHLElBQUlDLEtBQUosQ0FBVUgsUUFBUSxHQUFHRCxTQUFYLEdBQXFCLENBQS9CLENBQWxCO0FBQ0EsTUFBTUssV0FBVyxHQUFHTCxTQUFwQjs7QUFDQSxTQUFPSyxXQUFXLElBQUlKLFFBQXRCLEVBQWdDO0FBQzlCRSxhQUFTLENBQUNHLElBQVYsQ0FBZSxJQUFJSixJQUFKLENBQVNHLFdBQVQsQ0FBZjtBQUNBQSxlQUFXLENBQUNFLE9BQVosQ0FBb0JGLFdBQVcsQ0FBQ0csT0FBWixLQUF3QixDQUE1QztBQUNEOztBQUNELFNBQU9MLFNBQVA7QUFDRDs7QUFDRCIsImZpbGUiOiIuL3NyYy9saWIvdXRpbHMvdXRpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXREYXRlcyhzdGFydERhdGUsIHN0b3BEYXRlKSB7XG4gIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gIHN0b3BEYXRlID0gbmV3IERhdGUoc3RvcERhdGUpO1xuXG4gIGNvbnN0IGRhdGVBcnJheSA9IG5ldyBBcnJheShzdG9wRGF0ZSAtIHN0YXJ0RGF0ZSsxKTtcbiAgY29uc3QgY3VycmVudERhdGUgPSBzdGFydERhdGU7XG4gIHdoaWxlIChjdXJyZW50RGF0ZSA8PSBzdG9wRGF0ZSkge1xuICAgIGRhdGVBcnJheS5wdXNoKG5ldyBEYXRlKGN1cnJlbnREYXRlKSk7XG4gICAgY3VycmVudERhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAxKTtcbiAgfVxuICByZXR1cm4gZGF0ZUFycmF5O1xufVxuZXhwb3J0IHsgZ2V0RGF0ZXMgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/utils/utils.js\n");

/***/ })

})