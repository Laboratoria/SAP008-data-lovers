import data from './data/pokemon/pokemon.js';

import { menuSelectTipo } from './data.js';

const tipo = document.getElementById("type");

console.log(data.pokemon[0].type)

for (let i = 0; i < data.pokemon.length; i++) {
    for (let j = 0; j < data.pokemon[i].type.length; j++) {
        console.log("Pokemon " + data.pokemon[i].name + " type " + data.pokemon[i].type[j])
    }
}

/*for (let pokemon of data.pokemon){
    for ( let type of pokemon.type){
        console.log("Pokemon " + pokemon.name + " type " + type)
    }
};*/
//filter
//map
