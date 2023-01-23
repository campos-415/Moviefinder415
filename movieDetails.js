let movieInfo = localStorage.getItem("movieTitle");

const movieDetailWrapper = document.querySelector(".movie")
console.log(movieDetailWrapper)
async function showMovieDetails(movieInfo) {
  const movieResponse = await fetch(
    `https://www.omdbapi.com/?apikey=84e956e5&i=${movieInfo}`
    );
    const movieData = await movieResponse.json();
    const movieDetails = movieData;
    const movieDetailsHTML = showDetails(movieDetails);
    console.log(movieDetailsHTML);
    movieDetailWrapper.innerHTML += movieDetailsHTML;
}

function showDetails(movie) {
  return `<div class="container">
            <div class="row">
              <h2 class="movie__title">${movie.Title}</h2>
              <figure class="movie__img--wrapper">
                <img src="${movie.Poster}" alt="" class="movie__img">
              </figure>
              <p class="movie__plot">${movie.Plot}</p>
            </div>
          </div>`;
}
showMovieDetails(movieInfo);
