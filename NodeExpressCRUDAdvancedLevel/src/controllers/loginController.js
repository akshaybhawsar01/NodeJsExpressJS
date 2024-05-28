const { User } = require("../models/User")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

let loginFun = (req,res) => {

    User.findOne({ email: req.body.email }).exec()

    .then(user => {
        if(user !== null){
            bcrypt.compare(req.body.passwrd, user.passwrd, function(err, result) {
                user.token = jwt.sign({user:user.email,role:user.role},'SECRETKEY',{expiresIn:"1d"})
                const token = user.token
                res.status(200).json({
                    msg:"login success",
                    id: user._id,
                    email: user.email,
                    token: token
                })
            });
        }else{
            res.status(404).json({
                msg:"Invalid"
            })
        }
    })
}

exports.loginFun = loginFun