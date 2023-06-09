import { filterByCriteriaValue, getCharacters, sortFilms, calculoAgregado} from './data.js';

import data from './data/ghibli/ghibli.js';



const allCharacters = getCharacters (data.films)

const estatistica = document.getElementById ("calculo")


export function dataShowCharacters(characters){
    
    

    document.getElementById ("cardsPersonagens").innerHTML=characters.map(character=>  `
    <div class="cardsPersonagens">
      <div class="flipPersonagens">
        <div class="front-personagens">
          <figure>
            <img src = "${character.img}" class = "card-poster">
          </figure>
        </div>
        <div class="back-personagens">
          <p2 class = "titles"><strong>${character.name} </strong></p2>
          <p2 class = "infoPeoples"><strong>Release gender : </strong>${character.gender}</p2>
          <p2 class = "infoPeoples"><strong> Age: </strong>${character.age}</p2>
          <p2 class = "infoPeoples"><strong> eye_color : </strong>${character.eye_color}<p2>
          <p2 class = "infoPeoples"><strong> hair_color: </strong>${character.hair_color}<p2>
          <p2 class = "infoPeoples"><strong>Specie : </strong>${character.specie}<p2>
        </div>
       </div>
      </div>
      `
      ).join("")
    return characters
   
  }


  
  dataShowCharacters(allCharacters)


  

  const filtroGenero = (e) => {
    const genderFilterSelec = e.target.value;
    const filter = filterByCriteriaValue (allCharacters,"gender", genderFilterSelec )
    dataShowCharacters (filter)
    
    const percent = calculoAgregado (allCharacters,"gender", genderFilterSelec )
    estatistica.innerHTML= createEstatistica(percent)

  }


  const createEstatistica = (e) => {
    return `
    <h1>Os personagens desse gênero representam ${e}%</h1>  
    `
  }



  const inputElement = document.getElementById("inputGenero")
  inputElement.addEventListener ("change", filtroGenero)


//função ordenar


const ordenatorPeople = (e) => {
  const orderPeopleSelec = e.target.value;
  if (orderPeopleSelec !== "") {
    const filterOrderPeople = sortFilms(allCharacters, orderPeopleSelec, "name")
    dataShowCharacters(filterOrderPeople)

    console.log(filterOrderPeople)
  }
}


const order = document.getElementById("inputOrder")
order.addEventListener("change", ordenatorPeople)

  