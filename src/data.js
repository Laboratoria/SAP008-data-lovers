
export const filterByRegion = (pokemons, region) => 
        pokemons.filter(pokemon => pokemon.generation.name===region)

export const filterByType = (pokemons, type) => 
        pokemons.filter(pokemon => pokemon.type.includes(type))
        
        // const pokemons = []
        // const pokemonsByRegion= filterByRegion(pokemons, "kanto")
        // const filteredRegionNType = filterByType(pokemonsByRegion, "grass") 



