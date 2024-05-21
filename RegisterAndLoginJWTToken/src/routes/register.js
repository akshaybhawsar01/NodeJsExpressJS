const express = require('express');
const { registerFun } = require('../controllers/register');

const registrationRoute = express.Router()

registrationRoute.post('/api/registration',registerFun)

exports.registrationRoute = registrationRoute