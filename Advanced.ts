

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




