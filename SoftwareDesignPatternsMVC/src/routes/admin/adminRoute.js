const express = require('express')
const { adminController } = require('../../controllers/adminController')
const adminRoute = express.Router()


adminRoute.get('/get_student',adminController)

exports.adminRoute = adminRoute