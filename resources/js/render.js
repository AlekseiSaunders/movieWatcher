const mainContent = document.getElementById('main_content');

function renderMovies(movie) {
  let movieArticle = document.createElement('article');
  movieArticle.classList.add('movie_article');
  movieArticle.innerHTML = `
  <div class="poster">
	  <img src="${movie.Poster}" alt="Movie Poster for ${movie.Title}">
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
      <button id=${movie.imdbID} class="add_btn" data-movieID=${movie.imdbID} aria-label="Add movie to watchlist"><span class="material-icons">
add_circle
</span>Add</button>
    </div>
    <div class="movie_plot">
			<p>${movie.Plot}</p>
  </div>
`;
  mainContent.appendChild(movieArticle);
  const addBtn = document.getElementById(`${movie.imdbID}`);
  addBtn.addEventListener(
    'click',
    () => {
      let movieToStore = {
        poster: `${movie.Poster}`,
        title: `${movie.Title}`,
        year: `${movie.Year}`,
        rating: `${movie.imdbRating}`,
        runtime: `${movie.Runtime}`,
        genre: `${movie.Genre}`,
        plot: `${movie.Plot}`,
        movieID: `${movie.imdbID}`,
      };
      window.localStorage.setItem(
        `${movie.imdbID}`,
        JSON.stringify(movieToStore)
      );
    }
    // handleAddClick
    // () => {
    //     console.log(event.target.dataset.movie);
    //   }
  );
}

// function handleAddClick(event) {
//   console.log(event.target.dataset.movieID);
//   window.localStorage.setItem(
//     event.target.dataset.movieID,
//     event.target.dataset.movieID
//   );
// }

export { renderMovies };
