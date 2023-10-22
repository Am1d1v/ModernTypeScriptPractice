"use strict";
// Interfaces
/*type Config = {protocol: 'http' | 'https',
               port: 3000 | 3001};


type StartFunction = (protocol: 'http' | 'https',
                      port: 3000 | 3001,
                      log: (msg: string) => void) => string;


interface IConfig {
    protocol: 'https',
    port: 3001
    log: (msg: string) => void;
}

interface IRole {
    role: string;
}

interface IConfigWithIRole extends IConfig, IRole {
    //test: string
}

const serverConfig: IConfigWithIRole = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
    log: (msg: string): void => {
        console.log(msg)
    }
}

const startServer: StartFunction = (protocol: 'http' | 'https',
                                    port: 3000 | 3001,
                                    log: Function): 'Server started' => {

    log(`Server started on ${protocol}://server:${port}`)

    return 'Server started'
};

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log)
*/
/*
interface IStyles {
    [key: string]: string
}

const styles: IStyles = {
    position: 'ablolute',
    top: '20px',
    left: '50px'
}



const serverConfig: IBasicConfig = {
    protocol: 'https',
    port: 3001,
   // role: 'admin'
}

const backupConfig: IBasicConfig = {
    protocol: 'http',
    port: 3000,
}

interface IBasicConfig {
    protocol: string;
    port: number
}

const startServer = (config: IBasicConfig): void => {
    
    console.log(`Port: ${config.port}, Protocol: ${config.protocol}`);
}
startServer(serverConfig);
*/
// Interface or Type
/*
interface IConfig {
    protocol: 'http' | 'https';
    port: 3000 | 3001;
}

interface IRole {
    role: string;
}

interface IConfigWithIRole extends IConfig, IRole {

};

type Protocol = 'http' | 'https';

type Config = {
    protocol: Protocol ;
    port: 3000 | 3001;
}

type Role = {
    role: string;
}

type ConfigWithRole = Config & Role;
*/
// Type Inference
/*
let num;
num = 1000; // Any Type

interface IUserData {
    isBirthday: boolean;
    age: number;
    username: string;
}

const userData = '{"isBirthday": true, "age": 35, "username": "Anna"}';
const userObj: IUserData = JSON.parse(userData); // Any Type if no interface
console.log(userObj)


let isOkay = true;
let movement: boolean | string = false;

if(isOkay){
    movement = 'moving';
}


const isOk = true; // true type
const somenum: number = 1000; // number type
const defnum = 100; // 100 type
*/
// Non-Null & Non-Undefined
/*
interface IUser {
    name: string;
    age?: number
}

const user: IUser = {
    name: 'Anna',
    age: 35
}

function sendUserData(obj: IUser, db: string): void {
    console.log(obj!.name.toUpperCase());
}
sendUserData(user, 'somedb')
*/
// Optional Property Modifier
/*
interface IUser {
    login: string;
    password: string;
    age: number;
    addr?: string;
}

const user: IUser = {
    login: 'Admin',
    password: '12345',
    age: 40,
}

const database = 'databaseName';

function sendUserData(obj: IUser, database?: string): void{
    console.log(obj, database)
}
sendUserData(user);
sendUserData(user, database);

*/
// Readonly Property Modifier
/*
interface IUser {
    readonly login: string;
    password: string;
    age?: number;
    readonly addr?: string;
}

const user: IUser = {
    login: 'Admin',
    password: '12345',
    age: 40,
}

//user.login = 'newAdmin'; readonly property
user.password = '012345';


const basicPorts: readonly number[] = [3000, 3001, 5555];
//basicPorts[0] = 5; error
//basicPorts.push(1); error

const availablePorts: readonly [number, number] = [3000, 3001];

const userFreeze: Readonly<IUser> = {
    login: 'User',
    password: 'user12345'
}

//userFreeze.login = 'newUser'; error
*/
// Enums
/*
enum Directions {
    TOP,
    RIGHT,
    LEFT,
    BOTTOM
}

enum  TimingFunc {
    EASE = 'ease',
    EASE_IN = 'ease-in',
    LINEAR = 'linear',
}

function frame (elem: string, dir: Directions, tFunc: TimingFunc): void {
    if(dir === Directions.RIGHT){
        console.log(tFunc);
    }
}
frame('id', Directions.RIGHT, TimingFunc.EASE_IN);
*/
// Type Unknown
//const someValue: unknown = 10;
//someValue.method();
/*
function fetchData(data: unknown): void {
    if(typeof data === 'string'){
        console.log(data.toUpperCase());
    }
}

const userData = '{"isBirthday": true, "age": 30, "userName": "Anna"}';

function safeParse(str: string): unknown{
    return JSON.parse(str);
}

const data = safeParse(userData);
//console.log(data);

function transeferData(data: unknown): void {
    if(typeof data === 'string'){
        console.log(data.toUpperCase());
    } else if (typeof data === 'object' && data){
        console.log(data);
    } else {
        console.log('Some Error');
    }
}

transeferData(data);


try {
    if(1){ throw new Error('Error')};
} catch (e){
    if(e instanceof Error){
        console.log(e.message)
    }
}


type T0 = any | unknown; // any type
type T1 = number | unknown; // unknown type
type T2 = any & unknown; // unknown type
type T3 = number & unknown; // number type
*/
/*
const dataFromControl = {
    water: 200,
    el: 350
};

function checkReadings(data: typeof dataFromControl): boolean{
    const dataFromUser = {
        water: 200,
        el: 350
    }

    if(data.el === dataFromUser.el && data.water === dataFromUser.water){
        return true
    } else {
        return false
    }
}

console.log(checkReadings(dataFromControl))
*/
// Type Assertion
/*
const fetchData = (url: string, method: 'GET' | 'POST'): void => {
    console.log('fetched', `Method: ${method}`);
}

/* const reqOptions = {
    url: 'https:.//someulr.com',
    method: 'GET' as 'GET'
} */
/*
const reqOptions = {
    url: 'https:.//someulr.com',
    method: 'GET'
    } as const

const str = 'str';
const method = 'GET'


fetchData('aaa', 'GET');
//fetchData(reqOptions.url, reqOptions.method as 'GET');
fetchData(reqOptions.url, reqOptions.method);
fetchData(reqOptions.url, method);
*/
/*
const box = document.querySelector('.box') as HTMLElement;
box.style.backgroundColor = 'violet';
const input = document.querySelector('input') as HTMLInputElement;

const someNumber: number = +input.value;
//const someNumber: number = input.value as any as number; // Bad Practice
console.log(someNumber, `Type: ${typeof someNumber}`);


let a = 'value'; // string type
let b = 'value' as const; // 'value' type

let c = {d: 100} as const;

let t = ['one', 2, 3] as const;

let value = 'value';
let arr = ['one', 'two', 3]
let obj = {d: 100}
*/
// const x = new Number(10);
// const y = 10;
// console.log( x == y);
// console.log( x === y);
// let q: Number = new Number(10);
// let w: number = 5;
// q = w;
// console.log(q);
//w = q;
/* const num = 10;
const strNum: string = num.toString();
console.log(strNum, typeof strNum); // string type

const str = '5';
const numStr: number = +str;
console.log(numStr, typeof numStr); // number type
 */
