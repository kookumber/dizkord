const express = require('express')
const router = express.Router()
const Joi = require('joi') // joi is one of the best backages for validating data for javascript
const validator = require('express-joi-validation').createValidator({})
const auth = require('../middleware/auth')
const channelControllers = require('../controllers/channels/channelControllers')

const channelSchema = Joi.object({
    channelName: Joi.string().min(3).max(20).required(),
    description: Joi.string(),
    channelServer: Joi.string().required(),
    user: Joi.string()
})

router.post('/create',
    auth,
    validator.body(channelSchema),
    channelControllers.controllers.postChannel
)

module.exports = router