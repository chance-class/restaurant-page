import { loadAbout } from "./about.js";

export const loadHome = () => {
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
    loadAbout();
  })
  main.appendChild(learn);
};