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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --primary: #2EC4B6;\\n  --dark: #011627;\\n  --light: #EEEEEE;\\n  --danger: #E71D36;\\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"montserrat\\\", sans-serif;\\n}\\n\\n.app {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\ninput:not([type=radio]):not([type=checkbox]), button {\\n  appearance: none;\\n  border: none;\\n  outline: none;\\n  background: none;\\n  cursor: initial;\\n}\\n\\nbody {\\n  background: var(--light);\\n  color: var(--dark);\\n}\\n\\nsection {\\n  margin-top: 2rem;\\n  margin-bottom: 2rem;\\n  padding-left: 1.5rem;\\n  padding-right: 1.5rem;\\n}\\n\\nh3 {\\n  color: var(--dark);\\n  font-size: 1rem;\\n  font-weight: 400;\\n  margin-bottom: 0.5rem;\\n}\\n\\nh4 {\\n  color: var(--dark);\\n  font-size: 0.875rem;\\n  font-weight: 700;\\n  margin-bottom: 0.5rem;\\n}\\n\\n.create-todo {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.create-todo input[type=text] {\\n  display: block;\\n  width: 100%;\\n  font-size: 1.125rem;\\n  padding: 1rem 1.5rem;\\n  color: var(--dark);\\n  background-color: #fff;\\n  border-radius: 0.5rem;\\n  box-shadow: var(--shadow);\\n  margin-bottom: 0.75rem;\\n}\\n.create-todo input[type=submit] {\\n  display: block;\\n  width: 100%;\\n  font-size: 1.125rem;\\n  padding: 1rem 1.5rem;\\n  color: #fff;\\n  background-color: var(--primary);\\n  border-radius: 0.5rem;\\n  box-shadow: var(--shadow);\\n  cursor: pointer;\\n  transition: 0.2 ease-in-out;\\n}\\n.create-todo input[type=submit]:hover {\\n  opacity: 0.75;\\n}\\n\\n.todo-list {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.todo-list .done .todo-content input {\\n  text-decoration: line-through;\\n  color: gray !important;\\n}\\n.todo-list .list {\\n  margin: 1rem 0;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  border-radius: 0.5rem;\\n  overflow: hidden;\\n  box-shadow: var(--shadow);\\n}\\n.todo-list .list .todo-item {\\n  display: flex;\\n  align-items: center;\\n  gap: 1rem;\\n  background-color: #fff;\\n  padding: 1rem;\\n  border-bottom: 1px solid #d3d3d3;\\n  box-shadow: var(--shadow);\\n}\\n.todo-list .list .todo-item label {\\n  cursor: pointer;\\n}\\n.todo-list .list .todo-item .todo-content {\\n  flex: 1;\\n}\\n.todo-list .list .todo-item .todo-content input {\\n  color: var(--dark);\\n  font-size: 1.125rem;\\n  width: 100%;\\n}\\n.todo-list .list .todo-item .actions {\\n  display: flex;\\n  align-items: center;\\n  gap: 0.5rem;\\n}\\n.todo-list .list .todo-item .actions button {\\n  padding: 0.5rem;\\n  border-radius: 0.25rem;\\n  color: #fff;\\n  cursor: pointer;\\n  transition: 0.2s ease-in-out;\\n}\\n.todo-list .list .todo-item .actions button:hover {\\n  opacity: 0.75;\\n}\\n.todo-list .list .todo-item .actions .edit {\\n  background-color: var(--primary);\\n}\\n.todo-list .list .todo-item .actions .delete {\\n  background-color: var(--danger);\\n}\\n.todo-list input[type=radio],\\n.todo-list input[type=checkbox] {\\n  display: none;\\n}\\n.todo-list .bubble {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  border: 2px solid var(--dark);\\n}\\n.todo-list .bubble::after {\\n  content: \\\"\\\";\\n  opacity: 0;\\n  width: 0;\\n  height: 0;\\n  background-color: var(--primary);\\n  border-radius: 50%;\\n  transition: 0.2 ease-in-out;\\n}\\n.todo-list input:checked ~ .bubble::after {\\n  width: 10px;\\n  height: 10px;\\n  opacity: 1;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_app/./src/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo_app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo_app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo_app/./src/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo_app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo_app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo_app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo_app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo_app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nconst header = (() => {\r\n\r\n    const init = () => {\r\n\r\n        const container = document.createElement('section');\r\n        container.classList.add('greeting');\r\n\r\n        const h2 = document.createElement('h2');\r\n        h2.classList.add('title');\r\n        h2.textContent = 'HABIT - A simple todo app';\r\n\r\n        container.appendChild(h2);\r\n\r\n        return container;\r\n    };\r\n\r\n    return { init };\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://todo_app/./src/components/header.js?");

