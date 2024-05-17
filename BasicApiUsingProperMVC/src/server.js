const express = require('express')
const app = express()

const env = require('dotenv')
const { adminRoute } = require('./routes/admin/adminRoute')
const { registerRoute } = require('./routes/register')

app.use(express.json())
env.config()
app.use(adminRoute)
app.use(registerRoute)

let port = process.env.PORT;

app.listen(port,() => {
    console.log(`Working on this ${port}`)
})