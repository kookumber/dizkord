const serverStore = require('../serverStore')
const friendsUpdate = require('../socketHandlers/updates/friends')
const serversUpdate = require('../socketHandlers/updates/servers')
const chatRoomsUpdates = require('../socketHandlers/updates/chatrooms')

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

    // Update list of servers user is a part of
    serversUpdate.updateUsersServers(userDetails.userId)

    // Here we'll set a timeout to wait 1 second before emitting the list
    // of active chatrooms to the user when they connect
    setTimeout(() => {
        chatRoomsUpdates.updateChatrooms(socket.id)
    }, [1000])


}

module.exports = newConnectionHandler