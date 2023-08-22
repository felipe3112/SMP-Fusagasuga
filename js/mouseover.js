'use strict';

const nosotros = document.querySelector('#nosotros');
const menuNosotros = document.querySelector('#menu-nosotros');
const ulNosotros = document.querySelector('#ul-nosotros');

const addMouseOverClass = () => {
    menuNosotros.classList.add('mouseover');
};

const removeMouseOverClass = () => {
    menuNosotros.classList.remove('mouseover');
};

const addActiveClass = () => {
    ulNosotros.classList.add('ul--activo');
};
const removeActiveClass = () => {
    ulNosotros.classList.remove('ul--activo');
};

const handleMouseOver = (event) => {
    addMouseOverClass();
    addActiveClass();
};

const handleMouseOut = (event) => {
    removeMouseOverClass();
    removeActiveClass();
};


nosotros.addEventListener('mouseover', handleMouseOver);
nosotros.addEventListener('mouseout', handleMouseOut);

menuNosotros.addEventListener('mouseover', handleMouseOver);
menuNosotros.addEventListener('mouseout', handleMouseOut);
