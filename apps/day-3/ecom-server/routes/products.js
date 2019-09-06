const express = require('express');
const controller = require('../controllers/product');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const router = express.Router();

// Get products
router.get('/', controller.get);
// Create product
router.post('/', controller.create);
// Get a single product
router.get('/:id', controller.getOne);
// Update an existing product
router.put('/:id', controller.update);
// Delete a product
router.delete('/:id', [auth, admin], controller.remove);

module.exports = router;
