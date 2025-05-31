import "bootstrap";
import "../scss/start.scss";

import "./swiper.config.js";

const input = document.getElementById("header-search-input");
const searchWrapper = document.getElementById("search-wrapper");

input.addEventListener("focus", () => {
  searchWrapper.classList.remove("collapse");
});

