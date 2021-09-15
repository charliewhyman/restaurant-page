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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    scroll-behavior: smooth;\n}\n\n#topNav {\n    background-color: burlywood;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-around;\n\n  }\n\n#logoImage {\n    object-fit:contain;\n    width: 50%;\n    height: 60px;  \n\n}\n\n/* Style the links inside the navigation bar */\n#topNav a {\n    color: black;\n    text-align: center;\n    padding: 19px 16px;\n    text-decoration: none;\n    font-size: 17px;\n  }\n  \n  /* Change the color of links on hover */\n  #topNav a:hover {\n    background-color: #ddd;\n    color: white;\n  }\n  \n  /* Add a color to the active/current link */\n  #topNav a.active {\n    background-color: #04AA6D;\n    color: black;\n  }\n\n  .contactLink {\n    text-decoration: underline;\n    color: black;\n    font-style: italic;\n    transition: all 0.2s ease;\n    cursor: pointer;\n  }\n  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2DAA2D;IAC3D,uBAAuB;AAC3B;;AAEA;IACI,2BAA2B;IAC3B,gBAAgB;IAChB,aAAa;IACb,6BAA6B;;EAE/B;;AAEF;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;;AAEhB;;AAEA,8CAA8C;AAC9C;IACI,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;EACjB;;EAEA,uCAAuC;EACvC;IACE,sBAAsB;IACtB,YAAY;EACd;;EAEA,2CAA2C;EAC3C;IACE,yBAAyB;IACzB,YAAY;EACd;;EAEA;IACE,0BAA0B;IAC1B,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;EACjB","sourcesContent":["html {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    scroll-behavior: smooth;\n}\n\n#topNav {\n    background-color: burlywood;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-around;\n\n  }\n\n#logoImage {\n    object-fit:contain;\n    width: 50%;\n    height: 60px;  \n\n}\n\n/* Style the links inside the navigation bar */\n#topNav a {\n    color: black;\n    text-align: center;\n    padding: 19px 16px;\n    text-decoration: none;\n    font-size: 17px;\n  }\n  \n  /* Change the color of links on hover */\n  #topNav a:hover {\n    background-color: #ddd;\n    color: white;\n  }\n  \n  /* Add a color to the active/current link */\n  #topNav a.active {\n    background-color: #04AA6D;\n    color: black;\n  }\n\n  .contactLink {\n    text-decoration: underline;\n    color: black;\n    font-style: italic;\n    transition: all 0.2s ease;\n    cursor: pointer;\n  }\n  "],"sourceRoot":""}]);
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

    let phoneContainer = document.createElement('div');
    phoneContainer.className = 'container';
    phoneContainer.id = 'phoneContainer';

    let emailContainer = document.createElement('div');
    emailContainer.className = 'container';
    emailContainer.id = 'emailContainer';

    divContent.appendChild(headerContainer);
    divContent.appendChild(contactDetailsContainer);
    contactDetailsContainer.appendChild(phoneContainer);
    contactDetailsContainer.appendChild(emailContainer);

    //create text elements
    let contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact details';

    let contactText = document.createElement('p');
    contactText.textContent = 'Reservations by phone or email.';

    let phoneSubtitle = document.createElement('h3');
    phoneSubtitle.textContent = 'Phone Us'

    let phoneNumber = document.createElement('a');
    phoneNumber.textContent = '01234 567890';
    phoneNumber.href = 'tel:01234 567890';
    phoneNumber.className = 'contactLink';

    let emailSubtitle = document.createElement('h3');
    emailSubtitle.textContent = 'Email Us'

    let email = document.createElement('a');
    email.textContent = 'hello@mezzadozzina.co.uk';
    email.href = 'mailto:hello@mezzadozzina.co.uk';
    email.className = 'contactLink';

    //append text elements
    headerContainer.appendChild(contactTitle);
    headerContainer.appendChild(contactText);

    phoneContainer.appendChild(phoneSubtitle);
    phoneContainer.appendChild(phoneNumber);

    emailContainer.appendChild(emailSubtitle);
    emailContainer.appendChild(email);

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
    bannerImage.style.width = '75%';
    bannerImage.style.alignSelf= 'center';
    bannerImage.style.objectFit = 'cover'
    bannerImage.style.filter = 'grayscale(100%)';
    bannerImage.style.marginBottom = '1em';

    //create text elements
    let restaurantHeadline = document.createElement('h1');
    restaurantHeadline.textContent = 'Fine Italian dining';
    restaurantHeadline.style.color = 'x';

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

    //append container elements
    document.getElementById('copyContainer').appendChild(copyTitle);
    document.getElementById('copyContainer').appendChild(copyText);
    document.getElementById('copyContainer').appendChild(bannerImage);
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
        {category:'Starters', item:'Nocellara', price:'4.70', description:'Fresh Queen Nocellara olives from Sicily, with a buttery flavour'},
        {category:'Starters', item:'Bruchetta', price:'4.90', description:'Grilled sourdough bread, rubbed with garlic and topped with fresh Pisanello tomatoes from Tuscany'},
        {category:'Starters', item:'Pane', price:'3.20', description:'Sourdough bread with extra virgin olive oil and balsamic vinegar'},
        {category:'Starters', item:'Burrata', price:'6.30', description:'Full-bodied Apulian buffalo cheese'},
        {category:'Starters', item:'Friarielli', price:'5.50', description:'A variety of broccoli from Napoli, lightly seared and served with homemade bread'},

        {category:'Pizza', item:'Margherita', price:'13.50', description:'San Marzano tomatoes and sliced mozzarella di bufala Campana'},
        {category:'Pizza', item:'Quattro', price:'16.70', description:'San Marzano tomatoes, mozzarella, stracchino, fontina, gorgonzola'},
        {category:'Pizza', item:'Bianca', price:'11.20', description:'Extra virgin olive oil, sea salt flakes and rosemary sprigs'},
        {category:'Pizza', item:'Viennese', price:'13.30', description:'San Marzano tomatoes, mozzarella, n\'duja and oregano'},
        {category:'Pizza', item:'Napolitana', price:'13.90', description:'San Marzano tomatoes, mozzarella di bufala Campana and Agostino Recca anchovies'},

        {category:'Pasta', item:'Cacio', price:'12.10', description:'Tonnarelli (square-cut spaghetti) with salty pecorino romano and black pepper'},
        {category:'Pasta', item:'Ravioli', price:'14.70', description:'Homemade butternut ravioli with brown butter and sage'},
        {category:'Pasta', item:'Tagliatelle', price:'15.30', description:'Fresh basil pesto & pine nuts with tagliatelle'},
        {category:'Pasta', item:'Fettucine', price:'16.20', description:'Fettucine with an earthy black truffle alfredo sauce'},

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
            descriptionItem.textContent = item.description + '. '+ '\u00A0' + item.price;
            
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
topNav.style.position = 'sticky';
topNav.style.top = '0px'
topNav.style.zIndex = '999';

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

