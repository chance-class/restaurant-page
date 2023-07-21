import { loadMenu } from '../menu.js';

export const loadBeverages = () => {
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
    const image1 = document.createElement("div");
    image1.innerHTML = "<img src='../src/images/tea.png' height='170px' alt='Picture of tea and crumpets'>";
    card1.appendChild(image1);
    card1.appendChild(info1);
    const head1 = document.createElement("h3");
    head1.textContent = "Tea and Crumpets";
    info1.appendChild(head1);
    const blurb1 = document.createElement("p");
    blurb1.textContent = "A pot of tea paired with our crumbly crumpets. Add a shot of Ogden's Old Firewhisky if you're bold!";
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
    const image2 = document.createElement("div");
    image2.innerHTML = "<img src='../src/images/gilly.png' height='170px' alt='Picture of gillywater'>";
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
    const image3 = document.createElement("div");
    image3.innerHTML = "<img src='../src/images/butter.png' height='170px' alt='Picture of butterbeer'>";
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
    const image4 = document.createElement("div");
    image4.innerHTML = "<img src='../src/images/pumpkin.png' height='170px' alt='Picture of pumpkin juice'>";
    card4.appendChild(image4);
    card4.appendChild(info4);
    const head4 = document.createElement("h3");
    head4.textContent = "Pumpkin Juice";
    info4.appendChild(head4);
    const blurb4 = document.createElement("p");
    blurb4.textContent = "Creamy and house-made, perfect to accompany any dish or sip on its own.";
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
    const image5 = document.createElement("div");
    image5.innerHTML = "<img src='../src/images/mead.png' height='170px' alt='Picture of mead'>";
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
      loadMenu();
    })
    main.appendChild(mainmenu);
  }