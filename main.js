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
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  height: 75px;
  display: grid;
  justify-content: center;
  align-content: end;
}

.navbar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  align-content: center;
  height: 40px;
}

.container {
  display: grid;
  justify-content: center;
}

.main-home, 
.main {
  width: 700px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
}

.main-home {
  text-align: center;
  justify-content: center;
  height: 60vh;
}

.card {
  width: 275px;
}

.blurb {
  font-size: 35px;
  margin-bottom: 20px;
}

button {
  margin: 0;
  height: 40px;
  width: 120px;
  font-size: 1.2rem;
}

h1,
h2 {
  text-align: center;
}

.options {
  display: grid;
  gap: 40px;
  margin: 30px auto;
}

.menu-btn {
  width: 200px;
  height: 55px;
}

.learn {
  width: 200px;
  height: 60px;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,uBAAuB;EACvB,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd","sourcesContent":[".header {\n  height: 75px;\n  display: grid;\n  justify-content: center;\n  align-content: end;\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  justify-content: center;\n  align-content: center;\n  height: 40px;\n}\n\n.container {\n  display: grid;\n  justify-content: center;\n}\n\n.main-home, \n.main {\n  width: 700px;\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n  align-items: center;\n}\n\n.main-home {\n  text-align: center;\n  justify-content: center;\n  height: 60vh;\n}\n\n.card {\n  width: 275px;\n}\n\n.blurb {\n  font-size: 35px;\n  margin-bottom: 20px;\n}\n\nbutton {\n  margin: 0;\n  height: 40px;\n  width: 120px;\n  font-size: 1.2rem;\n}\n\nh1,\nh2 {\n  text-align: center;\n}\n\n.options {\n  display: grid;\n  gap: 40px;\n  margin: 30px auto;\n}\n\n.menu-btn {\n  width: 200px;\n  height: 55px;\n}\n\n.learn {\n  width: 200px;\n  height: 60px;\n}\n\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
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



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
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
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadAbout: () => (/* binding */ loadAbout)
/* harmony export */ });
const loadAbout = () => {
    const container = document.querySelector(".container");
    while (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
    const main = document.createElement("div");
    main.classList.add("main");
    container.appendChild(main);
    const header = document.createElement("h1");
    header.textContent = "About";
    main.appendChild(header);
    const info = document.createElement("div");
    info.classList.add("info");
    main.appendChild(info);
    const p1 = document.createElement("p");
    p1.textContent = "The Leaky Cauldron was built in the 1500s by Daisy Dodderidge. Its true address is number one Diagon Alley, and it is believed to have been built along with the rest of the wizarding street.";
    info.appendChild(p1);
    const p2 = document.createElement("p");
    p2.textContent = "With the imposition of the International Statute of Wizarding Secrecy in 1692, Minister Ulick Gamp permitted the pub to continue its existence as a safe haven and refuge for members of the magical community.";
    info.appendChild(p2);
    const p3 = document.createElement("p");
    p3.textContent = "Gamp was sympathetic to the need of wizards to let off steam during this difficult time, and further agreed to give the landlord permission to let people into Diagon Alley from his backyard, because the shops behind the Leaky Cauldron were now also in need of protection.";
    info.appendChild(p3);
    const p4 = document.createElement("p");
    p4.textContent = "Many moons later, The Leaky Cauldron remains the ideal spot to catch up with wizarding gossip or relax after a day of shopping. We hope you'll join us!";
    info.appendChild(p4);
    const footer = document.createElement("p");
    footer.innerHTML = "Information courtesy of <a href='https://harrypotter.fandom.com/wiki/Leaky_Cauldron/'>The Wiki</a>.";
    info.appendChild(footer);
  }

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContact: () => (/* binding */ loadContact)
/* harmony export */ });
const loadContact = () => {
  const container = document.querySelector(".container");
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
  const main = document.createElement("div");
  main.classList.add("main");
  container.appendChild(main);
  const header = document.createElement("h1");
  header.textContent = "Contact";
  main.appendChild(header);
  const intro = document.createElement("p");
  intro.textContent = "You are welcome to leave us a message here, but the Muggle internet does not work very often, so please forgive us if we do not respond in a timely manner. -Tom";
  main.appendChild(intro);

  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "submit.php");
  const br = document.createElement("br");

  const name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("name", "name");
  name.setAttribute("placeholder", "Name");

  const email = document.createElement("input");
  email.setAttribute("type", "email");
  email.setAttribute("name", "email");
  email.setAttribute("placeholder", "Email");

  const message = document.createElement("textarea");
  message.setAttribute("name", "message");
  message.setAttribute("placeholder", "Your message here");

  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit");
  submit.textContent = "Submit";

  form.appendChild(name);
  form.appendChild(br.cloneNode());
  form.appendChild(email);
  form.appendChild(br.cloneNode());
  form.appendChild(message);
  form.appendChild(br.cloneNode());
  form.appendChild(submit);

  main.appendChild(form);

  const info = document.createElement("div");
  const info1 = document.createElement("p");
  info1.textContent = "Phone: +44 7341 123456";
  info.appendChild(info1);
  info.appendChild(br.cloneNode());
  const info2 = document.createElement("p");
  info2.textContent = "Address: 753 Charing Cross Road";
  info.appendChild(info2);
  main.appendChild(info);

};

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHome: () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ "./src/about.js");


