// import { example } from './data.js';
import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';

// console.log(data);

const content = document.querySelector('.cards-main');
const medal = document.querySelector('#medalhas');

const arrAthletes = data.athletes




medal.addEventListener('change', (event) => {
    console.log(event.target.value)
    let medalType = event.target.value

    if (medalType == "") {
        arrAthletes.forEach((filterAthletics) => {
            if (filterAthletics.sport == "Athletics") {
                const template = `
        <div class="card-atleta" id="card-atleta">
            <div class="atributos-atleta">
                <p class="nome">${filterAthletics.name}</p>
                <p class="genero">${filterAthletics.gender}</p>
                <p class="esporte">${filterAthletics.sport}</p>
                <p class="esporte">${filterAthletics.medal}</p>
    </div>
    </div>  
    `
                content.innerHTML += template
            }
        })
    }
    if(medalType == "Gold"){
        arrAthletes.forEach((filterAthletics) => {
            if (filterAthletics.medal == "Gold" && filterAthletics.sport == "Athletics") {
                const template = `
        <div class="card-atleta" id="card-atleta">
            <div class="atributos-atleta">
                <p class="nome">${filterAthletics.name}</p>
                <p class="genero">${filterAthletics.gender}</p>
                <p class="esporte">${filterAthletics.sport}</p>
                <p class="esporte">${filterAthletics.medal}</p>
    </div>
    </div>  
    `
                content.innerHTML += template
            }
        })

    }
    if(medalType == "Silver"){
        arrAthletes.forEach((filterAthletics) => {
            if (filterAthletics.medal == "Silver" && filterAthletics.sport == "Athletics") {
                const template = `
        <div class="card-atleta" id="card-atleta">
            <div class="atributos-atleta">
                <p class="nome">${filterAthletics.name}</p>
                <p class="genero">${filterAthletics.gender}</p>
                <p class="esporte">${filterAthletics.sport}</p>
                <p class="esporte">${filterAthletics.medal}</p>
    </div>
    </div>  
    `
                content.innerHTML += template 


            }
        })
    }
    if(medalType == "Bronze"){
        arrAthletes.forEach((filterAthletics) => {
            if (filterAthletics.medal == "Bronze" && filterAthletics.sport == "Athletics") {
                const template = `
        <div class="card-atleta" id="card-atleta">
            <div class="atributos-atleta">
                <p class="nome">${filterAthletics.name}</p>
                <p class="genero">${filterAthletics.gender}</p>
                <p class="esporte">${filterAthletics.sport}</p>
                <p class="esporte">${filterAthletics.medal}</p>
    </div>
    </div>  
    `
                content.innerHTML += template

            }
        })
    }
});

/*
arrAthletes.forEach((filterAthletics,index) => {
    if(filterAthletics.sport == "Country"){
        const template = `
        <div class="card-atleta" id="card-atleta">
            <div class="atributos-atleta">
                <p class="nome">${element.name}</p>
                <p class="genero">${element.gender}</p>
                <p class="esporte">${element.country}</p>
    </div>
    </div>  
    `  
    content.innerHTML += template   
}  
arrAthletes.forEach((filterAthletics,index) => {
    if(filterAthletics.sport == "Medal"){
        const template = `
        <div class="card-atleta" id="card-atleta">
        <div class="atributos-atleta">
            <p class="nome">${element.name}</p>
            <p class="genero">${element.gender}</p>
            <p class="esporte">${element.medal}</p>

</div>
</div>  
`   
    content.innerHTML += template
    }  

}


)})});
  
*/






/*arrAthletics.forEach((element, atletismo) => { // inicio do forEach
    if (atletismo == true) {

        if
        const template = `
            <div class="card-atleta" id="card-atleta">
                <div class="atributos-atleta">
                    <p class="nome">${element.name}</p>
                    <p class="genero">${element.gender}</p>
                    <p class="esporte">${element.sport}</p>



                    <p class="pais">${element.team}</p>
                    <p class="medalha">${element.medal}</p>
                </div>
            </div> */
