module.exports = (req, res, next) => {
  console.log(`log() - url: ${req.url}, method: ${req.method}`);
  next();
};
