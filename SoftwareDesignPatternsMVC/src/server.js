const express = require('express')
const app = express()
const env = require('dotenv');
const { adminRoute } = require('./routes/admin/adminRoute');

env.config()
let port = process.env.PORT;

app.use('/admin',adminRoute)

app.listen(port,(req,res) => {
    console.log(port)
})