

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




































