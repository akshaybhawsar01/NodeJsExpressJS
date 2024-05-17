const { mongoose } = require("../../src/config/db");

let companySchema = { 
    name:String,
    last_name:String,
    phone_no:Number
}
const Company =  mongoose.model('Company',companySchema);

exports.Company = Company