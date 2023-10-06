const rowCards = document.querySelector('#row-cards');

//* Vamos a crear la tarjeta (card)
const cardMovie = (movie) => {
  console.log(movie);
  //* crear los elementos html
  const cardBootstrap = document.createElement("div"); //* <div></div>
  const imgCard = document.createElement("img"); //* <img src="..." />
  const cardBody = document.createElement("div"); //* <div></div>
  const titleMovie = document.createElement("h5"); //* <h5></h5>
  const desMovie = document.createElement("p"); //* <p></p>

  //* Añadir las clases

  cardBootstrap.classList.add("card", "mt-4", "col-3"); //* <div class="card mt-4 col-3"></div>
  imgCard.classList.add("card-img-top"); //* <img src="..." class="card-img-top"/>
  cardBody.classList.add("card-body"); //* <div class="card-body"></div>
  titleMovie.classList.add("card-title", "text-center"); //* <h5 class="card-title text-center"></h5>
  desMovie.classList.add("card-text"); //* <p class="card-text"></p>

  //* Creamos los textos de los elementos
  const titlecardMovie = document.createTextNode(movie.original_title); //* Texto del título
  const movieDesMovie = document.createTextNode(movie.overview); //* Texto de la descripción
  
  //* Configurar la imagen
  imgCard.src = `https://image.tmdb.org/t/p/original/${movie.poster_path}`; // Usar 'poster_path' en lugar de 'movies'

  //* Añadir textos a los elementos
  titleMovie.appendChild(titlecardMovie); //* <h5 class="card-title text-center">Título de la película</h5>
  desMovie.appendChild(movieDesMovie); //* <p class="card-text">Descripción de la película</p>

  //* El renderizado y orden de jerarquía
  cardBootstrap.append(imgCard, cardBody);
  cardBody.append(titleMovie, desMovie);
  rowCards.appendChild(cardBootstrap); // Cambiar 'append' a 'appendChild' para agregar la tarjeta al contenedor.
};

//* movies es el conjunto de datos de películas
const generatorCreateCards = (movies) => {
  console.log(movies);
  //* map
  movies.forEach((movie) => cardMovie(movie)); // Usar 'forEach' en lugar de 'map'
};

export { cardMovie, generatorCreateCards };