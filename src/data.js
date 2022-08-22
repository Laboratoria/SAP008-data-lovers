 
export const mainFilters = {displayCharactersList
  //displayBooksList, displaySpellsList, filterCharactersByHouses
};
 
function displayCharactersList(names){
  return names.map((characters) => characters.name)
 }
 
// function displayBooksList(dataBaseBooks) {
//   let booksResult = [];
//   let allBooks = data.books;
 
//   for(let i = 0; i < allBooks.length; i++){
//     let booksList = allBooks[i].title;
//     booksResult.push(booksList);
//   }
//   return booksResult
// }
 
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