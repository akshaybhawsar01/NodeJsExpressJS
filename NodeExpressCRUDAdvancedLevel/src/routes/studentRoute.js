const studentFun = require('../controllers/studentController')
const express = require('express')
const { authMiddlewear, studentMiddlewear } = require('../middlewears/auth')
const studentRoute = express.Router()

studentRoute.post('/student',authMiddlewear,studentMiddlewear,studentFun)

// exports.router = router
module.exports = {studentRoute}