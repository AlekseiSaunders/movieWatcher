const mainContent = document.getElementById('main_content');

function renderMovies(movie) {
  let movieArticle = document.createElement('article');
  movieArticle.classList.add('movie_article');
  movieArticle.innerHTML = `
  <div class="poster">
	  <img src="${movie.Poster}">
  </div>
  <div class="movie_info">
    <div class="movie_header">
	    <h2>${movie.Title}</h2>
      <p>${movie.Year}</p>
      <p>⭐ ${movie.imdbRating}</p>
	  </div>
    <div class="movie_details">
      <p>${movie.Runtime}</p>
      <p>${movie.Genre}</p>
      <button>Add</button>
    </div>
    <div class="movie_plot">
			<p>${movie.Plot}</p>
  </div>
`;
  mainContent.appendChild(movieArticle);
}

export { renderMovies };
