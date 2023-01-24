const userSearch = localStorage.getItem("movieName");
async function fetchMovie(userSearch, filter) {
  const movieResponse = await fetch(
    `https://www.omdbapi.com/?apikey=84e956e5&s=${userSearch}`
    );
  const movieData = await movieResponse.json();
  const filterMovieValue = filterMovies(filter)
  if (filterMovieValue === 'A__TO__Z') {
    return movieData.Search.sort((a, b) => a.Year - b.Year)
  }
  const moviesWrapper = document.querySelector(".movies");
  const showMovie = movieData.Search.map((movie) => moviesHTML(movie)).join("");
  moviesWrapper.innerHTML += showMovie;
}

// fetchMovie(userSearch)
function filterMovies(event){
  console.log(event.target.value)
  console.log(fetchMovie(userSearch,event.target.value))
  return fetchMovie(userSearch, event.target.value)
}

function getTitle(movieTitle) {
  localStorage.setItem("movieTitle", movieTitle);
  window.location.href = `${window.location.origin}/movieDetails.html`;
}

function moviesHTML(movie) {
  return `<div class="movie" onclick="getTitle('${movie.imdbID}')">
            <figure class="movie__img--wrapper">
              <img src="${movie.Poster}">
            </figure>
            <h2  class="movie__title ">${movie.Title}</h2>
            <p class="year">${movie.Year}</p>
            <p class="type">${movie.Type}</p>
            <p>${movie.imdbID}</p>
          </div>`;
}