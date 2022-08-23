import getCharacters from './data.js';

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
                        <div class="caixa-de-texto caixa-de-texto-nome">Nome: ${personagem.name}</div>
                        <div class="caixa-de-texto caixa-de-texto-genero">Gênero: ${personagem.gender}</div>
                        <div class="caixa-de-texto caixa-de-texto-especie">Espécie: ${personagem.species}</div>
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




