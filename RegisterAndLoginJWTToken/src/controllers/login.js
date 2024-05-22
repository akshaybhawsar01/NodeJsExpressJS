const { User } = require("../models/register")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { validationResult } = require("express-validator");

let loginFun  = (req,res) => {

    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
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
    } catch (err) {
        next(err);
    }
}

exports.loginFun = loginFun