function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function handletext(t){
  t0 = t.split("")
  t1 = ""
  t0.forEach(function(value,index,array){
    switch(getRndInt) {
      case 0:
        t1 = t1 + value.toLowerCase
        break;
      case 1:
        t1 = t1 + value.toUpperCase
      } 
  })
  return t1
}

module.exports = (req, res) => {
  res.status(200).send(handletext(req.query.text));
};

