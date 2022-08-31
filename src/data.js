import data from "./data/harrypotter/data.js";
export function createCard(character){
  return `<card class="card"></br>${character.name}</br>${character.birth}</br>${character.species}</br>${character.house}</br>${character.gender}</br></card>`
}
export function filterHouse(house) {
  return data.characters.filter((user) => user.house === house);
}
export function countCharactersHogwarts(){
  return data.characters.filter((user) => user.house === 'Gryffindor' || user.house === 'Ravenclaw' || user.house === 'Slytherin' || user.house === 'Hufflepuff').length
}

