const numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


const a = prompt('Какой последний фильмы вы посмотрели?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Какой последний фильмы вы посмотрели?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

