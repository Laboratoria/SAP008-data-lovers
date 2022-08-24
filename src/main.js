//import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

function mostrarPersonagens (data){
    document.getElementById("mostrarCards").innerHTML = data.map((personagem) => `
    <div>
     <p>${personagem.name}</p>
     <img class="cards" src="${personagem.image}">
    
    </div>
    

    `
 


).join('')
}

filtro ()
mostrarPersonagens(data.results)


 //console.log(species, data);
