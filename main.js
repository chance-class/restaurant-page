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

    const card1 = document.createElement("div");
    const info1 = document.createElement("div");
    card1.classList.add("card");
    info1.classList.add("info");
    card1.appendChild(info1);
    const head1 = document.createElement("h4");
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
    const head2 = document.createElement("h4");
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
    const head3 = document.createElement("h4");
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
    const head4 = document.createElement("h4");
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
    const head5 = document.createElement("h4");
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
    const head6 = document.createElement("h4");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzRHVDOztBQUVoQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVM7QUFDYixHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJzQzs7QUFFL0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sa0RBQVE7QUFDZCxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckZzQzs7QUFFL0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrREFBUTtBQUNkLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4RXNDOztBQUUvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sa0RBQVE7QUFDZCxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRzBEO0FBQ047QUFDSTs7O0FBR2pEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQWE7QUFDakIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFVO0FBQ2QsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUFZO0FBQ2hCLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7O1VDekNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUEsQ0FBc0M7O0FBRUs7QUFDTjtBQUNEO0FBQ0c7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHdEQUFXO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxrREFBUTtBQUNWLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsa0RBQVE7QUFDVixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLG9EQUFTO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxvREFBUztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZXMvYmV2ZXJhZ2VzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXBhZ2VzL2Rlc3NlcnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXBhZ2VzL2Rpc2hlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGxvYWRBYm91dCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAxLnRleHRDb250ZW50ID0gXCJUaGUgTGVha3kgQ2F1bGRyb24gd2FzIGJ1aWx0IGluIHRoZSAxNTAwcyBieSBEYWlzeSBEb2RkZXJpZGdlLiBJdHMgdHJ1ZSBhZGRyZXNzIGlzIG51bWJlciBvbmUgRGlhZ29uIEFsbGV5LCBhbmQgaXQgaXMgYmVsaWV2ZWQgdG8gaGF2ZSBiZWVuIGJ1aWx0IGFsb25nIHdpdGggdGhlIHJlc3Qgb2YgdGhlIHdpemFyZGluZyBzdHJlZXQuXCI7XG4gICAgaW5mby5hcHBlbmRDaGlsZChwMSk7XG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwMi50ZXh0Q29udGVudCA9IFwiV2l0aCB0aGUgaW1wb3NpdGlvbiBvZiB0aGUgSW50ZXJuYXRpb25hbCBTdGF0dXRlIG9mIFdpemFyZGluZyBTZWNyZWN5IGluIDE2OTIsIE1pbmlzdGVyIFVsaWNrIEdhbXAgcGVybWl0dGVkIHRoZSBwdWIgdG8gY29udGludWUgaXRzIGV4aXN0ZW5jZSBhcyBhIHNhZmUgaGF2ZW4gYW5kIHJlZnVnZSBmb3IgbWVtYmVycyBvZiB0aGUgbWFnaWNhbCBjb21tdW5pdHkuXCI7XG4gICAgaW5mby5hcHBlbmRDaGlsZChwMik7XG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwMy50ZXh0Q29udGVudCA9IFwiR2FtcCB3YXMgc3ltcGF0aGV0aWMgdG8gdGhlIG5lZWQgb2Ygd2l6YXJkcyB0byBsZXQgb2ZmIHN0ZWFtIGR1cmluZyB0aGlzIGRpZmZpY3VsdCB0aW1lLCBhbmQgZnVydGhlciBhZ3JlZWQgdG8gZ2l2ZSB0aGUgbGFuZGxvcmQgcGVybWlzc2lvbiB0byBsZXQgcGVvcGxlIGludG8gRGlhZ29uIEFsbGV5IGZyb20gaGlzIGJhY2t5YXJkLCBiZWNhdXNlIHRoZSBzaG9wcyBiZWhpbmQgdGhlIExlYWt5IENhdWxkcm9uIHdlcmUgbm93IGFsc28gaW4gbmVlZCBvZiBwcm90ZWN0aW9uLlwiO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocDMpO1xuICAgIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcDQudGV4dENvbnRlbnQgPSBcIk1hbnkgbW9vbnMgbGF0ZXIsIFRoZSBMZWFreSBDYXVsZHJvbiByZW1haW5zIHRoZSBpZGVhbCBzcG90IHRvIGNhdGNoIHVwIHdpdGggd2l6YXJkaW5nIGdvc3NpcCBvciByZWxheCBhZnRlciBhIGRheSBvZiBzaG9wcGluZy4gV2UgaG9wZSB5b3UnbGwgam9pbiB1cyFcIjtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHA0KTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gXCJJbmZvcm1hdGlvbiBjb3VydGVzeSBvZiA8YSBocmVmPSdodHRwczovL2hhcnJ5cG90dGVyLmZhbmRvbS5jb20vd2lraS9MZWFreV9DYXVsZHJvbi8nPlRoZSBXaWtpPC9hPi5cIjtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIH0iLCJleHBvcnQgY29uc3QgbG9hZENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW50cm8udGV4dENvbnRlbnQgPSBcIllvdSBhcmUgd2VsY29tZSB0byBsZWF2ZSB1cyBhIG1lc3NhZ2UgaGVyZSwgYnV0IHRoZSBNdWdnbGUgaW50ZXJuZXQgZG9lcyBub3Qgd29yayB2ZXJ5IG9mdGVuLCBzbyBwbGVhc2UgZm9yZ2l2ZSB1cyBpZiB3ZSBkbyBub3QgcmVzcG9uZCBpbiBhIHRpbWVseSBtYW5uZXIuIC1Ub21cIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChpbnRybyk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwic3VibWl0LnBocFwiKTtcbiAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcbiAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5hbWVcIik7XG5cbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGVtYWlsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJlbWFpbFwiKTtcbiAgZW1haWwuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImVtYWlsXCIpO1xuICBlbWFpbC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVtYWlsXCIpO1xuXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm1lc3NhZ2VcIik7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJZb3VyIG1lc3NhZ2UgaGVyZVwiKTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xuICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5mbzEudGV4dENvbnRlbnQgPSBcIlBob25lOiArNDQgNzM0MSAxMjM0NTZcIjtcbiAgaW5mby5hcHBlbmRDaGlsZChpbmZvMSk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBjb25zdCBpbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbmZvMi50ZXh0Q29udGVudCA9IFwiQWRkcmVzczogNzUzIENoYXJpbmcgQ3Jvc3MgUm9hZFwiO1xuICBpbmZvLmFwcGVuZENoaWxkKGluZm8yKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChpbmZvKTtcblxufTsiLCJpbXBvcnQgeyBsb2FkQWJvdXQgfSBmcm9tIFwiLi9hYm91dC5qc1wiO1xuXG5leHBvcnQgY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnN0IGJsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmx1cmIuY2xhc3NMaXN0LmFkZChcImJsdXJiXCIpO1xuICBibHVyYi50ZXh0Q29udGVudCA9IFwiRmlyc3QtcmF0ZSBmb29kLCBkcmluaywgYW5kIGxpdmluZyBxdWFydGVycyBmb3IgdGhlIHRyYXZlbGxpbmcgd2l0Y2ggb3Igd2l6YXJkLCBvciBzaW1wbHkgdGhvc2UgaGVhZGluZyB0byBEaWFnb24gQWxsZXlcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChibHVyYik7XG4gIGNvbnN0IGxlYXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGVhcm4uY2xhc3NMaXN0LmFkZChcImxlYXJuXCIpO1xuICBsZWFybi50ZXh0Q29udGVudCA9IFwiTGVhcm4gTW9yZVwiO1xuICBsZWFybi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRBYm91dCgpO1xuICB9KVxuICBtYWluLmFwcGVuZENoaWxkKGxlYXJuKTtcbn07IiwiaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuLi9tZW51LmpzJztcblxuZXhwb3J0IGNvbnN0IGxvYWRCZXZlcmFnZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJCZXZlcmFnZXNcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBjYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQxLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm8xLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNhcmQxLmFwcGVuZENoaWxkKGluZm8xKTtcbiAgICBjb25zdCBoZWFkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBoZWFkMS50ZXh0Q29udGVudCA9IFwiVGVhIGFuZCBDcnVtcGV0c1wiO1xuICAgIGluZm8xLmFwcGVuZENoaWxkKGhlYWQxKTtcbiAgICBjb25zdCBibHVyYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjEudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIjtcbiAgICBpbmZvMS5hcHBlbmRDaGlsZChibHVyYjEpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDEpO1xuXG4gICAgY29uc3QgY2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkMi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvMi5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjYXJkMi5hcHBlbmRDaGlsZChpbmZvMik7XG4gICAgY29uc3QgaGVhZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgaGVhZDIudGV4dENvbnRlbnQgPSBcIkdpbGx5d2F0ZXJcIjtcbiAgICBpbmZvMi5hcHBlbmRDaGlsZChoZWFkMik7XG4gICAgY29uc3QgYmx1cmIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmIyLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCI7XG4gICAgaW5mbzIuYXBwZW5kQ2hpbGQoYmx1cmIyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQyKTtcblxuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDMuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzMuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY2FyZDMuYXBwZW5kQ2hpbGQoaW5mbzMpO1xuICAgIGNvbnN0IGhlYWQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGhlYWQzLnRleHRDb250ZW50ID0gXCJCdXR0ZXJiZWVyXCI7XG4gICAgaW5mbzMuYXBwZW5kQ2hpbGQoaGVhZDMpO1xuICAgIGNvbnN0IGJsdXJiMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiMy50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlwiO1xuICAgIGluZm8zLmFwcGVuZENoaWxkKGJsdXJiMyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMyk7XG5cbiAgICBjb25zdCBjYXJkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQ0LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm80LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNhcmQ0LmFwcGVuZENoaWxkKGluZm80KTtcbiAgICBjb25zdCBoZWFkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBoZWFkNC50ZXh0Q29udGVudCA9IFwiUHVtcGtpbiBKdWljZVwiO1xuICAgIGluZm80LmFwcGVuZENoaWxkKGhlYWQ0KTtcbiAgICBjb25zdCBibHVyYjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjQudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIjtcbiAgICBpbmZvNC5hcHBlbmRDaGlsZChibHVyYjQpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDQpO1xuXG4gICAgY29uc3QgY2FyZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkNS5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvNS5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjYXJkMS5hcHBlbmRDaGlsZChpbmZvNSk7XG4gICAgY29uc3QgaGVhZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgaGVhZDUudGV4dENvbnRlbnQgPSBcIk1lYWRcIjtcbiAgICBpbmZvNS5hcHBlbmRDaGlsZChoZWFkNSk7XG4gICAgY29uc3QgYmx1cmI1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmI1LnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCI7XG4gICAgaW5mbzUuYXBwZW5kQ2hpbGQoYmx1cmI1KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQ1KTtcblxuICAgIGNvbnN0IG1haW5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtYWlubWVudS50ZXh0Q29udGVudCA9IFwiTWFpbiBNZW51XCI7XG4gICAgbWFpbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvYWRNZW51KCk7XG4gICAgfSlcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5tZW51KTtcbiAgfSIsImltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi4vbWVudS5qcyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkRGVzc2VydHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDEuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzEuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY2FyZDEuYXBwZW5kQ2hpbGQoaW5mbzEpO1xuICAgIGNvbnN0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGhlYWQxLnRleHRDb250ZW50ID0gXCJTcG90dGVkIERpY2tcIjtcbiAgICBpbmZvMS5hcHBlbmRDaGlsZChoZWFkMSk7XG4gICAgY29uc3QgYmx1cmIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmIxLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCI7XG4gICAgaW5mbzEuYXBwZW5kQ2hpbGQoYmx1cmIxKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQxKTtcblxuICAgIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDIuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzIuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY2FyZDIuYXBwZW5kQ2hpbGQoaW5mbzIpO1xuICAgIGNvbnN0IGhlYWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGhlYWQyLnRleHRDb250ZW50ID0gXCJUcmVhY2xlIFRhcnRcIjtcbiAgICBpbmZvMi5hcHBlbmRDaGlsZChoZWFkMik7XG4gICAgY29uc3QgYmx1cmIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmIyLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCI7XG4gICAgaW5mbzIuYXBwZW5kQ2hpbGQoYmx1cmIyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQyKTtcblxuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDMuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzMuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY2FyZDMuYXBwZW5kQ2hpbGQoaW5mbzMpO1xuICAgIGNvbnN0IGhlYWQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGhlYWQzLnRleHRDb250ZW50ID0gXCJDaG9jb2xhdGUgUHVkZGluZ1wiO1xuICAgIGluZm8zLmFwcGVuZENoaWxkKGhlYWQzKTtcbiAgICBjb25zdCBibHVyYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjMudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIjtcbiAgICBpbmZvMy5hcHBlbmRDaGlsZChibHVyYjMpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDMpO1xuXG4gICAgY29uc3QgY2FyZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkNC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvNC5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjYXJkNC5hcHBlbmRDaGlsZChpbmZvNCk7XG4gICAgY29uc3QgaGVhZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgaGVhZDQudGV4dENvbnRlbnQgPSBcIkphbSBEb3VnaG51dHNcIjtcbiAgICBpbmZvNC5hcHBlbmRDaGlsZChoZWFkNCk7XG4gICAgY29uc3QgYmx1cmI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmI0LnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCI7XG4gICAgaW5mbzQuYXBwZW5kQ2hpbGQoYmx1cmI0KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQ0KTtcblxuICAgIGNvbnN0IG1haW5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtYWlubWVudS50ZXh0Q29udGVudCA9IFwiTWFpbiBNZW51XCI7XG4gICAgbWFpbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvYWRNZW51KCk7XG4gICAgfSlcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5tZW51KTtcbiAgfSIsImltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi4vbWVudS5qcyc7XG5cbmV4cG9ydCBjb25zdCBsb2FkRGlzaGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiU2lnbmF0dXJlIERpc2hlc1wiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDEuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzEuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY2FyZDEuYXBwZW5kQ2hpbGQoaW5mbzEpO1xuICAgIGNvbnN0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGhlYWQxLnRleHRDb250ZW50ID0gXCJCYW5nZXJzIGFuZCBNYXNoXCI7XG4gICAgaW5mbzEuYXBwZW5kQ2hpbGQoaGVhZDEpO1xuICAgIGNvbnN0IGJsdXJiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiMS50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlwiO1xuICAgIGluZm8xLmFwcGVuZENoaWxkKGJsdXJiMSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkMSk7XG5cbiAgICBjb25zdCBjYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQyLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm8yLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNhcmQyLmFwcGVuZENoaWxkKGluZm8yKTtcbiAgICBjb25zdCBoZWFkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBoZWFkMi50ZXh0Q29udGVudCA9IFwiU3RlYWsgYW5kIEtpZG5leSBQaWVcIjtcbiAgICBpbmZvMi5hcHBlbmRDaGlsZChoZWFkMik7XG4gICAgY29uc3QgYmx1cmIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmIyLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCI7XG4gICAgaW5mbzIuYXBwZW5kQ2hpbGQoYmx1cmIyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQyKTtcblxuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZDMuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgaW5mbzMuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY2FyZDMuYXBwZW5kQ2hpbGQoaW5mbzMpO1xuICAgIGNvbnN0IGhlYWQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGhlYWQzLnRleHRDb250ZW50ID0gXCJQZWEgU291cFwiO1xuICAgIGluZm8zLmFwcGVuZENoaWxkKGhlYWQzKTtcbiAgICBjb25zdCBibHVyYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjMudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIjtcbiAgICBpbmZvMy5hcHBlbmRDaGlsZChibHVyYjMpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDMpO1xuXG4gICAgY29uc3QgY2FyZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkNC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvNC5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjYXJkNC5hcHBlbmRDaGlsZChpbmZvNCk7XG4gICAgY29uc3QgaGVhZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgaGVhZDQudGV4dENvbnRlbnQgPSBcIllvcmtzaGlyZSBQdWRkaW5nXCI7XG4gICAgaW5mbzQuYXBwZW5kQ2hpbGQoaGVhZDQpO1xuICAgIGNvbnN0IGJsdXJiNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsdXJiNC50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlwiO1xuICAgIGluZm80LmFwcGVuZENoaWxkKGJsdXJiNCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkNCk7XG5cbiAgICBjb25zdCBjYXJkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5mbzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQ1LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGluZm81LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgIGNhcmQ1LmFwcGVuZENoaWxkKGluZm81KTtcbiAgICBjb25zdCBoZWFkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBoZWFkNS50ZXh0Q29udGVudCA9IFwiU2hlcGhlcmRzIFBpZVwiO1xuICAgIGluZm81LmFwcGVuZENoaWxkKGhlYWQ1KTtcbiAgICBjb25zdCBibHVyYjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBibHVyYjUudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIjtcbiAgICBpbmZvNS5hcHBlbmRDaGlsZChibHVyYjUpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZDUpO1xuXG4gICAgY29uc3QgY2FyZDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm82ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkNi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBpbmZvNi5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICBjYXJkNi5hcHBlbmRDaGlsZChpbmZvNik7XG4gICAgY29uc3QgaGVhZDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgaGVhZDYudGV4dENvbnRlbnQgPSBcIlRvYWQgaW4gdGhlIEhvbGVcIjtcbiAgICBpbmZvNi5hcHBlbmRDaGlsZChoZWFkNik7XG4gICAgY29uc3QgYmx1cmI2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmI2LnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCI7XG4gICAgaW5mbzYuYXBwZW5kQ2hpbGQoYmx1cmI2KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQ2KTtcblxuICAgIGNvbnN0IG1haW5tZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtYWlubWVudS50ZXh0Q29udGVudCA9IFwiTWFpbiBNZW51XCI7XG4gICAgbWFpbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvYWRNZW51KCk7XG4gICAgfSlcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5tZW51KTtcbiAgfSIsImltcG9ydCB7IGxvYWRCZXZlcmFnZXMgfSBmcm9tICcuL21lbnUtcGFnZXMvYmV2ZXJhZ2VzLmpzJztcbmltcG9ydCB7IGxvYWREaXNoZXMgfSBmcm9tICcuL21lbnUtcGFnZXMvZGlzaGVzLmpzJztcbmltcG9ydCB7IGxvYWREZXNzZXJ0cyB9IGZyb20gJy4vbWVudS1wYWdlcy9kZXNzZXJ0cy5qcyc7XG5cblxuZXhwb3J0IGNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25zXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuICBjb25zdCBiZXZlcmFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBiZXZlcmFnZXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xuICBiZXZlcmFnZXMudGV4dENvbnRlbnQgPSBcIkJldmVyYWdlc1wiO1xuICBiZXZlcmFnZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkQmV2ZXJhZ2VzKCk7XG4gIH0pXG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQoYmV2ZXJhZ2VzKTtcbiAgY29uc3QgZGlzaGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGlzaGVzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgZGlzaGVzLnRleHRDb250ZW50ID0gXCJTaWduYXR1cmUgRGlzaGVzXCI7XG4gIGRpc2hlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWREaXNoZXMoKTtcbiAgfSlcbiAgb3B0aW9ucy5hcHBlbmRDaGlsZChkaXNoZXMpO1xuICBjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlc3NlcnRzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgZGVzc2VydHMudGV4dENvbnRlbnQgPSBcIkRlc3NlcnRzXCI7XG4gIGRlc3NlcnRzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZERlc3NlcnRzKCk7XG4gIH0pXG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQoZGVzc2VydHMpO1xufSIsImV4cG9ydCBjb25zdCBsb2FkU2l0ZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRoZSBMZWFreSBDYXVsZHJvblwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2YmFyKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGhvbWUpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xuICBhYm91dC50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGFib3V0KTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBjb25zdCBibHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJsdXJiLmNsYXNzTGlzdC5hZGQoXCJibHVyYlwiKTtcbiAgYmx1cmIudGV4dENvbnRlbnQgPSBcIkZpcnN0LXJhdGUgZm9vZCwgZHJpbmssIGFuZCBsaXZpbmcgcXVhcnRlcnMgZm9yIHRoZSB0cmF2ZWxsaW5nIHdpdGNoIG9yIHdpemFyZCwgb3Igc2ltcGx5IHRob3NlIGhlYWRpbmcgdG8gRGlhZ29uIEFsbGV5XCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYmx1cmIpO1xuICBjb25zdCBsZWFybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxlYXJuLmNsYXNzTGlzdC5hZGQoXCJsZWFyblwiKTtcbiAgbGVhcm4udGV4dENvbnRlbnQgPSBcIkxlYXJuIE1vcmVcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChsZWFybik7XG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc29sZS5sb2coXCJFdmVyeXRoaW5nIGlzIGxpbmtlZC5cIik7XG5cbiBpbXBvcnQgeyBsb2FkU2l0ZSB9IGZyb20gXCIuL3NpdGUuanNcIjtcblxuaW1wb3J0IHsgbG9hZENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5pbXBvcnQgeyBsb2FkSG9tZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiXG5pbXBvcnQgeyBsb2FkQWJvdXQgfSBmcm9tIFwiLi9hYm91dC5qc1wiO1xuXG4vLyBsb2FkQ29udGFjdCgpO1xuXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkQ29udGFjdCgpO1xufSlcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbG9hZEhvbWUoKTtcbn0pXG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvYWRNZW51KCk7XG59KVxuXG5jb25zdCBsZWFybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVhcm5cIik7XG5sZWFybi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2FkQWJvdXQoKTtcbn0pXG5cbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dFwiKTtcbmFib3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvYWRBYm91dCgpO1xufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9