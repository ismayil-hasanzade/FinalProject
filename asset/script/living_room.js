const categorys = document.querySelector(".categorys");
const showingp = document.querySelector(".showingp");
let count = 0;

fetch(`http://localhost:3000/Product`)
  .then((res) => res.json())
  .then((data) => {
    let say = 0;
    data.forEach((element) => {
      const category_a = element.categorys.category_a;
      const category_b = element.categorys.category_b;
      if (category_a == "Living Room" || category_b == "Living Room") {
        say++;
        let basket_arr = [];
        const id = element.id;
        const min_price = element.price.min_price;
        const max_price = element.price.max_price;
        const bronze_max = element.price.bronze_max;
        const gold_max = element.price.gold_max;
        const black_max = element.price.black_max;
        const bronze_img = element.colors_imgs.bronze;
        const black_img = element.colors_imgs.black;
        const gold_img = element.colors_imgs.gold;

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
        imga.href = "product.html#" + element.id;
        img.src = element.imgs;
        productname.innerText = element.name;
        minprice.innerText = element.price.min_price;
        span.innerText = "-";
        maxprice.innerText = element.price.max_price;
        colors.append(black, bronze, gold);
        price.append(minprice, span, maxprice);
        productabout.append(productname, price, colors);
        imga.append(img);
        basketa.append(basketi);
        basket.append(basketa);
        view.append(deleti);
        options.append(basket, view);
        box.append(sale, options, imga, productabout);
        categorys.appendChild(box);
        let color_name = element.color;
        let color = element.color;
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

        // Reng deyisme //

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
            img.src = element.imgs;
            color_name = element.color;
            color = element.color;
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
            img.src = element.imgs;
            color_name = element.color;
            color = element.color;
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
            img.src = element.imgs;
            color_name = element.color;
            color = element.color;
            localStorage.setItem("color", JSON.stringify(color));
          }
        });
        imga.addEventListener("click", () => {
          localStorage.setItem("color", JSON.stringify(color_name));
        });

        // Basket //
        if (localStorage.getItem("basket") !== null) {
          basket_arr = JSON.parse(localStorage.getItem("basket"));
        }
        basket.addEventListener("click", () => {
          if (localStorage.getItem("users") !== null) {
            if (basket_arr.find((x) => x.id === data[i].id) === undefined) {
              basket_arr.push({
                ...data[i],
                count: 1,
                main_color: img.src,
                color: color_name,
              });
              window.location.reload();
            } else {
              if (
                basket_arr.find((x) => x.main_color === img.src) === undefined
              ) {
                basket_arr.push({
                  ...data[i],
                  count: 1,
                  main_color: img.src,
                  color: color_name,
                });
                window.location.reload();
              }
            }
            localStorage.setItem("basket", JSON.stringify(basket_arr));
          } else {
            alert("Login Edin");
            window.open("login.html");
          }
        });
      }
    });
    showingp.innerText = "Showing " + say + " Results";
  });
