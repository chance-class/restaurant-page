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
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cauldron2.png */ "./src/images/cauldron2.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
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

.content {
  height: 100vh;
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
    background-repeat: no-repeat;
    background-COLOR: rgb(53, 47, 47);
}

h1 {
  font-family: "HARRYP", sans-serif;
  font-size: 6rem;
  margin: 0;
  font-weight: 300;
  color: #d4d4d8;
  padding-bottom: 5px;
}

.navbar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  align-content: center;
  height: 35px;
  padding-bottom: 15px;
}

.container {
  display: flex;
  justify-content: center;
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
  margin: 15px auto 40px;
  align-items: center;
  background: rgba(53, 47, 47, 0.75);
  padding: 40px;
}

.main-home {
  background: transparent;
  color: white;
  text-align: center;
  justify-content: center;
  align-content: center;
  padding-top: 20px;
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

.mainmenu {
  width: 150px;
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

@media screen and (max-width: 900px) {
    body {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4CAAwB;AAC1B;;AAEA;EACE,oBAAoB;EACpB,4CAA6B;AAC/B;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;IACI,yDAA4C;IAC5C,sBAAsB;IACtB,4BAA4B;IAC5B,iCAAiC;AACrC;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,SAAS;EACT,gBAAgB;EAChB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,uBAAuB;EACvB,qBAAqB;EACrB,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;;;;;;;;;;;IAWI;;AAEJ;;EAEE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,mBAAmB;EACnB,kCAAkC;EAClC,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;;EAEE,iBAAiB;EACjB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gCAAgC;EAChC,uBAAuB;EACvB,aAAa;EACb,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;IACI;QACI,yDAA6C;IACjD;AACJ","sourcesContent":["@font-face {\n  font-family: \"HARRYP\";\n  src: url(./HARRYP__.TTF);\n}\n\n@font-face {\n  font-family: \"Cardo\";\n  src: url(./Cardo-Regular.ttf);\n}\n\n* {\n  font-family: \"Cardo\", sans-serif;\n}\n\n.content {\n  height: 100vh;\n}\n\n.header {\n  height: 75px;\n  display: grid;\n  justify-content: center;\n  align-content: end;\n}\n\nbody {\n    background-image: url(./images/cauldron.png);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-COLOR: rgb(53, 47, 47);\n}\n\nh1 {\n  font-family: \"HARRYP\", sans-serif;\n  font-size: 6rem;\n  margin: 0;\n  font-weight: 300;\n  color: #d4d4d8;\n  padding-bottom: 5px;\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  justify-content: center;\n  align-content: center;\n  height: 35px;\n  padding-bottom: 15px;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n}\n\n/*.container::before {\n    content: \"\";\n    position: absolute;\n    background-image: url(./images/cauldron.png);\n    background-size: cover;\n    background-position: center;\n    top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n    opacity: 0.5;\n  }*/\n\n.main-home, \n.main {\n  position: relative;\n  width: 700px;\n  display: flex;\n  flex-direction: column;\n  margin: 15px auto 40px;\n  align-items: center;\n  background: rgba(53, 47, 47, 0.75);\n  padding: 40px;\n}\n\n.main-home {\n  background: transparent;\n  color: white;\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-top: 20px;\n}\n\n.main > p, \n.main > div > p {\n  font-size: 1.4rem;\n  color: #a1a1aa;\n  margin: 15px 0;\n}\n\n.info {\n  color: #a1a1aa;\n}\n\nh2, \nh3 {\n  color: #d4d4d8;\n}\n\ninput {\n  width: 300px;\n  height: 35px;\n  font-size: 18px;\n  font-family: sans-serif;\n}\n\ntextarea {\n  width: 300px;\n  height: 120px;\n  font-size: 18px;\n  font-family: sans-serif;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.card {\n  width: 500px;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  justify-content: center;\n  padding: 15px;\n  height: 195px;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n  height: 195px;\n}\n\n.price {\n  place-self: end end;\n  margin-top: auto;\n}\n\nh2 {\n  font-size: 2.6rem;\n  margin: 0 0 25px;\n}\n\nh3 {\n  font-size: 1.6rem;\n  margin: 0;\n}\n\n.info > p {\n  font-size: 1.2rem;\n}\n\n.blurb {\n  font-size: 32px;\n  margin-bottom: 20px;\n  color: #d4d4d8;\n}\n\nbutton {\n  margin: 0;\n  height: 40px;\n  width: 120px;\n  font-size: 1.3rem;\n  background-color: #156f75;\n  color:#d4d4d8;\n  border: none;\n  border-radius: 5px;\n}\n\n.mainmenu {\n  width: 150px;\n}\n\na {\n  text-decoration: none;\n  font-weight: 500;\n  color: #a5f3fc;\n}\n\na:hover {\n  font-weight: 600;\n}\n\nh1,\nh2 {\n  text-align: center;\n}\n\n.options {\n  display: grid;\n  gap: 40px;\n  margin: 30px auto;\n}\n\n.menu-btn {\n  width: 200px;\n  height: 55px;\n}\n\n.learn {\n  width: 200px;\n  height: 60px;\n}\n\n@media screen and (max-width: 900px) {\n    body {\n        background-image: url(./images/cauldron2.png);\n    }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _images_map_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/map.gif */ "./src/images/map.gif");


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

  const map = document.createElement("img");
  map.src = _images_map_gif__WEBPACK_IMPORTED_MODULE_0__;
  map.setAttribute("width", "500px");
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
/* harmony import */ var _images_tea_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/tea.png */ "./src/images/tea.png");
/* harmony import */ var _images_gilly_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/gilly.png */ "./src/images/gilly.png");
/* harmony import */ var _images_butter_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/butter.png */ "./src/images/butter.png");
/* harmony import */ var _images_pumpkin_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/pumpkin.png */ "./src/images/pumpkin.png");
/* harmony import */ var _images_mead_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/mead.png */ "./src/images/mead.png");







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
    const image1 = document.createElement("img");
    image1.src = _images_tea_png__WEBPACK_IMPORTED_MODULE_1__;
    image1.setAttribute("height", "170px");
    image1.setAttribute("alt", "Picture of tea and crumpets");
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
    const image2 = document.createElement("img");
    image2.src = _images_gilly_png__WEBPACK_IMPORTED_MODULE_2__;
    image2.setAttribute("height", "170px");
    image2.setAttribute("alt", "Picture of gillywater");
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
    const image3 = document.createElement("img");
    image3.src = _images_butter_png__WEBPACK_IMPORTED_MODULE_3__;
    image3.setAttribute("height", "170px");
    image3.setAttribute("alt", "Picture of butterbeer");
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
    const image4 = document.createElement("img");
    image4.src = _images_pumpkin_png__WEBPACK_IMPORTED_MODULE_4__;
    image4.setAttribute("height", "170px");
    image4.setAttribute("alt", "Picture of pumpkin juice");
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
    const image5 = document.createElement("img");
    image5.src = _images_mead_png__WEBPACK_IMPORTED_MODULE_5__;
    image5.setAttribute("height", "170px");
    image5.setAttribute("alt", "Picture of mead");
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
/* harmony import */ var _images_spotted_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/spotted.png */ "./src/images/spotted.png");
/* harmony import */ var _images_treacle_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/treacle.png */ "./src/images/treacle.png");
/* harmony import */ var _images_pudding_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/pudding.png */ "./src/images/pudding.png");
/* harmony import */ var _images_doughnuts_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/doughnuts.png */ "./src/images/doughnuts.png");






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
    const image1 = document.createElement("img");
    image1.src = _images_spotted_png__WEBPACK_IMPORTED_MODULE_1__;
    image1.setAttribute("height", "170px");
    image1.setAttribute("alt", "Picture of spotted dick");
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
    const image2 = document.createElement("img");
    image2.src = _images_treacle_png__WEBPACK_IMPORTED_MODULE_2__;
    image2.setAttribute("height", "170px");
    image2.setAttribute("alt", "Picture of treacle tart");
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
    const image3 = document.createElement("img");
    image3.src = _images_pudding_png__WEBPACK_IMPORTED_MODULE_3__;
    image3.setAttribute("height", "170px");
    image3.setAttribute("alt", "Picture of chocolate pudding");
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
    const image4 = document.createElement("img");
    image4.src = _images_doughnuts_png__WEBPACK_IMPORTED_MODULE_4__;
    image4.setAttribute("height", "170px");
    image4.setAttribute("alt", "Picture of jam doughnuts");
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
/* harmony import */ var _images_bangers_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/bangers.png */ "./src/images/bangers.png");
/* harmony import */ var _images_kidney_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/kidney.png */ "./src/images/kidney.png");
/* harmony import */ var _images_pea_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/pea.png */ "./src/images/pea.png");
/* harmony import */ var _images_yorkshire_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/yorkshire.png */ "./src/images/yorkshire.png");
/* harmony import */ var _images_shepherd_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/shepherd.png */ "./src/images/shepherd.png");
/* harmony import */ var _images_toad_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/toad.png */ "./src/images/toad.png");








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
    const image1 = document.createElement("img");
    image1.src = _images_bangers_png__WEBPACK_IMPORTED_MODULE_1__;
    image1.setAttribute("height", "170px");
    image1.setAttribute("alt", "Picture of bangers and mash");
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
    const image2 = document.createElement("img");
    image2.src = _images_kidney_png__WEBPACK_IMPORTED_MODULE_2__;
    image2.setAttribute("height", "170px");
    image2.setAttribute("alt", "Picture of steak and kidney pie");
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
    const image3 = document.createElement("img");
    image3.src = _images_pea_png__WEBPACK_IMPORTED_MODULE_3__;
    image3.setAttribute("height", "170px");
    image3.setAttribute("alt", "Picture of pea soup");
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
    const image4 = document.createElement("img");
    image4.src = _images_yorkshire_png__WEBPACK_IMPORTED_MODULE_4__;
    image4.setAttribute("height", "170px");
    image4.setAttribute("alt", "Picture of yorkshire pudding");
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
    const image5 = document.createElement("img");
    image5.src = _images_shepherd_png__WEBPACK_IMPORTED_MODULE_5__;
    image5.setAttribute("height", "170px");
    image5.setAttribute("alt", "Picture of shepherds pie");
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
    const image6 = document.createElement("img");
    image6.src = _images_toad_png__WEBPACK_IMPORTED_MODULE_6__;
    image6.setAttribute("height", "170px");
    image6.setAttribute("alt", "Picture of toad in the hole");
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

