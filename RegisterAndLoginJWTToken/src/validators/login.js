const { check } = require('express-validator');

let loginValidator = [
    check('email','Email is required').notEmpty(),
    check('password','Password is required').notEmpty()
];

exports.loginValidator = loginValidator;