const toTop = document.querySelector(".to__top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop
            .classList
            .add("active");
    } else {
        toTop
            .classList
            .remove("active");
    }
})

let animado = document.querySelectorAll('.animado');

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;

    for (let i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 510 < scrollTop) {
            animado[i].style.opacity =1;
            animado[i].classList.add('mostrarArriba');
        }
    }
}

window.addEventListener('scroll', mostrarScroll); 

document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOMContentLoaded se ha cargado');
    let containers = document.querySelectorAll('.hidden');
    containers.forEach(container =>{
        container.classList.add('show');
    })
});