/***/ "./src/images/bangers.png":
/*!********************************!*\
  !*** ./src/images/bangers.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1446327d307c9761f8f8.png";

/***/ }),

/***/ "./src/images/butter.png":
/*!*******************************!*\
  !*** ./src/images/butter.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a57b8ec4b98dd34a9e1.png";

/***/ }),

/***/ "./src/images/cauldron.png":
/*!*********************************!*\
  !*** ./src/images/cauldron.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b7c790a17d4ed4960b4.png";

/***/ }),

/***/ "./src/images/cauldron2.png":
/*!**********************************!*\
  !*** ./src/images/cauldron2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d61a3c3ceeb375adbd2.png";

/***/ }),

/***/ "./src/images/doughnuts.png":
/*!**********************************!*\
  !*** ./src/images/doughnuts.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd7b7a274c995c779405.png";

/***/ }),

/***/ "./src/images/gilly.png":
/*!******************************!*\
  !*** ./src/images/gilly.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4c9391de74cce61927f.png";

/***/ }),

/***/ "./src/images/kidney.png":
/*!*******************************!*\
  !*** ./src/images/kidney.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ffe22216cf7d2240105f.png";

/***/ }),

/***/ "./src/images/map.gif":
/*!****************************!*\
  !*** ./src/images/map.gif ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e301c03173af704a0af.gif";

/***/ }),

/***/ "./src/images/mead.png":
/*!*****************************!*\
  !*** ./src/images/mead.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ba6f3ec1750007faef6.png";

/***/ }),

/***/ "./src/images/pea.png":
/*!****************************!*\
  !*** ./src/images/pea.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c3d98e4fb72348411e5.png";

/***/ }),

/***/ "./src/images/pudding.png":
/*!********************************!*\
  !*** ./src/images/pudding.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba095ed810766e920f97.png";

/***/ }),

/***/ "./src/images/pumpkin.png":
/*!********************************!*\
  !*** ./src/images/pumpkin.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f270a4fa2ee875850801.png";

/***/ }),

/***/ "./src/images/shepherd.png":
/*!*********************************!*\
  !*** ./src/images/shepherd.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af04f649dbdc7665928f.png";

/***/ }),

/***/ "./src/images/spotted.png":
/*!********************************!*\
  !*** ./src/images/spotted.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34be1667f77bc2e123ce.png";

/***/ }),

/***/ "./src/images/tea.png":
/*!****************************!*\
  !*** ./src/images/tea.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61d63929365adaa0fe70.png";

/***/ }),

/***/ "./src/images/toad.png":
/*!*****************************!*\
  !*** ./src/images/toad.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c0487d1e22cdf41c3b0.png";

/***/ }),

/***/ "./src/images/treacle.png":
/*!********************************!*\
  !*** ./src/images/treacle.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "723e34bea53efa0f2927.png";

/***/ }),

