// var obj = require('./customers');

var customer = require('./customers').customer;
var greet = require('./customers').greet;

// obj.customer.display();
// obj.greet();

customer.name = 'Ram';
customer.display();
greet();
