const _ = require('lodash');

const numbers = [10, 20, 30];

const mappedNumbers = _.map(numbers, (n) => {
  return n * 10;
});

console.log("numbers:", numbers);
console.log("mappedNumbers:", mappedNumbers);