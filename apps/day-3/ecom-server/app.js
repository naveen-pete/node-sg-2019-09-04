const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const log = require('./middleware/log');
const homeRoute = require('./routes/home');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');

const app = express();

mongoose.connect(
  'mongodb://localhost:27017/ecom-server',
  { useNewUrlParser: true }
)
  .then(() => {
    console.log('Connected to eCom database successfully!')
  })
  .catch((err) => {
    console.log('Error while connecting to eCom database.');
    console.log('Error:', err);
  });

app.use(log);
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', homeRoute);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`eCom Server started and listening on ${port}`));
