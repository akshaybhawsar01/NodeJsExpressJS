const { User } = require("../models/register")
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

let registerFun  = (req,res) => {

    User.findOne({ email: req.body.email }).exec()

    .then(user => {
        if (user === null) {
            
            const saltRounds = 10;
            let password = bcrypt.hashSync(req.body.password, saltRounds)

            const user = new User({
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                email:req.body.email,
                phone:req.body.phone,
                password:password,
                role:req.body.role,
            })

            let promise = user.save()

            promise.then(() =>{

                // var token = jwt.sign(req.body, 'SECRETKEY');

                res.status(200).json({
                    msg:"User register successfully",
                    // token:token
                })
            }).catch(e => {
                res.status(400).json({
                    error:"error"
                })
            })
        }else{
            res.status(404).json({
                msg:"User is already register",
            })
        }
    })
}

exports.registerFun = registerFun