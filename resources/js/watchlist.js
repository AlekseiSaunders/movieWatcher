let movieIDs = [];
const mainContent = document.getElementById('main_content');

function getLocalStorage() {
  let keys = Object.keys(localStorage);
  let movieNumber = keys.length;

  for (let i = 0; i < movieNumber; i++) {
    movieIDs.push(keys[i]);
  }
  return movieIDs;
}
getLocalStorage();

function renderLocalStorage(movies) {
  if (movieIDs.length < 1) {
    mainContent.innerHTML = `
<img class="placeholder_icon" src="./resources/media/noun-filmstrip-407066-9B9B9B.svg" alt="film icon">
			<p>You don't have any saved movies yet!</p>
<a href="https://www.flaticon.com/free-icons/film" title="film icons">Film icons created by Freepik -
					Flaticon</a>
`;
  }
  console.log(3, movies);
  for (let movie of movies) {
    let film = JSON.parse(window.localStorage.getItem(movie));
    console.log(film.title);
    console.log(film.movieID);
    let movieArticle = document.createElement('article');
    movieArticle.classList.add('movie_article');
    movieArticle.innerHTML = `
    <div class="poster">
  	  <img src="${film.poster}" alt="Movie Poster for ${film.title}">
    </div>
    <div class="movie_info">
      <div class="movie_header">
  	    <h2>${film.title}</h2>
        <p>${film.year}</p>
        <p>⭐ ${film.rating}</p>
  	  </div>
      <div class="movie_details">
        <p>${film.runtime}</p>
        <p>${film.genre}</p>
        <button id=${film.movieID} class="remove_btn" data-movieID=${film.movieID}><span class="material-icons">
remove_circle
</span>Remove from watchlist</button>
      </div>
      <div class="movie_plot">
  			<p>${film.plot}</p>
    </div>
  `;
    mainContent.appendChild(movieArticle);
    const removeBtn = document.getElementById(`${film.movieID}`);
    removeBtn.addEventListener('click', () => {
      let movie = film.movieID;
      console.log(movie);
      window.localStorage.removeItem(movie);
      window.location.reload();
    });
  }
}

renderLocalStorage(movieIDs);
