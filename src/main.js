import data from "./data/ghibli/ghibli.js"

const cards = document.getElementById('cards');

function getCharacters(films) {
    let characters = []
    for (let i = 0; i < films.length; i++) {
        characters = characters.concat(films[i].people)
    }
    
    printarCard(characters);
    return characters
}
getCharacters(data.films)

function printarCard(arrayCharacters) {
    let card = "";
    arrayCharacters.forEach(people => {
        card += `<div class="card"> 
        <img src="${people.img}">
        <p>${people.name}</p>
         </div>`
    
    });
    cards.innerHTML = card;
}