/* interface IDepartment {
    name: string;
    budget: number;
}

const department: IDepartment = {
    name: 'webDev',
    budget: 50000
}

interface IProject {
    name: string;
    projectBudget: number;
}

/* const mainProject: Project = {
    ...department,
    projectBudget: 5000
}
console.log(mainProject)


 function transformDepartment(department: IDepartment, amount: number): IProject {

    return {
        name: department.name,
        projectBudget: amount
    }
}

const mainProject = transformDepartment(department, 5000);
console.log(mainProject); */
// Type Guard
/*
const btn = document.querySelector('.btn') as HTMLElement;
btn.style.margin = '20px';
btn?.addEventListener('click', () => {
    alert('Clicked');
})

 */
/* function printType(type: string | string[] | number | boolean): void{
    if(Array.isArray(type)){
        type.forEach(type => console.log(`${type}, Type: string[]`));
    } else if (isNumber(type)){
        console.log(type);
    }
}

/*
function isNumber(n: string | boolean | number): n is number{
    return typeof n === 'number';
}
*/
/*
function isNumber(n:unknown): n is number{
    return typeof n === 'number';
}

printType('str');
printType(6);
 */
/*
interface Car {
    engine: string;
    wheels: number;
}

interface Ship {
    engine: string;
    sail: string;
}


function repairVehilce(vehicle: Car | Ship): void{
    if(isCar(vehicle)){
        console.log(`Wheels: ${vehicle.wheels}`);
    } else if (isShip(vehicle)){
        console.log(`Sail: ${vehicle.sail}`);
    }
}


function isCar(car: Car | Ship): car is Car{
    return 'wheels' in car;
}

function isShip(ship: Car | Ship): ship is Car{
    return (ship as Ship).sail !== undefined;
}

const someCar: Car = {
    engine: 'EngineName',
    wheels: 6
}

const someShip: Ship = {
    engine: 'ShipEngineName',
    sail: 'SailName'
}

repairVehilce(someCar);
repairVehilce(someShip);
*/
// Type Never
/*
interface ICar {
    name: 'Car';
    engine: string;
    wheels: number;
}

interface IShip {
    name: 'Ship';
    engine: string;
    sail: string;
}

interface IAirplane {
    name: 'Airplane';
    engine: string;
    wings: string;
}

interface INewVehicle {
    name: 'newVehicle';
    engine: string;
    wings: string;
}

type Vehicle =  ICar | IShip | IAirplane | INewVehicle;
*/
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
/*
function repairVehilce(vehicle: Vehicle): void{

    switch (vehicle.name){
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
           // const something: never = vehicle;
            console.log(vehicle); // never type // now it is INewVehicle type
    }
}

function isCar(car: Vehicle): car is ICar{
    return 'wheels' in car;
}

function isShip(ship: Vehicle): ship is IShip{
    return (ship as IShip).sail !== undefined;
}
*/
/* const someCar: ICar = {
    engine: 'EngineName',
    wheels: 6
}

const someShip: IShip = {
    engine: 'ShipEngineName',
    sail: 'SailName'
}

repairVehilce(someCar);
repairVehilce(someShip); */
// Function Overloading
/*
interface Square {
    side: number;
    area: number;
}

interface Rect {
    a: number;
    b: number
    area: number;
}


/*
function calculateArea(a: number, b?: number): Square | Rect{

    if(b){
        const rect: Rect = {
            a, b,
            area: a * b
        }

        return rect;
    } else {
        const square: Square = {
            side: a,
            area: a * a
        }
        return square;
    }
}


function calculateArea(side: number): Square
function calculateArea(a: number, b: number): Rect
function calculateArea(a: number, b?: number): Square | Rect{

    if(b){
        const rect: Rect = {
            a, b,
            area: a * b
        }

        console.log(rect);
        return rect;
    } else {
        const square: Square = {
            side: a,
            area: a * a
        }

        console.log(square);
        return square;
    }
}
calculateArea(10);
calculateArea(10, 6);
*/
// Right Interface Separation
/*
// Bad Practice
interface ICar {
    name: 'Car';
    engine: string;
    wheels: number;
}

interface IShip {
    name: 'Ship';
    engine: string;
    sail: string;
}

interface IAirplane {
    name: 'Airplane';
    engine: string;
    wings: string;
}

interface IComplexVehicle {
    name: 'Car' | 'Ship' | 'Airplane';
    engine: string;
    wheels?: number;
    sail?: string;
    wings?: string;
}

type Vehicle = ICar | IShip | IAirplane;

function repairVehilce(vehicle: IComplexVehicle): void{

    switch (vehicle.name){
        case 'Car':
            console.log(`Vehicle: Car, wheels: ${vehicle.wheels! * 2}`);
            break;
        case 'Ship':
            console.log(`Vehicle: Ship, sail: ${vehicle.sail}`);
            break;
        case 'Airplane':
            console.log(`Vehicle: Airplane, wings: ${vehicle.wings}`);
            break;
        default:
           // const something: never = vehicle;
            console.log(vehicle);  // IComplexVehicle
    }
}

const car: IComplexVehicle = {
    name: 'Car',
    engine: 'EngineName'
}

repairVehilce(car);
*/
// Type Guard
var AnimalStatus;
(function (AnimalStatus) {
    AnimalStatus["Available"] = "available";
    AnimalStatus["NotAvailable"] = "not available";
})(AnimalStatus || (AnimalStatus = {}));
function isAvailable(res) {
    if (res.status === AnimalStatus.Available) {
        console.log(res);
        return true;
    }
    else {
        return false;
    }
}
function checkAnimal(animal) {
    if (isAvailable(animal)) {
        return animal;
    }
    else {
        return `${animal} is missing`;
    }
}
const someAnimal = {
    data: {
        animal: 'bird',
        breed: 'BirdBreed'
    },
    status: AnimalStatus.Available
};
checkAnimal(someAnimal);
