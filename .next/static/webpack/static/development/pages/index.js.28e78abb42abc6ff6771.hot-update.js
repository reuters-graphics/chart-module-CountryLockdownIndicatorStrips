webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/utils/utils.js":
/*!********************************!*\
  !*** ./src/lib/utils/utils.js ***!
  \********************************/
/*! exports provided: getDates, round */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDates\", function() { return getDates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"round\", function() { return round; });\nfunction getDates(startDate, stopDate) {\n  var dateArray = new Array();\n  var currentDate = startDate;\n\n  while (currentDate <= stopDate) {\n    dateArray.push(new Date(currentDate));\n    currentDate = currentDate.addDays(1);\n  }\n\n  return dateArray;\n}\n\nfunction round(value, precision) {\n  var multiplier = Math.pow(10, precision || 0);\n  return Math.round(value * multiplier) / multiplier;\n}\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3V0aWxzL3V0aWxzLmpzP2I2OTkiXSwibmFtZXMiOlsiZ2V0RGF0ZXMiLCJzdGFydERhdGUiLCJzdG9wRGF0ZSIsImRhdGVBcnJheSIsIkFycmF5IiwiY3VycmVudERhdGUiLCJwdXNoIiwiRGF0ZSIsImFkZERheXMiLCJyb3VuZCIsInZhbHVlIiwicHJlY2lzaW9uIiwibXVsdGlwbGllciIsIk1hdGgiLCJwb3ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVNBLFFBQVQsQ0FBa0JDLFNBQWxCLEVBQTZCQyxRQUE3QixFQUF1QztBQUNyQyxNQUFJQyxTQUFTLEdBQUcsSUFBSUMsS0FBSixFQUFoQjtBQUNBLE1BQUlDLFdBQVcsR0FBR0osU0FBbEI7O0FBQ0EsU0FBT0ksV0FBVyxJQUFJSCxRQUF0QixFQUFnQztBQUM5QkMsYUFBUyxDQUFDRyxJQUFWLENBQWUsSUFBSUMsSUFBSixDQUFTRixXQUFULENBQWY7QUFDQUEsZUFBVyxHQUFHQSxXQUFXLENBQUNHLE9BQVosQ0FBb0IsQ0FBcEIsQ0FBZDtBQUNEOztBQUNELFNBQU9MLFNBQVA7QUFDRDs7QUFFRCxTQUFTTSxLQUFULENBQWVDLEtBQWYsRUFBc0JDLFNBQXRCLEVBQWlDO0FBQy9CLE1BQU1DLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsRUFBVCxFQUFhSCxTQUFTLElBQUksQ0FBMUIsQ0FBbkI7QUFFQSxTQUFPRSxJQUFJLENBQUNKLEtBQUwsQ0FBV0MsS0FBSyxHQUFHRSxVQUFuQixJQUFpQ0EsVUFBeEM7QUFDRDs7QUFFRCIsImZpbGUiOiIuL3NyYy9saWIvdXRpbHMvdXRpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXREYXRlcyhzdGFydERhdGUsIHN0b3BEYXRlKSB7XG4gIHZhciBkYXRlQXJyYXkgPSBuZXcgQXJyYXkoKTtcbiAgdmFyIGN1cnJlbnREYXRlID0gc3RhcnREYXRlO1xuICB3aGlsZSAoY3VycmVudERhdGUgPD0gc3RvcERhdGUpIHtcbiAgICBkYXRlQXJyYXkucHVzaChuZXcgRGF0ZShjdXJyZW50RGF0ZSkpO1xuICAgIGN1cnJlbnREYXRlID0gY3VycmVudERhdGUuYWRkRGF5cygxKTtcbiAgfVxuICByZXR1cm4gZGF0ZUFycmF5O1xufVxuXG5mdW5jdGlvbiByb3VuZCh2YWx1ZSwgcHJlY2lzaW9uKSB7XG4gIGNvbnN0IG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uIHx8IDApO1xuXG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogbXVsdGlwbGllcikgLyBtdWx0aXBsaWVyO1xufVxuXG5leHBvcnQgeyBnZXREYXRlcywgcm91bmQgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/utils/utils.js\n");

/***/ })

})