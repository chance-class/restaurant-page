import { loadMenu } from '../menu.js';

export const loadDishes = () => {
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
      loadMenu();
    })
    main.appendChild(mainmenu);
  }