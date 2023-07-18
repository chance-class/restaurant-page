/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    const header = document.createElement("h2");
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
  const header = document.createElement("h2");
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
  main.classList.add("main");
  container.appendChild(main);
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
    const header = document.createElement("h3");
    header.textContent = "Beverages";
    main.appendChild(header);

    const card1 = document.createElement("div");
    const info1 = document.createElement("div");
    card1.classList.add("card");
    info1.classList.add("info");
    card1.appendChild(info1);
    const head1 = document.createElement("h4");
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
    const head2 = document.createElement("h4");
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
    const head3 = document.createElement("h4");
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
    const head4 = document.createElement("h4");
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
    card1.appendChild(info5);
    const head5 = document.createElement("h4");
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
    const header = document.createElement("h3");
    header.textContent = "Desserts";
    main.appendChild(header);

    const card1 = document.createElement("div");
    const info1 = document.createElement("div");
    card1.classList.add("card");
    info1.classList.add("info");
    card1.appendChild(info1);
    const head1 = document.createElement("h4");
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
    const head2 = document.createElement("h4");
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
    const head3 = document.createElement("h4");
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
    const head4 = document.createElement("h4");
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
    const header = document.createElement("h3");
    header.textContent = "Signature Dishes";
    main.appendChild(header);
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
  const header = document.createElement("h2");
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
  const heading = document.createElement("h1");
  heading.textContent = "The Leaky Cauldron";
  header.appendChild(heading);
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
  main.classList.add("main");
  container.appendChild(main);
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
/******/ 			// no module.id needed
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUVBQVk7QUFDaEIsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeENPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7VUN6Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQSxDQUFzQzs7QUFFSztBQUNOO0FBQ0Q7QUFDRzs7QUFFdkM7O0FBRUE7QUFDQTtBQUNBLEVBQUUsd0RBQVc7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLGtEQUFRO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxrREFBUTtBQUNWLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsb0RBQVM7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLG9EQUFTO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1wYWdlcy9iZXZlcmFnZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZXMvZGVzc2VydHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZXMvZGlzaGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbG9hZEFib3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGluZm8pO1xuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcDEudGV4dENvbnRlbnQgPSBcIlRoZSBMZWFreSBDYXVsZHJvbiB3YXMgYnVpbHQgaW4gdGhlIDE1MDBzIGJ5IERhaXN5IERvZGRlcmlkZ2UuIEl0cyB0cnVlIGFkZHJlc3MgaXMgbnVtYmVyIG9uZSBEaWFnb24gQWxsZXksIGFuZCBpdCBpcyBiZWxpZXZlZCB0byBoYXZlIGJlZW4gYnVpbHQgYWxvbmcgd2l0aCB0aGUgcmVzdCBvZiB0aGUgd2l6YXJkaW5nIHN0cmVldC5cIjtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHAxKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAyLnRleHRDb250ZW50ID0gXCJXaXRoIHRoZSBpbXBvc2l0aW9uIG9mIHRoZSBJbnRlcm5hdGlvbmFsIFN0YXR1dGUgb2YgV2l6YXJkaW5nIFNlY3JlY3kgaW4gMTY5MiwgTWluaXN0ZXIgVWxpY2sgR2FtcCBwZXJtaXR0ZWQgdGhlIHB1YiB0byBjb250aW51ZSBpdHMgZXhpc3RlbmNlIGFzIGEgc2FmZSBoYXZlbiBhbmQgcmVmdWdlIGZvciBtZW1iZXJzIG9mIHRoZSBtYWdpY2FsIGNvbW11bml0eS5cIjtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHAyKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAzLnRleHRDb250ZW50ID0gXCJHYW1wIHdhcyBzeW1wYXRoZXRpYyB0byB0aGUgbmVlZCBvZiB3aXphcmRzIHRvIGxldCBvZmYgc3RlYW0gZHVyaW5nIHRoaXMgZGlmZmljdWx0IHRpbWUsIGFuZCBmdXJ0aGVyIGFncmVlZCB0byBnaXZlIHRoZSBsYW5kbG9yZCBwZXJtaXNzaW9uIHRvIGxldCBwZW9wbGUgaW50byBEaWFnb24gQWxsZXkgZnJvbSBoaXMgYmFja3lhcmQsIGJlY2F1c2UgdGhlIHNob3BzIGJlaGluZCB0aGUgTGVha3kgQ2F1bGRyb24gd2VyZSBub3cgYWxzbyBpbiBuZWVkIG9mIHByb3RlY3Rpb24uXCI7XG4gICAgaW5mby5hcHBlbmRDaGlsZChwMyk7XG4gICAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwNC50ZXh0Q29udGVudCA9IFwiTWFueSBtb29ucyBsYXRlciwgVGhlIExlYWt5IENhdWxkcm9uIHJlbWFpbnMgdGhlIGlkZWFsIHNwb3QgdG8gY2F0Y2ggdXAgd2l0aCB3aXphcmRpbmcgZ29zc2lwIG9yIHJlbGF4IGFmdGVyIGEgZGF5IG9mIHNob3BwaW5nLiBXZSBob3BlIHlvdSdsbCBqb2luIHVzIVwiO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocDQpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBcIkluZm9ybWF0aW9uIGNvdXJ0ZXN5IG9mIDxhIGhyZWY9J2h0dHBzOi8vaGFycnlwb3R0ZXIuZmFuZG9tLmNvbS93aWtpL0xlYWt5X0NhdWxkcm9uLyc+VGhlIFdpa2k8L2E+LlwiO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgfSIsImV4cG9ydCBjb25zdCBsb2FkQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbnRyby50ZXh0Q29udGVudCA9IFwiWW91IGFyZSB3ZWxjb21lIHRvIGxlYXZlIHVzIGEgbWVzc2FnZSBoZXJlLCBidXQgdGhlIE11Z2dsZSBpbnRlcm5ldCBkb2VzIG5vdCB3b3JrIHZlcnkgb2Z0ZW4sIHNvIHBsZWFzZSBmb3JnaXZlIHVzIGlmIHdlIGRvIG5vdCByZXNwb25kIGluIGEgdGltZWx5IG1hbm5lci4gLVRvbVwiO1xuICBtYWluLmFwcGVuZENoaWxkKGludHJvKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJzdWJtaXQucGhwXCIpO1xuICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBuYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuYW1lXCIpO1xuICBuYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmFtZVwiKTtcblxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZW1haWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImVtYWlsXCIpO1xuICBlbWFpbC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZW1haWxcIik7XG4gIGVtYWlsLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW1haWxcIik7XG5cbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibWVzc2FnZVwiKTtcbiAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIllvdXIgbWVzc2FnZSBoZXJlXCIpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG4gIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGJyLmNsb25lTm9kZSgpKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBtYWluLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbmZvMS50ZXh0Q29udGVudCA9IFwiUGhvbmU6ICs0NCA3MzQxIDEyMzQ1NlwiO1xuICBpbmZvLmFwcGVuZENoaWxkKGluZm8xKTtcbiAgaW5mby5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGNvbnN0IGluZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZm8yLnRleHRDb250ZW50ID0gXCJBZGRyZXNzOiA3NTMgQ2hhcmluZyBDcm9zcyBSb2FkXCI7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5mbzIpO1xuICBtYWluLmFwcGVuZENoaWxkKGluZm8pO1xuXG59OyIsImltcG9ydCB7IGxvYWRBYm91dCB9IGZyb20gXCIuL2Fib3V0LmpzXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgYmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBibHVyYi5jbGFzc0xpc3QuYWRkKFwiYmx1cmJcIik7XG4gIGJsdXJiLnRleHRDb250ZW50ID0gXCJGaXJzdC1yYXRlIGZvb2QsIGRyaW5rLCBhbmQgbGl2aW5nIHF1YXJ0ZXJzIGZvciB0aGUgdHJhdmVsbGluZyB3aXRjaCBvciB3aXphcmQsIG9yIHNpbXBseSB0aG9zZSBoZWFkaW5nIHRvIERpYWdvbiBBbGxleVwiO1xuICBtYWluLmFwcGVuZENoaWxkKGJsdXJiKTtcbiAgY29uc3QgbGVhcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZWFybi5jbGFzc0xpc3QuYWRkKFwibGVhcm5cIik7XG4gIGxlYXJuLnRleHRDb250ZW50ID0gXCJMZWFybiBNb3JlXCI7XG4gIGxlYXJuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZEFib3V0KCk7XG4gIH0pXG4gIG1haW4uYXBwZW5kQ2hpbGQobGVhcm4pO1xufTsiLCJpbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gJy4uL21lbnUuanMnO1xuXG5leHBvcnQgY29uc3QgbG9hZEJldmVyYWdlcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkJldmVyYWdlc1wiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDEuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzEuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY2FyZDEuYXBwZW5kQ2hpbGQoaW5mbzEpO1xuICAgIGNvbnN0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGhlYWQxLnRleHRDb250ZW50ID0gXCJUZWEgYW5kIENydW1wZXRzXCI7XG4gICAgaW5mbzEuYXBwZW5kQ2hpbGQoaGVhZDEpO1xuICAgIGNvbnN0IGJsdXJiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiMS50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlwiO1xuICAgIGluZm8xLmFwcGVuZENoaWxkKGJsdXJiMSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMSk7XG5cbiAgICBjb25zdCBjYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQyLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm8yLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNhcmQyLmFwcGVuZENoaWxkKGluZm8yKTtcbiAgICBjb25zdCBoZWFkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBoZWFkMi50ZXh0Q29udGVudCA9IFwiR2lsbHl3YXRlclwiO1xuICAgIGluZm8yLmFwcGVuZENoaWxkKGhlYWQyKTtcbiAgICBjb25zdCBibHVyYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjIudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIjtcbiAgICBpbmZvMi5hcHBlbmRDaGlsZChibHVyYjIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDIpO1xuXG4gICAgY29uc3QgY2FyZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkMy5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvMy5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjYXJkMy5hcHBlbmRDaGlsZChpbmZvMyk7XG4gICAgY29uc3QgaGVhZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgaGVhZDMudGV4dENvbnRlbnQgPSBcIkJ1dHRlcmJlZXJcIjtcbiAgICBpbmZvMy5hcHBlbmRDaGlsZChoZWFkMyk7XG4gICAgY29uc3QgYmx1cmIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmIzLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCI7XG4gICAgaW5mbzMuYXBwZW5kQ2hpbGQoYmx1cmIzKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQzKTtcblxuICAgIGNvbnN0IGNhcmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzQuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY2FyZDQuYXBwZW5kQ2hpbGQoaW5mbzQpO1xuICAgIGNvbnN0IGhlYWQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGhlYWQ0LnRleHRDb250ZW50ID0gXCJQdW1wa2luIEp1aWNlXCI7XG4gICAgaW5mbzQuYXBwZW5kQ2hpbGQoaGVhZDQpO1xuICAgIGNvbnN0IGJsdXJiNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiNC50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlwiO1xuICAgIGluZm80LmFwcGVuZENoaWxkKGJsdXJiNCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkNCk7XG5cbiAgICBjb25zdCBjYXJkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQ1LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm81LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNhcmQxLmFwcGVuZENoaWxkKGluZm81KTtcbiAgICBjb25zdCBoZWFkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBoZWFkNS50ZXh0Q29udGVudCA9IFwiTWVhZFwiO1xuICAgIGluZm81LmFwcGVuZENoaWxkKGhlYWQ1KTtcbiAgICBjb25zdCBibHVyYjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjUudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIjtcbiAgICBpbmZvNS5hcHBlbmRDaGlsZChibHVyYjUpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDUpO1xuXG4gICAgY29uc3QgbWFpbm1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1haW5tZW51LnRleHRDb250ZW50ID0gXCJNYWluIE1lbnVcIjtcbiAgICBtYWlubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbG9hZE1lbnUoKTtcbiAgICB9KVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbm1lbnUpO1xuICB9IiwiaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuLi9tZW51LmpzJztcblxuZXhwb3J0IGNvbnN0IGxvYWREZXNzZXJ0cyA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkRlc3NlcnRzXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgY2FyZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkMS5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvMS5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjYXJkMS5hcHBlbmRDaGlsZChpbmZvMSk7XG4gICAgY29uc3QgaGVhZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgaGVhZDEudGV4dENvbnRlbnQgPSBcIlNwb3R0ZWQgRGlja1wiO1xuICAgIGluZm8xLmFwcGVuZENoaWxkKGhlYWQxKTtcbiAgICBjb25zdCBibHVyYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjEudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIjtcbiAgICBpbmZvMS5hcHBlbmRDaGlsZChibHVyYjEpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDEpO1xuXG4gICAgY29uc3QgY2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkMi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvMi5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjYXJkMi5hcHBlbmRDaGlsZChpbmZvMik7XG4gICAgY29uc3QgaGVhZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgaGVhZDIudGV4dENvbnRlbnQgPSBcIlRyZWFjbGUgVGFydFwiO1xuICAgIGluZm8yLmFwcGVuZENoaWxkKGhlYWQyKTtcbiAgICBjb25zdCBibHVyYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjIudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIjtcbiAgICBpbmZvMi5hcHBlbmRDaGlsZChibHVyYjIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDIpO1xuXG4gICAgY29uc3QgY2FyZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkMy5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvMy5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjYXJkMy5hcHBlbmRDaGlsZChpbmZvMyk7XG4gICAgY29uc3QgaGVhZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgaGVhZDMudGV4dENvbnRlbnQgPSBcIkNob2NvbGF0ZSBQdWRkaW5nXCI7XG4gICAgaW5mbzMuYXBwZW5kQ2hpbGQoaGVhZDMpO1xuICAgIGNvbnN0IGJsdXJiMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiMy50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlwiO1xuICAgIGluZm8zLmFwcGVuZENoaWxkKGJsdXJiMyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMyk7XG5cbiAgICBjb25zdCBjYXJkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQ0LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm80LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNhcmQ0LmFwcGVuZENoaWxkKGluZm80KTtcbiAgICBjb25zdCBoZWFkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBoZWFkNC50ZXh0Q29udGVudCA9IFwiSmFtIERvdWdobnV0c1wiO1xuICAgIGluZm80LmFwcGVuZENoaWxkKGhlYWQ0KTtcbiAgICBjb25zdCBibHVyYjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjQudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIjtcbiAgICBpbmZvNC5hcHBlbmRDaGlsZChibHVyYjQpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDQpO1xuXG4gICAgY29uc3QgbWFpbm1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1haW5tZW51LnRleHRDb250ZW50ID0gXCJNYWluIE1lbnVcIjtcbiAgICBtYWlubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbG9hZE1lbnUoKTtcbiAgICB9KVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbm1lbnUpO1xuICB9IiwiaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuLi9tZW51LmpzJztcblxuZXhwb3J0IGNvbnN0IGxvYWREaXNoZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJTaWduYXR1cmUgRGlzaGVzXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnN0IG1haW5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtYWlubWVudS50ZXh0Q29udGVudCA9IFwiTWFpbiBNZW51XCI7XG4gICAgbWFpbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvYWRNZW51KCk7XG4gICAgfSlcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5tZW51KTtcbiAgfSIsImltcG9ydCB7IGxvYWRCZXZlcmFnZXMgfSBmcm9tICcuL21lbnUtcGFnZXMvYmV2ZXJhZ2VzLmpzJztcbmltcG9ydCB7IGxvYWREaXNoZXMgfSBmcm9tICcuL21lbnUtcGFnZXMvZGlzaGVzLmpzJztcbmltcG9ydCB7IGxvYWREZXNzZXJ0cyB9IGZyb20gJy4vbWVudS1wYWdlcy9kZXNzZXJ0cy5qcyc7XG5cblxuZXhwb3J0IGNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25zXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuICBjb25zdCBiZXZlcmFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBiZXZlcmFnZXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xuICBiZXZlcmFnZXMudGV4dENvbnRlbnQgPSBcIkJldmVyYWdlc1wiO1xuICBiZXZlcmFnZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkQmV2ZXJhZ2VzKCk7XG4gIH0pXG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQoYmV2ZXJhZ2VzKTtcbiAgY29uc3QgZGlzaGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGlzaGVzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgZGlzaGVzLnRleHRDb250ZW50ID0gXCJTaWduYXR1cmUgRGlzaGVzXCI7XG4gIGRpc2hlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWREaXNoZXMoKTtcbiAgfSlcbiAgb3B0aW9ucy5hcHBlbmRDaGlsZChkaXNoZXMpO1xuICBjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlc3NlcnRzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgZGVzc2VydHMudGV4dENvbnRlbnQgPSBcIkRlc3NlcnRzXCI7XG4gIGRlc3NlcnRzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZERlc3NlcnRzKCk7XG4gIH0pXG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQoZGVzc2VydHMpO1xufSIsImV4cG9ydCBjb25zdCBsb2FkU2l0ZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRoZSBMZWFreSBDYXVsZHJvblwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2YmFyKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGhvbWUpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xuICBhYm91dC50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGFib3V0KTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBjb25zdCBibHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJsdXJiLmNsYXNzTGlzdC5hZGQoXCJibHVyYlwiKTtcbiAgYmx1cmIudGV4dENvbnRlbnQgPSBcIkZpcnN0LXJhdGUgZm9vZCwgZHJpbmssIGFuZCBsaXZpbmcgcXVhcnRlcnMgZm9yIHRoZSB0cmF2ZWxsaW5nIHdpdGNoIG9yIHdpemFyZCwgb3Igc2ltcGx5IHRob3NlIGhlYWRpbmcgdG8gRGlhZ29uIEFsbGV5XCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYmx1cmIpO1xuICBjb25zdCBsZWFybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxlYXJuLmNsYXNzTGlzdC5hZGQoXCJsZWFyblwiKTtcbiAgbGVhcm4udGV4dENvbnRlbnQgPSBcIkxlYXJuIE1vcmVcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChsZWFybik7XG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc29sZS5sb2coXCJFdmVyeXRoaW5nIGlzIGxpbmtlZC5cIik7XG5cbiBpbXBvcnQgeyBsb2FkU2l0ZSB9IGZyb20gXCIuL3NpdGUuanNcIjtcblxuaW1wb3J0IHsgbG9hZENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5pbXBvcnQgeyBsb2FkSG9tZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiXG5pbXBvcnQgeyBsb2FkQWJvdXQgfSBmcm9tIFwiLi9hYm91dC5qc1wiO1xuXG4vLyBsb2FkQ29udGFjdCgpO1xuXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkQ29udGFjdCgpO1xufSlcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbG9hZEhvbWUoKTtcbn0pXG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvYWRNZW51KCk7XG59KVxuXG5jb25zdCBsZWFybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVhcm5cIik7XG5sZWFybi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkQWJvdXQoKTtcbn0pXG5cbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dFwiKTtcbmFib3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvYWRBYm91dCgpO1xufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9