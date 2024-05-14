const express = require('express')
const app = express();
const env = require('dotenv')
require('./db.js')
const multer  = require('multer')
const {uuid} = require('uuidv4')
const cloudinary = require('cloudinary');
const fs = require('fs');

env.config();

// Cloudinary Code//

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

let port = process.env.PORT;

app.listen(port,() => {
    console.log("ok",port);
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload-file')
    },
    filename: function (req, file, cb) {
        // console.log(req.file);
        let img = uuid()+'-'+file.originalname;
        cb(null,  img)
    }
});


const upload = multer({ storage: storage });


app.post('/api/upload_file', upload.single('profile'), (req, res) => {

    /* Now send file to cloudinary server */
    cloudinary.uploader.upload(req.file.path, function(error, result) {
        console.log(error,result); 
        /* Now delete file from local server */
        fs.unlink(req.file.path, (err => {
            if (err) console.log(err);
            else {
                console.log("\nDeleted file:",req.file.path);
            }
        }));

        res.status(200).json({
            msg:"File uploaded successfully"
        })
    });

})

