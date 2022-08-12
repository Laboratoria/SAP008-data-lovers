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

// const radioFilterInputs = document.querySelectorAll('input[type="radio"]');
// for (let i = 0, l = radioFilterInputs.length; i < l; i++){
//   radioFilterInputs[i].checked = false;
// }

// const radioFiltersCheckUncheck = document.getElementByClassName('radio-filter');
  
// radioFiltersCheckUncheck.addEventListener ('click', () => {
//     radioFiltersCheckUncheck.checked = false;
//     radioFiltersCheckUncheck.innerHTML = "Unchecked";
// })

//console.log(example, data);


