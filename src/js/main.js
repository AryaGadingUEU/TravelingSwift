// SCSS Imports
import "../scss/main.scss";
import "../scss/planning.scss";
import "../scss/recommendation.scss";
import "../scss/aboutus.scss";
import "../scss/gallery.scss";
import "../scss/profile.scss";
import "../scss/chart.scss";

// JS Imports
import "./account_log_screen/logscreen.js";
import "./chart.js";

// Navbar Toggle
let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};

document.querySelector("#close-navbar").onclick = () => {
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

// About Section Image Change
document.querySelectorAll(".about .controls .control-btn").forEach((btn) => {
  btn.onclick = () => {
    let src = btn.getAttribute("data-src");
    document.querySelector(".about .image-container .image").src = src;
  };
});

// Slide Show
let slides = document.querySelectorAll(".book .slide");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}
