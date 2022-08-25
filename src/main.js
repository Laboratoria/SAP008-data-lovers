import {mainFilters} from './data.js';
import data from './data/harrypotter/data.js';
 
const dataBaseCharacters = data.characters;
const dataBaseBooks = data.books;
const dataBaseSpells = data.spells; 

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
 
const btnBooks = document.getElementById('btn-books'); 
btnBooks.addEventListener('click',
function displayBooksList(){
    const bookTitles = mainFilters.displayBooksList(dataBaseBooks);
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('characters-list').style.display = 'none';
    document.getElementById('spells-list').style.display = 'none';
    document.getElementById('books-list').style.display = 'block';

    const booksResult = document.getElementById('books-content');
    return booksResult.innerHTML = bookTitles.map(title => `<ul><li> ${title}</li></ul>`).join('');
 })
 
const btnSpells = document.getElementById('btn-spells'); 
btnSpells.addEventListener('click',
function displaySpellsList(){
    const allSpells = mainFilters.displaySpellsList(dataBaseSpells);
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('books-list').style.display = 'none';
    document.getElementById('characters-list').style.display = 'none';
    document.getElementById('spells-list').style.display = 'block';

    const spellsResult = document.getElementById('spells-content');
    return spellsResult.innerHTML = allSpells.map(spell => `<ul><li> ${spell}</li></ul>`).join('');
})

function displayCharactersByHouse(house){    
    const charactersListsByHouse = mainFilters.filterCharactersByHouses(dataBaseCharacters, house)
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('books-list').style.display = 'none';
    document.getElementById('spells-list').style.display = 'none';
    document.getElementById('characters-list').style.display = 'block';
    document.getElementById('header-modal-characters').innerText = 'Lista de personagens por casa'
    
    const charactersByHouseResult = document.getElementById('characters-content');
    return charactersByHouseResult.innerHTML = charactersListsByHouse.map((name) => `<ul><li>${name.name}</li></ul>`).join('');
}

const btnGryffindor = document.getElementById('btn-gryffindor')
btnGryffindor.addEventListener('click',
function displayGryffindorCharacters(){
    const house = 'Gryffindor'
    displayCharactersByHouse(house)
})

const btnSlytherin = document.getElementById('btn-slytherin')
btnSlytherin.addEventListener('click',
function displaySlytherinCharacters(){
    const house = 'Slytherin'
    displayCharactersByHouse(house)
})

const btnHufflepuff = document.getElementById('btn-hufflepuff')
btnHufflepuff.addEventListener('click',
function displayHufflePuffCharacters(){
    const house = 'Hufflepuff'
    displayCharactersByHouse(house)
 })

const btnRavenclaw = document.getElementById('btn-ravenclaw')
btnRavenclaw.addEventListener('click',
function displayRavenclawCharacters(){
    const house = 'Ravenclaw'
    displayCharactersByHouse(house)
})
