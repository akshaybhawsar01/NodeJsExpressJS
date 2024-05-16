
const { mongoose } = require("../../config/db");

const Company =  mongoose.model('Company',{name:String,last_name:String,phone_no:Number});

exports.Company = Company;