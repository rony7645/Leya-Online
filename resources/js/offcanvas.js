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
