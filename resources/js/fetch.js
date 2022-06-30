const searchInput = document.getElementById('movieSearchInput');
let movieData = [];

let handleClick = function () {
  let movieArray = [];
  movieData = [];
  fetch(`http://www.omdbapi.com/?apikey=9e510766&s=${searchInput.value}`)
    .then(handleResponse)
    .then((data) => {
      for (let movie of data.Search) {
        movieArray.push(movie.Title);
      }
      return movieArray;
    })
    .then((movieArray) => {
      movieArray.forEach((movie) => {
        fetch(`http://www.omdbapi.com/?apikey=9e510766&t=${movie}&p=short`)
          .then(handleResponse)
          .then((data) => movieData.push(data));
      });
      console.log(movieData);
      return movieData;
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


export { movieData, handleClick };
