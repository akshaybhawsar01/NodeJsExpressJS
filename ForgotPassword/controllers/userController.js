const bcrypt = require('bcrypt');
// var jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');
const { User } = require("../models/User")

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'testdemo378@gmail.com',
        pass: 'kgjxttccxqtnajfo' // Note: 'pass' instead of 'password'
    }
});

let forgotPassword = async (req,res) => {

    try {
        const userData = await User.findOne({email:req.body.email})
        if(userData){
            const email = req.body.email;
            const Randomstring =  randomstring.generate();

           const data = await User.updateOne({ email: email }, { $set: { token: Randomstring } });

           try {
            // const { to, subject, text, html } = req.body;
                const responseEmail = await transporter.sendMail({
                    from: 'testdemo378@gmail.com',
                    to:"akshay@mailinator.com",
                    subject:"Test",
                    text:"Testing mail",
                    html:'Please click on this link <a href="http://localhost:5000/user/forgot-password?token='+Randomstring+'">Reset your password</a>'
                });

                res.status(200).send({
                    success:true,
                    msg:'Please check your email'
                })
            } catch (err) {
                res.status(400).json({ err });
            }
        }else{
            res.status(200).send({
                success:true,
                msg:'This email is not exit'
            })
        }
    } catch (error) {
        res.status(400).send({
            success:false,
            msg:error.message
        })
    }
}

let resetPassword =  async (req,res) => {
    try {
        const tokenData = await User.findOne({token:req.query.token})
        if (tokenData) {
            const saltRounds = 10;
            const password = bcrypt.hashSync(req.body.password, saltRounds);
            let data = await User.findByIdAndUpdate({_id:tokenData._id},{ $set: { password: password,token: '' } },{new:true})
            // console.log(req.body.password);
            res.status(200).json({
                    success:true,
                    msg:'Password updated successfully',
                    data:data
                });
        }else{
            res.status(200).json({
                success:false,
                msg:"This link has been expire"
            })
        }
    } catch (error) {
        res.status(400).json({
            success:false,
            msg:error.message
        })
    }
}
exports.forgotPassword = forgotPassword
exports.resetPassword = resetPassword