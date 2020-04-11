'use strict';

console.log('im alive');


// anchor data to the parent element
var pEl = document.getElementById('movies');

// var movies = ['Star Wars A New Hope', 'Star Wars The Empire Strikes Back', 'Star Wars Return Of The Jedi', 'Star Wars The Phantom Menace', 'Star Wars Attack Of The Clones', 'Star Wars Revenge Of The Sith', 'Star Wars The Force Awakens', 'Star Wars The Last Jedi', ' Star Wars The Rise Of Skywalker', 'Star Wars Rogue One', 'Star Wars Solo' ];

// for(var i = 0; i < movies.length; i++){
// create a new element
//   var liEl = document.createElement('li');
// Give our new element some content
//   liEl.textContent = `${movies[i]} is the Way`;
// append the child element to the parent element
//   pEl.appendChild(liEl);
// }

var newMovieArr = [];

// The order in which your construct expects data is how you need to send it in
function StarWarsMovies(name, dateReleased, episode, yearRereleased = 0){
  this.name = name;
  this.dateReleased = dateReleased;
  this.episode = episode;
  this.rottenTomatoeScore = 0;
  this.yearRereleased = yearRereleased;
  this.director = "George Lucas";

  newMovieArr.push(this);
}

StarWarsMovies.prototype.vaderWasThere = function(){
  console.log(`Vader was present in ${this.name}`);
  console.log(this.name, this.dateReleased, this.episode);
}

new StarWarsMovies('Star Wars: A New Hope', 1977, 4);
new StarWarsMovies('Star Wars: The Empire Strikes Back', 1980, 5, 1998);

// newMovieArr[0].vaderWasThere();

// var sw1 = {
//   name: 'Star Wars A New Hope',
//   dateReleased: 1977,
//   episode: 4,
//   rottenTomatoeScore: 0,
//   displayOnPage: function() {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${this.name} was released in ${this.dateReleased}.`;
//     pEl.appendChild(liEl);
//   }
// }
// var sw2 = {
//   name: 'Star Wars The Empire Strikes Back',
//   dateReleased: 1980,
//   episode: 5,
//   displayOnPage: function() {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${this.name} was released in ${this.dateReleased}.`;
//     pEl.appendChild(liEl);
//   }
// }
// var sw3 = {
//   name: 'Star Wars Return Of The Jedi',
//   dateReleased: 1983,
//   episode: 6,
//   displayOnPage: function() {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${this.name} was released in ${this.dateReleased}.`;
//     pEl.appendChild(liEl);
//   }
// }
// var sw4 = {
//   name: 'Star Wars The Phantom Menace',
//   dateReleased: 1999,
//   episode: 1,
//   displayOnPage: function() {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${this.name} was released in ${this.dateReleased}.`;
//     pEl.appendChild(liEl);
//   }
// }
// var sw5 = {
//   name: 'Star Wars Attack Of The Clones',
//   dateReleased: 2002,
//   episode: 2,
//   displayOnPage: function() {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${this.name} was released in ${this.dateReleased}.`;
//     pEl.appendChild(liEl);
//   }
// }
// var sw6 = {
//   name: 'Star Wars Revenge Of The Sith',
//   dateReleased: 2005,
//   episode: 3,
//   displayOnPage: function() {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${this.name} was released in ${this.dateReleased}.`;
//     pEl.appendChild(liEl);
//   }
// }
// var sw7 = {
//   name: 'Star Wars The Force Awakens',
//   dateReleased: 2015,
//   episode: 7,
//   displayOnPage: function() {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${this.name} was released in ${this.dateReleased}.`;
//     pEl.appendChild(liEl);
//   }
// }
// var sw8 = {
//   name: 'Star Wars The Last Jedi',
//   dateReleased: 2017,
//   episode: 8,
//   displayOnPage: function() {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${this.name} was released in ${this.dateReleased}.`;
//     pEl.appendChild(liEl);
//   }
// }
// var sw9 = {
//   name: 'Star Wars The Rise Of Skywalker',
//   dateReleased: 2019,
//   episode: 9,
//   displayOnPage: function() {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${this.name} was released in ${this.dateReleased}.`;
//     pEl.appendChild(liEl);
//   }
// }
// var sw10 = {
//   name: 'Rogue One: A Star Wars Story',
//   dateReleased: 2016,
//   episode: 0,
//   displayOnPage: function() {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${this.name} was released in ${this.dateReleased}.`;
//     pEl.appendChild(liEl);
//   }
// }
// var sw11 = {
//   name: 'Solo: A Star Wars Story',
//   dateReleased: 2018,
//   episode: 0,
//   displayOnPage: function() {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${this.name} was released in ${this.dateReleased}.`;
//     pEl.appendChild(liEl);
//   }
// }

//invoke the method
// sw1.displayOnPage();
// sw2.displayOnPage();
// sw3.displayOnPage();
// sw4.displayOnPage();
// sw5.displayOnPage();
// sw6.displayOnPage();
// sw7.displayOnPage();
// sw8.displayOnPage();
// sw9.displayOnPage();
// sw10.displayOnPage();
// sw11.displayOnPage();




// Create a constructor of cars
// make, model, year, color add 1 additional property of your choosing

// create 3 cars