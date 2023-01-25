let movieInfo = localStorage.getItem("movieTitle");
let userInput = localStorage.getItem("movieName")
 
async function showMovieDetails(movieInfo, movieName) {
  const movieDetailWrapper = document.querySelector(".movie__details")
  const movieResponse = await fetch(
    `https://www.omdbapi.com/?apikey=84e956e5&i=${movieInfo}`
    );
  console.log(movieDetailWrapper)
  const movieData = await movieResponse.json();
  const movieDetails = movieData;
  const movieDetailsHTML = showDetails(movieDetails);
  console.log(movieData);
  movieDetailWrapper.innerHTML += movieDetailsHTML;
}

async function similarMovies(userInput) {
  const moviesResult = await fetch(
    `https://www.omdbapi.com/?apikey=84e956e5&s=${userInput}`
  );
  const similarWrapper = document.querySelector(".similar__movies")
  const moviesData = await moviesResult.json();
  let shuffled = moviesData.Search.map(value =>({value, sort: Math.random()})).sort((a, b) => a.sort - b.sort).map(({value}) => value)
  const moreMovies = shuffled.filter((movie, index) => index < 3 ).map((movie) => moviesHTML(movie)).join('')
  console.log(moreMovies)
  similarWrapper.innerHTML = moreMovies
}

function getTitle(movieTitle) {
  localStorage.setItem("movieTitle", movieTitle);
  window.location.href = `${window.location.origin}/movieDetails.html`;
}

function moviesHTML(movie) {
  return `<div class="movie" onclick="getTitle('${movie.imdbID}')">
            <figure class="movie__img--wrapper">
              <img class="movie__img" src="${movie.Poster}">
            </figure>
            <h2  class="movies__title ">${movie.Title}</h2>
            <h3 class="type purple">${movie.Type}</h3>
            <p class="year">${movie.Year}</p>
          </div>`;
}

function showDetails(movie) {
  return `<h2 class="movie__title">${movie.Title}</h2>
          <div class="movie__wrapper">
            <div class="img-title__wrapper">
              <figure class="movie__img--wrapper">
                <img src="${movie.Poster}" alt="" class="movie-details__img">
              </figure>
            </div>
            <div class="movie-detail__description--wrapper"
              <p class="movie__description--para"><b class="highlight purple">Plot:</b> ${movie.Plot}</p>
              <p class="movie__description--para"><b class="highlight purple">Type:</b> ${movie.Type}</p>
              <p class="movie__description--para"><b class="highlight purple">Rated:</b> ${movie.Rated}</p>
              <p class="movie__description--para"><b class="highlight purple">Genre:</b> ${movie.Genre}</p>
              <p class="movie__description--para"><b class="highlight purple">Ratings:</b> ${movie.imdbRating} / 10</p>
              <p class="movie__description--para"><b class="highlight purple">Votes:</b> ${movie.imdbVotes}</p>
              <p class="movie__description--para"><b class="highlight purple">Realease Date:</b> ${movie.Released}</p>
            </div>
          </div>`
;
}

similarMovies(userInput)
showMovieDetails(movieInfo);

