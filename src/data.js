export const filtroDoSelect = (data, tagDoCampeao) => {
  const filtroDaFuncao = data.filter(champion => champion.tags.includes(tagDoCampeao));
  return filtroDaFuncao;
};

export const ordenandoCampeoes = (data) => data.sort((champ1, champ2) => {
  if (champ1.name > champ2.name) {
    return -1;
  } else if (champ1.name < champ2.name) {
    return 1;
  }
})

