import data from "./data/harrypotter/data.js";
import { filterHouse, createCard, countCharactersHogwarts, filterFind } from "./data.js";
//visualizar todos os personagens
let calcDisplay = document.getElementById('cal');
const charactersPrint = document.getElementById('lista');
const fieldSearch = document.getElementById('buscar');
let listCharacterHouseFilter;

fieldSearch.addEventListener('keyup', function find(event) {
    let filteredCharacter = filterFind(fieldSearch.value, listCharacterHouseFilter);
    charactersPrint.innerHTML = filteredCharacter.map(createCard).join('');
})
console.log(fieldSearch.value)

const fullCast = data.characters;
function displayCharaList() {
    listCharacterHouseFilter = fullCast
    charactersPrint.innerHTML = fullCast.map(createCard).join('');
}
displayCharaList()
//filtrar todos e por casa  
let selectCharacters = document.querySelector('.select')
selectCharacters.addEventListener('change',
    function select(event) {
        if (event.target.value === "VerTodos") {
            displayCharaList()
            calcDisplay.innerHTML = ''
        } else {
            let listName = filterHouse(event.target.value)
            listCharacterHouseFilter = listName
            let percentCharacters = parseInt((listName.length / countCharactersHogwarts()) * 100)
            calcDisplay.innerHTML = percentCharacters + '%' + ' de personagens que estudam em Hogwarts são da casa ' + event.target.value
            charactersPrint.innerHTML = listName.map(createCard).join('');
        }
    })    
