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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: createContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContainer\", function() { return createContainer; });\nvar createContainer = function createContainer(container) {\n  var count = '1';\n  var keep;\n  container.isDragItem;\n  container.indexOfKeep;\n\n  var getIndexOf = function getIndexOf(elm) {\n    var i = 0;\n\n    while ((elm = elm.previousSibling) != null) {\n      i++;\n    }\n\n    return i;\n  };\n\n  var containerOnDrop = function containerOnDrop(ev) {\n    ev.preventDefault();\n    ev.target.appendChild(keep);\n    keep.style.opacity = '1';\n  };\n\n  var containerOnDragOver = function containerOnDragOver(ev) {\n    ev.preventDefault();\n\n    if (!container.isDragItem) {\n      container.appendChild(keep);\n    }\n  }; // ******************************************************************** //\n\n\n  container.addItem = function (item) {\n    item.id = count.toString();\n    item.setAttribute(\"draggable\", \"true\");\n    item.innerHTML = count;\n\n    var itemOndrop = function itemOndrop(ev) {\n      ev.stopPropagation();\n      keep.style.opacity = '1';\n      container.insertBefore(keep, ev.target);\n    };\n\n    var itemOnDragOver = function itemOnDragOver(ev) {\n      keep.style.opacity = '0.5';\n      container.isDragItem = true;\n\n      if (container.indexOfKeep > getIndexOf(ev.target)) {\n        container.insertBefore(keep, ev.target);\n        container.indexOfKeep = getIndexOf(ev.target);\n      } else if (container.indexOfKeep < getIndexOf(ev.target)) {\n        container.insertBefore(keep, ev.target.nextSibling);\n        container.indexOfKeep = getIndexOf(ev.target);\n      }\n    };\n\n    var itemOnDragLeave = function itemOnDragLeave(ev) {\n      container.isDragItem = false;\n    };\n\n    var itemOnDragStart = function itemOnDragStart(ev) {\n      ev.dataTransfer.setData(\"text\", ev.target.id);\n      keep = item;\n      container.indexOfKeep = getIndexOf(item);\n    };\n\n    item.ondrop = itemOndrop;\n    item.ondragover = itemOnDragOver;\n    item.ondragleave = itemOnDragLeave;\n    item.ondragstart = itemOnDragStart;\n    container.appendChild(item);\n    count++;\n  };\n\n  container.ondrop = containerOnDrop;\n  container.ondragover = containerOnDragOver;\n  return container;\n};\n\n\n\n//# sourceURL=webpack://DropDrap/./src/index.ts?");

/***/ })

/******/ });