/***/ "./src/images/yorkshire.png":
/*!**********************************!*\
  !*** ./src/images/yorkshire.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "579eb3cace265641d2a5.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlHQUFpQztBQUM3RSw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0Qyx1SEFBd0M7QUFDcEYsNENBQTRDLHlIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUNBQW1DO0FBQ25FO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGVBQWUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlB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QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3QjBDOztBQUVuQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDRDQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEV1Qzs7QUFFaEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFTO0FBQ2IsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJzQztBQUNGO0FBQ0k7QUFDRTtBQUNFO0FBQ047O0FBRS9CO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0Q0FBRztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4Q0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwrQ0FBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnREFBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtEQUFRO0FBQ2QsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SXNDO0FBQ007QUFDQTtBQUNBO0FBQ0k7O0FBRXpDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnREFBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnREFBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnREFBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrREFBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtEQUFRO0FBQ2QsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIc0M7QUFDTTtBQUNGO0FBQ047QUFDWTtBQUNGO0FBQ1I7O0FBRS9CO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnREFBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwrQ0FBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Ozs7Ozs7Ozs7O0FDQUE7O0FBRUEsQ0FBc0M7O0FBRUs7QUFDTjtBQUNEO0FBQ0c7QUFDbEI7O0FBRXJCOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHdEQUFXO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxrREFBUTtBQUNWLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsa0RBQVE7QUFDVixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLG9EQUFTO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxvREFBUztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZXMvYmV2ZXJhZ2VzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXBhZ2VzL2Rlc3NlcnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXBhZ2VzL2Rpc2hlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9IQVJSWVBfXy5UVEZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0NhcmRvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY2F1bGRyb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY2F1bGRyb24yLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhBUlJZUFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhcmRvXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2FyZG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogZW5kO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtQ09MT1I6IHJnYig1MywgNDcsIDQ3KTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJIQVJSWVBcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZDRkNGQ4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ubmF2YmFyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qLmNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvY2F1bGRyb24ucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB0b3A6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH0qL1xuXG4ubWFpbi1ob21lLCBcbi5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMTVweCBhdXRvIDQwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTMsIDQ3LCA0NywgMC43NSk7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5tYWluLWhvbWUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ubWFpbiA+IHAsIFxuLm1haW4gPiBkaXYgPiBwIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjYTFhMWFhO1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmluZm8ge1xuICBjb2xvcjogI2ExYTFhYTtcbn1cblxuaDIsIFxuaDMge1xuICBjb2xvcjogI2Q0ZDRkODtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBoZWlnaHQ6IDE5NXB4O1xufVxuXG4uaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTk1cHg7XG59XG5cbi5wcmljZSB7XG4gIHBsYWNlLXNlbGY6IGVuZCBlbmQ7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyLjZyZW07XG4gIG1hcmdpbjogMCAwIDI1cHg7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuLmluZm8gPiBwIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5ibHVyYiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICNkNGQ0ZDg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU2Zjc1O1xuICBjb2xvcjojZDRkNGQ4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1haW5tZW51IHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2E1ZjNmYztcbn1cblxuYTpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmgxLFxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA0MHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuLm1lbnUtYnRuIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbi5sZWFybiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw0Q0FBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSx5REFBNEM7SUFDNUMsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixpQ0FBaUM7QUFDckM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsU0FBUztFQUNULHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7Ozs7Ozs7Ozs7O0lBV0k7O0FBRUo7O0VBRUUsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtJQUNJO1FBQ0kseURBQTZDO0lBQ2pEO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhBUlJZUFxcXCI7XFxuICBzcmM6IHVybCguL0hBUlJZUF9fLlRURik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDYXJkb1xcXCI7XFxuICBzcmM6IHVybCguL0NhcmRvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIkNhcmRvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBlbmQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvY2F1bGRyb24ucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1DT0xPUjogcmdiKDUzLCA0NywgNDcpO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogXFxcIkhBUlJZUFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDZyZW07XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6ICNkNGQ0ZDg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qLmNvbnRhaW5lcjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2NhdWxkcm9uLnBuZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgdG9wOiAwcHg7XFxuICAgICAgICByaWdodDogMHB4O1xcbiAgICAgICAgYm90dG9tOiAwcHg7XFxuICAgICAgICBsZWZ0OiAwcHg7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH0qL1xcblxcbi5tYWluLWhvbWUsIFxcbi5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAxNXB4IGF1dG8gNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDUzLCA0NywgNDcsIDAuNzUpO1xcbiAgcGFkZGluZzogNDBweDtcXG59XFxuXFxuLm1haW4taG9tZSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbi5tYWluID4gcCwgXFxuLm1haW4gPiBkaXYgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY29sb3I6ICNhMWExYWE7XFxuICBtYXJnaW46IDE1cHggMDtcXG59XFxuXFxuLmluZm8ge1xcbiAgY29sb3I6ICNhMWExYWE7XFxufVxcblxcbmgyLCBcXG5oMyB7XFxuICBjb2xvcjogI2Q0ZDRkODtcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGhlaWdodDogMTk1cHg7XFxufVxcblxcbi5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxOTVweDtcXG59XFxuXFxuLnByaWNlIHtcXG4gIHBsYWNlLXNlbGY6IGVuZCBlbmQ7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDIuNnJlbTtcXG4gIG1hcmdpbjogMCAwIDI1cHg7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaW5mbyA+IHAge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5ibHVyYiB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY29sb3I6ICNkNGQ0ZDg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTIwcHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTZmNzU7XFxuICBjb2xvcjojZDRkNGQ4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubWFpbm1lbnUge1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogI2E1ZjNmYztcXG59XFxuXFxuYTpob3ZlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDQwcHg7XFxuICBtYXJnaW46IDMwcHggYXV0bztcXG59XFxuXFxuLm1lbnUtYnRuIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNTVweDtcXG59XFxuXFxuLmxlYXJuIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvY2F1bGRyb24yLnBuZyk7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgbG9hZEFib3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mby1hYm91dFwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGluZm8pO1xuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcDEudGV4dENvbnRlbnQgPSBcIlRoZSBMZWFreSBDYXVsZHJvbiB3YXMgYnVpbHQgaW4gdGhlIDE1MDBzIGJ5IERhaXN5IERvZGRlcmlkZ2UuIEl0cyB0cnVlIGFkZHJlc3MgaXMgbnVtYmVyIG9uZSBEaWFnb24gQWxsZXksIGFuZCBpdCBpcyBiZWxpZXZlZCB0byBoYXZlIGJlZW4gYnVpbHQgYWxvbmcgd2l0aCB0aGUgcmVzdCBvZiB0aGUgd2l6YXJkaW5nIHN0cmVldC5cIjtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHAxKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAyLnRleHRDb250ZW50ID0gXCJXaXRoIHRoZSBpbXBvc2l0aW9uIG9mIHRoZSBJbnRlcm5hdGlvbmFsIFN0YXR1dGUgb2YgV2l6YXJkaW5nIFNlY3JlY3kgaW4gMTY5MiwgTWluaXN0ZXIgVWxpY2sgR2FtcCBwZXJtaXR0ZWQgdGhlIHB1YiB0byBjb250aW51ZSBpdHMgZXhpc3RlbmNlIGFzIGEgc2FmZSBoYXZlbiBhbmQgcmVmdWdlIGZvciBtZW1iZXJzIG9mIHRoZSBtYWdpY2FsIGNvbW11bml0eS5cIjtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHAyKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAzLnRleHRDb250ZW50ID0gXCJHYW1wIHdhcyBzeW1wYXRoZXRpYyB0byB0aGUgbmVlZCBvZiB3aXphcmRzIHRvIGxldCBvZmYgc3RlYW0gZHVyaW5nIHRoaXMgZGlmZmljdWx0IHRpbWUsIGFuZCBmdXJ0aGVyIGFncmVlZCB0byBnaXZlIHRoZSBsYW5kbG9yZCBwZXJtaXNzaW9uIHRvIGxldCBwZW9wbGUgaW50byBEaWFnb24gQWxsZXkgZnJvbSBoaXMgYmFja3lhcmQsIGJlY2F1c2UgdGhlIHNob3BzIGJlaGluZCB0aGUgTGVha3kgQ2F1bGRyb24gd2VyZSBub3cgYWxzbyBpbiBuZWVkIG9mIHByb3RlY3Rpb24uXCI7XG4gICAgaW5mby5hcHBlbmRDaGlsZChwMyk7XG4gICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwNC50ZXh0Q29udGVudCA9IFwiTWFueSBtb29ucyBsYXRlciwgVGhlIExlYWt5IENhdWxkcm9uIHJlbWFpbnMgdGhlIGlkZWFsIHNwb3QgdG8gY2F0Y2ggdXAgd2l0aCB3aXphcmRpbmcgZ29zc2lwIG92ZXIgYSBnaWxseXdhdGVyIG9yIHJlbGF4IGFmdGVyIGEgZGF5IG9mIHNob3BwaW5nIHdpdGggc29tZSBzaGVwaGVyZHMgcGllLiBXZSBob3BlIHlvdSdsbCBqb2luIHVzIVwiO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocDQpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBcIkluZm9ybWF0aW9uIGNvdXJ0ZXN5IG9mIDxhIGhyZWY9J2h0dHBzOi8vaGFycnlwb3R0ZXIuZmFuZG9tLmNvbS93aWtpL0xlYWt5X0NhdWxkcm9uLyc+VGhlIFdpa2k8L2E+LlwiO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgfSIsImltcG9ydCBjb250YWN0bWFwIGZyb20gJy4vaW1hZ2VzL21hcC5naWYnO1xuXG5leHBvcnQgY29uc3QgbG9hZENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW50cm8udGV4dENvbnRlbnQgPSBcIllvdSBhcmUgd2VsY29tZSB0byBsZWF2ZSB1cyBhIG1lc3NhZ2UgaGVyZSwgYnV0IHRoZSBNdWdnbGUgaW50ZXJuZXQgZG9lcyBub3Qgd29yayB2ZXJ5IG9mdGVuLCBzbyBwbGVhc2UgZm9yZ2l2ZSB1cyBpZiB3ZSBkbyBub3QgcmVzcG9uZCBpbiBhIHRpbWVseSBtYW5uZXIuIC1Ub21cIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChpbnRybyk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwic3VibWl0LnBocFwiKTtcbiAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcbiAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5hbWVcIik7XG5cbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGVtYWlsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJlbWFpbFwiKTtcbiAgZW1haWwuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImVtYWlsXCIpO1xuICBlbWFpbC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVtYWlsXCIpO1xuXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm1lc3NhZ2VcIik7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJZb3VyIG1lc3NhZ2UgaGVyZVwiKTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xuICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5mbzEudGV4dENvbnRlbnQgPSBcIlBob25lOiArNDQgNzM0MSAxMjM0NTZcIjtcbiAgaW5mby5hcHBlbmRDaGlsZChpbmZvMSk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBjb25zdCBpbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbmZvMi50ZXh0Q29udGVudCA9IFwiQWRkcmVzczogNzUzIENoYXJpbmcgQ3Jvc3MgUm9hZFwiO1xuICBpbmZvLmFwcGVuZENoaWxkKGluZm8yKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChpbmZvKTtcblxuICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBtYXAuc3JjID0gY29udGFjdG1hcDtcbiAgbWFwLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiNTAwcHhcIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWFwKTtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxpbmsuaW5uZXJIVE1MID0gXCI8YSBocmVmPSdodHRwOi8vbWVtYmVycy5tYWRhc2FmaXNoLmNvbS9+Y2pfd2hpdGVob3VuZC9GYW5maWMvTG9jYXRpb25fTG9jYXRpb24vRGlhZ29uX0FsbGV5Lmh0bSc+SW1hZ2UgU291cmNlPC9hPlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGxpbmspO1xufTsiLCJpbXBvcnQgeyBsb2FkQWJvdXQgfSBmcm9tIFwiLi9hYm91dC5qc1wiO1xuXG5leHBvcnQgY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWhvbWVcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVGhlIExlYWt5IENhdWxkcm9uXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGNvbnN0IGJsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmx1cmIuY2xhc3NMaXN0LmFkZChcImJsdXJiXCIpO1xuICBibHVyYi50ZXh0Q29udGVudCA9IFwiRmlyc3QtcmF0ZSBmb29kLCBkcmluaywgYW5kIGxvZGdpbmcgZm9yIHdpdGNoZXMgYW5kIHdpemFyZHMsIGVzcGVjaWFsbHkgdGhvc2UgaGVhZGluZyB0byBEaWFnb24gQWxsZXkgb3IgbG9va2luZyBmb3IgYSBjb3p5IHBsYWNlIHRvIGRpbmVcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChibHVyYik7XG4gIGNvbnN0IGxlYXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGVhcm4uY2xhc3NMaXN0LmFkZChcImxlYXJuXCIpO1xuICBsZWFybi50ZXh0Q29udGVudCA9IFwiTGVhcm4gTW9yZVwiO1xuICBsZWFybi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRBYm91dCgpO1xuICB9KVxuICBtYWluLmFwcGVuZENoaWxkKGxlYXJuKTtcbn07IiwiaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuLi9tZW51LmpzJztcbmltcG9ydCB0ZWEgZnJvbSAnLi4vaW1hZ2VzL3RlYS5wbmcnO1xuaW1wb3J0IGdpbGx5IGZyb20gJy4uL2ltYWdlcy9naWxseS5wbmcnO1xuaW1wb3J0IGJ1dHRlciBmcm9tICcuLi9pbWFnZXMvYnV0dGVyLnBuZyc7XG5pbXBvcnQgcHVtcGtpbiBmcm9tICcuLi9pbWFnZXMvcHVtcGtpbi5wbmcnO1xuaW1wb3J0IG1lYWQgZnJvbSAnLi4vaW1hZ2VzL21lYWQucG5nJztcblxuZXhwb3J0IGNvbnN0IGxvYWRCZXZlcmFnZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJCZXZlcmFnZXNcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBjYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQxLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm8xLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNvbnN0IGltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2UxLnNyYyA9IHRlYTtcbiAgICBpbWFnZTEuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTcwcHhcIik7XG4gICAgaW1hZ2UxLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgdGVhIGFuZCBjcnVtcGV0c1wiKTtcbiAgICBjYXJkMS5hcHBlbmRDaGlsZChpbWFnZTEpO1xuICAgIGNhcmQxLmFwcGVuZENoaWxkKGluZm8xKTtcbiAgICBjb25zdCBoZWFkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkMS50ZXh0Q29udGVudCA9IFwiVGVhIGFuZCBDcnVtcGV0c1wiO1xuICAgIGluZm8xLmFwcGVuZENoaWxkKGhlYWQxKTtcbiAgICBjb25zdCBibHVyYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjEudGV4dENvbnRlbnQgPSBcIkEgcG90IG9mIHRlYSBwYWlyZWQgd2l0aCBvdXIgY3J1bWJseSBjcnVtcGV0cy4gQWRkIGEgc2hvdCBvZiBPZ2RlbidzIE9sZCBGaXJld2hpc2t5IGlmIHlvdSdyZSBib2xkIVwiO1xuICAgIGluZm8xLmFwcGVuZENoaWxkKGJsdXJiMSk7XG4gICAgY29uc3QgcHJpY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2UxLnRleHRDb250ZW50ID0gXCIyUyA1S1wiO1xuICAgIHByaWNlMS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgaW5mbzEuYXBwZW5kQ2hpbGQocHJpY2UxKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQxKTtcblxuICAgIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDIuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzIuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29uc3QgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZTIuc3JjID0gZ2lsbHk7XG4gICAgaW1hZ2UyLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjE3MHB4XCIpO1xuICAgIGltYWdlMi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIGdpbGx5d2F0ZXJcIik7XG4gICAgY2FyZDIuYXBwZW5kQ2hpbGQoaW1hZ2UyKTtcbiAgICBjYXJkMi5hcHBlbmRDaGlsZChpbmZvMik7XG4gICAgY29uc3QgaGVhZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZDIudGV4dENvbnRlbnQgPSBcIkdpbGx5d2F0ZXJcIjtcbiAgICBpbmZvMi5hcHBlbmRDaGlsZChoZWFkMik7XG4gICAgY29uc3QgYmx1cmIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmIyLnRleHRDb250ZW50ID0gXCJBIGhvdXNlIGZhdm9yaXRlLCBnYXJuaXNoZWQgd2l0aCB5b3VyIGNob2ljZSBvZiBjdWN1bWJlciwgbWludCwgbGVtb24sIHJhc3BiZXJyeSwgb3Igb25pb24uXCI7XG4gICAgaW5mbzIuYXBwZW5kQ2hpbGQoYmx1cmIyKTtcbiAgICBjb25zdCBwcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmljZTIudGV4dENvbnRlbnQgPSBcIjJTIDEyS1wiO1xuICAgIHByaWNlMi5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgaW5mbzIuYXBwZW5kQ2hpbGQocHJpY2UyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQyKTtcblxuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDMuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzMuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29uc3QgaW1hZ2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZTMuc3JjID0gYnV0dGVyO1xuICAgIGltYWdlMy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNzBweFwiKTtcbiAgICBpbWFnZTMuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBidXR0ZXJiZWVyXCIpO1xuICAgIGNhcmQzLmFwcGVuZENoaWxkKGltYWdlMyk7XG4gICAgY2FyZDMuYXBwZW5kQ2hpbGQoaW5mbzMpO1xuICAgIGNvbnN0IGhlYWQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQzLnRleHRDb250ZW50ID0gXCJCdXR0ZXJiZWVyXCI7XG4gICAgaW5mbzMuYXBwZW5kQ2hpbGQoaGVhZDMpO1xuICAgIGNvbnN0IGJsdXJiMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiMy50ZXh0Q29udGVudCA9IFwiR3VhcmFudGVlZCB0byB3YXJtIHlvdSB1cCBmcm9tIGhlYWQgdG8gdG9lLlwiO1xuICAgIGluZm8zLmFwcGVuZENoaWxkKGJsdXJiMyk7XG4gICAgY29uc3QgcHJpY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2UzLnRleHRDb250ZW50ID0gXCI0U1wiO1xuICAgIHByaWNlMy5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgaW5mbzMuYXBwZW5kQ2hpbGQocHJpY2UzKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQzKTtcblxuICAgIGNvbnN0IGNhcmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzQuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29uc3QgaW1hZ2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZTQuc3JjID0gcHVtcGtpbjtcbiAgICBpbWFnZTQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTcwcHhcIik7XG4gICAgaW1hZ2U0LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgcHVtcGtpbiBqdWljZVwiKTtcbiAgICBjYXJkNC5hcHBlbmRDaGlsZChpbWFnZTQpO1xuICAgIGNhcmQ0LmFwcGVuZENoaWxkKGluZm80KTtcbiAgICBjb25zdCBoZWFkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkNC50ZXh0Q29udGVudCA9IFwiUHVtcGtpbiBKdWljZVwiO1xuICAgIGluZm80LmFwcGVuZENoaWxkKGhlYWQ0KTtcbiAgICBjb25zdCBibHVyYjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjQudGV4dENvbnRlbnQgPSBcIkNyZWFteSBhbmQgaG91c2UtbWFkZSwgcGVyZmVjdCB0byBhY2NvbXBhbnkgYW55IGRpc2ggb3Igc2lwIG9uIGl0cyBvd24uXCI7XG4gICAgaW5mbzQuYXBwZW5kQ2hpbGQoYmx1cmI0KTtcbiAgICBjb25zdCBwcmljZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmljZTQudGV4dENvbnRlbnQgPSBcIjNTIDRLXCI7XG4gICAgcHJpY2U0LmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBpbmZvNC5hcHBlbmRDaGlsZChwcmljZTQpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDQpO1xuXG4gICAgY29uc3QgY2FyZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkNS5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvNS5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjb25zdCBpbWFnZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlNS5zcmMgPSBtZWFkO1xuICAgIGltYWdlNS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNzBweFwiKTtcbiAgICBpbWFnZTUuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBtZWFkXCIpO1xuICAgIGNhcmQ1LmFwcGVuZENoaWxkKGltYWdlNSk7XG4gICAgY2FyZDUuYXBwZW5kQ2hpbGQoaW5mbzUpO1xuICAgIGNvbnN0IGhlYWQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQ1LnRleHRDb250ZW50ID0gXCJNZWFkXCI7XG4gICAgaW5mbzUuYXBwZW5kQ2hpbGQoaGVhZDUpO1xuICAgIGNvbnN0IGJsdXJiNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiNS50ZXh0Q29udGVudCA9IFwiT3VyIGFnZS1vbGQgcmVjaXBlIGdvZXMgYmFjayB0byB3aGVuIFRoZSBMZWFreSBDYXVsZHJvbiB3YXMgZXN0YWJsaXNoZWQuIE11c3QgYmUgMTgrLlwiO1xuICAgIGluZm81LmFwcGVuZENoaWxkKGJsdXJiNSk7XG4gICAgY29uc3QgcHJpY2U1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2U1LnRleHRDb250ZW50ID0gXCI1UyAzS1wiO1xuICAgIHByaWNlNS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgaW5mbzUuYXBwZW5kQ2hpbGQocHJpY2U1KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQ1KTtcblxuICAgIGNvbnN0IG1haW5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtYWlubWVudS50ZXh0Q29udGVudCA9IFwiTWFpbiBNZW51XCI7XG4gICAgbWFpbm1lbnUuY2xhc3NMaXN0LmFkZChcIm1haW5tZW51XCIpO1xuICAgIG1haW5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsb2FkTWVudSgpO1xuICAgIH0pXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWlubWVudSk7XG4gIH0iLCJpbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gJy4uL21lbnUuanMnO1xuaW1wb3J0IHNwb3R0ZWQgZnJvbSAnLi4vaW1hZ2VzL3Nwb3R0ZWQucG5nJztcbmltcG9ydCB0cmVhY2xlIGZyb20gJy4uL2ltYWdlcy90cmVhY2xlLnBuZyc7XG5pbXBvcnQgcHVkZGluZyBmcm9tICcuLi9pbWFnZXMvcHVkZGluZy5wbmcnO1xuaW1wb3J0IGRvdWdobnV0cyBmcm9tICcuLi9pbWFnZXMvZG91Z2hudXRzLnBuZyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkRGVzc2VydHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDEuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzEuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29uc3QgaW1hZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZTEuc3JjID0gc3BvdHRlZDtcbiAgICBpbWFnZTEuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTcwcHhcIik7XG4gICAgaW1hZ2UxLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2Ygc3BvdHRlZCBkaWNrXCIpO1xuICAgIGNhcmQxLmFwcGVuZENoaWxkKGltYWdlMSk7XG4gICAgY2FyZDEuYXBwZW5kQ2hpbGQoaW5mbzEpO1xuICAgIGNvbnN0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQxLnRleHRDb250ZW50ID0gXCJTcG90dGVkIERpY2tcIjtcbiAgICBpbmZvMS5hcHBlbmRDaGlsZChoZWFkMSk7XG4gICAgY29uc3QgYmx1cmIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmIxLnRleHRDb250ZW50ID0gXCJDYWtlIHRoYXQgY29udGFpbnMgZHJpZWQgcmFpc2lucyBhbmQgY3VycmFudHMsIGFuZCBpcyB0b3BwZWQgd2l0aCBvdXIgY3JlYW15IGN1c3RhcmQuXCI7XG4gICAgaW5mbzEuYXBwZW5kQ2hpbGQoYmx1cmIxKTtcbiAgICBjb25zdCBwcmljZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmljZTEudGV4dENvbnRlbnQgPSBcIjZTIDExS1wiO1xuICAgIHByaWNlMS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgaW5mbzEuYXBwZW5kQ2hpbGQocHJpY2UxKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQxKTtcblxuICAgIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDIuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzIuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29uc3QgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZTIuc3JjID0gdHJlYWNsZTtcbiAgICBpbWFnZTIuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTcwcHhcIik7XG4gICAgaW1hZ2UyLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgdHJlYWNsZSB0YXJ0XCIpO1xuICAgIGNhcmQyLmFwcGVuZENoaWxkKGltYWdlMik7XG4gICAgY2FyZDIuYXBwZW5kQ2hpbGQoaW5mbzIpO1xuICAgIGNvbnN0IGhlYWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQyLnRleHRDb250ZW50ID0gXCJUcmVhY2xlIFRhcnRcIjtcbiAgICBpbmZvMi5hcHBlbmRDaGlsZChoZWFkMik7XG4gICAgY29uc3QgYmx1cmIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmIyLnRleHRDb250ZW50ID0gXCJCYWtlZCB1bnRpbCBnb2xkZW4gY3Jpc3AsIGFuZCBzZXJ2ZWQgd2l0aCBvdXIgaG9tZW1hZGUgdmFuaWxsYSBpY2UgY3JlYW0uXCI7XG4gICAgaW5mbzIuYXBwZW5kQ2hpbGQoYmx1cmIyKTtcbiAgICBjb25zdCBwcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmljZTIudGV4dENvbnRlbnQgPSBcIjhTXCI7XG4gICAgcHJpY2UyLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBpbmZvMi5hcHBlbmRDaGlsZChwcmljZTIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDIpO1xuXG4gICAgY29uc3QgY2FyZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkMy5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvMy5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjb25zdCBpbWFnZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlMy5zcmMgPSBwdWRkaW5nO1xuICAgIGltYWdlMy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNzBweFwiKTtcbiAgICBpbWFnZTMuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBjaG9jb2xhdGUgcHVkZGluZ1wiKTtcbiAgICBjYXJkMy5hcHBlbmRDaGlsZChpbWFnZTMpO1xuICAgIGNhcmQzLmFwcGVuZENoaWxkKGluZm8zKTtcbiAgICBjb25zdCBoZWFkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkMy50ZXh0Q29udGVudCA9IFwiQ2hvY29sYXRlIFB1ZGRpbmdcIjtcbiAgICBpbmZvMy5hcHBlbmRDaGlsZChoZWFkMyk7XG4gICAgY29uc3QgYmx1cmIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmIzLnRleHRDb250ZW50ID0gXCJNYWRlIHdpdGggcmVhbCBtaWxrIGNob2NvbGF0ZSBhbmQgZ2FybmlzaGVkIHdpdGggbWludC5cIjtcbiAgICBpbmZvMy5hcHBlbmRDaGlsZChibHVyYjMpO1xuICAgIGNvbnN0IHByaWNlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaWNlMy50ZXh0Q29udGVudCA9IFwiNlMgN0tcIjtcbiAgICBwcmljZTMuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICAgIGluZm8zLmFwcGVuZENoaWxkKHByaWNlMyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMyk7XG5cbiAgICBjb25zdCBjYXJkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQ0LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm80LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNvbnN0IGltYWdlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2U0LnNyYyA9IGRvdWdobnV0cztcbiAgICBpbWFnZTQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTcwcHhcIik7XG4gICAgaW1hZ2U0LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgamFtIGRvdWdobnV0c1wiKTtcbiAgICBjYXJkNC5hcHBlbmRDaGlsZChpbWFnZTQpO1xuICAgIGNhcmQ0LmFwcGVuZENoaWxkKGluZm80KTtcbiAgICBjb25zdCBoZWFkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkNC50ZXh0Q29udGVudCA9IFwiSmFtIERvdWdobnV0c1wiO1xuICAgIGluZm80LmFwcGVuZENoaWxkKGhlYWQ0KTtcbiAgICBjb25zdCBibHVyYjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjQudGV4dENvbnRlbnQgPSBcIkEgZGVzc2VydCBmb3IgZXZlcnkgb2NjYXNpb24gLSBhdmFpbGFibGUgaW4gcGxhdGVzIG9mIDQsIDYsIG9yIDguXCI7XG4gICAgaW5mbzQuYXBwZW5kQ2hpbGQoYmx1cmI0KTtcbiAgICBjb25zdCBwcmljZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmljZTQudGV4dENvbnRlbnQgPSBcIjRTIDEySytcIjtcbiAgICBwcmljZTQuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICAgIGluZm80LmFwcGVuZENoaWxkKHByaWNlNCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkNCk7XG5cbiAgICBjb25zdCBtYWlubWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbWFpbm1lbnUudGV4dENvbnRlbnQgPSBcIk1haW4gTWVudVwiO1xuICAgIG1haW5tZW51LmNsYXNzTGlzdC5hZGQoXCJtYWlubWVudVwiKTtcbiAgICBtYWlubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbG9hZE1lbnUoKTtcbiAgICB9KVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbm1lbnUpO1xuICB9IiwiaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuLi9tZW51LmpzJztcbmltcG9ydCBiYW5nZXJzIGZyb20gJy4uL2ltYWdlcy9iYW5nZXJzLnBuZyc7XG5pbXBvcnQga2lkbmV5IGZyb20gJy4uL2ltYWdlcy9raWRuZXkucG5nJztcbmltcG9ydCBwZWEgZnJvbSAnLi4vaW1hZ2VzL3BlYS5wbmcnO1xuaW1wb3J0IHlvcmtzaGlyZSBmcm9tICcuLi9pbWFnZXMveW9ya3NoaXJlLnBuZyc7XG5pbXBvcnQgc2hlcGhlcmQgZnJvbSAnLi4vaW1hZ2VzL3NoZXBoZXJkLnBuZyc7XG5pbXBvcnQgdG9hZCBmcm9tICcuLi9pbWFnZXMvdG9hZC5wbmcnO1xuXG5leHBvcnQgY29uc3QgbG9hZERpc2hlcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlNpZ25hdHVyZSBEaXNoZXNcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBjYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQxLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm8xLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNvbnN0IGltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2UxLnNyYyA9IGJhbmdlcnM7XG4gICAgaW1hZ2UxLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjE3MHB4XCIpO1xuICAgIGltYWdlMS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIGJhbmdlcnMgYW5kIG1hc2hcIik7XG4gICAgY2FyZDEuYXBwZW5kQ2hpbGQoaW1hZ2UxKTtcbiAgICBjYXJkMS5hcHBlbmRDaGlsZChpbmZvMSk7XG4gICAgY29uc3QgaGVhZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZDEudGV4dENvbnRlbnQgPSBcIkJhbmdlcnMgYW5kIE1hc2hcIjtcbiAgICBpbmZvMS5hcHBlbmRDaGlsZChoZWFkMSk7XG4gICAgY29uc3QgYmx1cmIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmIxLnRleHRDb250ZW50ID0gXCJUaHJlZSBzdWNjdWxlbnQgc2F1c2FnZSBsaW5rcyBzZXJ2ZWQgd2l0aCBtYXNoZWQgcG90YXRvZXMgYW5kIGdyYXZ5LlwiO1xuICAgIGluZm8xLmFwcGVuZENoaWxkKGJsdXJiMSk7XG4gICAgY29uc3QgcHJpY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2UxLnRleHRDb250ZW50ID0gXCIxMVMgMjBLXCI7XG4gICAgcHJpY2UxLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBpbmZvMS5hcHBlbmRDaGlsZChwcmljZTEpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDEpO1xuXG4gICAgY29uc3QgY2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkMi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvMi5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjb25zdCBpbWFnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlMi5zcmMgPSBraWRuZXk7XG4gICAgaW1hZ2UyLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjE3MHB4XCIpO1xuICAgIGltYWdlMi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIHN0ZWFrIGFuZCBraWRuZXkgcGllXCIpO1xuICAgIGNhcmQyLmFwcGVuZENoaWxkKGltYWdlMik7XG4gICAgY2FyZDIuYXBwZW5kQ2hpbGQoaW5mbzIpO1xuICAgIGNvbnN0IGhlYWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQyLnRleHRDb250ZW50ID0gXCJTdGVhayBhbmQgS2lkbmV5IFBpZVwiO1xuICAgIGluZm8yLmFwcGVuZENoaWxkKGhlYWQyKTtcbiAgICBjb25zdCBibHVyYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjIudGV4dENvbnRlbnQgPSBcIk91ciBmbGFreSBwYXN0cnkgY3J1c3QgZmlsbGVkIHdpdGggYmVlZiwga2lkbmV5LCBvbmlvbiwgY2Fycm90LCBtdXNocm9vbSwgYW5kIGEgcmljaCBncmF2eS5cIjtcbiAgICBpbmZvMi5hcHBlbmRDaGlsZChibHVyYjIpO1xuICAgIGNvbnN0IHByaWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaWNlMi50ZXh0Q29udGVudCA9IFwiMTNTIDEyS1wiO1xuICAgIHByaWNlMi5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgaW5mbzIuYXBwZW5kQ2hpbGQocHJpY2UyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQyKTtcblxuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDMuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzMuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29uc3QgaW1hZ2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZTMuc3JjID0gcGVhO1xuICAgIGltYWdlMy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNzBweFwiKTtcbiAgICBpbWFnZTMuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBwZWEgc291cFwiKTtcbiAgICBjYXJkMy5hcHBlbmRDaGlsZChpbWFnZTMpO1xuICAgIGNhcmQzLmFwcGVuZENoaWxkKGluZm8zKTtcbiAgICBjb25zdCBoZWFkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkMy50ZXh0Q29udGVudCA9IFwiUGVhIFNvdXBcIjtcbiAgICBpbmZvMy5hcHBlbmRDaGlsZChoZWFkMyk7XG4gICAgY29uc3QgYmx1cmIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmIzLnRleHRDb250ZW50ID0gXCJBIGhvdXNlIGZhdm9yaXRlLCBvdXIgcGVhIHNvdXAgaXMgcmljaCBhbmQgcGVyZmVjdCB0byBhY2NvbXBhbnkgYW5vdGhlciBkaXNoLCBvciB0byBlbmpveSBvbiBpdHMgb3duLlwiO1xuICAgIGluZm8zLmFwcGVuZENoaWxkKGJsdXJiMyk7XG4gICAgY29uc3QgcHJpY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2UzLnRleHRDb250ZW50ID0gXCI5UyA4S1wiO1xuICAgIHByaWNlMy5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgaW5mbzMuYXBwZW5kQ2hpbGQocHJpY2UzKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQzKTtcblxuICAgIGNvbnN0IGNhcmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzQuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29uc3QgaW1hZ2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZTQuc3JjID0geW9ya3NoaXJlO1xuICAgIGltYWdlNC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNzBweFwiKTtcbiAgICBpbWFnZTQuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiB5b3Jrc2hpcmUgcHVkZGluZ1wiKTtcbiAgICBjYXJkNC5hcHBlbmRDaGlsZChpbWFnZTQpO1xuICAgIGNhcmQ0LmFwcGVuZENoaWxkKGluZm80KTtcbiAgICBjb25zdCBoZWFkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkNC50ZXh0Q29udGVudCA9IFwiWW9ya3NoaXJlIFB1ZGRpbmdcIjtcbiAgICBpbmZvNC5hcHBlbmRDaGlsZChoZWFkNCk7XG4gICAgY29uc3QgYmx1cmI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmI0LnRleHRDb250ZW50ID0gXCJBIGRlbGVjdGFibGUgcGFzdHJ5IHRvcHBlZCB3aXRoIHJvYXN0IGJlZWYgYW5kIGdyYXZ5LCBhbmQgc2VydmVkIHdpdGggZ3JpbGxlZCBzZWFzb25hbCB2ZWdldGFibGVzLlwiO1xuICAgIGluZm80LmFwcGVuZENoaWxkKGJsdXJiNCk7XG4gICAgY29uc3QgcHJpY2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2U0LnRleHRDb250ZW50ID0gXCIxNFNcIjtcbiAgICBwcmljZTQuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICAgIGluZm80LmFwcGVuZENoaWxkKHByaWNlNCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkNCk7XG5cbiAgICBjb25zdCBjYXJkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQ1LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm81LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNvbnN0IGltYWdlNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2U1LnNyYyA9IHNoZXBoZXJkO1xuICAgIGltYWdlNS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNzBweFwiKTtcbiAgICBpbWFnZTUuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBzaGVwaGVyZHMgcGllXCIpO1xuICAgIGNhcmQ1LmFwcGVuZENoaWxkKGltYWdlNSk7XG4gICAgY2FyZDUuYXBwZW5kQ2hpbGQoaW5mbzUpO1xuICAgIGNvbnN0IGhlYWQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWQ1LnRleHRDb250ZW50ID0gXCJTaGVwaGVyZHMgUGllXCI7XG4gICAgaW5mbzUuYXBwZW5kQ2hpbGQoaGVhZDUpO1xuICAgIGNvbnN0IGJsdXJiNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiNS50ZXh0Q29udGVudCA9IFwiTWluY2VkIGxhbWIsIGdyYXZ5LCBhbmQgdmVnZXRhYmxlcywgdG9wcGVkIHdpdGggbWFzaGVkIHBvdGF0b2VzLiBTZXJ2ZXMgdHdvLlwiO1xuICAgIGluZm81LmFwcGVuZENoaWxkKGJsdXJiNSk7XG4gICAgY29uc3QgcHJpY2U1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2U1LnRleHRDb250ZW50ID0gXCIxR1wiO1xuICAgIHByaWNlNS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgaW5mbzUuYXBwZW5kQ2hpbGQocHJpY2U1KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQ1KTtcblxuICAgIGNvbnN0IGNhcmQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDYuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzYuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29uc3QgaW1hZ2U2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZTYuc3JjID0gdG9hZDtcbiAgICBpbWFnZTYuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTcwcHhcIik7XG4gICAgaW1hZ2U2LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgdG9hZCBpbiB0aGUgaG9sZVwiKTtcbiAgICBjYXJkNi5hcHBlbmRDaGlsZChpbWFnZTYpO1xuICAgIGNhcmQ2LmFwcGVuZENoaWxkKGluZm82KTtcbiAgICBjb25zdCBoZWFkNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkNi50ZXh0Q29udGVudCA9IFwiVG9hZCBpbiB0aGUgSG9sZVwiO1xuICAgIGluZm82LmFwcGVuZENoaWxkKGhlYWQ2KTtcbiAgICBjb25zdCBibHVyYjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjYudGV4dENvbnRlbnQgPSBcIk91ciBhd2FyZC13aW5uaW5nIFlvcmtzaGlyZSBwdWRkaW5nIHdpdGggc2F1c2FnZXMsIGdhcm5pc2hlZCB3aXRoIG9uaW9uIGdyYXZ5IGFuZCBwYXJzbGV5LlwiO1xuICAgIGluZm82LmFwcGVuZENoaWxkKGJsdXJiNik7XG4gICAgY29uc3QgcHJpY2U2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpY2U2LnRleHRDb250ZW50ID0gXCIxMFMgN0tcIjtcbiAgICBwcmljZTYuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICAgIGluZm82LmFwcGVuZENoaWxkKHByaWNlNik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkNik7XG5cbiAgICBjb25zdCBtYWlubWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbWFpbm1lbnUudGV4dENvbnRlbnQgPSBcIk1haW4gTWVudVwiO1xuICAgIG1haW5tZW51LmNsYXNzTGlzdC5hZGQoXCJtYWlubWVudVwiKTtcbiAgICBtYWlubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbG9hZE1lbnUoKTtcbiAgICB9KVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbm1lbnUpO1xuICB9IiwiaW1wb3J0IHsgbG9hZEJldmVyYWdlcyB9IGZyb20gJy4vbWVudS1wYWdlcy9iZXZlcmFnZXMuanMnO1xuaW1wb3J0IHsgbG9hZERpc2hlcyB9IGZyb20gJy4vbWVudS1wYWdlcy9kaXNoZXMuanMnO1xuaW1wb3J0IHsgbG9hZERlc3NlcnRzIH0gZnJvbSAnLi9tZW51LXBhZ2VzL2Rlc3NlcnRzLmpzJztcblxuXG5leHBvcnQgY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9wdGlvbnMuY2xhc3NMaXN0LmFkZChcIm9wdGlvbnNcIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQob3B0aW9ucyk7XG4gIGNvbnN0IGJldmVyYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJldmVyYWdlcy5jbGFzc0xpc3QuYWRkKFwibWVudS1idG5cIik7XG4gIGJldmVyYWdlcy50ZXh0Q29udGVudCA9IFwiQmV2ZXJhZ2VzXCI7XG4gIGJldmVyYWdlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRCZXZlcmFnZXMoKTtcbiAgfSlcbiAgb3B0aW9ucy5hcHBlbmRDaGlsZChiZXZlcmFnZXMpO1xuICBjb25zdCBkaXNoZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkaXNoZXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xuICBkaXNoZXMudGV4dENvbnRlbnQgPSBcIlNpZ25hdHVyZSBEaXNoZXNcIjtcbiAgZGlzaGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZERpc2hlcygpO1xuICB9KVxuICBvcHRpb25zLmFwcGVuZENoaWxkKGRpc2hlcyk7XG4gIGNvbnN0IGRlc3NlcnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVzc2VydHMuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xuICBkZXNzZXJ0cy50ZXh0Q29udGVudCA9IFwiRGVzc2VydHNcIjtcbiAgZGVzc2VydHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkRGVzc2VydHMoKTtcbiAgfSlcbiAgb3B0aW9ucy5hcHBlbmRDaGlsZChkZXNzZXJ0cyk7XG59IiwiZXhwb3J0IGNvbnN0IGxvYWRTaXRlID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJcIik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXZiYXIpO1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChtZW51KTtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XG4gIGFib3V0LnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWhvbWVcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVGhlIExlYWt5IENhdWxkcm9uXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGNvbnN0IGJsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmx1cmIuY2xhc3NMaXN0LmFkZChcImJsdXJiXCIpO1xuICBibHVyYi50ZXh0Q29udGVudCA9IFwiRmlyc3QtcmF0ZSBmb29kLCBkcmluaywgYW5kIGxvZGdpbmcgZm9yIHdpdGNoZXMgYW5kIHdpemFyZHMsIGVzcGVjaWFsbHkgdGhvc2UgaGVhZGluZyB0byBEaWFnb24gQWxsZXkgb3IgbG9va2luZyBmb3IgYSBjb3p5IHBsYWNlIHRvIGRpbmVcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChibHVyYik7XG4gIGNvbnN0IGxlYXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGVhcm4uY2xhc3NMaXN0LmFkZChcImxlYXJuXCIpO1xuICBsZWFybi50ZXh0Q29udGVudCA9IFwiTGVhcm4gTW9yZVwiO1xuICBtYWluLmFwcGVuZENoaWxkKGxlYXJuKTtcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJjb25zb2xlLmxvZyhcIkV2ZXJ5dGhpbmcgaXMgbGlua2VkLlwiKTtcblxuIGltcG9ydCB7IGxvYWRTaXRlIH0gZnJvbSBcIi4vc2l0ZS5qc1wiO1xuXG5pbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcbmltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCJcbmltcG9ydCB7IGxvYWRBYm91dCB9IGZyb20gXCIuL2Fib3V0LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gbG9hZENvbnRhY3QoKTtcblxuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdFwiKTtcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbG9hZENvbnRhY3QoKTtcbn0pXG5cbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvYWRIb21lKCk7XG59KVxuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkTWVudSgpO1xufSlcblxuY29uc3QgbGVhcm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlYXJuXCIpO1xubGVhcm4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbG9hZEFib3V0KCk7XG59KVxuXG5jb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRcIik7XG5hYm91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkQWJvdXQoKTtcbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==