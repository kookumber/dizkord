const express = require('express')
const router = express.Router()
const Joi = require('joi') // joi is one of the best backages for validating data for javascript
const validator = require('express-joi-validation').createValidator({})
const auth = require('../middleware/auth')
const friendInviteControllers = require('../controllers/friendInvite/friendInviteControllers')

const postFriendInviteSchema = Joi.object({
    targetEmailAddress: Joi.string().email(),
});

router.post("/invite", 
            auth, 
            validator.body(postFriendInviteSchema),
            friendInviteControllers.controllers.postInvite
            )

module.exports = router