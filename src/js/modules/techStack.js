import {techStack} from "../data/dataTechStack.js";

const techItemsTabs = document.querySelectorAll('.tech-item');
const techImagesContainer = document.querySelector('.tech-img-wrapper');

const generatedTechImageContent = (object) =>
    `<div class="tech-img" style="background-image: url(${object.images});"></div>`
export const techContent = () => {
    techImagesContainer.innerHTML = generatedTechImageContent(techStack[0]);

    techItemsTabs[0].classList.add('active');


    techItemsTabs.forEach(items => items.addEventListener('click', () => {
        techItemsTabs.forEach(items => items.classList.remove('active'));
        items.classList.add('active');

        techStack.forEach(itemTech => {
            if(items.dataset.name === itemTech.dataName){
                techImagesContainer.innerHTML = generatedTechImageContent(itemTech);
            };
        });

    }));
};
