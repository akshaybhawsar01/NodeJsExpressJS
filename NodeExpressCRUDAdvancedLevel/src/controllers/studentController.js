const { userSchema, mongoose } = require("../models/User")

let studentFun = (req,res) => {

    const User = mongoose.model('User',userSchema)

    const user = new User({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role
    })

    user.save()
    .then(d => {
        res.status(200).json({
            msg:"Store Successfully",
            data:req.body
        })
    })
    .catch(e => {
        res.status(400).json({
            msg:"Not Store Successfully",
            error:e
        })
    })    
}

module.exports = studentFun