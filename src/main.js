import { rickandmorty } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';


console.log(data);

function gerarCard(personagem) {
    return `
        <div class="grupo-2 screen">
            <div class="grupo-1">
                <div class="quadro-card">
                    <div class="quadro-imagem" style="background-image: url(${personagem.background_url})"></div>
                    <div class="overLap-group">
                        <div class="caixa-de-texto-nome">Nome: ${personagem.name}</div>
                        <div class="caixa-de-texto-status">Status: ${personagem.status}</div>
                        <div class="caixa-de-texto-genero">Gênero: ${personagem.gender}</div>
                        <div class="caixa-de-texto-especie">Espécie: ${personagem.species}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
data.results.forEach (personagem =>{
    console.log(personagem)
    document.getElementById('cards').insertAdjacentHTML('beforeend', gerarCard(personagem))
})


