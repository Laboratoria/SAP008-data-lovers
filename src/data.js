export const filterByRegion = (pokemons, region) =>
  pokemons.filter((pokemon) => pokemon.generation.name === region);

export const filterByType = (pokemons, type) =>
      pokemons.filter((pokemon) => pokemon.type.includes(type));

export const sortBy = (pokemons, prop) =>{
  console.log(pokemons)
  return pokemons.sort((a, b)=> a[prop] - b[prop])

}

// Variação da função
//export const filterByType = (pokemons, type) =>
 // pokemons.filter((pokemon) => pokemon.type === type);


  
lalalalalala