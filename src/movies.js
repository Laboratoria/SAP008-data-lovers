import data from "./data/ghibli/ghibli.js"

function PrintandoCard(film) {
    return `
        <article>
            <p>Title: ${film.title}</p>
            <img id= "imagem1" src="${film.poster}"/></p>
            <p>Director: ${film.director}</p>
            <p>Release date: ${film.release_date}</p>
        </article>
        `;
}

function montaCard(lista) {
    let directorFilter = document.getElementById("filterDirector").value;
    let yearFilter = document.getElementById("filterYear").value;

    if (directorFilter){
        lista =  lista.filter((obj) => obj.director == directorFilter);
    }

    if (yearFilter){
        lista = lista.filter((obj) => obj.release_date == yearFilter);
    }

    return lista
        .map((film) => {
            return PrintandoCard(film);
        })
        .join("");
}

printaCards.innerHTML = montaCard(data.films);

// aqui termina a função de printar cards //
// aqui começa a função de filtrar diretor //

printaFiltroDirector(data.films);

function printaFiltroDirector(filmsList){
    let filterDirector = document.getElementById("filterDirector");
    let directorList = filmsList.map((film) => film.director);
    printaSelect(new Set(directorList), filterDirector);

}

// aqui começa a função de filtrar por ano//

printaFiltroRelease(data.films);

function printaFiltroRelease (filmsList) {
    let filterYear = document.getElementById ("filterYear");
    let releaseList = filmsList.map((film) => film.release_date);
    printaSelect(new Set(releaseList), filterYear);

}







// função generalista que será chamada nos filtros // 

function printaSelect(objList, campoDoFiltro){
    objList.forEach((obj)=> {
        let option = document.createElement("option");
        option.text = obj;
        option.value = obj;    
        campoDoFiltro.appendChild(option);
    })
}

const classe_filtros = document.querySelectorAll(".conteudo-principal-filtros");

classe_filtros.forEach((item) => {
    item.addEventListener("change", (e) => {
        printaCards.innerHTML = "";
        printaCards.innerHTML = montaCard(data.films);
    });
})

// aqui acaba o filtro director
// aqui começa o filtro de anos

