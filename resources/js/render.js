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
      <button id=${movie.imdbID} class="add_btn" data-movie=${movie.imdbID}>Add</button>
    </div>
    <div class="movie_plot">
			<p>${movie.Plot}</p>
  </div>
`;
  mainContent.appendChild(movieArticle);
  const addBtn = document.getElementById(`${movie.imdbID}`);
  addBtn.addEventListener(
    'click',
    handleAddClick
    // () => {
    //     console.log(event.target.dataset.movie);
    //   }
  );
}

function handleAddClick(event) {
  console.log(event.target.dataset.movie);
  window.localStorage.setItem(
    event.target.dataset.movie,
    event.target.dataset.movie
  );
}

export { renderMovies };
