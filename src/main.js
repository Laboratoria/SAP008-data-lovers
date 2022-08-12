import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

const keyWordsTextArea = document.querySelector('key-words')
const buttonFilter = document.querySelector('filter')
const buttonSearch = document.querySelector('search')

const radioAlive = document.querySelector('alive')
const radioDead = document.querySelector('dead')

buttonFilter.addEventListener ('onclick', () => {
    console.log()
})

console.log(example, data);
