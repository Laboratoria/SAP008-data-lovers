export default {filters};

const filters = {displayList,filterHouse, filterAll};

function displayList(name){
  return name.map((characters) => characters.name)
}
function filterHouse(house) {
  return filters.characters.filter((user) => user.house === house);
}
function filterAll(value) {
  if (value === "VerTodos") {
    let todosPersonagens = filters.characters.map((user) => {
      return user.name;
    });

    return todosPersonagens;
  }
}
//import data from "./data/harrypotter/data.js";