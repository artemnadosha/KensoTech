import * as flsFunctions from './modules/isWeb.js';
import {activeHamFunction} from './modules/hamMenu.js'
import {stages} from "./modules/stages.js";
import {techContent} from "./modules/techStack.js";
import {reviewSlider} from "./modules/reviewSlider.js";
import {askedQuestion} from "./modules/asked-questions.js";
import {inputChecked} from  "./modules/inputChecked.js"
import {attachDropFile, attachFile} from "./modules/attachFile.js";

flsFunctions.isWebp();


window.addEventListener('load', () => {
    activeHamFunction();
    stages();
    techContent();
    reviewSlider();
    askedQuestion();
    inputChecked();
    attachFile();
    attachDropFile();
})