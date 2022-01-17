const menu = document.querySelector(".nav-mobile");
const menuItems = document.querySelectorAll(".li-mobile");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.visibility = "hidden";
    menuIcon.style.visibility = "visible";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.visibility = "visible";
    menuIcon.style.visibility = "hidden";
  }
}

hamburger.addEventListener("click", toggleMenu);