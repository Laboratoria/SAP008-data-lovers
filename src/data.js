export function filterData(array, property, value) { //função para filtrar dados
  return array.results.filter(elem => elem[property] === value) //.filter somente acessa arrays. para acessar objetos, usamos "." (literal, como em .results)
}

export function showCards(infos) { //função para exibir cards
  return infos.map((elem) => `
    <div class="cards">
    <img id="photos" src="${elem.image}" alt="imagem do personagem"><br>
    <p id="names">${elem.name}</p><br>
    
      <ul class="cards-list">
      
        <p>Status: </p>
        <li>${elem.status}</li>

        <p>Gênero: </p>
        <li>${elem.gender}</li>
        
        <p>Espécie: </p>
        <li>${elem.species}</li>
      
      </ul>
    </div>
    `
  )//.join('')
}