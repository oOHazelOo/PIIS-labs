const table = document.getElementById("movies_data");

const personalMovieDB = {
    privat: false,
    movies:{
        "Movie 1" : 6,
        "Movie 2" : 9,
        "Movie 3" : 7
    }
}

const showMovies = () =>{
    if(personalMovieDB.privat) return; 

    for(let key in personalMovieDB.movies){
        const newTableRow = document.createElement("tr");
        const movieName = document.createElement("td");
        const movieRate  = document.createElement("td");

        movieName.textContent = key;
        movieRate.textContent = personalMovieDB.movies[key];

        newTableRow.append(movieName);
        newTableRow.append(movieRate);
        table.append(newTableRow)
    }
}
showMovies();