const { check } = require('express-validator');

let companyValidator = [
    check('name','Name is required').notEmpty(),
    check('last_name','Last Name is required').notEmpty(),
    check('phone_no','Phone no is required').notEmpty()
];

exports.companyValidator = companyValidator;