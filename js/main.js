const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

function toggleMenu() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
        menuBtn.setAttribute("aria-expanded", "false");
    } else {
        menu.style.display = "block";
        menuBtn.setAttribute("aria-expanded", "true");
    }
}

menuBtn.addEventListener("click", toggleMenu);