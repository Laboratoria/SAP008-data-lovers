export function createCard(character){
  return `<card class="card"></br>${character.name}</br>${character.birth}</br>${character.species}</br>${character.house}</br>${character.gender}</br></card>`
}
export function filterHouse(characters, house) {
  return characters.filter((user) => user.house === house);
}
export function mapAll(characters, value) {
  if (value === "VerTodos") {
   let todosPersonagens = characters.characters.map((user) => {
     return user.name;
   });

    return todosPersonagens;
  }
}
//import data from "./data/harrypotter/data.js";