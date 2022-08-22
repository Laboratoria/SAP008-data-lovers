export const filterData = (data, requirement, filterType) => {
  const filtroDaFuncao = (filterType === 'tags') ? data.filter(champion => champion.tags.includes(requirement)) : data.filter(champion => champion.difficulty.includes(requirement));
  return filtroDaFuncao;
};

export const sortData = (data) => data.sort((champ1, champ2) => {
  if (champ1.name > champ2.name) {
    return -1;
  } else if (champ1.name < champ2.name) {
    return 1;
  }
})

export const computerStats = (tags, champArray) => {
  if (tags === 'Marksman' || tags === 'Assassin' || tags === 'Fighter') {
    let ataque = champArray.map((champ) => champ.info.attack);
    let soma = ataque.reduce(function(soma, i){
      return soma + i;
    })
    console.log(soma)
  }
  console.log(tags, champArray)}

//função para pegar o ataque, magia e defesa de todos os campeões conforme sua
//função no jogo. ex: atirador - ataque, mago - magia, suporte - defesa;
//pegar o valor de todos os atiradores, somar e dividir pela quantidade 
//de campeoes atiradores.
