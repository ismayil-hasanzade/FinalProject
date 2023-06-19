const nav = document.getElementById("nav");
const navbtn = document.querySelector(".fa-bars");
const secretmenu = document.querySelector(".secretmenu");
const xbtn = document.querySelector(".pageNavIcon");
const searchIcon = document.querySelector(".searchIcon");
const serch = document.querySelector(".search");
const searchbutton = document.querySelectorAll(".searchbutton");
const basketbtn = document.querySelectorAll(".basketbtn");
const shoppingbtn = document.querySelector(".shoppingbtn");
const shopping_cart = document.querySelector(".shopping_cart");
const back = document.querySelector(".back");
const shoppingmenu = document.querySelector(".shoppingmenu");
const shopping_content = document.querySelector(".shopping_content");
const productvalue = document.querySelector(".productvalue");
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
function disableScroll() {
  document.body.style.overflow = "hidden";
}
function enableScroll() {
  document.body.style.overflow = "auto";
}
const myEventHandler = () => {
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
};
const searchevent = () => {
  serch.style.cssText = "display:flex";
};
basketbtn.forEach((element) => {
  element.addEventListener("click", myEventHandler);
});
searchbutton.forEach((element) => {
  element.addEventListener("click", searchevent);
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
//basket append//
basket_arr = JSON.parse(localStorage.getItem("basket"));
basket_arr.forEach((element) => {
  const productbox = document.createElement("div");
  const productabout = document.createElement("div");
  const productimagediv = document.createElement("div");
  const producta = document.createElement("a");
  const productimage = document.createElement("img");
  const productcontent = document.createElement("div");
  const productname = document.createElement("div");
  const productnamea = document.createElement("a");
  const p = document.createElement("p");
  const productcolor = document.createElement("p");
  const sumbox = document.createElement("div");
  const productminus = document.createElement("div");
  const productnumber = document.createElement("div");
  const productplus = document.createElement("div");
  const productclose = document.createElement("div");
  const closebtn = document.createElement("i");
  const productvalue = document.createElement("div");
  productbox.className = "productbox";
  productabout.className = "productabout";
  productimagediv.className = "productimage";
  productcontent.className = "productcontent";
  productname.className = "productname";
  productcolor.className = "productcolor";
  sumbox.className = "sumbox";
  productminus.className = "productminus";
  productnumber.className = "productnumber";
  productplus.className = "productbox";
  productclose.className = "productclose";
  closebtn.className = "fa-regular fa-circle-xmark";
  productvalue.className = "productbox";
  productbox.append(productabout, productclose);
  productabout.append(productimage, productcontent);
  productimagediv.append(producta);
  producta.append(productimage);
  productcontent.append(productname, sumbox);
  productname.append(productnamea, p, productcolor);
  sumbox.append(productminus, productnumber, productplus);
  productclose.append(closebtn, productvalue);
  producta.href = "product.html#" + element.id;
  producta.target = "_blank";
  productimage.src = element.min_imgs;
  productnamea.href = "product.html#" + element.id;
  productnamea.innerText = element.name;
  p.innerText = "-";
  productcolor.innerText = element.color;
  productvalue.innerText = element.price.min_price;
  shopping_content.appendChild(productbox);
  console.log(element.min_imgs);
});
