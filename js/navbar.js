// // NAVBAR-STATIC //
// window.addEventListener("scroll", function() {
//     let navbar = document.querySelector(".navbar-section")
//     navbar.classList.toggle("down", window.scrollY > 0)

//     if (window.scrollY > 0) {
//         navbar.style.background = "#301B28"
//         navbar.classList.add("transition")
//     } else {
//         navbar.style.background = "transparent"
//         navbar.classList.remove("transition")
//     }
// });

//BTN TOTOP
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
        if (alturaAnimado - 450 < scrollTop) {
            animado[i].style.opacity =1;
            animado[i].classList.add('mostrarArriba');
        }
    }
}

window.addEventListener('scroll', mostrarScroll);
