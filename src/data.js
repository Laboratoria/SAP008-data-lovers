export const filterByRegion = (pokemons, region) =>
  pokemons.filter((pokemon) => pokemon.generation.name === region);

export const filterByType = (pokemons, type) =>
  pokemons.filter((pokemon) => pokemon.type.includes(type));

export const calcPercentage = (pokemonsLength, typeLength) =>
  //pokemonsLength * typeLength / 100
  (typeLength/pokemonsLength)*100;
  


export const sortBy = (pokemons, value) => {
  //console.log(pokemons, value)
  return pokemons.sort((a, b) => {
    if (value == "biggest-max-cp") {
      return b.stats["max-cp"] - a.stats["max-cp"];
    }
    if (value == "smallest-max-cp") {
      return a.stats["max-cp"] - b.stats["max-cp"];
    }
    if (value == "biggest-max-hp") {
      return b.stats["max-hp"] - a.stats["max-hp"];
    }
    if (value == "smallest-max-hp") {
      return a.stats["max-hp"] - b.stats["max-hp"];
    }
    return 0;
  });
}

