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

.header {
  height: 75px;
  display: grid;
  justify-content: center;
  align-content: end;
  background-color: rgba(32, 29, 29, 0.5);
}

body:before {
  content: "";
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

body {
  background-color: rgb(32, 29, 29);
}

h1 {
  font-family: "HARRYP", sans-serif;
  font-size: 6rem;
  margin: 0;
  font-weight: 300;
  color: #d4d4d8;
  padding-bottom: 15px;
}

.navbar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
  justify-content: center;
  align-content: center;
  height: 35px;
  padding-bottom: 15px;
}

.container {
  display: flex;
  justify-content: center;
}

.main-home, 
.main {
  position: relative;
  width: 700px;
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  align-items: center;
  background: rgba(32, 29, 29, 0.75);
  padding: 40px;
}

.main-home {
  margin-top: 15px;
  background: transparent;
  color: white;
  text-align: center;
}

.main > p, 
.main > div > p {
  font-size: 1.4rem;
  color: #a9a9b4;
  margin: 15px 0;
}

.main > div > p.footer {
  font-size: 1.1rem;
}

.info {
  color: #a9a9b4;
}

h2, 
h3 {
  color: #d4d4d8;
}

input {
  width: 500px;
  height: 35px;
  font-size: 18px;
  font-family: sans-serif;
}

textarea {
  width: 500px;
  height: 120px;
  font-size: 18px;
  font-family: sans-serif;
}

