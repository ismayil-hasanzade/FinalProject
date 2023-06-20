const productimages = document.querySelector(".productimages");
const id = window.location.hash.slice(1);
const categorya = document.querySelector(".categorya");
const categoryb = document.querySelector(".categoryb");
const productnameh3 = document.querySelector(".productnameh3");
const minprice = document.querySelector(".minprice");
const maxprice = document.querySelector(".maxprice");
const basisimage = document.querySelector(".basisimage img");
const moreimga = document.querySelector(".moreimga");
const moreimgb = document.querySelector(".moreimgb");
const color = JSON.parse(localStorage.getItem("color"));
const categorys = document.querySelector(".categorys");
const black = document.querySelector(".black");
const bronze = document.querySelector(".bronze");
const gold = document.querySelector(".gold");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const productsum = document.querySelector(".box .sum");
const addbutton = document.querySelector(".addbutton");
fetch(`http://localhost:3000/Product/${id}`)
  .then((res) => res.json())
  .then((data) => {
    let color_name = data.color;
    basisimage.src = data.colors_imgs[color];
    if (basisimage.src == data.colors_imgs.black) {
      moreimga.src = data.colors_imgs.bronze;
      moreimgb.src = data.colors_imgs.gold;
    } else if (basisimage.src == data.colors_imgs.gold) {
      moreimga.src = data.colors_imgs.bronze;
      moreimgb.src = data.colors_imgs.black;
    } else {
      moreimga.src = data.colors_imgs.gold;
      moreimgb.src = data.colors_imgs.black;
    }
    black.addEventListener("click", () => {
      basisimage.src = data.colors_imgs.black;
      moreimga.src = data.colors_imgs.bronze;
      moreimgb.src = data.colors_imgs.gold;
    });
    gold.addEventListener("click", () => {
      basisimage.src = data.colors_imgs.gold;
      moreimga.src = data.colors_imgs.bronze;
      moreimgb.src = data.colors_imgs.black;
    });
    bronze.addEventListener("click", () => {
      basisimage.src = data.colors_imgs.bronze;
      moreimga.src = data.colors_imgs.gold;
      moreimgb.src = data.colors_imgs.black;
    });
    categorya.innerText = data.categorys.category_a + "/";
    categoryb.innerText = data.categorys.category_b + "/";
    productnameh3.innerText = data.name;
    minprice.innerText = "$" + data.price.min_price;
    maxprice.innerText = data.price.max_price;
    productsum.innerText = "1";
    plus.addEventListener("click", () => {
      productsum.innerText++;
    });
    minus.addEventListener("click", () => {
      if (productsum.innerText > 1) {
        productsum.innerText--;
      }
    });

    let basket_arr = [];
    if (localStorage.getItem("basket") !== null) {
      basket_arr = JSON.parse(localStorage.getItem("basket"));
    }
    //Baskete Elave etme//
    addbutton.addEventListener("click", () => {
      if (basket_arr.find((x) => x.id === data.id) === undefined) {
        basket_arr.push({
          ...data,
          count: productsum.innerText,
          main_color: basisimage.src,
          color: color_name,
        });
      } else {
        if (
          basket_arr.find((x) => x.main_color === basisimage.src) === undefined
        ) {
          basket_arr.push({
            ...data,
            count: productsum.innerText,
            main_color: basisimage.src,
            color: color_name,
          });
        }
      }
      localStorage.setItem("basket", JSON.stringify(basket_arr));
    });
    const commentsbox = document.querySelector(".commentsbox");
    const box = document.createElement("div");
    box.className = "box";
    const image = document.createElement("div");
    image.className = "image";
    const i = document.createElement("i");
    i.className = "fa-solid fa-user";
    const content = document.createElement("content");
    content.className = "content";
    const span = document.createElement("span");
    const p = document.createElement("p");
    image.append(i);
    content.append(span, p);
    box.append(image, content);
    commentsbox.appendChild(box);
  });
