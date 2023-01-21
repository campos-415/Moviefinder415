
function searchMovie(event) {
  // event.preventDefault()
  window.location.href = `${window.location.origin}/movies.html`
  const movieName = event.target.value
  localStorage.setItem('movieName', movieName)
}

