'use strict';

var theadEl = document.getElementById('table_head');
var tbodyEl = document.getElementById('table_body');
var userForm = document.getElementById('userForm');

var allMovies = [];

function StarWarsMovies(name, dateReleased, episode){
  this.name = name;
  this.dateReleased = dateReleased;
  this.episode = episode;

  allMovies.push(this);
}

StarWarsMovies.prototype.vaderWasThere = function(){
  console.log(`Vader was present in ${this.name}`);
  console.log(this.name, this.dateReleased, this.episode);
}

function addElement(element, content, parent) {
  var newEl = document.createElement(element);
  newEl.textContent = content;
  parent.appendChild(newEl);
}

function renderMovies(){
  for (var i = 0; i < allMovies.length; i++){
    var trEl = document.createElement('tr');
    tbodyEl.appendChild(trEl);
    addElement('td', allMovies[i].name, trEl);
    addElement('td', allMovies[i].dateReleased, trEl);
    addElement('td', allMovies[i].episode, trEl);
  }
}

function handleSubmit(event){
  event.preventDefault();

  var movie = event.target.movieName.value;
  console.log(movie);

  var year = event.target.movieYear.value;
  console.log(year);

  var episode = event.target.movieEpisode.value;
  console.log(episode);

  new StarWarsMovies(movie, year, episode);

  event.target.movieName.value = null;
  event.target.movieYear.value = null;
  event.target.movieEpisode.value = null;
}

userForm.addEventListener('submit', handleSubmit);

new StarWarsMovies('Star Wars: A New Hope', 1977, 4);
new StarWarsMovies('Star Wars: The Empire Strikes Back', 1980, 5, 1998);
new StarWarsMovies('Star Wars: Return of the Jedi', 1983, 5);

renderMovies();
