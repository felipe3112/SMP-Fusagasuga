'use strict'

let boton = document.getElementById("icono");
let links = document.getElementById("ul-lista");
let contador = 0;

const icono = document.getElementById('icono');

icono.addEventListener('pointerdown', function () {
    this
        .classList
        .toggle('activo');
});

boton.addEventListener("pointerdown", function () {
    if (contador == 0) {
        links.className = ('ul-lista dos');
        contador = 1;
    } else {
        links
            .classList
            .remove('dos');
        links.className = ('ul-lista uno')
        contador = 0;
    }
})

window.addEventListener('resize', function () {
    if (this.screen.width > 800) {
        contador = 0;
        links.classList.remove('dos');
        links.className = ('ul-lista uno')
    }
});


// imagen de logo de footer
// Obtén una referencia al elemento de la imagen
const logoImage = document.getElementById('footer-logo');

// Agrega un event listener para que la función se ejecute cuando cambie el tamaño de la ventana
window.addEventListener("resize", function() {
    // Obtén el ancho actual de la ventana
    const windowWidth = window.innerWidth;

    // Verifica si el ancho de la ventana es menor o igual a 750px
    if (windowWidth <= 700) {
        // Cambia el atributo src de la imagen
        logoImage.src = "img/logo/new-logo-horizon-white.webp";
    } else {
        // Si el ancho es mayor a 750px, vuelve a establecer el src original
        logoImage.src = "img/logo/new-logo-vertical-white.webp";
    }
});

