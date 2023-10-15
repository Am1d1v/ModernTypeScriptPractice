

// Interfaces

type Config = {protocol: 'http' | 'https', port: 3000 | 3001};

interface IConfig {
    protocol: 'https',
    port: 3001
}

interface IRole {
    role: string;
}



const serverConfig: IConfig = {
    protocol: 'https',
    port: 3001
}

