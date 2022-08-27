import { printCards, filterPokemon, selectNameAz, selectNameZa, pokeCalc } from "../src/data";

const cardMock =

  `<div class="container_item">
             <div class="boxImg">
            <p class="pokeNumber">025</p>
            <figure class= "pokeData">
            <img class="poke-img" src='IMG' alt=pikachu>
            </figure>
          <div class="items"></div>
          <h4>  Pikachu</h4>
          <span class="listName"> Type: eletric</span>
          <span class="listRarity"> Rarity: normal</span>
        </div>
      </div>
      </div>
      `
const arrayDisplayMock = {
  "pokemon": [
    {
      num: "025",
      name: "pikachu",
      type: ["eletric"],
      'pokemon-rarity': "normal",
      "img": "IMG"
    },
  ]
};

describe("printCards", () => {
  it("is a function", () => {
    expect(typeof printCards).toBe("function");
  });

  it("return display of cards", () => {
    expect(printCards(arrayDisplayMock, "", "", "")).toEqual(cardMock);
  })
})

const mockFilter = {
  "pokemon": [

    {
      num: "025",
      name: "pikachu",
      type: ["eletric"],
      "pokemon-rarity": "normal",
    },

    {
      num: "144",
      name: "articuno",
      type: ["ice", "flying"],
      "pokemon-rarity": "legendary",
    },

    {
      num: "145",
      name: "zapdos",
      type: ["electric", "flying"],
      "pokemon-rarity": "legendary",
    },

    {
      num: "197",
      name: "Umbreon",
      type: ["dark"],
      "pokemon-rarity": "normal",
    },

    {
      num: "229",
      name: "houndoom",
      type: ["dark", "fire"],
      "pokemon-rarity": "normal",
    },
  ]
};

describe("filterType", () => {
  it("is a function", () => {
    expect(typeof filterPokemon).toBe("function");
  });

  it("return pokemons filtered by type == dark", () => {
    expect(filterPokemon(mockFilter, "", "dark", "")).toEqual([{

      num: "197",
      name: "Umbreon",
      type: ["dark"],
      "pokemon-rarity": "normal",
    },

    {
      num: "229",
      name: "houndoom",
      type: ["dark", "fire"],
      "pokemon-rarity": "normal",
    },

    ]);
  });
})

describe("filterRarity", () => {
  it("is a function", () => {
    expect(typeof filterPokemon).toBe("function");
  });

  it("return pokemons filtered by rarity == legendary", () => {
    expect(filterPokemon(mockFilter, "legendary", "", "")).toEqual([{

      num: "144",
      name: "articuno",
      type: ["ice", "flying"],
      "pokemon-rarity": "legendary"
    },

    {
      num: "145",
      name: "zapdos",
      type: ["electric", "flying"],
      "pokemon-rarity": "legendary"
    }]);
  });
})

describe("filterName", () => {
  it("is a function", () => {
    expect(typeof filterPokemon).toBe("function");
  });

  it("return pokemons filtered by name == articuno", () => {
    expect(filterPokemon(mockFilter, "", "", "articuno")).toEqual([{
      num: "144",
      name: "articuno",
      type: ["ice", "flying"],
      "pokemon-rarity": "legendary"
    }
    ]);
  });
})

const mockOrderName = [
  {
    num: "025",
    name: "pikachu",
    type: ["eletric"],
  },

  {
    num: "197",
    name: "Umbreon",
    type: ["dark"],
  },

  {
    num: "229",
    name: "houndoom",
    type: ["dark", "fire"],
  },
  {
    num: "144",
    name: "articuno",
    type: ["ice", "flying"],
  }
]

describe("orderName", () => {
  it("is a function", () => {
    expect(typeof selectNameAz).toBe("function");
  });

  it("return pokemons sorted by name A-Z", () => {
    expect(selectNameAz(mockOrderName, "name-az")).toEqual(
      mockOrderName
    );
  });

  it("return pokemons sorted by name Z-A", () => {
    expect(selectNameZa(mockOrderName, "name-za")).toEqual(
      mockOrderName.reverse()
    );
  });
});

const pokeDark = [
  {
    num: "229",
    name: "houndoom",
    type: ["dark", "fire"],
  },
  {
    num: "197",
    name: "Umbreon",
    type: ["dark"],
  },
];

describe("pokeCalc", () => {
  it("is a function", () => {
    expect(typeof pokeCalc).toBe("function");
  });

  it("return 66.67% for pokemon type = dark", () => {
    expect(
      pokeCalc(mockOrderName.length, pokeDark.length)
    ).toEqual(50);
  });
});
