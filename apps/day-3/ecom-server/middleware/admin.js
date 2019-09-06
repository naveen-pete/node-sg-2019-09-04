module.exports = (req, res, next) => {
  console.log('admin req.user:', req.user);
  if (!req.user.isAdmin) {
    return res.status(403).send({ message: 'You do not have sufficient rights to perform this operation.' });
  }

  next();
};