const loadHome = () => {
  const container = document.querySelector(".container");
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
  const main = document.createElement("div");
  main.classList.add("main-home");
  container.appendChild(main);
  const heading = document.createElement("h1");
  heading.textContent = "The Leaky Cauldron";
  main.appendChild(heading);
  const blurb = document.createElement("div");
  blurb.classList.add("blurb");
  blurb.textContent = "First-rate food, drink, and living quarters for the travelling witch or wizard, or simply those heading to Diagon Alley";
  main.appendChild(blurb);
  const learn = document.createElement("button");
  learn.classList.add("learn");
  learn.textContent = "Learn More";
  learn.addEventListener("click", () => {
    (0,_about_js__WEBPACK_IMPORTED_MODULE_0__.loadAbout)();
  })
  main.appendChild(learn);
};

/***/ }),

/***/ "./src/menu-pages/beverages.js":
/*!*************************************!*\
  !*** ./src/menu-pages/beverages.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadBeverages: () => (/* binding */ loadBeverages)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu.js */ "./src/menu.js");


const loadBeverages = () => {
    const container = document.querySelector(".container");
    while (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
    const main = document.createElement("div");
    main.classList.add("main");
    container.appendChild(main);
    const header = document.createElement("h2");
    header.textContent = "Beverages";
    main.appendChild(header);

    const card1 = document.createElement("div");
    const info1 = document.createElement("div");
    card1.classList.add("card");
    info1.classList.add("info");
    card1.appendChild(info1);
    const head1 = document.createElement("h3");
    head1.textContent = "Tea and Crumpets";
    info1.appendChild(head1);
    const blurb1 = document.createElement("p");
    blurb1.textContent = "This is a description.";
    info1.appendChild(blurb1);
    main.appendChild(card1);

    const card2 = document.createElement("div");
    const info2 = document.createElement("div");
    card2.classList.add("card");
    info2.classList.add("info");
    card2.appendChild(info2);
    const head2 = document.createElement("h3");
    head2.textContent = "Gillywater";
    info2.appendChild(head2);
    const blurb2 = document.createElement("p");
    blurb2.textContent = "This is a description.";
    info2.appendChild(blurb2);
    main.appendChild(card2);

    const card3 = document.createElement("div");
    const info3 = document.createElement("div");
    card3.classList.add("card");
    info3.classList.add("info");
    card3.appendChild(info3);
    const head3 = document.createElement("h3");
    head3.textContent = "Butterbeer";
    info3.appendChild(head3);
    const blurb3 = document.createElement("p");
    blurb3.textContent = "This is a description.";
    info3.appendChild(blurb3);
    main.appendChild(card3);

    const card4 = document.createElement("div");
    const info4 = document.createElement("div");
    card4.classList.add("card");
    info4.classList.add("info");
    card4.appendChild(info4);
    const head4 = document.createElement("h3");
    head4.textContent = "Pumpkin Juice";
    info4.appendChild(head4);
    const blurb4 = document.createElement("p");
    blurb4.textContent = "This is a description.";
    info4.appendChild(blurb4);
    main.appendChild(card4);

    const card5 = document.createElement("div");
    const info5 = document.createElement("div");
    card5.classList.add("card");
    info5.classList.add("info");
    card5.appendChild(info5);
    const head5 = document.createElement("h3");
    head5.textContent = "Mead";
    info5.appendChild(head5);
    const blurb5 = document.createElement("p");
    blurb5.textContent = "This is a description.";
    info5.appendChild(blurb5);
    main.appendChild(card5);

    const mainmenu = document.createElement("button");
    mainmenu.textContent = "Main Menu";
    mainmenu.addEventListener("click", () => {
      (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.loadMenu)();
    })
    main.appendChild(mainmenu);
  }

/***/ }),

/***/ "./src/menu-pages/desserts.js":
/*!************************************!*\
  !*** ./src/menu-pages/desserts.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadDesserts: () => (/* binding */ loadDesserts)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu.js */ "./src/menu.js");


