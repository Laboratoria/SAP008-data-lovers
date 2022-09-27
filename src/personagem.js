import { filterByCriteriaValue, sortFilms} from './data.js';

import data from './data/ghibli/ghibli.js';

function dataCharacters (films) {
  let characters =[] 
    for (let i = 0; i < films.length; i++ ){
      characters=characters.concat(films[i].people)
    } 
    return characters
}

export function dataShowCharacters(films){
    let characters = dataCharacters(films) 
    

    document.getElementById ("cardsPersonagens").innerHTML=characters.map(character=>  `
    <div class="cardsPersonagens">
      <div class="flipPersonagens">
        <div class="front-personagens">
          <figure>
            <img src = "${character.img}" class = "card-poster">
          </figure>
        </div>
        <div class="back-personagens">
          <p class = "titles"><strong>${character.name} </strong></p>
          <p class = "infoPeoples"><strong>Release gender : </strong>${character.gender}</p>
          <p class = "infoPeoples"><strong> Age: </strong>${character.age}</p>
          <p class = "infoPeoples"><strong> eye_color : </strong>${character.eye_color}<p>
          <p class = "infoPeoples"><strong> hair_color: </strong>${character.hair_color}<p>
          <p class = "infoPeoples"><strong>Specie : </strong>${character.specie}<p>
        </div>
       </div>
      </div>
      `
      ).join("")
    return characters
   
  }


  
  dataShowCharacters(data.films)


  

  const filtroGenero = (e) => {
    let characters = dataCharacters(data.films) 
    const genderFilterSelec = e.target.value;
    const filter = filterByCriteriaValue (characters,"gender", genderFilterSelec )
    console.log(genderFilterSelec)
    
    
    
    console.log(filter)
  
  }
  const inputElement = document.getElementById("inputGenero")
  inputElement.addEventListener ("change", filtroGenero)


//função ordenar
dataShowCharacters(data.films)
const ordenatorPeople = (e) =>{
  const orderPeopleSelec = e.target.value;
  if (orderPeopleSelec !== ""){
    const filterOrderGender = sortFilms(data.films, orderPeopleSelec)
    dataShowCharacters(filterOrderGender)
  }
}


const order = document.getElementById("inputOrder")
order.addEventListener ("change", ordenatorPeople)

  /*dataShowCharacters(resultGenero)   
  const parcial = resultGenero.length
  const resultCalculo = CalAgregado(characters.length,parcial)
  document.getElementById("mensagem").innerHTML= "This category represents " +resultCalculo+ " % of the characters"*/
 // 63 a 66 calculo agregado 
  
  
  /*const allCharacters = getCharacters (data.films)

export function dataShowCharacters(characters){
    
    

    document.getElementById ("cardsPersonagens").innerHTML=characters.map(character=>  `
    <div class="cardsPersonagens">
      <div class="flipPersonagens">
        <div class="front-personagens">
          <figure>
            <img src = "${character.img}" class = "card-poster">
          </figure>
        </div>
        <div class="back">
          <p class = "titles"><strong>${character.name} </strong></p><br>
          <p class = "infoPeoples"><strong>Release gender : </strong>${character.gender}</p><br>
          <p class = "infoPeoples"><strong> Age: </strong>${character.age}</p><br>
          <p class = "infoPeoples"><strong> eye_color : </strong>${character.eye_color}<p><br>
          <p class = "infoPeoples"><strong> hair_color: </strong>${character.hair_color}<p><br>
          <p class = "infoPeoples"><strong>Specie : </strong>${character.specie}<p><br>
        </div>
       </div>
      </div>
      `
      )
    return characters
   
  }


  
  dataShowCharacters(allCharacters)


  

  const filtroGenero = (e) => {
    const genderFilterSelec = e.target.value;
    const filter = filterByCriteriaValue (allCharacters,"gender", genderFilterSelec )
    dataShowCharacters (filter)
  
  }
  const inputElement = document.getElementById("inputGenero")
  inputElement.addEventListener ("change", filtroGenero)*/



 
  
  

