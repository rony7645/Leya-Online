import "bootstrap";
import "../scss/start.scss";

import "./headerSearchBar.js";
import "./swiper.config.js";

// Mobile Nav Js

const userBtn = document.getElementById("user-btn");
const mobileSubmenuContainer = document.querySelector(
  ".mobile-submenu-container"
);

// Toggle submenu on button click
userBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  mobileSubmenuContainer.classList.toggle("submenu-show");
});

mobileSubmenuContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Click outside to close
document.addEventListener("click", () => {
  mobileSubmenuContainer.classList.remove("submenu-show");
});
