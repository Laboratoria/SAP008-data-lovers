import data from "./data/harrypotter/data.js";
const filters = {filterHouse,filterAll};
//const property = {allCharacters}
// function allCharacters(birth){
//   return data.characters.map((user) => user.birth === birth);
// }
function filterHouse(house) {
  return data.characters.filter((user) => user.house === house);
}
function filterAll(value) {
  if (value === "VerTodos") {
    let todosPersonagens = data.characters.map((user) => {
      return user.name;
    });

    return todosPersonagens;
  }
}
export default filters;