const loadDesserts = () => {
    const container = document.querySelector(".container");
    while (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
    const main = document.createElement("div");
    main.classList.add("main");
    container.appendChild(main);
    const header = document.createElement("h2");
    header.textContent = "Desserts";
    main.appendChild(header);

    const card1 = document.createElement("div");
    const info1 = document.createElement("div");
    card1.classList.add("card");
    info1.classList.add("info");
    card1.appendChild(info1);
    const head1 = document.createElement("h3");
    head1.textContent = "Spotted Dick";
    info1.appendChild(head1);
    const blurb1 = document.createElement("p");
    blurb1.textContent = "This is a description.";
    info1.appendChild(blurb1);
    main.appendChild(card1);

    const card2 = document.createElement("div");
    const info2 = document.createElement("div");
    card2.classList.add("card");
    info2.classList.add("info");
    card2.appendChild(info2);
    const head2 = document.createElement("h3");
    head2.textContent = "Treacle Tart";
    info2.appendChild(head2);
    const blurb2 = document.createElement("p");
    blurb2.textContent = "This is a description.";
    info2.appendChild(blurb2);
    main.appendChild(card2);

    const card3 = document.createElement("div");
    const info3 = document.createElement("div");
    card3.classList.add("card");
    info3.classList.add("info");
    card3.appendChild(info3);
    const head3 = document.createElement("h3");
    head3.textContent = "Chocolate Pudding";
    info3.appendChild(head3);
    const blurb3 = document.createElement("p");
    blurb3.textContent = "This is a description.";
    info3.appendChild(blurb3);
    main.appendChild(card3);

    const card4 = document.createElement("div");
    const info4 = document.createElement("div");
    card4.classList.add("card");
    info4.classList.add("info");
    card4.appendChild(info4);
    const head4 = document.createElement("h3");
    head4.textContent = "Jam Doughnuts";
    info4.appendChild(head4);
    const blurb4 = document.createElement("p");
    blurb4.textContent = "This is a description.";
    info4.appendChild(blurb4);
    main.appendChild(card4);

    const mainmenu = document.createElement("button");
    mainmenu.textContent = "Main Menu";
    mainmenu.addEventListener("click", () => {
      (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.loadMenu)();
    })
    main.appendChild(mainmenu);
  }

/***/ }),

/***/ "./src/menu-pages/dishes.js":
/*!**********************************!*\
  !*** ./src/menu-pages/dishes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadDishes: () => (/* binding */ loadDishes)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu.js */ "./src/menu.js");


const loadDishes = () => {
    const container = document.querySelector(".container");
    while (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
    const main = document.createElement("div");
    main.classList.add("main");
    container.appendChild(main);
    const header = document.createElement("h2");
    header.textContent = "Signature Dishes";
    main.appendChild(header);

    const card1 = document.createElement("div");
    const info1 = document.createElement("div");
    card1.classList.add("card");
    info1.classList.add("info");
    card1.appendChild(info1);
    const head1 = document.createElement("h3");
    head1.textContent = "Bangers and Mash";
    info1.appendChild(head1);
    const blurb1 = document.createElement("p");
    blurb1.textContent = "This is a description.";
    info1.appendChild(blurb1);
    main.appendChild(card1);

    const card2 = document.createElement("div");
    const info2 = document.createElement("div");
    card2.classList.add("card");
    info2.classList.add("info");
    card2.appendChild(info2);
    const head2 = document.createElement("h3");
    head2.textContent = "Steak and Kidney Pie";
    info2.appendChild(head2);
    const blurb2 = document.createElement("p");
    blurb2.textContent = "This is a description.";
    info2.appendChild(blurb2);
    main.appendChild(card2);

    const card3 = document.createElement("div");
    const info3 = document.createElement("div");
    card3.classList.add("card");
    info3.classList.add("info");
    card3.appendChild(info3);
    const head3 = document.createElement("h3");
    head3.textContent = "Pea Soup";
    info3.appendChild(head3);
    const blurb3 = document.createElement("p");
    blurb3.textContent = "This is a description.";
    info3.appendChild(blurb3);
    main.appendChild(card3);

    const card4 = document.createElement("div");
    const info4 = document.createElement("div");
    card4.classList.add("card");
    info4.classList.add("info");
    card4.appendChild(info4);
    const head4 = document.createElement("h3");
    head4.textContent = "Yorkshire Pudding";
    info4.appendChild(head4);
    const blurb4 = document.createElement("p");
    blurb4.textContent = "This is a description.";
    info4.appendChild(blurb4);
    main.appendChild(card4);

    const card5 = document.createElement("div");
    const info5 = document.createElement("div");
    card5.classList.add("card");
    info5.classList.add("info");
    card5.appendChild(info5);
    const head5 = document.createElement("h3");
    head5.textContent = "Shepherds Pie";
    info5.appendChild(head5);
    const blurb5 = document.createElement("p");
    blurb5.textContent = "This is a description.";
    info5.appendChild(blurb5);
    main.appendChild(card5);

    const card6 = document.createElement("div");
    const info6 = document.createElement("div");
    card6.classList.add("card");
    info6.classList.add("info");
    card6.appendChild(info6);
    const head6 = document.createElement("h3");
    head6.textContent = "Toad in the Hole";
    info6.appendChild(head6);
    const blurb6 = document.createElement("p");
    blurb6.textContent = "This is a description.";
    info6.appendChild(blurb6);
    main.appendChild(card6);

    const mainmenu = document.createElement("button");
    mainmenu.textContent = "Main Menu";
    mainmenu.addEventListener("click", () => {
      (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.loadMenu)();
    })
    main.appendChild(mainmenu);
  }

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _menu_pages_beverages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-pages/beverages.js */ "./src/menu-pages/beverages.js");
/* harmony import */ var _menu_pages_dishes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-pages/dishes.js */ "./src/menu-pages/dishes.js");
/* harmony import */ var _menu_pages_desserts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-pages/desserts.js */ "./src/menu-pages/desserts.js");





