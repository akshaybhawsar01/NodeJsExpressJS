// console.log("Ok")
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

async function main() {
   return await mongoose.connect(`mongodb://localhost:27017/`);
}

    main().then((d) => {
        // Lets create collection
        // Collection Name = Student
        // Object.method();

           const Students =  mongoose.model('Student',{name:String,last_name:String,phone_no:Number});

           const student1 = new Students({name:"akshay",last_name:"user",phone_no:"9988776699"});
           const student2 = new Students({name:"amit",last_name:"test",phone_no:"9988776655"});
           const student3 = new Students({name:"admin",last_name:"shah",phone_no:"9988444655"});

           let promise =  student1.save();
           let promise2 =  student2.save();
           let promise3 =  student3.save();

            promise.then(() => {
                console.log("Data store successfully");
            }).catch();

            console.log("Connected")
        }).catch(err => 
            console.log(err)
    );




let port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log("listen on port " + port)
});