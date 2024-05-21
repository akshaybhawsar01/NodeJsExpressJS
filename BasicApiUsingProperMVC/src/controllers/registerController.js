const { User } = require("../models/user");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

let registerFun  = (req,res) => {
    // console.log(req.body)
    let saltRounds = 10;
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
    req.body.password = hash;
    User.findOne({ email: req.body.email }).exec()

    .then(user => {
        if (user === null) {
            // User not found
            console.log('User not found');
                const user = new User({
                    name:req.body.name,
                    last_name:req.body.last_name,
                    email:req.body.email,
                    phone_no:req.body.phone_no,
                    password:req.body.password,
                    role:req.body.role
                }
            );
            let promise =  user.save();

            promise.then(() => {
                // Generaet JWT token
                var token = jwt.sign(req.body,"YOURSECRECTKEY");

                res.status(200).json({
                    msg:"User Register successfully",
                    token:token
                })
            }).catch(e => {
                res.status(400).json({
                    msg:"error",
                })
            });
        }else{
            res.status(404).json({
                msg:"User is already register",
            })
        }

    });

    
}

exports.registerFun = registerFun