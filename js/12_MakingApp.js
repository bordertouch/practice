'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}
//start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


// // const a = prompt('Какой последний фильмы вы посмотрели?', ''),
// //       b = prompt('На сколько оцените его?', ''),
// //       c = prompt('Какой последний фильмы вы посмотрели?', ''),
// //       d = prompt('На сколько оцените его?', '');

// // personalMovieDB.movies[a] = b;
// // personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено немного фильмов');
    } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Ошибочка');
    }    
}

// detectPersonalLevel();


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Какой последний фильмы вы посмотрели?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
              i--;
        }
    }
    
}

// rememberMyFilms();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
 
showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}:`, '');
    }
}

writeYourGenres();
