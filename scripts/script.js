document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const tabs = () => {

        const cardDetailChangeElem = document.querySelectorAll('.card-detail__change');
        const CardetailsTitleElem = document.querySelectorAll('.card-details__title');
        const CardImageElem = document.querySelectorAll('.card__image');

        const hideAll = () => {
            for (let i = 0; i < cardDetailChangeElem.length; i++) {
                cardDetailChangeElem[i].classList.remove('active');
                CardetailsTitleElem[i].classList.remove('active');
                CardImageElem[i].classList.remove('active');
            }
        };

        for (let i = 0; i < cardDetailChangeElem.length; i++) {

            cardDetailChangeElem[i].addEventListener('click', () => {
                hideAll();
                cardDetailChangeElem[i].classList.add('active');
                CardetailsTitleElem[i].classList.add('active');
                CardImageElem[i].classList.add('active');
            });

        }
    };


    tabs();

});