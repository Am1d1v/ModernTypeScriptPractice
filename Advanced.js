"use strict";
// Interfaces
function repairVehilce(vehicle) {
    if (isCar(vehicle)) {
        console.log(`Wheels: ${vehicle.wheels}`);
    }
    else if (isShip(vehicle)) {
        console.log(`Sail: ${vehicle.sail}`);
    }
}
function isCar(car) {
    return 'wheels' in car;
}
function isShip(ship) {
    return ship.sail !== undefined;
}
const someCar = {
    engine: 'EngineName',
    wheels: 6
};
const someShip = {
    engine: 'ShipEngineName',
    sail: 'SailName'
};
repairVehilce(someCar);
repairVehilce(someShip);
