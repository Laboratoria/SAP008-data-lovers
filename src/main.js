//import data from './data/harrypotter/data.js';

import filters from "./data.js";

let select = document.querySelector('.select')

select.addEventListener('change', function(event){
    let listaNomes = filters.filterHouse(event.target.value)
    imprimirNomes(listaNomes)
    
    let listaTodosPersonagens = filters.filterTodos(event.target.value)
    imprimirNomes(listaTodosPersonagens)

   })

function imprimirNomes(personagensHouse){
    for (let i = 0; i < personagensHouse.length; i++){
       document.getElementById('lista').innerHTML += personagensHouse[i] + "</br>"
    }
    }
   

// const gryffindor = data.characters.filter((user, index, array) => user.house === 'Gryffindor');
// const slytherin = data.characters.filter((user, index, array) => user.house === 'Slytherin');
// const ravenclaw = data.characters.filter((user, index, array) => user.house === 'Ravenclaw');
// const hufflepuff = data.characters.filter((user, index, array) => user.house === 'Hufflepuff');

// const totalHouses = gryffindor.length + slytherin.length + ravenclaw.length + hufflepuff.length

//console.log(listaPersonagens)
// console.log((gryffindor.length / totalHouses)*100 + " %")
// console.log((slytherin.length / totalHouses)*100 + " %")
// console.log((ravenclaw.length / totalHouses)*100 + " %")
// console.log((hufflepuff.length / totalHouses)*100 + " %")