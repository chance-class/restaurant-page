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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./HARRYP__.TTF */ "./src/HARRYP__.TTF"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Cardo-Regular.ttf */ "./src/Cardo-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cauldron.png */ "./src/images/cauldron.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "HARRYP";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: "Cardo";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

* {
  font-family: "Cardo", sans-serif;
}

.header {
  height: 75px;
  display: grid;
  justify-content: center;
  align-content: end;
}

body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: cover;
  /*  background-position: center;*/
}

h1 {
  font-family: "HARRYP", sans-serif;
  font-size: 6rem;
  margin: 10px;
  font-weight: 300;
  color: #d4d4d8;
}

.navbar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  align-content: center;
  height: 40px;
  padding-bottom: 20px;
}

.container {
  display: flex;
  justify-content: center;
  position: relative;
  flex-grow: 1;
}

/*.container::before {
    content: "";
    position: absolute;
    background-image: url(./images/cauldron.png);
    background-size: cover;
    background-position: center;
    top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
    opacity: 0.5;
  }*/

.main-home, 
.main {
  position: relative;
  width: 700px;
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  align-items: center;
  background: rgba(53, 47, 47, 0.75);
  padding: 40px;
}

.main-home {
  background: transparent;
  color: white;
  text-align: center;
  justify-content: end;
}

.main > p, 
.main > div > p {
  font-size: 1.4rem;
  color: #a1a1aa;
  margin: 15px 0;
}

.info {
  color: #a1a1aa;
}

h2, 
h3 {
  color: #d4d4d8;
}

input {
  width: 300px;
  height: 35px;
  font-size: 18px;
  font-family: sans-serif;
}

textarea {
  width: 300px;
  height: 120px;
  font-size: 18px;
  font-family: sans-serif;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  width: 500px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  justify-content: center;
  padding: 15px;
  height: 195px;
}

.info {
  display: flex;
  flex-direction: column;
  height: 195px;
}

.price {
  place-self: end end;
  margin-top: auto;
}

h2 {
  font-size: 2.6rem;
  margin: 0 0 25px;
}

h3 {
  font-size: 1.6rem;
  margin: 0;
}

.info > p {
  font-size: 1.2rem;
}

.blurb {
  font-size: 32px;
  margin-bottom: 20px;
  color: #d4d4d8;
}

button {
  margin: 0;
  height: 40px;
  width: 120px;
  font-size: 1.3rem;
  background-color: #156f75;
  color:#d4d4d8;
  border: none;
  border-radius: 5px;
}

a {
  text-decoration: none;
  font-weight: 500;
  color: #a5f3fc;
}

