const express = require('express')
const { funOrder } = require('../../controllers/test/testController')
const app = express()
const testRoute =  express.Router()

app.use(funOrder)
testRoute.get('/test/orders', funOrder)



module.exports = {testRoute}