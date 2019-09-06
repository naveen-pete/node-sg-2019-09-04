const express = require('express');
const controller = require('../controllers/user');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, controller.get);
router.post('/', controller.create);
router.get('/:id', controller.getOne);

module.exports = router;
