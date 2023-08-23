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