a:hover {
  font-weight: 600;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4CAAwB;AAC1B;;AAEA;EACE,oBAAoB;EACpB,4CAA6B;AAC/B;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;IACI,yDAA4C;IAC5C,sBAAsB;EACxB,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,uBAAuB;EACvB,qBAAqB;EACrB,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;AACd;;AAEA;;;;;;;;;;;IAWI;;AAEJ;;EAEE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,kCAAkC;EAClC,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;;EAEE,iBAAiB;EACjB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gCAAgC;EAChC,uBAAuB;EACvB,aAAa;EACb,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd","sourcesContent":["@font-face {\n  font-family: \"HARRYP\";\n  src: url(./HARRYP__.TTF);\n}\n\n@font-face {\n  font-family: \"Cardo\";\n  src: url(./Cardo-Regular.ttf);\n}\n\n* {\n  font-family: \"Cardo\", sans-serif;\n}\n\n.header {\n  height: 75px;\n  display: grid;\n  justify-content: center;\n  align-content: end;\n}\n\nbody {\n    background-image: url(./images/cauldron.png);\n    background-size: cover;\n  /*  background-position: center;*/\n}\n\nh1 {\n  font-family: \"HARRYP\", sans-serif;\n  font-size: 6rem;\n  margin: 10px;\n  font-weight: 300;\n  color: #d4d4d8;\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  justify-content: center;\n  align-content: center;\n  height: 40px;\n  padding-bottom: 20px;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  position: relative;\n  flex-grow: 1;\n}\n\n/*.container::before {\n    content: \"\";\n    position: absolute;\n    background-image: url(./images/cauldron.png);\n    background-size: cover;\n    background-position: center;\n    top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n    opacity: 0.5;\n  }*/\n\n.main-home, \n.main {\n  position: relative;\n  width: 700px;\n  display: flex;\n  flex-direction: column;\n  margin: 40px auto;\n  align-items: center;\n  background: rgba(53, 47, 47, 0.75);\n  padding: 40px;\n}\n\n.main-home {\n  background: transparent;\n  color: white;\n  text-align: center;\n  justify-content: end;\n}\n\n.main > p, \n.main > div > p {\n  font-size: 1.4rem;\n  color: #a1a1aa;\n  margin: 15px 0;\n}\n\n.info {\n  color: #a1a1aa;\n}\n\nh2, \nh3 {\n  color: #d4d4d8;\n}\n\ninput {\n  width: 300px;\n  height: 35px;\n  font-size: 18px;\n  font-family: sans-serif;\n}\n\ntextarea {\n  width: 300px;\n  height: 120px;\n  font-size: 18px;\n  font-family: sans-serif;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.card {\n  width: 500px;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  justify-content: center;\n  padding: 15px;\n  height: 195px;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n  height: 195px;\n}\n\n.price {\n  place-self: end end;\n  margin-top: auto;\n}\n\nh2 {\n  font-size: 2.6rem;\n  margin: 0 0 25px;\n}\n\nh3 {\n  font-size: 1.6rem;\n  margin: 0;\n}\n\n.info > p {\n  font-size: 1.2rem;\n}\n\n.blurb {\n  font-size: 32px;\n  margin-bottom: 20px;\n  color: #d4d4d8;\n}\n\nbutton {\n  margin: 0;\n  height: 40px;\n  width: 120px;\n  font-size: 1.3rem;\n  background-color: #156f75;\n  color:#d4d4d8;\n  border: none;\n  border-radius: 5px;\n}\n\na {\n  text-decoration: none;\n  font-weight: 500;\n  color: #a5f3fc;\n}\n\na:hover {\n  font-weight: 600;\n}\n\nh1,\nh2 {\n  text-align: center;\n}\n\n.options {\n  display: grid;\n  gap: 40px;\n  margin: 30px auto;\n}\n\n.menu-btn {\n  width: 200px;\n  height: 55px;\n}\n\n.learn {\n  width: 200px;\n  height: 60px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    info.classList.add("info-about");
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
    p4.textContent = "Many moons later, The Leaky Cauldron remains the ideal spot to catch up with wizarding gossip over a gillywater or relax after a day of shopping with some shepherds pie. We hope you'll join us!";
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

  const map = document.createElement("div");
  map.innerHTML = "<img src='../src/images/map.gif' width='500px'>";
  main.appendChild(map);
  const link = document.createElement("div");
  link.innerHTML = "<a href='http://members.madasafish.com/~cj_whitehound/Fanfic/Location_Location/Diagon_Alley.htm'>Image Source</a>";
  main.appendChild(link);
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
  blurb.textContent = "First-rate food, drink, and lodging for witches and wizards, especially those heading to Diagon Alley or looking for a cozy place to dine";
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
    const image1 = document.createElement("div");
    image1.innerHTML = "<img src='../src/images/tea.png' height='170px' alt='Picture of tea and crumpets'>";
    card1.appendChild(image1);
    card1.appendChild(info1);
    const head1 = document.createElement("h3");
    head1.textContent = "Tea and Crumpets";
    info1.appendChild(head1);
    const blurb1 = document.createElement("p");
    blurb1.textContent = "A pot of tea paired with our crumbly crumpets. Add a shot of Ogden's Old Firewhisky if you're bold!";
    info1.appendChild(blurb1);
    const price1 = document.createElement("p");
    price1.textContent = "2S 5K";
    price1.classList.add("price");
    info1.appendChild(price1);
    main.appendChild(card1);

    const card2 = document.createElement("div");
    const info2 = document.createElement("div");
    card2.classList.add("card");
    info2.classList.add("info");
    const image2 = document.createElement("div");
    image2.innerHTML = "<img src='../src/images/gilly.png' height='170px' alt='Picture of gillywater'>";
    card2.appendChild(image2);
    card2.appendChild(info2);
    const head2 = document.createElement("h3");
    head2.textContent = "Gillywater";
    info2.appendChild(head2);
    const blurb2 = document.createElement("p");
    blurb2.textContent = "A house favorite, garnished with your choice of cucumber, mint, lemon, raspberry, or onion.";
    info2.appendChild(blurb2);
    const price2 = document.createElement("p");
    price2.textContent = "2S 12K";
    price2.classList.add("price");
    info2.appendChild(price2);
    main.appendChild(card2);

    const card3 = document.createElement("div");
    const info3 = document.createElement("div");
    card3.classList.add("card");
    info3.classList.add("info");
    const image3 = document.createElement("div");
    image3.innerHTML = "<img src='../src/images/butter.png' height='170px' alt='Picture of butterbeer'>";
    card3.appendChild(image3);
    card3.appendChild(info3);
    const head3 = document.createElement("h3");
    head3.textContent = "Butterbeer";
    info3.appendChild(head3);
    const blurb3 = document.createElement("p");
    blurb3.textContent = "Guaranteed to warm you up from head to toe.";
    info3.appendChild(blurb3);
    const price3 = document.createElement("p");
    price3.textContent = "4S";
    price3.classList.add("price");
    info3.appendChild(price3);
    main.appendChild(card3);

    const card4 = document.createElement("div");
    const info4 = document.createElement("div");
    card4.classList.add("card");
    info4.classList.add("info");
    const image4 = document.createElement("div");
    image4.innerHTML = "<img src='../src/images/pumpkin.png' height='170px' alt='Picture of pumpkin juice'>";
    card4.appendChild(image4);
    card4.appendChild(info4);
    const head4 = document.createElement("h3");
    head4.textContent = "Pumpkin Juice";
    info4.appendChild(head4);
    const blurb4 = document.createElement("p");
    blurb4.textContent = "Creamy and house-made, perfect to accompany any dish or sip on its own.";
    info4.appendChild(blurb4);
    const price4 = document.createElement("p");
    price4.textContent = "3S 4K";
    price4.classList.add("price");
    info4.appendChild(price4);
    main.appendChild(card4);

    const card5 = document.createElement("div");
    const info5 = document.createElement("div");
    card5.classList.add("card");
    info5.classList.add("info");
    const image5 = document.createElement("div");
    image5.innerHTML = "<img src='../src/images/mead.png' height='170px' alt='Picture of mead'>";
    card5.appendChild(image5);
    card5.appendChild(info5);
    const head5 = document.createElement("h3");
    head5.textContent = "Mead";
    info5.appendChild(head5);
    const blurb5 = document.createElement("p");
    blurb5.textContent = "Our age-old recipe goes back to when The Leaky Cauldron was established. Must be 18+.";
    info5.appendChild(blurb5);
    const price5 = document.createElement("p");
    price5.textContent = "5S 3K";
    price5.classList.add("price");
    info5.appendChild(price5);
    main.appendChild(card5);

    const mainmenu = document.createElement("button");
    mainmenu.textContent = "Main Menu";
    mainmenu.classList.add("mainmenu");
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
    const image1 = document.createElement("div");
    image1.innerHTML = "<img src='../src/images/spotted.png' height='170px' alt='Picture of spotted dick'>";
    card1.appendChild(image1);
    card1.appendChild(info1);
    const head1 = document.createElement("h3");
    head1.textContent = "Spotted Dick";
    info1.appendChild(head1);
    const blurb1 = document.createElement("p");
    blurb1.textContent = "Cake that contains dried raisins and currants, and is topped with our creamy custard.";
    info1.appendChild(blurb1);
    const price1 = document.createElement("p");
    price1.textContent = "6S 11K";
    price1.classList.add("price");
    info1.appendChild(price1);
    main.appendChild(card1);

    const card2 = document.createElement("div");
    const info2 = document.createElement("div");
    card2.classList.add("card");
    info2.classList.add("info");
    const image2 = document.createElement("div");
    image2.innerHTML = "<img src='../src/images/treacle.png' height='170px' alt='Picture of treacle tart'>";
    card2.appendChild(image2);
    card2.appendChild(info2);
    const head2 = document.createElement("h3");
    head2.textContent = "Treacle Tart";
    info2.appendChild(head2);
    const blurb2 = document.createElement("p");
    blurb2.textContent = "Baked until golden crisp, and served with our homemade vanilla ice cream.";
    info2.appendChild(blurb2);
    const price2 = document.createElement("p");
    price2.textContent = "8S";
    price2.classList.add("price");
    info2.appendChild(price2);
    main.appendChild(card2);

    const card3 = document.createElement("div");
    const info3 = document.createElement("div");
    card3.classList.add("card");
    info3.classList.add("info");
    const image3 = document.createElement("div");
    image3.innerHTML = "<img src='../src/images/pudding.png' height='170px' alt='Picture of chocolate pudding'>";
    card3.appendChild(image3);
    card3.appendChild(info3);
    const head3 = document.createElement("h3");
    head3.textContent = "Chocolate Pudding";
    info3.appendChild(head3);
    const blurb3 = document.createElement("p");
    blurb3.textContent = "Made with real milk chocolate and garnished with mint.";
    info3.appendChild(blurb3);
    const price3 = document.createElement("p");
    price3.textContent = "6S 7K";
    price3.classList.add("price");
    info3.appendChild(price3);
    main.appendChild(card3);

    const card4 = document.createElement("div");
    const info4 = document.createElement("div");
    card4.classList.add("card");
    info4.classList.add("info");
    const image4 = document.createElement("div");
    image4.innerHTML = "<img src='../src/images/doughnuts.png' height='170px' alt='Picture of jam doughnuts'>";
    card4.appendChild(image4);
    card4.appendChild(info4);
    const head4 = document.createElement("h3");
    head4.textContent = "Jam Doughnuts";
    info4.appendChild(head4);
    const blurb4 = document.createElement("p");
    blurb4.textContent = "A dessert for every occasion - available in plates of 4, 6, or 8.";
    info4.appendChild(blurb4);
    const price4 = document.createElement("p");
    price4.textContent = "4S 12K+";
    price4.classList.add("price");
    info4.appendChild(price4);
    main.appendChild(card4);

    const mainmenu = document.createElement("button");
    mainmenu.textContent = "Main Menu";
    mainmenu.classList.add("mainmenu");
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
    const image1 = document.createElement("div");
    image1.innerHTML = "<img src='../src/images/bangers.png' height='170px' alt='Picture of bangers and mash'>";
    card1.appendChild(image1);
    card1.appendChild(info1);
    const head1 = document.createElement("h3");
    head1.textContent = "Bangers and Mash";
    info1.appendChild(head1);
    const blurb1 = document.createElement("p");
    blurb1.textContent = "Three succulent sausage links served with mashed potatoes and gravy.";
    info1.appendChild(blurb1);
    const price1 = document.createElement("p");
    price1.textContent = "11S 20K";
    price1.classList.add("price");
    info1.appendChild(price1);
    main.appendChild(card1);

    const card2 = document.createElement("div");
    const info2 = document.createElement("div");
    card2.classList.add("card");
    info2.classList.add("info");
    const image2 = document.createElement("div");
    image2.innerHTML = "<img src='../src/images/kidney.png' height='170px' alt='Picture of steak and kidney pie'>";
    card2.appendChild(image2);
    card2.appendChild(info2);
    const head2 = document.createElement("h3");
    head2.textContent = "Steak and Kidney Pie";
    info2.appendChild(head2);
    const blurb2 = document.createElement("p");
    blurb2.textContent = "Our flaky pastry crust filled with beef, kidney, onion, carrot, mushroom, and a rich gravy.";
    info2.appendChild(blurb2);
    const price2 = document.createElement("p");
    price2.textContent = "13S 12K";
    price2.classList.add("price");
    info2.appendChild(price2);
    main.appendChild(card2);

    const card3 = document.createElement("div");
    const info3 = document.createElement("div");
    card3.classList.add("card");
    info3.classList.add("info");
    const image3 = document.createElement("div");
    image3.innerHTML = "<img src='../src/images/pea.png' height='170px' alt='Picture of pea soup'>";
    card3.appendChild(image3);
    card3.appendChild(info3);
    const head3 = document.createElement("h3");
    head3.textContent = "Pea Soup";
    info3.appendChild(head3);
    const blurb3 = document.createElement("p");
    blurb3.textContent = "A house favorite, our pea soup is rich and perfect to accompany another dish, or to enjoy on its own.";
    info3.appendChild(blurb3);
    const price3 = document.createElement("p");
    price3.textContent = "9S 8K";
    price3.classList.add("price");
    info3.appendChild(price3);
    main.appendChild(card3);

    const card4 = document.createElement("div");
    const info4 = document.createElement("div");
    card4.classList.add("card");
    info4.classList.add("info");
    const image4 = document.createElement("div");
    image4.innerHTML = "<img src='../src/images/yorkshire.png' height='170px' alt='Picture of yorkshire pudding'>";
    card4.appendChild(image4);
    card4.appendChild(info4);
    const head4 = document.createElement("h3");
    head4.textContent = "Yorkshire Pudding";
    info4.appendChild(head4);
    const blurb4 = document.createElement("p");
    blurb4.textContent = "A delectable pastry topped with roast beef and gravy, and served with grilled seasonal vegetables.";
    info4.appendChild(blurb4);
    const price4 = document.createElement("p");
    price4.textContent = "14S";
    price4.classList.add("price");
    info4.appendChild(price4);
    main.appendChild(card4);

    const card5 = document.createElement("div");
    const info5 = document.createElement("div");
    card5.classList.add("card");
    info5.classList.add("info");
    const image5 = document.createElement("div");
    image5.innerHTML = "<img src='../src/images/shepherd.png' height='170px' alt='Picture of shepherds pie'>";
    card5.appendChild(image5);
    card5.appendChild(info5);
    const head5 = document.createElement("h3");
    head5.textContent = "Shepherds Pie";
    info5.appendChild(head5);
    const blurb5 = document.createElement("p");
    blurb5.textContent = "Minced lamb, gravy, and vegetables, topped with mashed potatoes. Serves two.";
    info5.appendChild(blurb5);
    const price5 = document.createElement("p");
    price5.textContent = "1G";
    price5.classList.add("price");
    info5.appendChild(price5);
    main.appendChild(card5);

    const card6 = document.createElement("div");
    const info6 = document.createElement("div");
    card6.classList.add("card");
    info6.classList.add("info");
    const image6 = document.createElement("div");
    image6.innerHTML = "<img src='../src/images/toad.png' height='170px' alt='Picture of toad in the hole'>";
    card6.appendChild(image6);
    card6.appendChild(info6);
    const head6 = document.createElement("h3");
    head6.textContent = "Toad in the Hole";
    info6.appendChild(head6);
    const blurb6 = document.createElement("p");
    blurb6.textContent = "Our award-winning Yorkshire pudding with sausages, garnished with onion gravy and parsley.";
    info6.appendChild(blurb6);
    const price6 = document.createElement("p");
    price6.textContent = "10S 7K";
    price6.classList.add("price");
    info6.appendChild(price6);
    main.appendChild(card6);

    const mainmenu = document.createElement("button");
    mainmenu.textContent = "Main Menu";
    mainmenu.classList.add("mainmenu");
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
  blurb.textContent = "First-rate food, drink, and lodging for witches and wizards, especially those heading to Diagon Alley or looking for a cozy place to dine";
  main.appendChild(blurb);
  const learn = document.createElement("button");
  learn.classList.add("learn");
  learn.textContent = "Learn More";
  main.appendChild(learn);
})();

