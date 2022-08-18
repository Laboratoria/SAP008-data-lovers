import data from './data/rickandmorty/rickandmorty.js';

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

data.results.forEach(personagem => {
    document.getElementById('cards').insertAdjacentHTML('beforeend', gerarCard(personagem));
});


