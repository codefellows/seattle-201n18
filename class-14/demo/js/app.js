'use strict';

// TODO: Display 3 images on web page
// Add title, h1. footer, paragraph
// handle user events - clicks
// listen for event

// need a randomizer
// check if images are unique

// tract times shown
// chart stuff
// local storage

var allproducts = [];

var picture1 = document.getElementById('picture1');
var picture2 = document.getElementById('picture2');
var picture3 = document.getElementById('picture3');
var selectionClicker = document.getElementById('bus-mall-pictures');

var imageArray = [];
var totalClicks = 5;

function BusMallProducts(src, title, viewed = 0, clicked = 0){
    this.src = src;
    this.title = title;
    this.viewed = viewed;
    this.clicked = clicked;
    this.alt = title;
    
    allproducts.push(this);    
}

function random(max) {
    return Math.floor(Math.random() * max);
};

function fillImageArray(){
    while(imageArray.length < 6){
        var image = random(allproducts.length)
        if (imageArray.includes(image)){
            console.log('nothing to see here');
        } else {
            imageArray.push(image);
        }
    }
    console.log(imageArray);
}

function imageGenerator(){

    var pic1 = imageArray.shift(); 
    var pic2 = imageArray.shift();
    var pic3 = imageArray.shift();

    picture1.src = allproducts[pic1].src;
    picture1.title = allproducts[pic1].title;
    picture1.alt = allproducts[pic1].alt;
    allproducts[pic1].viewed ++;
    picture2.src = allproducts[pic2].src;
    picture2.title = allproducts[pic2].title;
    picture2.alt = allproducts[pic2].alt;
    allproducts[pic2].viewed ++;
    picture3.src = allproducts[pic3].src;
    picture3.title = allproducts[pic3].title;
    picture3.alt = allproducts[pic3].alt;
    allproducts[pic3].viewed ++;
    fillImageArray();
}

function handleClick(e){
    var clickedProduct = e.target.title;
    console.log(clickedProduct);
    totalClicks--;

    for (var i = 0; i < allproducts.length; i++){
        if (clickedProduct === allproducts[i].title){
            allproducts[i].clicked++;
        }
    }

    if (totalClicks < 1){
        // render chart
        saveToLocalStorage();
        selectionClicker.removeEventListener('click', handleClick);
    } else {
        imageGenerator();
    }
}

function saveToLocalStorage(){
    var storeProducts = JSON.stringify(allproducts)
    localStorage.setItem('BusMallProducts', storeProducts);

    // localStorage.setItem('BusMallProducts', JSON.stringify(allproducts));
}

function seedData() {
    // does localstorage exist
    if(localStorage.getItem('BusMallProducts')){
        var getproducts = JSON.parse(localStorage.getItem('BusMallProducts'))
        console.log(getproducts);
        for (var i = 0; i < getproducts.length; i++){
            new BusMallProducts(
                getproducts[i].src,
                getproducts[i].title,
                getproducts[i].viewed,
                getproducts[i].clicked
            )
        }
    } else{
    new BusMallProducts('img/bag.jpg', 'Bag');
    new BusMallProducts('img/banana.jpg', 'Banana');
    new BusMallProducts('./img/pen.jpg', 'Pen');
    new BusMallProducts('./img/usb.gif', 'USB');
    new BusMallProducts('./img/dragon.jpg', 'Dragon');
    new BusMallProducts('./img/cthulhu.jpg', 'Cthulhu');
    new BusMallProducts('./img/tauntaun.jpg', 'Tauntaun');
    new BusMallProducts('./img/unicorn.jpg', 'Unicorn');
    }
}

selectionClicker.addEventListener('click', handleClick);
seedData()
fillImageArray();
imageGenerator();

