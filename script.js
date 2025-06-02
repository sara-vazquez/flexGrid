console.log("Hello, World!");

const btn = document.querySelector("#cambiar-color"); // Selecciona por id

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);

document.addEventListener("DOMContentLoaded", function (){
    const boton = document.querySelector(".button-toggle");
    const menuLinks = document.querySelector(".menu");

    boton.addEventListener("click", function() {
        menuLinks.classList.toggle("open");
    })

})