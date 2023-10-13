
// Basic Types

/*let userName: string = 'Dima';

//userName.isInteger();
//userName = 5;
*/

//const isBirthday: boolean = true;
//const age: number = 30;
//const username: string = 'john';

// Functions

function logBirthdate(isBirthday: boolean, username: string, age: number): string{
    if(isBirthday){
        //console.log(`Congrats ${username}, ${age + 1}`);
        return `Congrats ${username}, ${age + 1}`;
    } else {
        return 'Error'
    }

    //return undefined;
}

const logBirthday  = (isBirthday: boolean, username: string, age: number): string =>{
    if(isBirthday){
        //console.log(`Congrats ${username}, ${age + 1}`);
        return `Congrats ${username}, ${age + 1}`;
    } else {
        return 'Error'
    }

    //return undefined;
}

logBirthdate(true, 'Jack', 30);
console.log(logBirthday(true, 'Anna', 40));




























