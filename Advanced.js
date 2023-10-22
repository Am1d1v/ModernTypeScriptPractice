"use strict";
// Interfaces
function repairVehilce(vehicle) {
    switch (vehicle.name) {
        case 'Car':
            console.log(`Vehicle: Car, wheels: ${vehicle.wheels * 2}`);
            break;
        case 'Ship':
            console.log(`Vehicle: Ship, sail: ${vehicle.sail}`);
            break;
        case 'Airplane':
            console.log(`Vehicle: Airplane, wings: ${vehicle.wings}`);
            break;
        default:
            // const something: never = vehicle;
            console.log(vehicle); // IComplexVehicle
    }
}
