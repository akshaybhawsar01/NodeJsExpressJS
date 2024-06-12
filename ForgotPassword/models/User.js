const {mongoose} = require('../config/db')

let userSchema = new mongoose.Schema({
    
    first_name:{
         type:String,
         required:true,
         min:4,
         max:15
     },
     last_name:{
         type:String,
         required:true
     },
     email:{
         type:String,
         required:true
     },
     password:{
         type:String,
         required:true
     },
     role:{
         type:String,
         enum:['Admin','Student','Teacher'],
         default:'Student'
     },
     token:{
        type:String,
        required:true
    },
 },{
     timestamps:true
 })
 console.log("userSchema");
 const User = mongoose.model('User',userSchema)

 exports.userSchema = userSchema
 exports.mongoose = mongoose
 exports.User = User