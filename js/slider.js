(function(){
    // obtenemos los sliders y los elementos (flechas)
    const sliders = [...document.querySelectorAll('.slider-body')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    // variable
    let value;
    // eventos sig. y ant.
    arrowNext.addEventListener('pointerdown', () => changePosition(1));
    arrowBefore.addEventListener('pointerdown', () => changePosition(-1));
    // obtener el id
    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider-body-show').dataset.id);

        value = currentElement;
        value += change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('slider-body-show')
        sliders[value-1].classList.toggle('slider-body-show')
    }
})();