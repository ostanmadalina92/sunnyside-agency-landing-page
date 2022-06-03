const hamburger = document.getElementById("menu");
const menu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", function(){
    menu.classList.toggle("hidden");
})