
export const dataFilter = (data, typeData, condition) => data.filter((character) => {
    return (character[typeData] === condition);
})
export const nameFilter = (data, search) => data.filter(character => {
    return character.name.toLowerCase().includes(search.toLowerCase());
})
export const computeStats = (data, typeData, condition) => data.reduce((initialType, totalType) => {
    return initialType + (totalType[typeData] === condition);
}, 0)

export const orderAz = (data, sortBy, order) => {

    if (order === "A-Z") {
        return data.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
    }
    if (order === "Z-A")  {

        return data.sort((a, b) => a[sortBy] < b[sortBy] ? 1 : -1);
    }
};
