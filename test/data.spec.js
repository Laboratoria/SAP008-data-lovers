import {pokemonAlphabeticalOrder,pokemonShiny,calculationPokemon,multFilterPokemon} from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

let pokemons = data.pokemon;

describe('Testing filters', () => {
  it('Must return all water pokemon', () => {
    const waterPokemons = multFilterPokemon(pokemons,'type','water');
    const isTypeWater = waterPokemons.map((item) => { 
      return item.type.includes('water')
    });

    expect(isTypeWater).not.toContain(false);
  });

  it('Must return rarity pokemon', () => {
    const legendaryPokemons = multFilterPokemon(pokemons,'pokemon-rarity','legendary');
    const isRarity = legendaryPokemons.map((item) => { 
      return item["pokemon-rarity"].includes('legendary')
    });

    expect(isRarity).not.toContain(false);
  });

  
  it('Must return pokemonByEgg', () => {
    const pokemonsByEgg = multFilterPokemon(pokemons,'egg','2 km');
    const comeFromEggs = pokemonsByEgg.map((item) => { 
      return item.egg.includes('2 km')
    });

    expect(comeFromEggs).not.toContain(false);
  });


  it('Must return pokemonByName', () => {
    const namedPokemon = multFilterPokemon(pokemons,'name','bulbasaur');
    const isItFounded = namedPokemon.map((item) => { 
      return item.name === 'bulbasaur';
    });

    expect(isItFounded).not.toContain(false);
  });

  it('Must return pokemon z-a', () => {

    let names = [];

    const ordered = pokemonAlphabeticalOrder(pokemons,'z-a');
    ordered.map((item) => { 
      names.push(item.name);
    });

    let isStartingWithZ = names[0].startsWith('z') && names[names.length-1].startsWith('a');

    expect(true).toEqual(isStartingWithZ);
  });

  it('Must return pokemon a-z', () => {

    let names = [];

    const ordered = pokemonAlphabeticalOrder(pokemons,'a-z');
    ordered.map((item) => { 
      names.push(item.name);
    });

    let isStartingWithA = names[0].startsWith('a') && names[names.length-1].startsWith('z');

    expect(true).toEqual(isStartingWithA);
  });

  it('Must return shiny pokemon', () => {
    const shinys = pokemonShiny(pokemons,"https://www.serebii.net/pokemongo/pokemon/shiny/");
    const isShinyImg = shinys.map((item) => { 
      return item.img.includes('/pokemon/shiny/')
    });

    expect(isShinyImg).not.toContain(false);
  });


  it('Must return pokemon percentage', () => {
    const pokemonSelected = multFilterPokemon(pokemons,"type","dragon")
    const calculated = calculationPokemon(pokemons.length,pokemonSelected.length);
    
    const isCorrectCalculation = calculated == 1.59;

    expect(true).toEqual(isCorrectCalculation);
  });
})
