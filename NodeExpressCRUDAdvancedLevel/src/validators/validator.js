const { check } = require('express-validator');

let registerValidator = [
    check('first_name','First Name is required').notEmpty(),
    check('last_name','Last Name is required').notEmpty(),
    check('email','Email is required').notEmpty(),
    check('password','Password is required').notEmpty()
];

exports.registerValidator = registerValidator