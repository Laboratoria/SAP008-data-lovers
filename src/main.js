import getCharacters from './data.js';
import rickandmorty from './data/rickandmorty/rickandmorty.js';

const selectGender = document.getElementById('gender');
const selectStatus = document.getElementById('status');
const selectSpecie = document.getElementById('specie');
const selectOrderAz = document.getElementById('order');
const inputName = document.getElementById('name');

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
    let optionOrderAz = selectOrderAz.options[selectOrderAz.selectedIndex]; //index indica a posição do combo que foi selecionada//

    let characters = getCharacters(optionGender.value, optionStatus.value, optionSpecie.value, optionOrderAz.value, inputName.value);  //agrupa

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
inputName.addEventListener('keyup', listarCards);

listarCards();

const buttonCuriosity = document.querySelector("#curiosity")
    let total = rickandmorty.results;
    let counterTotal = total.length
    let counter = 0;
        for (let i = 0; i < total.length; i++) {
        if (total[i].gender === 'Female') counter++;
        } 
    let porcentagem = ((counter / counterTotal) * 100).toFixed(2)
    
    buttonCuriosity.addEventListener("click", function (e) { 
    alert ("The percentage of female characters is " + porcentagem + "%")});

