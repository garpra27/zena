const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarSticky = document.getElementById("navbar-sticky");

hamburgerMenu.addEventListener("click", () => {
  navbarSticky.classList.toggle("hidden");
});

const kategoriDropdown = document.getElementById("kategori-dropdown");
const kategoriList = document.getElementById("kategori-list");

kategoriDropdown.addEventListener("click", () => {
  kategoriList.classList.toggle("hidden");
});
