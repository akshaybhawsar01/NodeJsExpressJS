const express = require('express');
const { teacherFun } = require('../controllers/teacher');

const { authMiddlewear, teacherMiddlewear } = require('../middlewears/auth');

const teacherRoute = express.Router()

teacherRoute.post('/teacher/create',authMiddlewear,teacherMiddlewear,teacherFun)

exports.teacherRoute = teacherRoute