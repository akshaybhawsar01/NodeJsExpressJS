const {mongoose} = require('../config/db')

let teacherSchema = new mongoose.Schema({
    
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
     phone:{
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
    }
 },{
     timestamps:true
 })

 const Teacher = mongoose.model('Teacher',teacherSchema)

 exports.teacherSchema = teacherSchema
 exports.mongoose = mongoose
 exports.Teacher = Teacher