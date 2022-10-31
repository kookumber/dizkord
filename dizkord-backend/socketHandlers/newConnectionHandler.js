const serverStore = require('../serverStore')
const friendsUpdate = require('../socketHandlers/updates/friends')

const newConnectionHandler = async (socket, io) => {
    const userDetails = socket.user;

    serverStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId
    })

    // Update pending friends invite list
    friendsUpdate.updateFriendsPendingInvite(userDetails.userId)

    // Update friends list
    friendsUpdate.updateFriendsList(userDetails.userId)
}

module.exports = newConnectionHandler