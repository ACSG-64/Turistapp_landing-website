const mainMenu = document.getElementById("menu")

window.addEventListener("scroll", () => {
    if(this.scrollY > 0) {
        mainMenu.classList.add("floating_menu")
    } else {
        mainMenu.classList.remove("floating_menu")
    }
});
