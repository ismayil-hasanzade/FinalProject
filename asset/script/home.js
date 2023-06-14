const nav = document.getElementById("nav");
const navbtn = document.querySelector(".fa-bars");
const secretmenu = document.querySelector(".secretmenu");
const xbtn = document.querySelector(".pageNavIcon");
const searchIcon = document.querySelector(".searchIcon");
const serch = document.querySelector(".search");
const searchbutton = document.querySelector(".searchbutton");
const cards = document.querySelector(".cards");
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
