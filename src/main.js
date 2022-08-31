import data from "./data/harrypotter/data.js";
import {filterHouse, createCard, countCharactersHogwarts} from "./data.js";
//visualizar todos os personagens
let calcDisplay = document.getElementById('cal');
const fullCast = data.characters;
function displayCharaList(){
    const charactersPrint = document.getElementById('lista');
    return charactersPrint.innerHTML = fullCast.map(createCard).join('');
}
displayCharaList()
//filtrar todos e por casa  
let selectCharacters = document.querySelector('.select')
selectCharacters.addEventListener('change', 
calculo_agregado
function select(event){
    const charactersPrintFilter = document.getElementById('lista');
    if(event.target.value === "VerTodos"){
    displayCharaList()         
    }else{
    let listName = filterHouse(event.target.value) 
    let percentCharacters = (listName.length / countCharactersHogwarts()) * 100
    calcDisplay.innerHTML = percentCharacters + '%' + ' de personagem da ' + event.target.value
    charactersPrintFilter.innerHTML = listName.map(createCard).join('');
function select(){
    if(event.target.value === "VerTodos"){
        let listAllCharacters = characters.mapAll(event.target.value)
        printName(listAllCharacters)
    }else{
    let listName = characters.filterHouse(event.target.value)
        printName(listName)
main
    }
})     
