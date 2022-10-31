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
        const receiverList = serverStore.getActiveConnections(userId)

        // Get io server instance
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

const updateFriendsList = async (userId) => {
    try {
        // Get active connections of specific id 
        const userList = serverStore.getActiveConnections(userId)

        // We run the code in this if state to make sure the specific user is online first
        // Reason being that we're trying to get data for the friends of the user and display when they're online
        // If they're not online, there is no point in running the below logic
        if (userList.length > 0) {
            // Get the user by id, and we can specify the specific data we want
            // as to not pull unnecessary data, then populate the friends list through ref
            const user = await User.findById(userId, { _id: 1, friends: 1 }).populate(
                'friends',
                '_id username email'
            )

            
            if (user) {
                const friendsList = user.friends.map((friend) => {
                    return {
                        id: friend._id,
                        email: friend.email,
                        username: friend.username
                    }
                })
            

                // Get io server instance
                const io = serverStore.getSocketServerInstance()

                // Here, for every active connection the user has, we'll send (emit) to the user
                // the friends list array that we created above
                userList.forEach(userSocketId => {
                    io.to(userSocketId).emit('friends-list', {
                        friends: friendsList ? friendsList : []
                    })
                })
            }
        } 
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    updateFriendsPendingInvite,
    updateFriendsList
}