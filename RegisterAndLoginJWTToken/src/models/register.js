const { mongoose } = require("../config/db")

const userSchema = new mongoose.Schema({ 
    first_name: { 
        required: true,
        type: String 
    }, 
    last_name: { 
        type: String, 
        required: true
    }, 
    email: { 
        type: String, 
        required: true,
        email:true
    },
    phone: { 
        type: String, 
        required: true
    },
    role: { 
        type: String,
        enum:['Admin','Teacher','Student'],
        default:'Student',
        required: true
    },
    password: { 
        type: String, 
        required: true
    }
},{
    timestamps:true
})

const User =  mongoose.model('User',userSchema);

exports.User = User