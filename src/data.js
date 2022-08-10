
// estas funciones son de ejemplo

export const filterType = (data, condition) =>{
  return data.filter((key) => key.type.includes(condition))
}

export const filterGeneration = (data, condition) =>{
  return data.filter((key) => key.generation.name.includes(condition))
}

/* export const sortData = (data, sortBy) =>{
  if(sortBy=="A-Z"){
    return data.sort();
  }else{
    return data.sort().reverse();

  }
} */


  /* export const example = (data) => {
    console.log(data)
    return 'example';
  };
  
  export const anotherExample = () => {
    return 'OMG';
  }; */

