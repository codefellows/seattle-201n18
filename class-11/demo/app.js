'use strict';

var allAlpacas = [];

// create link to our DOM elements
var imageOneEl = document.getElementById('alpaca-image-1');
var imageTwoEl = document.getElementById('alpaca-image-2');
var divEl = document.getElementById('alpaca-container');

// Track how many times a user has clicked on images
var clickTracker = 5;

function Alpaca(name, src){
    this.name = name;
    this.src = src;
    this.clicked = 0;

    allAlpacas.push(this);
}

// randomizer function
function randomizer(max){
    return Math.floor(Math.random() * max);
};

// create a function that will pick two numbers and randomly generate
function imageGenerator(){
    var pic1 = randomizer(allAlpacas.length);
    console.log(pic1);
    var pic2 = randomizer(allAlpacas.length);
    console.log(pic2);

    imageOneEl.src = allAlpacas[pic1].src;
    imageOneEl.title = allAlpacas[pic1].name;

    imageTwoEl.src = allAlpacas[pic2].src;
    imageTwoEl.title = allAlpacas[pic2].name;
}

function stopClicking() {
    divEl.removeEventListener('click', handleClick);
    divEl.textContent = '';
    console.log('done');
}

new Alpaca('alphonso',  './assets/a1.jpg');
new Alpaca('albert',  './assets/a2.jpg');
new Alpaca('allie',  './assets/a3.jpeg');
new Alpaca('alphabet',  './assets/a4.jpg');
new Alpaca('annie',  './assets/alpaca5.jpg');
new Alpaca('alfred',  './assets/a6.jpg');
new Alpaca('allen',  './assets/a7.jpg');


function handleClick(event) {
    // increment our property 'clicks', and generate two new images
    var clickedAlpaca = event.target.title;
    console.log(clickedAlpaca);
    for(var i = 0; i < allAlpacas.length; i++){
        if(clickedAlpaca === allAlpacas[i].name){
            allAlpacas[i].clicked++;
        }
    }
    clickTracker--;

    if(clickTracker === 0){
        stopClicking();
    }
    imageGenerator();
};


divEl.addEventListener('click', handleClick);


imageGenerator();