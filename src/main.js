import data from './data/lol/lol.js';

let arrayCampeoes = Object.values(data.data);

const btnSobre = document.querySelector('#btn-sobre');
const main = document.querySelector("#main-content");
const modal = document.querySelector("#modal");
const cards = document.querySelector('#cards');
btnSobre.addEventListener('click', function(){
    modal.style.display = 'flex';
    main.style.display = 'none';
})

const btnVoltar = document.querySelector('#btn-voltar');
btnVoltar.addEventListener('click', function(){
    main.style.display = 'flex';
    modal.style.display = 'none';
})

const voltarFooter = document.querySelector('#voltar-footer');
voltarFooter.addEventListener('click', function(){
    modal.style.display = 'flex';
    main.style.display = 'none';
})

const btnIniciar = document.querySelector('#iniciar');
btnIniciar.addEventListener('click', function(){
    main.style.display = 'none';
    cards.style.display = 'flex';
})


function printCards(lol) {
    document.getElementById('cardzinho').innerHTML = lol.map((key) => 
        `
            <div class="card-container">
                <div class="card-front">
                    <img src="${key.splash}">
                    <h2>${key.name}</h2>
                </div>
                <div class="card-hover">
                    <ul>
                        <li>ATAQUE: ${key.info.attack}</li>
                        <li>DEFESA: ${key.info.defense}</li>
                        <li>MAGIA: ${key.info.magic}</li>
                        <li>DIFICULDADE: ${key.info.difficulty}</li>
                    </ul>
                    <h2>${key.name}</h2>
            </div>
        `    
    )
}
printCards(arrayCampeoes)

