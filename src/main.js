//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

//const keyWordsTextArea = document.querySelector('key-words')
const buttonFilter = document.querySelector('#filter');
//const buttonSearch = document.querySelector('search')

//const radioAlive = document.querySelector('alive')
//const radioDead = document.querySelector('dead')


const filterBox = document.querySelector('#filter-box');
filterBox.hidden = true;
buttonFilter.addEventListener ('click', () => {
    filterBox.hidden = false;

    
})

//console.log(example, data);


