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
    let media = (soma/champArray.length).toFixed(1);
    return media;
  } else if (tags === 'Support' || tags === 'Tank') {
    let defesa = champArray.map((champ) => champ.info.defense);
    let soma = defesa.reduce(function(soma, i) {
      return soma + 1
    })
    let media = (soma/champArray.length).toFixed(1);
    return media;
  } else {
    let magia = champArray.map((champ) => champ.info.magic);
    let soma = magia.reduce(function(soma, i) {
      return soma + 1
    })
    let media = (soma/champArray.length).toFixed(1);
    return media;
  }
}
//função para pegar o ataque, magia e defesa de todos os campeões conforme sua
//função no jogo. ex: atirador - ataque, mago - magia, suporte - defesa;
//pegar o valor de todos os atiradores, somar e dividir pela quantidade 
//de campeoes atiradores.
