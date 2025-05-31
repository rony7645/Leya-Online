import "bootstrap";
import "../scss/start.scss";

import "./swiper.config.js";

const input = document.getElementById("header-search-input");
const searchWrapper = document.getElementById("search-wrapper");
const clearBtn = document.getElementById("clear-btn");

// Combined input event handler
input.addEventListener("input", () => {
  const hasValue = input.value.trim() !== "";

  // Collapse class toggle
  if (hasValue) {
    searchWrapper.classList.remove("collapse");
  } else {
    searchWrapper.classList.add("collapse");
  }

  // Show/hide clear button
  clearBtn.style.display = hasValue ? "block" : "none";
});

// Clear button click event
clearBtn.addEventListener("click", () => {
  input.value = "";
  clearBtn.style.display = "none";
  searchWrapper.classList.add("collapse"); // Collapse again when cleared
  input.focus();
});
