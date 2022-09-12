//import { dataShowCharacters }from './data.js';

import data from './data/ghibli/ghibli.js';

export function dataShowCharacters(films){
    let characters =[] 
    for (let i = 0; i < films.length; i++ ){
      characters=characters.concat(films[i].people)
  
    }
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


  //join('');

  dataShowCharacters(data.films)


  const filterByGenero = (e) => {
    const filterGêneroSelec = e.target.value;
    const genderfilter = filterByGenero (data.films,"gender", filterGêneroSelec )
    dataShowCharacters(genderfilter)
    
  
  }
  const genderFilter = document.getElementById("inputGenero")
  genderFilter.addEventListener ("change", filterByGenero)
  

