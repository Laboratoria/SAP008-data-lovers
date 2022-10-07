import data from "./data/ghibli/ghibli.js"
const printCharacters = document.getElementById("printCharacters");
function generateCharactersMovies(movies) {
    let layout = "";
    movies.forEach(movie => {
        movie.people.forEach(p => {
            layout += `<div>
            <p> Name: ${p.name}</p>
            <img id= "imagem2" src = "${p.img}"/>
            <p> Age: ${p.age}</p>
            <p> Genre: ${p.genre}</p>
            <p> Specie: ${p.specie}</p>
            </div>`
        })
    });
    printCharacters.innerHTML = layout;
}

generateCharactersMovies(data.films)

printaFiltroAge(data.films);

function printaFiltroAge(filmsList) {
    const people = filmsList.map(movies => movies.people.filter((peopleAge) => peopleAge.age));

    let arrIdade = [];
    let newArr = [];

    for (let i = 0; i < people.length; i++) {
        let peo = people[i];
        let res = peo.filter((e) => e.age);
        res.forEach(b => arrIdade.push(b.age))

    }
    a
    for (var i = 0; i < arrIdade.length; i++) {
        if (newArr.indexOf(arrIdade[i]) == -1) {
            newArr.push(arrIdade[i]);
        }
    }

    let filterAge = document.getElementById("filterAge");
    printaSelect(new Set(newArr), filterAge);


}


function printaSelect(objList, campoDoFiltro) {
    objList.forEach((obj) => {
        let option = document.createElement("option");
        option.text = obj;
        option.value = obj;
        campoDoFiltro.appendChild(option);
    })
}



