//import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

function mostrarPersonagens (data){
    document.getElementById("mostrarCards").innerHTML = data.map((personagem) => `
    <div>
    <img class="cards"  src="${personagem.image}">
     <p>${personagem.name}</p>
     <p>Gênero: ${personagem.gender}</p>
     <p>Espécie: ${personagem.species}</p>
     <p>Status: ${personagem.status}</p>

    </div>
    
    `
 


).join('')
}
mostrarPersonagens(data.results)



 //console.log(species, data);