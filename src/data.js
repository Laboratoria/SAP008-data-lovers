
export const dataFilter = (data, typeData, condition) => data.filter((character) => {
    return (character[typeData] === condition);
})
export const nameFilter = (data, search) => data.filter(character => {
    return character.name.toLowerCase().includes(search.toLowerCase());
})
export const computeStats = (data, typeData, condition) => data.reduce((initialType, totalType) => {
    return initialType + (totalType[typeData] === condition);
}, 0)

export const orderAz = (data, order) => {
    const arrayOrder = [...data]
    if (order === "a-z") {
        return arrayOrder.sort((a, z) => (a.name > z.name ? 1 : -1));
    } else {
        return arrayOrder.sort((a, z) => (a.name < z.name ? -1 : 1));
    }
};
