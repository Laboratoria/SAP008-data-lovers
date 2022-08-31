import data from "./data/harrypotter/data.js";
export function createCard(character){
  return `<card class="card">
  <br><strong>Name: </strong>${character.name}
  </br><strong>Birth: </strong>${character.birth}
  </br><strong>Specie: </strong>${character.species}
  </br><strong>House: </strong>${character.house}
  </br><strong>Gender: </strong>${character.gender}</br>
  </card>`
}
export function filterHouse(house) {
  return data.characters.filter((user) => user.house === house);
}
export function countCharactersHogwarts(){
  return data.characters.filter((user) => user.house ===
  'Gryffindor' || user.house === 'Ravenclaw' || user.house === 'Slytherin' || user.house === 'Hufflepuff').length
}
