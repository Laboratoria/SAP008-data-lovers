import { filtrarGenero, filtrarStatus, filtrarEspecie, sortCharacters, calculoAgregado } from '../src/data.js';

const filterGender = [{
  name: "Rick", 
  gender: "Male",
  status: "Alive"
}, {
  name: "Sam", 
  gender: "Female",
  status: "Alive"
}
];

describe('Testando filtrarGenero', () => {
  it('é uma função', () => {
    expect(typeof filtrarGenero).toBe('function');
  });

  it('Testando se quando chamamos a filtrarGenero usando Female ela retorna a Sam', () => {
    expect(filtrarGenero(filterGender, 'Female')).toStrictEqual([{name: "Sam", 
    gender: "Female",
    status: "Alive"}]);
  });
});

const filterStatus = [{
  name: "Rick", 
  gender: "Male",
  status: "Dead"
}, {
  name: "Sam", 
  gender: "Female",
  status: "Alive"
}
];

describe('Testando filtrarStatus', () => {
  it('é uma função', () => {
    expect(typeof filtrarStatus).toBe('function');
  });

  it('Testando se quando chamamos a filtrarStatus usando Dead ela retorna o Rick', () => {
    expect(filtrarStatus(filterStatus, 'Dead')).toStrictEqual([{name: "Rick", 
    gender: "Male",
    status: "Dead"}]);
  });
});

const personagens = [{
  name: "Ricky"
}, {
  name: "Sam"
}, {
  name: "Morty"
}
]

describe('sortCharacters', () => {

  it('é uma função', () => {
    expect(typeof sortCharacters).toBe('function');
  });

  it('deve retornar "Morty", "Ricky", "Sam" para "Ricky", "Sam", "Morty" com order=="A-Z"', () => {
    expect(sortCharacters(personagens, "A-Z")).toStrictEqual([{
      name: "Morty"
    }, {
      name: "Ricky"
    }, {
      name: "Sam"
    }
    ]);
  });

});

const personagens2 = [{
  name: "Ricky"
}, {
  name: "Sam"
}, {
  name: "Morty"
}
]

describe('sortCharacters', () => {

  it('é uma função', () => {
    expect(typeof sortCharacters).toBe('function');
  });

  it('deve retornar "Sam", "Ricky", "Morty" para "Ricky", "Sam", "Morty" com order=="Z-A"', () => {
    expect(sortCharacters(personagens2, "Z-A")).toStrictEqual([{
      name: "Sam"
    }, {
      name: "Ricky"
    }, {
      name: "Morty"
    }
    ]);
  });

});

describe('calcular a porcentagem', () => {
  it('é uma função', () => {
    expect(typeof calculoAgregado).toBe('function');
  });
  it('deve calcular uma porcentagem por um valor total e um parcial', () => {
    expect(calculoAgregado(2, 1)).toBe(50);

    expect(calculoAgregado(10, 3)).toBe(30);

    expect(calculoAgregado(100, 25)).toBe(25);

  });
});


const filterSpecies = [{
  name: "Rick", 
  gender: "Male",
  species: "Human"
}, {
  name: "Abadango Cluster Princess", 
  gender: "Female",
  species: "Alien",
}
];

describe('Testando filtrarEspecie', () => {
  it('é uma função', () => {
    expect(typeof filtrarEspecie).toBe('function');
  });

  it('Testando se quando chamamos a filtrarEspecie usando Human ela retorna o Rick', () => {
    expect(filtrarEspecie(filterSpecies, 'Human')).toStrictEqual([{
      name: "Rick", 
      gender: "Male",
      species: "Human"}]);
  });
});
