export const pokemonByType = (data, type) => {
  const filteredType = data.filter(pokemonType => pokemonType.type.find(item => item === type) === type)
  return filteredType
}

export const pokemonByRarity =(data,rarity) => {
  const filteredRarity = data.filter(pokemonRarity => pokemonRarity["pokemon-rarity"] == rarity)
  return filteredRarity
}

export const pokemonByEggs =(data,egg) =>{
  const filterEggs = data.filter(pokemonEggs => pokemonEggs.egg == egg)
  return filterEggs
}

export const pokemonByName = (data, name) => {
  const filterName = data.filter(pokemonName => pokemonName.name.includes(name))
  return filterName
}








