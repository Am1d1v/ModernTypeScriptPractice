"use strict";
// Interfaces
const serverConfig = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
    log: (msg) => {
        console.log(msg);
    }
};
const startServer = (protocol, port, log) => {
    log(`Server started on ${protocol}://server:${port}`);
    return 'Server started';
};
startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);