//generate the initial page
resetPage();
(0,_generateHomeTab__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDZ0I7O0FBRVc7QUFDQTtBQUNNOztBQUV0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNkNBQUk7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBZTtBQUN2QixNQUFNO0FBQ047QUFDQSxRQUFRLDREQUFlO0FBQ3ZCLE1BQU07QUFDTjtBQUNBLFFBQVEsK0RBQWtCO0FBQzFCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsNERBQWUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2VuZXJhdGVDb250YWN0VGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9nZW5lcmF0ZUhvbWVUYWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2dlbmVyYXRlTWVudVRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbiN0b3BOYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgfVxcblxcbiNsb2dvSW1hZ2Uge1xcbiAgICBvYmplY3QtZml0OmNvbnRhaW47XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNjBweDsgIFxcblxcbn1cXG5cXG4vKiBTdHlsZSB0aGUgbGlua3MgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciAqL1xcbiN0b3BOYXYgYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxOXB4IDE2cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgfVxcbiAgXFxuICAvKiBDaGFuZ2UgdGhlIGNvbG9yIG9mIGxpbmtzIG9uIGhvdmVyICovXFxuICAjdG9wTmF2IGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuICBcXG4gIC8qIEFkZCBhIGNvbG9yIHRvIHRoZSBhY3RpdmUvY3VycmVudCBsaW5rICovXFxuICAjdG9wTmF2IGEuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbiAgLmNvbnRhY3RMaW5rIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkRBQTJEO0lBQzNELHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2Qjs7RUFFL0I7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7O0FBRWhCOztBQUVBLDhDQUE4QztBQUM5QztJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBLHVDQUF1QztFQUN2QztJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0VBRUEsMkNBQTJDO0VBQzNDO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0VBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbiN0b3BOYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgfVxcblxcbiNsb2dvSW1hZ2Uge1xcbiAgICBvYmplY3QtZml0OmNvbnRhaW47XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNjBweDsgIFxcblxcbn1cXG5cXG4vKiBTdHlsZSB0aGUgbGlua3MgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciAqL1xcbiN0b3BOYXYgYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxOXB4IDE2cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgfVxcbiAgXFxuICAvKiBDaGFuZ2UgdGhlIGNvbG9yIG9mIGxpbmtzIG9uIGhvdmVyICovXFxuICAjdG9wTmF2IGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuICBcXG4gIC8qIEFkZCBhIGNvbG9yIHRvIHRoZSBhY3RpdmUvY3VycmVudCBsaW5rICovXFxuICAjdG9wTmF2IGEuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbiAgLmNvbnRhY3RMaW5rIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZ2VuZXJhdGVDb250YWN0VGFiID0gZnVuY3Rpb24gZ2VuZXJhdGVDb250YWN0VGFiKCkge1xuICAgIGxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIC8vY3JlYXRlIGRpdnNcbiAgICBsZXQgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICAgIGhlYWRlckNvbnRhaW5lci5pZCA9ICdoZWFkZXJDb250YWluZXInO1xuICAgIFxuICAgIGxldCBjb250YWN0RGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3REZXRhaWxzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICAgIGNvbnRhY3REZXRhaWxzQ29udGFpbmVyLmlkID0gJ2NvbnRhY3REZXRhaWxzQ29udGFpbmVyJztcblxuICAgIGxldCBwaG9uZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBob25lQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICAgIHBob25lQ29udGFpbmVyLmlkID0gJ3Bob25lQ29udGFpbmVyJztcblxuICAgIGxldCBlbWFpbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVtYWlsQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICAgIGVtYWlsQ29udGFpbmVyLmlkID0gJ2VtYWlsQ29udGFpbmVyJztcblxuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3REZXRhaWxzQ29udGFpbmVyKTtcbiAgICBjb250YWN0RGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZUNvbnRhaW5lcik7XG4gICAgY29udGFjdERldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWxDb250YWluZXIpO1xuXG4gICAgLy9jcmVhdGUgdGV4dCBlbGVtZW50c1xuICAgIGxldCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IGRldGFpbHMnO1xuXG4gICAgbGV0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RUZXh0LnRleHRDb250ZW50ID0gJ1Jlc2VydmF0aW9ucyBieSBwaG9uZSBvciBlbWFpbC4nO1xuXG4gICAgbGV0IHBob25lU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHBob25lU3VidGl0bGUudGV4dENvbnRlbnQgPSAnUGhvbmUgVXMnXG5cbiAgICBsZXQgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnMDEyMzQgNTY3ODkwJztcbiAgICBwaG9uZU51bWJlci5ocmVmID0gJ3RlbDowMTIzNCA1Njc4OTAnO1xuICAgIHBob25lTnVtYmVyLmNsYXNzTmFtZSA9ICdjb250YWN0TGluayc7XG5cbiAgICBsZXQgZW1haWxTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZW1haWxTdWJ0aXRsZS50ZXh0Q29udGVudCA9ICdFbWFpbCBVcydcblxuICAgIGxldCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9ICdoZWxsb0BtZXp6YWRvenppbmEuY28udWsnO1xuICAgIGVtYWlsLmhyZWYgPSAnbWFpbHRvOmhlbGxvQG1lenphZG96emluYS5jby51ayc7XG4gICAgZW1haWwuY2xhc3NOYW1lID0gJ2NvbnRhY3RMaW5rJztcblxuICAgIC8vYXBwZW5kIHRleHQgZWxlbWVudHNcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRleHQpO1xuXG4gICAgcGhvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVTdWJ0aXRsZSk7XG4gICAgcGhvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xuXG4gICAgZW1haWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWxTdWJ0aXRsZSk7XG4gICAgZW1haWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUNvbnRhY3RUYWI7IiwiaW1wb3J0IHBhc3RhSGVhZGVySW1hZ2UgZnJvbSAnLi9pbWFnZXMvcGFzdGEtaGVhZGVyLmpwZyc7XG5cbmNvbnN0IGdlbmVyYXRlSG9tZVRhYiA9IGZ1bmN0aW9uIGdlbmVyYXRlSG9tZVRhYigpIHtcbiAgICBsZXQgZGl2Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAvL2NyZWF0ZSBkaXZzXG5cbiAgICBsZXQgYmFubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFubmVyQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICAgIGJhbm5lckNvbnRhaW5lci5pZCA9ICdiYW5uZXJDb250YWluZXInO1xuICAgIGJhbm5lckNvbnRhaW5lci5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICBiYW5uZXJDb250YWluZXIuc3R5bGUuYm9yZGVyQm90dG9tID0gJ3RoaWNrIHNvbGlkICM1RjYxNjEnO1xuXG4gICAgbGV0IGNvcHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3B5Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICAgIGNvcHlDb250YWluZXIuaWQgPSAnY29weUNvbnRhaW5lcic7XG4gICAgY29weUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGNvcHlDb250YWluZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgIGNvcHlDb250YWluZXIuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgY29weUNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0UxRTBERSc7XG4gICAgY29weUNvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSAnMWVtIDFlbSc7XG5cbiAgICBcbiAgICAvLyBhcHBlbmQgaHRtbCBlbGVtZW50cyB0byBjb250ZW50IGRpdlxuICAgIC8vIGZpcnN0IGFwcGVuZCBkaXZzXG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChiYW5uZXJDb250YWluZXIpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoY29weUNvbnRhaW5lcik7XG5cbiAgICAvL2NyZWF0ZSBjaGlsZCBlbGVtZW50c1xuICAgIC8vY3JlYXRlIG1haW4gaW1hZ2VcbiAgICBsZXQgYmFubmVySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBiYW5uZXJJbWFnZS5zcmMgPSBwYXN0YUhlYWRlckltYWdlO1xuICAgIGJhbm5lckltYWdlLmFsdCA9ICdQaWN0dXJlIG9mIGZyZXNoIHBhc3RhJ1xuICAgIGJhbm5lckltYWdlLnN0eWxlLndpZHRoID0gJzc1JSc7XG4gICAgYmFubmVySW1hZ2Uuc3R5bGUuYWxpZ25TZWxmPSAnY2VudGVyJztcbiAgICBiYW5uZXJJbWFnZS5zdHlsZS5vYmplY3RGaXQgPSAnY292ZXInXG4gICAgYmFubmVySW1hZ2Uuc3R5bGUuZmlsdGVyID0gJ2dyYXlzY2FsZSgxMDAlKSc7XG4gICAgYmFubmVySW1hZ2Uuc3R5bGUubWFyZ2luQm90dG9tID0gJzFlbSc7XG5cbiAgICAvL2NyZWF0ZSB0ZXh0IGVsZW1lbnRzXG4gICAgbGV0IHJlc3RhdXJhbnRIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgcmVzdGF1cmFudEhlYWRsaW5lLnRleHRDb250ZW50ID0gJ0ZpbmUgSXRhbGlhbiBkaW5pbmcnO1xuICAgIHJlc3RhdXJhbnRIZWFkbGluZS5zdHlsZS5jb2xvciA9ICd4JztcblxuICAgIGxldCBjb3B5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvcHlUaXRsZS50ZXh0Q29udGVudCA9ICdUaGUgUmVzdGF1cmFudCc7XG4gICAgY29weVRpdGxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjQzhDN0MzJztcbiAgICBjb3B5VGl0bGUuc3R5bGUubWFyZ2luVG9wID0gJzBweCc7XG5cbiAgICBsZXQgY29weVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29weVRleHQudGV4dENvbnRlbnQgPSAnTWV6emEgRG96emluYSAoXFwnaGFsZi1kb3plblxcJykgaXMgYW4gSXRhbGlhbiByZXN0YXVyYW50IGZvY3VzaW5nIG9uIGZhcm0tZnJlc2ggZm9vZCB3aXRoIGEgbW9kZXJuIHR3aXN0Lic7XG5cbiAgICBsZXQgb3BlbmluZ1RpbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgb3BlbmluZ1RpbWVUaXRsZS50ZXh0Q29udGVudCA9ICdPcGVuaW5nIHRpbWVzOidcblxuICAgIGxldCB3ZWVrZGF5T3BlbmluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2Vla2RheU9wZW5pbmdUZXh0LnRleHRDb250ZW50ID0gJ01vbmRheSB0byBGcmlkYXk6IDZwbSB0byAxMXBtJztcblxuICAgIGxldCBzYXR1cmRheU9wZW5pbmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNhdHVyZGF5T3BlbmluZ1RleHQudGV4dENvbnRlbnQgPSAnU2F0dXJkYXk6IDVwbSB0byAxMnBtJztcblxuICAgIGxldCBzdW5kYXlPcGVuaW5nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdW5kYXlPcGVuaW5nVGV4dC50ZXh0Q29udGVudCA9ICdTdW5kYXk6IENsb3NlZCc7XG5cbiAgICAvL2FwcGVuZCBiYW5uZXIgZWxlbWVudHNcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFubmVyQ29udGFpbmVyJykuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEhlYWRsaW5lKTtcblxuICAgIC8vYXBwZW5kIGNvbnRhaW5lciBlbGVtZW50c1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY29weVRpdGxlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNvcHlUZXh0KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGJhbm5lckltYWdlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKG9wZW5pbmdUaW1lVGl0bGUpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQod2Vla2RheU9wZW5pbmdUZXh0KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHNhdHVyZGF5T3BlbmluZ1RleHQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoc3VuZGF5T3BlbmluZ1RleHQpO1xuXG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVIb21lVGFiOyIsImNvbnN0IGdlbmVyYXRlTWVudVRhYiA9IGZ1bmN0aW9uIGdlbmVyYXRlTWVudVRhYigpIHtcbiAgICBsZXQgZGl2Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAvL2NyZWF0ZSBkaXZzXG5cbiAgICBsZXQgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICAgIGhlYWRlckNvbnRhaW5lci5pZCA9ICdoZWFkZXJDb250YWluZXInO1xuXG4gICAgbGV0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICAgIG1lbnVDb250YWluZXIuaWQgPSAnbWVudUNvbnRhaW5lcic7XG5cbiAgICBcbiAgICAvLyBhcHBlbmQgaHRtbCBlbGVtZW50cyB0byBjb250ZW50IGRpdlxuICAgIC8vIGZpcnN0IGFwcGVuZCBkaXZzXG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuXG4gICAgLy9jcmVhdGUgY2hpbGQgZWxlbWVudHNcblxuICAgIC8vY3JlYXRlIHRleHQgZWxlbWVudHNcbiAgICBsZXQgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSAnT3VyIG1lbnUnO1xuXG4gICAgLy9hcHBlbmQgdGV4dCBlbGVtZW50c1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcblxuICAgIC8vY3JlYXRlIGFycmF5IG9mIG1lbnUgaXRlbSBvYmplY3RzXG5cbiAgICBsZXQgbWVudUl0ZW1zID0gW1xuICAgICAgICB7Y2F0ZWdvcnk6J1N0YXJ0ZXJzJywgaXRlbTonTm9jZWxsYXJhJywgcHJpY2U6JzQuNzAnLCBkZXNjcmlwdGlvbjonRnJlc2ggUXVlZW4gTm9jZWxsYXJhIG9saXZlcyBmcm9tIFNpY2lseSwgd2l0aCBhIGJ1dHRlcnkgZmxhdm91cid9LFxuICAgICAgICB7Y2F0ZWdvcnk6J1N0YXJ0ZXJzJywgaXRlbTonQnJ1Y2hldHRhJywgcHJpY2U6JzQuOTAnLCBkZXNjcmlwdGlvbjonR3JpbGxlZCBzb3VyZG91Z2ggYnJlYWQsIHJ1YmJlZCB3aXRoIGdhcmxpYyBhbmQgdG9wcGVkIHdpdGggZnJlc2ggUGlzYW5lbGxvIHRvbWF0b2VzIGZyb20gVHVzY2FueSd9LFxuICAgICAgICB7Y2F0ZWdvcnk6J1N0YXJ0ZXJzJywgaXRlbTonUGFuZScsIHByaWNlOiczLjIwJywgZGVzY3JpcHRpb246J1NvdXJkb3VnaCBicmVhZCB3aXRoIGV4dHJhIHZpcmdpbiBvbGl2ZSBvaWwgYW5kIGJhbHNhbWljIHZpbmVnYXInfSxcbiAgICAgICAge2NhdGVnb3J5OidTdGFydGVycycsIGl0ZW06J0J1cnJhdGEnLCBwcmljZTonNi4zMCcsIGRlc2NyaXB0aW9uOidGdWxsLWJvZGllZCBBcHVsaWFuIGJ1ZmZhbG8gY2hlZXNlJ30sXG4gICAgICAgIHtjYXRlZ29yeTonU3RhcnRlcnMnLCBpdGVtOidGcmlhcmllbGxpJywgcHJpY2U6JzUuNTAnLCBkZXNjcmlwdGlvbjonQSB2YXJpZXR5IG9mIGJyb2Njb2xpIGZyb20gTmFwb2xpLCBsaWdodGx5IHNlYXJlZCBhbmQgc2VydmVkIHdpdGggaG9tZW1hZGUgYnJlYWQnfSxcblxuICAgICAgICB7Y2F0ZWdvcnk6J1BpenphJywgaXRlbTonTWFyZ2hlcml0YScsIHByaWNlOicxMy41MCcsIGRlc2NyaXB0aW9uOidTYW4gTWFyemFubyB0b21hdG9lcyBhbmQgc2xpY2VkIG1venphcmVsbGEgZGkgYnVmYWxhIENhbXBhbmEnfSxcbiAgICAgICAge2NhdGVnb3J5OidQaXp6YScsIGl0ZW06J1F1YXR0cm8nLCBwcmljZTonMTYuNzAnLCBkZXNjcmlwdGlvbjonU2FuIE1hcnphbm8gdG9tYXRvZXMsIG1venphcmVsbGEsIHN0cmFjY2hpbm8sIGZvbnRpbmEsIGdvcmdvbnpvbGEnfSxcbiAgICAgICAge2NhdGVnb3J5OidQaXp6YScsIGl0ZW06J0JpYW5jYScsIHByaWNlOicxMS4yMCcsIGRlc2NyaXB0aW9uOidFeHRyYSB2aXJnaW4gb2xpdmUgb2lsLCBzZWEgc2FsdCBmbGFrZXMgYW5kIHJvc2VtYXJ5IHNwcmlncyd9LFxuICAgICAgICB7Y2F0ZWdvcnk6J1BpenphJywgaXRlbTonVmllbm5lc2UnLCBwcmljZTonMTMuMzAnLCBkZXNjcmlwdGlvbjonU2FuIE1hcnphbm8gdG9tYXRvZXMsIG1venphcmVsbGEsIG5cXCdkdWphIGFuZCBvcmVnYW5vJ30sXG4gICAgICAgIHtjYXRlZ29yeTonUGl6emEnLCBpdGVtOidOYXBvbGl0YW5hJywgcHJpY2U6JzEzLjkwJywgZGVzY3JpcHRpb246J1NhbiBNYXJ6YW5vIHRvbWF0b2VzLCBtb3p6YXJlbGxhIGRpIGJ1ZmFsYSBDYW1wYW5hIGFuZCBBZ29zdGlubyBSZWNjYSBhbmNob3ZpZXMnfSxcblxuICAgICAgICB7Y2F0ZWdvcnk6J1Bhc3RhJywgaXRlbTonQ2FjaW8nLCBwcmljZTonMTIuMTAnLCBkZXNjcmlwdGlvbjonVG9ubmFyZWxsaSAoc3F1YXJlLWN1dCBzcGFnaGV0dGkpIHdpdGggc2FsdHkgcGVjb3Jpbm8gcm9tYW5vIGFuZCBibGFjayBwZXBwZXInfSxcbiAgICAgICAge2NhdGVnb3J5OidQYXN0YScsIGl0ZW06J1JhdmlvbGknLCBwcmljZTonMTQuNzAnLCBkZXNjcmlwdGlvbjonSG9tZW1hZGUgYnV0dGVybnV0IHJhdmlvbGkgd2l0aCBicm93biBidXR0ZXIgYW5kIHNhZ2UnfSxcbiAgICAgICAge2NhdGVnb3J5OidQYXN0YScsIGl0ZW06J1RhZ2xpYXRlbGxlJywgcHJpY2U6JzE1LjMwJywgZGVzY3JpcHRpb246J0ZyZXNoIGJhc2lsIHBlc3RvICYgcGluZSBudXRzIHdpdGggdGFnbGlhdGVsbGUnfSxcbiAgICAgICAge2NhdGVnb3J5OidQYXN0YScsIGl0ZW06J0ZldHR1Y2luZScsIHByaWNlOicxNi4yMCcsIGRlc2NyaXB0aW9uOidGZXR0dWNpbmUgd2l0aCBhbiBlYXJ0aHkgYmxhY2sgdHJ1ZmZsZSBhbGZyZWRvIHNhdWNlJ30sXG5cbiAgICAgXTtcblxuICAgICAvL2RlZmluZSBhIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBtZW51IGRpdnMsIHdoaWNoIHdpbGwgaG9sZCB0aGUgbWVudSBpdGVtcyBpbiBzZXBhcmF0ZSBjYXRlZ29yaWVzXG4gICAgIGNvbnN0IGdlbmVyYXRlTWVudURpdnMgPSBmdW5jdGlvbiBnZW5lcmF0ZU1lbnVEaXZzKCkge1xuICAgICAgICAvL2dldCBhIHVuaXF1ZSBzZXQgb2YgbWVudSBjYXRlZ29yaWVzXG4gICAgICAgIGxldCB1bmlxdWVDYXRlZ29yaWVzID0gWy4uLm5ldyBTZXQobWVudUl0ZW1zLm1hcChpdGVtID0+IGl0ZW0uY2F0ZWdvcnkpKV07XG5cbiAgICAgICAgLy9jcmVhdGUgYW5kIGFwcGVuZCBhIGRpdiBmb3IgZWFjaCBtZW51IGNhdGVnb3J5XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB1bmlxdWVDYXRlZ29yaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSB1bmlxdWVDYXRlZ29yaWVzW2luZGV4XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9jcmVhdGUgZmxleGJveCBlbGVtZW50XG4gICAgICAgICAgICBsZXQgbmV3RmxleGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3RmxleGJveC5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcbiAgICAgICAgICAgIG5ld0ZsZXhib3guaWQgPSBjYXRlZ29yeSArJ0NvbnRhaW5lcic7XG4gICAgICAgICAgICAvL3NldCBmbGV4Ym94IGNzc1xuICAgICAgICAgICAgbmV3RmxleGJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgbmV3RmxleGJveC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbidcbiAgICAgICAgICAgIG5ld0ZsZXhib3guc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYXJvdW5kJztcblxuICAgICAgICAgICAgLy9hcHBlbmQgZmxleGJveCBlbGVtZW50XG4gICAgICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0ZsZXhib3gpO1xuICAgICAgICB9XG4gICAgfTtcblxuZ2VuZXJhdGVNZW51RGl2cygpO1xuXG4gICAgLy9wb3B1bGF0ZSB0YWJsZSB3aXRoIG1lbnUgaXRlbXNcbiAgICBjb25zdCBwb3B1bGF0ZVRhYmxlID0gZnVuY3Rpb24gcG9wdWxhdGVUYWJsZSgpIHsgXG4gICAgICAgIHZhciBmbGV4Ym94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVDb250YWluZXInKTtcblxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIG1lbnVJdGVtcykge1xuICAgICAgICAgICAgdmFyIG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgLy8gc2V0IHRoZSBpZCBvZiB0aGUgZGl2IGFzIHRoZSBvYmplY3QgaW5kZXhcbiAgICAgICAgICAgIG5ld0Rpdi5pZCA9IG1lbnVJdGVtcy5pbmRleE9mKGl0ZW0pLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIC8vc3R5bGUgdGhlIG5ldyBkaXZcblxuICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBuZXdEaXYuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgICAgICAgbmV3RGl2LmNsYXNzTmFtZSA9IGl0ZW0uY2F0ZWdvcnk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vYXBwZW5kIHRoZSBuZXcgZGl2XG4gICAgICAgICAgICBsZXQgdGFyZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5jYXRlZ29yeSArICdDb250YWluZXInKTtcbiAgICAgICAgICAgIHRhcmdldENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2FkZCB0aGUgdGV4dCBlbGVtZW50cyB0byB0aGUgbmV3IGRpdlxuICAgICAgICAgICAgbGV0IGNhdGVnb3J5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgY2F0ZWdvcnlUaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0uY2F0ZWdvcnk7XG5cbiAgICAgICAgICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBtZW51SXRlbS50ZXh0Q29udGVudCA9IGl0ZW0uaXRlbTtcblxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSXRlbS50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb24gKyAnLiAnKyAnXFx1MDBBMCcgKyBpdGVtLnByaWNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2FwcGVuZCB0aGUgdGV4dCBlbGVtZW50c1xuXG4gICAgICAgICAgICAvL2lmIHRoZSBuZXcgbWVudSBlbnRyeSBpcyB0aGUgZmlyc3QsIGFsc28gYWRkIHRoZSBjYXRlZ29yeSB0aXRsZVxuICAgICAgICAgICAgaWYgKG5ld0RpdiA9PSB0YXJnZXRDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlUaXRsZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgICAgICAgICAgdGFyZ2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSXRlbSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8vcG9wdWxhdGUgZmxleGJveCBkaXZzXG4gICAgcG9wdWxhdGVUYWJsZSgpO1xuICAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVNZW51VGFiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2ltYWdlcy9sb2dvLnBuZyc7XG5cbmltcG9ydCBnZW5lcmF0ZUhvbWVUYWIgZnJvbSAnLi9nZW5lcmF0ZUhvbWVUYWInO1xuaW1wb3J0IGdlbmVyYXRlTWVudVRhYiBmcm9tICcuL2dlbmVyYXRlTWVudVRhYic7XG5pbXBvcnQgZ2VuZXJhdGVDb250YWN0VGFiIGZyb20gJy4vZ2VuZXJhdGVDb250YWN0VGFiJztcblxubGV0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4vL2NyZWF0ZSBkaXZzXG5sZXQgdG9wTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50b3BOYXYuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG50b3BOYXYuaWQgPSAndG9wTmF2JztcbnRvcE5hdi5zdHlsZS5wb3NpdGlvbiA9ICdzdGlja3knO1xudG9wTmF2LnN0eWxlLnRvcCA9ICcwcHgnXG50b3BOYXYuc3R5bGUuekluZGV4ID0gJzk5OSc7XG5cbi8vY3JlYXRlIGNoaWxkIGVsZW1lbnRzXG5cbi8vY3JlYXRlIGxvZ28gYW5kIHNldCBzb3VyY2UgaW1hZ2UvYWx0XG5sZXQgbG9nb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5sb2dvSW1hZ2UuaWQgPSAnbG9nb0ltYWdlJztcbmxvZ29JbWFnZS5zcmMgPSBsb2dvO1xubG9nb0ltYWdlLmFsdCA9ICdSZXN0YXVyYW50IGxvZ28nXG5cbi8vY3JlYXRlIHRvcE5hdiBsaW5rcyBhbmQgc2V0IGNsYXNzZXMsIGhyZWZzXG5sZXQgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5ob21lTGluay5pZCA9ICdob21lTGluayc7XG5ob21lTGluay5ocmVmID0gJyNob21lJztcbmhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuXG5sZXQgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5tZW51TGluay5pZCA9ICdtZW51TGluayc7XG5tZW51TGluay5ocmVmID0gJyNtZW51Jztcbm1lbnVMaW5rLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG5sZXQgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5jb250YWN0TGluay5pZCA9ICdjb250YWN0TGluayc7XG5jb250YWN0TGluay5ocmVmID0gJyNjb250YWN0JztcbmNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4vL2RlZmluZSBhIGZ1bmN0aW9uIHRvIHJlc2V0IHBhZ2UgdG8gYWJvdmUgc3RhdGVcbmNvbnN0IHJlc2V0UGFnZSA9IGZ1bmN0aW9uIHJlc2V0UGFnZSgpIHtcbiAgICAvL2RlbGV0ZSBhbGwgZWxlbWVudHNcbiAgICB3aGlsZSAoZGl2Q29udGVudC5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIGRpdkNvbnRlbnQucmVtb3ZlQ2hpbGQoZGl2Q29udGVudC5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgIH07XG4gICAgXG4gICAgLy8gYXBwZW5kIGh0bWwgZWxlbWVudHMgdG8gY29udGVudCBkaXZcbiAgICAvLyBmaXJzdCBhcHBlbmQgZGl2c1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQodG9wTmF2KTtcblxuICAgIC8vdGhlbiBhcHBlbmQgb3RoZXIgZWxlbWVudHMgdG8gJ3N1Yi1kaXZzJ1xuICAgIC8vYXBwZW5kIHRvcE5hdiBlbGVtZW50c1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3BOYXYnKS5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3BOYXYnKS5hcHBlbmRDaGlsZChob21lTGluayk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcE5hdicpLmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wTmF2JykuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xufTtcblxuLy9hZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGFsbCB0b3BOYXYgbGlua3NcbnRvcE5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGlzTGluayA9IGV2ZW50LnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJztcbiAgICBpZiAoaXNMaW5rICYmIGV2ZW50LnRhcmdldC5pZCA9PT0gJ2hvbWVMaW5rJykge1xuICAgICAgICByZXNldFBhZ2UoKTtcbiAgICAgICAgZ2VuZXJhdGVIb21lVGFiKCk7XG4gICAgfSBlbHNlIGlmIChpc0xpbmsgJiYgZXZlbnQudGFyZ2V0LmlkID09PSAnbWVudUxpbmsnKSB7XG4gICAgICAgIHJlc2V0UGFnZSgpO1xuICAgICAgICBnZW5lcmF0ZU1lbnVUYWIoKTtcbiAgICB9IGVsc2UgaWYgKGlzTGluayAmJiBldmVudC50YXJnZXQuaWQgPT09ICdjb250YWN0TGluaycpIHtcbiAgICAgICAgcmVzZXRQYWdlKCk7XG4gICAgICAgIGdlbmVyYXRlQ29udGFjdFRhYigpO1xuICAgIH07XG59KTtcblxuLy9nZW5lcmF0ZSB0aGUgaW5pdGlhbCBwYWdlXG5yZXNldFBhZ2UoKTtcbmdlbmVyYXRlSG9tZVRhYigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==