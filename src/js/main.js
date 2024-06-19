// SCSS Imports
import "../scss/main.scss";
import "../scss/planning.scss";
import "../scss/planning/before.scss";
import "../scss/recommendation.scss";
import "../scss/aboutus.scss";
import "../scss/gallery.scss";
import "../scss/profile.scss";
import "../scss/chart.scss";
import "../scss/db-plan.scss";
import "../scss/recommend/destination.scss";
import "../scss/account_log_screen/logscreen.scss";

// JS Imports
import "./account_log_screen/logscreen.js";
import "./planning.js";
import "./firebase/firebase_auth.js";

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

document.querySelectorAll(".about .controls .control-btn").forEach((btn) => {
  btn.onclick = () => {
    let src = btn.getAttribute("data-src");
    document.querySelector(".about .image-container .image").src = src;
  };
});

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
