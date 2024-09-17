/*  -----question-----
Someone once said that a human year is equal to 7 dog years.

Create a function named dogYears, that accepts the name of a planet, and the age of the dog in seconds. Your function should return the age of the dog on that planet in dog years.

    earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds.
    mercury: orbital period 0.2408467 Earth years.
    venus: orbital period 0.61519726 Earth years.
    mars: orbital period 1.8808158 Earth years.
    jupiter: orbital period 11.862615 Earth years.
    saturn: orbital period 29.447498 Earth years.
    uranus: orbital period 84.016846 Earth years.
    neptune: orbital period 164.79132 Earth years.

If you were told that a dog was 1,000,000,000 seconds old, you should calculate that the dog would be 221.82 Earth-years old. */


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

console.log(dogYears('earth', 1000000000));
console.log(dogYears('uranus', 1000000000));


/* Explanation

    Orbital Periods:
        I created an object called orbitalPeriods where the keys are the names of the planets, and the values are their orbital periods in Earth years.

    Age Conversion:
        I converted the dog's age from seconds to Earth years by dividing the age in seconds by the number of seconds in an Earth year (31,557,600 seconds).
        Then, I converted the Earth years to the corresponding planet's years by dividing by the planet's orbital period.

    Dog Years Calculation:
        After finding the age of the dog on the planet, I multiplied that age by 7 to convert it into dog years.

    Formatting the Result:
        Finally, the result is rounded to two decimal places using toFixed(2) and returned as a floating-point number using parseFloat.*/