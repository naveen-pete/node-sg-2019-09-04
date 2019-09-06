const express = require('express');
const controller = require('../controllers/user');

const router = express.Router();

router.get('/', controller.get);
router.post('/', controller.create);
router.get('/:id', controller.getOne);

module.exports = router;
