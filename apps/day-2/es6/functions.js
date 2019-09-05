// ES5
// function sum(a, b) {
//   return a + b;
// }

// ES5 Function expression
// const sum = function (a, b) {
//   return a + b;
// };

// ES6 - Arrow function Syntax 1
// const sum = (a, b) => {
//   return a + b;
// };

// ES6 - Arrow function Syntax 2
const sum = (a, b) => a + b;

// ES6 - Arrow function Syntax 3
const double = n => n * 2;

const greet = () => 'hi';

const greet2 = _ => 'hi from greet2()';

console.log(sum(10, 20));
console.log(double(7));
console.log(greet());
console.log(greet2());
