let numberOfFilms = prompt("Сколько фильмов вы посмотрели");
let personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 2; i++) {
    let question1 = prompt("Один из последних просмотреных фильмов?"),
        question2 = prompt("На сколько оцените его?");

    personalMovieDB.movies[question1] = question2;
}

console.log(personalMovieDB);