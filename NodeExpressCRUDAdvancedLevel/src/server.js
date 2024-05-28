const express = require('express')
const app = express()
const env = require('dotenv')
const { studentRoute } = require('./routes/studentRoute')
const { registerRoute } = require('./routes/registerRoute')
const { loginRoute } = require('./routes/loginRoute')
const { teacherRoute } = require('./routes/teacherRoute')

env.config()
app.use(express.json())
app.use(studentRoute)
app.use(registerRoute)
app.use(loginRoute)
app.use(teacherRoute)
let port = process.env.PORT


app.listen(port,(req,res) => {
    console.log("port is running on",port)
})