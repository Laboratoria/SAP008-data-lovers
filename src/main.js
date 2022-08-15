import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


const buttonFilter = document.querySelector('#filter');
const filterBox = document.querySelector('#filter-box');

//função para exibir <section> escondida que contém os filtros
filterBox.hidden = true;
buttonFilter.addEventListener ('click', () => {
    filterBox.hidden = false;
})


const buttonSearch = document.querySelector('#search');
const cards = document.querySelector('#cards')

cards.hidden = true;
buttonSearch.addEventListener ('click', () => {
    cards.hidden = false;
})






//variáveis para funções checked dos radio buttons
let checked = true;
const radioButtonAlive = document.querySelector("#alive");
const radioButtonDead = document.querySelector("#dead");
const radioButtonFemale = document.querySelector("#female");
const radioButtonMale = document.querySelector("#male");
const radioButtonHuman = document.querySelector("#human");
const radioButtonNonHuman = document.querySelector("#non-human");

//função para radio button "vivo" marcar e desmarcar
radioButtonAlive.addEventListener ('click', () => {
    if (checked == true){
        checked = false
    } else {
        checked = true
    }
    radioButtonAlive.checked = checked;
});
//função para radio button "morto" marcar e desmarcar
radioButtonDead.addEventListener ('click', () => {
    if (checked == true){
        checked = false
    } else {
        checked = true
    }
    radioButtonDead.checked = checked;
});
//função para radio button "feminino" marcar e desmarcar
radioButtonFemale.addEventListener ('click', () => {
    if (checked == true){
        checked = false
    } else {
        checked = true
    }
    radioButtonFemale.checked = checked;
});
//função para radio button "masculino" marcar e desmarcar
radioButtonMale.addEventListener ('click', () => {
    if (checked == true){
        checked = false
    } else {
        checked = true
    }
    radioButtonMale.checked = checked;
});
//função para radio button "humano" marcar e desmarcar
radioButtonHuman.addEventListener ('click', () => {
    if (checked == true){
        checked = false
    } else {
        checked = true
    }
    radioButtonHuman.checked = checked;
});
//função para radio button "não humano" marcar e desmarcar
radioButtonNonHuman.addEventListener ('click', () => {
    if (checked == true){
        checked = false
    } else {
        checked = true
    }
    radioButtonNonHuman.checked = checked;
});

//console.log(example, data);


