const userSearch = localStorage.getItem('movieName')
async function fetchMovie(movieName) {
  const movieResponse = await fetch(
    `https://www.omdbapi.com/?apikey=84e956e5&s=${movieName}`
    );
  const moviesWrapper = document.querySelector('.movies')
  const movieData = await movieResponse.json();
  console.log(movieData)

  const movies = movieData.Search.map((movie) => {
     console.log(movie)
     return `<div class="movie">
              <figure class="movie__img--wrapper">
                <img src="${movie.Poster}" alt="">
              </figure>
              <h2 class="movie__title">${movie.Title}</h2>
              <p class="year">${movie.Year}</p>
              <p class="type">${movie.Type}</p>
            </div>`
  }).join('')

  moviesWrapper.innerHTML += movies
}

fetchMovie(userSearch)