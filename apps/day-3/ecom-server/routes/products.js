const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();

// Get products
router.get('/', productController.get);

// Create product
router.post('/', productController.create);

// Get a single product
router.get('/:id', productController.getOne);

// Update an existing product
router.put('/:id', productController.update);

// Delete a product
router.delete('/:id', productController.remove);

module.exports = router;
