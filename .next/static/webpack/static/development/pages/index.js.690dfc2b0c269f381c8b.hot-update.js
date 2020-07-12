webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/utils/utils.js":
/*!********************************!*\
  !*** ./src/lib/utils/utils.js ***!
  \********************************/
/*! exports provided: getDates, formatDateObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDates\", function() { return getDates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDateObject\", function() { return formatDateObject; });\nfunction getDates(startDate, stopDate) {\n  startDate = new Date(startDate);\n  stopDate = new Date(stopDate);\n  var dateArray = [];\n  var currentDate = startDate;\n\n  while (currentDate <= stopDate) {\n    var dt = new Date(currentDate);\n    dateArray.push(dt);\n    currentDate.setDate(currentDate.getDate() + 1);\n  }\n\n  return dateArray;\n}\n\nfunction formatDateObject(date, separator) {\n  separator = separator ? separator : '-';\n  var yyyy = date.getFullYear();\n  var mm = date.getMonth() < 10 ? \"0\".concat(date.getMonth() + 1) : date.getMonth() + 1;\n  var dd = date.getDate() < 10 ? \"0\".concat(date.getDate()) : date.getDate();\n  return \"\".concat(yyyy).concat(separator).concat(mm).concat(separator).concat(dd);\n}\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3V0aWxzL3V0aWxzLmpzP2I2OTkiXSwibmFtZXMiOlsiZ2V0RGF0ZXMiLCJzdGFydERhdGUiLCJzdG9wRGF0ZSIsIkRhdGUiLCJkYXRlQXJyYXkiLCJjdXJyZW50RGF0ZSIsImR0IiwicHVzaCIsInNldERhdGUiLCJnZXREYXRlIiwiZm9ybWF0RGF0ZU9iamVjdCIsImRhdGUiLCJzZXBhcmF0b3IiLCJ5eXl5IiwiZ2V0RnVsbFllYXIiLCJtbSIsImdldE1vbnRoIiwiZGQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVNBLFFBQVQsQ0FBa0JDLFNBQWxCLEVBQTZCQyxRQUE3QixFQUF1QztBQUNyQ0QsV0FBUyxHQUFHLElBQUlFLElBQUosQ0FBU0YsU0FBVCxDQUFaO0FBQ0FDLFVBQVEsR0FBRyxJQUFJQyxJQUFKLENBQVNELFFBQVQsQ0FBWDtBQUVBLE1BQU1FLFNBQVMsR0FBRyxFQUFsQjtBQUNBLE1BQU1DLFdBQVcsR0FBR0osU0FBcEI7O0FBQ0EsU0FBT0ksV0FBVyxJQUFJSCxRQUF0QixFQUFnQztBQUM5QixRQUFNSSxFQUFFLEdBQUcsSUFBSUgsSUFBSixDQUFTRSxXQUFULENBQVg7QUFDQUQsYUFBUyxDQUFDRyxJQUFWLENBQWVELEVBQWY7QUFDQUQsZUFBVyxDQUFDRyxPQUFaLENBQW9CSCxXQUFXLENBQUNJLE9BQVosS0FBd0IsQ0FBNUM7QUFDRDs7QUFDRCxTQUFPTCxTQUFQO0FBQ0Q7O0FBRUQsU0FBU00sZ0JBQVQsQ0FBMEJDLElBQTFCLEVBQWdDQyxTQUFoQyxFQUEyQztBQUN6Q0EsV0FBUyxHQUFHQSxTQUFTLEdBQUdBLFNBQUgsR0FBZSxHQUFwQztBQUNBLE1BQU1DLElBQUksR0FBR0YsSUFBSSxDQUFDRyxXQUFMLEVBQWI7QUFDQSxNQUFNQyxFQUFFLEdBQUdKLElBQUksQ0FBQ0ssUUFBTCxLQUFrQixFQUFsQixjQUEyQkwsSUFBSSxDQUFDSyxRQUFMLEtBQWtCLENBQTdDLElBQW1ETCxJQUFJLENBQUNLLFFBQUwsS0FBa0IsQ0FBaEY7QUFDQSxNQUFNQyxFQUFFLEdBQUdOLElBQUksQ0FBQ0YsT0FBTCxLQUFpQixFQUFqQixjQUEwQkUsSUFBSSxDQUFDRixPQUFMLEVBQTFCLElBQTZDRSxJQUFJLENBQUNGLE9BQUwsRUFBeEQ7QUFDQSxtQkFBVUksSUFBVixTQUFpQkQsU0FBakIsU0FBNkJHLEVBQTdCLFNBQWtDSCxTQUFsQyxTQUE4Q0ssRUFBOUM7QUFDRDs7QUFFRCIsImZpbGUiOiIuL3NyYy9saWIvdXRpbHMvdXRpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXREYXRlcyhzdGFydERhdGUsIHN0b3BEYXRlKSB7XG4gIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gIHN0b3BEYXRlID0gbmV3IERhdGUoc3RvcERhdGUpO1xuXG4gIGNvbnN0IGRhdGVBcnJheSA9IFtdO1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgd2hpbGUgKGN1cnJlbnREYXRlIDw9IHN0b3BEYXRlKSB7XG4gICAgY29uc3QgZHQgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XG4gICAgZGF0ZUFycmF5LnB1c2goZHQpO1xuICAgIGN1cnJlbnREYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gIH1cbiAgcmV0dXJuIGRhdGVBcnJheTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZU9iamVjdChkYXRlLCBzZXBhcmF0b3IpIHtcbiAgc2VwYXJhdG9yID0gc2VwYXJhdG9yID8gc2VwYXJhdG9yIDogJy0nO1xuICBjb25zdCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtbSA9IGRhdGUuZ2V0TW9udGgoKSA8IDEwID8gYDAke2RhdGUuZ2V0TW9udGgoKSArIDF9YCA6IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gIGNvbnN0IGRkID0gZGF0ZS5nZXREYXRlKCkgPCAxMCA/IGAwJHtkYXRlLmdldERhdGUoKX1gIDogZGF0ZS5nZXREYXRlKCk7XG4gIHJldHVybiBgJHt5eXl5fSR7c2VwYXJhdG9yfSR7bW19JHtzZXBhcmF0b3J9JHtkZH1gO1xufVxuXG5leHBvcnQgeyBnZXREYXRlcywgZm9ybWF0RGF0ZU9iamVjdCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/utils/utils.js\n");

/***/ })

})