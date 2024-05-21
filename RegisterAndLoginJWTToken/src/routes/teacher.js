const express = require('express');
const { teacherFun } = require('../controllers/teacher');

const { authMiddlewear } = require('../middlewears/auth');

const teacherRoute = express.Router()

teacherRoute.post('/teacher/create',authMiddlewear,teacherFun)

exports.teacherRoute = teacherRoute