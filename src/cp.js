import {calCp, filterGeneration, filterType,sortData} from './data.js';
import data from './data/pokemon/pokemon.js';

const arrayPokemon=data.pokemon;

window.addEventListener("load", ()=>printCp(arrayPokemon));  

function printCp(array){
    document.querySelector("#select").innerHTML=`
        
            <option id="teste" selectd disableb value="algum">---SEU POKÉMON---</option>
            ${
                array.map((key)=>`
                    <option>${key.name}</option>
                `)
            }
    `
  //  console.log(document.querySelector("#teste").selectedIndex)
}

document.querySelector("#botão").addEventListener('click',() => {
    const cpDigitado = document.querySelector("#cpCapturado").value 
    const pokeSelecionado = document.querySelector("#select")
    const indice = pokeSelecionado.selectedIndex
    console.log(cpDigitado, indice)
    console.log(calCp(arrayPokemon,indice-1,cpDigitado))
})


/* function seleciona(){
    let teste =  document.querySelector("#select")
    let outroTeste = teste.selectedIndex
    console.log(outroTeste)
}  */