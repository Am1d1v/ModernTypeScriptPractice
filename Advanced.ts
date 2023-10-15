

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


interface IStyles {
    [key: string]: string
}

const styles: IStyles = {
    position: 'ablolute',
    top: '20px',
    left: '50px'
}



const serverConfig = {
    protocol: 'https',
    port: 3001,
    role: 'admin'
}

const backupConfig = {
    protocol: 'http',
    port: 3000,
}

interface BasicConfig {
    protocol: string;
    port: number
}

const startServer = (config: BasicConfig): void => {
    
    console.log(`Port: ${config.port}, Protocol: ${config.protocol}`);
}
startServer(serverConfig);




















