function dogYears(planet, ageInSeconds) {
    const orbitalPeriods = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,
    
    };
    //convert the dogs age from seconds to earth years
    const ageInEarthYears = ageInSeconds / 31557600;
    //convert earth yeras to the corresponding planet years
  const ageOnPlanet = ageInEarthYears / orbitalPeriods[planet.toLowerCase()];
  //convert the age of dog years by multiplying by 7
  const ageInDogYears = ageOnPlanet * 7;
  //return result rounded off to two decimal places
  return parseFloat(ageInDogYears.toFixed(2));
}

//console.log(dogYears('earth', 1000000000));