const userSearch = localStorage.getItem("movieName");
async function fetchMovie(userSearch, filter) {
  const movieResponse = await fetch(
    `https://www.omdbapi.com/?apikey=84e956e5&s=${userSearch}`
    );
  const movieData = await movieResponse.json();
  const moviesWrapper = document.querySelector(".movies");
  console.log(movieData)
  
  if (filter === "OLD__TO__NEW"){
    movieData.Search.sort((a, b) => a.Year - b.Year)
    console.log(movieData.Search)
  }
  else if (filter === "NEW__TO__OLD"){
    movieData.Search.sort((a, b) => b.Year - a.Year)
    console.log(movieData.Search)
  }

  const showMovie = movieData.Search.map((movie) => moviesHTML(movie)).join("");
  moviesWrapper.innerHTML += showMovie;
  console.log(filter)
}
 


// setTimeout(() => {
  fetchMovie(userSearch)
// },1000)

function filterMovies(event){
  fetchMovie(userSearch, event.target.value)
  // console.log(event.target.value)
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
          </div>`;
}