export const loadSite = (() => {
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