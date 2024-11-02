let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB ={
    count: numberOfFilms,
    movies: {}
}
let askAboutMovie =()=>{
    let movieObject ={};
    let movie =""; 
    let rate = "";
    
    while(!movie.trim() || !rate.trim() || movie.length>50){
        movie = prompt("Один из последних просмотренных фильмов?");
        rate = prompt("На сколько оцените его?");
    }
    movieObject[movie] = rate;
    return movieObject
}
personalMovieDB.movies = {...personalMovieDB.movies, ...askAboutMovie()}
personalMovieDB.movies = {...personalMovieDB.movies, ...askAboutMovie()}
console.log(personalMovieDB)