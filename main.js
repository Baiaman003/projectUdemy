let numberOfFilms = +prompt("Сколко фильмов вы уже посмотрели?");

let personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let film = prompt("Один из последних фильмов?", '');
let score = prompt("На сколько оцените?");

personalMoveDB.movies[film] = score;

console.log(personalMoveDB );