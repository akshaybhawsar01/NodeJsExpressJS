var jwt = require('jsonwebtoken');

let authMiddlewear = (req,res,next) => {
    try {
        var token = req.headers.authorization.split(" ")[1];
        var decoded = jwt.verify(token,'SECRETKEY');
        // console.log(decoded)
        req.role = decoded.role,
        req.email = decoded.user
        next()
    }catch(error){
        res.send(403)
    }
}

let teacherMiddlewear = (req,res,next) => {
    // console.log(req.role);
    if(req.role === 'Admin'){
        
        next();
    }else{
        res.status(403).json({
            msg:"Unauthorize access"
        })
    }
}

let studentMiddlewear = (req,res,next) => {
    console.log(req.role);
    if(req.role === 'Admin' || req.role === 'Teacher'){

        next();
    }else{
        res.status(403).json({
            msg:"Unauthorize access"
        })
    }
}

module.exports = {teacherMiddlewear,authMiddlewear,studentMiddlewear}