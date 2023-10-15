"use strict";
// Interfaces
const styles = {
    position: 'ablolute',
    top: '20px',
    left: '50px'
};
const serverConfig = {
    protocol: 'https',
    port: 3001,
    // role: 'admin'
};
const backupConfig = {
    protocol: 'http',
    port: 3000,
};
const startServer = (config) => {
    console.log(`Port: ${config.port}, Protocol: ${config.protocol}`);
};
startServer(serverConfig);
