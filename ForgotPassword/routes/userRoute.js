const express = require('express')
const app = express()
const { forgotPassword } = require('../controllers/userController')
const { resetPassword } = require('../controllers/userController')
const userRoute = express.Router()

app.use(forgotPassword);
app.use(resetPassword);
userRoute.post('/user/forgot-password', forgotPassword)
userRoute.get('/user/reset-password', resetPassword)

exports.userRoute = userRoute;