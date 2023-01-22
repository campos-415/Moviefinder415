// const userSearch = localStorage.getItem("movieName");
async function fetchMovie() {
  const movieResponse = await fetch(
    `https://www.omdbapi.com/?apikey=84e956e5&s=fast`
  );
  const moviesWrapper = document.querySelector(".movies");
  const movieData = await movieResponse.json();
  moviesWrapper.innerHTML = movieData.Search.map((movie) => moviesHTML(movie)).join("");
}

function moviesHTML(movie) {
  return `<div class="movie">
              <figure class="movie__img--wrapper">
                <img src="${movie.Poster}" alt="" onclick="getTitle()'>
              </figure>
              <h2 class="movie__title">${movie.Title}</h2>
              <p class="year">${movie.Year}</p>
              <p class="type">${movie.Type}</p>
            </div>`;
}

function getTitle(){
  console.log('this worked')
}

fetchMovie();
