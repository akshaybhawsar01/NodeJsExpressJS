const express = require('express')
const app =  express()
const dotenv = require('dotenv');
const { registrationRoute } = require('./routes/register');
const { loginRoute } = require('./routes/login');
const { teacherRoute } = require('./routes/teacher');

dotenv.config();
app.use(express.json())
app.use(registrationRoute)
app.use(loginRoute)
app.use('/api',teacherRoute)

let port = process.env.PORT;

app.listen(port,(req,res) => {
    console.log("Port is run on", port)
})
