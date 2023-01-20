async function fetchMovie() {
  const movieResponse = await fetch(`https://omdbapi.com/?apikey=84e956e5&s=${}`)
}




const booksHTML = movies
.map((movie) => {
  return `<div class="book">
  <figure class="book__img--wrapper">
    <img class="book__img" src="${movie.url}" alt="">
  </figure>
  <div class="${book.title}">
    Rich Dad Poor Dad
  </div>
  <div class=""${book.rating}">
    ${ratingsHTML(book.rating)}
  </div>
  <div class="book__price">
   ${priceHTML(book.originalPrice, book.salePrice)}
  </div>
</div>`;
})
.join(" ");
//  console.log(booksHTML)

booksWrapper.innerHTML = booksHTML;