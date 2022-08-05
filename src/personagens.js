import data from './data/ghibli/ghibli.js';
const films = data.films;

async function populate() {
    // populateHeader(films);
    populateCharacters(films);
}


// function populateHeader(obj) {
//     const header = document.querySelector('header');
//     const myH1 = document.createElement('h1');
//     for (const film of obj){
//         myH1.textContent = film.title;
//         header.appendChild(myH1);
//     }
    

//     // const myPara = document.createElement('p');
//     // myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
//     // header.appendChild(myPara);
// }       

function populateCharacters(obj) {
    const section = document.querySelector('section');
    // const people = obj.people;

    for (const film of obj) {
        for (let people of film.people) {
            const myArticle = document.createElement('article');
            const image = document.createElement('img');
            const myH2 = document.createElement('h2');
            const myPara1 = document.createElement('p');
            const myPara2 = document.createElement('p');
            const myPara3 = document.createElement('p');
            const myPara4 = document.createElement('p');
            const myPara5 = document.createElement('p');

            image.src = people.img;
            myH2.textContent = people.name;
            myPara1.textContent = `Gênero: ${people.gender}`;
            myPara2.textContent = `Idade: ${people.age}`;
            myPara3.textContent = `Cor dos olhos: ${people.eye_color}`;
            myPara4.textContent = `Cor do cabelo: ${people.hair_color}`;
            myPara5.textContent = `Espécie: ${people.specie}`;


            myArticle.appendChild(image);
            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myPara5);
            // myArticle.appendChild(myList);

            section.appendChild(myArticle);
        }
    }
}
populate()