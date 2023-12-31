
// Basic Types

/*let userName: string = 'Dima';

//userName.isInteger();
//userName = 5;
*/

//const isBirthday: boolean = true;
//const age: number = 30;
//const username: string = 'john';

// Functions

/*
function logBirthdate(isBirthday: boolean, username: string, age: number): string{
    if(isBirthday){
        //console.log(`Congrats ${username}, ${age + 1}`);
        return `Congrats ${username}, ${age + 1}`;
    } else {
        return 'Error'
    }

    //return undefined;
}

const logBirthday  = (isBirthday: boolean, username: string, age: number): string =>{
    if(isBirthday){
        //console.log(`Congrats ${username}, ${age + 1}`);
        return `Congrats ${username}, ${age + 1}`;
    } else {
        return 'Error'
    }

    //return undefined;
}

logBirthdate(true, 'Jack', 30);
console.log(logBirthday(true, 'Anna', 40));
*/



// Any Type

/*const userData = '{"isBirthday": true, "username": "Jack", "age": 40}';


const userObj: {isBirthday: boolean, username: string, age: number} = JSON.parse(userData);
console.log(userObj);


let salary; // any type
salary = 10000;

let salary1: number;
salary1 = 10000;

*/

/*
const currRate = "1.05";

const fetchCurr = (response: string): number => {
    const data = JSON.parse(response);
    return data;
}

function transfer(available: boolean, amount: number, comission: number): void{
    if(available){
        let res: number = fetchCurr(currRate) * amount * comission;
        console.log(res);
    } else {
        console.log('Transfer not available');
    }
}

transfer(true, 1000, 1.05);
*/


// Type Never

/*
const endless = () => {
    while (true){
    
    }
}

const createError = (message: string) => {
    throw new Error(message);
}
*/



// Null & Undefined Types

/* 
let something; // Any type
console.log(typeof(something)); // Undefined

const test: null = null;
const test2: any = null;
//const test3: string = null;
//const test4: string = null;

function RandomData(){
    if(Math.random() < 0.5){
        return null;
    } else {
        return '     Some Data      ';
    }
}

const someData = RandomData();

// if(typeof(someData) === 'string'){
//     const trimmedData = someData.trim();
//     console.log(trimmedData);
// }

const trimmedData = someData ? someData.trim() : null; 
*/


// Symbol Type

/* 
let id: symbol = Symbol('id');

const data = {
    [id]: 1
}
console.log(data[id]);

 */


// Object type

/*
const userData = {
    isBirthday: true,
    age: 30,
    name: 'Jack'
}

/* 
function logBirthday(data: {name: string, age: number, isBirthday: boolean}): void {
    if(data.isBirthday){
        console.log(`Congrats ${data.name}, age: ${data.age + 1}`)
    }
}

 

function logBirthday({isBirthday, name, age}: {isBirthday: boolean, name: string, age: number}): void {
    if(isBirthday){
        console.log(`Congrats ${name}, age: ${age + 1}`)
    }
}

logBirthday(userData);
*/



// Array

/*
const departments: string[] = ['dev', 'design', 'marketing'];
const department = departments[0];

const nums: number[] = [1, 2, 3];
const nums2: number[][] = [[1, 2, 3], [4, 5, 6]];

const report = departments
                    .filter((department: string) => department !== 'dev')
                    .map((department: string) => `${department} - done`);
console.log(report);


const [first] = report;
console.log(first);
*/


/*const electricityUserData = {
    readings: 90,
    units: "kWt",
    mode: "double"
};

const waterUserData = {
    readings : 5,
    units: "m3"
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayment: number[] = [0, 0]; // [Electricity, Water]

const calculatePayments = ({readings, mode}: {readings: number, mode: string}, wData: {readings: number}, elRate: number, wRate: number): void => {
    if(mode === "double" && readings < 50){
        monthPayment[0] = readings * elRate * 0.7;
    } else {
        monthPayment[0] = readings * elRate;
    }

    monthPayment[1] = wData.readings * wRate
   
    console.log(`
    Readings: ${readings}
    Mode: ${mode}
    WaterData: ${wData.readings}
    elRate: ${elRate}
    wRate: ${wRate}
    `)
};

console.log(calculatePayments(electricityUserData, waterUserData, elRate, wRate));
*/


// Tuples

