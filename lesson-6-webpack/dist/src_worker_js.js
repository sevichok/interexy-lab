/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/worker.js":
/*!***********************!*\
  !*** ./src/worker.js ***!
  \***********************/
/***/ (() => {

eval("let array = Array.from({ length: 50000 }, () => { Math.floor(Math.random() * 50000) })\r\n\r\nconst bubbleSort = (arr) => {\r\n    const length = arr.length\r\n    for (let i = 0; i < length; i++) {\r\n        for (let j = 0; j < length; j++) {\r\n            if (arr[j + 1] < arr[j]) {\r\n                const swapElem = arr[j]\r\n                arr[j] = arr[j + 1]\r\n                arr[j + 1] = swapElem\r\n            }\r\n        }\r\n    }\r\n    return arr\r\n}\r\n\r\nconst start = new Date().getTime();\r\nbubbleSort(array)\r\nconst end = new Date().getTime();\r\nconsole.log(`BubbleSort: ${end - start}ms`);\n\n//# sourceURL=webpack://lesson-6-ts/./src/worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/worker.js"]();
/******/ 	
/******/ })()
;