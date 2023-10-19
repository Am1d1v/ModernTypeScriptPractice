"use strict";
// Interfaces
function repairVehilce(vehicle) {
    if (isCar(vehicle)) {
        console.log(`Wheels: ${vehicle.wheels}`);
    }
    else {
        console.log(`Sail: ${vehicle.sail}`);
    }
}
function isCar(car) {
    return 'wheels' in car;
}
const someCar = {
    engine: 'EngineName',
    wheels: 6
};
repairVehilce(someCar);
