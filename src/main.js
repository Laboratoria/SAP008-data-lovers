import data from "./data/harrypotter/data.js";
import {filterAll, filterHouse, geraCard} from "./data.js";
//visualizar todos os personagens
const fullCast = data.characters;
function displayCharaList(){
    const charactersPrint = document.getElementById('lista');
    return charactersPrint.innerHTML = fullCast.map(geraCard).join('');
}
displayCharaList()
//filtrar todos e por casa  
let selectCharacters = document.querySelector('.select')
selectCharacters.addEventListener('change', function(event){
    if(event.target.value === "VerTodos"){
        let listAllCharacters = filterAll(event.target.value)
        printName(listAllCharacters)
    }else{
    let listName = filterHouse(event.target.value)
    printName(listName)
    }
})     
function printName(charactersHouse){
    console.log(charactersHouse)
    document.getElementById('lista').innerHTML = ""
    for (let i = 0; i < charactersHouse.length; i++){
       document.getElementById('lista').innerHTML += charactersHouse[i] + "</br>"
    }
}