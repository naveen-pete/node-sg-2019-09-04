const fs = require('fs');
const path = require('path');

console.log('begin');

const filepath = path.join(__dirname, 'fs-test.txt');
// console.log('filepath:', filepath);

// sync version
// const result = fs.readFileSync(filepath, 'utf-8');
// console.log('result:', result);

// async version
fs.readFile(filepath, 'utf-8', function (err, result) {
  if (err) {
    console.log('Error:', err);
    return;
  }

  console.log('result:', result);
});

console.log('end');

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));