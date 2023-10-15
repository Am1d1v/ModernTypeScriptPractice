"use strict";
// Basic Types
function createAnimation(id, animationName, timingFunction = 'ease', duration, iterationCount) {
    //   const elem = document.querySelector(`#${id}`) as HTMLElement;
    //   if(elem){
    //     elem.style.animation = `${animationName} ${timingFunction} ${duration} ${iterationCount}`;
    console.log(`${animationName} ${timingFunction} ${duration} ${iterationCount}`);
    // }
}
createAnimation('id', 'fade', 'ease', 5, 'infinite');
