import {mainFilters} from './data.js';
import data from './data/harrypotter/data.js';
 
const dataBaseCharacters = data.characters;
// const dataBaseBooks = data.books;
// const dataBaseSpells = data.spells;
 
const btnCharacters = document.getElementById('btn-characters');
 
btnCharacters.addEventListener('click',
function displayCharsResult(){
    const charactersNames = mainFilters.displayCharactersList(dataBaseCharacters);
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('books-list').style.display = 'none';
    document.getElementById('spells-list').style.display = 'none';
    document.getElementById('characters-list').style.display = 'block';
 
    const charactersResult = document.getElementById('characters-content');
    return charactersResult.innerHTML = charactersNames.map(names => `<ul><li> ${names}</li></ul>`).join('');
})
 
// const btnBooks = document.getElementById('btn-books');
 
// btnBooks.addEventListener('click',
// function displayBooksResult(){
//     mainFilters.displayBooksList(dataBaseBooks);
//     document.getElementById('welcome-section').style.display = 'none';
//     document.getElementById('characters-list').style.display = 'none';
//     document.getElementById('spells-list').style.display = 'none';
//     document.getElementById('books-list').style.display = 'block';
//     const booksResult = document.getElementById('books-list');
//     return booksResult.innerHTML = books;
 
// })
 
// const btnSpells = document.getElementById('btn-spells');
 
// btnSpells.addEventListener('click',
// function displaySpellsResult(){
//     mainFilters.displaySpellsList(dataBaseSpells);
//     document.getElementById('welcome-section').style.display = 'none';
//     document.getElementById('books-list').style.display = 'none';
//     document.getElementById('characters-list').style.display = 'none';
//     document.getElementById('spells-list').style.display = 'block';
//     const spellsResult = document.getElementById('spells-list');
//     return spellsResult.innerHTML = spells;
// })