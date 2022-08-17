import data from './data/harrypotter/data.js';


//console.log(data);
//console.log(data.characters[0].name)

//data.characters.forEach( characters=> console.log(characters.name))

const listaPersonagens = data.characters.map((user, index, array) => {
    return user.name;
})

const gryffindor = data.characters.filter((user, index, array) => user.house === 'Gryffindor');
const slytherin = data.characters.filter((user, index, array) => user.house === 'Slytherin');
const ravenclaw = data.characters.filter((user, index, array) => user.house === 'Ravenclaw');
const hufflepuff = data.characters.filter((user, index, array) => user.house === 'Hufflepuff');

const totalHouses = gryffindor.length + slytherin.length + ravenclaw.length + hufflepuff.length



console.log(listaPersonagens)
console.log(gryffindor)
console.log(slytherin)
console.log(ravenclaw)
console.log(hufflepuff)
console.log(totalHouses)
console.log((gryffindor.length / totalHouses)*100 + " %")
console.log((slytherin.length / totalHouses)*100 + " %")
console.log((ravenclaw.length / totalHouses)*100 + " %")
console.log((hufflepuff.length / totalHouses)*100 + " %")




