(function () {

    const sliders = [...document.querySelectorAll('.slider__body')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    
    let currentSliderIndex = 0;
    
    arrowNext.addEventListener('pointerdown', () => changePosition(1));
    arrowBefore.addEventListener('pointerdown', () => changePosition(-1));
    
    function changePosition(change) {
        sliders[currentSliderIndex].classList.remove('slider__body--show');
        
        currentSliderIndex = (currentSliderIndex + change + sliders.length) % sliders.length;
        
        sliders[currentSliderIndex].classList.add('slider__body--show');
    }
})();
