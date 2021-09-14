/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n#topNav {\n    background-color: burlywood;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-around;\n\n  }\n\n#logoImage {\n    object-fit:contain;\n    width: 50%;\n    height: 60px;  \n\n}\n\n/* Style the links inside the navigation bar */\n#topNav a {\n    color: black;\n    text-align: center;\n    padding: 19px 16px;\n    text-decoration: none;\n    font-size: 17px;\n  }\n  \n  /* Change the color of links on hover */\n  #topNav a:hover {\n    background-color: #ddd;\n    color: white;\n  }\n  \n  /* Add a color to the active/current link */\n  #topNav a.active {\n    background-color: #04AA6D;\n    color: black;\n  }\n\n  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2DAA2D;AAC/D;;AAEA;IACI,2BAA2B;IAC3B,gBAAgB;IAChB,aAAa;IACb,6BAA6B;;EAE/B;;AAEF;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;;AAEhB;;AAEA,8CAA8C;AAC9C;IACI,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;EACjB;;EAEA,uCAAuC;EACvC;IACE,sBAAsB;IACtB,YAAY;EACd;;EAEA,2CAA2C;EAC3C;IACE,yBAAyB;IACzB,YAAY;EACd","sourcesContent":["html {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n#topNav {\n    background-color: burlywood;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-around;\n\n  }\n\n#logoImage {\n    object-fit:contain;\n    width: 50%;\n    height: 60px;  \n\n}\n\n/* Style the links inside the navigation bar */\n#topNav a {\n    color: black;\n    text-align: center;\n    padding: 19px 16px;\n    text-decoration: none;\n    font-size: 17px;\n  }\n  \n  /* Change the color of links on hover */\n  #topNav a:hover {\n    background-color: #ddd;\n    color: white;\n  }\n  \n  /* Add a color to the active/current link */\n  #topNav a.active {\n    background-color: #04AA6D;\n    color: black;\n  }\n\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/generateContactTab.js":
/*!***********************************!*\
  !*** ./src/generateContactTab.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const generateContactTab = function generateContactTab() {
    let divContent = document.getElementById('content');

    //create divs
    let headerContainer = document.createElement('div');
    headerContainer.className = 'container';
    headerContainer.id = 'headerContainer';
    
    let contactDetailsContainer = document.createElement('div');
    contactDetailsContainer.className = 'container';
    contactDetailsContainer.id = 'contactDetailsContainer';

    divContent.appendChild(headerContainer);
    divContent.appendChild(contactDetailsContainer);
    
    //add text elements
    let contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact details';

    headerContainer.appendChild(contactTitle);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContactTab);

/***/ }),

/***/ "./src/generateHomeTab.js":
/*!********************************!*\
  !*** ./src/generateHomeTab.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_pasta_header_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pasta-header.jpg */ "./src/images/pasta-header.jpg");


const generateHomeTab = function generateHomeTab() {
    let divContent = document.getElementById('content');

    //create divs

    let bannerContainer = document.createElement('div');
    bannerContainer.className = 'container';
    bannerContainer.id = 'bannerContainer';
    bannerContainer.style.textAlign = 'center';
    bannerContainer.style.borderBottom = 'thick solid #5F6161';

    let copyContainer = document.createElement('div');
    copyContainer.className = 'container';
    copyContainer.id = 'copyContainer';
    copyContainer.style.display = 'flex';
    copyContainer.style.flexDirection = 'column';
    copyContainer.style.textAlign = 'center';
    copyContainer.style.backgroundColor = '#E1E0DE';
    copyContainer.style.margin = '1em 1em';

    
    // append html elements to content div
    // first append divs
    divContent.appendChild(bannerContainer);
    divContent.appendChild(copyContainer);

    //create child elements
    //create main image
    let bannerImage = document.createElement('img');
    bannerImage.src = _images_pasta_header_jpg__WEBPACK_IMPORTED_MODULE_0__;
    bannerImage.alt = 'Picture of fresh pasta'
    bannerImage.style.width = '100%';
    bannerImage.style.objectFit = 'scale-down'
    bannerImage.style.filter = 'grayscale(100%)';

    //create text elements
    let restaurantHeadline = document.createElement('h1');
    restaurantHeadline.textContent = 'Fine Italian dining';
    restaurantHeadline.style.textEmphasis = 'x';

    let copyTitle = document.createElement('h1');
    copyTitle.textContent = 'The Restaurant';
    copyTitle.style.backgroundColor = '#C8C7C3';
    copyTitle.style.marginTop = '0px';

    let copyText = document.createElement('p');
    copyText.textContent = 'Mezza Dozzina (\'half-dozen\') is an Italian restaurant focusing on farm-fresh food with a modern twist.';

    let openingTimeTitle = document.createElement('h3');
    openingTimeTitle.textContent = 'Opening times:'

    let weekdayOpeningText = document.createElement('p');
    weekdayOpeningText.textContent = 'Monday to Friday: 6pm to 11pm';

    let saturdayOpeningText = document.createElement('p');
    saturdayOpeningText.textContent = 'Saturday: 5pm to 12pm';

    let sundayOpeningText = document.createElement('p');
    sundayOpeningText.textContent = 'Sunday: Closed';

    //append banner elements
    document.getElementById('bannerContainer').appendChild(restaurantHeadline);
    document.getElementById('bannerContainer').appendChild(bannerImage);

    //append container elements
    document.getElementById('copyContainer').appendChild(copyTitle);
    document.getElementById('copyContainer').appendChild(copyText);
    document.getElementById('copyContainer').appendChild(openingTimeTitle);
    document.getElementById('copyContainer').appendChild(weekdayOpeningText);
    document.getElementById('copyContainer').appendChild(saturdayOpeningText);
    document.getElementById('copyContainer').appendChild(sundayOpeningText);



};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHomeTab);

