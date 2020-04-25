
// write a function that takes in an int
// determines if it is divisible by 3/ 5/ both or none
// return fizz buzz or fizz buzz or int
//   condition that checks for divisible by 5
// condition  that checks divisible by both
// conbtition that checks divisible by none
// return fizz, buzz, fizzbuzz or fizNumber
//



function fizBuzz(fizNumber){
    var message = '';
    if (fizNumber%3 === 0 ){
        message += 'Fizz';
    }
    if (fizNumber%5 === 0 ) {
        message += 'Buzz';
    }
    if ((fizNumber%3 !== 0) && (!fizNumber%5 !==0)){
        message = fizNumber;
    }
return message;
}




