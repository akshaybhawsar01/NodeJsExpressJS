let teacherFun  = (req,res) => {
    res.json({
        msg:"ok",
        email:req.email,
        role:req.role
    })
}

exports.teacherFun = teacherFun