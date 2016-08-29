/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mastic_fill__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mastic_fill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mastic_fill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mastic_polyfills__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mastic_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mastic_polyfills__);



__WEBPACK_IMPORTED_MODULE_0_mastic_fill___default()({
	polyfills: [__WEBPACK_IMPORTED_MODULE_1_mastic_polyfills__["Promise"]],
	url: 'http://localhost:4000'
});


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tests_Promise_js__ = __webpack_require__(3);


const hasPromise = __WEBPACK_IMPORTED_MODULE_0__tests_Promise_js__["a" /* default */];/* harmony export */ exports["hasPromise"] = hasPromise;
/* harmony default export */ exports["default"] = {
	Promise: __WEBPACK_IMPORTED_MODULE_0__tests_Promise_js__["a" /* default */]
};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = typeof Promise === 'undefined';


/***/ },
/* 4 */
/***/ function(module, exports) {

"use strict";
"use strict";
var getUserPolyfills = function getUserPolyfills(t) {
  return t.reduce(function (t, e) {
    var l = e();return "undefined" != typeof l && t.push(l), t;
  }, []);
},
    getPolyfillsURL = function getPolyfillsURL(t, e) {
  var l = e.url;return l + "/polyfills.js?with=" + t.map(function (t) {
    return t.name;
  }).join(",");
},
    loadPolyfills = function loadPolyfills(t) {
  var e = document.createElement("script");e.setAttribute("type", "text/javascript"), e.setAttribute("src", t), document.getElementsByTagName("head")[0].appendChild(e);
},
    fill = function fill(t) {
  var e = t.polyfills,
      l = t.url,
      r = getUserPolyfills(e);if (r.length > 0) {
    var i = getPolyfillsURL(r, { url: l });loadPolyfills(i);
  }
};module.exports = fill;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

module.exports = __webpack_require__(2);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Promise = undefined;

var _masticDetect = __webpack_require__(5);

var Promise = exports.Promise = function Promise() {
	if (_masticDetect.hasPromise) {
		return 'Promise';
	}
};

/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }
/******/ ]);