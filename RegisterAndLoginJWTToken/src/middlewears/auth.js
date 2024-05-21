var jwt = require('jsonwebtoken');

let authMiddlewear = (req,res,next) => {
    // console.log(req.headers.authorization.split(" ")[1]);
    try {
        var token = req.headers.authorization.split(" ")[1];
        var decoded = jwt.verify(token,'SECRETKEY');
        // console.log(decoded)
        next()
    }catch(error){
        res.send(403)
    }
}

exports.authMiddlewear = authMiddlewear