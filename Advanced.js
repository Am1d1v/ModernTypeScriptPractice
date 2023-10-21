"use strict";
// Interfaces
// function repairVehilce(vehicle: Vehicle): void{
//     if(isCar(vehicle)){
//         console.log(`Wheels: ${vehicle.wheels}`);
//     } else if (isShip(vehicle)){
//         console.log(`Sail: ${vehicle.sail}`);
//     } else {
//         //const something: never = vehicle; // never type
//         console.log(vehicle.wings);
//     }
// }
function repairVehilce(vehicle) {
    switch (vehicle.name) {
        case 'Car':
            console.log(`Vehicle: Car, wheels: ${vehicle.wheels}`);
            break;
        case 'Ship':
            console.log(`Vehicle: Ship, sail: ${vehicle.sail}`);
            break;
        case 'Airplane':
            console.log(`Vehicle: Airplane, wings: ${vehicle.wings}`);
            break;
        default:
            console.log(vehicle); // never type      
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
