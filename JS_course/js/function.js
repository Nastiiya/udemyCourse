// TASK_1
function getMathResult(numberOne, numberTwo) {
    let string = '';

    if (typeof numberTwo !== 'string' && numberTwo > 0) {

        for (let i = 1; i <= numberTwo; i++) {
            string += i * numberOne;
            if (i !== numberTwo) {
                string += '---';
            }
        }
    } else {
        string = numberOne;
    }
    return string;
}
console.log(getMathResult(3, 5));

// TASK_2
let numberOfFilms;

function start() {
    numberOfFilms = prompt('How many movies have you already watched?', "");

    while (numberOfFilms === "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt('How many movies have you already watched?', "");
    }
}

start();

const personalMovieDB = {
    "count": numberOfFilms,
    "movies": {},
    "actors": {},
    "genres": [],
    "privat": false

};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++)  {
        let lastFilm = prompt("What last film did you watch?", "");
        let rateLastFilm = prompt("How would you rate it?", "");

        if(lastFilm !== null && rateLastFilm !== null && lastFilm !== "" && lastFilm.length < 50){
            personalMovieDB.movies[lastFilm] = rateLastFilm;
            console.log('done');
        } else {
            i--;
            console.log('error')
        }
    }
}
rememberMyFilms();

function detectedPersonalLevel() {
    if(personalMovieDB.count < 10){
        console.log("Few films were watched!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("You are a classic viewer!");
    }  else if (personalMovieDB.count >= 30){
        console.log("Yoa are movie lovers!")
    } else {
        console.log("Error")
    }
}
detectedPersonalLevel();

function showMyDB() {
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres(){

    for(let i = 0; i < 3; i++ ){
        let genres = prompt(`Your favorite genres ${i + 1}?`, ""  );
        personalMovieDB.genres.push(genres);
    }
}

writeYourGenres();

console.log(personalMovieDB);

