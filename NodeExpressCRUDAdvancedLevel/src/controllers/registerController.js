const { User } = require("../models/User")
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

let registerFun = (req,res) => {
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });
    }
    const saltRounds = 10;
    const password = bcrypt.hashSync(req.body.password, saltRounds);

    const user = new User({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:password,
        role:req.body.role
    })

    user.save()
    .then(d => {
        res.status(200).json({
            msg:"User register Successfully",
            data:req.body
        })
    })
    .catch(e => {
        res.status(400).json({
            msg:"User not register Successfully",
            error:e
        })
    })
}

module.exports = {registerFun}