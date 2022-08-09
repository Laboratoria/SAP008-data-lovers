// estas funciones son de ejemplo

export const filterData = (data, condition) =>{
  let searchResult = data.filter((key) => key.type.includes(condition))
  return searchResult
  
}

  /* export const example = (data) => {
    console.log(data)
    return 'example';
  };
  
  export const anotherExample = () => {
    return 'OMG';
  }; */