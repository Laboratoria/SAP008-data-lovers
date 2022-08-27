import filters from "./data.js";
import data from "./data/harrypotter/data.js";
//função do botão para ver todos os personagens
// const cast = document.querySelector('#characters')
// cast.addEventListener('load', function(){
//     if(target.value === 'lista'){
//         let fullCast = data.characters()
//         allCharacters(fullCast)
//         document.getElementById('lista').innerHTML += fullCast + "</br>"
//     } console.log('teste')
// })
window.addEventListener('load', function (event){
    let cast = data.characters 
    allCharacters(cast)
   console.log('teste')
})
// function allCharacters(cast){
//     for (let i = 0; i < cast.length; i++) {
//         console.log(cast[i])
//        document.getElementById('lista').innerHTML += cast[i] + "<br>"   
//    }
// }
//função do select personagens ver todos, filtros por casa   
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
    console.log('printName')
}