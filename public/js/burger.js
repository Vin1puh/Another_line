let button = document.getElementById("burger_button");
let menu = document.getElementById("burger_menu");
let close = document.getElementById("close_pouppup");

button.addEventListener("click", function() {
    menu.classList.add("flex");
})
close.addEventListener("click", function() {
    menu.classList.remove("flex");
})