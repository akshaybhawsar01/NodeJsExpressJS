const express = require('express')

const { adminFun } = require('../../controllers/admin/adminController')

const router = express.Router()

router.get('/get-employee',adminFun)


module.exports = {router}