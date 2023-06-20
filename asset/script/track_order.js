const name = document.getElementById("name");
const minprice = document.getElementById("minprice");
const maxprice = document.getElementById("maxprice");
const blackmax = document.getElementById("blackmax");
const bronzemax = document.getElementById("bronzemax");
const goldmax = document.getElementById("goldmax");
const stock = document.getElementById("stock");
const imgs = document.getElementById("imgs");
const min_imgs = document.getElementById("min_imgs");
const blackimage = document.getElementById("blackimage");
const bronzeimage = document.getElementById("bronzeimage");
const goldimage = document.getElementById("goldimage");
const post = document.getElementById("post");
const colors = document.querySelectorAll(".colors input");
let color;
let categorya;
let categoryb;
post.addEventListener("click", () => {
  if (
    name.value == "" ||
    minprice.value == "" ||
    maxprice.value == "" ||
    blackmax.value == "" ||
    bronzemax.value == "" ||
    goldmax.value == "" ||
    stock.value == "" ||
    imgs.value == "" ||
    min_imgs.value == "" ||
    blackimage.value == "" ||
    bronzeimage.value == "" ||
    goldimage.value == ""
  ) {
    alert("Melumatlari tam daxil edin");
  } else {
    let selectedColor;
    colors.forEach((color) => {
      if (color.checked) {
        selectedColor = color.previousElementSibling.textContent;
      }
    });
    if (selectedColor) {
      color = selectedColor;
    }
    const categoryaInputs = document.querySelectorAll(
      ".categorya input[type='radio']"
    );
    categoryaInputs.forEach((input) => {
      if (input.checked) {
        categorya = input.previousElementSibling.textContent;
      }
    });
    const categorybInputs = document.querySelectorAll(
      ".categoryb input[type='radio']"
    );
    categorybInputs.forEach((input) => {
      if (input.checked) {
        categoryb = input.previousElementSibling.textContent;
      }
    });

    fetch("http://localhost:3000/Product", {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        color: color,
        price: {
          min_price: minprice.value,
          max_price: maxprice.value,
          black_max: blackmax.value,
          gold_max: goldmax.value,
          bronze_max: bronzemax.value,
        },
        imgs: imgs.value,
        min_imgs: min_imgs.value,
        colors_imgs: {
          black: blackimage.value,
          bronze: bronzeimage.value,
          gold: goldimage.value,
        },
        categorys: {
          category_a: categorya,
          category_b: categoryb,
        },
        stock: stock.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }
});
