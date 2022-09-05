import {
  filterArr,
  orderCrescente,
  ordemDecrescente,
  porcentagemCal,
} from "../src/data.js";

describe("filtrar personagens vivos", () => {
  const mockList = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image:
        "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image:
        "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/2.jpeg",
    },
    {
      id: 6,
      name: "Abadango Cluster Princess",
      status: "Alive",
      species: "Alien",
      type: "",
      gender: "Female",
      origin: {
        name: "Abadango",
        url: "https://rickandmortyapi.com/api/location/2",
      },
      location: {
        name: "Abadango",
        url: "https://rickandmortyapi.com/api/location/2",
      },
      image:
        "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/6.jpeg",
    },
  ];

  it("filtrar", () => {
    const mockReturn = [
      {
        gender: "Female",
        id: 6,
        image:
          "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/6.jpeg",
        location: {
          name: "Abadango",
          url: "https://rickandmortyapi.com/api/location/2",
        },
        name: "Abadango Cluster Princess",
        origin: {
          name: "Abadango",
          url: "https://rickandmortyapi.com/api/location/2",
        },
        species: "Alien",
        status: "Alive",
        type: "",
      },
    ];

    expect(filterArr(mockList, "species", "Alien")).toMatchObject(mockReturn);
  });

  it("orderCrescente", () => {
    const mockReturn = [
      {
        gender: "Female",
        id: 6,
        image:
          "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/6.jpeg",
        location: {
          name: "Abadango",
          url: "https://rickandmortyapi.com/api/location/2",
        },
        name: "Abadango Cluster Princess",
        origin: {
          name: "Abadango",
          url: "https://rickandmortyapi.com/api/location/2",
        },
        species: "Alien",
        status: "Alive",
        type: "",
      },
      {
        gender: "Male",
        id: 2,
        image:
          "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/2.jpeg",
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        name: "Morty Smith",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        species: "Human",
        status: "Alive",
        type: "",
      },
      {
        gender: "Male",
        id: 1,
        image:
          "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        name: "Rick Sanchez",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        species: "Human",
        status: "Alive",
        type: "",
      },
    ];
    expect(mockList.sort(orderCrescente)).toMatchObject(mockReturn);
  });

  it("ordemDecrescente", () => {
    const mockReturn = [
      {
        gender: "Male",
        id: 1,
        image:
          "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        name: "Rick Sanchez",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        species: "Human",
        status: "Alive",
        type: "",
      },
      {
        gender: "Male",
        id: 2,
        image:
          "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/2.jpeg",
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        name: "Morty Smith",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        species: "Human",
        status: "Alive",
        type: "",
      },
      {
        gender: "Female",
        id: 6,
        image:
          "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/6.jpeg",
        location: {
          name: "Abadango",
          url: "https://rickandmortyapi.com/api/location/2",
        },
        name: "Abadango Cluster Princess",
        origin: {
          name: "Abadango",
          url: "https://rickandmortyapi.com/api/location/2",
        },
        species: "Alien",
        status: "Alive",
        type: "",
      },
    ];
    expect(mockList.sort(ordemDecrescente)).toMatchObject(mockReturn);
  });

  it("porcentagemCal", () => {
    expect(porcentagemCal(100, 490)).toBe("20%");
    expect(porcentagemCal(250, 490)).toBe("51%");
    expect(porcentagemCal(90, 490)).toBe("18%");
  });
})