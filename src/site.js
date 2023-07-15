export const loadSite = (() => {
  const container = document.getElementById("container");
  const header = document.createElement("div");
  header.classList.add("header");
  container.appendChild(header);
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  header.appendChild(navbar);
  const home = document.createElement("button");
  home.classList.add("home");
  navbar.appendChild(home);
  const menu = document.createElement("button");
  menu.classList.add("menu");
  navbar.appendChild(menu);
  const contact = document.createElement("button");
  contact.classList.add("contact");
  navbar.appendChild(contact);
})();