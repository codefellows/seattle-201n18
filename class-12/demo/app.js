'use strict';

var allAlpacas = [];

// create link to our DOM elements
var imageOneEl = document.getElementById('alpaca-image-1');
var imageTwoEl = document.getElementById('alpaca-image-2');
var divEl = document.getElementById('alpaca-container');

// Track how many times a user has clicked on images
var clickTracker = 5;

// TODO:  Keep track of alpacas seen

function Alpaca(name, src){
    this.name = name;
    this.src = src;
    this.clicked = 0;
    this.viewed = 0;

    allAlpacas.push(this);
}

// randomizer function
function randomizer(max){
    return Math.floor(Math.random() * max);
};

// create a function that will pick two numbers and randomly generate
function imageGenerator(){

    // TODO:  Handle duplicate and last viewed images

    var pic1 = randomizer(allAlpacas.length);
    var pic2 = randomizer(allAlpacas.length);
  

    imageOneEl.src = allAlpacas[pic1].src;
    imageOneEl.title = allAlpacas[pic1].name;

    imageTwoEl.src = allAlpacas[pic2].src;
    imageTwoEl.title = allAlpacas[pic2].name;



    allAlpacas[pic1].viewed++;
    allAlpacas[pic2].viewed++;


}

function stopClicking() {
    divEl.removeEventListener('click', handleClick);
    divEl.textContent = '';
    console.log('done');
}

// TODO:  seed data for chart
function seedChartData() {
    var clickArray = [];
    var labelArray = [];
    var viewedArray = [];

    for (var i = 0; i < allAlpacas.length; i++ ){
        clickArray.push(allAlpacas[i].clicked);
        labelArray.push(allAlpacas[i].name);
        viewedArray.push(allAlpacas[i].viewed);
    }
    return [clickArray, labelArray, viewedArray];
}


// TODO:  render chart
function renderChart() {
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: seedChartData()[1],
            datasets: [{
                label: '# of Votes',
                data: seedChartData()[0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                    label: '# of Views',
                    data: seedChartData()[2],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1

            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}


// Alpaca objects
new Alpaca('alphonso',  './assets/a1.jpg');
new Alpaca('albert',  './assets/a2.jpg');
new Alpaca('allie',  './assets/a3.jpeg');
new Alpaca('alphabet',  './assets/a4.jpg');
new Alpaca('annie',  './assets/alpaca5.jpg');
new Alpaca('alfred',  './assets/a6.jpg');
new Alpaca('allen',  './assets/a7.jpg');
new Alpaca('amelia',  './assets/a8.jpg');
new Alpaca('arthur',  './assets/a9.jpg');
new Alpaca('annabelle',  './assets/a10.png');
new Alpaca('arlo',  './assets/a11.jpg');
new Alpaca('artificial',  './assets/a12.jpg');


// Event handler that runs whenever we click on an alpaca
function handleClick(event) {
    // increment our property 'clicks', and generate two new images
    var clickedAlpaca = event.target.title;
    for(var i = 0; i < allAlpacas.length; i++){
        if(clickedAlpaca === allAlpacas[i].name){
            allAlpacas[i].clicked++;
        }
    }
    clickTracker--;

    if(clickTracker === 0){
        stopClicking();
        // generate chart
        renderChart();
    }
    imageGenerator();
}

// Add our event listener
divEl.addEventListener('click', handleClick);

imageGenerator();