/***/ }),

/***/ "./src/components/todoForm.js":
/*!************************************!*\
  !*** ./src/components/todoForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoForm\": () => (/* binding */ todoForm)\n/* harmony export */ });\n/* harmony import */ var _lib_handleFormSubmit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/handleFormSubmit */ \"./src/lib/handleFormSubmit.js\");\n\r\n\r\nconst todoForm = (() => {\r\n\r\n    const init = () => {\r\n\r\n        const container = document.createElement('section');\r\n        container.classList.add('create-todo');\r\n\r\n        const h3 = document.createElement('h3');\r\n        h3.textContent = 'CREATE A TODO';\r\n\r\n        const todoForm = document.createElement('form');\r\n        todoForm.classList.add('new-todo-form');\r\n\r\n        const h4 = document.createElement('h4');\r\n        h4.textContent = `What's on your todo list?`;\r\n\r\n        const inputText = document.createElement('input');\r\n        inputText.type = 'text';\r\n        inputText.name = 'content';\r\n        inputText.id = 'content';\r\n        inputText.placeholder = 'e.g. Buy groceries';\r\n\r\n        const inputSubmit = document.createElement('input');\r\n        inputSubmit.type = 'submit';\r\n        inputSubmit.value = 'Add todo';\r\n        inputSubmit.addEventListener('click', _lib_handleFormSubmit__WEBPACK_IMPORTED_MODULE_0__.handleFormSubmit);\r\n\r\n        todoForm.appendChild(h4);\r\n        todoForm.appendChild(inputText);\r\n        todoForm.appendChild(inputSubmit);\r\n\r\n        container.appendChild(h3);\r\n        container.appendChild(todoForm);\r\n\r\n        return container;\r\n    };\r\n\r\n    return { init };\r\n\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://todo_app/./src/components/todoForm.js?");

/***/ }),

/***/ "./src/components/todoList.js":
/*!************************************!*\
  !*** ./src/components/todoList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _lib_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Observable */ \"./src/lib/Observable.js\");\n/* harmony import */ var _lib_handleItemDeleted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/handleItemDeleted */ \"./src/lib/handleItemDeleted.js\");\n\r\n\r\n\r\nconst todoList = (() => {\r\n    let items = [];\r\n\r\n    const init = () => {\r\n\r\n        const container = document.createElement('section');\r\n        container.classList.add('todo-list');\r\n\r\n        const h3 = document.createElement('h3');\r\n        h3.textContent = 'TODO LIST';\r\n\r\n        const list = document.createElement('div');\r\n        list.classList.add('list');\r\n        list.id = 'todo-list';\r\n\r\n        container.appendChild(h3);\r\n        container.appendChild(list);\r\n\r\n        return container;\r\n    };\r\n\r\n    const updateList = () => {\r\n        let container = document.getElementById('todo-list');\r\n    \r\n        while(container.firstChild) {\r\n            container.removeChild(container.lastChild);\r\n        }\r\n    \r\n        todoList.items.forEach((item, index) => {\r\n            let todoItem = document.createElement('div');\r\n            todoItem.classList.add('todo-item');\r\n    \r\n            let label = document.createElement('label');\r\n    \r\n            let checkbox = document.createElement('input');\r\n            checkbox.type = 'checkbox';\r\n    \r\n            let bubble = document.createElement('span');\r\n            bubble.classList.add('bubble');\r\n    \r\n            let todoContent = document.createElement('div');\r\n            todoContent.classList.add('todo-content');\r\n    \r\n            let inputText = document.createElement('input');\r\n            inputText.type = 'text';\r\n            inputText.value = `${item.item}`;\r\n    \r\n            let actions = document.createElement('div');\r\n            actions.classList.add('actions');\r\n    \r\n            let editBtn = document.createElement('button');\r\n            editBtn.classList.add('edit');\r\n            editBtn.textContent = 'Edit';\r\n    \r\n            let deleteBtn = document.createElement('button');\r\n            deleteBtn.classList.add('delete');\r\n            deleteBtn.textContent = 'Delete';\r\n            deleteBtn.addEventListener('click', () => (0,_lib_handleItemDeleted__WEBPACK_IMPORTED_MODULE_1__.handleItemDeleted)(index));\r\n    \r\n            label.appendChild(checkbox);\r\n            label.appendChild(bubble);\r\n    \r\n            todoContent.appendChild(inputText);\r\n    \r\n            actions.appendChild(editBtn);\r\n            actions.appendChild(deleteBtn);\r\n            \r\n            todoItem.appendChild(label);\r\n            todoItem.appendChild(todoContent);\r\n            todoItem.appendChild(actions);\r\n    \r\n            container.appendChild(todoItem);\r\n        });\r\n    };\r\n\r\n    return { init, updateList, items };\r\n})();\r\n\r\nconst itemAdded = item => {\r\n    todoList.items.push({\r\n        item,\r\n        status: false\r\n    });\r\n\r\n    todoList.updateList();\r\n};\r\n\r\nconst itemDeleted = index => {\r\n    todoList.items.splice(index, 1);\r\n    todoList.updateList();\r\n};\r\n\r\n_lib_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('itemAdded', itemAdded);\r\n_lib_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('itemDeleted', itemDeleted);\r\n\r\n\n\n//# sourceURL=webpack://todo_app/./src/components/todoList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _lib_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/App */ \"./src/lib/App.js\");\n/* harmony import */ var _lib_handleFormSubmit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/handleFormSubmit */ \"./src/lib/handleFormSubmit.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const rootElement = document.getElementById('root');\r\n    rootElement.appendChild((0,_lib_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n});\n\n//# sourceURL=webpack://todo_app/./src/index.js?");

