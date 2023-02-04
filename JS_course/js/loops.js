//Task 1
function firstTask() {
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}

firstTask();

//Task 2
function secondTask() {
    for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
}

secondTask();

//Task 3
function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

thirdTask();

//Task 4
// Loop which need to be changed:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);

function fourthTask() {
    let i = 2;
    while (i <= 16) {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i++;
    }
}

fourthTask();

//Task 5
//First solution
function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers.push(i)
    }

    return arrayOfNumbers;
}

console.log(fifthTask());

//Second solution
function fifthTask2() {
    const arrayOfNumbers = [];
    let index = 0;
    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[index] = i;
        index++;
    }

    return arrayOfNumbers;
}

console.log(fifthTask2());

//Task 6
function sixTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }

    return result;
}

console.log(sixTask());

//Task 7
function sevenTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    //NEVER MODIFY ARRAY IN LOOP

    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === "string") {

            data[i] = data[i] + "- done";
        } else {
            data[i] = data[i] * 2;
        }
    }
    return data;
}

console.log(sevenTask());

//Task 8
function eightTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // First solution
    for (let i = data.length - 1; i >= 0; i--) {
        result.push(data[i]);
    }

    //Second solution
    // let index = 0;

    // for(let i = data.length - 1; i >= 0; i--){
    //     result[index] = data[i];
    //     index++;
    // }

    //Third solution
    // result.push(... data.reverse());

    return result;
}

console.log(eightTask());

//Task 9

const lines = 6;
let result = '';
const ASTERISK = '*';
const SPACE = " ";
//First solution
for (let ln = 1; ln <= lines; ln++) {
    for(let i = 1; i <= lines - ln; i++){
        result += SPACE;
    }
    for (let j = 1; j <= (ln-1) + ln; j++) {
        result += ASTERISK;
    }
    result += '\n';
}
//Second solution
for (let ln = 1; ln <= lines; ln++) {
    result += SPACE.repeat(lines - ln);
    result += ASTERISK.repeat((ln-1) + ln);
    result += '\n';
}

console.log(result);


