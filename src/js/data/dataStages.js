import {replaceData} from "./dataReplace.js";

export const dataStages = [
    {
        dataName: 'analysis',
        title:'Analysis',
        number: '01',
        images: './img/development-stages/analysis.png',
        content: 'We analyze the market, get to know your business. Our manager identifies the peculiarities and main "pains" of your industry in order to draw up a plan for creating the most productive website.'
    },
    {
        dataName: 'solution',
        title: 'Solution',
        number: '02',
        images: './img/development-stages/solution.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, suscipit.'
    },
    {
        dataName: 'design',
        title: 'Design development',
        number: '03',
        images: './img/development-stages/design.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, suscipit.'
    },
    {
        dataName: 'development',
        title: 'Development of the technical part',
        number: '04',
        images: './img/development-stages/technical-part.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, suscipit.'
    },
    {
        dataName: 'testing',
        title: 'Testing',
        number: '05',
        images: './img/development-stages/testing.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, suscipit.'
    },
    {
        dataName: 'launch',
        title: 'Launch',
        number: '06',
        images: './img/development-stages/launch.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, suscipit.'
    },
    {
        dataName: 'support',
        title: 'Support',
        number: '07',
        images: './img/development-stages/support.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, suscipit.'
    },
]

replaceData(dataStages)