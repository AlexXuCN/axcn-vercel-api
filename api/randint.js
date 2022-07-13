function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = (req, res) => {
  res.status(200).send(Math.floor(Math.random() * (req.query.max - req.query.min + 1)) + req.query.min);
};

