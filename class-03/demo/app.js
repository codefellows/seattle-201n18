'use strict';


// Arrays


// var catArray = ['mildred','max'];
var catArray = [];


var myRoommatesCat = 'max';
var myCat = 'mildred';

catArray.push(myRoommatesCat);
catArray.push(myCat);
catArray.push('My Kitty Love');
catArray.push('Buckminster');

console.log(catArray);


// for(var i = 0; i < catArray.length; i++ ){
//     if(catArray[i] === "My Kitty Love"){
//         console.log('found your cat');
//     }
//     else{
//         console.log('I found ' + catArray[i] + ' but not the cat we\'re looking for')
//     }
// }

var foundCat = false;
var counter = 0;

while(!foundCat){
    if(catArray[counter] === "My Kitty Love"){
        console.log('found your cat');
        foundCat = true;
    }
    else if(counter < catArray.length){
        console.log('no cat found')
    }
    else if(counter > catArray.length){
        foundCat = true;
    }
    counter++
}