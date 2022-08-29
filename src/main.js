import { mainFilters } from './data.js';
import data from './data/harrypotter/data.js';

const dataBaseCharacters = data.characters;
const dataBaseBooks = data.books;
const dataBaseSpells = data.spells;
let charactersNames;

function hideModals() {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('books-list').style.display = 'none';
    document.getElementById('spells-list').style.display = 'none';
    document.getElementById('characters-list').style.display = 'none';
}
function formatList(arrayObjects) {
    return arrayObjects.map(names => `<ul><li> ${names}</li></ul>`).join('');
}

function displayCharsResult() {
    const sortBy = document.getElementById('sort').value;
    charactersNames = mainFilters.displayCharactersList(dataBaseCharacters);
    charactersNames = mainFilters.sortBy(charactersNames, sortBy);
    hideModals();
    document.getElementById('characters-list').style.display = 'block';
    const charactersResult = document.getElementById('characters-content');
    return charactersResult.innerHTML = formatList(charactersNames);
}

const btnCharacters = document.getElementById('btn-characters');
btnCharacters.addEventListener('click', displayCharsResult);

const sortCharacters = document.getElementById('sort');
sortCharacters.addEventListener('change', () => {
    const sortBy = document.getElementById('sort').value;
    charactersNames = mainFilters.sortBy(charactersNames, sortBy)
    const charactersResult = document.getElementById('characters-content');
    return charactersResult.innerHTML = formatList(charactersNames);
});

function displayCharactersByHouse(house) {
    charactersNames = mainFilters.filterCharactersByHouses(dataBaseCharacters, house)
    const sortBy = document.getElementById('sort').value;
    charactersNames = mainFilters.sortBy(charactersNames, sortBy)
    hideModals()
    document.getElementById('characters-list').style.display = 'block';
    document.getElementById('header-modal-characters').innerText = 'Characters list by house'

    const charactersByHouseResult = document.getElementById('characters-content');
    return charactersByHouseResult.innerHTML = formatList(charactersNames);
}

const btnGryffindor = document.getElementById('btn-gryffindor')
btnGryffindor.addEventListener('click',
    function displayGryffindorCharacters() {
        const house = 'Gryffindor'
        displayCharactersByHouse(house)
    })

const btnSlytherin = document.getElementById('btn-slytherin')
btnSlytherin.addEventListener('click',
    function displaySlytherinCharacters() {
        const house = 'Slytherin'
        displayCharactersByHouse(house)
    })

const btnHufflepuff = document.getElementById('btn-hufflepuff')
btnHufflepuff.addEventListener('click',
    function displayHufflePuffCharacters() {
        const house = 'Hufflepuff'
        displayCharactersByHouse(house)
    })

const btnRavenclaw = document.getElementById('btn-ravenclaw')
btnRavenclaw.addEventListener('click',
    function displayRavenclawCharacters() {
        const house = 'Ravenclaw'
        displayCharactersByHouse(house)
    })

const btnBooks = document.getElementById('btn-books');
btnBooks.addEventListener('click',
    function displayBooksList() {
        const bookTitles = mainFilters.displayBooksList(dataBaseBooks);
        hideModals()
        document.getElementById('books-list').style.display = 'block';

        const booksResult = document.getElementById('books-content');
        return booksResult.innerHTML = formatList(bookTitles);
    })

const btnSpells = document.getElementById('btn-spells');
btnSpells.addEventListener('click',
    function displaySpellsList() {
        const spellsNames = mainFilters.displaySpellsList(dataBaseSpells);
        hideModals()
        document.getElementById('spells-list').style.display = 'block';

        const spellsResult = document.getElementById('spells-content');
        return spellsResult.innerHTML = formatList(spellsNames);
    })
