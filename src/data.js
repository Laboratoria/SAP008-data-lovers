

export const example = () => {
  return "example";
};


export const filterByRegion = (pokemons, region) =>
 pokemons.filter(pokemon => pokemon.generation.name === region) 



