export const menuSelectTipo = (buscarTipo, array) => {
  return array.filter(pokemon => pokemon.type.includes(buscarTipo)); 
};