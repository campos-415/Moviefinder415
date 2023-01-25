const userSearch = localStorage.getItem("movieName");
async function fetchMovie(userSearch, filter) {
  const movieResponse = await fetch(
    `https://www.omdbapi.com/?apikey=84e956e5&s=${userSearch}`
  );
  const movieData = await movieResponse.json();
  const moviesWrapper = document.querySelector(".movies");
  const movies = movieData.Search
  // console.log(movies)

  if (filter === "OLD__TO__NEW") {
    movies.sort((a, b) => a.Year - b.Year);
    console.log(movies)
  } 
  else if (filter === "NEW__TO__OLD") {
    movies.sort((a, b) => b.Year - a.Year);
    console.log(movies)
  }

  const showMovies = movies.filter((movie, index) => index < 9).map((movie) => moviesHTML(movie)).join("");
  moviesWrapper.innerHTML = showMovies;
  console.log(filter);
}


function filterMovies(event) {
  fetchMovie(userSearch, event.target.value);
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

setTimeout(() => {
  fetchMovie(userSearch);
},1000)
