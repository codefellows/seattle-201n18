'use strict';


// Problem domain:  I want to create a question for the user, that will check against a list of possible answers.  I also want to give the user 6 chances to guess correctly before moving on.


function problemSeven(){
    var guesses = 0;

    // Create the list of possible answers that we'll be working with.
    var possibleAnswers = ['ducati', 'kawasaki', 'honda'];

    var userCorrect = false;
    // Create the question for the user.
    
    // Limit the number of guesses to six.
    while(guesses < 6){

        var question = prompt('I have owned a few motorcycles in my past life.  Name one manufacturer.').toLowerCase();
        // Create a validation to compare the guess to the possible answers.

        for(var i = 0; i < possibleAnswers.length; i++){
            // did the user answer correctly?
            if(question === possibleAnswers[i]){
                console.log('correct!');
                guesses = 6;
                break;
            }
        }
        if(guesses === 6){
            console.log('correct!');
        }
        guesses++

        if(userCorrect === false) {
            console.log('did not answer correctly');
        }
    }

}