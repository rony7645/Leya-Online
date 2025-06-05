const menuItem = document.querySelector(".has-Livros-mega a");
const megamenu = document.getElementById("livrosMegaMenu");

function showMenu() {
  megamenu.classList.add("show");
}

function hideMenu() {
  megamenu.classList.remove("show");
}

menuItem.addEventListener("mouseenter", showMenu);
menuItem.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!megamenu.matches(":hover") && !menuItem.matches(":hover")) {
      hideMenu();
    }
  }, 100);
});

megamenu.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!megamenu.matches(":hover") && !menuItem.matches(":hover")) {
      hideMenu();
    }
  }, 100);
});

megamenu.addEventListener("mouseenter", showMenu);
