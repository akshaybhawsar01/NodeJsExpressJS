const express = require('express');
const { adminFun } = require('../../controllers/admin/adminController');
const { companyValidator } = require('../../validators/company');
const adminRoute = express.Router()

adminRoute.get('/admin/company', companyValidator ,adminFun)

exports.adminRoute = adminRoute;