const nav = document.getElementById("nav");
const navbtn = document.querySelector(".fa-bars");
const secretmenu = document.querySelector(".secretmenu");
const xbtn = document.querySelector(".pageNavIcon");
const searchIcon = document.querySelector(".searchIcon");
const serch = document.querySelector(".search");
const searchbutton = document.querySelector(".searchbutton");
const basketbtn = document.querySelector(".basket");
const shoppingbtn = document.querySelector(".shoppingbtn");
const shopping_cart = document.querySelector(".shopping_cart");
const back = document.querySelector(".back");
const shoppingmenu = document.querySelector(".shoppingmenu");

navbtn.addEventListener("click", () => {
  navbtn.style.cssText = "display:none";
  secretmenu.classList.toggle("change");
  xbtn.style.cssText = `
    display:block;
    `;
});
xbtn.addEventListener("click", () => {
  secretmenu.classList.toggle("change");
  navbtn.style.cssText = "display:block";
  xbtn.style.cssText = "display:none";
});
searchIcon.addEventListener("click", () => {
  serch.style.cssText = "display:none";
});
searchbutton.addEventListener("click", () => {
  serch.style.cssText = "display:flex";
});
function disableScroll() {
  document.body.style.overflow = "hidden";
}
function enableScroll() {
  document.body.style.overflow = "auto";
}

basketbtn.addEventListener("click", () => {
  shopping_cart.style.cssText = `
  transition: transform 400ms ease-out;
          opacity: 1;
          height: auto;
          display:flex;
          `;
  shoppingmenu.style.cssText = `
          right:0;
          `;

  disableScroll();
});
shoppingbtn.addEventListener("click", () => {
  shoppingmenu.style.cssText = `
  transition: 400ms ease-in;
          right: -100%;
          `;

  setTimeout(() => {
    shopping_cart.style.cssText = `
    opacity: 0;
    height: 0;
    overflow: hidden;`;
  }, 300);

  enableScroll();
});
back.addEventListener("click", () => {
  shoppingmenu.style.cssText = `
  transition: 400ms ease-in;
          right: -100%;
          `;

  setTimeout(() => {
    shopping_cart.style.cssText = `
    opacity: 0;
    height: 0;
    overflow: hidden;`;
  }, 300);

  enableScroll();
});
