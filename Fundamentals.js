"use strict";
// Basic Types
function createAnimation(id, animationName, timingFunction, duration, iterationCount) {
    //   const elem = document.querySelector(`#${id}`) as HTMLElement;
    //   if(elem){
    //     elem.style.animation = `${animationName} ${timingFunction} ${duration} ${iterationCount}`;
    console.log(`${animationName} ${timingFunction} ${duration} ${iterationCount}`);
    // }
}
createAnimation('id', 'fade', 'ease', 5, 'infinite');
const serverConfig = {
    protocol: 'https',
    port: 3001
};
const start = (protocol, port) => {
    if (port === 3000 || port === 3001) {
        console.log(`Server started on ${protocol}://server:${port}`);
    }
    else {
        console.error('Invalid port');
    }
    return 'Started';
};
start(serverConfig.protocol, serverConfig.port);