/***/ }),

/***/ "./src/Cardo-Regular.ttf":
/*!*******************************!*\
  !*** ./src/Cardo-Regular.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ad75d4da97e1cf6655b.ttf";

/***/ }),

/***/ "./src/HARRYP__.TTF":
/*!**************************!*\
  !*** ./src/HARRYP__.TTF ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a65869c0c1a4b3d4fcfc.TTF";

/***/ }),

/***/ "./src/images/cauldron.png":
/*!*********************************!*\
  !*** ./src/images/cauldron.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b7c790a17d4ed4960b4.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlHQUFpQztBQUM3RSw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0Qyx1SEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sZUFBZSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxxQ0FBcUMsNEJBQTRCLDZCQUE2QixHQUFHLGdCQUFnQiwyQkFBMkIsa0NBQWtDLEdBQUcsT0FBTyx1Q0FBdUMsR0FBRyxhQUFhLGlCQUFpQixrQkFBa0IsNEJBQTRCLHVCQUF1QixHQUFHLFVBQVUsbURBQW1ELDZCQUE2QixvQ0FBb0MsS0FBSyxRQUFRLHdDQUF3QyxvQkFBb0IsaUJBQWlCLHFCQUFxQixtQkFBbUIsR0FBRyxhQUFhLGtCQUFrQiwwQ0FBMEMsY0FBYyw0QkFBNEIsMEJBQTBCLGlCQUFpQix5QkFBeUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDRCQUE0Qix1QkFBdUIsaUJBQWlCLEdBQUcsMEJBQTBCLG9CQUFvQix5QkFBeUIsbURBQW1ELDZCQUE2QixrQ0FBa0MsZUFBZSxxQkFBcUIsc0JBQXNCLG9CQUFvQixtQkFBbUIsS0FBSywyQkFBMkIsdUJBQXVCLGlCQUFpQixrQkFBa0IsMkJBQTJCLHNCQUFzQix3QkFBd0IsdUNBQXVDLGtCQUFrQixHQUFHLGdCQUFnQiw0QkFBNEIsaUJBQWlCLHVCQUF1Qix5QkFBeUIsR0FBRyxrQ0FBa0Msc0JBQXNCLG1CQUFtQixtQkFBbUIsR0FBRyxXQUFXLG1CQUFtQixHQUFHLGNBQWMsbUJBQW1CLEdBQUcsV0FBVyxpQkFBaUIsaUJBQWlCLG9CQUFvQiw0QkFBNEIsR0FBRyxjQUFjLGlCQUFpQixrQkFBa0Isb0JBQW9CLDRCQUE0QixHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyxXQUFXLGlCQUFpQixrQkFBa0IscUNBQXFDLDRCQUE0QixrQkFBa0Isa0JBQWtCLEdBQUcsV0FBVyxrQkFBa0IsMkJBQTJCLGtCQUFrQixHQUFHLFlBQVksd0JBQXdCLHFCQUFxQixHQUFHLFFBQVEsc0JBQXNCLHFCQUFxQixHQUFHLFFBQVEsc0JBQXNCLGNBQWMsR0FBRyxlQUFlLHNCQUFzQixHQUFHLFlBQVksb0JBQW9CLHdCQUF3QixtQkFBbUIsR0FBRyxZQUFZLGNBQWMsaUJBQWlCLGlCQUFpQixzQkFBc0IsOEJBQThCLGtCQUFrQixpQkFBaUIsdUJBQXVCLEdBQUcsT0FBTywwQkFBMEIscUJBQXFCLG1CQUFtQixHQUFHLGFBQWEscUJBQXFCLEdBQUcsYUFBYSx1QkFBdUIsR0FBRyxjQUFjLGtCQUFrQixjQUFjLHNCQUFzQixHQUFHLGVBQWUsaUJBQWlCLGlCQUFpQixHQUFHLFlBQVksaUJBQWlCLGlCQUFpQixHQUFHLHFCQUFxQjtBQUNqNUk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN2TjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pFdUM7O0FBRWhDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBUztBQUNiLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QnNDOztBQUUvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrREFBUTtBQUNkLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6SHNDOztBQUUvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrREFBUTtBQUNkLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyR3NDOztBQUUvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrREFBUTtBQUNkLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdJMEQ7QUFDTjtBQUNJOzs7QUFHakQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBYTtBQUNqQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQVU7QUFDZCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQVk7QUFDaEIsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeENPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQSxDQUFzQzs7QUFFSztBQUNOO0FBQ0Q7QUFDRztBQUNsQjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBLEVBQUUsd0RBQVc7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLGtEQUFRO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxrREFBUTtBQUNWLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsb0RBQVM7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLG9EQUFTO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1wYWdlcy9iZXZlcmFnZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZXMvZGVzc2VydHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZXMvZGlzaGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0hBUlJZUF9fLlRURlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vQ2FyZG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jYXVsZHJvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhBUlJZUFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhcmRvXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2FyZG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmhlYWRlciB7XG4gIGhlaWdodDogNzVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGVuZDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC8qICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7Ki9cbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJIQVJSWVBcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZDRkNGQ4O1xufVxuXG4ubmF2YmFyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4vKi5jb250YWluZXI6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2NhdWxkcm9uLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgdG9wOiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgb3BhY2l0eTogMC41O1xuICB9Ki9cblxuLm1haW4taG9tZSwgXG4ubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDcwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSg1MywgNDcsIDQ3LCAwLjc1KTtcbiAgcGFkZGluZzogNDBweDtcbn1cblxuLm1haW4taG9tZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi5tYWluID4gcCwgXG4ubWFpbiA+IGRpdiA+IHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICNhMWExYWE7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4uaW5mbyB7XG4gIGNvbG9yOiAjYTFhMWFhO1xufVxuXG5oMiwgXG5oMyB7XG4gIGNvbG9yOiAjZDRkNGQ4O1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGhlaWdodDogMTk1cHg7XG59XG5cbi5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxOTVweDtcbn1cblxuLnByaWNlIHtcbiAgcGxhY2Utc2VsZjogZW5kIGVuZDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuaDIge1xuICBmb250LXNpemU6IDIuNnJlbTtcbiAgbWFyZ2luOiAwIDAgMjVweDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW5mbyA+IHAge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmJsdXJiIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogI2Q0ZDRkODtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTZmNzU7XG4gIGNvbG9yOiNkNGQ0ZDg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2E1ZjNmYztcbn1cblxuYTpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmgxLFxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA0MHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuLm1lbnUtYnRuIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbi5sZWFybiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw0Q0FBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSx5REFBNEM7SUFDNUMsc0JBQXNCO0VBQ3hCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBOzs7Ozs7Ozs7OztJQVdJOztBQUVKOztFQUVFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztFQUNoQyx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIQVJSWVBcXFwiO1xcbiAgc3JjOiB1cmwoLi9IQVJSWVBfXy5UVEYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2FyZG9cXFwiO1xcbiAgc3JjOiB1cmwoLi9DYXJkby1SZWd1bGFyLnR0Zik7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDYXJkb1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogZW5kO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2NhdWxkcm9uLnBuZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAvKiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyovXFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSEFSUllQXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogI2Q0ZDRkODtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4vKi5jb250YWluZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9jYXVsZHJvbi5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHRvcDogMHB4O1xcbiAgICAgICAgcmlnaHQ6IDBweDtcXG4gICAgICAgIGJvdHRvbTogMHB4O1xcbiAgICAgICAgbGVmdDogMHB4O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICB9Ki9cXG5cXG4ubWFpbi1ob21lLCBcXG4ubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogNDBweCBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNTMsIDQ3LCA0NywgMC43NSk7XFxuICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG4ubWFpbi1ob21lIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5tYWluID4gcCwgXFxuLm1haW4gPiBkaXYgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY29sb3I6ICNhMWExYWE7XFxuICBtYXJnaW46IDE1cHggMDtcXG59XFxuXFxuLmluZm8ge1xcbiAgY29sb3I6ICNhMWExYWE7XFxufVxcblxcbmgyLCBcXG5oMyB7XFxuICBjb2xvcjogI2Q0ZDRkODtcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGhlaWdodDogMTk1cHg7XFxufVxcblxcbi5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxOTVweDtcXG59XFxuXFxuLnByaWNlIHtcXG4gIHBsYWNlLXNlbGY6IGVuZCBlbmQ7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDIuNnJlbTtcXG4gIG1hcmdpbjogMCAwIDI1cHg7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaW5mbyA+IHAge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5ibHVyYiB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY29sb3I6ICNkNGQ0ZDg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTIwcHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTZmNzU7XFxuICBjb2xvcjojZDRkNGQ4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogI2E1ZjNmYztcXG59XFxuXFxuYTpob3ZlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDQwcHg7XFxuICBtYXJnaW46IDMwcHggYXV0bztcXG59XFxuXFxuLm1lbnUtYnRuIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNTVweDtcXG59XFxuXFxuLmxlYXJuIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgbG9hZEFib3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mby1hYm91dFwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGluZm8pO1xuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcDEudGV4dENvbnRlbnQgPSBcIlRoZSBMZWFreSBDYXVsZHJvbiB3YXMgYnVpbHQgaW4gdGhlIDE1MDBzIGJ5IERhaXN5IERvZGRlcmlkZ2UuIEl0cyB0cnVlIGFkZHJlc3MgaXMgbnVtYmVyIG9uZSBEaWFnb24gQWxsZXksIGFuZCBpdCBpcyBiZWxpZXZlZCB0byBoYXZlIGJlZW4gYnVpbHQgYWxvbmcgd2l0aCB0aGUgcmVzdCBvZiB0aGUgd2l6YXJkaW5nIHN0cmVldC5cIjtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHAxKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAyLnRleHRDb250ZW50ID0gXCJXaXRoIHRoZSBpbXBvc2l0aW9uIG9mIHRoZSBJbnRlcm5hdGlvbmFsIFN0YXR1dGUgb2YgV2l6YXJkaW5nIFNlY3JlY3kgaW4gMTY5MiwgTWluaXN0ZXIgVWxpY2sgR2FtcCBwZXJtaXR0ZWQgdGhlIHB1YiB0byBjb250aW51ZSBpdHMgZXhpc3RlbmNlIGFzIGEgc2FmZSBoYXZlbiBhbmQgcmVmdWdlIGZvciBtZW1iZXJzIG9mIHRoZSBtYWdpY2FsIGNvbW11bml0eS5cIjtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHAyKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAzLnRleHRDb250ZW50ID0gXCJHYW1wIHdhcyBzeW1wYXRoZXRpYyB0byB0aGUgbmVlZCBvZiB3aXphcmRzIHRvIGxldCBvZmYgc3RlYW0gZHVyaW5nIHRoaXMgZGlmZmljdWx0IHRpbWUsIGFuZCBmdXJ0aGVyIGFncmVlZCB0byBnaXZlIHRoZSBsYW5kbG9yZCBwZXJtaXNzaW9uIHRvIGxldCBwZW9wbGUgaW50byBEaWFnb24gQWxsZXkgZnJvbSBoaXMgYmFja3lhcmQsIGJlY2F1c2UgdGhlIHNob3BzIGJlaGluZCB0aGUgTGVha3kgQ2F1bGRyb24gd2VyZSBub3cgYWxzbyBpbiBuZWVkIG9mIHByb3RlY3Rpb24uXCI7XG4gICAgaW5mby5hcHBlbmRDaGlsZChwMyk7XG4gICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwNC50ZXh0Q29udGVudCA9IFwiTWFueSBtb29ucyBsYXRlciwgVGhlIExlYWt5IENhdWxkcm9uIHJlbWFpbnMgdGhlIGlkZWFsIHNwb3QgdG8gY2F0Y2ggdXAgd2l0aCB3aXphcmRpbmcgZ29zc2lwIG92ZXIgYSBnaWxseXdhdGVyIG9yIHJlbGF4IGFmdGVyIGEgZGF5IG9mIHNob3BwaW5nIHdpdGggc29tZSBzaGVwaGVyZHMgcGllLiBXZSBob3BlIHlvdSdsbCBqb2luIHVzIVwiO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocDQpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBcIkluZm9ybWF0aW9uIGNvdXJ0ZXN5IG9mIDxhIGhyZWY9J2h0dHBzOi8vaGFycnlwb3R0ZXIuZmFuZG9tLmNvbS93aWtpL0xlYWt5X0NhdWxkcm9uLyc+VGhlIFdpa2k8L2E+LlwiO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgfSIsImV4cG9ydCBjb25zdCBsb2FkQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbnRyby50ZXh0Q29udGVudCA9IFwiWW91IGFyZSB3ZWxjb21lIHRvIGxlYXZlIHVzIGEgbWVzc2FnZSBoZXJlLCBidXQgdGhlIE11Z2dsZSBpbnRlcm5ldCBkb2VzIG5vdCB3b3JrIHZlcnkgb2Z0ZW4sIHNvIHBsZWFzZSBmb3JnaXZlIHVzIGlmIHdlIGRvIG5vdCByZXNwb25kIGluIGEgdGltZWx5IG1hbm5lci4gLVRvbVwiO1xuICBtYWluLmFwcGVuZENoaWxkKGludHJvKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJzdWJtaXQucGhwXCIpO1xuICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBuYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuYW1lXCIpO1xuICBuYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmFtZVwiKTtcblxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZW1haWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImVtYWlsXCIpO1xuICBlbWFpbC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZW1haWxcIik7XG4gIGVtYWlsLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW1haWxcIik7XG5cbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibWVzc2FnZVwiKTtcbiAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIllvdXIgbWVzc2FnZSBoZXJlXCIpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG4gIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGJyLmNsb25lTm9kZSgpKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBtYWluLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbmZvMS50ZXh0Q29udGVudCA9IFwiUGhvbmU6ICs0NCA3MzQxIDEyMzQ1NlwiO1xuICBpbmZvLmFwcGVuZENoaWxkKGluZm8xKTtcbiAgaW5mby5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGNvbnN0IGluZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZm8yLnRleHRDb250ZW50ID0gXCJBZGRyZXNzOiA3NTMgQ2hhcmluZyBDcm9zcyBSb2FkXCI7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5mbzIpO1xuICBtYWluLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1hcC5pbm5lckhUTUwgPSBcIjxpbWcgc3JjPScuLi9zcmMvaW1hZ2VzL21hcC5naWYnIHdpZHRoPSc1MDBweCc+XCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWFwKTtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxpbmsuaW5uZXJIVE1MID0gXCI8YSBocmVmPSdodHRwOi8vbWVtYmVycy5tYWRhc2FmaXNoLmNvbS9+Y2pfd2hpdGVob3VuZC9GYW5maWMvTG9jYXRpb25fTG9jYXRpb24vRGlhZ29uX0FsbGV5Lmh0bSc+SW1hZ2UgU291cmNlPC9hPlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGxpbmspO1xufTsiLCJpbXBvcnQgeyBsb2FkQWJvdXQgfSBmcm9tIFwiLi9hYm91dC5qc1wiO1xuXG5leHBvcnQgY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWhvbWVcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVGhlIExlYWt5IENhdWxkcm9uXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGNvbnN0IGJsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmx1cmIuY2xhc3NMaXN0LmFkZChcImJsdXJiXCIpO1xuICBibHVyYi50ZXh0Q29udGVudCA9IFwiRmlyc3QtcmF0ZSBmb29kLCBkcmluaywgYW5kIGxvZGdpbmcgZm9yIHdpdGNoZXMgYW5kIHdpemFyZHMsIGVzcGVjaWFsbHkgdGhvc2UgaGVhZGluZyB0byBEaWFnb24gQWxsZXkgb3IgbG9va2luZyBmb3IgYSBjb3p5IHBsYWNlIHRvIGRpbmVcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChibHVyYik7XG4gIGNvbnN0IGxlYXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGVhcm4uY2xhc3NMaXN0LmFkZChcImxlYXJuXCIpO1xuICBsZWFybi50ZXh0Q29udGVudCA9IFwiTGVhcm4gTW9yZVwiO1xuICBsZWFybi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRBYm91dCgpO1xuICB9KVxuICBtYWluLmFwcGVuZENoaWxkKGxlYXJuKTtcbn07IiwiaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuLi9tZW51LmpzJztcblxuZXhwb3J0IGNvbnN0IGxvYWRCZXZlcmFnZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJCZXZlcmFnZXNcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBjYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQxLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm8xLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNvbnN0IGltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW1hZ2UxLmlubmVySFRNTCA9IFwiPGltZyBzcmM9Jy4uL3NyYy9pbWFnZXMvdGVhLnBuZycgaGVpZ2h0PScxNzBweCcgYWx0PSdQaWN0dXJlIG9mIHRlYSBhbmQgY3J1bXBldHMnPlwiO1xuICAgIGNhcmQxLmFwcGVuZENoaWxkKGltYWdlMSk7XG4gICAgY2FyZDEuYXBwZW5kQ2hpbGQoaW5mbzEpO1xuICAgIGNvbnN0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQxLnRleHRDb250ZW50ID0gXCJUZWEgYW5kIENydW1wZXRzXCI7XG4gICAgaW5mbzEuYXBwZW5kQ2hpbGQoaGVhZDEpO1xuICAgIGNvbnN0IGJsdXJiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiMS50ZXh0Q29udGVudCA9IFwiQSBwb3Qgb2YgdGVhIHBhaXJlZCB3aXRoIG91ciBjcnVtYmx5IGNydW1wZXRzLiBBZGQgYSBzaG90IG9mIE9nZGVuJ3MgT2xkIEZpcmV3aGlza3kgaWYgeW91J3JlIGJvbGQhXCI7XG4gICAgaW5mbzEuYXBwZW5kQ2hpbGQoYmx1cmIxKTtcbiAgICBjb25zdCBwcmljZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmljZTEudGV4dENvbnRlbnQgPSBcIjJTIDVLXCI7XG4gICAgcHJpY2UxLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBpbmZvMS5hcHBlbmRDaGlsZChwcmljZTEpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDEpO1xuXG4gICAgY29uc3QgY2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkMi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvMi5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjb25zdCBpbWFnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltYWdlMi5pbm5lckhUTUwgPSBcIjxpbWcgc3JjPScuLi9zcmMvaW1hZ2VzL2dpbGx5LnBuZycgaGVpZ2h0PScxNzBweCcgYWx0PSdQaWN0dXJlIG9mIGdpbGx5d2F0ZXInPlwiO1xuICAgIGNhcmQyLmFwcGVuZENoaWxkKGltYWdlMik7XG4gICAgY2FyZDIuYXBwZW5kQ2hpbGQoaW5mbzIpO1xuICAgIGNvbnN0IGhlYWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQyLnRleHRDb250ZW50ID0gXCJHaWxseXdhdGVyXCI7XG4gICAgaW5mbzIuYXBwZW5kQ2hpbGQoaGVhZDIpO1xuICAgIGNvbnN0IGJsdXJiMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiMi50ZXh0Q29udGVudCA9IFwiQSBob3VzZSBmYXZvcml0ZSwgZ2FybmlzaGVkIHdpdGggeW91ciBjaG9pY2Ugb2YgY3VjdW1iZXIsIG1pbnQsIGxlbW9uLCByYXNwYmVycnksIG9yIG9uaW9uLlwiO1xuICAgIGluZm8yLmFwcGVuZENoaWxkKGJsdXJiMik7XG4gICAgY29uc3QgcHJpY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2UyLnRleHRDb250ZW50ID0gXCIyUyAxMktcIjtcbiAgICBwcmljZTIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICAgIGluZm8yLmFwcGVuZENoaWxkKHByaWNlMik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMik7XG5cbiAgICBjb25zdCBjYXJkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQzLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm8zLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNvbnN0IGltYWdlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW1hZ2UzLmlubmVySFRNTCA9IFwiPGltZyBzcmM9Jy4uL3NyYy9pbWFnZXMvYnV0dGVyLnBuZycgaGVpZ2h0PScxNzBweCcgYWx0PSdQaWN0dXJlIG9mIGJ1dHRlcmJlZXInPlwiO1xuICAgIGNhcmQzLmFwcGVuZENoaWxkKGltYWdlMyk7XG4gICAgY2FyZDMuYXBwZW5kQ2hpbGQoaW5mbzMpO1xuICAgIGNvbnN0IGhlYWQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQzLnRleHRDb250ZW50ID0gXCJCdXR0ZXJiZWVyXCI7XG4gICAgaW5mbzMuYXBwZW5kQ2hpbGQoaGVhZDMpO1xuICAgIGNvbnN0IGJsdXJiMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiMy50ZXh0Q29udGVudCA9IFwiR3VhcmFudGVlZCB0byB3YXJtIHlvdSB1cCBmcm9tIGhlYWQgdG8gdG9lLlwiO1xuICAgIGluZm8zLmFwcGVuZENoaWxkKGJsdXJiMyk7XG4gICAgY29uc3QgcHJpY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2UzLnRleHRDb250ZW50ID0gXCI0U1wiO1xuICAgIHByaWNlMy5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgaW5mbzMuYXBwZW5kQ2hpbGQocHJpY2UzKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQzKTtcblxuICAgIGNvbnN0IGNhcmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzQuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29uc3QgaW1hZ2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbWFnZTQuaW5uZXJIVE1MID0gXCI8aW1nIHNyYz0nLi4vc3JjL2ltYWdlcy9wdW1wa2luLnBuZycgaGVpZ2h0PScxNzBweCcgYWx0PSdQaWN0dXJlIG9mIHB1bXBraW4ganVpY2UnPlwiO1xuICAgIGNhcmQ0LmFwcGVuZENoaWxkKGltYWdlNCk7XG4gICAgY2FyZDQuYXBwZW5kQ2hpbGQoaW5mbzQpO1xuICAgIGNvbnN0IGhlYWQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQ0LnRleHRDb250ZW50ID0gXCJQdW1wa2luIEp1aWNlXCI7XG4gICAgaW5mbzQuYXBwZW5kQ2hpbGQoaGVhZDQpO1xuICAgIGNvbnN0IGJsdXJiNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiNC50ZXh0Q29udGVudCA9IFwiQ3JlYW15IGFuZCBob3VzZS1tYWRlLCBwZXJmZWN0IHRvIGFjY29tcGFueSBhbnkgZGlzaCBvciBzaXAgb24gaXRzIG93bi5cIjtcbiAgICBpbmZvNC5hcHBlbmRDaGlsZChibHVyYjQpO1xuICAgIGNvbnN0IHByaWNlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaWNlNC50ZXh0Q29udGVudCA9IFwiM1MgNEtcIjtcbiAgICBwcmljZTQuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICAgIGluZm80LmFwcGVuZENoaWxkKHByaWNlNCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkNCk7XG5cbiAgICBjb25zdCBjYXJkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQ1LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm81LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNvbnN0IGltYWdlNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW1hZ2U1LmlubmVySFRNTCA9IFwiPGltZyBzcmM9Jy4uL3NyYy9pbWFnZXMvbWVhZC5wbmcnIGhlaWdodD0nMTcwcHgnIGFsdD0nUGljdHVyZSBvZiBtZWFkJz5cIjtcbiAgICBjYXJkNS5hcHBlbmRDaGlsZChpbWFnZTUpO1xuICAgIGNhcmQ1LmFwcGVuZENoaWxkKGluZm81KTtcbiAgICBjb25zdCBoZWFkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkNS50ZXh0Q29udGVudCA9IFwiTWVhZFwiO1xuICAgIGluZm81LmFwcGVuZENoaWxkKGhlYWQ1KTtcbiAgICBjb25zdCBibHVyYjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjUudGV4dENvbnRlbnQgPSBcIk91ciBhZ2Utb2xkIHJlY2lwZSBnb2VzIGJhY2sgdG8gd2hlbiBUaGUgTGVha3kgQ2F1bGRyb24gd2FzIGVzdGFibGlzaGVkLiBNdXN0IGJlIDE4Ky5cIjtcbiAgICBpbmZvNS5hcHBlbmRDaGlsZChibHVyYjUpO1xuICAgIGNvbnN0IHByaWNlNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaWNlNS50ZXh0Q29udGVudCA9IFwiNVMgM0tcIjtcbiAgICBwcmljZTUuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICAgIGluZm81LmFwcGVuZENoaWxkKHByaWNlNSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkNSk7XG5cbiAgICBjb25zdCBtYWlubWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbWFpbm1lbnUudGV4dENvbnRlbnQgPSBcIk1haW4gTWVudVwiO1xuICAgIG1haW5tZW51LmNsYXNzTGlzdC5hZGQoXCJtYWlubWVudVwiKTtcbiAgICBtYWlubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbG9hZE1lbnUoKTtcbiAgICB9KVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbm1lbnUpO1xuICB9IiwiaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuLi9tZW51LmpzJztcblxuZXhwb3J0IGNvbnN0IGxvYWREZXNzZXJ0cyA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkRlc3NlcnRzXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgY2FyZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkMS5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvMS5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjb25zdCBpbWFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltYWdlMS5pbm5lckhUTUwgPSBcIjxpbWcgc3JjPScuLi9zcmMvaW1hZ2VzL3Nwb3R0ZWQucG5nJyBoZWlnaHQ9JzE3MHB4JyBhbHQ9J1BpY3R1cmUgb2Ygc3BvdHRlZCBkaWNrJz5cIjtcbiAgICBjYXJkMS5hcHBlbmRDaGlsZChpbWFnZTEpO1xuICAgIGNhcmQxLmFwcGVuZENoaWxkKGluZm8xKTtcbiAgICBjb25zdCBoZWFkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkMS50ZXh0Q29udGVudCA9IFwiU3BvdHRlZCBEaWNrXCI7XG4gICAgaW5mbzEuYXBwZW5kQ2hpbGQoaGVhZDEpO1xuICAgIGNvbnN0IGJsdXJiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiMS50ZXh0Q29udGVudCA9IFwiQ2FrZSB0aGF0IGNvbnRhaW5zIGRyaWVkIHJhaXNpbnMgYW5kIGN1cnJhbnRzLCBhbmQgaXMgdG9wcGVkIHdpdGggb3VyIGNyZWFteSBjdXN0YXJkLlwiO1xuICAgIGluZm8xLmFwcGVuZENoaWxkKGJsdXJiMSk7XG4gICAgY29uc3QgcHJpY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2UxLnRleHRDb250ZW50ID0gXCI2UyAxMUtcIjtcbiAgICBwcmljZTEuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICAgIGluZm8xLmFwcGVuZENoaWxkKHByaWNlMSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMSk7XG5cbiAgICBjb25zdCBjYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQyLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm8yLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNvbnN0IGltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW1hZ2UyLmlubmVySFRNTCA9IFwiPGltZyBzcmM9Jy4uL3NyYy9pbWFnZXMvdHJlYWNsZS5wbmcnIGhlaWdodD0nMTcwcHgnIGFsdD0nUGljdHVyZSBvZiB0cmVhY2xlIHRhcnQnPlwiO1xuICAgIGNhcmQyLmFwcGVuZENoaWxkKGltYWdlMik7XG4gICAgY2FyZDIuYXBwZW5kQ2hpbGQoaW5mbzIpO1xuICAgIGNvbnN0IGhlYWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQyLnRleHRDb250ZW50ID0gXCJUcmVhY2xlIFRhcnRcIjtcbiAgICBpbmZvMi5hcHBlbmRDaGlsZChoZWFkMik7XG4gICAgY29uc3QgYmx1cmIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmIyLnRleHRDb250ZW50ID0gXCJCYWtlZCB1bnRpbCBnb2xkZW4gY3Jpc3AsIGFuZCBzZXJ2ZWQgd2l0aCBvdXIgaG9tZW1hZGUgdmFuaWxsYSBpY2UgY3JlYW0uXCI7XG4gICAgaW5mbzIuYXBwZW5kQ2hpbGQoYmx1cmIyKTtcbiAgICBjb25zdCBwcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmljZTIudGV4dENvbnRlbnQgPSBcIjhTXCI7XG4gICAgcHJpY2UyLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBpbmZvMi5hcHBlbmRDaGlsZChwcmljZTIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDIpO1xuXG4gICAgY29uc3QgY2FyZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkMy5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvMy5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjb25zdCBpbWFnZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltYWdlMy5pbm5lckhUTUwgPSBcIjxpbWcgc3JjPScuLi9zcmMvaW1hZ2VzL3B1ZGRpbmcucG5nJyBoZWlnaHQ9JzE3MHB4JyBhbHQ9J1BpY3R1cmUgb2YgY2hvY29sYXRlIHB1ZGRpbmcnPlwiO1xuICAgIGNhcmQzLmFwcGVuZENoaWxkKGltYWdlMyk7XG4gICAgY2FyZDMuYXBwZW5kQ2hpbGQoaW5mbzMpO1xuICAgIGNvbnN0IGhlYWQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQzLnRleHRDb250ZW50ID0gXCJDaG9jb2xhdGUgUHVkZGluZ1wiO1xuICAgIGluZm8zLmFwcGVuZENoaWxkKGhlYWQzKTtcbiAgICBjb25zdCBibHVyYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjMudGV4dENvbnRlbnQgPSBcIk1hZGUgd2l0aCByZWFsIG1pbGsgY2hvY29sYXRlIGFuZCBnYXJuaXNoZWQgd2l0aCBtaW50LlwiO1xuICAgIGluZm8zLmFwcGVuZENoaWxkKGJsdXJiMyk7XG4gICAgY29uc3QgcHJpY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2UzLnRleHRDb250ZW50ID0gXCI2UyA3S1wiO1xuICAgIHByaWNlMy5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgaW5mbzMuYXBwZW5kQ2hpbGQocHJpY2UzKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQzKTtcblxuICAgIGNvbnN0IGNhcmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzQuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29uc3QgaW1hZ2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbWFnZTQuaW5uZXJIVE1MID0gXCI8aW1nIHNyYz0nLi4vc3JjL2ltYWdlcy9kb3VnaG51dHMucG5nJyBoZWlnaHQ9JzE3MHB4JyBhbHQ9J1BpY3R1cmUgb2YgamFtIGRvdWdobnV0cyc+XCI7XG4gICAgY2FyZDQuYXBwZW5kQ2hpbGQoaW1hZ2U0KTtcbiAgICBjYXJkNC5hcHBlbmRDaGlsZChpbmZvNCk7XG4gICAgY29uc3QgaGVhZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZDQudGV4dENvbnRlbnQgPSBcIkphbSBEb3VnaG51dHNcIjtcbiAgICBpbmZvNC5hcHBlbmRDaGlsZChoZWFkNCk7XG4gICAgY29uc3QgYmx1cmI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmI0LnRleHRDb250ZW50ID0gXCJBIGRlc3NlcnQgZm9yIGV2ZXJ5IG9jY2FzaW9uIC0gYXZhaWxhYmxlIGluIHBsYXRlcyBvZiA0LCA2LCBvciA4LlwiO1xuICAgIGluZm80LmFwcGVuZENoaWxkKGJsdXJiNCk7XG4gICAgY29uc3QgcHJpY2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2U0LnRleHRDb250ZW50ID0gXCI0UyAxMksrXCI7XG4gICAgcHJpY2U0LmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBpbmZvNC5hcHBlbmRDaGlsZChwcmljZTQpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDQpO1xuXG4gICAgY29uc3QgbWFpbm1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1haW5tZW51LnRleHRDb250ZW50ID0gXCJNYWluIE1lbnVcIjtcbiAgICBtYWlubWVudS5jbGFzc0xpc3QuYWRkKFwibWFpbm1lbnVcIik7XG4gICAgbWFpbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvYWRNZW51KCk7XG4gICAgfSlcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5tZW51KTtcbiAgfSIsImltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi4vbWVudS5qcyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkRGlzaGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiU2lnbmF0dXJlIERpc2hlc1wiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDEuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzEuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29uc3QgaW1hZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbWFnZTEuaW5uZXJIVE1MID0gXCI8aW1nIHNyYz0nLi4vc3JjL2ltYWdlcy9iYW5nZXJzLnBuZycgaGVpZ2h0PScxNzBweCcgYWx0PSdQaWN0dXJlIG9mIGJhbmdlcnMgYW5kIG1hc2gnPlwiO1xuICAgIGNhcmQxLmFwcGVuZENoaWxkKGltYWdlMSk7XG4gICAgY2FyZDEuYXBwZW5kQ2hpbGQoaW5mbzEpO1xuICAgIGNvbnN0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQxLnRleHRDb250ZW50ID0gXCJCYW5nZXJzIGFuZCBNYXNoXCI7XG4gICAgaW5mbzEuYXBwZW5kQ2hpbGQoaGVhZDEpO1xuICAgIGNvbnN0IGJsdXJiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiMS50ZXh0Q29udGVudCA9IFwiVGhyZWUgc3VjY3VsZW50IHNhdXNhZ2UgbGlua3Mgc2VydmVkIHdpdGggbWFzaGVkIHBvdGF0b2VzIGFuZCBncmF2eS5cIjtcbiAgICBpbmZvMS5hcHBlbmRDaGlsZChibHVyYjEpO1xuICAgIGNvbnN0IHByaWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaWNlMS50ZXh0Q29udGVudCA9IFwiMTFTIDIwS1wiO1xuICAgIHByaWNlMS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgaW5mbzEuYXBwZW5kQ2hpbGQocHJpY2UxKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQxKTtcblxuICAgIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDIuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzIuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29uc3QgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbWFnZTIuaW5uZXJIVE1MID0gXCI8aW1nIHNyYz0nLi4vc3JjL2ltYWdlcy9raWRuZXkucG5nJyBoZWlnaHQ9JzE3MHB4JyBhbHQ9J1BpY3R1cmUgb2Ygc3RlYWsgYW5kIGtpZG5leSBwaWUnPlwiO1xuICAgIGNhcmQyLmFwcGVuZENoaWxkKGltYWdlMik7XG4gICAgY2FyZDIuYXBwZW5kQ2hpbGQoaW5mbzIpO1xuICAgIGNvbnN0IGhlYWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQyLnRleHRDb250ZW50ID0gXCJTdGVhayBhbmQgS2lkbmV5IFBpZVwiO1xuICAgIGluZm8yLmFwcGVuZENoaWxkKGhlYWQyKTtcbiAgICBjb25zdCBibHVyYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjIudGV4dENvbnRlbnQgPSBcIk91ciBmbGFreSBwYXN0cnkgY3J1c3QgZmlsbGVkIHdpdGggYmVlZiwga2lkbmV5LCBvbmlvbiwgY2Fycm90LCBtdXNocm9vbSwgYW5kIGEgcmljaCBncmF2eS5cIjtcbiAgICBpbmZvMi5hcHBlbmRDaGlsZChibHVyYjIpO1xuICAgIGNvbnN0IHByaWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaWNlMi50ZXh0Q29udGVudCA9IFwiMTNTIDEyS1wiO1xuICAgIHByaWNlMi5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgaW5mbzIuYXBwZW5kQ2hpbGQocHJpY2UyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQyKTtcblxuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDMuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzMuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29uc3QgaW1hZ2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbWFnZTMuaW5uZXJIVE1MID0gXCI8aW1nIHNyYz0nLi4vc3JjL2ltYWdlcy9wZWEucG5nJyBoZWlnaHQ9JzE3MHB4JyBhbHQ9J1BpY3R1cmUgb2YgcGVhIHNvdXAnPlwiO1xuICAgIGNhcmQzLmFwcGVuZENoaWxkKGltYWdlMyk7XG4gICAgY2FyZDMuYXBwZW5kQ2hpbGQoaW5mbzMpO1xuICAgIGNvbnN0IGhlYWQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQzLnRleHRDb250ZW50ID0gXCJQZWEgU291cFwiO1xuICAgIGluZm8zLmFwcGVuZENoaWxkKGhlYWQzKTtcbiAgICBjb25zdCBibHVyYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjMudGV4dENvbnRlbnQgPSBcIkEgaG91c2UgZmF2b3JpdGUsIG91ciBwZWEgc291cCBpcyByaWNoIGFuZCBwZXJmZWN0IHRvIGFjY29tcGFueSBhbm90aGVyIGRpc2gsIG9yIHRvIGVuam95IG9uIGl0cyBvd24uXCI7XG4gICAgaW5mbzMuYXBwZW5kQ2hpbGQoYmx1cmIzKTtcbiAgICBjb25zdCBwcmljZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmljZTMudGV4dENvbnRlbnQgPSBcIjlTIDhLXCI7XG4gICAgcHJpY2UzLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBpbmZvMy5hcHBlbmRDaGlsZChwcmljZTMpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDMpO1xuXG4gICAgY29uc3QgY2FyZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkNC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvNC5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjb25zdCBpbWFnZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltYWdlNC5pbm5lckhUTUwgPSBcIjxpbWcgc3JjPScuLi9zcmMvaW1hZ2VzL3lvcmtzaGlyZS5wbmcnIGhlaWdodD0nMTcwcHgnIGFsdD0nUGljdHVyZSBvZiB5b3Jrc2hpcmUgcHVkZGluZyc+XCI7XG4gICAgY2FyZDQuYXBwZW5kQ2hpbGQoaW1hZ2U0KTtcbiAgICBjYXJkNC5hcHBlbmRDaGlsZChpbmZvNCk7XG4gICAgY29uc3QgaGVhZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZDQudGV4dENvbnRlbnQgPSBcIllvcmtzaGlyZSBQdWRkaW5nXCI7XG4gICAgaW5mbzQuYXBwZW5kQ2hpbGQoaGVhZDQpO1xuICAgIGNvbnN0IGJsdXJiNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiNC50ZXh0Q29udGVudCA9IFwiQSBkZWxlY3RhYmxlIHBhc3RyeSB0b3BwZWQgd2l0aCByb2FzdCBiZWVmIGFuZCBncmF2eSwgYW5kIHNlcnZlZCB3aXRoIGdyaWxsZWQgc2Vhc29uYWwgdmVnZXRhYmxlcy5cIjtcbiAgICBpbmZvNC5hcHBlbmRDaGlsZChibHVyYjQpO1xuICAgIGNvbnN0IHByaWNlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaWNlNC50ZXh0Q29udGVudCA9IFwiMTRTXCI7XG4gICAgcHJpY2U0LmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBpbmZvNC5hcHBlbmRDaGlsZChwcmljZTQpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDQpO1xuXG4gICAgY29uc3QgY2FyZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkNS5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvNS5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjb25zdCBpbWFnZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltYWdlNS5pbm5lckhUTUwgPSBcIjxpbWcgc3JjPScuLi9zcmMvaW1hZ2VzL3NoZXBoZXJkLnBuZycgaGVpZ2h0PScxNzBweCcgYWx0PSdQaWN0dXJlIG9mIHNoZXBoZXJkcyBwaWUnPlwiO1xuICAgIGNhcmQ1LmFwcGVuZENoaWxkKGltYWdlNSk7XG4gICAgY2FyZDUuYXBwZW5kQ2hpbGQoaW5mbzUpO1xuICAgIGNvbnN0IGhlYWQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQ1LnRleHRDb250ZW50ID0gXCJTaGVwaGVyZHMgUGllXCI7XG4gICAgaW5mbzUuYXBwZW5kQ2hpbGQoaGVhZDUpO1xuICAgIGNvbnN0IGJsdXJiNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiNS50ZXh0Q29udGVudCA9IFwiTWluY2VkIGxhbWIsIGdyYXZ5LCBhbmQgdmVnZXRhYmxlcywgdG9wcGVkIHdpdGggbWFzaGVkIHBvdGF0b2VzLiBTZXJ2ZXMgdHdvLlwiO1xuICAgIGluZm81LmFwcGVuZENoaWxkKGJsdXJiNSk7XG4gICAgY29uc3QgcHJpY2U1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2U1LnRleHRDb250ZW50ID0gXCIxR1wiO1xuICAgIHByaWNlNS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgaW5mbzUuYXBwZW5kQ2hpbGQocHJpY2U1KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQ1KTtcblxuICAgIGNvbnN0IGNhcmQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDYuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzYuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29uc3QgaW1hZ2U2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbWFnZTYuaW5uZXJIVE1MID0gXCI8aW1nIHNyYz0nLi4vc3JjL2ltYWdlcy90b2FkLnBuZycgaGVpZ2h0PScxNzBweCcgYWx0PSdQaWN0dXJlIG9mIHRvYWQgaW4gdGhlIGhvbGUnPlwiO1xuICAgIGNhcmQ2LmFwcGVuZENoaWxkKGltYWdlNik7XG4gICAgY2FyZDYuYXBwZW5kQ2hpbGQoaW5mbzYpO1xuICAgIGNvbnN0IGhlYWQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQ2LnRleHRDb250ZW50ID0gXCJUb2FkIGluIHRoZSBIb2xlXCI7XG4gICAgaW5mbzYuYXBwZW5kQ2hpbGQoaGVhZDYpO1xuICAgIGNvbnN0IGJsdXJiNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiNi50ZXh0Q29udGVudCA9IFwiT3VyIGF3YXJkLXdpbm5pbmcgWW9ya3NoaXJlIHB1ZGRpbmcgd2l0aCBzYXVzYWdlcywgZ2FybmlzaGVkIHdpdGggb25pb24gZ3JhdnkgYW5kIHBhcnNsZXkuXCI7XG4gICAgaW5mbzYuYXBwZW5kQ2hpbGQoYmx1cmI2KTtcbiAgICBjb25zdCBwcmljZTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmljZTYudGV4dENvbnRlbnQgPSBcIjEwUyA3S1wiO1xuICAgIHByaWNlNi5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgaW5mbzYuYXBwZW5kQ2hpbGQocHJpY2U2KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQ2KTtcblxuICAgIGNvbnN0IG1haW5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtYWlubWVudS50ZXh0Q29udGVudCA9IFwiTWFpbiBNZW51XCI7XG4gICAgbWFpbm1lbnUuY2xhc3NMaXN0LmFkZChcIm1haW5tZW51XCIpO1xuICAgIG1haW5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsb2FkTWVudSgpO1xuICAgIH0pXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWlubWVudSk7XG4gIH0iLCJpbXBvcnQgeyBsb2FkQmV2ZXJhZ2VzIH0gZnJvbSAnLi9tZW51LXBhZ2VzL2JldmVyYWdlcy5qcyc7XG5pbXBvcnQgeyBsb2FkRGlzaGVzIH0gZnJvbSAnLi9tZW51LXBhZ2VzL2Rpc2hlcy5qcyc7XG5pbXBvcnQgeyBsb2FkRGVzc2VydHMgfSBmcm9tICcuL21lbnUtcGFnZXMvZGVzc2VydHMuanMnO1xuXG5cbmV4cG9ydCBjb25zdCBsb2FkTWVudSA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwib3B0aW9uc1wiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChvcHRpb25zKTtcbiAgY29uc3QgYmV2ZXJhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYmV2ZXJhZ2VzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgYmV2ZXJhZ2VzLnRleHRDb250ZW50ID0gXCJCZXZlcmFnZXNcIjtcbiAgYmV2ZXJhZ2VzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZEJldmVyYWdlcygpO1xuICB9KVxuICBvcHRpb25zLmFwcGVuZENoaWxkKGJldmVyYWdlcyk7XG4gIGNvbnN0IGRpc2hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRpc2hlcy5jbGFzc0xpc3QuYWRkKFwibWVudS1idG5cIik7XG4gIGRpc2hlcy50ZXh0Q29udGVudCA9IFwiU2lnbmF0dXJlIERpc2hlc1wiO1xuICBkaXNoZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkRGlzaGVzKCk7XG4gIH0pXG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQoZGlzaGVzKTtcbiAgY29uc3QgZGVzc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZXNzZXJ0cy5jbGFzc0xpc3QuYWRkKFwibWVudS1idG5cIik7XG4gIGRlc3NlcnRzLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiO1xuICBkZXNzZXJ0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWREZXNzZXJ0cygpO1xuICB9KVxuICBvcHRpb25zLmFwcGVuZENoaWxkKGRlc3NlcnRzKTtcbn0iLCJleHBvcnQgY29uc3QgbG9hZFNpdGUgPSAoKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdmJhcik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChob21lKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKG1lbnUpO1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKTtcbiAgYWJvdXQudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChhYm91dCk7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW4taG9tZVwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUaGUgTGVha3kgQ2F1bGRyb25cIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgY29uc3QgYmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBibHVyYi5jbGFzc0xpc3QuYWRkKFwiYmx1cmJcIik7XG4gIGJsdXJiLnRleHRDb250ZW50ID0gXCJGaXJzdC1yYXRlIGZvb2QsIGRyaW5rLCBhbmQgbG9kZ2luZyBmb3Igd2l0Y2hlcyBhbmQgd2l6YXJkcywgZXNwZWNpYWxseSB0aG9zZSBoZWFkaW5nIHRvIERpYWdvbiBBbGxleSBvciBsb29raW5nIGZvciBhIGNvenkgcGxhY2UgdG8gZGluZVwiO1xuICBtYWluLmFwcGVuZENoaWxkKGJsdXJiKTtcbiAgY29uc3QgbGVhcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZWFybi5jbGFzc0xpc3QuYWRkKFwibGVhcm5cIik7XG4gIGxlYXJuLnRleHRDb250ZW50ID0gXCJMZWFybiBNb3JlXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQobGVhcm4pO1xufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImNvbnNvbGUubG9nKFwiRXZlcnl0aGluZyBpcyBsaW5rZWQuXCIpO1xuXG4gaW1wb3J0IHsgbG9hZFNpdGUgfSBmcm9tIFwiLi9zaXRlLmpzXCI7XG5cbmltcG9ydCB7IGxvYWRDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gXCIuL21lbnUuanNcIlxuaW1wb3J0IHsgbG9hZEFib3V0IH0gZnJvbSBcIi4vYWJvdXQuanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBsb2FkQ29udGFjdCgpO1xuXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkQ29udGFjdCgpO1xufSlcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbG9hZEhvbWUoKTtcbn0pXG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvYWRNZW51KCk7XG59KVxuXG5jb25zdCBsZWFybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVhcm5cIik7XG5sZWFybi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkQWJvdXQoKTtcbn0pXG5cbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dFwiKTtcbmFib3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvYWRBYm91dCgpO1xufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9