const express = require('express');

const router = express.Router();

const products = [
  { id: 1, name: 'iPhone X', description: 'From Apple', price: 75000, categories: 'mobiles' },
  { id: 2, name: 'Samsung Galaxy Note 10', description: 'From Samsung', price: 65000, categories: 'mobiles' }
];

// Get products
router.get('/', (req, res) => {
  res.json(products);
});

// Create product
router.post('/', (req, res) => {
  const product = {
    ...req.body,
    id: Date.now()
  };

  // Object.assign(product, req.body);
  // product.id = Date.now();

  // product.name = req.body.name;
  // product.description = req.body.description;
  // product.price = req.body.price;
  // product.category = req.body.category;
  // product.id = Date.now();

  products.push(product);
  res.status(201).send(product);
});

// Get a single product
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).json({ message: 'Product not found!' });
  }

  res.json(product);
});

// Update an existing product
router.put('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).json({ message: 'Product not found!' });
  }

  // product.name = req.body.name;
  // product.description = req.body.description;
  // product.price = req.body.price;
  // product.category = req.body.category;

  // object destructuring
  const { name, description, price, category } = req.body;
  product.name = name;
  product.description = description;
  product.price = price;
  product.category = category

  res.json(product);
});

// Delete a product
router.delete('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));

  if (index < 0) {
    return res.status(404).json({ message: 'Product not found!' });
  }

  products.splice(index, 1);
  res.send({ message: `Product with id ${req.params.id} deleted successfully.` });
});

module.exports = router;
