const express = require('express')
const { loginFun } = require('../controllers/login')

const loginRoute = express.Router()

loginRoute.post('/api/login',loginFun)

exports.loginRoute = loginRoute