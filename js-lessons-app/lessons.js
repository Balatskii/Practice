let numberOfFilms = +prompt("Сколько фильмов вы посмотрели");
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

    if (question1 != null && question2 != null && question1 != '' && question2 != '' && question1.length < 50) {
        personalMovieDB.movies[question1] = question2;
        console.log('Done');
    } else {
        console.log('error');
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви класический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);