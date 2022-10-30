const User = require('../../models/user')
const FriendInvite = require('../../models/friendInvite')
const serverStore = require('../../serverStore')

// We'll use this function in our friendsInviteController for postInvite
const updateFriendsPendingInvite = async (userId) => {
    try {
        // For the user that is getting the invitation, we want to get their pending invites
        // Because we used ref: 'User' in our friendInvite model, we can then use the 
        // populate function to get specific details of the user that sent the invite
        const pendingInvites = await FriendInvite.find({
            receiverId: userId
        }).populate('senderId', '_id username email')
        
        // Now find all active connections of specific user getting invites; We say find all
        // because one user can be connected with multiple devices
        const receiverList = serverStore.getOnlineUsers(userId)

        const io = serverStore.getSocketServerInstance()

        // This will update pending invites 
        receiverList.forEach(receiverSocketId => {
            // Using io.to, we can specifiy which user/socketIds will receive an event they can listen to
            io.to(receiverSocketId).emit('friends-invite', {
                pendingInvites: pendingInvites ? pendingInvites : []
            })
        })

        
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    updateFriendsPendingInvite
}