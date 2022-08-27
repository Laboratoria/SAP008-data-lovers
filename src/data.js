export const mainFilters = {
  displayCharactersList, displayBooksList, displaySpellsList,
  filterCharactersByHouses, charactersFromAtoZ, charactersFromZtoA
};

function displayCharactersList(names) {
  return names.map((characters) => characters.name)
}

function displayBooksList(books) {
  return books.map((book) => book.title)
}

function displaySpellsList(spells) {
  return spells.map((spell) => spell.name)
}

function filterCharactersByHouses(characters, houseToFilterBy) {
  const filteredCharacters = characters.filter((character) => {
    if (character.house === houseToFilterBy && character.house !== null) {
      console.log(character.house, character.name)
        return characters
    }
  })
  return filteredCharacters
}

 function charactersFromAtoZ(charactersNames) {
  return charactersNames.sort();
}

function charactersFromZtoA(charactersNames) {
  return charactersNames.sort().reverse();
}