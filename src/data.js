export const filtroDoSelect = (data, tagDoCampeao) => {
  const filtroDaFuncao = data.filter(champion => champion.tags.includes(tagDoCampeao));
  return filtroDaFuncao;
};

