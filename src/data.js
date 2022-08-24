import data from './data/harrypotter/data.js';

const filters = {
  filterHouse,
  filterTodos,
}
function filterHouse(house){
  let listHouse = data.characters.filter((user, index, array) => user.house === house)
  let listaPersonagens = listHouse.map((user, index, array) => {return user.name})
       
    return listaPersonagens
  }

function filterTodos(valor){
  if (valor === 'VerTodos') {
    let todosPersonagens = data.characters.map((user, index, array) => {return user.name})

    return todosPersonagens

  }
}

export default filters;
