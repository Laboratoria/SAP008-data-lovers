export const orderAz = (data, order) => {
    const arrayOrder = [...data]
    if (order === "a-z") {
        return arrayOrder.sort((a, z) => (a.name > z.name ? 1 : -1));
    } else {
        return arrayOrder.sort((a, z) => (a.name > z.name ? -1 : 1));
    }
};

export const filterName = (data, condition) => {
    const resultsNames = data.filter(
        (character) => character.name.toLowerCase().includes(condition.toLowerCase()));
    return resultsNames;
}
export const speciesFilter = (data, condition) => {
    const speciesResults = data.filter(
        (characters) => characters.species === condition
    ); return speciesResults;
}
export const genderFilter = (data, condition) => {
    const genderResults = data.filter(
        (characters) => characters.gender === condition
    ); return genderResults
}
export const statusFilter = (data, condition) => {
    const statusResults = data.filter(
        (characters) => characters.status === condition
    ); return statusResults
}
export const calculationInte = (total, porcent) => {
    const calculoIntegrado = Math.round((porcent * 100) / total);
    return calculoIntegrado;
}