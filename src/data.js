/*estas funciones son de ejemplo

export const example = () => {
  return 'example';
}; */
export const filterFilms = (films) =>{


  return ' ';
}

export const sortFilms = (films,order ) => {
  if (order == "a-z") {
   return films.sort (function (a,b){
    if( a.title > b.title ){
      return 1 
      
    }
    if ( b.title > a.title) {
      
      return -1 

    }
   
   } ) 

  } 

 } 

export function printFilmsCards(data ) {
  return data.map((item) =>
    `
  <div class="cards">
    <div class="cardFlip">
      <div class="front">
        <figure>
          <img src = "${item.poster}" class = "poster">
        </figure>
      </div>
      <div class="back">
        <p class = "titles"><strong>${item.title} </strong></p><br>
        <p class = "infoFilms"><strong>Release Date: </strong>${item.release_date}</p><br>
        <p class = "infoFilms"><strong>Description: </strong>${item.description}</p><br>
        <p class = "infoFilms"><strong>Director: </strong>${item.director}<p><br>
        <p class = "infoFilms"><strong>Producer: </strong>${item.producer}<p><br>
        <p class = "infoFilms"><strong>Score: </strong>${item.rt_score}<p><br>
      </div>
     </div>
    </div>
    `
    )
  .join('');

}

export function getCharacters (films){
  let characters =[] 
  for (let i = 0; i < films.length; i++ ){
    characters=characters.concat(films[i].people)

  } 
  return characters 


}




