const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

require('dotenv').config();


let port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

async function main() {
    return await mongoose.connect(`mongodb://localhost:27017/`);
}
 
let A = main();

A.then((data) => {
    console.log("Connected");

    app.post('/api/save_employee',(req,res) => {
        // console.log(req.body);
        const Employee =  mongoose.model('Employee',{name:String,last_name:String,phone_no:Number});

        const employee = new Employee({name:req.body.first_name,last_name:req.body.last_name,phone_no:req.body.phone_no});


        let promise =  employee.save();

        res.status(200).json({
            msg:"Ok success"
        })
    })
}).catch((error) => {
    res.status(400).json({
        msg:error.array()
    })
});