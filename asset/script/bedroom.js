const categorys = document.querySelector(".categorys");
const showingp = document.querySelector(".showingp");
let count = 0;

fetch(`http://localhost:3000/Product`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      const category_a = element.categorys.category_a;
      const category_b = element.categorys.category_b;
      if (category_a == "Bedroom" || category_b == "Bedroom") {
        count++;
        const id = element.id;
        const min_price = element.price.min_price;
        const max_price = element.price.max_price;
        const bronze_max = data[0].price.bronze_max;
        const gold_max = data[0].price.gold_max;
        const black_max = data[0].price.black_max;
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
        basketa.href = "product.html#" + element.id;
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
        //ELEMENT REMOVE//
        deleti.addEventListener("click", () => {
          box.remove();
          fetch(`http://localhost:3000/Product/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then(data);
          console.log("Deleted");
        });

        black.addEventListener("click", () => {
          img.src = black_img;
          if (
            minprice.innerText == min_price &&
            maxprice.innerText == max_price
          ) {
            span.style.display = "none";
            minprice.style.opacity = "50%";
            minprice.innerHTML = `<del>${black_max}</del>`;
            maxprice.innerHTML = min_price;
          } else {
            span.style.display = "block";
            minprice.style.opacity = "100%";
            minprice.innerText = min_price;
            maxprice.innerText = max_price;
          }
        });
        bronze.addEventListener("click", () => {
          img.src = bronze_img;
          if (
            minprice.innerText == min_price &&
            maxprice.innerText == max_price
          ) {
            span.style.display = "none";
            minprice.style.opacity = "50%";
            minprice.innerHTML = `<del>${bronze_max}</del>`;
            maxprice.innerHTML = min_price;
          } else {
            span.style.display = "block";
            minprice.style.opacity = "100%";
            minprice.innerText = min_price;
            maxprice.innerText = max_price;
          }
        });
        gold.addEventListener("click", () => {
          img.src = gold_img;

          if (
            minprice.innerText == min_price &&
            maxprice.innerText == max_price
          ) {
            span.style.display = "none";
            minprice.style.opacity = "50%";
            minprice.innerHTML = `<del>${gold_max}</del>`;
            maxprice.innerHTML = min_price;
          } else {
            span.style.display = "block";
            minprice.style.opacity = "100%";
            minprice.innerText = min_price;
            maxprice.innerText = max_price;
          }
        });
      }
    });
    showingp.innerText = "Showing " + count + " Results";
  });
