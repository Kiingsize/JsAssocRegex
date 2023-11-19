function solve(arr) {
let movies = [];

for(let command of arr) {
    if(command.includes('addMovie')) {
        let movieName = command.split('addMovie ')[1];
        let movieObj = { name: movieName};
        movies.push(movieObj)
    } else if (command.includes('directedBy')) {
        let [movieName, directorName] = command.split(' directedBy ');
        let movie = movies.find(movie => movie.name == movieName);
          if(movie) {
            movie.director = directorName;
          }
    } else if (command.includes('onDate')) {
        let [movieName, date] = command.split(' onDate ');
        let movie = movies.find(movie => movie.name == movieName);
            if(movie) {
                movie.date = date;
            }
    }
}
 for(let movie of movies) {
    if(movie.name && movie.director && movie.date) {
        console.log(JSON.stringify(movie));
    }
 }


}

solve();
