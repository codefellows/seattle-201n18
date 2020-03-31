'use strict';

var randomNumer = Math.floor(Math.random() * 1000000);
var guess = 10;
var answerArray = [];
var finalScore = 0;
var playGame = 'yes';
var gamesWon = 0;
var gamesPlayed = 0;
var debug = false;

do {
    var randomNumer = Math.floor(Math.random() * 1000);
    gamesPlayed++;
    while(guess > 0){
        var userAnswer = prompt('Guess a number between 1 and 1,000');
        if (parseInt(userAnswer) === randomNumer){
            alert('You are right');
            guess = 0;
            gamesWon++;
            if(debug){
                console.log(randomNumer);
            }
        } else if(parseInt(userAnswer) < randomNumer){
            alert('Your answer was to low!');
        } else {
            alert('Your answer was to high!');
        }
        answerArray.push(parseInt(userAnswer));
        guess--;
    }
    console.log(randomNumer);
    
    for(var i = 0; i < answerArray.length; i++){
        console.log(answerArray[i]);
    }
    guess = 10;
    playGame = prompt('Do you want to play again?');
    if(playGame === 'no'){
        alert('Thank you for playing. You won ' + gamesWon + ' out of ' + gamesPlayed + ' games.');
    }
} while (playGame === 'yes');
