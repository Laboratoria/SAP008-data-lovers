import data from "./data/ghibli/ghibli.js";

cardsPeople(data.films);
function cardsPeople(films) {
    let cardsArea = document.getElementById('cards-characters')
    films.map(film =>
        film.people.map(person =>{
             console.log(`
    ${person.name}
    ${person.age}
    ${person.gender}
    ${person.specie}
            `)
        }))
}













// const dataBase = data.films
// cardsPeople(dataBase)
// function cardsPeople(dataBase) {
// let result = document.getElementById('cards-characters')
//  dataBase.map(film => {
//   film.people.map(person => { 
//     return result.innerHTML =  `
//     <div class="cardContainer">
//   <div class="image">
//     <img class="picture" src="${person.img}" alt="movie picture">
//   </div>
//   <div class="characterName">${person.name}</div>
//   <ul class="info">
//     <li>Age: ${person.age}</li>
//     <li>Gender: ${person.gender}</li>
//     <li>Specie: ${person.specie}</li>
//   </ul>
// </div>
//     `
//   })
  
// })
// }





// cardsPeople(data.films);

// function cardsPeople(films) {
// let characters = []
// films.map(film => {
//   film.people.map(person => { 
//     characters.push(person)
//   })
// })
// console.log(characters)
// }
 

