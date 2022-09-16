import { filterByCriteriaValue } from './data.js';

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



 
  
  

