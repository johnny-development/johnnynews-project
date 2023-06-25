// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// });

// document.querySelectorAll(".nav-link").forEach((n) =>
//   n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//   })
// );

let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.onclick = function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

document.onclick = function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
};

hamburger.onscroll = function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

document.onscroll = function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
};

// preloader script

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  setTimeout(() => (loader.style.display = "none"), 2000);
});
