'use strict';

console.log('it\'s alive!')


// Create a sleep study app.  This app will display how many hours of sleep a person has had over a 7 day period.  To fufill MVP, we will fill this table with dummy data, having it populate as the person is created.

// Example:

var weekArray = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

var peopleArray = [];

var ulSleep = document.getElementById('sleep-list');

function People(name, minSleep, maxSleep){
    this.name = name;
    this.minSleep = minSleep;
    this.maxSleep = maxSleep;
    this.sleepArray = [];

    this.seedData();

    peopleArray.push(this);

}

People.prototype.randomNumber = function() {
    return Math.floor(Math.random() * (this.maxSleep - this.minSleep + 1) + this.minSleep);
}

People.prototype.seedData = function() {
    for(var i = 0; i < weekArray.length; i++) {
        this.sleepArray.push(this.randomNumber());
    }
}

new People('ray', 3, 10);
new People('tim', 3, 6);
new People('millie', 12, 16);
new People('margot', 5, 8);


// Rendering stuff for the header

// Declare the parent element
var pEl = document.getElementById('sleep-table');

function renderHeader() {
// Create a child element
var cEl = document.createElement('tr');
var thEl = document.createElement('th');
var eTh = document.createElement('th');
cEl.appendChild(eTh);
for(var i = 0; i < weekArray.length; i++) {
    // Create a child element of the child above
    var thEl = document.createElement('th');

    // Add in a table data for our head
    var tdEl = document.createElement('td');

    // Add text to our table data
    tdEl.textContent = weekArray[i];

    // Append children(s) to the parent(s)
    thEl.appendChild(tdEl);

    // Append to the sleep-table
    cEl.appendChild(thEl);
}

var totalEl = document.createElement('th');
var totalTd = document.createElement('td');

totalTd.textContent = 'Total';

totalEl.appendChild(totalTd);

cEl.appendChild(totalEl);

pEl.appendChild(cEl);
}
renderHeader();

function renderData() {

    // Render the data for all of our objects
    // I will need one 'for' loop to iterate through all of the "People" objects inside my peopleArray
    // I will need one 'for' loop to render the contents of my sleepArray inside each object.

    for(var i = 0; i < peopleArray.length; i++){
        // DOM manipulation time
        var trEl = document.createElement('tr');
        var tdEl = document.createElement('td');
        tdEl.textContent = peopleArray[i].name;

        trEl.appendChild(tdEl);
        var total = 0;
        for(var j = 0; j < peopleArray[i].sleepArray.length; j++){
            // More DOM stuff
            var tdEl2 = document.createElement('td');
            tdEl2.textContent = peopleArray[i].sleepArray[j];
            // append child to the row
            trEl.appendChild(tdEl2);
            total += peopleArray[i].sleepArray[j];
        }
        var tdTotal = document.createElement('td');
        tdTotal.textContent = total;
        trEl.appendChild(tdTotal);
        pEl.appendChild(trEl);
        
    }
}

renderData();





















// function render(object) {
//     var newP = document.createElement('p');
//     newP.textContent = object.name;
//     ulSleep.appendChild(newP);

//     for(var i = 0; i < object.sleepArray.length; i++){
//         // create list HTML element
//         // get the sleep array data and add that as text content
//         // append the list HTML element to the parent ul
//         var newLi = document.createElement('li');
//         newLi.textContent = object.sleepArray[i];
//         ulSleep.appendChild(newLi);
//     }
// }

// millie.seedData();
// render(millie);

// ray.seedData();
// render(ray);

// tim.seedData();
// render(tim);

// margot.seedData();
// render(margot);