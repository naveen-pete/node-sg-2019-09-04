const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');
  console.log('token:', token, typeof token);
  if (!token) {
    return res.status(401).send({ message: 'Not authenticated. Auth token missing.' });
  }

  try {
    const secretKey = 'ecom-private-key';
    const payload = jwt.verify(token, secretKey);
    req.user = payload;
  } catch (e) {
    return res.status(401).send({ message: 'Invalid token.' });
  }

  next();
};