const loadMenu = () => {
  const container = document.querySelector(".container");
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
  const main = document.createElement("div");
  main.classList.add("main");
  container.appendChild(main);
  const header = document.createElement("h1");
  header.textContent = "Menu";
  main.appendChild(header);
  const options = document.createElement("div");
  options.classList.add("options");
  main.appendChild(options);
  const beverages = document.createElement("button");
  beverages.classList.add("menu-btn");
  beverages.textContent = "Beverages";
  beverages.addEventListener("click", () => {
    (0,_menu_pages_beverages_js__WEBPACK_IMPORTED_MODULE_0__.loadBeverages)();
  })
  options.appendChild(beverages);
  const dishes = document.createElement("button");
  dishes.classList.add("menu-btn");
  dishes.textContent = "Signature Dishes";
  dishes.addEventListener("click", () => {
    (0,_menu_pages_dishes_js__WEBPACK_IMPORTED_MODULE_1__.loadDishes)();
  })
  options.appendChild(dishes);
  const desserts = document.createElement("button");
  desserts.classList.add("menu-btn");
  desserts.textContent = "Desserts";
  desserts.addEventListener("click", () => {
    (0,_menu_pages_desserts_js__WEBPACK_IMPORTED_MODULE_2__.loadDesserts)();
  })
  options.appendChild(desserts);
}

/***/ }),

/***/ "./src/site.js":
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadSite: () => (/* binding */ loadSite)
/* harmony export */ });
const loadSite = (() => {
  const content = document.getElementById("content");
  const header = document.createElement("div");
  header.classList.add("header");
  content.appendChild(header);
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  header.appendChild(navbar);
  const home = document.createElement("button");
  home.classList.add("home");
  home.textContent = "Home";
  navbar.appendChild(home);
  const menu = document.createElement("button");
  menu.classList.add("menu");
  menu.textContent = "Menu";
  navbar.appendChild(menu);
  const about = document.createElement("button");
  about.classList.add("about");
  about.textContent = "About";
  navbar.appendChild(about);
  const contact = document.createElement("button");
  contact.classList.add("contact");
  contact.textContent = "Contact";
  navbar.appendChild(contact);
  const container = document.createElement("div");
  container.classList.add("container");
  content.appendChild(container);
  const main = document.createElement("div");
  main.classList.add("main-home");
  container.appendChild(main);
  const heading = document.createElement("h1");
  heading.textContent = "The Leaky Cauldron";
  main.appendChild(heading);
  const blurb = document.createElement("div");
  blurb.classList.add("blurb");
  blurb.textContent = "First-rate food, drink, and living quarters for the travelling witch or wizard, or simply those heading to Diagon Alley";
  main.appendChild(blurb);
  const learn = document.createElement("button");
  learn.classList.add("learn");
  learn.textContent = "Learn More";
  main.appendChild(learn);
})();

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _site_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site.js */ "./src/site.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
console.log("Everything is linked.");

 







// loadContact();

const contact = document.querySelector(".contact");
contact.addEventListener("click", () => {
  (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__.loadContact)();
})

const home = document.querySelector(".home");
home.addEventListener("click", () => {
  (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.loadHome)();
})

const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.loadMenu)();
})

const learn = document.querySelector(".learn");
learn.addEventListener("click", () => {
  (0,_about_js__WEBPACK_IMPORTED_MODULE_4__.loadAbout)();
})

