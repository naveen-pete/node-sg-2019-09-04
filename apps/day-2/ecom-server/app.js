const express = require('express');
const morgan = require('morgan');

const log = require('./middleware/log');
const homeRoute = require('./routes/home');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');

const app = express();

app.use(log);
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', homeRoute);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`eCom Server started and listening on ${port}`));
