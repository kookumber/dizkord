const serverStore = require('../serverStore')
const chatRoomUpdates = require('./updates/chatrooms')

const roomJoinHandler = (socket, data) => {
    const { roomId } = data
    const participantDetails = {
        userId: socket.user.userId,
        socketId: socket.id
    }

    const roomDetails = serverStore.getActiveRoom(roomId)

    serverStore.joinActiveRoom(roomId, participantDetails)

    // Send data to users in chatroom that they should prepare for incoming connection (another user joining)
    // Here, we'll loop through list of participants 
    roomDetails.participants.forEach((participant) => {
        // Check to make sure we're not sending data to our self
        if (participant.socketId !== participantDetails.socketId) {
            // to specific socketId of participant, emit the event of prepare-for-connection with the joining user's socket id
            socket.to(participant.socketId).emit('prepare-for-connection', {
                connUserSocketId: participantDetails.socketId
            })
        }
    })

    chatRoomUpdates.updateChatrooms()
}

module.exports = roomJoinHandler