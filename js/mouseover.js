'use strict';

const nosotros = document.querySelector('#nosotros');
const menuNosotros = document.querySelector('#menu-nosotros');

const handleMouseOver = () => {
    menuNosotros.classList.add('mouseover');
};

const handleMouseOut = () => {
    menuNosotros.classList.remove('mouseover');
};

nosotros.addEventListener('mouseover', handleMouseOver);
nosotros.addEventListener('mouseout', handleMouseOut);

menuNosotros.addEventListener('mouseover', handleMouseOver);
menuNosotros.addEventListener('mouseout', handleMouseOut);
