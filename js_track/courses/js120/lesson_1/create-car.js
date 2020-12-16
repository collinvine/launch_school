/* eslint-disable max-lines-per-function */
function createCar(make, fuelLevel, engineOn) {
  return {
    carMake: make,
    carFuelLevel: fuelLevel,
    carEngineOn: engineOn,

    startEngine() {
      this.carEngineOn = true;
    },

    drive() {
      this.carFuelLevel -= 0.1;
    },

    stopEngine() {
      this.carEngineOn = false;
    },

    refuel(percent) {
      if ((this.carFuelLevel + (percent / 100)) <= 1) {
        this.carFuelLevel += (percent / 100);
      } else {
        this.carFuelLevel = 1;
      }
    },
  };
}

let raceCar1 = createCar('BMW', 0.5, false);
let raceCar2 = createCar('Ferrari', 0.7, true);

raceCar1.drive();
raceCar2.drive();


console.log(raceCar1, raceCar2);