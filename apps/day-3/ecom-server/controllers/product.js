const Product = require('../models/product');

const get = async (req, res) => {
  try {
    const products = await Product.find()
      .select('-__v');

    res.json(products);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const create = (req, res) => {
  // validation
  // Product.create(req.body)
  //   .then(product => {
  //     res.status(201).send(product);
  //   })
  //   .catch(err => {
  //     console.log('Error when inserting a product.');
  //     res.status(500).json({ message: err.message });
  //   });

  const product = new Product({
    ...req.body
  });
  product.save()
    .then(product => {
      res.status(201).send(product);
    })
    .catch(err => {
      console.log('Error when inserting a product.');
      res.status(500).json({ message: err.message });
    });
}

const getOne = async (req, res) => {
  try {
    // const product = await Product.findOne({ _id: req.params.id })
    const product = await Product.findById(req.params.id)
      .select('-__v');

    if (!product) {
      return res.status(404).json({ message: 'Product not found!' });
    }

    res.json(product);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const update = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: 'Product not found!' });
    }

    res.json(product);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const remove = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({ message: 'Product not found!' });
    }

    res.json(product);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = {
  get,
  create,
  getOne,
  update,
  remove
}