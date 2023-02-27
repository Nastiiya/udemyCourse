// // TASK_1
// function getMathResult(numberOne, numberTwo) {
//     let string = '';
//
//     if (typeof numberTwo !== 'string' && numberTwo > 0) {
//
//         for (let i = 1; i <= numberTwo; i++) {
//             string += i * numberOne;
//             if (i !== numberTwo) {
//                 string += '---';
//             }
//         }
//     } else {
//         string = numberOne;
//     }
//     return string;
// }
// console.log(getMathResult(3, 5));
//
// // TASK_2
// let numberOfFilms;
//
// function start() {
//     numberOfFilms = prompt('How many movies have you already watched?', "");
//
//     while (numberOfFilms === "" || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = prompt('How many movies have you already watched?', "");
//     }
// }
// start();
//
// const personalMovieDB = {
//     "count": numberOfFilms,
//     "movies": {},
//     "actors": {},
//     "genres": [],
//     "privat": false
//
// };
//
// function rememberMyFilms(){
//     for(let i = 0; i < 2; i++)  {
//         let lastFilm = prompt("What last film did you watch?", "");
//         let rateLastFilm = prompt("How would you rate it?", "");
//
//         if(lastFilm !== null && rateLastFilm !== null && lastFilm !== "" && lastFilm.length < 50){
//             personalMovieDB.movies[lastFilm] = rateLastFilm;
//             console.log('done');
//         } else {
//             i--;
//             console.log('error')
//         }
//     }
// }
// rememberMyFilms();
//
// function detectedPersonalLevel() {
//     if(personalMovieDB.count < 10){
//         console.log("Few films were watched!");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//         console.log("You are a classic viewer!");
//     }  else if (personalMovieDB.count >= 30){
//         console.log("Yoa are movie lovers!")
//     } else {
//         console.log("Error")
//     }
// }
// detectedPersonalLevel();
//
// function showMyDB() {
//     if(!personalMovieDB.privat) {
//         console.log(personalMovieDB);
//     }
// }
//
// showMyDB();
//
// function writeYourGenres(){
//
//     for(let i = 0; i < 3; i++ ){
//         let genres = prompt(`Your favorite genres ${i + 1}?`, ""  );
//         personalMovieDB.genres.push(genres);
//     }
// }
//
// writeYourGenres();
//
// console.log(personalMovieDB);

//TASK 3

// function calculateVolumeAndArea(side) {
//     let result;
//     let volumeOfCube;
//     let areaOfCube;
//
//     if(side !== null && typeof side === "number" && side % 1 === 0 && side > 0){
//         volumeOfCube = Math.pow(side, 3);
//         areaOfCube = 6 * Math.pow(side, 2);
//         result = `Volume of cube: ${volumeOfCube}, area of cube: ${areaOfCube}`;
//     } else {
//         result = "error";
//     }
//     return result;
// }
//
// console.log(calculateVolumeAndArea(5));

//TASK 4

// function getCoupeNumber(number) {
//     let result;
//     if(typeof number === "number" && number % 1 === 0 && number > 0 && number <= 36) {
//         result = Math.ceil(number / 4);
//     } else if(number === 0 || number > 36){
//         result = "Such a place doesn`t exist";
//     } else {
//         result = "Error. Check of the number you entered is correct";
//     }
//
//     return result;
// }
//
// console.log(getCoupeNumber(0));

//TASK 5

// function getTimeFromMinutes(totalMinutes) {
//     let hours;
//     let minutes;
//     let strHours = '';
//     let strMinutes = '';
//     let result;
//
//     if (typeof totalMinutes === "number" && totalMinutes % 1 === 0 && totalMinutes >= 0) {
//         hours = Math.floor(totalMinutes / 60);
//         minutes = totalMinutes % 60;
//
//         switch (hours) {
//             case 1:
//                 strHours = 'час';
//                 break;
//             case 2:
//             case 3:
//             case 4:
//                 strHours = 'часа';
//                 break;
//             case 0:
//             case 5:
//             case 6:
//             case 7:
//             case 8:
//             case 9:
//             case 10:
//                 strHours = 'часов';
//                 break;
//             default:
//                 console.log("error");
//                 break;
//         }
//
//         if (minutes >= 5 && minutes <= 20) {
//             strMinutes = 'минут';
//         } else {
//             let decimalMinutes = minutes % 10;
//
//             switch (decimalMinutes) {
//                 case 1:
//                     strMinutes = 'минута';
//                     break;
//                 case 2:
//                 case 3:
//                 case 4:
//                     strMinutes = 'минуты';
//                     break;
//                 case 5:
//                 case 6:
//                 case 7:
//                 case 8:
//                 case 9:
//                 case 0:
//                     strMinutes = 'минут';
//                     break;
//                 default:
//                     console.log("error");
//                     break;
//             }
//         }
//         result = `${hours} ${strHours} ${minutes} ${strMinutes}`
//     } else {
//        result = 'Error. Check the data.';
//     }
//
//     return result;
// }
//
// console.log(getTimeFromMinutes(-150));

// TASK 6

// function findMaxNumber (a, b, c, d){
//     let maxNumber = a;
//
//     if(arguments.length === 4 && typeof a === "number"
//         && typeof b === "number" && typeof c === "number" && typeof d === "number"){
//
//         if(maxNumber < b){
//             maxNumber = b;
//         }
//         if(maxNumber < c){
//             maxNumber = c;
//         }
//         if(maxNumber < d){
//             maxNumber = d;
//         }
//     } else {
//         maxNumber = 0;
//     }
//     return maxNumber
// }
//
// console.log(findMaxNumber(1, 5, 6.6, 10.5));

//TASK 7

function fib(number) {
    let strFib = "";
    let preLast = 0;
    let last = 1;

    //0 1 1 2 3 5 8 13
    // prelast > last > current

    if(typeof number === "number" && Number.isInteger(number) && number > 0){
        for(let i = 1; i <= number; i++){
            if(i === 1) {
                strFib += preLast;
            } else if (i === 2) {
                strFib += " " + last;
            } else {
                let current = preLast + last;

                strFib+= " " + current;

                preLast = last;
                last = current;
            }
        }
    } else  {
        strFib = " ";
    }
    return strFib;
}

//method 2
function fibVol_2(number){
    let numbersOfFib = [];

    for(let i = 1; i <= number; i++ ){
        if(i === 1) {
            numbersOfFib.push(0);
        } else if ( i === 2) {
            numbersOfFib.push(1);
        } else {
            numbersOfFib.push(numbersOfFib[i-3] + numbersOfFib[i-2]);
        }
    }

    return numbersOfFib.join(" ");
}

console.log(fib(10));
console.log(fibVol_2(10));

