"use strict";
// Interfaces
const user = {
    name: 'Anna',
    age: 35
};
function sendUserData(obj, db) {
    console.log(obj.name.toUpperCase());
}
sendUserData(user, 'somedb');