const about = document.querySelector(".about");
about.addEventListener("click", () => {
  (0,_about_js__WEBPACK_IMPORTED_MODULE_4__.loadAbout)();
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNEdUM7O0FBRWhDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBUztBQUNiLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QnNDOztBQUUvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrREFBUTtBQUNkLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyRnNDOztBQUUvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtEQUFRO0FBQ2QsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hFc0M7O0FBRS9CO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrREFBUTtBQUNkLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHMEQ7QUFDTjtBQUNJOzs7QUFHakQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBYTtBQUNqQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQVU7QUFDZCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQVk7QUFDaEIsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeENPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7VUN6Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUEsQ0FBc0M7O0FBRUs7QUFDTjtBQUNEO0FBQ0c7QUFDbEI7O0FBRXJCOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHdEQUFXO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxrREFBUTtBQUNWLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsa0RBQVE7QUFDVixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLG9EQUFTO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxvREFBUztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXBhZ2VzL2JldmVyYWdlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1wYWdlcy9kZXNzZXJ0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1wYWdlcy9kaXNoZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVhZGVyIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogZW5kO1xufVxuXG4ubmF2YmFyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1haW4taG9tZSwgXG4ubWFpbiB7XG4gIHdpZHRoOiA3MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW4taG9tZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNjB2aDtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMjc1cHg7XG59XG5cbi5ibHVyYiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmgxLFxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA0MHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuLm1lbnUtYnRuIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbi5sZWFybiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogZW5kO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1ob21lLCBcXG4ubWFpbiB7XFxuICB3aWR0aDogNzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1ob21lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA2MHZoO1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogMjc1cHg7XFxufVxcblxcbi5ibHVyYiB7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNDBweDtcXG4gIG1hcmdpbjogMzBweCBhdXRvO1xcbn1cXG5cXG4ubWVudS1idG4ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA1NXB4O1xcbn1cXG5cXG4ubGVhcm4ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGxvYWRBYm91dCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAxLnRleHRDb250ZW50ID0gXCJUaGUgTGVha3kgQ2F1bGRyb24gd2FzIGJ1aWx0IGluIHRoZSAxNTAwcyBieSBEYWlzeSBEb2RkZXJpZGdlLiBJdHMgdHJ1ZSBhZGRyZXNzIGlzIG51bWJlciBvbmUgRGlhZ29uIEFsbGV5LCBhbmQgaXQgaXMgYmVsaWV2ZWQgdG8gaGF2ZSBiZWVuIGJ1aWx0IGFsb25nIHdpdGggdGhlIHJlc3Qgb2YgdGhlIHdpemFyZGluZyBzdHJlZXQuXCI7XG4gICAgaW5mby5hcHBlbmRDaGlsZChwMSk7XG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwMi50ZXh0Q29udGVudCA9IFwiV2l0aCB0aGUgaW1wb3NpdGlvbiBvZiB0aGUgSW50ZXJuYXRpb25hbCBTdGF0dXRlIG9mIFdpemFyZGluZyBTZWNyZWN5IGluIDE2OTIsIE1pbmlzdGVyIFVsaWNrIEdhbXAgcGVybWl0dGVkIHRoZSBwdWIgdG8gY29udGludWUgaXRzIGV4aXN0ZW5jZSBhcyBhIHNhZmUgaGF2ZW4gYW5kIHJlZnVnZSBmb3IgbWVtYmVycyBvZiB0aGUgbWFnaWNhbCBjb21tdW5pdHkuXCI7XG4gICAgaW5mby5hcHBlbmRDaGlsZChwMik7XG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwMy50ZXh0Q29udGVudCA9IFwiR2FtcCB3YXMgc3ltcGF0aGV0aWMgdG8gdGhlIG5lZWQgb2Ygd2l6YXJkcyB0byBsZXQgb2ZmIHN0ZWFtIGR1cmluZyB0aGlzIGRpZmZpY3VsdCB0aW1lLCBhbmQgZnVydGhlciBhZ3JlZWQgdG8gZ2l2ZSB0aGUgbGFuZGxvcmQgcGVybWlzc2lvbiB0byBsZXQgcGVvcGxlIGludG8gRGlhZ29uIEFsbGV5IGZyb20gaGlzIGJhY2t5YXJkLCBiZWNhdXNlIHRoZSBzaG9wcyBiZWhpbmQgdGhlIExlYWt5IENhdWxkcm9uIHdlcmUgbm93IGFsc28gaW4gbmVlZCBvZiBwcm90ZWN0aW9uLlwiO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocDMpO1xuICAgIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcDQudGV4dENvbnRlbnQgPSBcIk1hbnkgbW9vbnMgbGF0ZXIsIFRoZSBMZWFreSBDYXVsZHJvbiByZW1haW5zIHRoZSBpZGVhbCBzcG90IHRvIGNhdGNoIHVwIHdpdGggd2l6YXJkaW5nIGdvc3NpcCBvciByZWxheCBhZnRlciBhIGRheSBvZiBzaG9wcGluZy4gV2UgaG9wZSB5b3UnbGwgam9pbiB1cyFcIjtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHA0KTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gXCJJbmZvcm1hdGlvbiBjb3VydGVzeSBvZiA8YSBocmVmPSdodHRwczovL2hhcnJ5cG90dGVyLmZhbmRvbS5jb20vd2lraS9MZWFreV9DYXVsZHJvbi8nPlRoZSBXaWtpPC9hPi5cIjtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIH0iLCJleHBvcnQgY29uc3QgbG9hZENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW50cm8udGV4dENvbnRlbnQgPSBcIllvdSBhcmUgd2VsY29tZSB0byBsZWF2ZSB1cyBhIG1lc3NhZ2UgaGVyZSwgYnV0IHRoZSBNdWdnbGUgaW50ZXJuZXQgZG9lcyBub3Qgd29yayB2ZXJ5IG9mdGVuLCBzbyBwbGVhc2UgZm9yZ2l2ZSB1cyBpZiB3ZSBkbyBub3QgcmVzcG9uZCBpbiBhIHRpbWVseSBtYW5uZXIuIC1Ub21cIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChpbnRybyk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwic3VibWl0LnBocFwiKTtcbiAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcbiAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5hbWVcIik7XG5cbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGVtYWlsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJlbWFpbFwiKTtcbiAgZW1haWwuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImVtYWlsXCIpO1xuICBlbWFpbC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVtYWlsXCIpO1xuXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm1lc3NhZ2VcIik7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJZb3VyIG1lc3NhZ2UgaGVyZVwiKTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xuICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5mbzEudGV4dENvbnRlbnQgPSBcIlBob25lOiArNDQgNzM0MSAxMjM0NTZcIjtcbiAgaW5mby5hcHBlbmRDaGlsZChpbmZvMSk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBjb25zdCBpbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbmZvMi50ZXh0Q29udGVudCA9IFwiQWRkcmVzczogNzUzIENoYXJpbmcgQ3Jvc3MgUm9hZFwiO1xuICBpbmZvLmFwcGVuZENoaWxkKGluZm8yKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChpbmZvKTtcblxufTsiLCJpbXBvcnQgeyBsb2FkQWJvdXQgfSBmcm9tIFwiLi9hYm91dC5qc1wiO1xuXG5leHBvcnQgY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWhvbWVcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVGhlIExlYWt5IENhdWxkcm9uXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGNvbnN0IGJsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmx1cmIuY2xhc3NMaXN0LmFkZChcImJsdXJiXCIpO1xuICBibHVyYi50ZXh0Q29udGVudCA9IFwiRmlyc3QtcmF0ZSBmb29kLCBkcmluaywgYW5kIGxpdmluZyBxdWFydGVycyBmb3IgdGhlIHRyYXZlbGxpbmcgd2l0Y2ggb3Igd2l6YXJkLCBvciBzaW1wbHkgdGhvc2UgaGVhZGluZyB0byBEaWFnb24gQWxsZXlcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChibHVyYik7XG4gIGNvbnN0IGxlYXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGVhcm4uY2xhc3NMaXN0LmFkZChcImxlYXJuXCIpO1xuICBsZWFybi50ZXh0Q29udGVudCA9IFwiTGVhcm4gTW9yZVwiO1xuICBsZWFybi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRBYm91dCgpO1xuICB9KVxuICBtYWluLmFwcGVuZENoaWxkKGxlYXJuKTtcbn07IiwiaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuLi9tZW51LmpzJztcblxuZXhwb3J0IGNvbnN0IGxvYWRCZXZlcmFnZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJCZXZlcmFnZXNcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBjYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQxLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm8xLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNhcmQxLmFwcGVuZENoaWxkKGluZm8xKTtcbiAgICBjb25zdCBoZWFkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkMS50ZXh0Q29udGVudCA9IFwiVGVhIGFuZCBDcnVtcGV0c1wiO1xuICAgIGluZm8xLmFwcGVuZENoaWxkKGhlYWQxKTtcbiAgICBjb25zdCBibHVyYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjEudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIjtcbiAgICBpbmZvMS5hcHBlbmRDaGlsZChibHVyYjEpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDEpO1xuXG4gICAgY29uc3QgY2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkMi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvMi5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjYXJkMi5hcHBlbmRDaGlsZChpbmZvMik7XG4gICAgY29uc3QgaGVhZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZDIudGV4dENvbnRlbnQgPSBcIkdpbGx5d2F0ZXJcIjtcbiAgICBpbmZvMi5hcHBlbmRDaGlsZChoZWFkMik7XG4gICAgY29uc3QgYmx1cmIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmIyLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCI7XG4gICAgaW5mbzIuYXBwZW5kQ2hpbGQoYmx1cmIyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQyKTtcblxuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDMuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzMuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY2FyZDMuYXBwZW5kQ2hpbGQoaW5mbzMpO1xuICAgIGNvbnN0IGhlYWQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQzLnRleHRDb250ZW50ID0gXCJCdXR0ZXJiZWVyXCI7XG4gICAgaW5mbzMuYXBwZW5kQ2hpbGQoaGVhZDMpO1xuICAgIGNvbnN0IGJsdXJiMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiMy50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlwiO1xuICAgIGluZm8zLmFwcGVuZENoaWxkKGJsdXJiMyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMyk7XG5cbiAgICBjb25zdCBjYXJkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQ0LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm80LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNhcmQ0LmFwcGVuZENoaWxkKGluZm80KTtcbiAgICBjb25zdCBoZWFkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkNC50ZXh0Q29udGVudCA9IFwiUHVtcGtpbiBKdWljZVwiO1xuICAgIGluZm80LmFwcGVuZENoaWxkKGhlYWQ0KTtcbiAgICBjb25zdCBibHVyYjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjQudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIjtcbiAgICBpbmZvNC5hcHBlbmRDaGlsZChibHVyYjQpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDQpO1xuXG4gICAgY29uc3QgY2FyZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkNS5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvNS5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjYXJkNS5hcHBlbmRDaGlsZChpbmZvNSk7XG4gICAgY29uc3QgaGVhZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZDUudGV4dENvbnRlbnQgPSBcIk1lYWRcIjtcbiAgICBpbmZvNS5hcHBlbmRDaGlsZChoZWFkNSk7XG4gICAgY29uc3QgYmx1cmI1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmI1LnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCI7XG4gICAgaW5mbzUuYXBwZW5kQ2hpbGQoYmx1cmI1KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQ1KTtcblxuICAgIGNvbnN0IG1haW5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtYWlubWVudS50ZXh0Q29udGVudCA9IFwiTWFpbiBNZW51XCI7XG4gICAgbWFpbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvYWRNZW51KCk7XG4gICAgfSlcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5tZW51KTtcbiAgfSIsImltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi4vbWVudS5qcyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkRGVzc2VydHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDEuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzEuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY2FyZDEuYXBwZW5kQ2hpbGQoaW5mbzEpO1xuICAgIGNvbnN0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQxLnRleHRDb250ZW50ID0gXCJTcG90dGVkIERpY2tcIjtcbiAgICBpbmZvMS5hcHBlbmRDaGlsZChoZWFkMSk7XG4gICAgY29uc3QgYmx1cmIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmIxLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCI7XG4gICAgaW5mbzEuYXBwZW5kQ2hpbGQoYmx1cmIxKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQxKTtcblxuICAgIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDIuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzIuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY2FyZDIuYXBwZW5kQ2hpbGQoaW5mbzIpO1xuICAgIGNvbnN0IGhlYWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQyLnRleHRDb250ZW50ID0gXCJUcmVhY2xlIFRhcnRcIjtcbiAgICBpbmZvMi5hcHBlbmRDaGlsZChoZWFkMik7XG4gICAgY29uc3QgYmx1cmIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmIyLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCI7XG4gICAgaW5mbzIuYXBwZW5kQ2hpbGQoYmx1cmIyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQyKTtcblxuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDMuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzMuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY2FyZDMuYXBwZW5kQ2hpbGQoaW5mbzMpO1xuICAgIGNvbnN0IGhlYWQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQzLnRleHRDb250ZW50ID0gXCJDaG9jb2xhdGUgUHVkZGluZ1wiO1xuICAgIGluZm8zLmFwcGVuZENoaWxkKGhlYWQzKTtcbiAgICBjb25zdCBibHVyYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjMudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIjtcbiAgICBpbmZvMy5hcHBlbmRDaGlsZChibHVyYjMpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDMpO1xuXG4gICAgY29uc3QgY2FyZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkNC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvNC5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjYXJkNC5hcHBlbmRDaGlsZChpbmZvNCk7XG4gICAgY29uc3QgaGVhZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZDQudGV4dENvbnRlbnQgPSBcIkphbSBEb3VnaG51dHNcIjtcbiAgICBpbmZvNC5hcHBlbmRDaGlsZChoZWFkNCk7XG4gICAgY29uc3QgYmx1cmI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmI0LnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCI7XG4gICAgaW5mbzQuYXBwZW5kQ2hpbGQoYmx1cmI0KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQ0KTtcblxuICAgIGNvbnN0IG1haW5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtYWlubWVudS50ZXh0Q29udGVudCA9IFwiTWFpbiBNZW51XCI7XG4gICAgbWFpbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvYWRNZW51KCk7XG4gICAgfSlcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5tZW51KTtcbiAgfSIsImltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi4vbWVudS5qcyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkRGlzaGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiU2lnbmF0dXJlIERpc2hlc1wiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDEuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzEuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY2FyZDEuYXBwZW5kQ2hpbGQoaW5mbzEpO1xuICAgIGNvbnN0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQxLnRleHRDb250ZW50ID0gXCJCYW5nZXJzIGFuZCBNYXNoXCI7XG4gICAgaW5mbzEuYXBwZW5kQ2hpbGQoaGVhZDEpO1xuICAgIGNvbnN0IGJsdXJiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiMS50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlwiO1xuICAgIGluZm8xLmFwcGVuZENoaWxkKGJsdXJiMSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMSk7XG5cbiAgICBjb25zdCBjYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQyLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm8yLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNhcmQyLmFwcGVuZENoaWxkKGluZm8yKTtcbiAgICBjb25zdCBoZWFkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkMi50ZXh0Q29udGVudCA9IFwiU3RlYWsgYW5kIEtpZG5leSBQaWVcIjtcbiAgICBpbmZvMi5hcHBlbmRDaGlsZChoZWFkMik7XG4gICAgY29uc3QgYmx1cmIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmIyLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCI7XG4gICAgaW5mbzIuYXBwZW5kQ2hpbGQoYmx1cmIyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQyKTtcblxuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDMuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzMuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY2FyZDMuYXBwZW5kQ2hpbGQoaW5mbzMpO1xuICAgIGNvbnN0IGhlYWQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQzLnRleHRDb250ZW50ID0gXCJQZWEgU291cFwiO1xuICAgIGluZm8zLmFwcGVuZENoaWxkKGhlYWQzKTtcbiAgICBjb25zdCBibHVyYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjMudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIjtcbiAgICBpbmZvMy5hcHBlbmRDaGlsZChibHVyYjMpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDMpO1xuXG4gICAgY29uc3QgY2FyZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkNC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvNC5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjYXJkNC5hcHBlbmRDaGlsZChpbmZvNCk7XG4gICAgY29uc3QgaGVhZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZDQudGV4dENvbnRlbnQgPSBcIllvcmtzaGlyZSBQdWRkaW5nXCI7XG4gICAgaW5mbzQuYXBwZW5kQ2hpbGQoaGVhZDQpO1xuICAgIGNvbnN0IGJsdXJiNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiNC50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlwiO1xuICAgIGluZm80LmFwcGVuZENoaWxkKGJsdXJiNCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkNCk7XG5cbiAgICBjb25zdCBjYXJkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQ1LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm81LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNhcmQ1LmFwcGVuZENoaWxkKGluZm81KTtcbiAgICBjb25zdCBoZWFkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkNS50ZXh0Q29udGVudCA9IFwiU2hlcGhlcmRzIFBpZVwiO1xuICAgIGluZm81LmFwcGVuZENoaWxkKGhlYWQ1KTtcbiAgICBjb25zdCBibHVyYjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjUudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIjtcbiAgICBpbmZvNS5hcHBlbmRDaGlsZChibHVyYjUpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDUpO1xuXG4gICAgY29uc3QgY2FyZDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm82ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkNi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvNi5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjYXJkNi5hcHBlbmRDaGlsZChpbmZvNik7XG4gICAgY29uc3QgaGVhZDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZDYudGV4dENvbnRlbnQgPSBcIlRvYWQgaW4gdGhlIEhvbGVcIjtcbiAgICBpbmZvNi5hcHBlbmRDaGlsZChoZWFkNik7XG4gICAgY29uc3QgYmx1cmI2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmI2LnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCI7XG4gICAgaW5mbzYuYXBwZW5kQ2hpbGQoYmx1cmI2KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQ2KTtcblxuICAgIGNvbnN0IG1haW5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtYWlubWVudS50ZXh0Q29udGVudCA9IFwiTWFpbiBNZW51XCI7XG4gICAgbWFpbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvYWRNZW51KCk7XG4gICAgfSlcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5tZW51KTtcbiAgfSIsImltcG9ydCB7IGxvYWRCZXZlcmFnZXMgfSBmcm9tICcuL21lbnUtcGFnZXMvYmV2ZXJhZ2VzLmpzJztcbmltcG9ydCB7IGxvYWREaXNoZXMgfSBmcm9tICcuL21lbnUtcGFnZXMvZGlzaGVzLmpzJztcbmltcG9ydCB7IGxvYWREZXNzZXJ0cyB9IGZyb20gJy4vbWVudS1wYWdlcy9kZXNzZXJ0cy5qcyc7XG5cblxuZXhwb3J0IGNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25zXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuICBjb25zdCBiZXZlcmFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBiZXZlcmFnZXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xuICBiZXZlcmFnZXMudGV4dENvbnRlbnQgPSBcIkJldmVyYWdlc1wiO1xuICBiZXZlcmFnZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkQmV2ZXJhZ2VzKCk7XG4gIH0pXG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQoYmV2ZXJhZ2VzKTtcbiAgY29uc3QgZGlzaGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGlzaGVzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgZGlzaGVzLnRleHRDb250ZW50ID0gXCJTaWduYXR1cmUgRGlzaGVzXCI7XG4gIGRpc2hlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWREaXNoZXMoKTtcbiAgfSlcbiAgb3B0aW9ucy5hcHBlbmRDaGlsZChkaXNoZXMpO1xuICBjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlc3NlcnRzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgZGVzc2VydHMudGV4dENvbnRlbnQgPSBcIkRlc3NlcnRzXCI7XG4gIGRlc3NlcnRzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZERlc3NlcnRzKCk7XG4gIH0pXG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQoZGVzc2VydHMpO1xufSIsImV4cG9ydCBjb25zdCBsb2FkU2l0ZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2YmFyKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGhvbWUpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xuICBhYm91dC50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGFib3V0KTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1ob21lXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRoZSBMZWFreSBDYXVsZHJvblwiO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBjb25zdCBibHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJsdXJiLmNsYXNzTGlzdC5hZGQoXCJibHVyYlwiKTtcbiAgYmx1cmIudGV4dENvbnRlbnQgPSBcIkZpcnN0LXJhdGUgZm9vZCwgZHJpbmssIGFuZCBsaXZpbmcgcXVhcnRlcnMgZm9yIHRoZSB0cmF2ZWxsaW5nIHdpdGNoIG9yIHdpemFyZCwgb3Igc2ltcGx5IHRob3NlIGhlYWRpbmcgdG8gRGlhZ29uIEFsbGV5XCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYmx1cmIpO1xuICBjb25zdCBsZWFybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxlYXJuLmNsYXNzTGlzdC5hZGQoXCJsZWFyblwiKTtcbiAgbGVhcm4udGV4dENvbnRlbnQgPSBcIkxlYXJuIE1vcmVcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChsZWFybik7XG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImNvbnNvbGUubG9nKFwiRXZlcnl0aGluZyBpcyBsaW5rZWQuXCIpO1xuXG4gaW1wb3J0IHsgbG9hZFNpdGUgfSBmcm9tIFwiLi9zaXRlLmpzXCI7XG5cbmltcG9ydCB7IGxvYWRDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gXCIuL21lbnUuanNcIlxuaW1wb3J0IHsgbG9hZEFib3V0IH0gZnJvbSBcIi4vYWJvdXQuanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBsb2FkQ29udGFjdCgpO1xuXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkQ29udGFjdCgpO1xufSlcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbG9hZEhvbWUoKTtcbn0pXG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvYWRNZW51KCk7XG59KVxuXG5jb25zdCBsZWFybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVhcm5cIik7XG5sZWFybi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkQWJvdXQoKTtcbn0pXG5cbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dFwiKTtcbmFib3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvYWRBYm91dCgpO1xufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9