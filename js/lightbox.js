'use strict'

//constantes y variables
const imgList  = document.querySelectorAll('.img')
const lightbox = document.querySelector('.lightbox')
const grande   = document.querySelector('.grande')
const closeBtn = document.querySelector('.close')
//Definir funciones 
const closeBtnHandler = () => lightbox.classList.remove('isActive')
const imgListHandler = index =>{
    lightbox.classList.add('isActive')
    grande.src = imgList[index].src
}

imgList.forEach((eachImg , index)=>{
    imgList[index].addEventListener('click', ()=>{
        imgListHandler(index)
    })
})

closeBtn.addEventListener('click', closeBtnHandler)