

// Interfaces

type Config = {protocol: 'http' | 'https', port: 3000 | 3001};
type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001, log: Function) => string;


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





























