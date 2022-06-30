const searchInput = document.getElementById('movieSearchInput');
const searchBtn = document.getElementById('movieSearchBtn');
const mainContent = document.getElementById('main_content');
import { renderMovies } from './render.js';

let handleClick = function () {
  let movieArray = [];
  let movieData = [];
  mainContent.innerHTML = '';
  fetch(`http://www.omdbapi.com/?apikey=9e510766&s=${searchInput.value}`)
    .then(handleResponse)
    .then((data) => {
      console.log(1, data);
      for (let movie of data.Search) {
        movieArray.push(movie.Title);
      }
      return movieArray;
    })
    .then((movieArray) => {
      for (let movie of movieArray) {
        fetch(`http://www.omdbapi.com/?apikey=9e510766&t=${movie}&p=short`)
          .then(handleResponse)
          .then((data) => {
            renderMovies(data);
          });
      }
    })
    .catch((error) => console.log(error));
};

function handleResponse(response) {
  const contentType = response.headers.get('content-type');
  if (contentType.includes('application/json')) {
    return handleJSONResponse(response);
  } else if (contentType.includes('text/html')) {
    return handleTextResponse;
  } else {
    throw new Error(
      `Sorry, content-type: ${contentType} is not currently supported`
    );
  }
}

function handleJSONResponse(response) {
  return response.json().then((json) => {
    if (response.ok) {
      return json;
    } else {
      return Promise.reject(
        Object.assign({}, json, {
          status: response.status,
          statusText: response.statusText,
        })
      );
    }
  });
}

function handleTextResponse(response) {
  return response.text().then((text) => {
    if (response.ok) {
      return text;
    } else {
      return Promise.reject({
        status: response.status,
        statusText: response.statusText,
        err: text,
      });
    }
  });
}

searchBtn.addEventListener('click', handleClick);
