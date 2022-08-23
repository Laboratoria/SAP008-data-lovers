
export const filterByRegion = (pokemons, region) => 
        pokemons.filter(pokemon => pokemon.generation.name===region)

// Função construída na OH
//export const filterByType = (pokemons, type) => 
//          pokemons.filter(pokemon => pokemon.type.includes(type))

export const filterByType = (pokemons, type) => 
         pokemons.filter(pokemon => pokemon.type===type)
 
 