//
fetch("http://localhost:3000/Product")
  .then((res) => res.json())
  .then((data) => {
    let basket_arr = [];
    for (let i = 0; i < 4; i++) {
      const id = data[i].id;
      const min_price = data[i].price.min_price;
      const max_price = data[i].price.max_price;
      const bronze_max = data[i].price.bronze_max;
      const gold_max = data[i].price.gold_max;
      const black_max = data[i].price.black_max;
      const bronze_img = data[i].colors_imgs.bronze;
      const black_img = data[i].colors_imgs.black;
      const gold_img = data[i].colors_imgs.gold;

      const box = document.createElement("div");
      const sale = document.createElement("div");
      const options = document.createElement("div");
      const a = document.createElement("a");
      const productabout = document.createElement("div");
      const basket = document.createElement("div");
      const basketa = document.createElement("a");
      const basketi = document.createElement("i");
      const deleti = document.createElement("i");
      const view = document.createElement("div");
      const imga = document.createElement("a");
      const img = document.createElement("img");
      const productname = document.createElement("div");
      const price = document.createElement("div");
      const minprice = document.createElement("div");
      const span = document.createElement("span");
      const maxprice = document.createElement("div");

      box.className = "box";
      sale.className = "sale";
      options.className = "options";
      basket.className = "basket";
      basketi.className = "fa-solid fa-basket-shopping";
      view.className = "view";
      deleti.className = "fa-solid fa-trash";
      imga.href = "product.html#" + id;
      imga.target = "_blank";
      productabout.className = "productabout";
      productname.className = "productname";
      price.className = "price";
      minprice.className = "minprice";
      maxprice.className = "maxprice";
      sale.innerText = "Sale";
      imga.href = "product.html#" + data[i].id;
      img.src = data[i].imgs;
      productname.innerText = data[i].name;
      minprice.innerText = "$" + data[i].price.min_price;
      span.innerText = "-";
      maxprice.innerText = data[i].price.max_price;
      price.append(minprice, span, maxprice);
      productabout.append(productname, price);
      imga.append(img);
      basketa.append(basketi);
      basket.append(basketa);
      view.append(deleti);
      options.append(basket, view);
      box.append(sale, options, imga, productabout);
      categorys.appendChild(box);
      let color_name = data[i].color;
      let color = data[i].color;
      // ELEMENT REMOVE //
      deleti.addEventListener("click", () => {
        box.remove();
        fetch(`http://localhost:3000/Product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Deleted");
          });
      });
      imga.addEventListener("click", () => {
        localStorage.setItem("color", JSON.stringify(color_name));
      });
      if (localStorage.getItem("basket") !== null) {
        basket_arr = JSON.parse(localStorage.getItem("basket"));
      }
      // Basket //
      basket.addEventListener("click", () => {
        if (basket_arr.find((x) => x.id === data[i].id) === undefined) {
          basket_arr.push({
            ...data[i],
            count: 1,
            main_color: img.src,
            color: color_name,
          });
        } else {
          if (basket_arr.find((x) => x.main_color === img.src) === undefined) {
            basket_arr.push({
              ...data[i],
              count: 1,
              main_color: img.src,
              color: color_name,
            });
          }
        }
        localStorage.setItem("basket", JSON.stringify(basket_arr));
      });
    }
  });

// //Commentleri Api a gondermek//
// const submitbtn = document.querySelector(".submitbtn");
// const nameinput = document.querySelector(".name input");
// const email = document.querySelector(".email input");
// const textarea = document.querySelector(".textarea");

// submitbtn.addEventListener("click", () => {
//   console.log("test");
//   if (nameinput.value == "" || email.value == "" || textarea.value == "") {
//     alert("Inputlari tam doldurun");
//   } else {
//     fetch(`http://localhost:3000/Product/${id}/`, {
//       method: "POST",
//       body: JSON.stringify({
//         review: textarea.value,
//         commentname: nameinput.value,
//         email: email.value,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//   }
// });
