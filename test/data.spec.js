import {rickAndMorty} from '../src/data.js';

const arrayTest = [
  {
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "unknown"
  },

  {
    name: "Morty Smith",
    status: "Alive",
    species: "unknown",
    gender: "Male"
  },

  {
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    gender: "Female"
  },

  {
    name: "Tiny Rick",
    status: "Dead",
    species: "Alien",
    gender: "Female"
  } 
];



describe('rickAndMorty', () => {

  it('rickAndMorty is a object', () => {
    expect(typeof rickAndMorty).toBe('object');
  });
});
  

describe('filtrarPorStatus', () => {
  it('é uma função', () => {
    expect(typeof rickAndMorty.filtrarPorStatus).toBe('function');

  });

  it('filtra o status dos personagens mortos', () => {
    const expectedStatus = rickAndMorty.filtrarPorStatus(arrayTest, "dead");
    expect(expectedStatus.length).toEqual(1);
    expect(expectedStatus).toEqual([arrayTest[3]]);
        
  });

  it('filtra o status dos personagens vivos', () => {
    const expectedStatus = rickAndMorty.filtrarPorStatus(arrayTest, "alive");
    expect(expectedStatus.length).toEqual(3);
    expect(expectedStatus).toEqual([arrayTest[0],arrayTest[1],arrayTest[2]]);
  });

});

  describe('filtrarPorEspecie', () => {
    it('é uma função', () => {
      expect(typeof rickAndMorty.filtrarPorEspecie).toBe('function');
   });

   it('filtra a espécie dos personagens alienígenas', () => {
    const personagem = rickAndMorty.filtrarPorEspecie(arrayTest, "alien");
    expect(personagem.length).toEqual(1);
    expect(personagem).toEqual([arrayTest[3]]);
    
   });

   it('filtra a espécie dos personagens desconhecidos', () => {
    const personagem = rickAndMorty.filtrarPorEspecie(arrayTest, "unknown");
    expect(personagem.length).toEqual(1);
    expect(personagem).toEqual([arrayTest[1]]);

   });

  });

    describe('filtrarPorGenero', () => {
      it('é uma função', () => {
        expect(typeof rickAndMorty.filtrarPorGenero).toBe('function');
      });

      it('filtra o gênero dos personagens femininos', () => {
        const personagem = rickAndMorty.filtrarPorGenero(arrayTest, "female");
        expect(personagem.length).toEqual(2);
        expect(personagem).toEqual([arrayTest[2],arrayTest[3]]);
      });
    });


  describe('buscarPorNome', () => {

    it('é uma função', () => {
      expect(typeof rickAndMorty.buscarPorNome).toBe('function');
    });

    it('deve buscar por um nome', () => {
      const personagens = rickAndMorty.buscarPorNome(arrayTest, "Rick");
      expect(personagens.length).toEqual(2);
    });
  });