/***/ }),

/***/ "./src/generateMenuTab.js":
/*!********************************!*\
  !*** ./src/generateMenuTab.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const generateMenuTab = function generateMenuTab() {
    let divContent = document.getElementById('content');

    //create divs

    let headerContainer = document.createElement('div');
    headerContainer.className = 'container';
    headerContainer.id = 'headerContainer';

    let menuContainer = document.createElement('div');
    menuContainer.className = 'container';
    menuContainer.id = 'menuContainer';

    
    // append html elements to content div
    // first append divs
    divContent.appendChild(headerContainer);
    divContent.appendChild(menuContainer);
    divContent.appendChild(headerContainer);

    //create child elements

    //create text elements
    let menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Our menu';

    //append text elements
    menuContainer.appendChild(menuTitle);

    //create array of menu item objects

    let menuItems = [
        {category:'Starters', item:'Nocellara', price:'4', description:'Fresh Queen Nocellara olives from Sicily, with a buttery flavour'},
        {category:'Starters', item:'Bruchetta', price:'5', description:'Grilled sourdough bread, rubbed with garlic and topped with fresh Pisanello tomatoes from Tuscany'},
        {category:'Starters', item:'Pane', price:'3', description:'Sourdough bread with extra virgin olive oil and balsamic vinegar'},
        {category:'Starters', item:'Burrata', price:'6', description:'Full-bodied Apulian buffalo cheese'},
        {category:'Starters', item:'Friarielli', price:'5', description:'A variety of broccoli from Napoli, lightly seared and served with homemade bread'},

        {category:'Pizza', item:'Margherita', price:'14', description:'San Marzano tomatoes and sliced mozzarella di bufala Campana'},
        {category:'Pizza', item:'Quattro', price:'16', description:'San Marzano tomatoes, mozzarella, stracchino, fontina, gorgonzola'},
        {category:'Pizza', item:'Bianca', price:'11', description:'Extra virgin olive oil, sea salt flakes and rosemary sprigs'},
        {category:'Pizza', item:'Viennese', price:'13', description:'San Marzano tomatoes, mozzarella, n\'duja and oregano'},
        {category:'Pizza', item:'Napolitana', price:'13', description:'San Marzano tomatoes, mozzarella di bufala Campana and Agostino Recca anchovies'},

        {category:'Pasta', item:'Cacio', price:'12', description:'Tonnarelli (square-cut spaghetti) with salty pecorino romano and black pepper'},
        {category:'Pasta', item:'Ravioli', price:'14', description:'Homemade butternut ravioli with brown butter and sage'},
        {category:'Pasta', item:'Tagliatelle', price:'15', description:'Fresh basil pesto & pine nuts with tagliatelle'},
        {category:'Pasta', item:'Fettucine', price:'16', description:'Fettucine with an earthy black truffle alfredo sauce'},

     ];

     //define a function to generate the menu divs, which will hold the menu items in separate categories
     const generateMenuDivs = function generateMenuDivs() {
        //get a unique set of menu categories
        let uniqueCategories = [...new Set(menuItems.map(item => item.category))];

        //create and append a div for each menu category
        for (let index = 0; index < uniqueCategories.length; index++) {
            const category = uniqueCategories[index];
            
            //create flexbox element
            let newFlexbox = document.createElement('div');
            newFlexbox.className = 'container';
            newFlexbox.id = category +'Container';
            //set flexbox css
            newFlexbox.style.display = 'flex';
            newFlexbox.style.flexDirection = 'column'
            newFlexbox.style.justifyContent = 'space-around';

            //append flexbox element
            menuContainer.appendChild(newFlexbox);
        }
    };

generateMenuDivs();

    //populate table with menu items
    const populateTable = function populateTable() { 
        var flexbox = document.getElementById('menuContainer');

        for (let item of menuItems) {
            var newDiv = document.createElement('div');
            // set the id of the div as the object index
            newDiv.id = menuItems.indexOf(item).toString();

            //style the new div

            newDiv.style.display = 'flex';
            newDiv.style.flexDirection = 'column';
            newDiv.className = item.category;
            
            //append the new div
            let targetContainer = document.getElementById(item.category + 'Container');
            targetContainer.appendChild(newDiv);
            
            //add the text elements to the new div
            let categoryTitle = document.createElement('h2');
            categoryTitle.textContent = item.category;

            let menuItem = document.createElement('h3');
            menuItem.textContent = item.item;

            let descriptionItem = document.createElement('p');
            descriptionItem.textContent = item.description;
            
            //append the text elements

            //if the new menu entry is the first, also add the category title
            if (newDiv == targetContainer.firstElementChild) {
                targetContainer.appendChild(categoryTitle);
            };

            targetContainer.appendChild(menuItem);
            targetContainer.appendChild(descriptionItem);

        };
    };

    //populate flexbox divs
    populateTable();
    
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenuTab);

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ccfbc0547cffe11ff0e.png";

/***/ }),

