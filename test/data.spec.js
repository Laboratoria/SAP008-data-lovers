import { filterByCriteriaValue, sortFilms } from '../src/data.js';



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
  const objCriteriaValue = [castle, fireflies]
  it('é função', () => {

    expect(typeof filterByCriteriaValue).toBe('function');
  });

  it('resultado de filterDirector', () => {
    expect(filterByCriteriaValue(objCriteriaValue, "director", "Hayao Miyazaki")).toEqual([castle]);
  });
});



describe('sortFilms', () => {
  const films = [castle, pomPoko, fireflies]
  it('é função', () => {

    expect(typeof sortFilms).toBe('function');
  });

  it('deve ordenar o filmes em ordem crescente de nomes', () => {
    expect(sortFilms(films, "a-z")).toEqual,([castle, fireflies, pomPoko]);
  });
  it('deve ordenar o filmes em ordem decrescente de nomes', () => {
    expect(sortFilms(films, "z-a")).toEqual([pomPoko, fireflies, castle]);
  });
});




/*it('returns `example`', () => {
  expect(example()).toBe('example');
});
});


describe('anotherExample', () => {
it('is a function', () => {
  expect(typeof anotherExample).toBe('function');
});

it('returns `anotherExample`', () => {
  expect(anotherExample()).toBe('OMG');
});
}); */


/*let retornoEsperado = [objDirector[0]];*/