//TASK 1
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let strArr = 'Семья состоит из: ';

    if (arr.length !== 0) {
        strArr += arr.join(' ');
    } else {
        strArr = `Семья пуста`;
    }

    return strArr;
}

console.log(showFamily(family));

//TASK 2
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(val => {
        console.log(val.toLowerCase());
    })
}

standardizeStrings(favoriteCities);

//TASK 3
const someString = 'This is some strange string';

function reverse(str) {
    let newStr;
    if (typeof str === "string") {
        newStr = str.split("").reverse().join("");
    } else {
        newStr = 'Ошибка!';
    }
    return newStr;
}

console.log(reverse(someString));


//TASK 4
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
let totalCurrencies = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    let strCurr = "Доступные валюты:\n";

    if (arr.length !== 0) {
        arr.forEach(val => {
            if (val !== missingCurr) {
                strCurr += val;
                strCurr += '\n';
            }
        })
    } else {
        strCurr = 'Нет доступных валют';
    }
    return strCurr;
}

console.log(availableCurr(totalCurrencies, "RUB"));


