// import { example } from './data.js';
import data from './data/athletes/athletes.js';

// console.log(data);

const content = document.querySelector('.cards-main');

// const data2 = [data.athletes[0], data.athletes[1], data.athletes[2]]
const arrAtletas = data.athletes

arrAtletas.forEach((element, index) => {
    if (index <= 8) {
        const template = `
            <div class="card-atleta" id="card-atleta">
                <div class="atributos-atleta">
                    <p class="nome">${element.name}</p>
                    <p class="genero">${element.gender}</p>
                    <p class="esporte">${element.sport}</p>
                    <p class="pais">${element.team}</p>
                    <p class="medalha">${element.medal}</p>
                </div>
            </div>
            `
        content.innerHTML += template
    }
    console.log(arrAtletas.length)
});
