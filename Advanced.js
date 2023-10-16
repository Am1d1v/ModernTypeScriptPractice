"use strict";
// Interfaces
const user = {
    login: 'Admin',
    password: '12345',
    age: 40,
};
const database = 'databaseName';
function sendUserData(obj, database) {
    console.log(obj, database);
}
sendUserData(user);
sendUserData(user, database);
