const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


// const a = prompt('Какой последний фильмы вы посмотрели?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Какой последний фильмы вы посмотрели?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    alert('Просмотрено немного фильмов');
} else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Ошибочка');
}

for (let i = 0; i < 2; i++) {
    const a = prompt('Какой последний фильмы вы посмотрели?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
          i--;
    }
}
