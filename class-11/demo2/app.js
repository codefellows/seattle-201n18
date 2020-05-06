'use strict';

var movieContainer = document.getElementById('movieContainer');
var picture1 = document.getElementById('picture1');
var picture2 = document.getElementById('picture2');

// picture1.src = 'img/starwars1.jpg';
// picture1.alt = 'Star Wars Episode 1';
// picture1.title = 'Star Wars: The Phantom Menace';

// picture2.src = 'img/starwars2.jpg';
// picture2.alt = 'Star Wars Episode 2';
// picture2.title = 'Star Wars: Attack of The Clones';

var totalClicks = 25;

var allMovies = [];

// constructor
// Function or COnstructor takes in parameters
function StarWarsMovies(src, title, clicked = 0, viewed = 0){
  this.movieSrc = src;
  this.movieTitle = title;
  this.movieAlt = title;

  this.movieClicked = clicked;
  this.movieViewed = viewed;
  allMovies.push(this);

}

// Call a function or constructor send in arguments
new StarWarsMovies('img/starwars1.jpg', 'Star Wars: Episode I');
new StarWarsMovies('img/starwars2.jpg', 'Star Wars: Episode II');
new StarWarsMovies('img/starwars3.jpg', 'Star Wars: Episode III');
new StarWarsMovies('img/starwars4.jpg', 'Star Wars: Episode IV');
new StarWarsMovies('img/starwars5.jpg', 'Star Wars: Episode V');
new StarWarsMovies('img/starwars6.jpg', 'Star Wars: Episode VI');
new StarWarsMovies('img/starwars7.jpg', 'Star Wars: Episode VII');
new StarWarsMovies('img/starwars8.jpg', 'Star Wars: Episode VIII');
new StarWarsMovies('img/starwars9.jpg', 'Star Wars: Episode IV');
new StarWarsMovies('img/starwarsrogueone.jpeg', 'Star Wars: Rogue One');
new StarWarsMovies('img/starwarssolo.jpg', 'Star Wars: A Solo Movie');

function randomMovie(max){
    return Math.floor(Math.random() * max);
}

// imgage generator
function imageGenerator(){
 
  do {
    var pic1 = randomMovie(allMovies.length);
    // console.log(pic1);
    var pic2 = randomMovie(allMovies.length);
    // console.log(pic2);
  } while (pic1 === pic2);

  // set picture 1, alt, title, src
  picture1.src = allMovies[pic1].movieSrc;
  picture1.alt = allMovies[pic1].movieAlt;
  picture1.title = allMovies[pic1].movieTitle;
  allMovies[pic1].movieViewed++;

  picture2.src = allMovies[pic2].movieSrc;
  picture2.alt = allMovies[pic2].movieAlt;
  picture2.title = allMovies[pic2].movieTitle;
  allMovies[pic2].movieViewed++;
};

function handleDaClick(e) {
  // e.preventDefault;
  totalClicks--;
  var clickedMovie = e.target.title;
  console.log(allMovies.length);
  console.log(typeof(clickedMovie));

  for(var i = 0; i < allMovies.length; i++){
    console.log('Clicked Movie is:' + clickedMovie);
    if(clickedMovie === allMovies[i].movieTitle){
      console.log('Clicked Movie is:' + clickedMovie);
      console.log('Array movie is:' + allMovies[i].movieTitle);
      allMovies[i].movieClicked++;
    }
  }
  if (totalClicks < 1){
    movieContainer.removeEventListener('click', handleDaClick)
  } else {
    imageGenerator();
  }
}

// make event handler
// function to handle the event

movieContainer.addEventListener('click', handleDaClick);

imageGenerator();
