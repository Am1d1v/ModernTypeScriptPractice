
// Generics

/*
function processingData(data: string | number | boolean | string[]): string | number | boolean | string[]{

    return data;
}
*/

/*
function processingData<T>(data: T): T{

    return data;
}
const res1 = processingData(1); // 1
const res2 = processingData([1, 2, 3]); // number[]
const res3 = processingData('someName'); // 'someName'
const res4 = processingData(['A', 'B', 'C']); // string[]
const res5 = processingData<number>(100);
//const res6 = processingData<number>('100'); // error


interface IPrintProductUK {
    design: number;

}

interface IPrintProductES {
    design: string;
}

interface IPrintProduct<T> {
    design: T;
}

const someProduct: IPrintProduct<string> = {
    design: 'ten'
}

const someProduct1: IPrintProduct<number> = {
    design: 10
}
*/


// Generic Functions

function processingData<T, S>(data: T[], options: S): string{

    data.length;

    switch(typeof data){
        case 'string':
            return `${data}, ${options}`
            break;
        case 'number':
            return `Number: ${data}`
            break;
        default:
            return 'Not Valid'         
    }

}
processingData<number, string>([10], 'slow');


function processing <T>(data: T): T{
    return data;
}

interface IProcessingFun{
    <T>(data: T): T
}

const newFunc: IProcessingFun = processing;

interface IDataSaver {
    processing: <T>(data: T) => T
}


const saver: IDataSaver = {
  /*    processing(data) {
        console.log(data);
        return data;
    } */

    /* processing: <T>(data: T) => {
        return data;
    } */

    processing: processing
}


















































