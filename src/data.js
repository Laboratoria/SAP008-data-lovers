//const medalIcon = [{ 'Gold': '🥇', 'Silver': '🥈', 'Bronze': '🥉' }]

/* ----------------FILTRO DAS MEDALHAS-------------------------- */

export function filterMedal(data, key, value) {
  const filter = data.filter((element) => element[key] === value);
  return filter;
}

/* ----------------SELECT DAS MODALIDADES----------------------- */
/* função para caregar os paises no select */
export function stringSport(data) {
  const item = data.map((element) => {
    return `
            <option value="${element.sport}">${element.sport}</option>
          `
  });
  return item.join(""); // ...new Set para remover itens repedidos do array
}

// [...new Set(item)]

/* ----------------SELECT DOS PAÍSES-------------------------- */
/* função para caregar os paises no select */
export function stringTeam(data) {
  const item = data.map((element) => {
    return `
            <option value="${element.team}">${element.team}</option>
          `
  });
  return item.join(""); // ...new Set para remover itens repedidos do array
}

/* ----------------FILTRO DOS DADOS-------------------------- */
export function filterData(data, key, value) {
  const filter = data.filter((element) => element[key] === value);
  return filter;
}

/* ----------------GERAÇÃO DOS CARDS-------------------------- */
export function createCards(data) {
  const cards = data.map(createCardElement).join("")
  return cards;
}

function createCardElement(element) {
  return `
            <div class="card-atleta" id="card-atleta">
                <div class="card-efeito" >
                    <div class="card-frente">
                        <p class="nome"><strong>Nome:</strong> ${element.name}</p>
                    </div>
                    <div class="card-verso">    
                        <div class="atributos-atleta">
                            <p class="genero"><strong>Gênero:</strong> ${element.gender}</p>
                            <p class="esporte"><strong>Modalidade:</strong> ${element.sport}</p>
                            <p class="pais"><strong>País:</strong> ${element.team}</p>
                            <p class="medalha"><strong>Medalha:</strong> ${element.medal}</p>
                            <p class="evento"><strong>Categoria:</strong> ${element.event}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
}

/* ----------------CÁLCULO AGREGADO-------------------------- */
export const computeStats = (data) => {
  let qtd = data.reduce((total, valor) => {
    if (valor.gender === "F") {
      return total + 1;
    }
    return total;
  }, 0);
  return `
          <h2 class="estatistica"><i>A porcentagem de atletas mulheres medalhistas foi de: <strong>${(qtd * 100 / data.length).toFixed(2)}%</strong></i></h2>
        `
}

export const computeStatsTeam = (data) => {
  let qtd = data.reduce((total, valor) => {
    if (valor.team === "Brazil" || valor.team === "Brazil-1") {
      return total + 1;
    }
    return total;
  }, 0);
  return `
          <h2 class="estatistica"><i>A porcentagem de medalhas conquistadas pelo Brasil foi de: <strong>${(qtd * 100 / data.length).toFixed(2)}%</strong></i></h2>
        `
}

/* ----------------BARRA DE PESQUISA-------------------------- 
export const userSearch = (data, condition) => {
  // ..
}
*/

// esta função recebe três parâmetros. O primeiro, data, nos entrega os dados. O segundo, sortBy, diz respeito a qual das informações quer usar para ordenar. O terceiro, sortOrder, indica se quer ordenar de maneira crescente ou decrescente.
export const ascendingOrder = (data) => {
  const order = data.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    else {
      return -1;
    }
  })
  return order;
}