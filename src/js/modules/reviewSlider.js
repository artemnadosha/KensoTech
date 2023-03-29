import {dataReview} from "../data/dataReview.js";

const reviewContainer = document.querySelector('.review');
const reviewButtonContainer = document.querySelector('.review-button-wrapper');
const reviewButton = reviewButtonContainer.querySelectorAll('button');
const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');

const generatedReviewContent = (object) =>
    `<div class="review-content"><p class="medium-size opacity-low">${object.userReview}</p></div>
         <div class="review-user-info-wrapper">
            <div class="user-img" style="background-image: url(${object.images})">
            <div class='ellipse-blue'></div>
            </div>
            <div class="review-user-info">
                <div class="user-name"><h4>${object.userName}</h4></div>
                <div class="user-position"><h5 class="opacity-low">${object.userPosition}</h5></div>
            </div>`


export const reviewSlider = () => {
    let countReview = 0;

    reviewContainer.innerHTML = generatedReviewContent(dataReview[countReview]);
    reviewButton.forEach(items => items.addEventListener('click', (events) => {
        if (events.target === buttonRight) {
            countReview += 1;
        } else {
            countReview -= 1;
        };

        if(countReview === 0) {
            buttonLeft.classList.add('disabled');
            buttonLeft.disabled = true;
        } else {
            buttonLeft.classList.remove('disabled');
            buttonLeft.disabled = false;
        };

        if(countReview === dataReview.length - 1) {
            buttonRight.classList.add('disabled');
            buttonRight.disabled = true;
        } else {
            buttonRight.classList.remove('disabled');
            buttonRight.disabled = false;
        };

        reviewContainer.innerHTML = generatedReviewContent(dataReview[countReview]);
        reviewContainer.animate([
            { opacity: '0' },
            { opacity: '1' }
        ], {
            duration: 1000,
        });
    }));
};
