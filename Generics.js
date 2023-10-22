"use strict";
// Generics
/*
function processingData(data: string | number | boolean | string[]): string | number | boolean | string[]{

    return data;
}
*/
function processingData(data) {
    return data;
}
const res1 = processingData(1); // 1
const res2 = processingData([1, 2, 3]); // number[]
const res3 = processingData('someName'); // 'someName'
const res4 = processingData(['A', 'B', 'C']); // string[]
