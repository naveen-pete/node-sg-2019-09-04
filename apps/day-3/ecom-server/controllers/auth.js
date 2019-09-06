const brcypt = require('bcrypt');
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

    res.send({ message: 'Login successful' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { login };