const express = require('express');
const router = express.Router();

const users = [
  { id: 1, name: 'Ram', isAdmin: true },
  { id: 2, name: 'Krish', isAdmin: false }
];

router.get('/', (req, res) => {
  res.send(users);
});

module.exports = router;
