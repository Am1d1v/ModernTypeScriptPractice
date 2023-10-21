"use strict";
// Interfaces
function calculateArea(a, b) {
    if (b) {
        const rect = {
            a, b,
            area: a * b
        };
        console.log(rect);
        return rect;
    }
    else {
        const square = {
            side: a,
            area: a * a
        };
        console.log(square);
        return square;
    }
}
calculateArea(10);
calculateArea(10, 6);
