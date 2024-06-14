const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer  = require('multer')

app.use(express.json());

require('dotenv').config();


let port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

async function main() {
    return await mongoose.connect(`mongodb://localhost:27017/`);
}

/* Start : Store only data in Mongoo Db using postman */

// A.then((data) => {
//     console.log("Connected");

//     app.post('/api/save_employee',(req,res) => {
//         // console.log(req.body);
//         const Employee =  mongoose.model('Employee',{name:String,last_name:String,phone_no:Number});

//         const employee = new Employee({name:req.body.first_name,last_name:req.body.last_name,phone_no:req.body.phone_no});


//         let promise =  employee.save();

//         res.status(200).json({
//             msg:"Ok success"
//         })
//     })
// }).catch((error) => {
//     res.status(400).json({
//         msg:error.array()
//     })
// });

/* End : Store only data in Mongoo Db using postman */


/* Start : Upload file and store text with file name */

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './upload-file')
        },
        filename: function (req, file, cb) {
            // console.log(req.file);
            let img = Math.ceil((Math.random() * 100))+'-'+file.originalname;
            cb(null,  img)
        }
    });

    const upload = multer({ storage: storage });

    let A = main();

    const Employee = mongoose.model('Employee', {
        first_name: String,
        last_name: String,
        phone_no: Number,
        profile: String,
        address_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Addresses'
        }
    });
    // console.log(Employee);
    const Addresses = mongoose.model('Addresses', {
        street: String,
        city: String,
        zip: Number,
        state: String
    });

    A.then((data) => {

        app.post('/api/save_file', upload.single('profile'), (req, res) => {
            // console.log(req.body.first_name);
            let img = Math.ceil((Math.random() * 100))+'-'+req.file.originalname;

            const address = new Addresses({
                "street": "123 Main St",
                "city": "Anytown",
                "state": "CA",
                "zip": "12345"
            });
    
            // Save the address and get the inserted ID
            const savedAddress =  address.save().then(savedAddress => {
                const addressId = savedAddress._id;
            
            // Create a new Employee document
                const employee = new Employee({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    phone_no: req.body.phone_no,
                    profile: req.file.filename,
                    address_id: addressId
                });

                let promise =  employee.save();

                res.status(200).json({
                    msg:"File uploaded successfully"
                })
            })
        })
    }).catch((error) => {
        res.status(400).json({
            msg:error.array()
        })
    });

/* End : Upload file and store text with file name */