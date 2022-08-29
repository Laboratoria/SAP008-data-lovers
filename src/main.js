import data from "./data/harrypotter/data.js";
import filters from "./data.js";
const fullCast = data.characters;
const btnCharacters = document.querySelector('#charactersFull')
btnCharacters.addEventListener('click',
function displayCharaList(){
    const charactersName = filters.displayList(fullCast);
    const charactersPrint = document.getElementById('lista');
    return charactersPrint.innerHTML = charactersName.map(name => `<ul><li> ${name}</li></ul>`).join('');
})  
let selectCharacters = document.querySelector('.select')
selectCharacters.addEventListener('change', function(event){
    if(event.target.value === "VerTodos"){
        let listAllCharacters = filters.filterAll(event.target.value)
        printName(listAllCharacters)
    }else{
    let listName = filters.filterHouse(event.target.value)
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