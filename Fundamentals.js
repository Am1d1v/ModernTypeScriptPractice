"use strict";
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
// Null & Undefined Ttpes
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
const departments = ['dev', 'design', 'marketing'];
const department = departments[0];
const nums = [1, 2, 3];
const nums2 = [[1, 2, 3], [4, 5, 6]];
const report = departments
    .filter(department => department !== 'dev')
    .map(department => `${department} - done`);
console.log(report);
