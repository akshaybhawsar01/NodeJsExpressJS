const { User } = require("../models/User")
const bcrypt = require('bcrypt');

let teacherFun = (req,res) => {

    const saltRounds = 10;
    const password = bcrypt.hashSync(req.body.password, saltRounds);

    const teacher = new User({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        phone:req.body.phone,
        password:password,
        role:req.body.role
    })

    teacher.save()
    .then(d => {
        res.status(200).json({
            msg:"Teacher are store Successfully",
            data:req.body
        })
    })
    .catch(e => {
        res.status(400).json({
            msg:"Teacher not store Successfully",
            error:e
        })
    })
}

exports.teacherFun = teacherFun