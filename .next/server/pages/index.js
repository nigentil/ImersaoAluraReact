"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction HomePage() {\n    var estiloDaHome = {\n        backgroundColor: \"red\"\n    };\n    console.log(_config_json__WEBPACK_IMPORTED_MODULE_1__.playlists);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: estiloDaHome,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Menu, {}, void 0, false, {\n                fileName: \"/home/nival/Documentos/ImersaoAluraReact/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"/home/nival/Documentos/ImersaoAluraReact/pages/index.js\",\n                lineNumber: 14,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Timeline, {\n                playlists: _config_json__WEBPACK_IMPORTED_MODULE_1__.playlists\n            }, void 0, false, {\n                fileName: \"/home/nival/Documentos/ImersaoAluraReact/pages/index.js\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nival/Documentos/ImersaoAluraReact/pages/index.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nfunction Menu() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Menu\"\n    }, void 0, false, {\n        fileName: \"/home/nival/Documentos/ImersaoAluraReact/pages/index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n;\nconst StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n    displayName: \"pages__StyledHeader\",\n    componentId: \"sc-7aefc740-0\"\n})`    \nimg{\n  width : 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n.user-info{\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 16px 32px;\n  gap: 16px;\n  }\n  `;\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledHeader, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"user-info\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: `https://github.com/${_config_json__WEBPACK_IMPORTED_MODULE_1__.github}.png`\n                }, void 0, false, {\n                    fileName: \"/home/nival/Documentos/ImersaoAluraReact/pages/index.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: _config_json__WEBPACK_IMPORTED_MODULE_1__.name\n                        }, void 0, false, {\n                            fileName: \"/home/nival/Documentos/ImersaoAluraReact/pages/index.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: _config_json__WEBPACK_IMPORTED_MODULE_1__.job\n                        }, void 0, false, {\n                            fileName: \"/home/nival/Documentos/ImersaoAluraReact/pages/index.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/nival/Documentos/ImersaoAluraReact/pages/index.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/nival/Documentos/ImersaoAluraReact/pages/index.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/nival/Documentos/ImersaoAluraReact/pages/index.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\nfunction Timeline(props) {\n    console.log(\"dentro do componente\", props.playlists);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Timeline\"\n    }, void 0, false, {\n        fileName: \"/home/nival/Documentos/ImersaoAluraReact/pages/index.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQUFvQztBQUNHO0FBRXZDLFNBQVNFLFdBQVc7SUFFaEIsSUFBSUMsZUFBZTtRQUFDQyxpQkFBa0I7SUFBSztJQUUzQ0MsUUFBUUMsR0FBRyxDQUFDTixtREFBZ0I7SUFFNUIscUJBQ0ksOERBQUNRO1FBQUlDLE9BQU9OOzswQkFDViw4REFBQ087Ozs7OzBCQUNELDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNDO2dCQUFTTCxXQUFXUCxtREFBZ0I7Ozs7Ozs7Ozs7OztBQUcvQzs7QUFFQSxpRUFBZUUsUUFBUUEsRUFBQTtBQUV2QixTQUFTUSxPQUFPO0lBRWQscUJBQ0UsOERBQUNGO2tCQUFJOzs7Ozs7QUFJVDs7QUFFQSxNQUFNSyxlQUFlWix1RUFBVTs7O0VBQUEsQ0FBQzs7Ozs7Ozs7Ozs7OztFQWE5QixDQUFDO0FBRUgsU0FBU1UsU0FBUztJQUVoQixxQkFDRSw4REFBQ0U7a0JBQ0MsNEVBQUNDO1lBQVFDLFdBQVU7OzhCQUNqQiw4REFBQ0M7b0JBQUlDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRWpCLGdEQUFhLENBQUMsSUFBSSxDQUFDOzs7Ozs7OEJBQ25ELDhEQUFDUTs7c0NBQ0MsOERBQUNXO3NDQUNFbkIsOENBQVc7Ozs7OztzQ0FFZCw4REFBQ3FCO3NDQUNFckIsNkNBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZCO0FBRUEsU0FBU1ksU0FBU1csS0FBSyxFQUFFO0lBRXZCbEIsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QmlCLE1BQU1oQixTQUFTO0lBQ25ELHFCQUNFLDhEQUFDQztrQkFBSTs7Ozs7O0FBSVQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWVyc2FvYWx1cmEvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICAgIFxuICAgIHZhciBlc3RpbG9EYUhvbWUgPSB7YmFja2dyb3VuZENvbG9yIDogXCJyZWRcIn07XG4gICAgXG4gICAgY29uc29sZS5sb2coY29uZmlnLnBsYXlsaXN0cyk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgc3R5bGU9e2VzdGlsb0RhSG9tZX0+XG4gICAgICAgICAgPE1lbnUvPlxuICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgIDxUaW1lbGluZSBwbGF5bGlzdHM9e2NvbmZpZy5wbGF5bGlzdHN9Lz5cbiAgICAgICAgPC9kaXY+XG4gIClcbn07XG4gIFxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcblxuZnVuY3Rpb24gTWVudSgpIHtcbiAgICBcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgTWVudVxuICAgIDwvZGl2PlxuICApXG59O1xuXG5jb25zdCBTdHlsZWRIZWFkZXIgPSBzdHlsZWQuZGl2YCAgICBcbmltZ3tcbiAgd2lkdGggOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi51c2VyLWluZm97XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gIGdhcDogMTZweDtcbiAgfVxuICBgO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgXG4gIHJldHVybihcbiAgICA8U3R5bGVkSGVhZGVyPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidXNlci1pbmZvXCI+XG4gICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7Y29uZmlnLmdpdGh1Yn0ucG5nYH0vPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIHtjb25maWcubmFtZX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge2NvbmZpZy5qb2J9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L1N0eWxlZEhlYWRlcj5cbiAgKVxufVxuXG5mdW5jdGlvbiBUaW1lbGluZShwcm9wcykge1xuICBcbiAgY29uc29sZS5sb2coXCJkZW50cm8gZG8gY29tcG9uZW50ZVwiLCBwcm9wcy5wbGF5bGlzdHMpO1xuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIFRpbWVsaW5lXG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiY29uZmlnIiwic3R5bGVkIiwiSG9tZVBhZ2UiLCJlc3RpbG9EYUhvbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb25zb2xlIiwibG9nIiwicGxheWxpc3RzIiwiZGl2Iiwic3R5bGUiLCJNZW51IiwiSGVhZGVyIiwiVGltZWxpbmUiLCJTdHlsZWRIZWFkZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiZ2l0aHViIiwiaDIiLCJuYW1lIiwicCIsImpvYiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Nival Gentil Gonçalves","job":"Desenvolvedor Senior C#","github":"nigentil","playlists":{"jogos":[{"title":"algum titulo","url":"url","thumb":"miniatura do vídeo"}],"front-end":[{"title":"algum titulo","url":"url","thumb":"miniatura do vídeo"}]}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();