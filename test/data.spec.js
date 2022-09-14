import { filtrarGenero, filtrarStatus, sortCharacters, filtrarEspecie } from '../src/data.js';

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
  it('is a function', () => {
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
  it('is a function', () => {
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

  it('should be a function', () => {
    expect(typeof sortCharacters).toBe('function');
  });

  it('should return "Morty", "Ricky", "Sam" for "Ricky", "Sam", "Morty" with order=="A-Z"', () => {
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

  it('should be a function', () => {
    expect(typeof sortCharacters).toBe('function');
  });

  it('should return "Sam", "Ricky", "Morty" for "Ricky", "Sam", "Morty" with order=="Z-A"', () => {
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

const filterSpecie = [{
  name: "Rick", 
  gender: "Male",
  specie: "Human"
}, {
  name: "Abadango Cluster Princess", 
  gender: "Female",
  specie: "Alien",
}
];

describe('Testando filtrarEspecie', () => {
  it('is a function', () => {
    expect(typeof filtrarEspecie).toBe('function');
  });

  it('Testando se quando chamamos a filtrarEspecie usando Human ela retorna o Rick', () => {
    expect(filtrarEspecie(filterSpecie, 'Alien')).toStrictEqual([{
      name: "Rick", 
      gender: "Male",
      specie: "Human"}]);
  });
});
