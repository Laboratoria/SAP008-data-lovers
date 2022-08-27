import { mainFilters } from './data.js';
import data from './data/harrypotter/data.js';

const dataBaseCharacters = data.characters;
const dataBaseBooks = data.books;
const dataBaseSpells = data.spells;

function hiddenModals() {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('books-list').style.display = 'none';
    document.getElementById('spells-list').style.display = 'none';
    document.getElementById('characters-list').style.display = 'none';
}
function makeMapList(arrayObjects) {
    return arrayObjects.map(names => `<ul><li> ${names}</li></ul>`).join('');
}

const btnCharacters = document.getElementById('btn-characters');
btnCharacters.addEventListener('click',
    function displayCharsResult() {
        let charactersNames = mainFilters.displayCharactersList(dataBaseCharacters);
        hiddenModals()
        document.getElementById('characters-list').style.display = 'block';
        const charactersResult = document.getElementById('characters-content');
        return charactersResult.innerHTML = makeMapList(charactersNames);
    })

const sortCharacters = document.getElementById('sort')
sortCharacters.addEventListener('change', () => {
    let charactersNames = mainFilters.displayCharactersList(dataBaseCharacters);
    let sortCharactersName;
    if (sortCharacters.value == 'name-a-z') {
        sortCharactersName = mainFilters.charactersFromAtoZ(charactersNames);
    }
    else if (sortCharacters.value == 'name-z-a') {
        sortCharactersName = mainFilters.charactersFromZtoA(charactersNames);
    }
    const charactersResult = document.getElementById('characters-content');
    return charactersResult.innerHTML = makeMapList(sortCharactersName);

})

const btnBooks = document.getElementById('btn-books');
btnBooks.addEventListener('click',
    function displayBooksList() {
        const bookTitles = mainFilters.displayBooksList(dataBaseBooks);
        hiddenModals()
        document.getElementById('books-list').style.display = 'block';

        const booksResult = document.getElementById('books-content');
        return booksResult.innerHTML = makeMapList(bookTitles);
    })

const btnSpells = document.getElementById('btn-spells');
btnSpells.addEventListener('click',
    function displaySpellsList() {
        const allSpells = mainFilters.displaySpellsList(dataBaseSpells);
        hiddenModals()
        document.getElementById('spells-list').style.display = 'block';

        const spellsResult = document.getElementById('spells-content');
        return spellsResult.innerHTML = makeMapList(allSpells);
    })

function displayCharactersByHouse(house) {
    const charactersListsByHouse = mainFilters.filterCharactersByHouses(dataBaseCharacters, house)
    hiddenModals()
    document.getElementById('characters-list').style.display = 'block';
    document.getElementById('header-modal-characters').innerText = 'Characters list by house'

    const charactersByHouseResult = document.getElementById('characters-content');
    return charactersByHouseResult.innerHTML = charactersListsByHouse.map((character) => `<ul><li>${character.name}</li></ul>`).join('');
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
