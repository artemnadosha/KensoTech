import {dataStages} from "../data/dataStages.js";

const modalStagesContainer = document.querySelector('.stages-content-modal');
const stagesContentContainer = document.querySelector('.development-stages-content-wrapper');
const stagesTabs = document.querySelectorAll('.developments-stages-items');

const generatedModalStagesContent = (object) =>
    `<div class="stages-content-modal-wrapper">
        <div class="content-modal-container">
            <div class="content-modal-container-position">
                <div class="development-stages-content-img-modal" style="background-image: url(${object.images})"></div>
                <div class="development-stages-content-title-modal">
                <h4>${object.title}</h4>
                </div>
                <div class="development-stages-content-text-modal"><p>${object.content}</p></div>
                <img src="./img/ham-menu-off.svg" alt="" class="exit-modal">
            </div>
        </div>
    </div>`
const generatedStagesContent = (object) =>
    `<div class="development-stages-content">
        <div class="development-stages-content-title">
          <h4><span class="development-stages-content-title-number">${object.number}</span>${object.title}</h4>
        </div>
        <div class="development-stages-content-text"><p class="opacity-low">${object.content}</p></div>
      </div>
      <div class="development-stages-content-img" style="background-image: url(${object.images})"></div>`

let windowWidth = window.innerWidth < 768 ? 'mobile' : 'desktop';

export const stages = () => {
    windowWidth = window.innerWidth < 768 ? 'mobile' : 'desktop';
    stagesContentContainer.innerHTML = generatedStagesContent(dataStages[0]);

    if(windowWidth === "desktop") {
        stagesTabs[0].classList.add('active');
    };


    stagesTabs.forEach(item => item.addEventListener('click', event => {

        stagesTabs.forEach(item => item.classList.remove('active'));

        windowWidth = window.innerWidth < 768 ? 'mobile' : 'desktop';
        if(windowWidth === 'mobile') {
            dataStages.forEach(items => {
                if (items.dataName === item.dataset.name) {
                    modalStagesContainer.innerHTML = generatedModalStagesContent(items);
                };
            });

            if (event.currentTarget) {
                modalStagesContainer.classList.add('active');
                document.body.style.overflowY = 'hidden';
                const exitStagesModal = document.querySelector('.exit-modal');

                exitStagesModal.addEventListener('click', () => {
                    modalStagesContainer.classList.remove('active');
                    document.body.style.overflowY = 'scroll';
                });
            };
        } else {
            dataStages.forEach(items => {
                if (items.dataName === item.dataset.name) {
                    stagesContentContainer.innerHTML = generatedStagesContent(items);
                    item.classList.add('active');
                };
            });
        };
    }));
};

