import { filterData, sortByName,filterNome, computeStats} from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

const devolvePersonagens = data.results;


function mostrarPersonagens (data){
    document.getElementById("mostrarCards").innerHTML = data.map((personagens) => `
        <div>
        <p class="nomePersonagem">${personagens.name}</p>
        <img class="cards" src="${personagens.image}">
        
        <ul class="infos" style="list-style: none">                       
                <li>Status: ${personagens.status}</li>
                <li>Species: ${personagens.species}</li>
                <li>Gender: ${personagens.gender}</li>
                </ul>                
        </div>    
    `).join('')
}

mostrarPersonagens(devolvePersonagens);

function filtrarGenero(e) {
    e.preventDefault();
    const genero = document.getElementById("selectGenero").value;  
    const mostrarGenero = filterData(devolvePersonagens,"gender",genero);
    document.getElementById("percentualTotal").innerHTML = `o total de personagens nessa categoria é ${computeStats(mostrarGenero)}`
    mostrarPersonagens(mostrarGenero);
}
    
function filtrarStatus(e) {
    e.preventDefault();
    const status = document.getElementById("selectStatus").value;
    const mostrarStatus = filterData(devolvePersonagens,"status", status)
    document.getElementById("percentualTotal").innerHTML = `o total de personagens nessa categoria é ${computeStats(mostrarStatus)}`
    mostrarPersonagens(mostrarStatus);
}
    
function filtrarEspecie(e) {
    e.preventDefault();
    const especie = document.getElementById("selectEspecie").value;
    const mostrarEspecie = filterData(devolvePersonagens,"species",especie)
    document.getElementById("percentualTotal").innerHTML = `o total de personagens nessa categoria é ${computeStats(mostrarEspecie)}`
    mostrarPersonagens(mostrarEspecie);
}    
    
function ordenarPersonagens(e) {
    e.preventDefault();
    const selectOrdem = document.getElementById("selectOrdem").value;
    const mostrarOrdem = sortByName(devolvePersonagens, selectOrdem);
    mostrarPersonagens(mostrarOrdem);
}
    
function pesquisarNome(e) {
    e.preventDefault();
    const pesquisaNome = document.getElementById("pesquisarNome").value
    const devolveNome = filterNome(devolvePersonagens, pesquisaNome)
    mostrarPersonagens(devolveNome);
}
    
document.getElementById("selectOrdem").addEventListener("change", ordenarPersonagens);
document.getElementById("selectStatus").addEventListener("change", filtrarStatus);
document.getElementById("selectGenero").addEventListener("change", filtrarGenero);
document.getElementById("selectEspecie").addEventListener("change", filtrarEspecie);
document.getElementById("pesquisarNome").addEventListener("keyup", pesquisarNome);
document.getElementById("limparFiltro").addEventListener("click", () => {window.location.reload()});

document.getElementById("voltar-parao-inicio").addEventListener("click", () => {window.scrollTo(0, 0)});