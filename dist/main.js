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
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgb(53, 47, 47);
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
/*  background: rgba(53, 47, 47, 0.75);  */
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

button:not(.nav-btn):hover, 
button:not(.nav-btn):active {
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
}
 
button.nav-btn:active {
  text-shadow: 0 0 5px rgb(238, 159, 40);
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

    button.nav-btn:active, 
    button.nav-btn:hover {
      border-bottom: 3px solid rgb(238, 159, 40);
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"HARRYP\";\n  src: url(./HARRYP__.TTF);\n}\n\n@font-face {\n  font-family: \"Cardo\";\n  src: url(./Cardo-Regular.ttf);\n}\n\n* {\n  font-family: \"Cardo\", sans-serif;\n}\n\n.header {\n  height: 75px;\n  display: grid;\n  justify-content: center;\n  align-content: end;\n  background-color: rgba(32, 29, 29, 0.5);\n}\n\nbody {\n  background-image: url(./images/cauldron.png);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-color: rgb(53, 47, 47);\n}\n\nh1 {\n  font-family: \"HARRYP\", sans-serif;\n  font-size: 6rem;\n  margin: 0;\n  font-weight: 300;\n  color: #d4d4d8;\n  padding-bottom: 15px;\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 35px;\n  justify-content: center;\n  align-content: center;\n  height: 35px;\n  padding-bottom: 15px;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n}\n\n.main-home, \n.main {\n  position: relative;\n  width: 700px;\n  display: flex;\n  flex-direction: column;\n  margin: 15px auto 40px;\n  align-items: center;\n/*  background: rgba(53, 47, 47, 0.75);  */\n  background: rgba(32, 29, 29, 0.75);\n  padding: 40px;\n}\n\n.main-home {\n  background: transparent;\n  color: white;\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n}\n\n.main > p, \n.main > div > p {\n  font-size: 1.4rem;\n  color: #a9a9b4;\n  margin: 15px 0;\n}\n\n.main > div > p.footer {\n  font-size: 1.1rem;\n}\n\n.info {\n  color: #a9a9b4;\n}\n\nh2, \nh3 {\n  color: #d4d4d8;\n}\n\ninput {\n  width: 500px;\n  height: 35px;\n  font-size: 18px;\n  font-family: sans-serif;\n}\n\ntextarea {\n  width: 500px;\n  height: 120px;\n  font-size: 18px;\n  font-family: sans-serif;\n}\n\n.contact-info {\n  padding-bottom: 20px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n\n.card {\n  width: 500px;\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  justify-content: center;\n  padding: 15px;\n  height: 195px;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n  height: 195px;\n}\n\n.price {\n  place-self: end end;\n  margin-top: auto;\n}\n\nh2 {\n  font-size: 2.6rem;\n  margin: 0 0 25px;\n}\n\nh3 {\n  font-size: 1.6rem;\n  margin: 0;\n}\n\n.info > p {\n  font-size: 1.2rem;\n}\n\n.blurb {\n  font-size: 32px;\n  margin-bottom: 20px;\n  color: #d4d4d8;\n}\n\nbutton {\n  margin: 0;\n  height: 40px;\n  width: 120px;\n  font-size: 1.3rem;\n  background-color: #156f75;\n  color:#d4d4d8;\n  border: none;\n  border-radius: 5px;  \n}\n\nbutton:not(.nav-btn):hover, \nbutton:not(.nav-btn):active {\n  box-shadow:\n  0.5px 0.5px 2.8px rgba(238, 159, 40, 0.07),\n  1.1px 1.1px 6.7px rgba(238, 159, 40, 0.084),\n  2.1px 2.1px 12.5px rgba(238, 159, 40, 0.091),\n  3.8px 3.8px 22.3px rgba(238, 159, 40, 0.104),\n  7.1px 7.1px 41.8px rgba(238, 159, 40, 0.138),\n  17px 17px 100px rgba(238, 159, 40, 0.25)\n;\n}\n\nbutton.nav-btn {\n  background-color: transparent;\n  border-radius: 0;\n  width: 110px;\n}\n \nbutton.nav-btn:active {\n  text-shadow: 0 0 5px rgb(238, 159, 40);\n}\n\n.menu-img {\n  height: 170px;\n}\n\n.mainmenu {\n  width: 150px;\n}\n\na {\n  text-decoration: none;\n  font-weight: 500;\n  color: #a5f3fc;\n}\n\na:hover {\n  font-weight: 600;\n}\n\nh1,\nh2 {\n  text-align: center;\n}\n\n.options {\n  display: grid;\n  gap: 40px;\n  margin: 30px auto;\n}\n\n.menu-btn {\n  width: 220px;\n  height: 55px;\n}\n\n.learn {\n  width: 200px;\n  height: 60px;\n}\n\n@media screen and (max-width: 1200px) {\n    body {\n        background-image: url(./images/cauldron2.png);\n    }\n\n    button {\n      width: 150px;\n      height: 45px;\n      font-size: 1.5rem;\n    }\n\n    button.nav-btn {\n      width: 135px;\n    }\n\n    button.nav-btn:active, \n    button.nav-btn:hover {\n      border-bottom: 3px solid rgb(238, 159, 40);\n    }\n\n    .mainmenu {\n      width: 180px;\n    }\n\n    h1 {\n      font-size: 7rem;\n    }\n\n    h2 {\n      font-size: 2.8rem;\n    }\n\n    h3 {\n      font-size: 1.8rem;\n    }\n\n    .main > p, \n    .main > div > p {\n      font-size: 1.6rem;\n    }\n\n    .main > div > p.footer {\n      font-size: 1.3rem;\n    }\n\n    .info > p {\n        font-size: 1.4rem;\n      }\n\n    .card {\n      width: 600px;\n      height: 220px;\n    }\n\n    .menu-img {\n      height: 195px;\n    }\n\n    .info {\n      height: 220px;\n    }\n      \n\n\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlHQUFpQztBQUM3RSw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0Qyx1SEFBd0M7QUFDcEYsNENBQTRDLHlIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxL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RUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQzs7QUFFTTtBQUNOO0FBQ0Q7QUFDRztBQUNsQjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBLEVBQUUsd0RBQVc7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLGtEQUFRO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxrREFBUTtBQUNWLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsb0RBQVM7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLG9EQUFTO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1wYWdlcy9iZXZlcmFnZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZXMvZGVzc2VydHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZXMvZGlzaGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0hBUlJZUF9fLlRURlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vQ2FyZG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jYXVsZHJvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jYXVsZHJvbjIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiSEFSUllQXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2FyZG9cIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbioge1xuICBmb250LWZhbWlseTogXCJDYXJkb1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogZW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAyOSwgMjksIDAuNSk7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MywgNDcsIDQ3KTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJIQVJSWVBcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZDRkNGQ4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLm5hdmJhciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogMzVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFpbi1ob21lLCBcbi5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMTVweCBhdXRvIDQwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vKiAgYmFja2dyb3VuZDogcmdiYSg1MywgNDcsIDQ3LCAwLjc1KTsgICovXG4gIGJhY2tncm91bmQ6IHJnYmEoMzIsIDI5LCAyOSwgMC43NSk7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5tYWluLWhvbWUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluID4gcCwgXG4ubWFpbiA+IGRpdiA+IHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICNhOWE5YjQ7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4ubWFpbiA+IGRpdiA+IHAuZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5pbmZvIHtcbiAgY29sb3I6ICNhOWE5YjQ7XG59XG5cbmgyLCBcbmgzIHtcbiAgY29sb3I6ICNkNGQ0ZDg7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uY29udGFjdC1pbmZvIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBoZWlnaHQ6IDE5NXB4O1xufVxuXG4uaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTk1cHg7XG59XG5cbi5wcmljZSB7XG4gIHBsYWNlLXNlbGY6IGVuZCBlbmQ7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyLjZyZW07XG4gIG1hcmdpbjogMCAwIDI1cHg7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuLmluZm8gPiBwIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5ibHVyYiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICNkNGQ0ZDg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU2Zjc1O1xuICBjb2xvcjojZDRkNGQ4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDsgIFxufVxuXG5idXR0b246bm90KC5uYXYtYnRuKTpob3ZlciwgXG5idXR0b246bm90KC5uYXYtYnRuKTphY3RpdmUge1xuICBib3gtc2hhZG93OlxuICAwLjVweCAwLjVweCAyLjhweCByZ2JhKDIzOCwgMTU5LCA0MCwgMC4wNyksXG4gIDEuMXB4IDEuMXB4IDYuN3B4IHJnYmEoMjM4LCAxNTksIDQwLCAwLjA4NCksXG4gIDIuMXB4IDIuMXB4IDEyLjVweCByZ2JhKDIzOCwgMTU5LCA0MCwgMC4wOTEpLFxuICAzLjhweCAzLjhweCAyMi4zcHggcmdiYSgyMzgsIDE1OSwgNDAsIDAuMTA0KSxcbiAgNy4xcHggNy4xcHggNDEuOHB4IHJnYmEoMjM4LCAxNTksIDQwLCAwLjEzOCksXG4gIDE3cHggMTdweCAxMDBweCByZ2JhKDIzOCwgMTU5LCA0MCwgMC4yNSlcbjtcbn1cblxuYnV0dG9uLm5hdi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgd2lkdGg6IDExMHB4O1xufVxuIFxuYnV0dG9uLm5hdi1idG46YWN0aXZlIHtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiKDIzOCwgMTU5LCA0MCk7XG59XG5cbi5tZW51LWltZyB7XG4gIGhlaWdodDogMTcwcHg7XG59XG5cbi5tYWlubWVudSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNhNWYzZmM7XG59XG5cbmE6aG92ZXIge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oMSxcbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNDBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5cbi5tZW51LWJ0biB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuXG4ubGVhcm4ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuXG4gICAgYnV0dG9uLm5hdi1idG4ge1xuICAgICAgd2lkdGg6IDEzNXB4O1xuICAgIH1cblxuICAgIGJ1dHRvbi5uYXYtYnRuOmFjdGl2ZSwgXG4gICAgYnV0dG9uLm5hdi1idG46aG92ZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYigyMzgsIDE1OSwgNDApO1xuICAgIH1cblxuICAgIC5tYWlubWVudSB7XG4gICAgICB3aWR0aDogMTgwcHg7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiA3cmVtO1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIH1cblxuICAgIC5tYWluID4gcCwgXG4gICAgLm1haW4gPiBkaXYgPiBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIH1cblxuICAgIC5tYWluID4gZGl2ID4gcC5mb290ZXIge1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxuXG4gICAgLmluZm8gPiBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICB9XG5cbiAgICAuY2FyZCB7XG4gICAgICB3aWR0aDogNjAwcHg7XG4gICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIH1cblxuICAgIC5tZW51LWltZyB7XG4gICAgICBoZWlnaHQ6IDE5NXB4O1xuICAgIH1cblxuICAgIC5pbmZvIHtcbiAgICAgIGhlaWdodDogMjIwcHg7XG4gICAgfVxuICAgICAgXG5cblxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw0Q0FBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFB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LGlCQUFpQjtJQUNuQjs7SUFFQTtRQUNJLGlCQUFpQjtNQUNuQjs7SUFFRjtNQUNFLFlBQVk7TUFDWixhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7Ozs7QUFJSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSEFSUllQXFxcIjtcXG4gIHNyYzogdXJsKC4vSEFSUllQX18uVFRGKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNhcmRvXFxcIjtcXG4gIHNyYzogdXJsKC4vQ2FyZG8tUmVndWxhci50dGYpO1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2FyZG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogNzVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGVuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDI5LCAyOSwgMC41KTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvY2F1bGRyb24ucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCA0NywgNDcpO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogXFxcIkhBUlJZUFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDZyZW07XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6ICNkNGQ0ZDg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogMzVweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1ob21lLCBcXG4ubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMTVweCBhdXRvIDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbi8qICBiYWNrZ3JvdW5kOiByZ2JhKDUzLCA0NywgNDcsIDAuNzUpOyAgKi9cXG4gIGJhY2tncm91bmQ6IHJnYmEoMzIsIDI5LCAyOSwgMC43NSk7XFxuICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG4ubWFpbi1ob21lIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYWluID4gcCwgXFxuLm1haW4gPiBkaXYgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY29sb3I6ICNhOWE5YjQ7XFxuICBtYXJnaW46IDE1cHggMDtcXG59XFxuXFxuLm1haW4gPiBkaXYgPiBwLmZvb3RlciB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmluZm8ge1xcbiAgY29sb3I6ICNhOWE5YjQ7XFxufVxcblxcbmgyLCBcXG5oMyB7XFxuICBjb2xvcjogI2Q0ZDRkODtcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBoZWlnaHQ6IDE5NXB4O1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTk1cHg7XFxufVxcblxcbi5wcmljZSB7XFxuICBwbGFjZS1zZWxmOiBlbmQgZW5kO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxuICBtYXJnaW46IDAgMCAyNXB4O1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmluZm8gPiBwIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uYmx1cmIge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGNvbG9yOiAjZDRkNGQ4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU2Zjc1O1xcbiAgY29sb3I6I2Q0ZDRkODtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgIFxcbn1cXG5cXG5idXR0b246bm90KC5uYXYtYnRuKTpob3ZlciwgXFxuYnV0dG9uOm5vdCgubmF2LWJ0bik6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6XFxuICAwLjVweCAwLjVweCAyLjhweCByZ2JhKDIzOCwgMTU5LCA0MCwgMC4wNyksXFxuICAxLjFweCAxLjFweCA2LjdweCByZ2JhKDIzOCwgMTU5LCA0MCwgMC4wODQpLFxcbiAgMi4xcHggMi4xcHggMTIuNXB4IHJnYmEoMjM4LCAxNTksIDQwLCAwLjA5MSksXFxuICAzLjhweCAzLjhweCAyMi4zcHggcmdiYSgyMzgsIDE1OSwgNDAsIDAuMTA0KSxcXG4gIDcuMXB4IDcuMXB4IDQxLjhweCByZ2JhKDIzOCwgMTU5LCA0MCwgMC4xMzgpLFxcbiAgMTdweCAxN3B4IDEwMHB4IHJnYmEoMjM4LCAxNTksIDQwLCAwLjI1KVxcbjtcXG59XFxuXFxuYnV0dG9uLm5hdi1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgd2lkdGg6IDExMHB4O1xcbn1cXG4gXFxuYnV0dG9uLm5hdi1idG46YWN0aXZlIHtcXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYigyMzgsIDE1OSwgNDApO1xcbn1cXG5cXG4ubWVudS1pbWcge1xcbiAgaGVpZ2h0OiAxNzBweDtcXG59XFxuXFxuLm1haW5tZW51IHtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICNhNWYzZmM7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA0MHB4O1xcbiAgbWFyZ2luOiAzMHB4IGF1dG87XFxufVxcblxcbi5tZW51LWJ0biB7XFxuICB3aWR0aDogMjIwcHg7XFxuICBoZWlnaHQ6IDU1cHg7XFxufVxcblxcbi5sZWFybiB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9jYXVsZHJvbjIucG5nKTtcXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uLm5hdi1idG4ge1xcbiAgICAgIHdpZHRoOiAxMzVweDtcXG4gICAgfVxcblxcbiAgICBidXR0b24ubmF2LWJ0bjphY3RpdmUsIFxcbiAgICBidXR0b24ubmF2LWJ0bjpob3ZlciB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYigyMzgsIDE1OSwgNDApO1xcbiAgICB9XFxuXFxuICAgIC5tYWlubWVudSB7XFxuICAgICAgd2lkdGg6IDE4MHB4O1xcbiAgICB9XFxuXFxuICAgIGgxIHtcXG4gICAgICBmb250LXNpemU6IDdyZW07XFxuICAgIH1cXG5cXG4gICAgaDIge1xcbiAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICB9XFxuXFxuICAgIGgzIHtcXG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgfVxcblxcbiAgICAubWFpbiA+IHAsIFxcbiAgICAubWFpbiA+IGRpdiA+IHAge1xcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICB9XFxuXFxuICAgIC5tYWluID4gZGl2ID4gcC5mb290ZXIge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB9XFxuXFxuICAgIC5pbmZvID4gcCB7XFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICB9XFxuXFxuICAgIC5jYXJkIHtcXG4gICAgICB3aWR0aDogNjAwcHg7XFxuICAgICAgaGVpZ2h0OiAyMjBweDtcXG4gICAgfVxcblxcbiAgICAubWVudS1pbWcge1xcbiAgICAgIGhlaWdodDogMTk1cHg7XFxuICAgIH1cXG5cXG4gICAgLmluZm8ge1xcbiAgICAgIGhlaWdodDogMjIwcHg7XFxuICAgIH1cXG4gICAgICBcXG5cXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgbG9hZEFib3V0ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mby1hYm91dFwiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChpbmZvKTtcbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcDEudGV4dENvbnRlbnQgPSBcIlRoZSBMZWFreSBDYXVsZHJvbiB3YXMgYnVpbHQgaW4gdGhlIDE1MDBzIGJ5IERhaXN5IERvZGRlcmlkZ2UuIEl0cyB0cnVlIGFkZHJlc3MgaXMgbnVtYmVyIG9uZSBEaWFnb24gQWxsZXksIGFuZCBpdCBpcyBiZWxpZXZlZCB0byBoYXZlIGJlZW4gYnVpbHQgYWxvbmcgd2l0aCB0aGUgcmVzdCBvZiB0aGUgd2l6YXJkaW5nIHN0cmVldC5cIjtcbiAgaW5mby5hcHBlbmRDaGlsZChwMSk7XG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAyLnRleHRDb250ZW50ID0gXCJXaXRoIHRoZSBpbXBvc2l0aW9uIG9mIHRoZSBJbnRlcm5hdGlvbmFsIFN0YXR1dGUgb2YgV2l6YXJkaW5nIFNlY3JlY3kgaW4gMTY5MiwgTWluaXN0ZXIgVWxpY2sgR2FtcCBwZXJtaXR0ZWQgdGhlIHB1YiB0byBjb250aW51ZSBpdHMgZXhpc3RlbmNlIGFzIGEgc2FmZSBoYXZlbiBhbmQgcmVmdWdlIGZvciBtZW1iZXJzIG9mIHRoZSBtYWdpY2FsIGNvbW11bml0eS5cIjtcbiAgaW5mby5hcHBlbmRDaGlsZChwMik7XG4gIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAzLnRleHRDb250ZW50ID0gXCJHYW1wIHdhcyBzeW1wYXRoZXRpYyB0byB0aGUgbmVlZCBvZiB3aXphcmRzIHRvIGxldCBvZmYgc3RlYW0gZHVyaW5nIHRoaXMgZGlmZmljdWx0IHRpbWUsIGFuZCBmdXJ0aGVyIGFncmVlZCB0byBnaXZlIHRoZSBsYW5kbG9yZCBwZXJtaXNzaW9uIHRvIGxldCBwZW9wbGUgaW50byBEaWFnb24gQWxsZXkgZnJvbSBoaXMgYmFja3lhcmQsIGJlY2F1c2UgdGhlIHNob3BzIGJlaGluZCB0aGUgTGVha3kgQ2F1bGRyb24gd2VyZSBub3cgYWxzbyBpbiBuZWVkIG9mIHByb3RlY3Rpb24uXCI7XG4gIGluZm8uYXBwZW5kQ2hpbGQocDMpO1xuICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwNC50ZXh0Q29udGVudCA9IFwiTWFueSBtb29ucyBsYXRlciwgVGhlIExlYWt5IENhdWxkcm9uIHJlbWFpbnMgdGhlIGlkZWFsIHNwb3QgdG8gY2F0Y2ggdXAgd2l0aCB3aXphcmRpbmcgZ29zc2lwIG92ZXIgYSBnaWxseXdhdGVyIG9yIHJlbGF4IGFmdGVyIGEgZGF5IG9mIHNob3BwaW5nIHdpdGggc29tZSBzaGVwaGVyZHMgcGllLiBXZSBob3BlIHlvdSdsbCBqb2luIHVzIVwiO1xuICBpbmZvLmFwcGVuZENoaWxkKHA0KTtcbiAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gIGluZm8uYXBwZW5kQ2hpbGQoYnIpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci5pbm5lckhUTUwgPSBcIkluZm9ybWF0aW9uIGNvdXJ0ZXN5IG9mIDxhIGhyZWY9J2h0dHBzOi8vaGFycnlwb3R0ZXIuZmFuZG9tLmNvbS93aWtpL0xlYWt5X0NhdWxkcm9uJz5UaGUgTXVnZ2xlIFdpa2k8L2E+LlwiO1xuICBpbmZvLmFwcGVuZENoaWxkKGZvb3Rlcik7XG59IiwiaW1wb3J0IGNvbnRhY3RtYXAgZnJvbSAnLi9pbWFnZXMvbWFwLmdpZic7XG5cbmV4cG9ydCBjb25zdCBsb2FkQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbnRyby50ZXh0Q29udGVudCA9IFwiWW91IGFyZSB3ZWxjb21lIHRvIGxlYXZlIHVzIGEgbWVzc2FnZSBoZXJlLCBidXQgdGhlIE11Z2dsZSBpbnRlcm5ldCBkb2VzIG5vdCB3b3JrIHZlcnkgb2Z0ZW4sIHNvIHBsZWFzZSBmb3JnaXZlIHVzIGlmIHdlIGRvIG5vdCByZXNwb25kIGluIGEgdGltZWx5IG1hbm5lci4gLVRvbVwiO1xuICBtYWluLmFwcGVuZENoaWxkKGludHJvKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJzdWJtaXQucGhwXCIpO1xuICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBuYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuYW1lXCIpO1xuICBuYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmFtZVwiKTtcblxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZW1haWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImVtYWlsXCIpO1xuICBlbWFpbC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZW1haWxcIik7XG4gIGVtYWlsLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW1haWxcIik7XG5cbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibWVzc2FnZVwiKTtcbiAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIllvdXIgbWVzc2FnZSBoZXJlXCIpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG4gIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGJyLmNsb25lTm9kZSgpKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBtYWluLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWluZm9cIik7XG4gIGNvbnN0IGluZm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZm8xLnRleHRDb250ZW50ID0gXCJQaG9uZTogKzQ0IDczNDEgMTIzNDU2XCI7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5mbzEpO1xuICBpbmZvLmFwcGVuZENoaWxkKGJyLmNsb25lTm9kZSgpKTtcbiAgY29uc3QgaW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5mbzIudGV4dENvbnRlbnQgPSBcIkFkZHJlc3M6IDc1MyBDaGFyaW5nIENyb3NzIFJvYWRcIjtcbiAgaW5mby5hcHBlbmRDaGlsZChpbmZvMik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbWFwLnNyYyA9IGNvbnRhY3RtYXA7XG4gIG1hcC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjUwMHB4XCIpO1xuICBtYWluLmFwcGVuZENoaWxkKG1hcCk7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsaW5rLmlubmVySFRNTCA9IFwiPGEgaHJlZj0naHR0cDovL21lbWJlcnMubWFkYXNhZmlzaC5jb20vfmNqX3doaXRlaG91bmQvRmFuZmljL0xvY2F0aW9uX0xvY2F0aW9uL0RpYWdvbl9BbGxleS5odG0nPkltYWdlIFNvdXJjZTwvYT5cIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChsaW5rKTtcbn07IiwiaW1wb3J0IHsgbG9hZEFib3V0IH0gZnJvbSBcIi4vYWJvdXQuanNcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRIb21lID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1ob21lXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRoZSBMZWFreSBDYXVsZHJvblwiO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBjb25zdCBibHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJsdXJiLmNsYXNzTGlzdC5hZGQoXCJibHVyYlwiKTtcbiAgYmx1cmIudGV4dENvbnRlbnQgPSBcIkZpcnN0LXJhdGUgZm9vZCwgZHJpbmssIGFuZCBsb2RnaW5nIGZvciB3aXRjaGVzIGFuZCB3aXphcmRzLCBlc3BlY2lhbGx5IHRob3NlIGhlYWRpbmcgdG8gRGlhZ29uIEFsbGV5IG9yIGxvb2tpbmcgZm9yIGEgY296eSBwbGFjZSB0byBkaW5lXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYmx1cmIpO1xuICBjb25zdCBsZWFybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxlYXJuLmNsYXNzTGlzdC5hZGQoXCJsZWFyblwiKTtcbiAgbGVhcm4udGV4dENvbnRlbnQgPSBcIkxlYXJuIE1vcmVcIjtcbiAgbGVhcm4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkQWJvdXQoKTtcbiAgfSlcbiAgbWFpbi5hcHBlbmRDaGlsZChsZWFybik7XG59OyIsImltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi4vbWVudS5qcyc7XG5pbXBvcnQgdGVhIGZyb20gJy4uL2ltYWdlcy90ZWEucG5nJztcbmltcG9ydCBnaWxseSBmcm9tICcuLi9pbWFnZXMvZ2lsbHkucG5nJztcbmltcG9ydCBidXR0ZXIgZnJvbSAnLi4vaW1hZ2VzL2J1dHRlci5wbmcnO1xuaW1wb3J0IHB1bXBraW4gZnJvbSAnLi4vaW1hZ2VzL3B1bXBraW4ucG5nJztcbmltcG9ydCBtZWFkIGZyb20gJy4uL2ltYWdlcy9tZWFkLnBuZyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkQmV2ZXJhZ2VzID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQmV2ZXJhZ2VzXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCBjYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZDEuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm8xLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBpbWFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZTEuc3JjID0gdGVhO1xuICBpbWFnZTEuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBpbWFnZTEuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiB0ZWEgYW5kIGNydW1wZXRzXCIpO1xuICBjYXJkMS5hcHBlbmRDaGlsZChpbWFnZTEpO1xuICBjYXJkMS5hcHBlbmRDaGlsZChpbmZvMSk7XG4gIGNvbnN0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkMS50ZXh0Q29udGVudCA9IFwiVGVhIGFuZCBDcnVtcGV0c1wiO1xuICBpbmZvMS5hcHBlbmRDaGlsZChoZWFkMSk7XG4gIGNvbnN0IGJsdXJiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBibHVyYjEudGV4dENvbnRlbnQgPSBcIkEgcG90IG9mIHRlYSBwYWlyZWQgd2l0aCBvdXIgZmx1ZmZ5IGNydW1wZXRzLiBBZGQgYSBzaG90IG9mIE9nZGVuJ3MgT2xkIEZpcmV3aGlza3kgaWYgeW91J3JlIGJvbGQhXCI7XG4gIGluZm8xLmFwcGVuZENoaWxkKGJsdXJiMSk7XG4gIGNvbnN0IHByaWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmljZTEudGV4dENvbnRlbnQgPSBcIjJTIDVLXCI7XG4gIHByaWNlMS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGluZm8xLmFwcGVuZENoaWxkKHByaWNlMSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDEpO1xuXG4gIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkMi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mbzIuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IGltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlMi5zcmMgPSBnaWxseTtcbiAgaW1hZ2UyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2UyLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgZ2lsbHl3YXRlclwiKTtcbiAgY2FyZDIuYXBwZW5kQ2hpbGQoaW1hZ2UyKTtcbiAgY2FyZDIuYXBwZW5kQ2hpbGQoaW5mbzIpO1xuICBjb25zdCBoZWFkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZDIudGV4dENvbnRlbnQgPSBcIkdpbGx5d2F0ZXJcIjtcbiAgaW5mbzIuYXBwZW5kQ2hpbGQoaGVhZDIpO1xuICBjb25zdCBibHVyYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmx1cmIyLnRleHRDb250ZW50ID0gXCJBIGhvdXNlIGZhdm9yaXRlLCBnYXJuaXNoZWQgd2l0aCB5b3VyIGNob2ljZSBvZiBjdWN1bWJlciwgbWludCwgbGVtb24sIHJhc3BiZXJyeSwgb3Igb25pb24uXCI7XG4gIGluZm8yLmFwcGVuZENoaWxkKGJsdXJiMik7XG4gIGNvbnN0IHByaWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmljZTIudGV4dENvbnRlbnQgPSBcIjJTIDEyS1wiO1xuICBwcmljZTIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBpbmZvMi5hcHBlbmRDaGlsZChwcmljZTIpO1xuICBtYWluLmFwcGVuZENoaWxkKGNhcmQyKTtcblxuICBjb25zdCBjYXJkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZDMuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm8zLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBpbWFnZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZTMuc3JjID0gYnV0dGVyO1xuICBpbWFnZTMuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBpbWFnZTMuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBidXR0ZXJiZWVyXCIpO1xuICBjYXJkMy5hcHBlbmRDaGlsZChpbWFnZTMpO1xuICBjYXJkMy5hcHBlbmRDaGlsZChpbmZvMyk7XG4gIGNvbnN0IGhlYWQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkMy50ZXh0Q29udGVudCA9IFwiQnV0dGVyYmVlclwiO1xuICBpbmZvMy5hcHBlbmRDaGlsZChoZWFkMyk7XG4gIGNvbnN0IGJsdXJiMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBibHVyYjMudGV4dENvbnRlbnQgPSBcIkd1YXJhbnRlZWQgdG8gd2FybSB5b3UgdXAgZnJvbSBoZWFkIHRvIHRvZS5cIjtcbiAgaW5mbzMuYXBwZW5kQ2hpbGQoYmx1cmIzKTtcbiAgY29uc3QgcHJpY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlMy50ZXh0Q29udGVudCA9IFwiNFNcIjtcbiAgcHJpY2UzLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgaW5mbzMuYXBwZW5kQ2hpbGQocHJpY2UzKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMyk7XG5cbiAgY29uc3QgY2FyZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQ0LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvNC5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgY29uc3QgaW1hZ2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2U0LnNyYyA9IHB1bXBraW47XG4gIGltYWdlNC5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGltYWdlNC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIHB1bXBraW4ganVpY2VcIik7XG4gIGNhcmQ0LmFwcGVuZENoaWxkKGltYWdlNCk7XG4gIGNhcmQ0LmFwcGVuZENoaWxkKGluZm80KTtcbiAgY29uc3QgaGVhZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWQ0LnRleHRDb250ZW50ID0gXCJQdW1wa2luIEp1aWNlXCI7XG4gIGluZm80LmFwcGVuZENoaWxkKGhlYWQ0KTtcbiAgY29uc3QgYmx1cmI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJsdXJiNC50ZXh0Q29udGVudCA9IFwiQ3JlYW15IGFuZCByZWZyZXNoaW5nLCBwZXJmZWN0IHRvIGFjY29tcGFueSBhbnkgZGlzaCBvciBzaXAgb24gaXRzIG93bi5cIjtcbiAgaW5mbzQuYXBwZW5kQ2hpbGQoYmx1cmI0KTtcbiAgY29uc3QgcHJpY2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlNC50ZXh0Q29udGVudCA9IFwiM1MgNEtcIjtcbiAgcHJpY2U0LmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgaW5mbzQuYXBwZW5kQ2hpbGQocHJpY2U0KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkNCk7XG5cbiAgY29uc3QgY2FyZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQ1LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvNS5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgY29uc3QgaW1hZ2U1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2U1LnNyYyA9IG1lYWQ7XG4gIGltYWdlNS5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGltYWdlNS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIG1lYWRcIik7XG4gIGNhcmQ1LmFwcGVuZENoaWxkKGltYWdlNSk7XG4gIGNhcmQ1LmFwcGVuZENoaWxkKGluZm81KTtcbiAgY29uc3QgaGVhZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWQ1LnRleHRDb250ZW50ID0gXCJNZWFkXCI7XG4gIGluZm81LmFwcGVuZENoaWxkKGhlYWQ1KTtcbiAgY29uc3QgYmx1cmI1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJsdXJiNS50ZXh0Q29udGVudCA9IFwiT3VyIGFnZS1vbGQgcmVjaXBlIGdvZXMgYmFjayB0byB3aGVuIFRoZSBMZWFreSBDYXVsZHJvbiB3YXMgZXN0YWJsaXNoZWQuIE11c3QgYmUgMTgrLlwiO1xuICBpbmZvNS5hcHBlbmRDaGlsZChibHVyYjUpO1xuICBjb25zdCBwcmljZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2U1LnRleHRDb250ZW50ID0gXCI1UyAzS1wiO1xuICBwcmljZTUuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBpbmZvNS5hcHBlbmRDaGlsZChwcmljZTUpO1xuICBtYWluLmFwcGVuZENoaWxkKGNhcmQ1KTtcblxuICBjb25zdCBtYWlubWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1haW5tZW51LnRleHRDb250ZW50ID0gXCJNYWluIE1lbnVcIjtcbiAgbWFpbm1lbnUuY2xhc3NMaXN0LmFkZChcIm1haW5tZW51XCIpO1xuICBtYWlubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRNZW51KCk7XG4gIH0pXG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbm1lbnUpO1xufSIsImltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi4vbWVudS5qcyc7XG5pbXBvcnQgc3BvdHRlZCBmcm9tICcuLi9pbWFnZXMvc3BvdHRlZC5wbmcnO1xuaW1wb3J0IHRyZWFjbGUgZnJvbSAnLi4vaW1hZ2VzL3RyZWFjbGUucG5nJztcbmltcG9ydCBwdWRkaW5nIGZyb20gJy4uL2ltYWdlcy9wdWRkaW5nLnBuZyc7XG5pbXBvcnQgZG91Z2hudXRzIGZyb20gJy4uL2ltYWdlcy9kb3VnaG51dHMucG5nJztcblxuZXhwb3J0IGNvbnN0IGxvYWREZXNzZXJ0cyA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkRlc3NlcnRzXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCBjYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZDEuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm8xLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBpbWFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZTEuc3JjID0gc3BvdHRlZDtcbiAgaW1hZ2UxLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2UxLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2Ygc3BvdHRlZCBkaWNrXCIpO1xuICBjYXJkMS5hcHBlbmRDaGlsZChpbWFnZTEpO1xuICBjYXJkMS5hcHBlbmRDaGlsZChpbmZvMSk7XG4gIGNvbnN0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkMS50ZXh0Q29udGVudCA9IFwiU3BvdHRlZCBEaWNrXCI7XG4gIGluZm8xLmFwcGVuZENoaWxkKGhlYWQxKTtcbiAgY29uc3QgYmx1cmIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJsdXJiMS50ZXh0Q29udGVudCA9IFwiQ2FrZSB0aGF0IGNvbnRhaW5zIGRyaWVkIHJhaXNpbnMgYW5kIGN1cnJhbnRzLCBhbmQgaXMgdG9wcGVkIHdpdGggb3VyIGNyZWFteSBjdXN0YXJkLlwiO1xuICBpbmZvMS5hcHBlbmRDaGlsZChibHVyYjEpO1xuICBjb25zdCBwcmljZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2UxLnRleHRDb250ZW50ID0gXCI2UyAxMUtcIjtcbiAgcHJpY2UxLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgaW5mbzEuYXBwZW5kQ2hpbGQocHJpY2UxKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMSk7XG5cbiAgY29uc3QgY2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQyLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvMi5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgY29uc3QgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2UyLnNyYyA9IHRyZWFjbGU7XG4gIGltYWdlMi5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGltYWdlMi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIHRyZWFjbGUgdGFydFwiKTtcbiAgY2FyZDIuYXBwZW5kQ2hpbGQoaW1hZ2UyKTtcbiAgY2FyZDIuYXBwZW5kQ2hpbGQoaW5mbzIpO1xuICBjb25zdCBoZWFkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZDIudGV4dENvbnRlbnQgPSBcIlRyZWFjbGUgVGFydFwiO1xuICBpbmZvMi5hcHBlbmRDaGlsZChoZWFkMik7XG4gIGNvbnN0IGJsdXJiMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBibHVyYjIudGV4dENvbnRlbnQgPSBcIkJha2VkIHVudGlsIGdvbGRlbiBjcmlzcCwgYW5kIHNlcnZlZCB3aXRoIG91ciBob21lbWFkZSB2YW5pbGxhIGljZSBjcmVhbS5cIjtcbiAgaW5mbzIuYXBwZW5kQ2hpbGQoYmx1cmIyKTtcbiAgY29uc3QgcHJpY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlMi50ZXh0Q29udGVudCA9IFwiOFNcIjtcbiAgcHJpY2UyLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgaW5mbzIuYXBwZW5kQ2hpbGQocHJpY2UyKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMik7XG5cbiAgY29uc3QgY2FyZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQzLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvMy5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgY29uc3QgaW1hZ2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2UzLnNyYyA9IHB1ZGRpbmc7XG4gIGltYWdlMy5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGltYWdlMy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIGNob2NvbGF0ZSBwdWRkaW5nXCIpO1xuICBjYXJkMy5hcHBlbmRDaGlsZChpbWFnZTMpO1xuICBjYXJkMy5hcHBlbmRDaGlsZChpbmZvMyk7XG4gIGNvbnN0IGhlYWQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkMy50ZXh0Q29udGVudCA9IFwiQ2hvY29sYXRlIFB1ZGRpbmdcIjtcbiAgaW5mbzMuYXBwZW5kQ2hpbGQoaGVhZDMpO1xuICBjb25zdCBibHVyYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmx1cmIzLnRleHRDb250ZW50ID0gXCJNYWRlIHdpdGggcmVhbCBtaWxrIGNob2NvbGF0ZSBhbmQgZ2FybmlzaGVkIHdpdGggbWludC5cIjtcbiAgaW5mbzMuYXBwZW5kQ2hpbGQoYmx1cmIzKTtcbiAgY29uc3QgcHJpY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlMy50ZXh0Q29udGVudCA9IFwiNVMgN0tcIjtcbiAgcHJpY2UzLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgaW5mbzMuYXBwZW5kQ2hpbGQocHJpY2UzKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMyk7XG5cbiAgY29uc3QgY2FyZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQ0LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvNC5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgY29uc3QgaW1hZ2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2U0LnNyYyA9IGRvdWdobnV0cztcbiAgaW1hZ2U0LmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2U0LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgamFtIGRvdWdobnV0c1wiKTtcbiAgY2FyZDQuYXBwZW5kQ2hpbGQoaW1hZ2U0KTtcbiAgY2FyZDQuYXBwZW5kQ2hpbGQoaW5mbzQpO1xuICBjb25zdCBoZWFkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZDQudGV4dENvbnRlbnQgPSBcIkphbSBEb3VnaG51dHNcIjtcbiAgaW5mbzQuYXBwZW5kQ2hpbGQoaGVhZDQpO1xuICBjb25zdCBibHVyYjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmx1cmI0LnRleHRDb250ZW50ID0gXCJBIGRlc3NlcnQgZm9yIGV2ZXJ5IG9jY2FzaW9uIC0gYXZhaWxhYmxlIGluIHBsYXRlcyBvZiA0LCA2LCBvciA4LlwiO1xuICBpbmZvNC5hcHBlbmRDaGlsZChibHVyYjQpO1xuICBjb25zdCBwcmljZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2U0LnRleHRDb250ZW50ID0gXCI0UyAxMksrXCI7XG4gIHByaWNlNC5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGluZm80LmFwcGVuZENoaWxkKHByaWNlNCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDQpO1xuXG4gIGNvbnN0IG1haW5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWFpbm1lbnUudGV4dENvbnRlbnQgPSBcIk1haW4gTWVudVwiO1xuICBtYWlubWVudS5jbGFzc0xpc3QuYWRkKFwibWFpbm1lbnVcIik7XG4gIG1haW5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZE1lbnUoKTtcbiAgfSlcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWlubWVudSk7XG59IiwiaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuLi9tZW51LmpzJztcbmltcG9ydCBiYW5nZXJzIGZyb20gJy4uL2ltYWdlcy9iYW5nZXJzLnBuZyc7XG5pbXBvcnQga2lkbmV5IGZyb20gJy4uL2ltYWdlcy9raWRuZXkucG5nJztcbmltcG9ydCBwZWEgZnJvbSAnLi4vaW1hZ2VzL3BlYS5wbmcnO1xuaW1wb3J0IHlvcmtzaGlyZSBmcm9tICcuLi9pbWFnZXMveW9ya3NoaXJlLnBuZyc7XG5pbXBvcnQgc2hlcGhlcmQgZnJvbSAnLi4vaW1hZ2VzL3NoZXBoZXJkLnBuZyc7XG5pbXBvcnQgdG9hZCBmcm9tICcuLi9pbWFnZXMvdG9hZC5wbmcnO1xuXG5leHBvcnQgY29uc3QgbG9hZERpc2hlcyA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlNpZ25hdHVyZSBEaXNoZXNcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkMS5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgaW5mbzEuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gIGNvbnN0IGltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlMS5zcmMgPSBiYW5nZXJzO1xuICBpbWFnZTEuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBpbWFnZTEuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBiYW5nZXJzIGFuZCBtYXNoXCIpO1xuICBjYXJkMS5hcHBlbmRDaGlsZChpbWFnZTEpO1xuICBjYXJkMS5hcHBlbmRDaGlsZChpbmZvMSk7XG4gIGNvbnN0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkMS50ZXh0Q29udGVudCA9IFwiQmFuZ2VycyBhbmQgTWFzaFwiO1xuICBpbmZvMS5hcHBlbmRDaGlsZChoZWFkMSk7XG4gIGNvbnN0IGJsdXJiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBibHVyYjEudGV4dENvbnRlbnQgPSBcIlRocmVlIHN1Y2N1bGVudCBzYXVzYWdlIGxpbmtzIHNlcnZlZCB3aXRoIG1hc2hlZCBwb3RhdG9lcyBhbmQgZ3JhdnkuXCI7XG4gIGluZm8xLmFwcGVuZENoaWxkKGJsdXJiMSk7XG4gIGNvbnN0IHByaWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmljZTEudGV4dENvbnRlbnQgPSBcIjExUyAyMEtcIjtcbiAgcHJpY2UxLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgaW5mbzEuYXBwZW5kQ2hpbGQocHJpY2UxKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMSk7XG5cbiAgY29uc3QgY2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQyLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvMi5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgY29uc3QgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2UyLnNyYyA9IGtpZG5leTtcbiAgaW1hZ2UyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2UyLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2Ygc3RlYWsgYW5kIGtpZG5leSBwaWVcIik7XG4gIGNhcmQyLmFwcGVuZENoaWxkKGltYWdlMik7XG4gIGNhcmQyLmFwcGVuZENoaWxkKGluZm8yKTtcbiAgY29uc3QgaGVhZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWQyLnRleHRDb250ZW50ID0gXCJTdGVhayBhbmQgS2lkbmV5IFBpZVwiO1xuICBpbmZvMi5hcHBlbmRDaGlsZChoZWFkMik7XG4gIGNvbnN0IGJsdXJiMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBibHVyYjIudGV4dENvbnRlbnQgPSBcIk91ciBmbGFreSBwYXN0cnkgY3J1c3QgZmlsbGVkIHdpdGggYmVlZiwga2lkbmV5LCBvbmlvbiwgY2Fycm90LCBtdXNocm9vbSwgYW5kIGEgcmljaCBncmF2eS5cIjtcbiAgaW5mbzIuYXBwZW5kQ2hpbGQoYmx1cmIyKTtcbiAgY29uc3QgcHJpY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlMi50ZXh0Q29udGVudCA9IFwiMTNTIDEyS1wiO1xuICBwcmljZTIuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBpbmZvMi5hcHBlbmRDaGlsZChwcmljZTIpO1xuICBtYWluLmFwcGVuZENoaWxkKGNhcmQyKTtcblxuICBjb25zdCBjYXJkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZDMuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm8zLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBpbWFnZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZTMuc3JjID0gcGVhO1xuICBpbWFnZTMuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpO1xuICBpbWFnZTMuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBwZWEgc291cFwiKTtcbiAgY2FyZDMuYXBwZW5kQ2hpbGQoaW1hZ2UzKTtcbiAgY2FyZDMuYXBwZW5kQ2hpbGQoaW5mbzMpO1xuICBjb25zdCBoZWFkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZDMudGV4dENvbnRlbnQgPSBcIlBlYSBTb3VwXCI7XG4gIGluZm8zLmFwcGVuZENoaWxkKGhlYWQzKTtcbiAgY29uc3QgYmx1cmIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJsdXJiMy50ZXh0Q29udGVudCA9IFwiQSBob3VzZSBmYXZvcml0ZSwgb3VyIHBlYSBzb3VwIGlzIHJpY2ggYW5kIHBlcmZlY3QgdG8gYWNjb21wYW55IGFub3RoZXIgZGlzaCwgb3IgdG8gZW5qb3kgb24gaXRzIG93bi5cIjtcbiAgaW5mbzMuYXBwZW5kQ2hpbGQoYmx1cmIzKTtcbiAgY29uc3QgcHJpY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlMy50ZXh0Q29udGVudCA9IFwiOVMgOEtcIjtcbiAgcHJpY2UzLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgaW5mbzMuYXBwZW5kQ2hpbGQocHJpY2UzKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMyk7XG5cbiAgY29uc3QgY2FyZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQ0LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBpbmZvNC5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgY29uc3QgaW1hZ2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2U0LnNyYyA9IHlvcmtzaGlyZTtcbiAgaW1hZ2U0LmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2U0LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgeW9ya3NoaXJlIHB1ZGRpbmdcIik7XG4gIGNhcmQ0LmFwcGVuZENoaWxkKGltYWdlNCk7XG4gIGNhcmQ0LmFwcGVuZENoaWxkKGluZm80KTtcbiAgY29uc3QgaGVhZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWQ0LnRleHRDb250ZW50ID0gXCJZb3Jrc2hpcmUgUHVkZGluZ1wiO1xuICBpbmZvNC5hcHBlbmRDaGlsZChoZWFkNCk7XG4gIGNvbnN0IGJsdXJiNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBibHVyYjQudGV4dENvbnRlbnQgPSBcIkEgZGVsZWN0YWJsZSBwYXN0cnkgdG9wcGVkIHdpdGggcm9hc3QgYmVlZiBhbmQgZ3JhdnksIGFuZCBzZXJ2ZWQgd2l0aCBncmlsbGVkIHNlYXNvbmFsIHZlZ2V0YWJsZXMuXCI7XG4gIGluZm80LmFwcGVuZENoaWxkKGJsdXJiNCk7XG4gIGNvbnN0IHByaWNlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmljZTQudGV4dENvbnRlbnQgPSBcIjE0U1wiO1xuICBwcmljZTQuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBpbmZvNC5hcHBlbmRDaGlsZChwcmljZTQpO1xuICBtYWluLmFwcGVuZENoaWxkKGNhcmQ0KTtcblxuICBjb25zdCBjYXJkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZDUuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm81LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBpbWFnZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZTUuc3JjID0gc2hlcGhlcmQ7XG4gIGltYWdlNS5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gIGltYWdlNS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIHNoZXBoZXJkcyBwaWVcIik7XG4gIGNhcmQ1LmFwcGVuZENoaWxkKGltYWdlNSk7XG4gIGNhcmQ1LmFwcGVuZENoaWxkKGluZm81KTtcbiAgY29uc3QgaGVhZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWQ1LnRleHRDb250ZW50ID0gXCJTaGVwaGVyZHMgUGllXCI7XG4gIGluZm81LmFwcGVuZENoaWxkKGhlYWQ1KTtcbiAgY29uc3QgYmx1cmI1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJsdXJiNS50ZXh0Q29udGVudCA9IFwiTWluY2VkIGxhbWIsIGdyYXZ5LCBwZWFzIGFuZCBjYXJyb3RzLCBhbmQgdG9wcGVkIHdpdGggbWFzaGVkIHBvdGF0b2VzLiBTZXJ2ZXMgdHdvLlwiO1xuICBpbmZvNS5hcHBlbmRDaGlsZChibHVyYjUpO1xuICBjb25zdCBwcmljZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2U1LnRleHRDb250ZW50ID0gXCIxR1wiO1xuICBwcmljZTUuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBpbmZvNS5hcHBlbmRDaGlsZChwcmljZTUpO1xuICBtYWluLmFwcGVuZENoaWxkKGNhcmQ1KTtcblxuICBjb25zdCBjYXJkNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluZm82ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZDYuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGluZm82LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICBjb25zdCBpbWFnZTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZTYuc3JjID0gdG9hZDtcbiAgaW1hZ2U2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKTtcbiAgaW1hZ2U2LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgdG9hZCBpbiB0aGUgaG9sZVwiKTtcbiAgY2FyZDYuYXBwZW5kQ2hpbGQoaW1hZ2U2KTtcbiAgY2FyZDYuYXBwZW5kQ2hpbGQoaW5mbzYpO1xuICBjb25zdCBoZWFkNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZDYudGV4dENvbnRlbnQgPSBcIlRvYWQgaW4gdGhlIEhvbGVcIjtcbiAgaW5mbzYuYXBwZW5kQ2hpbGQoaGVhZDYpO1xuICBjb25zdCBibHVyYjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmx1cmI2LnRleHRDb250ZW50ID0gXCJPdXIgWW9ya3NoaXJlIHB1ZGRpbmcgcGFzdHJ5IHdpdGggc2F1c2FnZXMsIGdhcm5pc2hlZCB3aXRoIG9uaW9uIGdyYXZ5IGFuZCBwYXJzbGV5LlwiO1xuICBpbmZvNi5hcHBlbmRDaGlsZChibHVyYjYpO1xuICBjb25zdCBwcmljZTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpY2U2LnRleHRDb250ZW50ID0gXCIxMFMgN0tcIjtcbiAgcHJpY2U2LmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgaW5mbzYuYXBwZW5kQ2hpbGQocHJpY2U2KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkNik7XG5cbiAgY29uc3QgbWFpbm1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtYWlubWVudS50ZXh0Q29udGVudCA9IFwiTWFpbiBNZW51XCI7XG4gIG1haW5tZW51LmNsYXNzTGlzdC5hZGQoXCJtYWlubWVudVwiKTtcbiAgbWFpbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkTWVudSgpO1xuICB9KVxuICBtYWluLmFwcGVuZENoaWxkKG1haW5tZW51KTtcbn0iLCJpbXBvcnQgeyBsb2FkQmV2ZXJhZ2VzIH0gZnJvbSAnLi9tZW51LXBhZ2VzL2JldmVyYWdlcy5qcyc7XG5pbXBvcnQgeyBsb2FkRGlzaGVzIH0gZnJvbSAnLi9tZW51LXBhZ2VzL2Rpc2hlcy5qcyc7XG5pbXBvcnQgeyBsb2FkRGVzc2VydHMgfSBmcm9tICcuL21lbnUtcGFnZXMvZGVzc2VydHMuanMnO1xuXG5cbmV4cG9ydCBjb25zdCBsb2FkTWVudSA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwib3B0aW9uc1wiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChvcHRpb25zKTtcbiAgY29uc3QgYmV2ZXJhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYmV2ZXJhZ2VzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgYmV2ZXJhZ2VzLnRleHRDb250ZW50ID0gXCJCZXZlcmFnZXNcIjtcbiAgYmV2ZXJhZ2VzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZEJldmVyYWdlcygpO1xuICB9KVxuICBvcHRpb25zLmFwcGVuZENoaWxkKGJldmVyYWdlcyk7XG4gIGNvbnN0IGRpc2hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRpc2hlcy5jbGFzc0xpc3QuYWRkKFwibWVudS1idG5cIik7XG4gIGRpc2hlcy50ZXh0Q29udGVudCA9IFwiU2lnbmF0dXJlIERpc2hlc1wiO1xuICBkaXNoZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkRGlzaGVzKCk7XG4gIH0pXG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQoZGlzaGVzKTtcbiAgY29uc3QgZGVzc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZXNzZXJ0cy5jbGFzc0xpc3QuYWRkKFwibWVudS1idG5cIik7XG4gIGRlc3NlcnRzLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiO1xuICBkZXNzZXJ0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWREZXNzZXJ0cygpO1xuICB9KVxuICBvcHRpb25zLmFwcGVuZENoaWxkKGRlc3NlcnRzKTtcbn0iLCJleHBvcnQgY29uc3QgbG9hZFNpdGUgPSAoKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdmJhcik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnRuXCIpO1xuICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChob21lKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdi1idG5cIik7XG4gIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKG1lbnUpO1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcIm5hdi1idG5cIik7XG4gIGFib3V0LnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiKTtcbiAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWhvbWVcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVGhlIExlYWt5IENhdWxkcm9uXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGNvbnN0IGJsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmx1cmIuY2xhc3NMaXN0LmFkZChcImJsdXJiXCIpO1xuICBibHVyYi50ZXh0Q29udGVudCA9IFwiRmlyc3QtcmF0ZSBmb29kLCBkcmluaywgYW5kIGxvZGdpbmcgZm9yIHdpdGNoZXMgYW5kIHdpemFyZHMsIGVzcGVjaWFsbHkgdGhvc2UgaGVhZGluZyB0byBEaWFnb24gQWxsZXkgb3IgbG9va2luZyBmb3IgYSBjb3p5IHBsYWNlIHRvIGRpbmVcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChibHVyYik7XG4gIGNvbnN0IGxlYXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGVhcm4uY2xhc3NMaXN0LmFkZChcImxlYXJuXCIpO1xuICBsZWFybi50ZXh0Q29udGVudCA9IFwiTGVhcm4gTW9yZVwiO1xuICBtYWluLmFwcGVuZENoaWxkKGxlYXJuKTtcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBsb2FkU2l0ZSB9IGZyb20gXCIuL3NpdGUuanNcIjtcblxuaW1wb3J0IHsgbG9hZENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5pbXBvcnQgeyBsb2FkSG9tZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiXG5pbXBvcnQgeyBsb2FkQWJvdXQgfSBmcm9tIFwiLi9hYm91dC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vIGxvYWRDb250YWN0KCk7XG5cbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIik7XG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvYWRDb250YWN0KCk7XG59KVxuXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkSG9tZSgpO1xufSlcblxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbG9hZE1lbnUoKTtcbn0pXG5cbmNvbnN0IGxlYXJuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWFyblwiKTtcbmxlYXJuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvYWRBYm91dCgpO1xufSlcblxuY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0XCIpO1xuYWJvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbG9hZEFib3V0KCk7XG59KVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=