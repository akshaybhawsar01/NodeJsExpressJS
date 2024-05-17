const express = require('express');
const { registerFun } = require('../controllers/registerController');

const registerRoute = express.Router()

registerRoute.post('/api/register',registerFun)

exports.registerRoute = registerRoute;