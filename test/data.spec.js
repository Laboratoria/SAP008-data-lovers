import { pokemonByType } from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

let pokemons = data.pokemon;

describe('Testing pokemonByType filter', () => {
  it('Must return all water pokemon', () => {
    const waterPokemons = pokemonByType(pokemons,'water');
    const isTypeWater = waterPokemons.map((item) => { 
      return item.type.includes('water')
    });

    expect(isTypeWater).not.toContain(false);
  });
})