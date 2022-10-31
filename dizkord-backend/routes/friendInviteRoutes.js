const express = require('express')
const router = express.Router()
const Joi = require('joi') // joi is one of the best backages for validating data for javascript
const validator = require('express-joi-validation').createValidator({})
const auth = require('../middleware/auth')
const friendInviteControllers = require('../controllers/friendInvite/friendInviteControllers')

const postFriendInviteSchema = Joi.object({
    targetEmailAddress: Joi.string().email(),
});

const inviteDecisionSchema = Joi.object({
    id: Joi.string().required()
})

router.post("/invite", 
            auth, 
            validator.body(postFriendInviteSchema),
            friendInviteControllers.controllers.postInvite
            )

router.post("/accept",
            auth,
            validator.body(inviteDecisionSchema),
            friendInviteControllers.controllers.postAccept
            )

router.post("/reject",
            auth,
            validator.body(inviteDecisionSchema),
            friendInviteControllers.controllers.postReject
)

module.exports = router