// "use strict";

var c = {
  name: 'Hari',
  email: 'hari@abc.com',
  phone: '98860 98860',

  display: function () {
    // console.log('this:', this);
    console.log('Customer details:');
    console.log('  name:', this.name);
  }
};

var name = 'Krish';
this.name = name;
console.log('outside:', this.name);

function greet() {
  // console.log('this:', this);
  console.log('Hello,', this.name);
}


// function expression, anonymous function
(function () {
  console.log('greetTwo() invoked');
  console.log('iife executed');
})();




// module.exports.customer = c;
// module.exports.greet = greet;

module.exports = {
  customer: c,
  greet: greet
  // ,
  // greetTwo: greetTwo
};
