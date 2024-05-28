const express = require('express')
const { teacherFun } = require('../controllers/teacherController');
const { teacherMiddlewear, authMiddlewear } = require('../middlewears/auth');
const teacherRoute = express.Router()

teacherRoute.post('/teacher',authMiddlewear, teacherMiddlewear, teacherFun)

exports.teacherRoute = teacherRoute;