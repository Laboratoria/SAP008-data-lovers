
import { filterByCriteriaValue, getCharacters, sortFilms, calculoAgregado } from '../src/data.js';

const castle = {
  "title": "Castle in the Sky",
  "director": "Hayao Miyazaki",
  "producer": "Isao Takahata",
  "release_date": "1986",
  "rt_score": "95",
};

const fireflies = {
  "title": "Grave of the Fireflies",
  "director": "Isao Takahata",
  "producer": "Toru Harai",
  "release_date": "1988",
  "rt_score": "97",
};

const pomPoko = {
  "id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
  "title": "Pom Poko",
  "description": "As the human city development encroaches on the raccoon population's forest and meadow habitat, the raccoons find themselves faced with the very real possibility of extinction. In response, the raccoons engage in a desperate struggle to stop the construction and preserve their home.",
  "director": "Isao Takahata",
  "producer": "Toshio Suzuki",
  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/9/9e/Pom_Poko.jpg",
  "release_date": "1994",
  "rt_score": "78",
};

describe('filterByCriteriaValue', () => {

  const objCriteriaValue = [castle, fireflies, pomPoko]

  it('é função', () => {

    expect(typeof filterByCriteriaValue).toBe('function');
  });

  it('resultado de filterDirector', () => {
    expect(filterByCriteriaValue(objCriteriaValue, "director", "Hayao Miyazaki")).toEqual([castle]);
  });

  it('resultado de filterProducer', () => {
    expect(filterByCriteriaValue(objCriteriaValue, "producer", "Toru Harai")).toEqual([fireflies]);
  });

});


const Lusheeta = {
  "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
  "name": "Lusheeta Toel Ul Laputa",
  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
  "gender": "Female",
  "age": "13",
  "eye_color": "Black",
  "hair_color": "Black",
  "specie": "Human"
};

const Pazu = {
  "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
  "name": "Pazu",
  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
  "gender": "Male",
  "age": "13",
  "eye_color": "Black",
  "hair_color": "Brown",
  "specie": "Human"
};


const objPersonagens = [Lusheeta, Pazu]

describe('filterByCriteriaValue', () => {
  it('é função', () => {

    expect(typeof filterByCriteriaValue).toBe('function');
  });

  it('resultado de filterPersonagens', () => {
    expect(filterByCriteriaValue(objPersonagens, "id", "598f7048-74ff-41e0-92ef-87dc1ad980a9")).toEqual([Lusheeta]);
  });
});



describe('getCharacters', () => {
  const filmsWithPeople = [

    {
      people: [
        Pazu
      ]
    },
    { people: [Lusheeta] },
  ]


  it('é função', () => {


    expect(typeof getCharacters).toBe('function');
  });

  it('resultado de getCharacters', () => {
    expect(getCharacters(filmsWithPeople)).toEqual([Pazu, Lusheeta]);
  });


});


describe('sortFilms', () => {
  const films = [castle, pomPoko, fireflies]
  it('é função', () => {

    expect(typeof sortFilms).toBe('function');
  });

  it('deve ordenar o filmes em ordem crescente de nomes', () => {
    expect(sortFilms(films, "a-z")).toEqual, ([castle, fireflies, pomPoko]);
  });
  it('deve ordenar o filmes em ordem decrescente de nomes', () => {
    expect(sortFilms(films, "z-a")).toEqual([pomPoko, fireflies, castle]);
  });
});



describe('calculoAgregado', () => {
  const objPersonagens = [Lusheeta, Pazu]
  it('é função', () => {

    expect(typeof calculoAgregado).toBe('function');
  });

  it('deve retornar o percentual de personagens do gênero feminino', () => {
    expect(calculoAgregado(objPersonagens, "gender", "Female")).toEqual(50);
  });
  it('deve retornar o percentual de personagens do gênero masculino', () => {
    expect(calculoAgregado(objPersonagens, "gender", "Male")).toEqual(50);
  });
});
