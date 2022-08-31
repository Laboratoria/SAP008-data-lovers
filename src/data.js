export function createCard(character){
  return `<card class="card">
  <br><strong>Name: </strong>${character.name}
  </br><strong>Birth: </strong>${character.birth}
  </br><strong>Specie: </strong>${character.species}
  </br><strong>House: </strong>${character.house}
  </br><strong>Gender: </strong>${character.gender}</br>
  </card>`
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