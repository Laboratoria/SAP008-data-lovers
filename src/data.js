export const filterByRegion = (pokemons, region) =>
  pokemons.filter((pokemon) => pokemon.generation.name === region);

export const filterByType = (pokemons, type) =>
      pokemons.filter((pokemon) => pokemon.type.includes(type));

// Variação da função
//export const filterByType = (pokemons, type) =>
 // pokemons.filter((pokemon) => pokemon.type === type);


  
