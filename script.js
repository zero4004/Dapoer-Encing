// Navbar responsive
const menuIcon = document.querySelector(".menu-btn");
const menuList = document.querySelector("#list");
function toggleMenu() {
  menuList.classList.toggle("hide");
  menuIcon.classList.toggle("show");
}

menuIcon.onclick = toggleMenu;
menuList.onclick = toggleMenu;
