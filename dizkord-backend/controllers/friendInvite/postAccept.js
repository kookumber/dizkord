const FriendInvite = require('../../models/friendInvite')
const friendsUpdate = require('../../socketHandlers/updates/friends')
const User = require('../../models/user')

const postAccept = async (req, res) => {
    try {
        const { id } = req.body
        
        const invite = await FriendInvite.findById(id)
        if (!invite) {
            return res.status(401).send('Oops! Something went wrong. Please try again.')
        }

        const { senderId, receiverId } = invite

        // Add friends to both users
        const senderUser = await User.findById(senderId);
        senderUser.friends = [...senderUser.friends, receiverId]

        const receiverUser = await User.findById(receiverId)
        receiverUser.friends = [...receiverUser.friends, senderId]

        // Need to make sure we save the updates to the DB for the two users
        await senderUser.save()
        await receiverUser.save()

        // Now delete the invite from the list of pending invites
        await FriendInvite.findByIdAndDelete(id)

        // Update list of friends if the users are online for real-time rendering
        
        // Update pending invites
        friendsUpdate.updateFriendsPendingInvite(receiverId.toString())

        return res.status(200).send('Friend successfully added')
    } catch (err) {
        console.log(err)
        return res.status(500).send('Oops! Something went wrong. Please try again.')
    }
}

module.exports = postAccept