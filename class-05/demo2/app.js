'use strict';
// console.log('I ALIVEEEE!');

// functions
// loops
// arrays
// conditionsal

// Problem Domain: Write a function that takes in an array and an int
// loop through the array and sum up the entire array
// then determine if the sum is divisible by the number.
// if divisible return xxxx
// if not divisible return xxxx

//  Index          0  1  2 3  4
var number1Array = [13,42,8,11,33]; // 107
var number2Array = [5,25,30,20,10]; // 90
// Length  = 5
// Largest Index = 4


function sumArray(arr){
    var arraySum = 0;

    for(var i = 0; i < arr.length; i++){
        arraySum = arraySum + arr[i];
        // console.log('The total so far is: ' + arraySum);
    }
    return arraySum;
}

function checkDivisor(sumNumber, divisor){
    var message = '';
    if(sumNumber % divisor === 0){
        message = 'Your sum is divisible by ' + divisor;
    } else if (sumNumber % divisor !== 0){
        message = 'Your sum is NOT divisible by ' + divisor;
    } else {
        message = 'Houston, we have a problem!!!';
    }
    return message;
}

var potatoe = sumArray(number1Array);
var arrayMessage1 = checkDivisor(potatoe,5);



// First run i =0, arraySum = 13, 
// Second Run i = 1, arraySum = 55,
// Thrid Run i = 2, arraySum = 63,
// Forth Run i = 3, arraySum = 74,
// Fith Run i = 4, arraySUm = 107,
// Sixth Run i = 5, arraSum = 107

var userNumber = parseInt(prompt('Please Enter a Number'));

while(isNaN(userNumber)){
    userNumber = parseInt(prompt('Try Again.  Please Enter a Number'));
}


var arrOf100 = [0,0,0,0,0,0,0,0,0,0,0,0]
for(var j = 0; j < 10; j++){
    console.log(arrOf100[j]);
}

