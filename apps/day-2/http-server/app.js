const http = require('http');

const users = [
  { id: 1, name: 'Ram', isAdmin: true },
  { id: 2, name: 'Krish', isAdmin: false }
];

const products = [
  { id: 1, name: 'iPhone X', price: 65000 },
  { id: 2, name: 'Samsung Galaxy Note 10', price: 75000 },
  { id: 3, name: 'Google Pixel 3', price: 55000 }
];

console.log('begin');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Welcome to eCom API</h1>');
    res.end();
  }

  if (req.url === '/api/products') {
    if (req.method === 'GET') {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(products));
    }

    if (req.method === 'POST') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<h2>Products POST</h2>');
      // res.end('Endpoint url:' + req.url + ', method:' + req.method);
      res.end(`Endpoint url: ${req.url}, method: ${req.method}`);
    }
  }

  if (req.url === '/api/users') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(users));
    res.end();
  }
});

const port = process.env.PORT || 3000;
server.listen(
  port,
  // () => console.log('Server started and listening on port ' + port)
  () => console.log(`Server started and listening on port ${port}`)
);

console.log('end');