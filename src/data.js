export const mainFilters = {displayCharactersList, displayBooksList, displaySpellsList, filterCharactersByHouses};

function displayCharactersList(names){
  return names.map((characters) => characters.name)
 }
 
function displayBooksList(books) {
  return books.map((book) => book.title) 
}
 
function displaySpellsList(spells) {
  return spells.map((spell) => spell.name) 
}

function filterCharactersByHouses(characters, houses){
  const filteredCharacters = characters.filter((character) => {
    if (character.house === houses){
      return characters
    }
  })
  return filteredCharacters
}
