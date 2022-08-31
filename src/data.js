export const filtrar = (array, key, value) => {
  const filtro = array.filter((item) => item[key] === value);
  return filtro;
};

export function ordenar(array, value) {
  const copiaDaArray = [...array];

  if (value === "A-Z") {
    return ordemCrescente(copiaDaArray);
  } else if (value === "Z-A") {
    return ordemDecrescente(copiaDaArray);
  }
}

function ordemCrescente(array) {
  const ordem = array.sort(function (a, b) {


    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
  return ordem;
}

function ordemDecrescente(array) {
  const ordem = array.sort(function (a, b) {

    if (a.name > b.name) {
      return -1;
    } else {
      return 1;
    }
  });
  return ordem;
}

export function calculoAgregado(total, porcentagem) {
  return Math.round((porcentagem * 100) / total);
}

