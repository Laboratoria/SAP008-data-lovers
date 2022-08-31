import { orderCrescente, ordemDecrescente } from "../src/data.js";

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
