const express = require('express')
const router = express.Router()
const Joi = require('joi') // joi is one of the best backages for validating data for javascript
const validator = require('express-joi-validation').createValidator({})
const auth = require('../middleware/auth')
const serverControllers = require('../controllers/server/serverControllers')

const serverSchema = Joi.object({
    serverName: Joi.string().min(3).max(20).required(),
    owner: Joi.string(),
    channels: Joi.array()
})

router.post(
    "/create",
    auth,
    validator.body(serverSchema),
    serverControllers.controllers.postServer
)


module.exports = router