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
  console.log(3, movies);
  for (let movie of movies) {
    let film = JSON.parse(window.localStorage.getItem(movie));
    console.log(film.title);

    let movieArticle = document.createElement('article');
    movieArticle.classList.add('movie_article');
    movieArticle.innerHTML = `
    <div class="poster">
  	  <img src="${film.poster}">
    </div>
    <div class="movie_info">
      <div class="movie_header">
  	    <h2>${film.title}</h2>
        <p>${film.year}</p>
        <p>⭐ ${film.imdbRating}</p>
  	  </div>
      <div class="movie_details">
        <p>${film.runtime}</p>
        <p>${film.genre}</p>
        <button id=${film.imdbID} class="add_btn" data-movieID=${film.imdbID}>Add</button>
      </div>
      <div class="movie_plot">
  			<p>${film.plot}</p>
    </div>
  `;
    mainContent.appendChild(movieArticle);
    //     // const addBtn = document.getElementById(`${movie.imdbID}`);
    //     // addBtn.addEventListener(
    //     //   'click',
    //     //   () => {
    //     //     window.localStorage.setItem(`${movie.imdbID}`, {
    //     //       poster: `${movie.Poster}`,
    //     //       title: `${movie.Title}`,
    //     //       year: `${movie.Year}`,
    //     //       rating: `${movie.imdbRating}`,
    //     //       runtime: `${movie.Runtime}`,
    //     //       genre: `${movie.Genre}`,
    //     //       plot: `${movie.Plot}`,
    //     //     });
    //     //   }
    //     // handleAddClick
    //     // () => {
    //     //     console.log(event.target.dataset.movie);
    //     //   }
    //     // );
    //   }
  }
}

renderLocalStorage(movieIDs);
