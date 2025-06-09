import "bootstrap";
import "../scss/start.scss";

import "./headerSearchBar.js";
import "./mega-menu.js";
import "./offcanvas.js";
import "./shop-filter.js";
import "./swiper.config.js";

const filterTags = document.getElementById("filterTags");
const filterCount = document.getElementById("filterCount");
const clearButton = document.getElementById("clearFilters");
const selected = new Set();

function updateTags() {
  filterTags.innerHTML = "";
  selected.forEach((item) => {
    const tag = document.createElement("span");
    tag.className = "filter-tag";
    tag.innerHTML = `${item} <i class="bi bi-x" data-name="${item}"></i>`;
    filterTags.appendChild(tag);
  });
  filterCount.innerHTML = `<i class="bi bi-sliders"></i> FILTROS (${selected.size})`;
  clearButton.style.display = selected.size > 0 ? "inline-block" : "none";
}

document.querySelectorAll(".filter-checkbox").forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    const label = e.target.nextElementSibling.innerText.trim();
    if (e.target.checked) {
      selected.add(label);
    } else {
      selected.delete(label);
    }
    updateTags();
  });
});

filterTags.addEventListener("click", (e) => {
  if (e.target.classList.contains("bi-x")) {
    const name = e.target.getAttribute("data-name");
    selected.delete(name);
    document.querySelectorAll(".filter-checkbox").forEach((cb) => {
      if (cb.nextElementSibling.innerText.trim() === name) {
        cb.checked = false;
      }
    });
    updateTags();
  }
});

clearButton.addEventListener("click", () => {
  selected.clear();
  document
    .querySelectorAll(".filter-checkbox")
    .forEach((cb) => (cb.checked = false));
  updateTags();
});

updateTags();
