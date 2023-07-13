// NAVBAR-STATIC //
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar-section")
    navbar.classList.toggle("down", window.scrollY > 0)

    if (window.scrollY > 0) {
        navbar.style.background = "#073A54"
        navbar.classList.add("transition")
    } else {
        navbar.style.background = "transparent"
        navbar.classList.remove("transition")
    }
});

//BTN TOTOP //
const toTop = document.querySelector(".to__top");

window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})
