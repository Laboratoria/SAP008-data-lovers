import { filterCharacters, sortCharacters, searchCharacters, getPercentage} from './data.js';
import rickandmorty from './data/rickandmorty/rickandmorty.js';

const selectGender = document.getElementById('gender');
const selectStatus = document.getElementById('status');
const selectSpecie = document.getElementById('specie');
const selectOrderAz = document.getElementById('order');
const inputName = document.getElementById('name');
const btnCuriosity = document.getElementById('curiosity');
let allCharacters = rickandmorty.results

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

    let characters = allCharacters;
    characters = filterCharacters(characters, 'gender', optionGender.value);
    characters = filterCharacters(characters, 'status', optionStatus.value);
    characters = filterCharacters(characters, 'species', optionSpecie.value);
    characters = sortCharacters(characters, optionOrderAz.value);
    characters = searchCharacters(characters, inputName.value);
    

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

btnCuriosity.addEventListener("click", function () {
    const percentage = getPercentage(allCharacters, 'Female');
    alert("The percentage of female characters is " + percentage + "%")
});

