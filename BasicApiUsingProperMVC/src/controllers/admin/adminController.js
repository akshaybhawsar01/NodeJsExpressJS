const { Company } = require("../../models/adminModel");
const { validationResult } = require("express-validator");

let adminFun = (req,res, next) => {

    /* Check validation */
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
              success: false,
              errors: errors.array(),
            });
        }
        const company = new Company({name:req.query.name,last_name:req.query.last_name,phone_no:req.query.phone_no});

        let promise =  company.save();

        promise.then(() => {
            // console.log("Data store successfully");
            res.status(200).json({
                msg:"Data store successfully"
            })
        }).catch(e => {
            res.status(400).json({
                msg:"error",
                data:error
            })
        });
    } catch (err) {
        next(err);
    }
}

exports.adminFun = adminFun