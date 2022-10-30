const User = require('../../models/user')
const Invite = require('../../models/friendInvite')

const postInvite = async (req, res) => {
    // This is the email address of the user we're inviting to be a friend
    const { targetEmailAddress } = req.body;

    // This is our user id and our email
    const { userId, email } = req.user

    // Here we check to make sure we're not sending an invite to ourselves
    if (email.toLowerCase() === targetEmailAddress.toLowerCase()){
        return res.status(409).send('You cannot add yourself as a friend')
    }

    // Here we search our database to find the email of friend we're inviting
    const targetUser = await User.findOne({
        email: targetEmailAddress.toLowerCase()
    })
    // If email not found, send error message
    if (!targetUser) {
        return res.status(404).send('Unfortunately, no user with that email was found.')
    }

    // Now check if invitation has already been sent and send error if so
    const inviteAlreadyReceived = await Invite.findOne({
        senderId: userId,
        receiverId: targetUser._id
    })

    if (inviteAlreadyReceived) {
        return res.status(409).send(`Already a pending invite for ${targetEmailAddress}`)
    }

    // Now check if the user we're inviting is already our friend
    const usersAlreadyFriends = targetUser.friends.find(friendId => friendId.toString() === userId.toString())

    if (usersAlreadyFriends) {
        return res.status(409).send('User is already your friend.')
    }

    // Create new invite in database. Create is mongoose built in function
    const newInvite = await Invite.create({
        senderId: userId,
        receiverId: targetUser._id
    })

    // If invite successfully created, we will update friends pending invites database


    return res.status(201).send('Friend invite has been sent!')
}

module.exports = postInvite