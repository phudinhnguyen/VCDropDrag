var DropDrap =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/container.ts":
/*!**************************!*\
  !*** ./src/container.ts ***!
  \**************************/
/*! exports provided: createContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContainer\", function() { return createContainer; });\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ \"./src/context.ts\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ \"./src/item.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n\n\n\nvar createContainer = function createContainer(props) {\n  var container;\n\n  (function () {\n    container = (props === null || props === void 0 ? void 0 : props.elm) || document.createElement(\"div\");\n\n    if (props === null || props === void 0 ? void 0 : props.className) {\n      container.classList.add(props === null || props === void 0 ? void 0 : props.className);\n    }\n\n    container.id = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"id\"])();\n    container.isDragItem;\n    container.indexOfKeep;\n    _context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].containers.push(container);\n  })();\n\n  var containerOnDrop = function containerOnDrop(ev) {\n    ev.preventDefault();\n\n    if (_context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].keepElm) {\n      _context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].keepElm.style.opacity = '1';\n    }\n  };\n\n  var containerOnDragOver = function containerOnDragOver(ev) {\n    ev.preventDefault();\n\n    if (!container.isDragItem && _context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].keepElm) {\n      container.appendChild(_context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].keepElm);\n    }\n  };\n\n  container.addItem = function (props) {\n    return Object(_item__WEBPACK_IMPORTED_MODULE_1__[\"createItem\"])(container, props);\n  };\n\n  container.ondrop = containerOnDrop;\n  container.ondragover = containerOnDragOver;\n  return container;\n};\n\n//# sourceURL=webpack://DropDrap/./src/container.ts?");

/***/ }),

/***/ "./src/context.ts":
/*!************************!*\
  !*** ./src/context.ts ***!
  \************************/
/*! exports provided: context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"context\", function() { return context; });\nvar context = {\n  keepElm: null,\n  containers: [],\n  adjacentContainer: function adjacentContainer(x, y) {\n    var _container,\n        _index = 0,\n        coorContainer;\n\n    while (_container = this.containers[_index++]) {\n      coorContainer = _container.getBoundingClientRect();\n\n      if (coorContainer.top <= y && coorContainer.right >= x && coorContainer.bottom >= y && coorContainer.left <= x) {\n        return _container;\n      }\n    }\n\n    return null;\n  }\n};\n\n//# sourceURL=webpack://DropDrap/./src/context.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: createContainer, createItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ \"./src/container.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createContainer\", function() { return _container__WEBPACK_IMPORTED_MODULE_0__[\"createContainer\"]; });\n\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ \"./src/item.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createItem\", function() { return _item__WEBPACK_IMPORTED_MODULE_1__[\"createItem\"]; });\n\n\n\n\n\n//# sourceURL=webpack://DropDrap/./src/index.ts?");

/***/ }),

/***/ "./src/item.ts":
/*!*********************!*\
  !*** ./src/item.ts ***!
  \*********************/
/*! exports provided: createItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createItem\", function() { return createItem; });\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ \"./src/context.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n\n\nvar createItem = function createItem(container, props) {\n  var item = (props === null || props === void 0 ? void 0 : props.elm) || document.createElement(\"div\");\n  item.id = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"id\"])();\n  item.setAttribute(\"draggable\", \"true\");\n  item.container = container;\n\n  if (props === null || props === void 0 ? void 0 : props.className) {\n    item.classList.add(props.className);\n  }\n\n  if (Array.prototype.indexOf.call(container.childNodes, item) === -1) {\n    container.appendChild(item);\n  }\n\n  var getIndexOf = function getIndexOf(elm) {\n    var i = 0;\n\n    while ((elm = elm.previousSibling) != null) {\n      i++;\n    }\n\n    return i;\n  };\n\n  var itemOndrop = function itemOndrop(ev) {\n    if (!_context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].keepElm || !(ev.target && ev.target instanceof HTMLElement && _context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].keepElm)) {\n      return;\n    }\n\n    _context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].keepElm.style.opacity = '1';\n\n    if (ev.target === _context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].keepElm) {\n      return;\n    }\n\n    var nContainer = _context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].adjacentContainer(ev.x, ev.y);\n\n    if (!nContainer) {\n      return;\n    }\n\n    item.container = nContainer;\n    nContainer.insertBefore(_context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].keepElm, ev.target);\n  };\n\n  var itemOnDragOver = function itemOnDragOver(ev) {\n    if (ev.target && ev.target instanceof HTMLElement && _context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].keepElm) {\n      var nContainer = _context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].adjacentContainer(ev.x, ev.y);\n\n      if (!nContainer) {\n        return;\n      }\n\n      _context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].keepElm.style.opacity = '0.5';\n      nContainer.isDragItem = true;\n\n      if (nContainer.indexOfKeep > getIndexOf(ev.target)) {\n        nContainer.insertBefore(_context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].keepElm, ev.target);\n        nContainer.indexOfKeep = getIndexOf(ev.target);\n      } else if (nContainer.indexOfKeep < getIndexOf(ev.target)) {\n        nContainer.insertBefore(_context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].keepElm, ev.target.nextSibling);\n        nContainer.indexOfKeep = getIndexOf(ev.target);\n      }\n    }\n  };\n\n  var itemOnDragLeave = function itemOnDragLeave(ev) {\n    container.isDragItem = false;\n  };\n\n  var itemOnDragStart = function itemOnDragStart(ev) {\n    if (ev.dataTransfer && ev.target && ev.target instanceof HTMLElement && ev.target.id) {\n      ev.dataTransfer.setData(\"text\", ev.target.id);\n      _context__WEBPACK_IMPORTED_MODULE_0__[\"context\"].keepElm = item;\n      container.indexOfKeep = getIndexOf(item);\n    }\n  };\n\n  item.ondrop = itemOndrop;\n  item.ondragover = itemOnDragOver;\n  item.ondragleave = itemOnDragLeave;\n  item.ondragstart = itemOnDragStart;\n  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"setReadonly\"])(item, [\"ondrop\", \"ondragover\", \"ondragleave\", \"ondragstart\"]);\n};\n\n//# sourceURL=webpack://DropDrap/./src/item.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: id, setReadonly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"id\", function() { return id; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setReadonly\", function() { return setReadonly; });\nvar id = function id() {\n  return (\"z\" + parseInt(Math.random() * 36 * 36 * 36).toString(36)).substr(-3) + Date.now().toString(36);\n};\nvar setReadonly = function setReadonly(targetObj, fields) {\n  var handlers = {\n    set: function set(target, key, value) {\n      if (fields.indexOf(key) !== -1) {\n        throw new TypeError(\"\".concat(key, \" is readonly\"));\n      }\n\n      target[key] = value;\n      return true;\n    }\n  };\n  return new Proxy(targetObj, handlers);\n};\n\n//# sourceURL=webpack://DropDrap/./src/utils.ts?");

/***/ })

/******/ });