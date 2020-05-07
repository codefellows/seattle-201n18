# Concept Review

Assume you are in a pair programming session, and are the navigator.  For each of the lines of code below, provide the (nerdy) english instructions that you would give to your partner (the driver) that would make them type the code shown.

For example, if you wanted the driver to write this code:

```
var num = parseInt("2");
```

You would say:
> Declare a variable called number and assign it the return value from running the parseInt function with the argument "2"

## Javascript Fundamentals

```
var name = "John"; //Declare a variable called name and assign it a string John.
```

```
console.log( typeof name ); // The console method log() outputs the return value of the typeof opereator and the operand variable name to the web console.
```

```
var nums = [1,2,3,4,5];  // create a variable nums and assign it an array with the values 1, 2, 3, 4, 5
```

```
for( var i=1; i<=100; i++ ) {
  console.log(i * i);
}
// create a for loop that will run 100 times.  each time it will create a console log method that will output the return value of i * i to the web console.
```

## Javascript Objects

```
var john = {
  first: "John",
  last: "Cokos",
  lastName: "Cookoo",
  age: 50
}
// declare a variable called john and assign it the object literal with properties and values.
```

```
console.log(john.first);
// The Console method log() outputs the value of the 'first' property to the web console.

```

```
var keyword = "last";
// create a variable called keyword and assign it a string literal "last"
```

```
console.log(john[keyword]); 
// console log method that outputs the property value from the "john" object, where the property name is the value held in the variable "keyword"
```


## Functions

```
function sayHi(name) {
  console.log('Hi', name);
}
// create a function called sayHi that when invoked, will output the string "hi" and the value that was passed in as a parameter called "name"
```

```
sayHi('Lyndsey');
// invokes the function sayHi and pass in the argument string "Lyndsey".
```




## Constructors

```
function Person(name) {
  this.fullName = name;
}
//create a constructor called 'Person' that takes in a parameter called 'name'.  The constructor will create an object literal with a property "fullname" and assign it the value "name", which was the parameter that was passed in.
```

```
Person.prototype.sayMyName = function() {
  console.log( this.fullName.toUpperCase() );
}
// Create a prototype function called "sayMyName" using the Person constructor, that will use the console log method to output the return value of the toUpperCase method on the fullName property value.
```

```
var john = new Person('John Cokos');
// create a variable called john and assign it a new object that is created by calling the Person constructor and passing it an argument 'john cokos'.
```

```
john.sayMyName();

```

## Javascript for Fun and Profit

```
console.log( greet('John') );

function greet(name) { 
  return sayHelloTo(name, 'Hi');
}

function sayHelloTo(person,greeting) {
  return awkwardGreeting(greeting, person);
}

function awkwardGreeting(words,name) {
  return `${name}, uh ... ${words}?`
}
```

```
"These are some words".split(' ')[3].toUpperCase().charAt(0)
```

```
"Hello world".charAt(Math.sqrt(16));
```

```
({ type: "a", href: "http://swapi.co", text: "Star Wars API" })["type href text".split(" ")[Math.max(2, 0)]].length
```
