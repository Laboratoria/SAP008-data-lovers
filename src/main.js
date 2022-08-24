import { ghibli } from './data.js';
import data from './data/ghibli/ghibli.js';

const films = data.films;
const resultCountFilms = document.querySelector('#count-films');
const resultCountPeople = document.querySelector('#count-people');
const resultCountLocations = document.querySelector('#count-locations');
const resultCountVehicles = document.querySelector('#count-vehicles');

resultCountFilms.innerHTML = ghibli.countFilms(films);
resultCountPeople.innerHTML = ghibli.countPeople(films);
resultCountLocations.innerHTML = ghibli.countLocations(films);
resultCountVehicles.innerHTML = ghibli.countVehicles(films);

