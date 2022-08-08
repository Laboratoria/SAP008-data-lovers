import {characters} from './data.js';
import data from './data/harrypotter/data.js';

const btnResult = document.getElementById('btn-characters');
btnResult.addEventListener('click',
function displayResult(){
    let result = characters.displayChars();

    return document.getElementById('results').innerHTML = result;
})

console.log(data.characters)