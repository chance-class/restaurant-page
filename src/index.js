console.log("Everything is linked.");

 import { loadSite } from "./site.js";

import { loadContact } from "./contact.js";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js"
import { loadAbout } from "./about.js";

// loadContact();

const contact = document.querySelector(".contact");
contact.addEventListener("click", () => {
  loadContact();
})

const home = document.querySelector(".home");
home.addEventListener("click", () => {
  loadHome();
})

const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  loadMenu();
})

const learn = document.querySelector(".learn");
learn.addEventListener("click", () => {
  loadAbout();
})

const about = document.querySelector(".about");
about.addEventListener("click", () => {
  loadAbout();
})

