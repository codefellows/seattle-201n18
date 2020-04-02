'use strict';

console.log('hello world');

// Make a function that will ask an user for their name

function getFirstName() {
    var askUserName = prompt('What is your name?');
    return askUserName;
}

function getLastName(firstName) {
    var potatoe = prompt('Hello ' + firstName + ', what is your last name?');
    return potatoe;
}

// getFirstName();

var name1 = getFirstName();
var lname1 = getLastName(name1);


var lname2 = getLastName(getFirstName());

var name3 = getFirstName();
var lname3 = getLastName(name3);
