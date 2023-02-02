const numberOfFilm = prompt("How many movies have you already watched?", "");

// personalMovieDB = {
//     "count": numberOfFilm,
//     "movies": {},
//     "actors": {},
//     "genres": [],
//     "privat": false
//
// };
//
// let lastFilm = prompt("What last film did you watch?", "");
// let rateLastFilm = prompt("How would you rate it?", "");
// let secondFilm = prompt("What last film did you watch?", "");
// let rateSecondFilm = prompt("How would you rate it?", "");
//
// personalMovieDB.movies[lastFilm] = rateLastFilm;
// personalMovieDB.movies[secondFilm] = rateSecondFilm;

personalMovieDB = {
    "count": numberOfFilm,
    "movies": [],
    "actors": {},
    "genres": [],
    "privat": false

};

class Movie {
    constructor(name, rating, type){
        this.name = name;
        this.rating = rating;
        this.type = type;
    }
}

let lastFilm = prompt("What last film did you watch?", "");
let rateLastFilm = prompt("How would you rate it?", "");
let secondFilm = prompt("What last film did you watch?", "");
let rateSecondFilm = prompt("How would you rate it?", "");

personalMovieDB.movies.push(new Movie(lastFilm, rateLastFilm, "LAST_FILM"));
personalMovieDB.movies.push(new Movie(secondFilm, secondFilm, "SECOND_FILM"));

console.log(personalMovieDB);