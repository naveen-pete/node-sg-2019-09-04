const _ = require('lodash');
const bcrypt = require('bcrypt');

const User = require('../models/user');

const get = async (req, res) => {
  try {
    const users = await User.find()
      .select('-__v');

    res.json(users);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const create = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: 'User already exists!' });
    }

    user = new User({
      ...req.body
    });

    user.password = await bcrypt.hash(user.password, 10);
    // user.createHash();

    await user.save();

    const newUser = _.pick(user, ['_id', 'name', 'email', 'isAdmin']);
    res.status(201).send(newUser);

  } catch (e) {
    console.log('Error when inserting a user.');
    res.status(500).json({ message: e.message });
  }
}

const getOne = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select('-__v');

    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    res.json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  get,
  getOne,
  create
};
