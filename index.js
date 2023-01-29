
function openMenu() {
  document.body.classList += ' menu__open'
}

function closeMenu() {
  document.body.classList.remove('menu__open')
}


function searchMovie(event) {
  event.preventDefault()
  window.location.href = `${window.location.origin}/movies.html`
  const movieName = event.target.value
  localStorage.setItem('movieName', movieName)
}

 