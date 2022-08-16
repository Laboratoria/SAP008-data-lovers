  
export const dataFilter = (data,typeData, condition) => data.filter((character) => {
    return (character[typeData] === condition);
})
export const nameFilter = (data, search) => data.filter(character => {
    return character.name.toLowerCase().includes(search.toLowerCase());
})
export const computeStats = (data,typeData, condition) => data.reduce((initialType, totalType) => {
    return initialType + (totalType[typeData] === condition);
},0)
