const medalIcon = [{ 'Gold': '🥇', 'Silver': '🥈', 'Bronze': '🥉' }]

/* ----------------FILTRO DAS MEDALHAS-------------------------- */
export const medalFilter = (data, condition, subcondition) => {
  const medal = data.map((element) => {
    if (element.medal == condition && (element.sport == subcondition || element.team == subcondition)) {
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
  }).join("")
  return medal;
};

/* ----------------FILTRO DAS MODALIDADES-------------------------- */
/* função para caregar os paises no select */
export function stringSport(data) {
  const item = data.map((element) => {
    return `
            <option value="${element.sport}">${element.sport}</option>
          `
  });
  return [...new Set(item)].join(""); // ...new Set para remover itens repedidos do array
};

/* função para filtrar por pais */
export function filterSport(data, condition) {
  const cards = data.map((element) => {
    if (condition == element.sport) {
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
  }).join("")
  return cards;
};

/* ----------------FILTRO DOS PAÍSES-------------------------- */
/* função para caregar os paises no select */
export function stringTeam(data) {
  const item = data.map((element) => {
    return `
            <option value="${element.team}">${element.team}</option>
          `
  });
  return [...new Set(item)].join(""); // ...new Set para remover itens repedidos do array
};

/* função para filtrar por pais */
export function filterTeam(data, condition) {
  const cards = data.map((element) => {
    if (condition == element.team) {
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
  }).join("");
  return cards;
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
          <h2 class="estatistica"><i>A porcentagem de atletas mulheres foi de: <strong>${(qtd * 100 / data.length).toFixed(2)}%</strong></i></h2>
        `
};

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
};

/* ----------------BARRA DE PESQUISA-------------------------- */
export const userSearch = (data, condition) => {
  // ..
}

// esta função recebe três parâmetros. O primeiro, data, nos entrega os dados. O segundo, sortBy, diz respeito a qual das informações quer usar para ordenar. O terceiro, sortOrder, indica se quer ordenar de maneira crescente ou decrescente.
export const sortData = (data, sortBy, sortOrder) => {
  const item = data.map((element) => {
    if (sortBy == 'a-z') {
      return (element.name)
    }
  }).sort();
  return console.log(item)
};