.contact-info {
  padding-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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

button:not(.nav-btn):hover {
  box-shadow:
  0.5px 0.5px 2.8px rgba(238, 159, 40, 0.07),
  1.1px 1.1px 6.7px rgba(238, 159, 40, 0.084),
  2.1px 2.1px 12.5px rgba(238, 159, 40, 0.091),
  3.8px 3.8px 22.3px rgba(238, 159, 40, 0.104),
  7.1px 7.1px 41.8px rgba(238, 159, 40, 0.138),
  17px 17px 100px rgba(238, 159, 40, 0.25)
;
}

button.nav-btn {
  background-color: transparent;
  border-radius: 0;
  width: 110px;
  position: relative;
  text-align: center;
}

button.nav-btn:hover {
  text-shadow: 0 0 5px rgb(238, 159, 40);
}

button.nav-btn::after {
  content: "";
  position: absolute;
  width: 60%;
  height: 0.175rem;
  background: rgb(238, 159, 40);
  left: 20%;
  bottom: 0;
  transform: scale(0, 1);
  transition: transform 0.3s ease;
}

button.contact::after {
  width: 70%;
  left: 15%;
}

button.nav-btn:hover::after {
  transform: scale(1, 1);
}

button.selected::after {
  transform: scale(1, 1);
}

.menu-img {
  height: 170px;
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
  width: 220px;
  height: 55px;
}

.learn {
  width: 200px;
  height: 60px;
}

@media screen and (max-width: 1200px) {
  body:before {
    content: "";
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

    button {
      width: 150px;
      height: 45px;
      font-size: 1.5rem;
    }

    button.nav-btn {
      width: 135px;
    }

    .mainmenu {
      width: 180px;
    }

    h1 {
      font-size: 7rem;
    }

    h2 {
      font-size: 2.8rem;
    }

    h3 {
      font-size: 1.8rem;
    }

    .main > p, 
    .main > div > p {
      font-size: 1.6rem;
    }

    .main > div > p.footer {
      font-size: 1.3rem;
    }

    .info > p {
        font-size: 1.4rem;
      }

    .card {
      width: 600px;
      height: 220px;
    }

    .menu-img {
      height: 195px;
    }

    .info {
      height: 220px;
    }
      


}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"HARRYP\";\n  src: url(./HARRYP__.TTF);\n}\n\n@font-face {\n  font-family: \"Cardo\";\n  src: url(./Cardo-Regular.ttf);\n}\n\n* {\n  font-family: \"Cardo\", sans-serif;\n}\n\n.header {\n  height: 75px;\n  display: grid;\n  justify-content: center;\n  align-content: end;\n  background-color: rgba(32, 29, 29, 0.5);\n}\n\nbody:before {\n  content: \"\";\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -10;\n  background: url(./images/cauldron.png) no-repeat;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n\nbody {\n  background-color: rgb(32, 29, 29);\n}\n\nh1 {\n  font-family: \"HARRYP\", sans-serif;\n  font-size: 6rem;\n  margin: 0;\n  font-weight: 300;\n  color: #d4d4d8;\n  padding-bottom: 15px;\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 35px;\n  justify-content: center;\n  align-content: center;\n  height: 35px;\n  padding-bottom: 15px;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n}\n\n.main-home, \n.main {\n  position: relative;\n  width: 700px;\n  display: flex;\n  flex-direction: column;\n  margin: 40px auto;\n  align-items: center;\n  background: rgba(32, 29, 29, 0.75);\n  padding: 40px;\n}\n\n.main-home {\n  margin-top: 15px;\n  background: transparent;\n  color: white;\n  text-align: center;\n}\n\n.main > p, \n.main > div > p {\n  font-size: 1.4rem;\n  color: #a9a9b4;\n  margin: 15px 0;\n}\n\n.main > div > p.footer {\n  font-size: 1.1rem;\n}\n\n.info {\n  color: #a9a9b4;\n}\n\nh2, \nh3 {\n  color: #d4d4d8;\n}\n\ninput {\n  width: 500px;\n  height: 35px;\n  font-size: 18px;\n  font-family: sans-serif;\n}\n\ntextarea {\n  width: 500px;\n  height: 120px;\n  font-size: 18px;\n  font-family: sans-serif;\n}\n\n.contact-info {\n  padding-bottom: 20px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n\n.card {\n  width: 500px;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  justify-content: center;\n  padding: 15px;\n  height: 195px;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n  height: 195px;\n}\n\n.price {\n  place-self: end end;\n  margin-top: auto;\n}\n\nh2 {\n  font-size: 2.6rem;\n  margin: 0 0 25px;\n}\n\nh3 {\n  font-size: 1.6rem;\n  margin: 0;\n}\n\n.info > p {\n  font-size: 1.2rem;\n}\n\n.blurb {\n  font-size: 32px;\n  margin-bottom: 20px;\n  color: #d4d4d8;\n}\n\nbutton {\n  margin: 0;\n  height: 40px;\n  width: 120px;\n  font-size: 1.3rem;\n  background-color: #156f75;\n  color:#d4d4d8;\n  border: none;\n  border-radius: 5px;  \n}\n\nbutton:not(.nav-btn):hover {\n  box-shadow:\n  0.5px 0.5px 2.8px rgba(238, 159, 40, 0.07),\n  1.1px 1.1px 6.7px rgba(238, 159, 40, 0.084),\n  2.1px 2.1px 12.5px rgba(238, 159, 40, 0.091),\n  3.8px 3.8px 22.3px rgba(238, 159, 40, 0.104),\n  7.1px 7.1px 41.8px rgba(238, 159, 40, 0.138),\n  17px 17px 100px rgba(238, 159, 40, 0.25)\n;\n}\n\nbutton.nav-btn {\n  background-color: transparent;\n  border-radius: 0;\n  width: 110px;\n  position: relative;\n  text-align: center;\n}\n\nbutton.nav-btn:hover {\n  text-shadow: 0 0 5px rgb(238, 159, 40);\n}\n\nbutton.nav-btn::after {\n  content: \"\";\n  position: absolute;\n  width: 60%;\n  height: 0.175rem;\n  background: rgb(238, 159, 40);\n  left: 20%;\n  bottom: 0;\n  transform: scale(0, 1);\n  transition: transform 0.3s ease;\n}\n\nbutton.contact::after {\n  width: 70%;\n  left: 15%;\n}\n\nbutton.nav-btn:hover::after {\n  transform: scale(1, 1);\n}\n\nbutton.selected::after {\n  transform: scale(1, 1);\n}\n\n.menu-img {\n  height: 170px;\n}\n\n.mainmenu {\n  width: 150px;\n}\n\na {\n  text-decoration: none;\n  font-weight: 500;\n  color: #a5f3fc;\n}\n\na:hover {\n  font-weight: 600;\n}\n\nh1,\nh2 {\n  text-align: center;\n}\n\n.options {\n  display: grid;\n  gap: 40px;\n  margin: 30px auto;\n}\n\n.menu-btn {\n  width: 220px;\n  height: 55px;\n}\n\n.learn {\n  width: 200px;\n  height: 60px;\n}\n\n@media screen and (max-width: 1200px) {\n  body:before {\n    content: \"\";\n    display: block;\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -10;\n    background: url(./images/cauldron2.png) no-repeat;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n  }\n\n    button {\n      width: 150px;\n      height: 45px;\n      font-size: 1.5rem;\n    }\n\n    button.nav-btn {\n      width: 135px;\n    }\n\n    .mainmenu {\n      width: 180px;\n    }\n\n    h1 {\n      font-size: 7rem;\n    }\n\n    h2 {\n      font-size: 2.8rem;\n    }\n\n    h3 {\n      font-size: 1.8rem;\n    }\n\n    .main > p, \n    .main > div > p {\n      font-size: 1.6rem;\n    }\n\n    .main > div > p.footer {\n      font-size: 1.3rem;\n    }\n\n    .info > p {\n        font-size: 1.4rem;\n      }\n\n    .card {\n      width: 600px;\n      height: 220px;\n    }\n\n    .menu-img {\n      height: 195px;\n    }\n\n    .info {\n      height: 220px;\n    }\n      \n\n\n}\n"],"sourceRoot":""}]);
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

  const contact = document.querySelector(".contact");
  const home = document.querySelector(".home");
  const menu = document.querySelector(".menu");
  const about = document.querySelector(".about");

  about.classList.add("selected");
  home.classList.remove("selected");
  menu.classList.remove("selected");
  contact.classList.remove("selected");

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
  const br = document.createElement("br");
  info.appendChild(br);
  const footer = document.createElement("p");
  footer.classList.add("footer");
  footer.innerHTML = "Information courtesy of <a href='https://harrypotter.fandom.com/wiki/Leaky_Cauldron'>The Muggle Wiki</a>.";
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

  const contact = document.querySelector(".contact");
  const home = document.querySelector(".home");
  const menu = document.querySelector(".menu");
  const about = document.querySelector(".about");

  contact.classList.add("selected");
  home.classList.remove("selected");
  menu.classList.remove("selected");
  about.classList.remove("selected");

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
  form.setAttribute("onsubmit", "return false;");
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
  info.classList.add("contact-info");
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

  const contact = document.querySelector(".contact");
  const home = document.querySelector(".home");
  const menu = document.querySelector(".menu");
  const about = document.querySelector(".about");

  home.classList.add("selected");
  about.classList.remove("selected");
  menu.classList.remove("selected");
  contact.classList.remove("selected");

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
  image1.classList.add("menu-img");
  image1.setAttribute("alt", "Picture of tea and crumpets");
  card1.appendChild(image1);
  card1.appendChild(info1);
  const head1 = document.createElement("h3");
  head1.textContent = "Tea and Crumpets";
  info1.appendChild(head1);
  const blurb1 = document.createElement("p");
  blurb1.textContent = "A pot of tea paired with our fluffy crumpets. Add a shot of Ogden's Old Firewhisky if you're bold!";
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
  image2.classList.add("menu-img");
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
  image3.classList.add("menu-img");
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
  image4.classList.add("menu-img");
  image4.setAttribute("alt", "Picture of pumpkin juice");
  card4.appendChild(image4);
  card4.appendChild(info4);
  const head4 = document.createElement("h3");
  head4.textContent = "Pumpkin Juice";
  info4.appendChild(head4);
  const blurb4 = document.createElement("p");
  blurb4.textContent = "Creamy and refreshing, perfect to accompany any dish or sip on its own.";
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
  image5.classList.add("menu-img");
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
  image1.classList.add("menu-img");
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
  image2.classList.add("menu-img");
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
  image3.classList.add("menu-img");
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
  price3.textContent = "5S 7K";
  price3.classList.add("price");
  info3.appendChild(price3);
  main.appendChild(card3);

  const card4 = document.createElement("div");
  const info4 = document.createElement("div");
  card4.classList.add("card");
  info4.classList.add("info");
  const image4 = document.createElement("img");
  image4.src = _images_doughnuts_png__WEBPACK_IMPORTED_MODULE_4__;
  image4.classList.add("menu-img");
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
  image1.classList.add("menu-img");
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
  image2.classList.add("menu-img");
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
  image3.classList.add("menu-img");
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
  image4.classList.add("menu-img");
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
  image5.classList.add("menu-img");
  image5.setAttribute("alt", "Picture of shepherds pie");
  card5.appendChild(image5);
  card5.appendChild(info5);
  const head5 = document.createElement("h3");
  head5.textContent = "Shepherds Pie";
  info5.appendChild(head5);
  const blurb5 = document.createElement("p");
  blurb5.textContent = "Minced lamb, gravy, peas and carrots, and topped with mashed potatoes. Serves two.";
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
  image6.classList.add("menu-img");
  image6.setAttribute("alt", "Picture of toad in the hole");
  card6.appendChild(image6);
  card6.appendChild(info6);
  const head6 = document.createElement("h3");
  head6.textContent = "Toad in the Hole";
  info6.appendChild(head6);
  const blurb6 = document.createElement("p");
  blurb6.textContent = "Our Yorkshire pudding pastry with sausages, garnished with onion gravy and parsley.";
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

  const contact = document.querySelector(".contact");
  const home = document.querySelector(".home");
  const menu = document.querySelector(".menu");
  const about = document.querySelector(".about");

  menu.classList.add("selected");
  home.classList.remove("selected");
  about.classList.remove("selected");
  contact.classList.remove("selected");

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
  home.classList.add("nav-btn");
  home.textContent = "Home";
  navbar.appendChild(home);
  const menu = document.createElement("button");
  menu.classList.add("menu");
  menu.classList.add("nav-btn");
  menu.textContent = "Menu";
  navbar.appendChild(menu);
  const about = document.createElement("button");
  about.classList.add("about");
  about.classList.add("nav-btn");
  about.textContent = "About";
  navbar.appendChild(about);
  const contact = document.createElement("button");
  contact.classList.add("contact");
  contact.classList.add("nav-btn");
  contact.textContent = "Contact";
  navbar.appendChild(contact);

  home.classList.add("selected");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlHQUFpQztBQUM3RSw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0Qyx1SEFBd0M7QUFDcEYsNENBQTRDLHlIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFh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Ozs7Ozs7QUNBcUM7O0FBRU07QUFDTjtBQUNEO0FBQ0c7QUFDbEI7O0FBRXJCOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHdEQUFXO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxrREFBUTtBQUNWLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsa0RBQVE7QUFDVixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLG9EQUFTO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxvREFBUztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZXMvYmV2ZXJhZ2VzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXBhZ2VzL2Rlc3NlcnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXBhZ2VzL2Rpc2hlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9IQVJSWVBfXy5UVEZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0NhcmRvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY2F1bGRyb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY2F1bGRyb24yLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhBUlJZUFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhcmRvXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2FyZG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmhlYWRlciB7XG4gIGhlaWdodDogNzVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGVuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMjksIDI5LCAwLjUpO1xufVxuXG5ib2R5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTEwO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgbm8tcmVwZWF0O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMjksIDI5KTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJIQVJSWVBcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZDRkNGQ4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLm5hdmJhciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogMzVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFpbi1ob21lLCBcbi5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMyLCAyOSwgMjksIDAuNzUpO1xuICBwYWRkaW5nOiA0MHB4O1xufVxuXG4ubWFpbi1ob21lIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbiA+IHAsIFxuLm1haW4gPiBkaXYgPiBwIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjYTlhOWI0O1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLm1haW4gPiBkaXYgPiBwLmZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uaW5mbyB7XG4gIGNvbG9yOiAjYTlhOWI0O1xufVxuXG5oMiwgXG5oMyB7XG4gIGNvbG9yOiAjZDRkNGQ4O1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRhY3QtaW5mbyB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogNTAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNWZyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgaGVpZ2h0OiAxOTVweDtcbn1cblxuLmluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDE5NXB4O1xufVxuXG4ucHJpY2Uge1xuICBwbGFjZS1zZWxmOiBlbmQgZW5kO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMi42cmVtO1xuICBtYXJnaW46IDAgMCAyNXB4O1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi5pbmZvID4gcCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uYmx1cmIge1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiAjZDRkNGQ4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1NmY3NTtcbiAgY29sb3I6I2Q0ZDRkODtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7ICBcbn1cblxuYnV0dG9uOm5vdCgubmF2LWJ0bik6aG92ZXIge1xuICBib3gtc2hhZG93OlxuICAwLjVweCAwLjVweCAyLjhweCByZ2JhKDIzOCwgMTU5LCA0MCwgMC4wNyksXG4gIDEuMXB4IDEuMXB4IDYuN3B4IHJnYmEoMjM4LCAxNTksIDQwLCAwLjA4NCksXG4gIDIuMXB4IDIuMXB4IDEyLjVweCByZ2JhKDIzOCwgMTU5LCA0MCwgMC4wOTEpLFxuICAzLjhweCAzLjhweCAyMi4zcHggcmdiYSgyMzgsIDE1OSwgNDAsIDAuMTA0KSxcbiAgNy4xcHggNy4xcHggNDEuOHB4IHJnYmEoMjM4LCAxNTksIDQwLCAwLjEzOCksXG4gIDE3cHggMTdweCAxMDBweCByZ2JhKDIzOCwgMTU5LCA0MCwgMC4yNSlcbjtcbn1cblxuYnV0dG9uLm5hdi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgd2lkdGg6IDExMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uLm5hdi1idG46aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2IoMjM4LCAxNTksIDQwKTtcbn1cblxuYnV0dG9uLm5hdi1idG46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDAuMTc1cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjM4LCAxNTksIDQwKTtcbiAgbGVmdDogMjAlO1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbmJ1dHRvbi5jb250YWN0OjphZnRlciB7XG4gIHdpZHRoOiA3MCU7XG4gIGxlZnQ6IDE1JTtcbn1cblxuYnV0dG9uLm5hdi1idG46aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbn1cblxuYnV0dG9uLnNlbGVjdGVkOjphZnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG59XG5cbi5tZW51LWltZyB7XG4gIGhlaWdodDogMTcwcHg7XG59XG5cbi5tYWlubWVudSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNhNWYzZmM7XG59XG5cbmE6aG92ZXIge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oMSxcbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNDBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5cbi5tZW51LWJ0biB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuXG4ubGVhcm4ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIGJvZHk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogLTEwO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBuby1yZXBlYXQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG5cbiAgICBidXR0b24ubmF2LWJ0biB7XG4gICAgICB3aWR0aDogMTM1cHg7XG4gICAgfVxuXG4gICAgLm1haW5tZW51IHtcbiAgICAgIHdpZHRoOiAxODBweDtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDdyZW07XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgfVxuXG4gICAgLm1haW4gPiBwLCBcbiAgICAubWFpbiA+IGRpdiA+IHAge1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgfVxuXG4gICAgLm1haW4gPiBkaXYgPiBwLmZvb3RlciB7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG5cbiAgICAuaW5mbyA+IHAge1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgIH1cblxuICAgIC5jYXJkIHtcbiAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgIGhlaWdodDogMjIwcHg7XG4gICAgfVxuXG4gICAgLm1lbnUtaW1nIHtcbiAgICAgIGhlaWdodDogMTk1cHg7XG4gICAgfVxuXG4gICAgLmluZm8ge1xuICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICB9XG4gICAgICBcblxuXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQXdCO0FBQzFCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDRDQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLDZEQUFnRDtFQUNoRCw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQ0FB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QXNCO0VBQ3hCOztJQUVFO01BQ0UsWUFBWTtNQUNaLFlBQVk7TUFDWixpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsaUJBQWlCO0lBQ25COztJQUVBOztNQUVFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtRQUNJLGlCQUFpQjtNQUNuQjs7SUFFRjtNQUNFLFlBQVk7TUFDWixhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7Ozs7QUFJSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSEFSUllQXFxcIjtcXG4gIHNyYzogdXJsKC4vSEFSUllQX18uVFRGKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNhcmRvXFxcIjtcXG4gIHNyYzogdXJsKC4vQ2FyZG8tUmVndWxhci50dGYpO1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2FyZG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogNzVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGVuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDI5LCAyOSwgMC41KTtcXG59XFxuXFxuYm9keTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IC0xMDtcXG4gIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy9jYXVsZHJvbi5wbmcpIG5vLXJlcGVhdDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMjksIDI5KTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIQVJSWVBcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjZDRkNGQ4O1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBnYXA6IDM1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMzVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4taG9tZSwgXFxuLm1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDcwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDQwcHggYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDMyLCAyOSwgMjksIDAuNzUpO1xcbiAgcGFkZGluZzogNDBweDtcXG59XFxuXFxuLm1haW4taG9tZSB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluID4gcCwgXFxuLm1haW4gPiBkaXYgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY29sb3I6ICNhOWE5YjQ7XFxuICBtYXJnaW46IDE1cHggMDtcXG59XFxuXFxuLm1haW4gPiBkaXYgPiBwLmZvb3RlciB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmluZm8ge1xcbiAgY29sb3I6ICNhOWE5YjQ7XFxufVxcblxcbmgyLCBcXG5oMyB7XFxuICBjb2xvcjogI2Q0ZDRkODtcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBoZWlnaHQ6IDE5NXB4O1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTk1cHg7XFxufVxcblxcbi5wcmljZSB7XFxuICBwbGFjZS1zZWxmOiBlbmQgZW5kO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxuICBtYXJnaW46IDAgMCAyNXB4O1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmluZm8gPiBwIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uYmx1cmIge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGNvbG9yOiAjZDRkNGQ4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU2Zjc1O1xcbiAgY29sb3I6I2Q0ZDRkODtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgIFxcbn1cXG5cXG5idXR0b246bm90KC5uYXYtYnRuKTpob3ZlciB7XFxuICBib3gtc2hhZG93OlxcbiAgMC41cHggMC41cHggMi44cHggcmdiYSgyMzgsIDE1OSwgNDAsIDAuMDcpLFxcbiAgMS4xcHggMS4xcHggNi43cHggcmdiYSgyMzgsIDE1OSwgNDAsIDAuMDg0KSxcXG4gIDIuMXB4IDIuMXB4IDEyLjVweCByZ2JhKDIzOCwgMTU5LCA0MCwgMC4wOTEpLFxcbiAgMy44cHggMy44cHggMjIuM3B4IHJnYmEoMjM4LCAxNTksIDQwLCAwLjEwNCksXFxuICA3LjFweCA3LjFweCA0MS44cHggcmdiYSgyMzgsIDE1OSwgNDAsIDAuMTM4KSxcXG4gIDE3cHggMTdweCAxMDBweCByZ2JhKDIzOCwgMTU5LCA0MCwgMC4yNSlcXG47XFxufVxcblxcbmJ1dHRvbi5uYXYtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHdpZHRoOiAxMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uLm5hdi1idG46aG92ZXIge1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiKDIzOCwgMTU5LCA0MCk7XFxufVxcblxcbmJ1dHRvbi5uYXYtYnRuOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDAuMTc1cmVtO1xcbiAgYmFja2dyb3VuZDogcmdiKDIzOCwgMTU5LCA0MCk7XFxuICBsZWZ0OiAyMCU7XFxuICBib3R0b206IDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG59XFxuXFxuYnV0dG9uLmNvbnRhY3Q6OmFmdGVyIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBsZWZ0OiAxNSU7XFxufVxcblxcbmJ1dHRvbi5uYXYtYnRuOmhvdmVyOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbn1cXG5cXG5idXR0b24uc2VsZWN0ZWQ6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxufVxcblxcbi5tZW51LWltZyB7XFxuICBoZWlnaHQ6IDE3MHB4O1xcbn1cXG5cXG4ubWFpbm1lbnUge1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogI2E1ZjNmYztcXG59XFxuXFxuYTpob3ZlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDQwcHg7XFxuICBtYXJnaW46IDMwcHggYXV0bztcXG59XFxuXFxuLm1lbnUtYnRuIHtcXG4gIHdpZHRoOiAyMjBweDtcXG4gIGhlaWdodDogNTVweDtcXG59XFxuXFxuLmxlYXJuIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICBib2R5OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IC0xMDtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2NhdWxkcm9uMi5wbmcpIG5vLXJlcGVhdDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgIGhlaWdodDogNDVweDtcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcblxcbiAgICBidXR0b24ubmF2LWJ0biB7XFxuICAgICAgd2lkdGg6IDEzNXB4O1xcbiAgICB9XFxuXFxuICAgIC5tYWlubWVudSB7XFxuICAgICAgd2lkdGg6IDE4MHB4O1xcbiAgICB9XFxuXFxuICAgIGgxIHtcXG4gICAgICBmb250LXNpemU6IDdyZW07XFxuICAgIH1cXG5cXG4gICAgaDIge1xcbiAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICB9XFxuXFxuICAgIGgzIHtcXG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgfVxcblxcbiAgICAubWFpbiA+IHAsIFxcbiAgICAubWFpbiA+IGRpdiA+IHAge1xcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICB9XFxuXFxuICAgIC5tYWluID4gZGl2ID4gcC5mb290ZXIge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB9XFxuXFxuICAgIC5pbmZvID4gcCB7XFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICB9XFxuXFxuICAgIC5jYXJkIHtcXG4gICAgICB3aWR0aDogNjAwcHg7XFxuICAgICAgaGVpZ2h0OiAyMjBweDtcXG4gICAgfVxcblxcbiAgICAubWVudS1pbWcge1xcbiAgICAgIGhlaWdodDogMTk1cHg7XFxuICAgIH1cXG5cXG4gICAgLmluZm8ge1xcbiAgICAgIGhlaWdodDogMjIwcHg7XFxuICAgIH1cXG4gICAgICBcXG5cXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgbG9hZEFib3V0ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dFwiKTtcblxuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gIGhvbWUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm8tYWJvdXRcIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaW5mbyk7XG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAxLnRleHRDb250ZW50ID0gXCJUaGUgTGVha3kgQ2F1bGRyb24gd2FzIGJ1aWx0IGluIHRoZSAxNTAwcyBieSBEYWlzeSBEb2RkZXJpZGdlLiBJdHMgdHJ1ZSBhZGRyZXNzIGlzIG51bWJlciBvbmUgRGlhZ29uIEFsbGV5LCBhbmQgaXQgaXMgYmVsaWV2ZWQgdG8gaGF2ZSBiZWVuIGJ1aWx0IGFsb25nIHdpdGggdGhlIHJlc3Qgb2YgdGhlIHdpemFyZGluZyBzdHJlZXQuXCI7XG4gIGluZm8uYXBwZW5kQ2hpbGQocDEpO1xuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwMi50ZXh0Q29udGVudCA9IFwiV2l0aCB0aGUgaW1wb3NpdGlvbiBvZiB0aGUgSW50ZXJuYXRpb25hbCBTdGF0dXRlIG9mIFdpemFyZGluZyBTZWNyZWN5IGluIDE2OTIsIE1pbmlzdGVyIFVsaWNrIEdhbXAgcGVybWl0dGVkIHRoZSBwdWIgdG8gY29udGludWUgaXRzIGV4aXN0ZW5jZSBhcyBhIHNhZmUgaGF2ZW4gYW5kIHJlZnVnZSBmb3IgbWVtYmVycyBvZiB0aGUgbWFnaWNhbCBjb21tdW5pdHkuXCI7XG4gIGluZm8uYXBwZW5kQ2hpbGQocDIpO1xuICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwMy50ZXh0Q29udGVudCA9IFwiR2FtcCB3YXMgc3ltcGF0aGV0aWMgdG8gdGhlIG5lZWQgb2Ygd2l6YXJkcyB0byBsZXQgb2ZmIHN0ZWFtIGR1cmluZyB0aGlzIGRpZmZpY3VsdCB0aW1lLCBhbmQgZnVydGhlciBhZ3JlZWQgdG8gZ2l2ZSB0aGUgbGFuZGxvcmQgcGVybWlzc2lvbiB0byBsZXQgcGVvcGxlIGludG8gRGlhZ29uIEFsbGV5IGZyb20gaGlzIGJhY2t5YXJkLCBiZWNhdXNlIHRoZSBzaG9wcyBiZWhpbmQgdGhlIExlYWt5IENhdWxkcm9uIHdlcmUgbm93IGFsc28gaW4gbmVlZCBvZiBwcm90ZWN0aW9uLlwiO1xuICBpbmZvLmFwcGVuZENoaWxkKHAzKTtcbiAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcDQudGV4dENvbnRlbnQgPSBcIk1hbnkgbW9vbnMgbGF0ZXIsIFRoZSBMZWFreSBDYXVsZHJvbiByZW1haW5zIHRoZSBpZGVhbCBzcG90IHRvIGNhdGNoIHVwIHdpdGggd2l6YXJkaW5nIGdvc3NpcCBvdmVyIGEgZ2lsbHl3YXRlciBvciByZWxheCBhZnRlciBhIGRheSBvZiBzaG9wcGluZyB3aXRoIHNvbWUgc2hlcGhlcmRzIHBpZS4gV2UgaG9wZSB5b3UnbGwgam9pbiB1cyFcIjtcbiAgaW5mby5hcHBlbmRDaGlsZChwNCk7XG4gIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICBpbmZvLmFwcGVuZENoaWxkKGJyKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICBmb290ZXIuaW5uZXJIVE1MID0gXCJJbmZvcm1hdGlvbiBjb3VydGVzeSBvZiA8YSBocmVmPSdodHRwczovL2hhcnJ5cG90dGVyLmZhbmRvbS5jb20vd2lraS9MZWFreV9DYXVsZHJvbic+VGhlIE11Z2dsZSBXaWtpPC9hPi5cIjtcbiAgaW5mby5hcHBlbmRDaGlsZChmb290ZXIpO1xufSIsImltcG9ydCBjb250YWN0bWFwIGZyb20gJy4vaW1hZ2VzL21hcC5naWYnO1xuXG5leHBvcnQgY29uc3QgbG9hZENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG5cbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdFwiKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0XCIpO1xuXG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICBob21lLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gIGFib3V0LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGludHJvLnRleHRDb250ZW50ID0gXCJZb3UgYXJlIHdlbGNvbWUgdG8gbGVhdmUgdXMgYSBtZXNzYWdlIGhlcmUsIGJ1dCB0aGUgTXVnZ2xlIGludGVybmV0IGRvZXMgbm90IHdvcmsgdmVyeSBvZnRlbiwgc28gcGxlYXNlIGZvcmdpdmUgdXMgaWYgd2UgZG8gbm90IHJlc3BvbmQgaW4gYSB0aW1lbHkgbWFubmVyLiAtVG9tXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaW50cm8pO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcIm9uc3VibWl0XCIsIFwicmV0dXJuIGZhbHNlO1wiKTtcbiAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcbiAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5hbWVcIik7XG5cbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGVtYWlsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJlbWFpbFwiKTtcbiAgZW1haWwuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImVtYWlsXCIpO1xuICBlbWFpbC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVtYWlsXCIpO1xuXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm1lc3NhZ2VcIik7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJZb3VyIG1lc3NhZ2UgaGVyZVwiKTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xuICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mby5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pbmZvXCIpO1xuICBjb25zdCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbmZvMS50ZXh0Q29udGVudCA9IFwiUGhvbmU6ICs0NCA3MzQxIDEyMzQ1NlwiO1xuICBpbmZvLmFwcGVuZENoaWxkKGluZm8xKTtcbiAgaW5mby5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGNvbnN0IGluZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZm8yLnRleHRDb250ZW50ID0gXCJBZGRyZXNzOiA3NTMgQ2hhcmluZyBDcm9zcyBSb2FkXCI7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5mbzIpO1xuICBtYWluLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG1hcC5zcmMgPSBjb250YWN0bWFwO1xuICBtYXAuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCI1MDBweFwiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtYXApO1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGluay5pbm5lckhUTUwgPSBcIjxhIGhyZWY9J2h0dHA6Ly9tZW1iZXJzLm1hZGFzYWZpc2guY29tL35jal93aGl0ZWhvdW5kL0ZhbmZpYy9Mb2NhdGlvbl9Mb2NhdGlvbi9EaWFnb25fQWxsZXkuaHRtJz5JbWFnZSBTb3VyY2U8L2E+XCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQobGluayk7XG59OyIsImltcG9ydCB7IGxvYWRBYm91dCB9IGZyb20gXCIuL2Fib3V0LmpzXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cblxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRcIik7XG5cbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gIGFib3V0LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWhvbWVcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVGhlIExlYWt5IENhdWxkcm9uXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGNvbnN0IGJsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmx1cmIuY2xhc3NMaXN0LmFkZChcImJsdXJiXCIpO1xuICBibHVyYi50ZXh0Q29udGVudCA9IFwiRmlyc3QtcmF0ZSBmb29kLCBkcmluaywgYW5kIGxvZGdpbmcgZm9yIHdpdGNoZXMgYW5kIHdpemFyZHMsIGVzcGVjaWFsbHkgdGhvc2UgaGVhZGluZyB0byBEaWFnb24gQWxsZXkgb3IgbG9va2luZyBmb3IgYSBjb3p5IHBsYWNlIHRvIGRpbmVcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChibHVyYik7XG4gIGNvbnN0IGxlYXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGVhcm4uY2xhc3NMaXN0LmFkZChcImxlYXJuXCIpO1xuICBsZWFybi50ZXh0Q29udGVudCA9IFwiTGVhcm4gTW9yZVwiO1xuICBsZWFybi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRBYm91dCgpO1xuICB9KVxuICBtYWluLmFwcGVuZENoaWxkKGxlYXJuKTtcbn07IiwiaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuLi9tZW51LmpzJztcbmltcG9ydCB0ZWEgZnJvbSAnLi4vaW1hZ2VzL3RlYS5wbmcnO1xuaW1wb3J0IGdpbGx5IGZyb20gJy4uL2ltYWdlcy9naWxseS5wbmcnO1xuaW1wb3J0IGJ1dHRlciBmcm9tICcuLi9pbWFnZXMvYnV0dGVyLnBuZyc7XG5pbXBvcnQgcHVtcGtpbiBmcm9tICcuLi9pbWFnZXMvcHVtcGtpbi5wbmcnO1xuaW1wb3J0IG1lYWQgZnJvbSAnLi4vaW1hZ2VzL21lYWQucG5nJztcblxuZXhwb3J0IGNvbnN0IGxvYWRCZXZlcmFnZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJCZXZlcmFnZXNcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkMS5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mbzEuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IGltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlMS5zcmMgPSB0ZWE7XG4gIGltYWdlMS5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGltYWdlMS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIHRlYSBhbmQgY3J1bXBldHNcIik7XG4gIGNhcmQxLmFwcGVuZENoaWxkKGltYWdlMSk7XG4gIGNhcmQxLmFwcGVuZENoaWxkKGluZm8xKTtcbiAgY29uc3QgaGVhZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWQxLnRleHRDb250ZW50ID0gXCJUZWEgYW5kIENydW1wZXRzXCI7XG4gIGluZm8xLmFwcGVuZENoaWxkKGhlYWQxKTtcbiAgY29uc3QgYmx1cmIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJsdXJiMS50ZXh0Q29udGVudCA9IFwiQSBwb3Qgb2YgdGVhIHBhaXJlZCB3aXRoIG91ciBmbHVmZnkgY3J1bXBldHMuIEFkZCBhIHNob3Qgb2YgT2dkZW4ncyBPbGQgRmlyZXdoaXNreSBpZiB5b3UncmUgYm9sZCFcIjtcbiAgaW5mbzEuYXBwZW5kQ2hpbGQoYmx1cmIxKTtcbiAgY29uc3QgcHJpY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlMS50ZXh0Q29udGVudCA9IFwiMlMgNUtcIjtcbiAgcHJpY2UxLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgaW5mbzEuYXBwZW5kQ2hpbGQocHJpY2UxKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMSk7XG5cbiAgY29uc3QgY2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQyLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvMi5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgY29uc3QgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2UyLnNyYyA9IGdpbGx5O1xuICBpbWFnZTIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBpbWFnZTIuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBnaWxseXdhdGVyXCIpO1xuICBjYXJkMi5hcHBlbmRDaGlsZChpbWFnZTIpO1xuICBjYXJkMi5hcHBlbmRDaGlsZChpbmZvMik7XG4gIGNvbnN0IGhlYWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkMi50ZXh0Q29udGVudCA9IFwiR2lsbHl3YXRlclwiO1xuICBpbmZvMi5hcHBlbmRDaGlsZChoZWFkMik7XG4gIGNvbnN0IGJsdXJiMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBibHVyYjIudGV4dENvbnRlbnQgPSBcIkEgaG91c2UgZmF2b3JpdGUsIGdhcm5pc2hlZCB3aXRoIHlvdXIgY2hvaWNlIG9mIGN1Y3VtYmVyLCBtaW50LCBsZW1vbiwgcmFzcGJlcnJ5LCBvciBvbmlvbi5cIjtcbiAgaW5mbzIuYXBwZW5kQ2hpbGQoYmx1cmIyKTtcbiAgY29uc3QgcHJpY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlMi50ZXh0Q29udGVudCA9IFwiMlMgMTJLXCI7XG4gIHByaWNlMi5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGluZm8yLmFwcGVuZENoaWxkKHByaWNlMik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDIpO1xuXG4gIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkMy5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mbzMuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IGltYWdlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlMy5zcmMgPSBidXR0ZXI7XG4gIGltYWdlMy5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGltYWdlMy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIGJ1dHRlcmJlZXJcIik7XG4gIGNhcmQzLmFwcGVuZENoaWxkKGltYWdlMyk7XG4gIGNhcmQzLmFwcGVuZENoaWxkKGluZm8zKTtcbiAgY29uc3QgaGVhZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWQzLnRleHRDb250ZW50ID0gXCJCdXR0ZXJiZWVyXCI7XG4gIGluZm8zLmFwcGVuZENoaWxkKGhlYWQzKTtcbiAgY29uc3QgYmx1cmIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJsdXJiMy50ZXh0Q29udGVudCA9IFwiR3VhcmFudGVlZCB0byB3YXJtIHlvdSB1cCBmcm9tIGhlYWQgdG8gdG9lLlwiO1xuICBpbmZvMy5hcHBlbmRDaGlsZChibHVyYjMpO1xuICBjb25zdCBwcmljZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2UzLnRleHRDb250ZW50ID0gXCI0U1wiO1xuICBwcmljZTMuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBpbmZvMy5hcHBlbmRDaGlsZChwcmljZTMpO1xuICBtYWluLmFwcGVuZENoaWxkKGNhcmQzKTtcblxuICBjb25zdCBjYXJkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZDQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm80LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBpbWFnZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZTQuc3JjID0gcHVtcGtpbjtcbiAgaW1hZ2U0LmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2U0LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgcHVtcGtpbiBqdWljZVwiKTtcbiAgY2FyZDQuYXBwZW5kQ2hpbGQoaW1hZ2U0KTtcbiAgY2FyZDQuYXBwZW5kQ2hpbGQoaW5mbzQpO1xuICBjb25zdCBoZWFkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZDQudGV4dENvbnRlbnQgPSBcIlB1bXBraW4gSnVpY2VcIjtcbiAgaW5mbzQuYXBwZW5kQ2hpbGQoaGVhZDQpO1xuICBjb25zdCBibHVyYjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmx1cmI0LnRleHRDb250ZW50ID0gXCJDcmVhbXkgYW5kIHJlZnJlc2hpbmcsIHBlcmZlY3QgdG8gYWNjb21wYW55IGFueSBkaXNoIG9yIHNpcCBvbiBpdHMgb3duLlwiO1xuICBpbmZvNC5hcHBlbmRDaGlsZChibHVyYjQpO1xuICBjb25zdCBwcmljZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2U0LnRleHRDb250ZW50ID0gXCIzUyA0S1wiO1xuICBwcmljZTQuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBpbmZvNC5hcHBlbmRDaGlsZChwcmljZTQpO1xuICBtYWluLmFwcGVuZENoaWxkKGNhcmQ0KTtcblxuICBjb25zdCBjYXJkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZDUuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm81LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBpbWFnZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZTUuc3JjID0gbWVhZDtcbiAgaW1hZ2U1LmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2U1LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgbWVhZFwiKTtcbiAgY2FyZDUuYXBwZW5kQ2hpbGQoaW1hZ2U1KTtcbiAgY2FyZDUuYXBwZW5kQ2hpbGQoaW5mbzUpO1xuICBjb25zdCBoZWFkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZDUudGV4dENvbnRlbnQgPSBcIk1lYWRcIjtcbiAgaW5mbzUuYXBwZW5kQ2hpbGQoaGVhZDUpO1xuICBjb25zdCBibHVyYjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmx1cmI1LnRleHRDb250ZW50ID0gXCJPdXIgYWdlLW9sZCByZWNpcGUgZ29lcyBiYWNrIHRvIHdoZW4gVGhlIExlYWt5IENhdWxkcm9uIHdhcyBlc3RhYmxpc2hlZC4gTXVzdCBiZSAxOCsuXCI7XG4gIGluZm81LmFwcGVuZENoaWxkKGJsdXJiNSk7XG4gIGNvbnN0IHByaWNlNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmljZTUudGV4dENvbnRlbnQgPSBcIjVTIDNLXCI7XG4gIHByaWNlNS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGluZm81LmFwcGVuZENoaWxkKHByaWNlNSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDUpO1xuXG4gIGNvbnN0IG1haW5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWFpbm1lbnUudGV4dENvbnRlbnQgPSBcIk1haW4gTWVudVwiO1xuICBtYWlubWVudS5jbGFzc0xpc3QuYWRkKFwibWFpbm1lbnVcIik7XG4gIG1haW5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZE1lbnUoKTtcbiAgfSlcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWlubWVudSk7XG59IiwiaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuLi9tZW51LmpzJztcbmltcG9ydCBzcG90dGVkIGZyb20gJy4uL2ltYWdlcy9zcG90dGVkLnBuZyc7XG5pbXBvcnQgdHJlYWNsZSBmcm9tICcuLi9pbWFnZXMvdHJlYWNsZS5wbmcnO1xuaW1wb3J0IHB1ZGRpbmcgZnJvbSAnLi4vaW1hZ2VzL3B1ZGRpbmcucG5nJztcbmltcG9ydCBkb3VnaG51dHMgZnJvbSAnLi4vaW1hZ2VzL2RvdWdobnV0cy5wbmcnO1xuXG5leHBvcnQgY29uc3QgbG9hZERlc3NlcnRzID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiRGVzc2VydHNcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkMS5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mbzEuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IGltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlMS5zcmMgPSBzcG90dGVkO1xuICBpbWFnZTEuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBpbWFnZTEuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBzcG90dGVkIGRpY2tcIik7XG4gIGNhcmQxLmFwcGVuZENoaWxkKGltYWdlMSk7XG4gIGNhcmQxLmFwcGVuZENoaWxkKGluZm8xKTtcbiAgY29uc3QgaGVhZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWQxLnRleHRDb250ZW50ID0gXCJTcG90dGVkIERpY2tcIjtcbiAgaW5mbzEuYXBwZW5kQ2hpbGQoaGVhZDEpO1xuICBjb25zdCBibHVyYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmx1cmIxLnRleHRDb250ZW50ID0gXCJDYWtlIHRoYXQgY29udGFpbnMgZHJpZWQgcmFpc2lucyBhbmQgY3VycmFudHMsIGFuZCBpcyB0b3BwZWQgd2l0aCBvdXIgY3JlYW15IGN1c3RhcmQuXCI7XG4gIGluZm8xLmFwcGVuZENoaWxkKGJsdXJiMSk7XG4gIGNvbnN0IHByaWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmljZTEudGV4dENvbnRlbnQgPSBcIjZTIDExS1wiO1xuICBwcmljZTEuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBpbmZvMS5hcHBlbmRDaGlsZChwcmljZTEpO1xuICBtYWluLmFwcGVuZENoaWxkKGNhcmQxKTtcblxuICBjb25zdCBjYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZDIuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm8yLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBpbWFnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZTIuc3JjID0gdHJlYWNsZTtcbiAgaW1hZ2UyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2UyLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgdHJlYWNsZSB0YXJ0XCIpO1xuICBjYXJkMi5hcHBlbmRDaGlsZChpbWFnZTIpO1xuICBjYXJkMi5hcHBlbmRDaGlsZChpbmZvMik7XG4gIGNvbnN0IGhlYWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkMi50ZXh0Q29udGVudCA9IFwiVHJlYWNsZSBUYXJ0XCI7XG4gIGluZm8yLmFwcGVuZENoaWxkKGhlYWQyKTtcbiAgY29uc3QgYmx1cmIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJsdXJiMi50ZXh0Q29udGVudCA9IFwiQmFrZWQgdW50aWwgZ29sZGVuIGNyaXNwLCBhbmQgc2VydmVkIHdpdGggb3VyIGhvbWVtYWRlIHZhbmlsbGEgaWNlIGNyZWFtLlwiO1xuICBpbmZvMi5hcHBlbmRDaGlsZChibHVyYjIpO1xuICBjb25zdCBwcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2UyLnRleHRDb250ZW50ID0gXCI4U1wiO1xuICBwcmljZTIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBpbmZvMi5hcHBlbmRDaGlsZChwcmljZTIpO1xuICBtYWluLmFwcGVuZENoaWxkKGNhcmQyKTtcblxuICBjb25zdCBjYXJkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZDMuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm8zLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBpbWFnZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZTMuc3JjID0gcHVkZGluZztcbiAgaW1hZ2UzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2UzLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgY2hvY29sYXRlIHB1ZGRpbmdcIik7XG4gIGNhcmQzLmFwcGVuZENoaWxkKGltYWdlMyk7XG4gIGNhcmQzLmFwcGVuZENoaWxkKGluZm8zKTtcbiAgY29uc3QgaGVhZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWQzLnRleHRDb250ZW50ID0gXCJDaG9jb2xhdGUgUHVkZGluZ1wiO1xuICBpbmZvMy5hcHBlbmRDaGlsZChoZWFkMyk7XG4gIGNvbnN0IGJsdXJiMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBibHVyYjMudGV4dENvbnRlbnQgPSBcIk1hZGUgd2l0aCByZWFsIG1pbGsgY2hvY29sYXRlIGFuZCBnYXJuaXNoZWQgd2l0aCBtaW50LlwiO1xuICBpbmZvMy5hcHBlbmRDaGlsZChibHVyYjMpO1xuICBjb25zdCBwcmljZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2UzLnRleHRDb250ZW50ID0gXCI1UyA3S1wiO1xuICBwcmljZTMuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBpbmZvMy5hcHBlbmRDaGlsZChwcmljZTMpO1xuICBtYWluLmFwcGVuZENoaWxkKGNhcmQzKTtcblxuICBjb25zdCBjYXJkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZDQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm80LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBpbWFnZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZTQuc3JjID0gZG91Z2hudXRzO1xuICBpbWFnZTQuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBpbWFnZTQuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBqYW0gZG91Z2hudXRzXCIpO1xuICBjYXJkNC5hcHBlbmRDaGlsZChpbWFnZTQpO1xuICBjYXJkNC5hcHBlbmRDaGlsZChpbmZvNCk7XG4gIGNvbnN0IGhlYWQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkNC50ZXh0Q29udGVudCA9IFwiSmFtIERvdWdobnV0c1wiO1xuICBpbmZvNC5hcHBlbmRDaGlsZChoZWFkNCk7XG4gIGNvbnN0IGJsdXJiNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBibHVyYjQudGV4dENvbnRlbnQgPSBcIkEgZGVzc2VydCBmb3IgZXZlcnkgb2NjYXNpb24gLSBhdmFpbGFibGUgaW4gcGxhdGVzIG9mIDQsIDYsIG9yIDguXCI7XG4gIGluZm80LmFwcGVuZENoaWxkKGJsdXJiNCk7XG4gIGNvbnN0IHByaWNlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmljZTQudGV4dENvbnRlbnQgPSBcIjRTIDEySytcIjtcbiAgcHJpY2U0LmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgaW5mbzQuYXBwZW5kQ2hpbGQocHJpY2U0KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkNCk7XG5cbiAgY29uc3QgbWFpbm1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtYWlubWVudS50ZXh0Q29udGVudCA9IFwiTWFpbiBNZW51XCI7XG4gIG1haW5tZW51LmNsYXNzTGlzdC5hZGQoXCJtYWlubWVudVwiKTtcbiAgbWFpbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkTWVudSgpO1xuICB9KVxuICBtYWluLmFwcGVuZENoaWxkKG1haW5tZW51KTtcbn0iLCJpbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gJy4uL21lbnUuanMnO1xuaW1wb3J0IGJhbmdlcnMgZnJvbSAnLi4vaW1hZ2VzL2JhbmdlcnMucG5nJztcbmltcG9ydCBraWRuZXkgZnJvbSAnLi4vaW1hZ2VzL2tpZG5leS5wbmcnO1xuaW1wb3J0IHBlYSBmcm9tICcuLi9pbWFnZXMvcGVhLnBuZyc7XG5pbXBvcnQgeW9ya3NoaXJlIGZyb20gJy4uL2ltYWdlcy95b3Jrc2hpcmUucG5nJztcbmltcG9ydCBzaGVwaGVyZCBmcm9tICcuLi9pbWFnZXMvc2hlcGhlcmQucG5nJztcbmltcG9ydCB0b2FkIGZyb20gJy4uL2ltYWdlcy90b2FkLnBuZyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkRGlzaGVzID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiU2lnbmF0dXJlIERpc2hlc1wiO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgY2FyZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQxLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvMS5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgY29uc3QgaW1hZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2UxLnNyYyA9IGJhbmdlcnM7XG4gIGltYWdlMS5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGltYWdlMS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIGJhbmdlcnMgYW5kIG1hc2hcIik7XG4gIGNhcmQxLmFwcGVuZENoaWxkKGltYWdlMSk7XG4gIGNhcmQxLmFwcGVuZENoaWxkKGluZm8xKTtcbiAgY29uc3QgaGVhZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWQxLnRleHRDb250ZW50ID0gXCJCYW5nZXJzIGFuZCBNYXNoXCI7XG4gIGluZm8xLmFwcGVuZENoaWxkKGhlYWQxKTtcbiAgY29uc3QgYmx1cmIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJsdXJiMS50ZXh0Q29udGVudCA9IFwiVGhyZWUgc3VjY3VsZW50IHNhdXNhZ2UgbGlua3Mgc2VydmVkIHdpdGggbWFzaGVkIHBvdGF0b2VzIGFuZCBncmF2eS5cIjtcbiAgaW5mbzEuYXBwZW5kQ2hpbGQoYmx1cmIxKTtcbiAgY29uc3QgcHJpY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlMS50ZXh0Q29udGVudCA9IFwiMTFTIDIwS1wiO1xuICBwcmljZTEuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBpbmZvMS5hcHBlbmRDaGlsZChwcmljZTEpO1xuICBtYWluLmFwcGVuZENoaWxkKGNhcmQxKTtcblxuICBjb25zdCBjYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZDIuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm8yLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBpbWFnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZTIuc3JjID0ga2lkbmV5O1xuICBpbWFnZTIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBpbWFnZTIuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBzdGVhayBhbmQga2lkbmV5IHBpZVwiKTtcbiAgY2FyZDIuYXBwZW5kQ2hpbGQoaW1hZ2UyKTtcbiAgY2FyZDIuYXBwZW5kQ2hpbGQoaW5mbzIpO1xuICBjb25zdCBoZWFkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZDIudGV4dENvbnRlbnQgPSBcIlN0ZWFrIGFuZCBLaWRuZXkgUGllXCI7XG4gIGluZm8yLmFwcGVuZENoaWxkKGhlYWQyKTtcbiAgY29uc3QgYmx1cmIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJsdXJiMi50ZXh0Q29udGVudCA9IFwiT3VyIGZsYWt5IHBhc3RyeSBjcnVzdCBmaWxsZWQgd2l0aCBiZWVmLCBraWRuZXksIG9uaW9uLCBjYXJyb3QsIG11c2hyb29tLCBhbmQgYSByaWNoIGdyYXZ5LlwiO1xuICBpbmZvMi5hcHBlbmRDaGlsZChibHVyYjIpO1xuICBjb25zdCBwcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2UyLnRleHRDb250ZW50ID0gXCIxM1MgMTJLXCI7XG4gIHByaWNlMi5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGluZm8yLmFwcGVuZENoaWxkKHByaWNlMik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDIpO1xuXG4gIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkMy5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mbzMuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IGltYWdlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlMy5zcmMgPSBwZWE7XG4gIGltYWdlMy5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGltYWdlMy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIHBlYSBzb3VwXCIpO1xuICBjYXJkMy5hcHBlbmRDaGlsZChpbWFnZTMpO1xuICBjYXJkMy5hcHBlbmRDaGlsZChpbmZvMyk7XG4gIGNvbnN0IGhlYWQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkMy50ZXh0Q29udGVudCA9IFwiUGVhIFNvdXBcIjtcbiAgaW5mbzMuYXBwZW5kQ2hpbGQoaGVhZDMpO1xuICBjb25zdCBibHVyYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmx1cmIzLnRleHRDb250ZW50ID0gXCJBIGhvdXNlIGZhdm9yaXRlLCBvdXIgcGVhIHNvdXAgaXMgcmljaCBhbmQgcGVyZmVjdCB0byBhY2NvbXBhbnkgYW5vdGhlciBkaXNoLCBvciB0byBlbmpveSBvbiBpdHMgb3duLlwiO1xuICBpbmZvMy5hcHBlbmRDaGlsZChibHVyYjMpO1xuICBjb25zdCBwcmljZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2UzLnRleHRDb250ZW50ID0gXCI5UyA4S1wiO1xuICBwcmljZTMuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBpbmZvMy5hcHBlbmRDaGlsZChwcmljZTMpO1xuICBtYWluLmFwcGVuZENoaWxkKGNhcmQzKTtcblxuICBjb25zdCBjYXJkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZDQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm80LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBpbWFnZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZTQuc3JjID0geW9ya3NoaXJlO1xuICBpbWFnZTQuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBpbWFnZTQuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiB5b3Jrc2hpcmUgcHVkZGluZ1wiKTtcbiAgY2FyZDQuYXBwZW5kQ2hpbGQoaW1hZ2U0KTtcbiAgY2FyZDQuYXBwZW5kQ2hpbGQoaW5mbzQpO1xuICBjb25zdCBoZWFkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZDQudGV4dENvbnRlbnQgPSBcIllvcmtzaGlyZSBQdWRkaW5nXCI7XG4gIGluZm80LmFwcGVuZENoaWxkKGhlYWQ0KTtcbiAgY29uc3QgYmx1cmI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJsdXJiNC50ZXh0Q29udGVudCA9IFwiQSBkZWxlY3RhYmxlIHBhc3RyeSB0b3BwZWQgd2l0aCByb2FzdCBiZWVmIGFuZCBncmF2eSwgYW5kIHNlcnZlZCB3aXRoIGdyaWxsZWQgc2Vhc29uYWwgdmVnZXRhYmxlcy5cIjtcbiAgaW5mbzQuYXBwZW5kQ2hpbGQoYmx1cmI0KTtcbiAgY29uc3QgcHJpY2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlNC50ZXh0Q29udGVudCA9IFwiMTRTXCI7XG4gIHByaWNlNC5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGluZm80LmFwcGVuZENoaWxkKHByaWNlNCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDQpO1xuXG4gIGNvbnN0IGNhcmQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkNS5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mbzUuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IGltYWdlNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlNS5zcmMgPSBzaGVwaGVyZDtcbiAgaW1hZ2U1LmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2U1LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2Ygc2hlcGhlcmRzIHBpZVwiKTtcbiAgY2FyZDUuYXBwZW5kQ2hpbGQoaW1hZ2U1KTtcbiAgY2FyZDUuYXBwZW5kQ2hpbGQoaW5mbzUpO1xuICBjb25zdCBoZWFkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZDUudGV4dENvbnRlbnQgPSBcIlNoZXBoZXJkcyBQaWVcIjtcbiAgaW5mbzUuYXBwZW5kQ2hpbGQoaGVhZDUpO1xuICBjb25zdCBibHVyYjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmx1cmI1LnRleHRDb250ZW50ID0gXCJNaW5jZWQgbGFtYiwgZ3JhdnksIHBlYXMgYW5kIGNhcnJvdHMsIGFuZCB0b3BwZWQgd2l0aCBtYXNoZWQgcG90YXRvZXMuIFNlcnZlcyB0d28uXCI7XG4gIGluZm81LmFwcGVuZENoaWxkKGJsdXJiNSk7XG4gIGNvbnN0IHByaWNlNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmljZTUudGV4dENvbnRlbnQgPSBcIjFHXCI7XG4gIHByaWNlNS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGluZm81LmFwcGVuZENoaWxkKHByaWNlNSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDUpO1xuXG4gIGNvbnN0IGNhcmQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkNi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mbzYuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IGltYWdlNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlNi5zcmMgPSB0b2FkO1xuICBpbWFnZTYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBpbWFnZTYuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiB0b2FkIGluIHRoZSBob2xlXCIpO1xuICBjYXJkNi5hcHBlbmRDaGlsZChpbWFnZTYpO1xuICBjYXJkNi5hcHBlbmRDaGlsZChpbmZvNik7XG4gIGNvbnN0IGhlYWQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkNi50ZXh0Q29udGVudCA9IFwiVG9hZCBpbiB0aGUgSG9sZVwiO1xuICBpbmZvNi5hcHBlbmRDaGlsZChoZWFkNik7XG4gIGNvbnN0IGJsdXJiNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBibHVyYjYudGV4dENvbnRlbnQgPSBcIk91ciBZb3Jrc2hpcmUgcHVkZGluZyBwYXN0cnkgd2l0aCBzYXVzYWdlcywgZ2FybmlzaGVkIHdpdGggb25pb24gZ3JhdnkgYW5kIHBhcnNsZXkuXCI7XG4gIGluZm82LmFwcGVuZENoaWxkKGJsdXJiNik7XG4gIGNvbnN0IHByaWNlNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmljZTYudGV4dENvbnRlbnQgPSBcIjEwUyA3S1wiO1xuICBwcmljZTYuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBpbmZvNi5hcHBlbmRDaGlsZChwcmljZTYpO1xuICBtYWluLmFwcGVuZENoaWxkKGNhcmQ2KTtcblxuICBjb25zdCBtYWlubWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1haW5tZW51LnRleHRDb250ZW50ID0gXCJNYWluIE1lbnVcIjtcbiAgbWFpbm1lbnUuY2xhc3NMaXN0LmFkZChcIm1haW5tZW51XCIpO1xuICBtYWlubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRNZW51KCk7XG4gIH0pXG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbm1lbnUpO1xufSIsImltcG9ydCB7IGxvYWRCZXZlcmFnZXMgfSBmcm9tICcuL21lbnUtcGFnZXMvYmV2ZXJhZ2VzLmpzJztcbmltcG9ydCB7IGxvYWREaXNoZXMgfSBmcm9tICcuL21lbnUtcGFnZXMvZGlzaGVzLmpzJztcbmltcG9ydCB7IGxvYWREZXNzZXJ0cyB9IGZyb20gJy4vbWVudS1wYWdlcy9kZXNzZXJ0cy5qcyc7XG5cblxuZXhwb3J0IGNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dFwiKTtcblxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgaG9tZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gIGFib3V0LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwib3B0aW9uc1wiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChvcHRpb25zKTtcbiAgY29uc3QgYmV2ZXJhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYmV2ZXJhZ2VzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgYmV2ZXJhZ2VzLnRleHRDb250ZW50ID0gXCJCZXZlcmFnZXNcIjtcbiAgYmV2ZXJhZ2VzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZEJldmVyYWdlcygpO1xuICB9KVxuICBvcHRpb25zLmFwcGVuZENoaWxkKGJldmVyYWdlcyk7XG4gIGNvbnN0IGRpc2hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRpc2hlcy5jbGFzc0xpc3QuYWRkKFwibWVudS1idG5cIik7XG4gIGRpc2hlcy50ZXh0Q29udGVudCA9IFwiU2lnbmF0dXJlIERpc2hlc1wiO1xuICBkaXNoZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkRGlzaGVzKCk7XG4gIH0pXG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQoZGlzaGVzKTtcbiAgY29uc3QgZGVzc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZXNzZXJ0cy5jbGFzc0xpc3QuYWRkKFwibWVudS1idG5cIik7XG4gIGRlc3NlcnRzLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiO1xuICBkZXNzZXJ0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWREZXNzZXJ0cygpO1xuICB9KVxuICBvcHRpb25zLmFwcGVuZENoaWxkKGRlc3NlcnRzKTtcbn0iLCJleHBvcnQgY29uc3QgbG9hZFNpdGUgPSAoKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdmJhcik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnRuXCIpO1xuICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChob21lKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdi1idG5cIik7XG4gIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKG1lbnUpO1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcIm5hdi1idG5cIik7XG4gIGFib3V0LnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiKTtcbiAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW4taG9tZVwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUaGUgTGVha3kgQ2F1bGRyb25cIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgY29uc3QgYmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBibHVyYi5jbGFzc0xpc3QuYWRkKFwiYmx1cmJcIik7XG4gIGJsdXJiLnRleHRDb250ZW50ID0gXCJGaXJzdC1yYXRlIGZvb2QsIGRyaW5rLCBhbmQgbG9kZ2luZyBmb3Igd2l0Y2hlcyBhbmQgd2l6YXJkcywgZXNwZWNpYWxseSB0aG9zZSBoZWFkaW5nIHRvIERpYWdvbiBBbGxleSBvciBsb29raW5nIGZvciBhIGNvenkgcGxhY2UgdG8gZGluZVwiO1xuICBtYWluLmFwcGVuZENoaWxkKGJsdXJiKTtcbiAgY29uc3QgbGVhcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZWFybi5jbGFzc0xpc3QuYWRkKFwibGVhcm5cIik7XG4gIGxlYXJuLnRleHRDb250ZW50ID0gXCJMZWFybiBNb3JlXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQobGVhcm4pO1xufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGxvYWRTaXRlIH0gZnJvbSBcIi4vc2l0ZS5qc1wiO1xuXG5pbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcbmltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCJcbmltcG9ydCB7IGxvYWRBYm91dCB9IGZyb20gXCIuL2Fib3V0LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gbG9hZENvbnRhY3QoKTtcblxuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdFwiKTtcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbG9hZENvbnRhY3QoKTtcbn0pXG5cbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvYWRIb21lKCk7XG59KVxuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkTWVudSgpO1xufSlcblxuY29uc3QgbGVhcm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlYXJuXCIpO1xubGVhcm4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbG9hZEFib3V0KCk7XG59KVxuXG5jb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRcIik7XG5hYm91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkQWJvdXQoKTtcbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==