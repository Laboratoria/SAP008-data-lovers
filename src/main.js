import {filterData } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

// IMPORTANDO TODOS OS DADOS DOS PERSONAGENS: 
const rickandmorty = data.results;

//CHAMANDO FUNÇÃO P/ CRIAR CARDS NA TELA:
criaCard(rickandmorty);


// CRIANDO OS CARDS NA TELA
function criaCard(personagens) {
    const exibir = personagens.map((personagem) => {
        const template = `
    <div class = "cards">
        <div class = "imagem">
         <img class = "imagemCard" src="${personagem.image}">
         <div class = "name">${personagem.name}</div>
        </div>
        <ul class = "textoCard">
         <li>Espécie: ${personagem.species}</li>
         <li>Gênero: ${personagem.gender}</li>
         <li>Status: ${personagem.status}</li>
        </ul>
    </div>
    `
        return template;
    });

    document.querySelector("#exibirCards").innerHTML = exibir.join("");
}

// PEGOU VALOR DO QUE USUÁRIO SELECIONOU DE TIPO DE ESPÉCIE:
document.querySelector("#especie").addEventListener("change", (event) => {
const valor = event.target.value
const especieFiltrada = filterData(valor)

criaCard(especieFiltrada)
      

})

// LINKANDO FUNÇÃO FILTERDATA COM DATA.JS COM SEU VALOR E CHAMANDO ELA












// const filtroEspecie = document.getElementById("especie").value
// const especieEscolhida = filtroEspecie.addEventListener("change", especieSelecionada())


// function especieSelecionada(){


// document.getElementById("exibirCards").innerHTML = filtro

// return filtro

// console.log(especieSelecionada)
// }


//FILTRO DE ESPÉCIE:
//Desenvolver uma função para filtrar cada tipo de espécie, são elas:
// 1) "Human"
// 2) "Humanoid"
// 3) "Alien"
// 4) "Poopybutthole"
// 5) "Mytholog"
// 6) "Animal"
// 7) "Vampire"
// 8) "Robot"
// 9) "Cronenberg"
// 10) "unknown"  - Inserir opcão não definido







// 1) Usar addEventListener para pegar valor da especie escolhida
// 2) Executar a função onde está o filter p/ comparar com o elemento espécie da array
// 3) Printar cards com resultado do filtro

// especies()

// let selecionada = document.querySelector("#especie");

// function especies () {
//     let valorSelecionada = selecionada.options[selecionada.selectedIndex];
//     let conteudo = valorSelecionada.value;
    
//         const filtroEspecie = rickandmorty.filter(item => item.species === conteudo)
//         console.log(especies)
    
    
// }

// let especieEscolhida = selecionada.addEventListener("change", (especies) => {

// })




// filtrarEspecies()

// const escolhendoEspecie = document.querySelector(".filtro");

// const especieEscolhida = escolhendoEspecie.addEventListener("change", (filtrarEspecies) => {

//     return 

// })
       




// function filtrarEspecies(data) {
// const filtroEspecie = rickandmorty.filter(item => item.species === conteudo)
// document.querySelector(".exibirCards").innerHTML = especieEscolhida
// }

//if (document.querySelector('select [name="filtro"]:checked').value === "Human") {
//         alert("teste")
//     } else {
//         document.querySelector('select [name="filtro"]:checked').value === "Humanoid"
//         alert("entrou no else")

//     }
// }






 //const filtroEspecie = rickandmorty.filter(item => item.species ==="Human")



//USANDO SWITCH

// const especies = ["Human","Humanoid", "Alien", "Poopybutthole", "Mytholog", "Animal", "Vampire", "Robot", "Cronenberg"]

// switch (especies){
//     case "Human": 
//     const human = rickandmorty.filter((especies) => 
//        const template = `
//             <div class = "cards">
//                 <div class = "imagem">
//                  <img class = "imagemCard" src="${personagem.image}">
//                  <div class = "name">${personagem.name}</div>
//                 </div>
//                 <ul class = "textoCard">
//                  <li>Name: ${personagem.name}</li>
//                  <li>Espécie: ${personagem.species}</li>
//                  <li>Gênero: ${personagem.gender}</li> 
//                  <li>Status: ${personagem.status}</li>
//                 </ul>
//             </div>
//             `
//             return template;
//             document.querySelector("#exibirCards").innerHTML = exibir.join("<br>");)}
//         break








