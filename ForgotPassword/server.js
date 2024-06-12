const express = require('express')
const app = express()
const env = require('dotenv')

const { userRoute } = require('./routes/userRoute')

app.use(express.json())
app.use(userRoute)
env.config()

let port = process.env.PORT;


app.listen(port,(req,res) => {
    console.log(`Working on port no ${port}`)
})