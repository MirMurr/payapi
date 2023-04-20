//Hamburger menu
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".navlinks");

/*hamburger menu X animation*/
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


if (navMenu.classList.contains('active')) {
    hamburger.classList.add('active');

}









