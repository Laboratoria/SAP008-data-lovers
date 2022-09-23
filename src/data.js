
export const filterData = (data, prop, name) => {
  if (typeof data !== "object" || typeof prop !== "string" || typeof name !== "string") {
    throw new TypeError
  }

  const filter = data.filter(obj => obj[prop] === name)
  return filter;
};


