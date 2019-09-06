const brcypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const User = require('../models/user');

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: 'Wrong email or password' });
    }

    const result = await brcypt.compare(req.body.password, user.password);
    if (!result) {
      return res.status(400).json({ message: 'Wrong email or password' });
    }

    const payload = _.pick(user, ['_id', 'name', 'isAdmin']);
    const token = jwt.sign(payload, 'ecom-private-key');

    res.send({ token, user: payload });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { login };