/*const userData = {
    isBirthday: true,
    age: 30,
    name: 'Jack'
}

const userDataTuple: [boolean, number, string] = [true, 30, 'Jack'];
const userDataTuple2: [boolean, number, ...string[]] = [true, 30, 'Jack', 'Anna', 'Helga'];
//userDataTuple[0] = 'true';
userDataTuple[0] = true;

const [isBirthday, Age, username] = userDataTuple;

const filtered = userDataTuple.filter((elem) => {
    return typeof(elem) !== 'boolean' 
})
console.log(filtered);

const userDataTuple3: [...boolean[], string] = [false, true, false, 'Dima'];
*/


// Union

/*
const message: string | number = 'Some Message';
const messages: string[] | number[] = ['a', 'b'];

function printMessage(message: string | number): void{
    console.log(message);
}
printMessage('print message');
printMessage(10);
*/


// Narrowing
/* 
function printMessage(message: string | number): void{
    if(typeof(message) === 'string'){
        console.log(message.toUpperCase());
    } else {
        console.log(message.toFixed(0))
    }
}
printMessage('print message');
printMessage(10.8);

 */
/*
function printSomething(item: string | number | boolean): void{
    if( typeof item === 'string' || typeof item === 'number'){
        console.log(item.toString())
    } else {
        console.log(item);
    }
}

printSomething('Message');
printSomething(5);
printSomething(true);
*/
/* 
function printSomething(item: string[] | number | boolean): void{
    if(Array.isArray(item)){
        item.forEach(i => {
            console.log(i + ' strArray')
        })
    } else if (typeof item === 'number'){
        console.log(item.toFixed(0))
    } else {
        console.log(item)
    }
}

printSomething(5);
printSomething(['a', 'b']);
printSomething(true);


const printReading = (a: number | string, b: number | boolean): void => {
    if(a === b){
        console.log(a, b);
    }
}
printReading(100, 100);


const printReading2 = (a: number[] | string, b: number | boolean): void => {
    console.log(a.slice(0, 3));
}



const checkReading = (readings: {system: number} | {user: number}): void => {
    if('system' in readings){
        console.log(readings.system);
    } else {
        console.log(readings.user);
    }
}


function logValue(x: string | Date){
    if(x instanceof Date){
        console.log(x); // Date type
    }
}

 */



// Literal Types
/* 
let msg: 'Message' = 'Message';

const port3000: number = 3000;
const port3001: number = 3001;

//msg = '';

function start(protocol: 'http' | 'https', port: 3000 | 3001): 'Started'{

    if(port === port3000 || port === port3001){
        console.log(`Server started on ${protocol}://server:${port}`);
    } else {
        console.error('Invalid port');
    }

    
    return 'Started';
}

start('https', 3000);


function createAnimation(id: string | number,
                         animationName: string,
                         timingFunction: 'ease' | 'ease-out' | 'ease-in' = 'ease',
                         duration: number,
                         iterationCount: 'infinite' | number): void {
 //   const elem = document.querySelector(`#${id}`) as HTMLElement;
 //   if(elem){
   //     elem.style.animation = `${animationName} ${timingFunction} ${duration} ${iterationCount}`;
       console.log(`${animationName} ${timingFunction} ${duration} ${iterationCount}`);
   // }
    
}

createAnimation('id', 'fade', 'ease', 5, 'infinite');

 */


// Type Aliases


type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in';
type AnimationId = string | number;

function createAnimation(id: AnimationId,
    animationName: string,
    timingFunction: AnimationTimingFunc,
    duration: number,
    iterationCount: 'infinite' | number): void {
//   const elem = document.querySelector(`#${id}`) as HTMLElement;
//   if(elem){
//     elem.style.animation = `${animationName} ${timingFunction} ${duration} ${iterationCount}`;
console.log(`${animationName} ${timingFunction} ${duration} ${iterationCount}`);
// }

}

createAnimation('id', 'fade', 'ease', 5, 'infinite');



type Config = {protocol: 'https' | 'http'; port: 3000 | 3001 };
type Role = {
    role: string;
};

type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
    protocol: 'https',
    port: 3001,
    role: 'admin'
}

const backupConfig: ConfigWithRole = {
    protocol: 'http',
    port: 3000,
    role: 'sysadmin'
}

type startFunction = (protocol: 'http' | 'https', port: 3000 | 3001 ) => string

const start: startFunction = (protocol: 'http' | 'https', port: 3000 | 3001): 'Started' =>{

    if(port === 3000 || port === 3001){
        console.log(`Server started on ${protocol}://server:${port}`);
    } else {
        console.error('Invalid port');
    }

    
    return 'Started';
}
start(serverConfig.protocol, serverConfig.port);
























