import data from './data/ghibli/ghibli.js';
const films = data.films;

async function construct() {
    peoples(films);
}      

function peoples(obj) {
    const section = document.querySelector('section');

    for (const o of obj) {
        for (let people of o.people) {
            const myArticle = document.createElement('article');
            const myDiv1 = document.createElement('div');
            const image = document.createElement('img');
            const myDiv2 = document.createElement('div');
            const myH2 = document.createElement('h2');
            const myPara1 = document.createElement('p');
            const myPara2 = document.createElement('p');
            const myPara3 = document.createElement('p');
            const myPara4 = document.createElement('p');
            const myPara5 = document.createElement('p');

            myDiv1.className = 'card'
            image.src = people.img;
            myDiv2.className = 'overlay'
            myH2.textContent = people.name;
            myPara1.textContent = `Gênero: ${people.gender}`;
            myPara2.textContent = `Idade: ${people.age}`;
            myPara3.textContent = `Cor dos olhos: ${people.eye_color}`;
            myPara4.textContent = `Cor do cabelo: ${people.hair_color}`;
            myPara5.textContent = `Espécie: ${people.specie}`;


            myArticle.appendChild(myDiv1);
            myDiv1.appendChild(image);
            myArticle.appendChild(myDiv2);
            myDiv2.appendChild(myH2);
            myDiv2.appendChild(myPara1);
            myDiv2.appendChild(myPara2);
            myDiv2.appendChild(myPara3);
            myDiv2.appendChild(myPara4);
            myDiv2.appendChild(myPara5);
            section.appendChild(myArticle);
        }
    }
}

construct()