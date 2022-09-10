const medalIcon = ['🥇', '🥈', '🥉']

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
                            <p class="medalha"><strong>Medalha:</strong> ${element.medal} ${medalIcon[0]}</p>
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
                            <p class="medalha"><strong>Medalha:</strong> ${element.medal} ${medalIcon[0]}</p>
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
/* ------------------------------------------------------- */

/* ----------------FILTRO DOS PAÌSES-------------------------- */
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
                            <p class="medalha"><strong>Medalha:</strong> ${element.medal} ${medalIcon[0]}</p>
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
/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
// esta função receberia os dados e nos retornaria os que cumprem com a condição.
export const filterData = (data, condition) => {
  const cards = data.map((element) => {
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
                            <p class="medalha"><strong>Medalha:</strong> ${element.medal} ${medalIcon[0]}</p>
                            <p class="evento"><strong>Categoria:</strong> ${element.event}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
  }).join("");
  return cards;
}






// esta função recebe três parâmetros. O primeiro, data, nos entrega os dados. O segundo, sortBy, diz respeito a qual das informações quer usar para ordenar. O terceiro, sortOrder, indica se quer ordenar de maneira crescente ou decrescente.
export const sortData = (data, sortBy, sortOrder) => {
  conv.value = '';
  convidados = data.sort();
  document.getElementById("presentes").innerHTML = "";

  for (var i = 0; i < convidados.length; i++) {
    return `
      
    `
  }
}

// essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo com o que os dados permitem.
export const computeStats = (data) => {
  let test = data.reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual;
  }, 0)
}