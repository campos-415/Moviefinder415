

async function fetchMovie(movieName) {
  const movieResponse = await fetch(
    `https://www.omdbapi.com/?apikey=84e956e5&s=${movieName}`
  );
  const movieData = await movieResponse.json();
  // console.log(movieData);
}

async function searchMovie(event) {
  event.preventDefault()
  const moviesWrapper = document.querySelector('.movies')
  const movieName = event.target.value
  
  // console.log(movieName)

  let movieArray = await fetchMovie(movieName)
  console.log(movieArray)

  // const showMovie= movieArray.map((movie) => {
  //   return `<h1>${movie}</h1>`
  // }).join('')
  // moviesWrapper.innerHTML += showMovie
}


