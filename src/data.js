export { printCards, selectNameAz, selectNameZa }

function printCards(data, rarity, type, name) {

  let pokemons = filterPokemon(data, rarity, type, name)
  return pokemons.map((item) => {
    return `<div class="container_item">
             <div class="boxImg">
            <p class="pokeNumber">${item.num}</p>
            <figure class= "pokeData">
            <img class="poke-img" src='${item.img}' alt=${item.name}>
            </figure>
          <div class="items"></div>
          <h4>  ${item.name[0].toUpperCase() + item.name.substring(1)}</h4>
          <span class="listName"> Tipo: ${item.type}</span>
          <span class="listRarity"> Raridade: ${item["pokemon-rarity"]}</span>
        </div>
      </div>
      </div>
      `
  })
    .join('')
}

export function filterPokemon(data, rarity, type, name) {

  const pokemonData = data.pokemon.filter((pokemon) => {

    if (rarity != "") {
      if (!pokemon['pokemon-rarity'].includes(rarity)) {
        return false
      }
    }
    if (type != "") {
      if (!pokemon.type.includes(type)) {
        return false
      }
    }
    if (name != "") {
      if (!pokemon.name.includes(name)) {
        return false
      }
    }

    return true
  });
  return pokemonData
}

export const orderName = (a, b) => {
  if (a.name > b.name) {
    return 1;
  } if (a.name < b.name) {
    return -1;
  }
  return 0
};

const selectNameAz = (pokemon) => {
  return pokemon.sort(orderName);
}

const selectNameZa = (pokemon) => {
  return pokemon.sort(orderName).reverse();
};

export const pokeCalc = (pokeLenght, filterLenght) =>{
  const percent = (filterLenght / pokeLenght) * 100
  const rounded = Math.round(percent * 100) / 100
  return rounded
}
