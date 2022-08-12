import data from "./data/harrypotter/data.js";

export const mainFilters = {displayChars, displayBooks, displaySpells};

function displayChars() {
  let charactersResult = [];
  let allCharacters = data.characters;

  for(let i = 0; i < allCharacters.length; i++){
    let charactersList = allCharacters[i].name;
    charactersResult.push(charactersList);
  }
  return charactersResult
}

function displayBooks() {
  let booksResult = [];
  let allBooks = data.books;

  for(let i = 0; i < allBooks.length; i++){
    let booksList = allBooks[i].title;
    booksResult.push(booksList);
  }
  return booksResult
}

function displaySpells(){
  let spellsResult = [];
  let allSpells = data.spells;

  for(let i = 0; i < allSpells.length; i++){
    let spellsList = allSpells[i].name;
    spellsResult.push(spellsList);
  }
  return spellsResult
}
//.name é o valor do campo lá no data.js da pasta harrypotter, funciona pra imprimir os outros dados do msm jeito; futuramente, trocar isso pra ".filter()"
//template string `string ${value}´