/***/ "./src/images/pasta-header.jpg":
/*!*************************************!*\
  !*** ./src/images/pasta-header.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "381156db25e9844934b6.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _generateHomeTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateHomeTab */ "./src/generateHomeTab.js");
/* harmony import */ var _generateMenuTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateMenuTab */ "./src/generateMenuTab.js");
/* harmony import */ var _generateContactTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateContactTab */ "./src/generateContactTab.js");







let divContent = document.getElementById('content');

//create divs
let topNav = document.createElement('div');
topNav.className = 'container';
topNav.id = 'topNav';

//create child elements

//create logo and set source image/alt
let logoImage = document.createElement('img');
logoImage.id = 'logoImage';
logoImage.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__;
logoImage.alt = 'Restaurant logo'

//create topNav links and set classes, hrefs
let homeLink = document.createElement('a');
homeLink.id = 'homeLink';
homeLink.href = '#home';
homeLink.textContent = 'Home';

let menuLink = document.createElement('a');
menuLink.id = 'menuLink';
menuLink.href = '#menu';
menuLink.textContent = 'Menu';

let contactLink = document.createElement('a');
contactLink.id = 'contactLink';
contactLink.href = '#contact';
contactLink.textContent = 'Contact';

//define a function to reset page to above state
const resetPage = function resetPage() {
    //delete all elements
    while (divContent.lastElementChild) {
        divContent.removeChild(divContent.lastElementChild);
      };
    
    // append html elements to content div
    // first append divs
    divContent.appendChild(topNav);

    //then append other elements to 'sub-divs'
    //append topNav elements
    document.getElementById('topNav').appendChild(logoImage);
    document.getElementById('topNav').appendChild(homeLink);
    document.getElementById('topNav').appendChild(menuLink);
    document.getElementById('topNav').appendChild(contactLink);
};

//generate the initial page
resetPage();
(0,_generateHomeTab__WEBPACK_IMPORTED_MODULE_2__["default"])();