/***/ }),

/***/ "./src/lib/App.js":
/*!************************!*\
  !*** ./src/lib/App.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_todoForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/todoForm */ \"./src/components/todoForm.js\");\n/* harmony import */ var _components_todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/todoList */ \"./src/components/todoList.js\");\n\r\n\r\n\r\n\r\nconst App = () => {\r\n    const app = document.createElement('div');\r\n    app.classList.add('app');\r\n\r\n    app.appendChild(_components_header__WEBPACK_IMPORTED_MODULE_0__.header.init());\r\n    app.appendChild(_components_todoForm__WEBPACK_IMPORTED_MODULE_1__.todoForm.init());\r\n    app.appendChild(_components_todoList__WEBPACK_IMPORTED_MODULE_2__.todoList.init());\r\n\r\n    return app;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://todo_app/./src/lib/App.js?");

/***/ }),

/***/ "./src/lib/Observable.js":
/*!*******************************!*\
  !*** ./src/lib/Observable.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Observable {\r\n    constructor() {\r\n        this.observers = {};\r\n    }\r\n\r\n    subscribe(event, fn) {\r\n        if(!this.observers.hasOwnProperty(event)) {\r\n            this.observers[event] = [];\r\n        }\r\n\r\n        this.observers[event].push(fn);\r\n    }\r\n\r\n    notify(event, data) {\r\n        if(!this.observers.hasOwnProperty(event)) return [];\r\n\r\n        this.observers[event].map(fn => fn(data));\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Observable());\n\n//# sourceURL=webpack://todo_app/./src/lib/Observable.js?");

/***/ }),

/***/ "./src/lib/handleFormSubmit.js":
/*!*************************************!*\
  !*** ./src/lib/handleFormSubmit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleFormSubmit\": () => (/* binding */ handleFormSubmit)\n/* harmony export */ });\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ \"./src/lib/Observable.js\");\n\r\n\r\nconst handleFormSubmit = event => {\r\n    event.preventDefault();\r\n    let input = document.getElementById('content');\r\n    let newItem = input.value;\r\n    if(newItem === '') return;\r\n    input.value = '';\r\n\r\n    _Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify('itemAdded', newItem);\r\n};\n\n//# sourceURL=webpack://todo_app/./src/lib/handleFormSubmit.js?");

/***/ }),

/***/ "./src/lib/handleItemDeleted.js":
/*!**************************************!*\
  !*** ./src/lib/handleItemDeleted.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleItemDeleted\": () => (/* binding */ handleItemDeleted)\n/* harmony export */ });\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ \"./src/lib/Observable.js\");\n\r\n\r\nconst handleItemDeleted = index => {\r\n    _Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify('itemDeleted', index);\r\n};\n\n//# sourceURL=webpack://todo_app/./src/lib/handleItemDeleted.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;