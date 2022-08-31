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
    if (a.name === b.name) {
      return 0;
    }

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
    if (a.name === b.name) {
      return 0;
    }

    if (a.name > b.name) {
      return -1;
    } else {
      return 1;
    }
  });
  return ordem;
}

export function calculoAgregado1(tamArray, tamEspecie) {
  return Math.round((tamEspecie * 100) / tamArray);
}

export function calculoAgregado2(tamArray, tamGenero) {
  return Math.round((tamGenero * 100) / tamArray);
}

export function calculoAgregado3(tamArray, tamStatus) {
  return Math.round((tamStatus * 100) / tamArray);
}

export function calculoAgregado4(tamArray, tamOrdem) {
  return Math.round((tamOrdem * 100) / tamArray);
}
