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
function greet() {
  console.log('Hello,', name);
}

// iife
// (function () {
//   console.log('greetTwo() invoked');
//   console.log('iife executed');
// })();

// module.exports.customer = c;
// module.exports.greet = greet;

module.exports = {
  customer: c,
  greet: greet
};
