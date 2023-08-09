export const multFilterPokemon = (data, dataSearch, dataType) => {
  const filteredPokemons = data.filter(pokemonType => pokemonType[dataSearch].includes(dataType));
  return filteredPokemons;
}

export const pokemonAlphabeticalOrder = (data,order) =>{
 
  const alphabeticalOrder = [...data].sort((a, b) => {
    return (a.name.localeCompare(b.name));
  })

  if(order === "a-z"){
    return alphabeticalOrder; 
  }else {
    return alphabeticalOrder.reverse();
  }

}

export const pokemonShiny = (data,urlImg) =>{
  const filterShiny = data.filter(pokemonShiny => 
    pokemonShiny.img = urlImg + pokemonShiny.img.slice(42,50));
  return filterShiny;
}

export const calculationPokemon = (data,filteredData) =>{
  const percentageCalculated = ((filteredData * 100) / data).toFixed(2);
  return percentageCalculated;
}