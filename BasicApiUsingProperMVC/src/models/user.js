const { mongoose } = require("../../src/config/db");

let userSchema = new mongoose.Schema({ 
    name:{
        required:true,
        type:String
    },
    last_name:String,
    email:{
        required:true,
        type:String,
        email:true
    },
    phone_no:Number,
    password:String,
    role:String
},{
    timestamps : true,
    // toJSON : {virtuals:true},
    // toObject : {virtuals:true}
});
// let userSchema = { 
//     name:{
//         required:true,
//         type:String
//     },
//     last_name:String,
//     email:{
//         required:true,
//         type:String,
//         email:true
//     },
//     phone_no:Number,
//     password:String,
//     role:String
// }
const User =  mongoose.model('User',userSchema);

exports.User = User