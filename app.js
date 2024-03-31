'use strict'

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click' ,()=>{

        let posicion = i
        let operacion = posicion * -33.333
        grande.style.transform = `translateX(${ operacion }%)`
        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})

const grandea    = document.querySelector('.grandea')
const puntoa     = document.querySelectorAll('.puntoa')

puntoa.forEach( ( cadaPuntoa , i )=> {
    puntoa[i].addEventListener('click' ,()=>{

        let posicion = i
        let operacion = posicion * -33.333
        grandea.style.transform = `translateX(${ operacion }%)`
        puntoa.forEach( ( cadaPuntoa , i )=>{
            puntoa[i].classList.remove('activo')
        })
        puntoa[i].classList.add('activo')
    })
})

const grandeb    = document.querySelector('.grandeb')
const puntob     = document.querySelectorAll('.puntob')

puntob.forEach( ( cadaPuntoa , i )=> {
    puntob[i].addEventListener('click' ,()=>{

        let posicion = i
        let operacion = posicion * -33.333
        grandeb.style.transform = `translateX(${ operacion }%)`
        puntob.forEach( ( cadaPuntob , i )=>{
            puntob[i].classList.remove('activo')
        })
        puntob[i].classList.add('activo')
    })
})