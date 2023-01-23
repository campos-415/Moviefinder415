const userSearch = localStorage.getItem("movieName");
async function fetchMovie(userSearch) {
  const movieResponse = await fetch(
    `https://www.omdbapi.com/?apikey=84e956e5&s=${userSearch}`
  );
  const moviesWrapper = document.querySelector(".movies");
  const movieData = await movieResponse.json();
  const showMovie = movieData.Search.map((movie) => moviesHTML(movie)).join("");
  moviesWrapper.innerHTML += showMovie;
}

function moviesHTML(movie) {
  return `<div class="movie" onclick="getTitle('${movie.imdbID}')">
            <figure class="movie__img--wrapper">
              <img src="${movie.Poster}">
            </figure>
            <h2  class="movie__title ">${movie.Year}</h2>
            <p class="year">${movie.Year}</p>
            <p class="type">${movie.Type}</p>
            <p>${movie.imdbID}</p>
          </div>`;
}

function getTitle(movieTitle) {
  localStorage.setItem("movieTitle", movieTitle);
  window.location.href = `${window.location.origin}/movieDetails.html`;
}

fetchMovie(userSearch);
