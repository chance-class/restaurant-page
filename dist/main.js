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

body {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
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
  margin: 15px auto 40px;
  align-items: center;
  background: rgba(32, 29, 29, 0.75);
  padding: 40px;
}

.main-home {
  background: transparent;
  color: white;
  text-align: center;
  justify-content: center;
  align-content: center;
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
    body {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"HARRYP\";\n  src: url(./HARRYP__.TTF);\n}\n\n@font-face {\n  font-family: \"Cardo\";\n  src: url(./Cardo-Regular.ttf);\n}\n\n* {\n  font-family: \"Cardo\", sans-serif;\n}\n\n.header {\n  height: 75px;\n  display: grid;\n  justify-content: center;\n  align-content: end;\n  background-color: rgba(32, 29, 29, 0.5);\n}\n\nbody {\n  background-image: url(./images/cauldron.png);\n  background-attachment: fixed;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-color: rgb(32, 29, 29);\n}\n\nh1 {\n  font-family: \"HARRYP\", sans-serif;\n  font-size: 6rem;\n  margin: 0;\n  font-weight: 300;\n  color: #d4d4d8;\n  padding-bottom: 15px;\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 35px;\n  justify-content: center;\n  align-content: center;\n  height: 35px;\n  padding-bottom: 15px;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n}\n\n.main-home, \n.main {\n  position: relative;\n  width: 700px;\n  display: flex;\n  flex-direction: column;\n  margin: 15px auto 40px;\n  align-items: center;\n  background: rgba(32, 29, 29, 0.75);\n  padding: 40px;\n}\n\n.main-home {\n  background: transparent;\n  color: white;\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n}\n\n.main > p, \n.main > div > p {\n  font-size: 1.4rem;\n  color: #a9a9b4;\n  margin: 15px 0;\n}\n\n.main > div > p.footer {\n  font-size: 1.1rem;\n}\n\n.info {\n  color: #a9a9b4;\n}\n\nh2, \nh3 {\n  color: #d4d4d8;\n}\n\ninput {\n  width: 500px;\n  height: 35px;\n  font-size: 18px;\n  font-family: sans-serif;\n}\n\ntextarea {\n  width: 500px;\n  height: 120px;\n  font-size: 18px;\n  font-family: sans-serif;\n}\n\n.contact-info {\n  padding-bottom: 20px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n\n.card {\n  width: 500px;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  justify-content: center;\n  padding: 15px;\n  height: 195px;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n  height: 195px;\n}\n\n.price {\n  place-self: end end;\n  margin-top: auto;\n}\n\nh2 {\n  font-size: 2.6rem;\n  margin: 0 0 25px;\n}\n\nh3 {\n  font-size: 1.6rem;\n  margin: 0;\n}\n\n.info > p {\n  font-size: 1.2rem;\n}\n\n.blurb {\n  font-size: 32px;\n  margin-bottom: 20px;\n  color: #d4d4d8;\n}\n\nbutton {\n  margin: 0;\n  height: 40px;\n  width: 120px;\n  font-size: 1.3rem;\n  background-color: #156f75;\n  color:#d4d4d8;\n  border: none;\n  border-radius: 5px;  \n}\n\nbutton:not(.nav-btn):hover {\n  box-shadow:\n  0.5px 0.5px 2.8px rgba(238, 159, 40, 0.07),\n  1.1px 1.1px 6.7px rgba(238, 159, 40, 0.084),\n  2.1px 2.1px 12.5px rgba(238, 159, 40, 0.091),\n  3.8px 3.8px 22.3px rgba(238, 159, 40, 0.104),\n  7.1px 7.1px 41.8px rgba(238, 159, 40, 0.138),\n  17px 17px 100px rgba(238, 159, 40, 0.25)\n;\n}\n\nbutton.nav-btn {\n  background-color: transparent;\n  border-radius: 0;\n  width: 110px;\n  position: relative;\n  text-align: center;\n}\n\nbutton.nav-btn:hover {\n  text-shadow: 0 0 5px rgb(238, 159, 40);\n}\n\nbutton.nav-btn::after {\n  content: \"\";\n  position: absolute;\n  width: 60%;\n  height: 0.175rem;\n  background: rgb(238, 159, 40);\n  left: 20%;\n  bottom: 0;\n  transform: scale(0, 1);\n  transition: transform 0.3s ease;\n}\n\nbutton.contact::after {\n  width: 70%;\n  left: 15%;\n}\n\nbutton.nav-btn:hover::after {\n  transform: scale(1, 1);\n}\n\nbutton.selected::after {\n  transform: scale(1, 1);\n}\n\n.menu-img {\n  height: 170px;\n}\n\n.mainmenu {\n  width: 150px;\n}\n\na {\n  text-decoration: none;\n  font-weight: 500;\n  color: #a5f3fc;\n}\n\na:hover {\n  font-weight: 600;\n}\n\nh1,\nh2 {\n  text-align: center;\n}\n\n.options {\n  display: grid;\n  gap: 40px;\n  margin: 30px auto;\n}\n\n.menu-btn {\n  width: 220px;\n  height: 55px;\n}\n\n.learn {\n  width: 200px;\n  height: 60px;\n}\n\n@media screen and (max-width: 1200px) {\n    body {\n        background-image: url(./images/cauldron2.png);\n    }\n\n    button {\n      width: 150px;\n      height: 45px;\n      font-size: 1.5rem;\n    }\n\n    button.nav-btn {\n      width: 135px;\n    }\n\n    .mainmenu {\n      width: 180px;\n    }\n\n    h1 {\n      font-size: 7rem;\n    }\n\n    h2 {\n      font-size: 2.8rem;\n    }\n\n    h3 {\n      font-size: 1.8rem;\n    }\n\n    .main > p, \n    .main > div > p {\n      font-size: 1.6rem;\n    }\n\n    .main > div > p.footer {\n      font-size: 1.3rem;\n    }\n\n    .info > p {\n        font-size: 1.4rem;\n      }\n\n    .card {\n      width: 600px;\n      height: 220px;\n    }\n\n    .menu-img {\n      height: 195px;\n    }\n\n    .info {\n      height: 220px;\n    }\n      \n\n\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlHQUFpQztBQUM3RSw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0Qyx1SEFBd0M7QUFDcEYsNENBQTRDLHlIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVks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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksNENBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRnVDOztBQUVoQztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFTO0FBQ2IsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNzQztBQUNGO0FBQ0k7QUFDRTtBQUNFO0FBQ047O0FBRS9CO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNENBQUc7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhDQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQzs7QUFFTTtBQUNOO0FBQ0Q7QUFDRztBQUNsQjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBLEVBQUUsd0RBQVc7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLGtEQUFRO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxrREFBUTtBQUNWLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsb0RBQVM7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLG9EQUFTO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1wYWdlcy9iZXZlcmFnZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZXMvZGVzc2VydHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZXMvZGlzaGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0hBUlJZUF9fLlRURlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vQ2FyZG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jYXVsZHJvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jYXVsZHJvbjIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiSEFSUllQXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2FyZG9cIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbioge1xuICBmb250LWZhbWlseTogXCJDYXJkb1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogZW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAyOSwgMjksIDAuNSk7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMjksIDI5KTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJIQVJSWVBcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZDRkNGQ4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLm5hdmJhciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogMzVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFpbi1ob21lLCBcbi5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMTVweCBhdXRvIDQwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzIsIDI5LCAyOSwgMC43NSk7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5tYWluLWhvbWUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluID4gcCwgXG4ubWFpbiA+IGRpdiA+IHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICNhOWE5YjQ7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4ubWFpbiA+IGRpdiA+IHAuZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5pbmZvIHtcbiAgY29sb3I6ICNhOWE5YjQ7XG59XG5cbmgyLCBcbmgzIHtcbiAgY29sb3I6ICNkNGQ0ZDg7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uY29udGFjdC1pbmZvIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBoZWlnaHQ6IDE5NXB4O1xufVxuXG4uaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTk1cHg7XG59XG5cbi5wcmljZSB7XG4gIHBsYWNlLXNlbGY6IGVuZCBlbmQ7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyLjZyZW07XG4gIG1hcmdpbjogMCAwIDI1cHg7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuLmluZm8gPiBwIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5ibHVyYiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICNkNGQ0ZDg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU2Zjc1O1xuICBjb2xvcjojZDRkNGQ4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDsgIFxufVxuXG5idXR0b246bm90KC5uYXYtYnRuKTpob3ZlciB7XG4gIGJveC1zaGFkb3c6XG4gIDAuNXB4IDAuNXB4IDIuOHB4IHJnYmEoMjM4LCAxNTksIDQwLCAwLjA3KSxcbiAgMS4xcHggMS4xcHggNi43cHggcmdiYSgyMzgsIDE1OSwgNDAsIDAuMDg0KSxcbiAgMi4xcHggMi4xcHggMTIuNXB4IHJnYmEoMjM4LCAxNTksIDQwLCAwLjA5MSksXG4gIDMuOHB4IDMuOHB4IDIyLjNweCByZ2JhKDIzOCwgMTU5LCA0MCwgMC4xMDQpLFxuICA3LjFweCA3LjFweCA0MS44cHggcmdiYSgyMzgsIDE1OSwgNDAsIDAuMTM4KSxcbiAgMTdweCAxN3B4IDEwMHB4IHJnYmEoMjM4LCAxNTksIDQwLCAwLjI1KVxuO1xufVxuXG5idXR0b24ubmF2LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogMTEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ubmF2LWJ0bjpob3ZlciB7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYigyMzgsIDE1OSwgNDApO1xufVxuXG5idXR0b24ubmF2LWJ0bjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMC4xNzVyZW07XG4gIGJhY2tncm91bmQ6IHJnYigyMzgsIDE1OSwgNDApO1xuICBsZWZ0OiAyMCU7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuYnV0dG9uLmNvbnRhY3Q6OmFmdGVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgbGVmdDogMTUlO1xufVxuXG5idXR0b24ubmF2LWJ0bjpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xufVxuXG5idXR0b24uc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbn1cblxuLm1lbnUtaW1nIHtcbiAgaGVpZ2h0OiAxNzBweDtcbn1cblxuLm1haW5tZW51IHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2E1ZjNmYztcbn1cblxuYTpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmgxLFxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA0MHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuLm1lbnUtYnRuIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbi5sZWFybiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG5cbiAgICBidXR0b24ubmF2LWJ0biB7XG4gICAgICB3aWR0aDogMTM1cHg7XG4gICAgfVxuXG4gICAgLm1haW5tZW51IHtcbiAgICAgIHdpZHRoOiAxODBweDtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDdyZW07XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgfVxuXG4gICAgLm1haW4gPiBwLCBcbiAgICAubWFpbiA+IGRpdiA+IHAge1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgfVxuXG4gICAgLm1haW4gPiBkaXYgPiBwLmZvb3RlciB7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG5cbiAgICAuaW5mbyA+IHAge1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgIH1cblxuICAgIC5jYXJkIHtcbiAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgIGhlaWdodDogMjIwcHg7XG4gICAgfVxuXG4gICAgLm1lbnUtaW1nIHtcbiAgICAgIGhlaWdodDogMTk1cHg7XG4gICAgfVxuXG4gICAgLmluZm8ge1xuICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICB9XG4gICAgICBcblxuXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQXdCO0FBQzFCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDRDQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSx5REFBNEM7RUFDNUMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsaUNB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O0lBRUE7TUFDRSxpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSxpQkFBaUI7SUFDbkI7O0lBRUE7O01BRUUsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsaUJBQWlCO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO01BQ25COztJQUVGO01BQ0UsWUFBWTtNQUNaLGFBQWE7SUFDZjs7SUFFQTtNQUNFLGFBQWE7SUFDZjs7SUFFQTtNQUNFLGFBQWE7SUFDZjs7OztBQUlKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIQVJSWVBcXFwiO1xcbiAgc3JjOiB1cmwoLi9IQVJSWVBfXy5UVEYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2FyZG9cXFwiO1xcbiAgc3JjOiB1cmwoLi9DYXJkby1SZWd1bGFyLnR0Zik7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDYXJkb1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogZW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMjksIDI5LCAwLjUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9jYXVsZHJvbi5wbmcpO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAyOSwgMjkpO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogXFxcIkhBUlJZUFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDZyZW07XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6ICNkNGQ0ZDg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogMzVweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1ob21lLCBcXG4ubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMTVweCBhdXRvIDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSgzMiwgMjksIDI5LCAwLjc1KTtcXG4gIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbi5tYWluLWhvbWUge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4gPiBwLCBcXG4ubWFpbiA+IGRpdiA+IHAge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBjb2xvcjogI2E5YTliNDtcXG4gIG1hcmdpbjogMTVweCAwO1xcbn1cXG5cXG4ubWFpbiA+IGRpdiA+IHAuZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBjb2xvcjogI2E5YTliNDtcXG59XFxuXFxuaDIsIFxcbmgzIHtcXG4gIGNvbG9yOiAjZDRkNGQ4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGhlaWdodDogMTk1cHg7XFxufVxcblxcbi5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxOTVweDtcXG59XFxuXFxuLnByaWNlIHtcXG4gIHBsYWNlLXNlbGY6IGVuZCBlbmQ7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDIuNnJlbTtcXG4gIG1hcmdpbjogMCAwIDI1cHg7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaW5mbyA+IHAge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5ibHVyYiB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY29sb3I6ICNkNGQ0ZDg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTIwcHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTZmNzU7XFxuICBjb2xvcjojZDRkNGQ4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyAgXFxufVxcblxcbmJ1dHRvbjpub3QoLm5hdi1idG4pOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6XFxuICAwLjVweCAwLjVweCAyLjhweCByZ2JhKDIzOCwgMTU5LCA0MCwgMC4wNyksXFxuICAxLjFweCAxLjFweCA2LjdweCByZ2JhKDIzOCwgMTU5LCA0MCwgMC4wODQpLFxcbiAgMi4xcHggMi4xcHggMTIuNXB4IHJnYmEoMjM4LCAxNTksIDQwLCAwLjA5MSksXFxuICAzLjhweCAzLjhweCAyMi4zcHggcmdiYSgyMzgsIDE1OSwgNDAsIDAuMTA0KSxcXG4gIDcuMXB4IDcuMXB4IDQxLjhweCByZ2JhKDIzOCwgMTU5LCA0MCwgMC4xMzgpLFxcbiAgMTdweCAxN3B4IDEwMHB4IHJnYmEoMjM4LCAxNTksIDQwLCAwLjI1KVxcbjtcXG59XFxuXFxuYnV0dG9uLm5hdi1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ubmF2LWJ0bjpob3ZlciB7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2IoMjM4LCAxNTksIDQwKTtcXG59XFxuXFxuYnV0dG9uLm5hdi1idG46OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogMC4xNzVyZW07XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjM4LCAxNTksIDQwKTtcXG4gIGxlZnQ6IDIwJTtcXG4gIGJvdHRvbTogMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbn1cXG5cXG5idXR0b24uY29udGFjdDo6YWZ0ZXIge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGxlZnQ6IDE1JTtcXG59XFxuXFxuYnV0dG9uLm5hdi1idG46aG92ZXI6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxufVxcblxcbmJ1dHRvbi5zZWxlY3RlZDo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG59XFxuXFxuLm1lbnUtaW1nIHtcXG4gIGhlaWdodDogMTcwcHg7XFxufVxcblxcbi5tYWlubWVudSB7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjYTVmM2ZjO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNDBweDtcXG4gIG1hcmdpbjogMzBweCBhdXRvO1xcbn1cXG5cXG4ubWVudS1idG4ge1xcbiAgd2lkdGg6IDIyMHB4O1xcbiAgaGVpZ2h0OiA1NXB4O1xcbn1cXG5cXG4ubGVhcm4ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvY2F1bGRyb24yLnBuZyk7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgaGVpZ2h0OiA0NXB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbi5uYXYtYnRuIHtcXG4gICAgICB3aWR0aDogMTM1cHg7XFxuICAgIH1cXG5cXG4gICAgLm1haW5tZW51IHtcXG4gICAgICB3aWR0aDogMTgwcHg7XFxuICAgIH1cXG5cXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogN3JlbTtcXG4gICAgfVxcblxcbiAgICBoMiB7XFxuICAgICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgIH1cXG5cXG4gICAgaDMge1xcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICB9XFxuXFxuICAgIC5tYWluID4gcCwgXFxuICAgIC5tYWluID4gZGl2ID4gcCB7XFxuICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIH1cXG5cXG4gICAgLm1haW4gPiBkaXYgPiBwLmZvb3RlciB7XFxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIH1cXG5cXG4gICAgLmluZm8gPiBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgIH1cXG5cXG4gICAgLmNhcmQge1xcbiAgICAgIHdpZHRoOiA2MDBweDtcXG4gICAgICBoZWlnaHQ6IDIyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWltZyB7XFxuICAgICAgaGVpZ2h0OiAxOTVweDtcXG4gICAgfVxcblxcbiAgICAuaW5mbyB7XFxuICAgICAgaGVpZ2h0OiAyMjBweDtcXG4gICAgfVxcbiAgICAgIFxcblxcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBsb2FkQWJvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG5cbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdFwiKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0XCIpO1xuXG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgaG9tZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mby1hYm91dFwiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChpbmZvKTtcbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcDEudGV4dENvbnRlbnQgPSBcIlRoZSBMZWFreSBDYXVsZHJvbiB3YXMgYnVpbHQgaW4gdGhlIDE1MDBzIGJ5IERhaXN5IERvZGRlcmlkZ2UuIEl0cyB0cnVlIGFkZHJlc3MgaXMgbnVtYmVyIG9uZSBEaWFnb24gQWxsZXksIGFuZCBpdCBpcyBiZWxpZXZlZCB0byBoYXZlIGJlZW4gYnVpbHQgYWxvbmcgd2l0aCB0aGUgcmVzdCBvZiB0aGUgd2l6YXJkaW5nIHN0cmVldC5cIjtcbiAgaW5mby5hcHBlbmRDaGlsZChwMSk7XG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAyLnRleHRDb250ZW50ID0gXCJXaXRoIHRoZSBpbXBvc2l0aW9uIG9mIHRoZSBJbnRlcm5hdGlvbmFsIFN0YXR1dGUgb2YgV2l6YXJkaW5nIFNlY3JlY3kgaW4gMTY5MiwgTWluaXN0ZXIgVWxpY2sgR2FtcCBwZXJtaXR0ZWQgdGhlIHB1YiB0byBjb250aW51ZSBpdHMgZXhpc3RlbmNlIGFzIGEgc2FmZSBoYXZlbiBhbmQgcmVmdWdlIGZvciBtZW1iZXJzIG9mIHRoZSBtYWdpY2FsIGNvbW11bml0eS5cIjtcbiAgaW5mby5hcHBlbmRDaGlsZChwMik7XG4gIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAzLnRleHRDb250ZW50ID0gXCJHYW1wIHdhcyBzeW1wYXRoZXRpYyB0byB0aGUgbmVlZCBvZiB3aXphcmRzIHRvIGxldCBvZmYgc3RlYW0gZHVyaW5nIHRoaXMgZGlmZmljdWx0IHRpbWUsIGFuZCBmdXJ0aGVyIGFncmVlZCB0byBnaXZlIHRoZSBsYW5kbG9yZCBwZXJtaXNzaW9uIHRvIGxldCBwZW9wbGUgaW50byBEaWFnb24gQWxsZXkgZnJvbSBoaXMgYmFja3lhcmQsIGJlY2F1c2UgdGhlIHNob3BzIGJlaGluZCB0aGUgTGVha3kgQ2F1bGRyb24gd2VyZSBub3cgYWxzbyBpbiBuZWVkIG9mIHByb3RlY3Rpb24uXCI7XG4gIGluZm8uYXBwZW5kQ2hpbGQocDMpO1xuICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwNC50ZXh0Q29udGVudCA9IFwiTWFueSBtb29ucyBsYXRlciwgVGhlIExlYWt5IENhdWxkcm9uIHJlbWFpbnMgdGhlIGlkZWFsIHNwb3QgdG8gY2F0Y2ggdXAgd2l0aCB3aXphcmRpbmcgZ29zc2lwIG92ZXIgYSBnaWxseXdhdGVyIG9yIHJlbGF4IGFmdGVyIGEgZGF5IG9mIHNob3BwaW5nIHdpdGggc29tZSBzaGVwaGVyZHMgcGllLiBXZSBob3BlIHlvdSdsbCBqb2luIHVzIVwiO1xuICBpbmZvLmFwcGVuZENoaWxkKHA0KTtcbiAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gIGluZm8uYXBwZW5kQ2hpbGQoYnIpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci5pbm5lckhUTUwgPSBcIkluZm9ybWF0aW9uIGNvdXJ0ZXN5IG9mIDxhIGhyZWY9J2h0dHBzOi8vaGFycnlwb3R0ZXIuZmFuZG9tLmNvbS93aWtpL0xlYWt5X0NhdWxkcm9uJz5UaGUgTXVnZ2xlIFdpa2k8L2E+LlwiO1xuICBpbmZvLmFwcGVuZENoaWxkKGZvb3Rlcik7XG59IiwiaW1wb3J0IGNvbnRhY3RtYXAgZnJvbSAnLi9pbWFnZXMvbWFwLmdpZic7XG5cbmV4cG9ydCBjb25zdCBsb2FkQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cblxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRcIik7XG5cbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gIGhvbWUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW50cm8udGV4dENvbnRlbnQgPSBcIllvdSBhcmUgd2VsY29tZSB0byBsZWF2ZSB1cyBhIG1lc3NhZ2UgaGVyZSwgYnV0IHRoZSBNdWdnbGUgaW50ZXJuZXQgZG9lcyBub3Qgd29yayB2ZXJ5IG9mdGVuLCBzbyBwbGVhc2UgZm9yZ2l2ZSB1cyBpZiB3ZSBkbyBub3QgcmVzcG9uZCBpbiBhIHRpbWVseSBtYW5uZXIuIC1Ub21cIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChpbnRybyk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwib25zdWJtaXRcIiwgXCJyZXR1cm4gZmFsc2U7XCIpO1xuICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBuYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuYW1lXCIpO1xuICBuYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmFtZVwiKTtcblxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZW1haWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImVtYWlsXCIpO1xuICBlbWFpbC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZW1haWxcIik7XG4gIGVtYWlsLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW1haWxcIik7XG5cbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibWVzc2FnZVwiKTtcbiAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIllvdXIgbWVzc2FnZSBoZXJlXCIpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG4gIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGJyLmNsb25lTm9kZSgpKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBtYWluLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWluZm9cIik7XG4gIGNvbnN0IGluZm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZm8xLnRleHRDb250ZW50ID0gXCJQaG9uZTogKzQ0IDczNDEgMTIzNDU2XCI7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5mbzEpO1xuICBpbmZvLmFwcGVuZENoaWxkKGJyLmNsb25lTm9kZSgpKTtcbiAgY29uc3QgaW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5mbzIudGV4dENvbnRlbnQgPSBcIkFkZHJlc3M6IDc1MyBDaGFyaW5nIENyb3NzIFJvYWRcIjtcbiAgaW5mby5hcHBlbmRDaGlsZChpbmZvMik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbWFwLnNyYyA9IGNvbnRhY3RtYXA7XG4gIG1hcC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjUwMHB4XCIpO1xuICBtYWluLmFwcGVuZENoaWxkKG1hcCk7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsaW5rLmlubmVySFRNTCA9IFwiPGEgaHJlZj0naHR0cDovL21lbWJlcnMubWFkYXNhZmlzaC5jb20vfmNqX3doaXRlaG91bmQvRmFuZmljL0xvY2F0aW9uX0xvY2F0aW9uL0RpYWdvbl9BbGxleS5odG0nPkltYWdlIFNvdXJjZTwvYT5cIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChsaW5rKTtcbn07IiwiaW1wb3J0IHsgbG9hZEFib3V0IH0gZnJvbSBcIi4vYWJvdXQuanNcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRIb21lID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dFwiKTtcblxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW4taG9tZVwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUaGUgTGVha3kgQ2F1bGRyb25cIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgY29uc3QgYmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBibHVyYi5jbGFzc0xpc3QuYWRkKFwiYmx1cmJcIik7XG4gIGJsdXJiLnRleHRDb250ZW50ID0gXCJGaXJzdC1yYXRlIGZvb2QsIGRyaW5rLCBhbmQgbG9kZ2luZyBmb3Igd2l0Y2hlcyBhbmQgd2l6YXJkcywgZXNwZWNpYWxseSB0aG9zZSBoZWFkaW5nIHRvIERpYWdvbiBBbGxleSBvciBsb29raW5nIGZvciBhIGNvenkgcGxhY2UgdG8gZGluZVwiO1xuICBtYWluLmFwcGVuZENoaWxkKGJsdXJiKTtcbiAgY29uc3QgbGVhcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZWFybi5jbGFzc0xpc3QuYWRkKFwibGVhcm5cIik7XG4gIGxlYXJuLnRleHRDb250ZW50ID0gXCJMZWFybiBNb3JlXCI7XG4gIGxlYXJuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZEFib3V0KCk7XG4gIH0pXG4gIG1haW4uYXBwZW5kQ2hpbGQobGVhcm4pO1xufTsiLCJpbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gJy4uL21lbnUuanMnO1xuaW1wb3J0IHRlYSBmcm9tICcuLi9pbWFnZXMvdGVhLnBuZyc7XG5pbXBvcnQgZ2lsbHkgZnJvbSAnLi4vaW1hZ2VzL2dpbGx5LnBuZyc7XG5pbXBvcnQgYnV0dGVyIGZyb20gJy4uL2ltYWdlcy9idXR0ZXIucG5nJztcbmltcG9ydCBwdW1wa2luIGZyb20gJy4uL2ltYWdlcy9wdW1wa2luLnBuZyc7XG5pbXBvcnQgbWVhZCBmcm9tICcuLi9pbWFnZXMvbWVhZC5wbmcnO1xuXG5leHBvcnQgY29uc3QgbG9hZEJldmVyYWdlcyA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkJldmVyYWdlc1wiO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgY2FyZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQxLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvMS5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgY29uc3QgaW1hZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2UxLnNyYyA9IHRlYTtcbiAgaW1hZ2UxLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2UxLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgdGVhIGFuZCBjcnVtcGV0c1wiKTtcbiAgY2FyZDEuYXBwZW5kQ2hpbGQoaW1hZ2UxKTtcbiAgY2FyZDEuYXBwZW5kQ2hpbGQoaW5mbzEpO1xuICBjb25zdCBoZWFkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZDEudGV4dENvbnRlbnQgPSBcIlRlYSBhbmQgQ3J1bXBldHNcIjtcbiAgaW5mbzEuYXBwZW5kQ2hpbGQoaGVhZDEpO1xuICBjb25zdCBibHVyYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmx1cmIxLnRleHRDb250ZW50ID0gXCJBIHBvdCBvZiB0ZWEgcGFpcmVkIHdpdGggb3VyIGZsdWZmeSBjcnVtcGV0cy4gQWRkIGEgc2hvdCBvZiBPZ2RlbidzIE9sZCBGaXJld2hpc2t5IGlmIHlvdSdyZSBib2xkIVwiO1xuICBpbmZvMS5hcHBlbmRDaGlsZChibHVyYjEpO1xuICBjb25zdCBwcmljZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2UxLnRleHRDb250ZW50ID0gXCIyUyA1S1wiO1xuICBwcmljZTEuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBpbmZvMS5hcHBlbmRDaGlsZChwcmljZTEpO1xuICBtYWluLmFwcGVuZENoaWxkKGNhcmQxKTtcblxuICBjb25zdCBjYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZDIuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm8yLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBpbWFnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZTIuc3JjID0gZ2lsbHk7XG4gIGltYWdlMi5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGltYWdlMi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIGdpbGx5d2F0ZXJcIik7XG4gIGNhcmQyLmFwcGVuZENoaWxkKGltYWdlMik7XG4gIGNhcmQyLmFwcGVuZENoaWxkKGluZm8yKTtcbiAgY29uc3QgaGVhZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWQyLnRleHRDb250ZW50ID0gXCJHaWxseXdhdGVyXCI7XG4gIGluZm8yLmFwcGVuZENoaWxkKGhlYWQyKTtcbiAgY29uc3QgYmx1cmIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJsdXJiMi50ZXh0Q29udGVudCA9IFwiQSBob3VzZSBmYXZvcml0ZSwgZ2FybmlzaGVkIHdpdGggeW91ciBjaG9pY2Ugb2YgY3VjdW1iZXIsIG1pbnQsIGxlbW9uLCByYXNwYmVycnksIG9yIG9uaW9uLlwiO1xuICBpbmZvMi5hcHBlbmRDaGlsZChibHVyYjIpO1xuICBjb25zdCBwcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2UyLnRleHRDb250ZW50ID0gXCIyUyAxMktcIjtcbiAgcHJpY2UyLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgaW5mbzIuYXBwZW5kQ2hpbGQocHJpY2UyKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMik7XG5cbiAgY29uc3QgY2FyZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQzLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvMy5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgY29uc3QgaW1hZ2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2UzLnNyYyA9IGJ1dHRlcjtcbiAgaW1hZ2UzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2UzLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgYnV0dGVyYmVlclwiKTtcbiAgY2FyZDMuYXBwZW5kQ2hpbGQoaW1hZ2UzKTtcbiAgY2FyZDMuYXBwZW5kQ2hpbGQoaW5mbzMpO1xuICBjb25zdCBoZWFkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZDMudGV4dENvbnRlbnQgPSBcIkJ1dHRlcmJlZXJcIjtcbiAgaW5mbzMuYXBwZW5kQ2hpbGQoaGVhZDMpO1xuICBjb25zdCBibHVyYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmx1cmIzLnRleHRDb250ZW50ID0gXCJHdWFyYW50ZWVkIHRvIHdhcm0geW91IHVwIGZyb20gaGVhZCB0byB0b2UuXCI7XG4gIGluZm8zLmFwcGVuZENoaWxkKGJsdXJiMyk7XG4gIGNvbnN0IHByaWNlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmljZTMudGV4dENvbnRlbnQgPSBcIjRTXCI7XG4gIHByaWNlMy5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGluZm8zLmFwcGVuZENoaWxkKHByaWNlMyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDMpO1xuXG4gIGNvbnN0IGNhcmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkNC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mbzQuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IGltYWdlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlNC5zcmMgPSBwdW1wa2luO1xuICBpbWFnZTQuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBpbWFnZTQuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBwdW1wa2luIGp1aWNlXCIpO1xuICBjYXJkNC5hcHBlbmRDaGlsZChpbWFnZTQpO1xuICBjYXJkNC5hcHBlbmRDaGlsZChpbmZvNCk7XG4gIGNvbnN0IGhlYWQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkNC50ZXh0Q29udGVudCA9IFwiUHVtcGtpbiBKdWljZVwiO1xuICBpbmZvNC5hcHBlbmRDaGlsZChoZWFkNCk7XG4gIGNvbnN0IGJsdXJiNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBibHVyYjQudGV4dENvbnRlbnQgPSBcIkNyZWFteSBhbmQgcmVmcmVzaGluZywgcGVyZmVjdCB0byBhY2NvbXBhbnkgYW55IGRpc2ggb3Igc2lwIG9uIGl0cyBvd24uXCI7XG4gIGluZm80LmFwcGVuZENoaWxkKGJsdXJiNCk7XG4gIGNvbnN0IHByaWNlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmljZTQudGV4dENvbnRlbnQgPSBcIjNTIDRLXCI7XG4gIHByaWNlNC5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGluZm80LmFwcGVuZENoaWxkKHByaWNlNCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDQpO1xuXG4gIGNvbnN0IGNhcmQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkNS5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mbzUuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IGltYWdlNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlNS5zcmMgPSBtZWFkO1xuICBpbWFnZTUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBpbWFnZTUuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBtZWFkXCIpO1xuICBjYXJkNS5hcHBlbmRDaGlsZChpbWFnZTUpO1xuICBjYXJkNS5hcHBlbmRDaGlsZChpbmZvNSk7XG4gIGNvbnN0IGhlYWQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkNS50ZXh0Q29udGVudCA9IFwiTWVhZFwiO1xuICBpbmZvNS5hcHBlbmRDaGlsZChoZWFkNSk7XG4gIGNvbnN0IGJsdXJiNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBibHVyYjUudGV4dENvbnRlbnQgPSBcIk91ciBhZ2Utb2xkIHJlY2lwZSBnb2VzIGJhY2sgdG8gd2hlbiBUaGUgTGVha3kgQ2F1bGRyb24gd2FzIGVzdGFibGlzaGVkLiBNdXN0IGJlIDE4Ky5cIjtcbiAgaW5mbzUuYXBwZW5kQ2hpbGQoYmx1cmI1KTtcbiAgY29uc3QgcHJpY2U1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlNS50ZXh0Q29udGVudCA9IFwiNVMgM0tcIjtcbiAgcHJpY2U1LmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgaW5mbzUuYXBwZW5kQ2hpbGQocHJpY2U1KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkNSk7XG5cbiAgY29uc3QgbWFpbm1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtYWlubWVudS50ZXh0Q29udGVudCA9IFwiTWFpbiBNZW51XCI7XG4gIG1haW5tZW51LmNsYXNzTGlzdC5hZGQoXCJtYWlubWVudVwiKTtcbiAgbWFpbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkTWVudSgpO1xuICB9KVxuICBtYWluLmFwcGVuZENoaWxkKG1haW5tZW51KTtcbn0iLCJpbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gJy4uL21lbnUuanMnO1xuaW1wb3J0IHNwb3R0ZWQgZnJvbSAnLi4vaW1hZ2VzL3Nwb3R0ZWQucG5nJztcbmltcG9ydCB0cmVhY2xlIGZyb20gJy4uL2ltYWdlcy90cmVhY2xlLnBuZyc7XG5pbXBvcnQgcHVkZGluZyBmcm9tICcuLi9pbWFnZXMvcHVkZGluZy5wbmcnO1xuaW1wb3J0IGRvdWdobnV0cyBmcm9tICcuLi9pbWFnZXMvZG91Z2hudXRzLnBuZyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkRGVzc2VydHMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgY2FyZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQxLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvMS5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgY29uc3QgaW1hZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2UxLnNyYyA9IHNwb3R0ZWQ7XG4gIGltYWdlMS5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGltYWdlMS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIHNwb3R0ZWQgZGlja1wiKTtcbiAgY2FyZDEuYXBwZW5kQ2hpbGQoaW1hZ2UxKTtcbiAgY2FyZDEuYXBwZW5kQ2hpbGQoaW5mbzEpO1xuICBjb25zdCBoZWFkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZDEudGV4dENvbnRlbnQgPSBcIlNwb3R0ZWQgRGlja1wiO1xuICBpbmZvMS5hcHBlbmRDaGlsZChoZWFkMSk7XG4gIGNvbnN0IGJsdXJiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBibHVyYjEudGV4dENvbnRlbnQgPSBcIkNha2UgdGhhdCBjb250YWlucyBkcmllZCByYWlzaW5zIGFuZCBjdXJyYW50cywgYW5kIGlzIHRvcHBlZCB3aXRoIG91ciBjcmVhbXkgY3VzdGFyZC5cIjtcbiAgaW5mbzEuYXBwZW5kQ2hpbGQoYmx1cmIxKTtcbiAgY29uc3QgcHJpY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlMS50ZXh0Q29udGVudCA9IFwiNlMgMTFLXCI7XG4gIHByaWNlMS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGluZm8xLmFwcGVuZENoaWxkKHByaWNlMSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDEpO1xuXG4gIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkMi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mbzIuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IGltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlMi5zcmMgPSB0cmVhY2xlO1xuICBpbWFnZTIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBpbWFnZTIuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiB0cmVhY2xlIHRhcnRcIik7XG4gIGNhcmQyLmFwcGVuZENoaWxkKGltYWdlMik7XG4gIGNhcmQyLmFwcGVuZENoaWxkKGluZm8yKTtcbiAgY29uc3QgaGVhZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWQyLnRleHRDb250ZW50ID0gXCJUcmVhY2xlIFRhcnRcIjtcbiAgaW5mbzIuYXBwZW5kQ2hpbGQoaGVhZDIpO1xuICBjb25zdCBibHVyYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmx1cmIyLnRleHRDb250ZW50ID0gXCJCYWtlZCB1bnRpbCBnb2xkZW4gY3Jpc3AsIGFuZCBzZXJ2ZWQgd2l0aCBvdXIgaG9tZW1hZGUgdmFuaWxsYSBpY2UgY3JlYW0uXCI7XG4gIGluZm8yLmFwcGVuZENoaWxkKGJsdXJiMik7XG4gIGNvbnN0IHByaWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmljZTIudGV4dENvbnRlbnQgPSBcIjhTXCI7XG4gIHByaWNlMi5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGluZm8yLmFwcGVuZENoaWxkKHByaWNlMik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDIpO1xuXG4gIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkMy5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mbzMuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IGltYWdlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlMy5zcmMgPSBwdWRkaW5nO1xuICBpbWFnZTMuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBpbWFnZTMuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBjaG9jb2xhdGUgcHVkZGluZ1wiKTtcbiAgY2FyZDMuYXBwZW5kQ2hpbGQoaW1hZ2UzKTtcbiAgY2FyZDMuYXBwZW5kQ2hpbGQoaW5mbzMpO1xuICBjb25zdCBoZWFkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZDMudGV4dENvbnRlbnQgPSBcIkNob2NvbGF0ZSBQdWRkaW5nXCI7XG4gIGluZm8zLmFwcGVuZENoaWxkKGhlYWQzKTtcbiAgY29uc3QgYmx1cmIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJsdXJiMy50ZXh0Q29udGVudCA9IFwiTWFkZSB3aXRoIHJlYWwgbWlsayBjaG9jb2xhdGUgYW5kIGdhcm5pc2hlZCB3aXRoIG1pbnQuXCI7XG4gIGluZm8zLmFwcGVuZENoaWxkKGJsdXJiMyk7XG4gIGNvbnN0IHByaWNlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmljZTMudGV4dENvbnRlbnQgPSBcIjVTIDdLXCI7XG4gIHByaWNlMy5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGluZm8zLmFwcGVuZENoaWxkKHByaWNlMyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDMpO1xuXG4gIGNvbnN0IGNhcmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkNC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mbzQuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IGltYWdlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlNC5zcmMgPSBkb3VnaG51dHM7XG4gIGltYWdlNC5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGltYWdlNC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIGphbSBkb3VnaG51dHNcIik7XG4gIGNhcmQ0LmFwcGVuZENoaWxkKGltYWdlNCk7XG4gIGNhcmQ0LmFwcGVuZENoaWxkKGluZm80KTtcbiAgY29uc3QgaGVhZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWQ0LnRleHRDb250ZW50ID0gXCJKYW0gRG91Z2hudXRzXCI7XG4gIGluZm80LmFwcGVuZENoaWxkKGhlYWQ0KTtcbiAgY29uc3QgYmx1cmI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJsdXJiNC50ZXh0Q29udGVudCA9IFwiQSBkZXNzZXJ0IGZvciBldmVyeSBvY2Nhc2lvbiAtIGF2YWlsYWJsZSBpbiBwbGF0ZXMgb2YgNCwgNiwgb3IgOC5cIjtcbiAgaW5mbzQuYXBwZW5kQ2hpbGQoYmx1cmI0KTtcbiAgY29uc3QgcHJpY2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlNC50ZXh0Q29udGVudCA9IFwiNFMgMTJLK1wiO1xuICBwcmljZTQuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBpbmZvNC5hcHBlbmRDaGlsZChwcmljZTQpO1xuICBtYWluLmFwcGVuZENoaWxkKGNhcmQ0KTtcblxuICBjb25zdCBtYWlubWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1haW5tZW51LnRleHRDb250ZW50ID0gXCJNYWluIE1lbnVcIjtcbiAgbWFpbm1lbnUuY2xhc3NMaXN0LmFkZChcIm1haW5tZW51XCIpO1xuICBtYWlubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRNZW51KCk7XG4gIH0pXG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbm1lbnUpO1xufSIsImltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi4vbWVudS5qcyc7XG5pbXBvcnQgYmFuZ2VycyBmcm9tICcuLi9pbWFnZXMvYmFuZ2Vycy5wbmcnO1xuaW1wb3J0IGtpZG5leSBmcm9tICcuLi9pbWFnZXMva2lkbmV5LnBuZyc7XG5pbXBvcnQgcGVhIGZyb20gJy4uL2ltYWdlcy9wZWEucG5nJztcbmltcG9ydCB5b3Jrc2hpcmUgZnJvbSAnLi4vaW1hZ2VzL3lvcmtzaGlyZS5wbmcnO1xuaW1wb3J0IHNoZXBoZXJkIGZyb20gJy4uL2ltYWdlcy9zaGVwaGVyZC5wbmcnO1xuaW1wb3J0IHRvYWQgZnJvbSAnLi4vaW1hZ2VzL3RvYWQucG5nJztcblxuZXhwb3J0IGNvbnN0IGxvYWREaXNoZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJTaWduYXR1cmUgRGlzaGVzXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCBjYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZDEuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm8xLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBpbWFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZTEuc3JjID0gYmFuZ2VycztcbiAgaW1hZ2UxLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2UxLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgYmFuZ2VycyBhbmQgbWFzaFwiKTtcbiAgY2FyZDEuYXBwZW5kQ2hpbGQoaW1hZ2UxKTtcbiAgY2FyZDEuYXBwZW5kQ2hpbGQoaW5mbzEpO1xuICBjb25zdCBoZWFkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZDEudGV4dENvbnRlbnQgPSBcIkJhbmdlcnMgYW5kIE1hc2hcIjtcbiAgaW5mbzEuYXBwZW5kQ2hpbGQoaGVhZDEpO1xuICBjb25zdCBibHVyYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmx1cmIxLnRleHRDb250ZW50ID0gXCJUaHJlZSBzdWNjdWxlbnQgc2F1c2FnZSBsaW5rcyBzZXJ2ZWQgd2l0aCBtYXNoZWQgcG90YXRvZXMgYW5kIGdyYXZ5LlwiO1xuICBpbmZvMS5hcHBlbmRDaGlsZChibHVyYjEpO1xuICBjb25zdCBwcmljZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2UxLnRleHRDb250ZW50ID0gXCIxMVMgMjBLXCI7XG4gIHByaWNlMS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGluZm8xLmFwcGVuZENoaWxkKHByaWNlMSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDEpO1xuXG4gIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkMi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mbzIuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IGltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlMi5zcmMgPSBraWRuZXk7XG4gIGltYWdlMi5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGltYWdlMi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIHN0ZWFrIGFuZCBraWRuZXkgcGllXCIpO1xuICBjYXJkMi5hcHBlbmRDaGlsZChpbWFnZTIpO1xuICBjYXJkMi5hcHBlbmRDaGlsZChpbmZvMik7XG4gIGNvbnN0IGhlYWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkMi50ZXh0Q29udGVudCA9IFwiU3RlYWsgYW5kIEtpZG5leSBQaWVcIjtcbiAgaW5mbzIuYXBwZW5kQ2hpbGQoaGVhZDIpO1xuICBjb25zdCBibHVyYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmx1cmIyLnRleHRDb250ZW50ID0gXCJPdXIgZmxha3kgcGFzdHJ5IGNydXN0IGZpbGxlZCB3aXRoIGJlZWYsIGtpZG5leSwgb25pb24sIGNhcnJvdCwgbXVzaHJvb20sIGFuZCBhIHJpY2ggZ3JhdnkuXCI7XG4gIGluZm8yLmFwcGVuZENoaWxkKGJsdXJiMik7XG4gIGNvbnN0IHByaWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmljZTIudGV4dENvbnRlbnQgPSBcIjEzUyAxMktcIjtcbiAgcHJpY2UyLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgaW5mbzIuYXBwZW5kQ2hpbGQocHJpY2UyKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMik7XG5cbiAgY29uc3QgY2FyZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQzLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvMy5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgY29uc3QgaW1hZ2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2UzLnNyYyA9IHBlYTtcbiAgaW1hZ2UzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2UzLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgcGVhIHNvdXBcIik7XG4gIGNhcmQzLmFwcGVuZENoaWxkKGltYWdlMyk7XG4gIGNhcmQzLmFwcGVuZENoaWxkKGluZm8zKTtcbiAgY29uc3QgaGVhZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWQzLnRleHRDb250ZW50ID0gXCJQZWEgU291cFwiO1xuICBpbmZvMy5hcHBlbmRDaGlsZChoZWFkMyk7XG4gIGNvbnN0IGJsdXJiMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBibHVyYjMudGV4dENvbnRlbnQgPSBcIkEgaG91c2UgZmF2b3JpdGUsIG91ciBwZWEgc291cCBpcyByaWNoIGFuZCBwZXJmZWN0IHRvIGFjY29tcGFueSBhbm90aGVyIGRpc2gsIG9yIHRvIGVuam95IG9uIGl0cyBvd24uXCI7XG4gIGluZm8zLmFwcGVuZENoaWxkKGJsdXJiMyk7XG4gIGNvbnN0IHByaWNlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmljZTMudGV4dENvbnRlbnQgPSBcIjlTIDhLXCI7XG4gIHByaWNlMy5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGluZm8zLmFwcGVuZENoaWxkKHByaWNlMyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDMpO1xuXG4gIGNvbnN0IGNhcmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkNC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mbzQuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IGltYWdlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlNC5zcmMgPSB5b3Jrc2hpcmU7XG4gIGltYWdlNC5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGltYWdlNC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIHlvcmtzaGlyZSBwdWRkaW5nXCIpO1xuICBjYXJkNC5hcHBlbmRDaGlsZChpbWFnZTQpO1xuICBjYXJkNC5hcHBlbmRDaGlsZChpbmZvNCk7XG4gIGNvbnN0IGhlYWQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkNC50ZXh0Q29udGVudCA9IFwiWW9ya3NoaXJlIFB1ZGRpbmdcIjtcbiAgaW5mbzQuYXBwZW5kQ2hpbGQoaGVhZDQpO1xuICBjb25zdCBibHVyYjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmx1cmI0LnRleHRDb250ZW50ID0gXCJBIGRlbGVjdGFibGUgcGFzdHJ5IHRvcHBlZCB3aXRoIHJvYXN0IGJlZWYgYW5kIGdyYXZ5LCBhbmQgc2VydmVkIHdpdGggZ3JpbGxlZCBzZWFzb25hbCB2ZWdldGFibGVzLlwiO1xuICBpbmZvNC5hcHBlbmRDaGlsZChibHVyYjQpO1xuICBjb25zdCBwcmljZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2U0LnRleHRDb250ZW50ID0gXCIxNFNcIjtcbiAgcHJpY2U0LmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgaW5mbzQuYXBwZW5kQ2hpbGQocHJpY2U0KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkNCk7XG5cbiAgY29uc3QgY2FyZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQ1LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvNS5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgY29uc3QgaW1hZ2U1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2U1LnNyYyA9IHNoZXBoZXJkO1xuICBpbWFnZTUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBpbWFnZTUuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBzaGVwaGVyZHMgcGllXCIpO1xuICBjYXJkNS5hcHBlbmRDaGlsZChpbWFnZTUpO1xuICBjYXJkNS5hcHBlbmRDaGlsZChpbmZvNSk7XG4gIGNvbnN0IGhlYWQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkNS50ZXh0Q29udGVudCA9IFwiU2hlcGhlcmRzIFBpZVwiO1xuICBpbmZvNS5hcHBlbmRDaGlsZChoZWFkNSk7XG4gIGNvbnN0IGJsdXJiNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBibHVyYjUudGV4dENvbnRlbnQgPSBcIk1pbmNlZCBsYW1iLCBncmF2eSwgcGVhcyBhbmQgY2Fycm90cywgYW5kIHRvcHBlZCB3aXRoIG1hc2hlZCBwb3RhdG9lcy4gU2VydmVzIHR3by5cIjtcbiAgaW5mbzUuYXBwZW5kQ2hpbGQoYmx1cmI1KTtcbiAgY29uc3QgcHJpY2U1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlNS50ZXh0Q29udGVudCA9IFwiMUdcIjtcbiAgcHJpY2U1LmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgaW5mbzUuYXBwZW5kQ2hpbGQocHJpY2U1KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkNSk7XG5cbiAgY29uc3QgY2FyZDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQ2LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvNi5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgY29uc3QgaW1hZ2U2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2U2LnNyYyA9IHRvYWQ7XG4gIGltYWdlNi5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGltYWdlNi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIHRvYWQgaW4gdGhlIGhvbGVcIik7XG4gIGNhcmQ2LmFwcGVuZENoaWxkKGltYWdlNik7XG4gIGNhcmQ2LmFwcGVuZENoaWxkKGluZm82KTtcbiAgY29uc3QgaGVhZDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWQ2LnRleHRDb250ZW50ID0gXCJUb2FkIGluIHRoZSBIb2xlXCI7XG4gIGluZm82LmFwcGVuZENoaWxkKGhlYWQ2KTtcbiAgY29uc3QgYmx1cmI2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJsdXJiNi50ZXh0Q29udGVudCA9IFwiT3VyIFlvcmtzaGlyZSBwdWRkaW5nIHBhc3RyeSB3aXRoIHNhdXNhZ2VzLCBnYXJuaXNoZWQgd2l0aCBvbmlvbiBncmF2eSBhbmQgcGFyc2xleS5cIjtcbiAgaW5mbzYuYXBwZW5kQ2hpbGQoYmx1cmI2KTtcbiAgY29uc3QgcHJpY2U2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlNi50ZXh0Q29udGVudCA9IFwiMTBTIDdLXCI7XG4gIHByaWNlNi5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGluZm82LmFwcGVuZENoaWxkKHByaWNlNik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDYpO1xuXG4gIGNvbnN0IG1haW5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWFpbm1lbnUudGV4dENvbnRlbnQgPSBcIk1haW4gTWVudVwiO1xuICBtYWlubWVudS5jbGFzc0xpc3QuYWRkKFwibWFpbm1lbnVcIik7XG4gIG1haW5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZE1lbnUoKTtcbiAgfSlcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWlubWVudSk7XG59IiwiaW1wb3J0IHsgbG9hZEJldmVyYWdlcyB9IGZyb20gJy4vbWVudS1wYWdlcy9iZXZlcmFnZXMuanMnO1xuaW1wb3J0IHsgbG9hZERpc2hlcyB9IGZyb20gJy4vbWVudS1wYWdlcy9kaXNoZXMuanMnO1xuaW1wb3J0IHsgbG9hZERlc3NlcnRzIH0gZnJvbSAnLi9tZW51LXBhZ2VzL2Rlc3NlcnRzLmpzJztcblxuXG5leHBvcnQgY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG5cbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdFwiKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0XCIpO1xuXG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICBob21lLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25zXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuICBjb25zdCBiZXZlcmFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBiZXZlcmFnZXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xuICBiZXZlcmFnZXMudGV4dENvbnRlbnQgPSBcIkJldmVyYWdlc1wiO1xuICBiZXZlcmFnZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkQmV2ZXJhZ2VzKCk7XG4gIH0pXG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQoYmV2ZXJhZ2VzKTtcbiAgY29uc3QgZGlzaGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGlzaGVzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgZGlzaGVzLnRleHRDb250ZW50ID0gXCJTaWduYXR1cmUgRGlzaGVzXCI7XG4gIGRpc2hlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWREaXNoZXMoKTtcbiAgfSlcbiAgb3B0aW9ucy5hcHBlbmRDaGlsZChkaXNoZXMpO1xuICBjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlc3NlcnRzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgZGVzc2VydHMudGV4dENvbnRlbnQgPSBcIkRlc3NlcnRzXCI7XG4gIGRlc3NlcnRzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZERlc3NlcnRzKCk7XG4gIH0pXG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQoZGVzc2VydHMpO1xufSIsImV4cG9ydCBjb25zdCBsb2FkU2l0ZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2YmFyKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcIm5hdi1idG5cIik7XG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGhvbWUpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiKTtcbiAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiKTtcbiAgYWJvdXQudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChhYm91dCk7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJuYXYtYnRuXCIpO1xuICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1ob21lXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRoZSBMZWFreSBDYXVsZHJvblwiO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBjb25zdCBibHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJsdXJiLmNsYXNzTGlzdC5hZGQoXCJibHVyYlwiKTtcbiAgYmx1cmIudGV4dENvbnRlbnQgPSBcIkZpcnN0LXJhdGUgZm9vZCwgZHJpbmssIGFuZCBsb2RnaW5nIGZvciB3aXRjaGVzIGFuZCB3aXphcmRzLCBlc3BlY2lhbGx5IHRob3NlIGhlYWRpbmcgdG8gRGlhZ29uIEFsbGV5IG9yIGxvb2tpbmcgZm9yIGEgY296eSBwbGFjZSB0byBkaW5lXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYmx1cmIpO1xuICBjb25zdCBsZWFybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxlYXJuLmNsYXNzTGlzdC5hZGQoXCJsZWFyblwiKTtcbiAgbGVhcm4udGV4dENvbnRlbnQgPSBcIkxlYXJuIE1vcmVcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChsZWFybik7XG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbG9hZFNpdGUgfSBmcm9tIFwiLi9zaXRlLmpzXCI7XG5cbmltcG9ydCB7IGxvYWRDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gXCIuL21lbnUuanNcIlxuaW1wb3J0IHsgbG9hZEFib3V0IH0gZnJvbSBcIi4vYWJvdXQuanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBsb2FkQ29udGFjdCgpO1xuXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkQ29udGFjdCgpO1xufSlcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbG9hZEhvbWUoKTtcbn0pXG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvYWRNZW51KCk7XG59KVxuXG5jb25zdCBsZWFybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVhcm5cIik7XG5sZWFybi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkQWJvdXQoKTtcbn0pXG5cbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dFwiKTtcbmFib3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvYWRBYm91dCgpO1xufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9