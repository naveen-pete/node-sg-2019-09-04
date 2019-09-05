const Product = require('./product');

const p = new Product();

p.on('created', function (e) {
  console.log('Product created successfully.');
  console.log('  Event Args:', e);
});

p.on('deleted', function (e) {
  console.log('Product deleted successfully.');
  console.log('  Event Args:', e);
});

p.create({ id: 1, name: 'Samsung Galaxy Note 10' });
p.create({ id: 2, name: 'iPhone X' });
p.delete(1);