//add event listeners to all topNav links
topNav.addEventListener('click', (event) => {
    const isLink = event.target.tagName.toLowerCase() === 'a';
    if (isLink && event.target.id === 'homeLink') {
        resetPage();
        (0,_generateHomeTab__WEBPACK_IMPORTED_MODULE_2__["default"])();
    } else if (isLink && event.target.id === 'menuLink') {
        resetPage();
        (0,_generateMenuTab__WEBPACK_IMPORTED_MODULE_3__["default"])();
    } else if (isLink && event.target.id === 'contactLink') {
        resetPage();
        (0,_generateContactTab__WEBPACK_IMPORTED_MODULE_4__["default"])();
    };
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Sjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDL0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ3Qjs7QUFFekQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7OztBQzlFOUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVMsaUlBQWlJO0FBQzFJLFNBQVMsa0tBQWtLO0FBQzNLLFNBQVMsNEhBQTRIO0FBQ3JJLFNBQVMsaUdBQWlHO0FBQzFHLFNBQVMsa0pBQWtKOztBQUUzSixTQUFTLDRIQUE0SDtBQUNySSxTQUFTLDhIQUE4SDtBQUN2SSxTQUFTLHVIQUF1SDtBQUNoSSxTQUFTLG1IQUFtSDtBQUM1SCxTQUFTLCtJQUErSTs7QUFFeEosU0FBUyx3SUFBd0k7QUFDakosU0FBUyxrSEFBa0g7QUFDM0gsU0FBUywrR0FBK0c7QUFDeEgsU0FBUyxtSEFBbUg7O0FBRTVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGlDQUFpQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNIOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDZ0I7O0FBRVc7QUFDQTtBQUNNOztBQUV0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNkNBQUk7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNERBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQWU7QUFDdkIsTUFBTTtBQUNOO0FBQ0EsUUFBUSw0REFBZTtBQUN2QixNQUFNO0FBQ047QUFDQSxRQUFRLCtEQUFrQjtBQUMxQjtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2VuZXJhdGVDb250YWN0VGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9nZW5lcmF0ZUhvbWVUYWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2dlbmVyYXRlTWVudVRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3RvcE5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxuICB9XFxuXFxuI2xvZ29JbWFnZSB7XFxuICAgIG9iamVjdC1maXQ6Y29udGFpbjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA2MHB4OyAgXFxuXFxufVxcblxcbi8qIFN0eWxlIHRoZSBsaW5rcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXFxuI3RvcE5hdiBhIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE5cHggMTZweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICB9XFxuICBcXG4gIC8qIENoYW5nZSB0aGUgY29sb3Igb2YgbGlua3Mgb24gaG92ZXIgKi9cXG4gICN0b3BOYXYgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG4gIFxcbiAgLyogQWRkIGEgY29sb3IgdG8gdGhlIGFjdGl2ZS9jdXJyZW50IGxpbmsgKi9cXG4gICN0b3BOYXYgYS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICB9XFxuXFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkRBQTJEO0FBQy9EOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNkJBQTZCOztFQUUvQjs7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTs7QUFFaEI7O0FBRUEsOENBQThDO0FBQzlDO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBRUEsdUNBQXVDO0VBQ3ZDO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQSwyQ0FBMkM7RUFDM0M7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3RvcE5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxuICB9XFxuXFxuI2xvZ29JbWFnZSB7XFxuICAgIG9iamVjdC1maXQ6Y29udGFpbjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA2MHB4OyAgXFxuXFxufVxcblxcbi8qIFN0eWxlIHRoZSBsaW5rcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXFxuI3RvcE5hdiBhIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE5cHggMTZweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICB9XFxuICBcXG4gIC8qIENoYW5nZSB0aGUgY29sb3Igb2YgbGlua3Mgb24gaG92ZXIgKi9cXG4gICN0b3BOYXYgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG4gIFxcbiAgLyogQWRkIGEgY29sb3IgdG8gdGhlIGFjdGl2ZS9jdXJyZW50IGxpbmsgKi9cXG4gICN0b3BOYXYgYS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICB9XFxuXFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZ2VuZXJhdGVDb250YWN0VGFiID0gZnVuY3Rpb24gZ2VuZXJhdGVDb250YWN0VGFiKCkge1xuICAgIGxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIC8vY3JlYXRlIGRpdnNcbiAgICBsZXQgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICAgIGhlYWRlckNvbnRhaW5lci5pZCA9ICdoZWFkZXJDb250YWluZXInO1xuICAgIFxuICAgIGxldCBjb250YWN0RGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3REZXRhaWxzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICAgIGNvbnRhY3REZXRhaWxzQ29udGFpbmVyLmlkID0gJ2NvbnRhY3REZXRhaWxzQ29udGFpbmVyJztcblxuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3REZXRhaWxzQ29udGFpbmVyKTtcbiAgICBcbiAgICAvL2FkZCB0ZXh0IGVsZW1lbnRzXG4gICAgbGV0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgZGV0YWlscyc7XG5cbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ29udGFjdFRhYjsiLCJpbXBvcnQgcGFzdGFIZWFkZXJJbWFnZSBmcm9tICcuL2ltYWdlcy9wYXN0YS1oZWFkZXIuanBnJztcblxuY29uc3QgZ2VuZXJhdGVIb21lVGFiID0gZnVuY3Rpb24gZ2VuZXJhdGVIb21lVGFiKCkge1xuICAgIGxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIC8vY3JlYXRlIGRpdnNcblxuICAgIGxldCBiYW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYW5uZXJDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG4gICAgYmFubmVyQ29udGFpbmVyLmlkID0gJ2Jhbm5lckNvbnRhaW5lcic7XG4gICAgYmFubmVyQ29udGFpbmVyLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGJhbm5lckNvbnRhaW5lci5zdHlsZS5ib3JkZXJCb3R0b20gPSAndGhpY2sgc29saWQgIzVGNjE2MSc7XG5cbiAgICBsZXQgY29weUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvcHlDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG4gICAgY29weUNvbnRhaW5lci5pZCA9ICdjb3B5Q29udGFpbmVyJztcbiAgICBjb3B5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgY29weUNvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgY29weUNvbnRhaW5lci5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICBjb3B5Q29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRTFFMERFJztcbiAgICBjb3B5Q29udGFpbmVyLnN0eWxlLm1hcmdpbiA9ICcxZW0gMWVtJztcblxuICAgIFxuICAgIC8vIGFwcGVuZCBodG1sIGVsZW1lbnRzIHRvIGNvbnRlbnQgZGl2XG4gICAgLy8gZmlyc3QgYXBwZW5kIGRpdnNcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGJhbm5lckNvbnRhaW5lcik7XG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChjb3B5Q29udGFpbmVyKTtcblxuICAgIC8vY3JlYXRlIGNoaWxkIGVsZW1lbnRzXG4gICAgLy9jcmVhdGUgbWFpbiBpbWFnZVxuICAgIGxldCBiYW5uZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGJhbm5lckltYWdlLnNyYyA9IHBhc3RhSGVhZGVySW1hZ2U7XG4gICAgYmFubmVySW1hZ2UuYWx0ID0gJ1BpY3R1cmUgb2YgZnJlc2ggcGFzdGEnXG4gICAgYmFubmVySW1hZ2Uuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgYmFubmVySW1hZ2Uuc3R5bGUub2JqZWN0Rml0ID0gJ3NjYWxlLWRvd24nXG4gICAgYmFubmVySW1hZ2Uuc3R5bGUuZmlsdGVyID0gJ2dyYXlzY2FsZSgxMDAlKSc7XG5cbiAgICAvL2NyZWF0ZSB0ZXh0IGVsZW1lbnRzXG4gICAgbGV0IHJlc3RhdXJhbnRIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgcmVzdGF1cmFudEhlYWRsaW5lLnRleHRDb250ZW50ID0gJ0ZpbmUgSXRhbGlhbiBkaW5pbmcnO1xuICAgIHJlc3RhdXJhbnRIZWFkbGluZS5zdHlsZS50ZXh0RW1waGFzaXMgPSAneCc7XG5cbiAgICBsZXQgY29weVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb3B5VGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIFJlc3RhdXJhbnQnO1xuICAgIGNvcHlUaXRsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0M4QzdDMyc7XG4gICAgY29weVRpdGxlLnN0eWxlLm1hcmdpblRvcCA9ICcwcHgnO1xuXG4gICAgbGV0IGNvcHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvcHlUZXh0LnRleHRDb250ZW50ID0gJ01lenphIERvenppbmEgKFxcJ2hhbGYtZG96ZW5cXCcpIGlzIGFuIEl0YWxpYW4gcmVzdGF1cmFudCBmb2N1c2luZyBvbiBmYXJtLWZyZXNoIGZvb2Qgd2l0aCBhIG1vZGVybiB0d2lzdC4nO1xuXG4gICAgbGV0IG9wZW5pbmdUaW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG9wZW5pbmdUaW1lVGl0bGUudGV4dENvbnRlbnQgPSAnT3BlbmluZyB0aW1lczonXG5cbiAgICBsZXQgd2Vla2RheU9wZW5pbmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHdlZWtkYXlPcGVuaW5nVGV4dC50ZXh0Q29udGVudCA9ICdNb25kYXkgdG8gRnJpZGF5OiA2cG0gdG8gMTFwbSc7XG5cbiAgICBsZXQgc2F0dXJkYXlPcGVuaW5nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzYXR1cmRheU9wZW5pbmdUZXh0LnRleHRDb250ZW50ID0gJ1NhdHVyZGF5OiA1cG0gdG8gMTJwbSc7XG5cbiAgICBsZXQgc3VuZGF5T3BlbmluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3VuZGF5T3BlbmluZ1RleHQudGV4dENvbnRlbnQgPSAnU3VuZGF5OiBDbG9zZWQnO1xuXG4gICAgLy9hcHBlbmQgYmFubmVyIGVsZW1lbnRzXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhbm5lckNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRIZWFkbGluZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhbm5lckNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGJhbm5lckltYWdlKTtcblxuICAgIC8vYXBwZW5kIGNvbnRhaW5lciBlbGVtZW50c1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY29weVRpdGxlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNvcHlUZXh0KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKG9wZW5pbmdUaW1lVGl0bGUpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQod2Vla2RheU9wZW5pbmdUZXh0KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHNhdHVyZGF5T3BlbmluZ1RleHQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoc3VuZGF5T3BlbmluZ1RleHQpO1xuXG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVIb21lVGFiOyIsImNvbnN0IGdlbmVyYXRlTWVudVRhYiA9IGZ1bmN0aW9uIGdlbmVyYXRlTWVudVRhYigpIHtcbiAgICBsZXQgZGl2Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAvL2NyZWF0ZSBkaXZzXG5cbiAgICBsZXQgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICAgIGhlYWRlckNvbnRhaW5lci5pZCA9ICdoZWFkZXJDb250YWluZXInO1xuXG4gICAgbGV0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICAgIG1lbnVDb250YWluZXIuaWQgPSAnbWVudUNvbnRhaW5lcic7XG5cbiAgICBcbiAgICAvLyBhcHBlbmQgaHRtbCBlbGVtZW50cyB0byBjb250ZW50IGRpdlxuICAgIC8vIGZpcnN0IGFwcGVuZCBkaXZzXG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuXG4gICAgLy9jcmVhdGUgY2hpbGQgZWxlbWVudHNcblxuICAgIC8vY3JlYXRlIHRleHQgZWxlbWVudHNcbiAgICBsZXQgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSAnT3VyIG1lbnUnO1xuXG4gICAgLy9hcHBlbmQgdGV4dCBlbGVtZW50c1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcblxuICAgIC8vY3JlYXRlIGFycmF5IG9mIG1lbnUgaXRlbSBvYmplY3RzXG5cbiAgICBsZXQgbWVudUl0ZW1zID0gW1xuICAgICAgICB7Y2F0ZWdvcnk6J1N0YXJ0ZXJzJywgaXRlbTonTm9jZWxsYXJhJywgcHJpY2U6JzQnLCBkZXNjcmlwdGlvbjonRnJlc2ggUXVlZW4gTm9jZWxsYXJhIG9saXZlcyBmcm9tIFNpY2lseSwgd2l0aCBhIGJ1dHRlcnkgZmxhdm91cid9LFxuICAgICAgICB7Y2F0ZWdvcnk6J1N0YXJ0ZXJzJywgaXRlbTonQnJ1Y2hldHRhJywgcHJpY2U6JzUnLCBkZXNjcmlwdGlvbjonR3JpbGxlZCBzb3VyZG91Z2ggYnJlYWQsIHJ1YmJlZCB3aXRoIGdhcmxpYyBhbmQgdG9wcGVkIHdpdGggZnJlc2ggUGlzYW5lbGxvIHRvbWF0b2VzIGZyb20gVHVzY2FueSd9LFxuICAgICAgICB7Y2F0ZWdvcnk6J1N0YXJ0ZXJzJywgaXRlbTonUGFuZScsIHByaWNlOiczJywgZGVzY3JpcHRpb246J1NvdXJkb3VnaCBicmVhZCB3aXRoIGV4dHJhIHZpcmdpbiBvbGl2ZSBvaWwgYW5kIGJhbHNhbWljIHZpbmVnYXInfSxcbiAgICAgICAge2NhdGVnb3J5OidTdGFydGVycycsIGl0ZW06J0J1cnJhdGEnLCBwcmljZTonNicsIGRlc2NyaXB0aW9uOidGdWxsLWJvZGllZCBBcHVsaWFuIGJ1ZmZhbG8gY2hlZXNlJ30sXG4gICAgICAgIHtjYXRlZ29yeTonU3RhcnRlcnMnLCBpdGVtOidGcmlhcmllbGxpJywgcHJpY2U6JzUnLCBkZXNjcmlwdGlvbjonQSB2YXJpZXR5IG9mIGJyb2Njb2xpIGZyb20gTmFwb2xpLCBsaWdodGx5IHNlYXJlZCBhbmQgc2VydmVkIHdpdGggaG9tZW1hZGUgYnJlYWQnfSxcblxuICAgICAgICB7Y2F0ZWdvcnk6J1BpenphJywgaXRlbTonTWFyZ2hlcml0YScsIHByaWNlOicxNCcsIGRlc2NyaXB0aW9uOidTYW4gTWFyemFubyB0b21hdG9lcyBhbmQgc2xpY2VkIG1venphcmVsbGEgZGkgYnVmYWxhIENhbXBhbmEnfSxcbiAgICAgICAge2NhdGVnb3J5OidQaXp6YScsIGl0ZW06J1F1YXR0cm8nLCBwcmljZTonMTYnLCBkZXNjcmlwdGlvbjonU2FuIE1hcnphbm8gdG9tYXRvZXMsIG1venphcmVsbGEsIHN0cmFjY2hpbm8sIGZvbnRpbmEsIGdvcmdvbnpvbGEnfSxcbiAgICAgICAge2NhdGVnb3J5OidQaXp6YScsIGl0ZW06J0JpYW5jYScsIHByaWNlOicxMScsIGRlc2NyaXB0aW9uOidFeHRyYSB2aXJnaW4gb2xpdmUgb2lsLCBzZWEgc2FsdCBmbGFrZXMgYW5kIHJvc2VtYXJ5IHNwcmlncyd9LFxuICAgICAgICB7Y2F0ZWdvcnk6J1BpenphJywgaXRlbTonVmllbm5lc2UnLCBwcmljZTonMTMnLCBkZXNjcmlwdGlvbjonU2FuIE1hcnphbm8gdG9tYXRvZXMsIG1venphcmVsbGEsIG5cXCdkdWphIGFuZCBvcmVnYW5vJ30sXG4gICAgICAgIHtjYXRlZ29yeTonUGl6emEnLCBpdGVtOidOYXBvbGl0YW5hJywgcHJpY2U6JzEzJywgZGVzY3JpcHRpb246J1NhbiBNYXJ6YW5vIHRvbWF0b2VzLCBtb3p6YXJlbGxhIGRpIGJ1ZmFsYSBDYW1wYW5hIGFuZCBBZ29zdGlubyBSZWNjYSBhbmNob3ZpZXMnfSxcblxuICAgICAgICB7Y2F0ZWdvcnk6J1Bhc3RhJywgaXRlbTonQ2FjaW8nLCBwcmljZTonMTInLCBkZXNjcmlwdGlvbjonVG9ubmFyZWxsaSAoc3F1YXJlLWN1dCBzcGFnaGV0dGkpIHdpdGggc2FsdHkgcGVjb3Jpbm8gcm9tYW5vIGFuZCBibGFjayBwZXBwZXInfSxcbiAgICAgICAge2NhdGVnb3J5OidQYXN0YScsIGl0ZW06J1JhdmlvbGknLCBwcmljZTonMTQnLCBkZXNjcmlwdGlvbjonSG9tZW1hZGUgYnV0dGVybnV0IHJhdmlvbGkgd2l0aCBicm93biBidXR0ZXIgYW5kIHNhZ2UnfSxcbiAgICAgICAge2NhdGVnb3J5OidQYXN0YScsIGl0ZW06J1RhZ2xpYXRlbGxlJywgcHJpY2U6JzE1JywgZGVzY3JpcHRpb246J0ZyZXNoIGJhc2lsIHBlc3RvICYgcGluZSBudXRzIHdpdGggdGFnbGlhdGVsbGUnfSxcbiAgICAgICAge2NhdGVnb3J5OidQYXN0YScsIGl0ZW06J0ZldHR1Y2luZScsIHByaWNlOicxNicsIGRlc2NyaXB0aW9uOidGZXR0dWNpbmUgd2l0aCBhbiBlYXJ0aHkgYmxhY2sgdHJ1ZmZsZSBhbGZyZWRvIHNhdWNlJ30sXG5cbiAgICAgXTtcblxuICAgICAvL2RlZmluZSBhIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBtZW51IGRpdnMsIHdoaWNoIHdpbGwgaG9sZCB0aGUgbWVudSBpdGVtcyBpbiBzZXBhcmF0ZSBjYXRlZ29yaWVzXG4gICAgIGNvbnN0IGdlbmVyYXRlTWVudURpdnMgPSBmdW5jdGlvbiBnZW5lcmF0ZU1lbnVEaXZzKCkge1xuICAgICAgICAvL2dldCBhIHVuaXF1ZSBzZXQgb2YgbWVudSBjYXRlZ29yaWVzXG4gICAgICAgIGxldCB1bmlxdWVDYXRlZ29yaWVzID0gWy4uLm5ldyBTZXQobWVudUl0ZW1zLm1hcChpdGVtID0+IGl0ZW0uY2F0ZWdvcnkpKV07XG5cbiAgICAgICAgLy9jcmVhdGUgYW5kIGFwcGVuZCBhIGRpdiBmb3IgZWFjaCBtZW51IGNhdGVnb3J5XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB1bmlxdWVDYXRlZ29yaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSB1bmlxdWVDYXRlZ29yaWVzW2luZGV4XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9jcmVhdGUgZmxleGJveCBlbGVtZW50XG4gICAgICAgICAgICBsZXQgbmV3RmxleGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3RmxleGJveC5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcbiAgICAgICAgICAgIG5ld0ZsZXhib3guaWQgPSBjYXRlZ29yeSArJ0NvbnRhaW5lcic7XG4gICAgICAgICAgICAvL3NldCBmbGV4Ym94IGNzc1xuICAgICAgICAgICAgbmV3RmxleGJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgbmV3RmxleGJveC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbidcbiAgICAgICAgICAgIG5ld0ZsZXhib3guc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYXJvdW5kJztcblxuICAgICAgICAgICAgLy9hcHBlbmQgZmxleGJveCBlbGVtZW50XG4gICAgICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0ZsZXhib3gpO1xuICAgICAgICB9XG4gICAgfTtcblxuZ2VuZXJhdGVNZW51RGl2cygpO1xuXG4gICAgLy9wb3B1bGF0ZSB0YWJsZSB3aXRoIG1lbnUgaXRlbXNcbiAgICBjb25zdCBwb3B1bGF0ZVRhYmxlID0gZnVuY3Rpb24gcG9wdWxhdGVUYWJsZSgpIHsgXG4gICAgICAgIHZhciBmbGV4Ym94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVDb250YWluZXInKTtcblxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIG1lbnVJdGVtcykge1xuICAgICAgICAgICAgdmFyIG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgLy8gc2V0IHRoZSBpZCBvZiB0aGUgZGl2IGFzIHRoZSBvYmplY3QgaW5kZXhcbiAgICAgICAgICAgIG5ld0Rpdi5pZCA9IG1lbnVJdGVtcy5pbmRleE9mKGl0ZW0pLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIC8vc3R5bGUgdGhlIG5ldyBkaXZcblxuICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBuZXdEaXYuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgICAgICAgbmV3RGl2LmNsYXNzTmFtZSA9IGl0ZW0uY2F0ZWdvcnk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vYXBwZW5kIHRoZSBuZXcgZGl2XG4gICAgICAgICAgICBsZXQgdGFyZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5jYXRlZ29yeSArICdDb250YWluZXInKTtcbiAgICAgICAgICAgIHRhcmdldENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2FkZCB0aGUgdGV4dCBlbGVtZW50cyB0byB0aGUgbmV3IGRpdlxuICAgICAgICAgICAgbGV0IGNhdGVnb3J5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgY2F0ZWdvcnlUaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0uY2F0ZWdvcnk7XG5cbiAgICAgICAgICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBtZW51SXRlbS50ZXh0Q29udGVudCA9IGl0ZW0uaXRlbTtcblxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSXRlbS50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vYXBwZW5kIHRoZSB0ZXh0IGVsZW1lbnRzXG5cbiAgICAgICAgICAgIC8vaWYgdGhlIG5ldyBtZW51IGVudHJ5IGlzIHRoZSBmaXJzdCwgYWxzbyBhZGQgdGhlIGNhdGVnb3J5IHRpdGxlXG4gICAgICAgICAgICBpZiAobmV3RGl2ID09IHRhcmdldENvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgICAgIHRhcmdldENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeVRpdGxlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRhcmdldENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gICAgICAgICAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JdGVtKTtcblxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvL3BvcHVsYXRlIGZsZXhib3ggZGl2c1xuICAgIHBvcHVsYXRlVGFibGUoKTtcbiAgICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlTWVudVRhYjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi9pbWFnZXMvbG9nby5wbmcnO1xuXG5pbXBvcnQgZ2VuZXJhdGVIb21lVGFiIGZyb20gJy4vZ2VuZXJhdGVIb21lVGFiJztcbmltcG9ydCBnZW5lcmF0ZU1lbnVUYWIgZnJvbSAnLi9nZW5lcmF0ZU1lbnVUYWInO1xuaW1wb3J0IGdlbmVyYXRlQ29udGFjdFRhYiBmcm9tICcuL2dlbmVyYXRlQ29udGFjdFRhYic7XG5cbmxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuLy9jcmVhdGUgZGl2c1xubGV0IHRvcE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudG9wTmF2LmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xudG9wTmF2LmlkID0gJ3RvcE5hdic7XG5cbi8vY3JlYXRlIGNoaWxkIGVsZW1lbnRzXG5cbi8vY3JlYXRlIGxvZ28gYW5kIHNldCBzb3VyY2UgaW1hZ2UvYWx0XG5sZXQgbG9nb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5sb2dvSW1hZ2UuaWQgPSAnbG9nb0ltYWdlJztcbmxvZ29JbWFnZS5zcmMgPSBsb2dvO1xubG9nb0ltYWdlLmFsdCA9ICdSZXN0YXVyYW50IGxvZ28nXG5cbi8vY3JlYXRlIHRvcE5hdiBsaW5rcyBhbmQgc2V0IGNsYXNzZXMsIGhyZWZzXG5sZXQgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5ob21lTGluay5pZCA9ICdob21lTGluayc7XG5ob21lTGluay5ocmVmID0gJyNob21lJztcbmhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuXG5sZXQgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5tZW51TGluay5pZCA9ICdtZW51TGluayc7XG5tZW51TGluay5ocmVmID0gJyNtZW51Jztcbm1lbnVMaW5rLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG5sZXQgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5jb250YWN0TGluay5pZCA9ICdjb250YWN0TGluayc7XG5jb250YWN0TGluay5ocmVmID0gJyNjb250YWN0JztcbmNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4vL2RlZmluZSBhIGZ1bmN0aW9uIHRvIHJlc2V0IHBhZ2UgdG8gYWJvdmUgc3RhdGVcbmNvbnN0IHJlc2V0UGFnZSA9IGZ1bmN0aW9uIHJlc2V0UGFnZSgpIHtcbiAgICAvL2RlbGV0ZSBhbGwgZWxlbWVudHNcbiAgICB3aGlsZSAoZGl2Q29udGVudC5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIGRpdkNvbnRlbnQucmVtb3ZlQ2hpbGQoZGl2Q29udGVudC5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgIH07XG4gICAgXG4gICAgLy8gYXBwZW5kIGh0bWwgZWxlbWVudHMgdG8gY29udGVudCBkaXZcbiAgICAvLyBmaXJzdCBhcHBlbmQgZGl2c1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQodG9wTmF2KTtcblxuICAgIC8vdGhlbiBhcHBlbmQgb3RoZXIgZWxlbWVudHMgdG8gJ3N1Yi1kaXZzJ1xuICAgIC8vYXBwZW5kIHRvcE5hdiBlbGVtZW50c1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3BOYXYnKS5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3BOYXYnKS5hcHBlbmRDaGlsZChob21lTGluayk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcE5hdicpLmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wTmF2JykuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xufTtcblxuLy9nZW5lcmF0ZSB0aGUgaW5pdGlhbCBwYWdlXG5yZXNldFBhZ2UoKTtcbmdlbmVyYXRlSG9tZVRhYigpO1xuXG4vL2FkZCBldmVudCBsaXN0ZW5lcnMgdG8gYWxsIHRvcE5hdiBsaW5rc1xudG9wTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgaXNMaW5rID0gZXZlbnQudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2EnO1xuICAgIGlmIChpc0xpbmsgJiYgZXZlbnQudGFyZ2V0LmlkID09PSAnaG9tZUxpbmsnKSB7XG4gICAgICAgIHJlc2V0UGFnZSgpO1xuICAgICAgICBnZW5lcmF0ZUhvbWVUYWIoKTtcbiAgICB9IGVsc2UgaWYgKGlzTGluayAmJiBldmVudC50YXJnZXQuaWQgPT09ICdtZW51TGluaycpIHtcbiAgICAgICAgcmVzZXRQYWdlKCk7XG4gICAgICAgIGdlbmVyYXRlTWVudVRhYigpO1xuICAgIH0gZWxzZSBpZiAoaXNMaW5rICYmIGV2ZW50LnRhcmdldC5pZCA9PT0gJ2NvbnRhY3RMaW5rJykge1xuICAgICAgICByZXNldFBhZ2UoKTtcbiAgICAgICAgZ2VuZXJhdGVDb250YWN0VGFiKCk7XG4gICAgfTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==