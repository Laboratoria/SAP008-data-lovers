import getCharacters from './data.js';
import rickandmorty from './data/rickandmorty/rickandmorty.js';
import rickAndMortyData from './data/rickandmorty/rickandmorty.js'

let selectGender = document.getElementById('gender');
let selectStatus = document.getElementById('status');
let selectSpecie = document.getElementById('specie');
let selectOrderAz = document.getElementById('order');

function gerarCard(personagem) {
    return `
            <div>
                <div class="quadro-card">
                    <div>
                        <img class="quadro-imagem" src="${personagem.image}">
                    </div>
                    <div class="overLap-group">
                        <div class="caixa-de-texto caixa-de-texto-status">Status: ${personagem.status}</div>
                        <div class="caixa-de-texto caixa-de-texto-nome">Name: ${personagem.name}</div>
                        <div class="caixa-de-texto caixa-de-texto-genero">Gender: ${personagem.gender}</div>
                        <div class="caixa-de-texto caixa-de-texto-especie">Species: ${personagem.species}</div>
                    </div>
                </div>
            </div>
    `;
}

const listarCards = () => {

    let optionStatus = selectStatus.options[selectStatus.selectedIndex];

    let optionGender = selectGender.options[selectGender.selectedIndex];

    let optionSpecie = selectSpecie.options[selectSpecie.selectedIndex];

    let optionOrderAz = selectOrderAz.options[selectOrderAz.selectedIndex];

    

    let characters = getCharacters(optionGender.value, optionStatus.value, optionSpecie.value, optionOrderAz.value);  //agrupa

    let cards = document.getElementById('cards');
    cards.innerHTML = '';
    characters.forEach(character => {
        cards.insertAdjacentHTML('beforeend', gerarCard(character));
    });
};

selectGender.addEventListener('change', listarCards);

selectStatus.addEventListener('change', listarCards);

selectSpecie.addEventListener('change', listarCards);

selectOrderAz.addEventListener('change', listarCards); 

listarCards();


const buttonSearch = document.querySelector(".searchButton")
buttonSearch.addEventListener("click", (e) => 
{
    let searchText = document.querySelector(".search").value;
    searchName (searchText)
})

function searchName (searchTF) {
    let characters = rickandmorty.results;
    
    for (const obj of characters) {
        console.log(`${obj.name}`)
    }

    let searchText = document.querySelector(".search").value;

    for (const obj of characters) {

        if (obj.name.includes(searchText)) {
        console.log("Personagem encontrado.")        
        }
        else {
        console.log("Personagem não encontrado.")
    }
    }

    
}



