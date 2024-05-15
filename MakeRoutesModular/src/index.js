const express = require('express')
const app = express()

const {router} = require('./router/admin/adminRouter.js')

require('dotenv').config();

let port = process.env.PORT;

app.use('/admin',router)

app.listen(port,() => {
    console.log(`port is running on ${port}`)
});