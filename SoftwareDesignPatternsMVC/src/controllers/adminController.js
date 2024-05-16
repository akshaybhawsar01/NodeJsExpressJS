const {mongoose} = require("../../src/config/db");
const { Company } = require('../../src/models/admin/adminModel')

let  adminController = (req,res) => {
    
    

    const company = new Company({name:"akshay",last_name:"user",phone_no:"9988776699"});

    let promise =  company.save();

    promise.then(() => {
        // console.log("Data store successfully");
        res.status(200).json({
            msg:"Data store successfully"
        })
    }).catch();
    
}

exports.adminController = adminController