/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/worker.ts":
/*!***********************!*\
  !*** ./src/worker.ts ***!
  \***********************/
/***/ (() => {

eval("\nlet array = Array.from({ length: 50000 }, () => {\n    Math.floor(Math.random() * 50000);\n});\nconst bubbleSort = (arr) => {\n    const length = arr.length;\n    for (let i = 0; i < length; i++) {\n        for (let j = 0; j < length; j++) {\n            if (arr[j + 1] < arr[j]) {\n                const swapElem = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = swapElem;\n            }\n        }\n    }\n    return arr;\n};\nconst start = new Date().getTime();\nbubbleSort(array);\nconst end = new Date().getTime();\nconsole.log(`BubbleSort: ${end - start}ms`);\n\n\n//# sourceURL=webpack://lesson-6-webpack-ts/./src/worker.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/worker.ts"]();
/******/ 	
/******/ })()
;