'use strict';

const nosotrosElement = document.querySelector('#nosotros');
const menuNosotrosElement = document.querySelector('#menu-nosotros');
const ulNosotrosElement = document.querySelector('#ul-nosotros');

// Funciones para agregar y eliminar clases de CSS
const addMouseOverClass = () => {
    menuNosotrosElement
        .classList
        .add('mouseover');
};

const removeMouseOverClass = () => {
    menuNosotrosElement
        .classList
        .remove('mouseover');
};

const addActiveClass = () => {
    ulNosotrosElement
        .classList
        .add('ul--activo');
};

const removeActiveClass = () => {
    ulNosotrosElement
        .classList
        .remove('ul--activo');
};

// eventos
const handleMouseOver = () => {
    addMouseOverClass();
    addActiveClass();
};

const handleMouseOut = () => {
    removeMouseOverClass();
    removeActiveClass();
};

nosotrosElement.addEventListener('mouseover', handleMouseOver);
nosotrosElement.addEventListener('mouseout', handleMouseOut);
