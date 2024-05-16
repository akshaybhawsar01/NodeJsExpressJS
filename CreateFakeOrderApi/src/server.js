const express = require('express')
const app = express()
const env = require('dotenv')

const { testRoute } = require('./route/test/testRoute')

app.use(testRoute)

env.config()

let port = process.env.PORT;


app.listen(port,(req,res) => {
    console.log(`Working on port no ${port}`)
})