const express = require('express')
const { loginFun } = require('../controllers/loginController')
const loginRoute = express.Router()

loginRoute.post('/login', loginFun)

exports.loginRoute = loginRoute;