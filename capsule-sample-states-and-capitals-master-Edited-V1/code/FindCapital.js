const DATA = require("./Data");
const STATES_DATA = DATA.STATES_DATA

module.exports.function = function findCapital (state) {
   
  let stateLower = state.toLowerCase();
  let stateData = STATES_DATA.find(obj => obj.state === stateLower);
  
  let capital, stateGraphic, population;
  if (stateData) {
    capital = stateData.capital;
    stateGraphic = stateData.imgURL;
    population = stateData.population;
  }
 
  return {
    capital: capital,
    stateGraphic: stateGraphic,
    population: population
  } 
}
