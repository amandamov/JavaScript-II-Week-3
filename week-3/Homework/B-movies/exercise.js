/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
const allMoviesDiv = document.querySelector("#all-movies");

function showMovies(){
  movies.forEach(movie => {
    const newMovie = document.createElement('p');
    newMovie.innerHTML = `${movie.title} - ${movie.director}`;
    allMoviesDiv.appendChild(newMovie);
  });
  document.getElementById('movies-number').innerText = Object.keys(movies).length;
}

// showMovies(movies);
const myTimeout = setTimeout(showMovies, 5000);

// create a new movie object for your favorite movie
const newMovie = {
  title: "Mamma Mia",
  director: "Phyllida Lloyd",
  type: "musical",
  haveWatched: true
}

// create addMovies function
function addMovie(newMovie){
  setTimeout(movies.push(newMovie), 2000);
}
addMovie(newMovie)

//Task 4
const main = document.querySelector("#main");
const newForm = document.createElement("form");
main.appendChild(newForm);
const inputTitle = document.createElement("input");
// inputTitle.setAttribute("value", "Title");
const inputDirector = document.createElement("input");
const inputType = document.createElement("input");
const inputWatched = document.createElement("input");
const saveButton = document.createElement("button");
saveButton.id = "button"
saveButton.innerHTML = "SAVE"
newForm.appendChild(inputTitle);
newForm.appendChild(inputDirector);
newForm.appendChild(inputType);
newForm.appendChild(inputWatched);
newForm.appendChild(saveButton);

document.querySelector("#button").addEventListener("click", addUserMovie);
function addUserMovie(inputTitle, inputDirector, inputType, inputWatched){
  userMovie.title = document.querySelector(inputTitle).value;
  userMovie.director = document.querySelector(inputDirector).value;
  userMovie.type = document.querySelector(inputType).value;
  userMovie.watched = document.querySelector(inputWatched).value;
  const userMovie = {}
  addMovie(userMovie)
  showMovies(movies)
}