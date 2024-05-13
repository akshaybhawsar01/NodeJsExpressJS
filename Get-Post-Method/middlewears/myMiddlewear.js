let middleFunction = (req, res, next)=>{
    // req.query.name = 'AKshay';
    console.log(req.body);
    next();
  }


  // There are 2 type of export
  //1. Default Export
  //2. Named Export

  module.exports = {middleFunction}