export const filterByRegion = (pokemons, region) =>
  pokemons.filter((pokemon) => pokemon.generation.name === region);

export const filterByType = (pokemons, type) =>
  pokemons.filter((pokemon) => pokemon.type.includes(type));

export const calcPercentage = (pokemonsLength, typeLength) =>
  pokemonsLength * typeLength / 100

export const sortBy = (pokemons, value) => {
  console.log(pokemons, value)
  return pokemons.sort((a, b) => {
    if (value == "biggest-max-cp") {
      return b.stats["max-cp"] - a.stats["max-cp"];
    }
    if (value == "smallest-max-cp") {
      return a.stats["max-cp"] - b.stats["max-cp"];
    }

    return 0;
  });
}




