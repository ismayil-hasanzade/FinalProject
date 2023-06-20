const cards = document.querySelector(".cards");
const categorys = document.querySelector(".categorys");
const featurecategories = document.querySelector(".featurecategories");

// Slick CODE
$(".cards").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

fetch("http://localhost:3000/Product")
  .then((res) => res.json())
  .then((data) => {
    let basket_arr = [];

    for (let i = 0; i < 4; i++) {
      const box = document.createElement("div");
      const a = document.createElement("a");
      const img = document.createElement("img");
      const abouts = document.createElement("div");
      const span = document.createElement("span");
      const p = document.createElement("p");
      box.className = "box";
      abouts.className = "abouts";
      img.src = data[i].min_imgs;
      span.innerText = data[i].categorys.category_a;
      p.innerText = data[i].stock + " Products";
      let categoryname = data[i].categorys.category_a;
      let new_category = categoryname.replace(/\s/g, "");
      a.href = new_category.toLowerCase() + ".html";
      abouts.append(span, p);
      a.append(img);
      box.append(a, abouts);
      categorys.appendChild(box);
    }

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
      const colors = document.createElement("div");
      const black = document.createElement("div");
      const bronze = document.createElement("div");
      const gold = document.createElement("div");
      box.className = "box";
      sale.className = "sale";
      options.className = "options";
      basket.className = "basket";
      basketi.className = "fa-solid fa-basket-shopping";
      view.className = "view";
      deleti.className = "fa-solid fa-trash";
      imga.href = "product.html";
      imga.target = "_blank";
      productabout.className = "productabout";
      productname.className = "productname";
      price.className = "price";
      minprice.className = "minprice";
      maxprice.className = "maxprice";
      colors.className = "colors";
      bronze.className = "bronze";
      black.className = "black";
      gold.className = "gold";
      sale.innerText = "Sale";
      imga.href = "product.html#" + data[i].id;
      img.src = data[i].imgs;
      productname.innerText = data[i].name;
      minprice.innerText = data[i].price.min_price;
      span.innerText = "-";
      maxprice.innerText = data[i].price.max_price;
      colors.append(black, bronze, gold);
      price.append(minprice, span, maxprice);
      productabout.append(productname, price, colors);
      imga.append(img);
      basketa.append(basketi);
      basket.append(basketa);
      view.append(deleti);
      options.append(basket, view);
      box.append(sale, options, imga, productabout);
      featurecategories.appendChild(box);
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

      // Reng değiştirme //

      black.addEventListener("click", () => {
        img.src = black_img;

        if (
          minprice.innerText === min_price &&
          maxprice.innerText === max_price
        ) {
          color_name = "black";
          localStorage.setItem("color", JSON.stringify(color_name));
          span.style.display = "none";
          minprice.style.opacity = "50%";
          minprice.innerHTML = `<del>${black_max}</del>`;
          maxprice.innerHTML = min_price;
        } else {
          span.style.display = "block";
          minprice.style.opacity = "100%";
          minprice.innerText = min_price;
          maxprice.innerText = max_price;
          img.src = data[i].imgs;
          color_name = data[i].color;
          color = data[i].color;
          localStorage.setItem("color", JSON.stringify(color));
        }
      });

      bronze.addEventListener("click", () => {
        img.src = bronze_img;

        if (
          minprice.innerText === min_price &&
          maxprice.innerText === max_price
        ) {
          color_name = "bronze";
          span.style.display = "none";
          localStorage.setItem("color", JSON.stringify(color_name));

          minprice.style.opacity = "50%";
          minprice.innerHTML = `<del>${bronze_max}</del>`;
          maxprice.innerHTML = min_price;
        } else {
          span.style.display = "block";
          minprice.style.opacity = "100%";
          minprice.innerText = min_price;
          maxprice.innerText = max_price;
          img.src = data[i].imgs;
          color_name = data[i].color;
          color = data[i].color;
          localStorage.setItem("color", JSON.stringify(color));
        }
      });

      gold.addEventListener("click", () => {
        img.src = gold_img;
        if (
          minprice.innerText === min_price &&
          maxprice.innerText === max_price
        ) {
          color_name = "gold";
          localStorage.setItem("color", JSON.stringify(color_name));
          span.style.display = "none";
          minprice.style.opacity = "50%";
          minprice.innerHTML = `<del>${gold_max}</del>`;
          maxprice.innerHTML = min_price;
        } else {
          span.style.display = "block";
          minprice.style.opacity = "100%";
          minprice.innerText = min_price;
          maxprice.innerText = max_price;
          img.src = data[i].imgs;
          color_name = data[i].color;
          color = data[i].color;
          localStorage.setItem("color", JSON.stringify(color));
        }
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
