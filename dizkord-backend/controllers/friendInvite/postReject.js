const FriendInvite = require('../../models/friendInvite')
const friendsUpdate = require('../../socketHandlers/updates/friends')

const postReject = async (req, res) => {
    try {
        const { id } = req.body
        const { userId } = req.user

        // Remove invitation from friend invites collection
        const inviteExists = await FriendInvite.exists({ _id: id })
        
        if (inviteExists) {
            await FriendInvite.findByIdAndDelete(id)
        }
        // Update pending invites
        friendsUpdate.updateFriendsPendingInvite(userId)
        return res.status(200).send('Invite succesfully rejected')
        
    } catch (err) {
        console.log(err)
        return res.status(500).send('Something went wrong. Please try again.')
    }
    return res.send('reject handler')
}

module.exports = postReject