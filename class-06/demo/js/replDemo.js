var randomArray = ['Sting', 45, false, [1, 2, 3], {a:1}];
// Person
// height
// dob
// name
// email
//address
// children
// spouse

var roger = [67, 'Feb 8', 'Roger', 'roger@codefellows.com', ['Taylor', 'Coden', 'Ashton', 'Annalise', 'Chloe'], 'Michelle'];

var ray = [69, 'Feb 9', 'Ray', 'ray@codefellows.com', [],''];


var naboo = {
  sand: true,
  populated: true,
  destroyed: false,
  population: 32000000000,
  name: 'Naboo',
  darthVisited: function(){
    // console.log('Darth Vader has visited ' + this.name);
    console.log(`Darth Vader has visited the ${this.populated}    ${this.name} planet many times.`);
  }
};

var alderan = {
  sand: false,
  populated: true,
  destroyed: true,
  population: 0,
  name: 'Alderan'
};

// console.log(naboo.sand, naboo.name);

naboo.monarchy = true;
naboo.neighbor = ['planet1', 'planet2'];
alderan.monarchy = 'false';
alderan.neighbor = [];

delete naboo.sand;
console.log(alderan);
console.log(naboo);
