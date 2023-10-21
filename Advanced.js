"use strict";
// Interfaces
function repairVehilce(vehicle) {
    if (isCar(vehicle)) {
        console.log(`Wheels: ${vehicle.wheels}`);
    }
    else if (isShip(vehicle)) {
        console.log(`Sail: ${vehicle.sail}`);
    }
    else {
        //const something: never = vehicle; // never type
        console.log(vehicle.wings);
    }
}
function isCar(car) {
    return 'wheels' in car;
}
function isShip(ship) {
    return ship.sail !== undefined;
}
// const someCar: ICar = {
//     engine: 'EngineName',
//     wheels: 6
// }
// const someShip: IShip = {
//     engine: 'ShipEngineName',
//     sail: 'SailName'
// }
// repairVehilce(someCar);
// repairVehilce(someShip);
