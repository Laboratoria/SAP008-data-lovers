import data from "./data/harrypotter/data.js";
import { filterHouse, createCard, countCharactersHogwarts, selectNameAz, selectNameZa, filterFind } from "./data.js";
//visualizar todos os personagens
const charactersPrint = document.getElementById('lista');
const fullCast = data.characters;
let listCharacterHouseFilter;
let calcDisplay = document.getElementById('cal');
const fieldSearch = document.getElementById('buscar');
//printar todos
function displayCharaList() {
    listCharacterHouseFilter = fullCast
    charactersPrint.innerHTML = fullCast.map(createCard).join('');
}
displayCharaList()
// ver todos e por casas
let selectCharacters = document.querySelector('.select')
selectCharacters.addEventListener('change',
function select(event) {
    if (event.target.value === "VerTodos") {
        displayCharaList()
        calcDisplay.innerHTML = ''
    } else {
        let listName = filterHouse(event.target.value)
        listCharacterHouseFilter = listName
        //calculo
        let percentCharacters = parseInt((listName.length / countCharactersHogwarts()) * 100)
        calcDisplay.innerHTML = percentCharacters + '%' + ' de personagens que estudam em Hogwarts são da casa ' + event.target.value
        charactersPrint.innerHTML = listName.map(createCard).join('');
    }
})
// ordenar de Az Za
let order = document.querySelector('#Select-Ordenar')
order.addEventListener('change',
function orderName(event) {
    const charactersPrintFilter = document.getElementById('lista');
    if (event.target.value === "az") {
      const selectOrderList = selectNameAz(data.characters)
      charactersPrintFilter.innerHTML = selectOrderList.map(createCard).join('');
    } else if (event.target.value === "za") {
        const selectOrderList = selectNameZa(data.characters)
        charactersPrintFilter.innerHTML = selectOrderList.map(createCard).join('');
    }
})
//buscar
fieldSearch.addEventListener('keyup', function find() {
    let filteredCharacter = filterFind(fieldSearch.value, listCharacterHouseFilter);
    charactersPrint.innerHTML = filteredCharacter.map(createCard).join('');
})
