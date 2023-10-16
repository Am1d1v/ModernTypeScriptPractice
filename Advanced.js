"use strict";
// Interfaces
const user = {
    login: 'Admin',
    password: '12345',
    age: 40,
};
//user.login = 'newAdmin'; readonly property
user.password = '012345';
const basicPorts = [3000, 3001, 5555];
//basicPorts[0] = 5; error
//basicPorts.push(1); error
const availablePorts = [3000, 3001];
const userFreeze = {
    login: 'User',
    password: 'user12345'
};
//userFreeze.login = 'newUser'; error
