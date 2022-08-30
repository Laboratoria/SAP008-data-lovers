export function geraCard(character){
  return `<li>${character.name}"</br>"${character.birth}"</br>"${character.species}"</br>"${character.house}"</br>"${character.gender}</li>`
}
export function filterHouse(characters, house) {
  return characters.filter((user) => user.house === house);
}
export function filterAll(characters, value) {
  if (value === "VerTodos") {
    let todosPersonagens = characters.characters.map((user) => {
      return user.name;
    });

    return todosPersonagens;
  }
}
//import data from "./data/harrypotter/data.js";