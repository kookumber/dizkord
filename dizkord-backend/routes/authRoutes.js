const express = require('express')
const router = express.Router()
const authControllers = require('../controllers/auth/authControllers')
const Joi = require('joi') // joi is one of the best backages for validating data for javascript
const validator = require('express-joi-validation').createValidator({})

// Validation schema to validate data we get
const registerSchema = Joi.object({
    username: Joi.string().min(3).max(15).required(), // This is username validation to make sure its a string of min length 3 and max length 15
    password: Joi.string().min(6).max(15).required(),
    email: Joi.string().email().required(), // This is email validation
})

const loginSchema = Joi.object({
    password: Joi.string().min(6).max(15).required(),
    email: Joi.string().email().required(),
})

router.post('/register', 
    validator.body(registerSchema), 
    authControllers.controllers.postRegister);

router.post('/login', 
    validator.body(loginSchema), 
    authControllers.controllers.postLogin);

module.exports = router;
