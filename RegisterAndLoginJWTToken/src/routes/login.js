const express = require('express')
const { loginFun } = require('../controllers/login')
const { loginValidator } = require('../validators/login')

const loginRoute = express.Router()

loginRoute.post('/api/login',loginValidator,loginFun)

exports.loginRoute = loginRoute