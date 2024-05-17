const { User } = require("../models/user");

let registerFun  = (req,res) => {
    // console.log(req.body)
    const user = new User({
        name:req.body.name,
        last_name:req.body.last_name,
        phone_no:req.body.phone_no,
        password:req.body.password,
        role:req.body.role
    }
);

    let promise =  user.save();

    promise.then(() => {

        res.status(200).json({
            msg:"Data store successfully"
        })
    }).catch(e => {
        res.status(400).json({
            msg:"error",
        })
    });
}

exports.registerFun = registerFun