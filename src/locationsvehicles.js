import data from '../data/ghibli/ghibli.js';

const films = data.films;

function printCatalogueLoc(films) {
  const arrayLoc = films.map((film) => {
    const locations = film.locations.map((loc) => {
      const templateLoc = `
            <div class="card">
              <div class="card-img-cut">
                <img class="card-img" src="${loc.img}" alt="${loc.name}" name="${loc.name}"></button>
              </div>
              <div class="card-txt">
                <h4>${film.title}</h4>
                <p>${loc.name}</p>
              </div>
            </div>
            `;
      return templateLoc;
    });
    return locations.join('');
  })
  return arrayLoc.join('');
}

function printCatalogueVeh(films) {
  const arrayVeh = films.map((film) => {
    const vehicles = film.vehicles.map((veh) => {
      const templateVeh = `
            <div class="card">
                <div class="card-img-cut">
                <img class="card-img" src="${veh.img}" alt="${veh.name}" name="${veh.name}"> </button>
              </div>
              <div class="card-txt">
                <h4>${film.title}</h4>
                <p>${veh.name}<p>
                <p>${veh.vehicle_class}<p>
              </div>
            </div>
            `;
      return templateVeh;
    });
    return vehicles.join('');
  })
  return arrayVeh.join('');
}

const catalogue = document.querySelector('.catalogue');
const btnLocations = document.querySelector('.btn-locations');
const btnVehicles = document.querySelector('.btn-vehicles');
const vehiclesInfos = printCatalogueVeh(films);
const locationsInfos = printCatalogueLoc(films);
const locationsVehicles = locationsInfos.concat(vehiclesInfos);
catalogue.innerHTML = locationsVehicles;

btnLocations.addEventListener('click', () => {
  catalogue.innerHTML = printCatalogueLoc(films);
})

btnVehicles.addEventListener('click', () => {
  catalogue.innerHTML = printCatalogueVeh(films);
})
