export const pokemonByType = (data, type) => {
  const filteredType = data.filter(pokemonType => pokemonType.type.find(item => item === type) === type)
  return filteredType;
}

export const pokemonByRarity =(data,rarity) => {
  const filteredRarity = data.filter(pokemonRarity => pokemonRarity["pokemon-rarity"] == rarity)
  return filteredRarity;
}

export const pokemonByEgg =(data,egg) => {
  const filterEggs = data.filter(pokemonEggs => pokemonEggs.egg == egg);
  return filterEggs;
}

export const pokemonByName = (data, name) => {
  const filterName = data.filter(pokemonName => pokemonName.name.includes(name))
  return filterName;
}
 
export const pokemonAlphabeticalOrder = (data) =>{
  
  const alphabeticalOrder = [...data].sort((a, b) => {
    return (a.name.localeCompare(b.name));
  })

  return alphabeticalOrder; 
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












