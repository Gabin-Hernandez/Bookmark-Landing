const leftBtn = document.getElementById("simple-btn");
const centerBtn = document.getElementById("speedy-btn");
const rightBtn = document.getElementById("easy-btn");
const container = document.querySelector(".responsive-fts");

const divOne = document.querySelector(".responsive-one");
const divTwo = document.querySelector(".responsive-two");
const divThree = document.querySelector(".responsive-three");

window.addEventListener("DOMContentLoaded", () => {
    hideAll(); // Esta es tu función que oculta todos los divs
    divOne.style.display = "flex"; // Muestras solo el primero
});

function hideAll() {
    divOne.style.display = "none";
    divTwo.style.display = "none";
    divThree.style.display = "none";
}

leftBtn.addEventListener("click", () => {
    hideAll();
    divOne.style.display = "flex";
});

centerBtn.addEventListener("click", () => {
    hideAll();
    divTwo.style.display = "flex";
});

rightBtn.addEventListener("click", () => {
    hideAll();
    divThree.style.display = "flex";
});