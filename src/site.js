export const loadSite = (() => {
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