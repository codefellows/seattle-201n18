var sithLords = ['Darth Revan', 'Darth Vader', 'Darth Sideous'];
console.log(sithLords);

sithLords.pop();
console.log(sithLords);

sithLords.push('Darth Sion');
console.log(sithLords);

sithLords.shift();
console.log(sithLords);

sithLords.unshift('Darth Caedus');
console.log(sithLords);



function getName(){
  var fname = 'Darth';
  var lname = 'Vader';
  return [fname, lname];
}

var firstName = getName()[0];

console.log(firstName);