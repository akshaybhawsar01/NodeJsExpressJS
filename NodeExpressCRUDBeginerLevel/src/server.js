const express = require('express')
const app = express();
const env = require('dotenv')
env.config()
const mongoose = require('mongoose');

let port = process.env.PORT;
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/')
  .then(d => {
    console.log('Connected!')
}).catch(e => {
    console.log('Not Connected')
});

const studentSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    dob: { type: Date },
    age: { type: Number, min: 18, index: true },
    phone: { type: String }
},{
    timestamps:true
});

const Student = mongoose.model('Student', studentSchema);


app.get('/test',(req,res,next) => {
    res.status(200).json({
        msg:"ok"
    })
})

app.get('/api/student/create',(req,res,next) => {
    if(req.query){

        let studentObj = new Student({
            name:req.query.name,
            email:req.query.email,
            age:req.query.age,
            dob:req.query.dob,
            phone:req.query.phone
        })
        studentObj.save()
        .then(d => {
            res.status(200).json({
                msg:"Student created"
            })
        }).catch(e => {
            res.status(400).json({
                msg:"error"
            })
        })
    }else{
        res.status(400).json({
            msg:"Query parameter are required"
        })  
    }
})

app.get('/api/student/getAll',(req,res,next) => {
    Student.find().then(d => {
        res.status(200).json({
            msg:"ok",
            data:d
        })
    }).catch(e => {
        res.status(400).json({
            msg:e
        })
    })
})

app.delete('/api/student/:studentId',(req,res,next) => {
    if(req.params.studentId !== undefined){
        Student.findByIdAndUpdate({
            _id:req.params.studentId}
        ).then(d => {
                res.status(200).json({
                    msg:"Delete called",
                    data:d
                })
            }).catch(e => {
                res.status(400).json({
                    msg:"error",
                    data:e
                })
            })
    }else{
        res.status(400).json({
            msg:"Student Id required"
        })
    }
})


app.put('/api/student/update',function(req,res,next) {
    // console.log(req.body)
    let id = req.body._id;
    delete req.body._id;

    //Model.findByIdAndUpdate(id, req.body, callback)

    Student.findByIdAndUpdate(id, req.body)
    .then(data => {
        res.status(200).json({
            msg:"Record update successfully"
        })
    })
    .catch(err => {
        res.status(200).json({
            msg:"error",
            error:err
        })
    });
})

app.listen(port,(req,res) => {
    console.log("port is running on",port)
})