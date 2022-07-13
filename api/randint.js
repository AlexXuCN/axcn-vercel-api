function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

module.exports = (req, res) => {
  res.status(200).send(getRndInt(req.query.min,req.query.max));
};

