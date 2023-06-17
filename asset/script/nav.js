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

let isScrollEnabled = true;

basketbtn.addEventListener("click", () => {
  if (isScrollEnabled) {
    window.scrollTo(0, 0);
    shopping_cart.style.display = "flex";
    disableScroll();
    isScrollEnabled = false;
  } else {
    enableScroll();
    isScrollEnabled = true;
  }
});
shoppingbtn.addEventListener("click", () => {
  shopping_cart.style.display = "none";
  enableScroll();
});
shopping_cart.addEventListener("click", () => {
  shopping_cart.style.display = "none";
  enableScroll();
});
