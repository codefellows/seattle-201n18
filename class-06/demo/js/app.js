'use strict';

console.log('im alive');

// // document.body.textContent = 'Hello';

// // anchor data to the parent element
var pEl = document.getElementById('movies');

// // create a new element
// var liEl = document.createElement('li');

// // Give our new element some content
// liEl.textContent = 'This is my list of items';

// // append the child element to the parent element
// parentEl.appendChild(liEl);

var movies = ['Star Wars A New Home', 'black', 'yellow', 'blue', 'purple'];

for(var i = 0; i < colors.length; i++){
  // create element
  var liEl = document.createElement('li');
  // Give it content
  liEl.textContent = `${colors[i]} is the Way`;
  // append the child to the parent
  pEl.appendChild(liEl);
}
