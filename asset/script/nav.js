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
const basketlip = document.querySelector(".basketli p");
const totalsum = document.querySelector(".totalsum p");
totalsum.innerText = "0";
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
if (!basket_arr) {
  basket_arr = [];
}

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
  productplus.className = "productplus";
  productclose.className = "productclose";
  closebtn.className = "fa-regular fa-circle-xmark";
  productvalue.className = "productvalue";
  productminus.innerText = "-";
  productplus.innerText = "+";
  productnumber.innerText = element.count;

  productbox.append(productabout, productclose);
  productabout.append(productimagediv, productcontent);
  productimagediv.append(producta);
  producta.append(productimage);
  productcontent.append(productname, sumbox);
  productname.append(productnamea, p, productcolor);
  sumbox.append(productminus, productnumber, productplus);
  productclose.append(closebtn, productvalue);
  producta.href = "product.html#" + element.id;
  producta.target = "_blank";
  productimage.src = element.main_color;

  productnamea.href = "product.html#" + element.id;
  productnamea.innerText = element.name;
  p.innerText = "-";
  productcolor.innerText = element.color;
  productvalue.innerText = "$" + element.price.min_price;
  shopping_content.appendChild(productbox);
  closebtn.addEventListener("click", () => {
    removeProductFromLocalStorage(element.id);
    productbox.remove();
    updateTotalSum();
  });
  let sum = +element.price.min_price;
  productvalue.innerText = "$" + element.count * sum;
  productplus.addEventListener("click", () => {
    productnumber.innerText++;
    sum = +productnumber.innerText * element.price.min_price;

    productvalue.innerText = "$" + sum;
    basket_arr[basket_arr.findIndex((x) => element.id === x.id)].count++;
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    updateTotalSum();
  });
  productminus.addEventListener("click", () => {
    if (productnumber.innerText != 0) {
      productnumber.innerText--;
      sum = +productnumber.innerText * element.price.min_price;
      productvalue.innerText = "$" + sum;
      basket_arr[basket_arr.findIndex((x) => element.id === x.id)].count--;
      localStorage.setItem("basket", JSON.stringify(basket_arr));
      updateTotalSum();
      if (productnumber.innerText == "0") {
        removeProductFromLocalStorage(element.id);
        productbox.remove();
      }
    }
  });
  const productValues = document.querySelectorAll(
    ".shopping_content .productvalue"
  );
  function updateTotalSum() {
    let sumproductvalues = 0;
    const productValues = document.querySelectorAll(
      ".shopping_content .productvalue"
    );
    productValues.forEach((element) => {
      sumproductvalues += parseFloat(element.innerText.slice(1));
    });
    totalsum.innerText = "$" + sumproductvalues.toFixed(2);
    const productnumber = document.querySelectorAll(".productnumber");
    let productnumbercount = 0;
    productnumber.forEach((element) => {
      productnumbercount += +element.innerText;
    });
    basketlip.innerText = productnumbercount;
  }

  updateTotalSum();
});
function removeProductFromLocalStorage(productId) {
  let basketArr = JSON.parse(localStorage.getItem("basket"));
  basketArr = basketArr.filter((item) => item.id !== productId);
  localStorage.setItem("basket", JSON.stringify(basketArr));
}
