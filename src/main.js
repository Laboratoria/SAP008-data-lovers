import getCharacters from './data.js';

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
    let selectGender = document.getElementById('gender');
    let optionGender = selectGender.options[selectGender.selectedIndex];

    let characters = getCharacters(optionGender.value);  //declaro!!!!!

    let cards = document.getElementById('cards');
    cards.innerHTML = '';
    characters.forEach(character => {
        cards.insertAdjacentHTML('beforeend', gerarCard(character));
    });
};

let selectGender = document.getElementById('gender');
selectGender.addEventListener('change',listarCards);

listarCards();    //uso!!!!!





//characters.forEach(character => {
    //document.getElementById('cards').innerHTML += gerarCard(character);
//});