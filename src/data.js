import data from "./data/harrypotter/data.js";

export const characters = {displayChars};

function displayChars() {
  let result = '';
  let personas = data.characters;

  for(let i = 0; i < personas.length; i++){
    let charactersList = personas[i].name;
    result += charactersList
  }
return result
}
//.name é o valor do campo lá no data.js da pasta harrypotter, funciona pra imprimir os outros dados do msm jeito; futuramente, trocar isso pra ".filter()"
//template string `string ${value}´