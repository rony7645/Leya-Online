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

// Offcanvas sliding effect

document.querySelectorAll(".nav-link[data-submenu]").forEach((link) => {
  link.addEventListener("click", function () {
    const submenuId = this.getAttribute("data-submenu");
    const mainMenu = document.getElementById("main-menu");
    const submenu = document.getElementById(submenuId);
    mainMenu.classList.add("hide");
    submenu.classList.add("active");
  });
});

document.querySelectorAll(".back-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const mainMenu = document.getElementById("main-menu");
    const submenus = document.querySelectorAll(".submenu");
    submenus.forEach((sub) => sub.classList.remove("active"));
    mainMenu.classList.remove("hide");
  });
});
