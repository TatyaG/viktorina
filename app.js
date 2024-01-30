import {createGameIlempi, choiceOfClothes, checkIlempi} from './ilempi.js';



window.addEventListener('DOMContentLoaded', () => {

    createGameIlempi();
    const headIlempi = document.querySelector('.girl__head');
    const dressIlempi = document.querySelector('.girl__dress');
    const shoesIlempi = document.querySelector('.girl__shoes');

    const heads = document.querySelectorAll('.head');


    heads.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.head').forEach(el => {
                if (el.classList.contains('active')) el.classList.remove('active')
            })
            el.classList.add('active');
            console.log('aa')
            if ((!headIlempi.src) || (headIlempi.src && !dressIlempi.src || !shoesIlempi.src)) {
                choiceOfClothes('head', el, document.querySelector('.girl__head'));
            } else if (headIlempi.src && dressIlempi.src && shoesIlempi.src) return false

            checkIlempi();
        })
    })

    heads.forEach(el => {
        el.removeEventListener('click', choiceOfClothes)
    })

    const dresses = document.querySelectorAll('.dress');
    dresses.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.dress').forEach(el => {
                if (el.classList.contains('active')) el.classList.remove('active')
            })
            el.classList.add('active');
            if ((!dressIlempi.src) || (dressIlempi.src && !headIlempi.src || !shoesIlempi.src)) {
                choiceOfClothes('dress', el, document.querySelector('.girl__dress'));
            } else if (headIlempi.src && dressIlempi.src && shoesIlempi.src) return false

            checkIlempi();
        })
    })

    const shoes = document.querySelectorAll('.shoes');
    shoes.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.shoes').forEach(el => {
                if (el.classList.contains('active')) el.classList.remove('active')
            })
            el.classList.add('active');
            if ((!shoesIlempi.src) || (shoesIlempi.src && !headIlempi.src || !dressIlempi.src)) {
                choiceOfClothes('shoes', el, document.querySelector('.girl__shoes'));
            } else if (headIlempi.src && dressIlempi.src && shoesIlempi.src) return false

            checkIlempi();
        })
    })






})