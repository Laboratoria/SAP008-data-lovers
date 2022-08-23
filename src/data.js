 
export const mainFilters = {displayCharactersList, displayBooksList, displaySpellsList
  

};
//  filterCharactersByHouses 

function displayCharactersList(names){
  return names.map((characters) => characters.name)
 }
 
function displayBooksList(books) {
  return books.map((book) => book.title) 
}
 
function displaySpellsList(spells) {
  return spells.map((spell) => spell.name) 
}
// function displaySpellsList(dataBaseSpells){
//   let spellsResult = [];
//   let allSpells = data.spells;
 
//   for(let i = 0; i < allSpells.length; i++){
//     let spellsList = allSpells[i].name;
//     spellsResult.push(spellsList);
//   }
//   return spellsResult
// }
 
// function filterCharactersByHouses(dataBaseCharacters){
//   const filterResult = [];
//   dataBaseCharacters.filter((character) => {
//     if (character.house === 'Gryffindor'){
//       filterResult.push(character.name);
//     }else if (character.house === 'Ravenclaw'){
//       filterResult.push(character.name);
//     }else if (character.house === 'Hufflepuff'){
//       filterResult.push(character.name);
//     }else if (character.house === 'Slytherin'){
//       filterResult.push(character.name);
//     }
//   });
//   return filterResult.join('');
// }