const express = require('express')
const { registerFun } = require('../controllers/registerController')
const { registerValidator } = require('../validators/validator')
const registerRoute = express.Router()


registerRoute.post('/register', registerValidator, registerFun)

module.exports = {registerRoute}