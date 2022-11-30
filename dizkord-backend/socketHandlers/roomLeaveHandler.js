const serverStore = require('../serverStore')
const chatRoomUpdates = require('./updates/chatrooms')

const roomLeaveHandler = (socket, data) => {
    const { roomId } = data
    // Get the current room user is in through getActiveRoom function
    // Which will search array of active video chat room objects by the roomId
    const activeRoom = serverStore.getActiveRoom(roomId)

    if (activeRoom) {
        serverStore.leaveActiveRoom(roomId, socket.id)

        // If the user leaving is not the last user, check to see if the chatroom is still open
        const updatedActiveRoom = serverStore.getActiveRoom(roomId)
        // If so, loop through participants of room and emit event that a user left
        if (updatedActiveRoom) {
            updatedActiveRoom.participants.forEach((participant) => {
                socket.to(participant.socketId).emit('room-participant-left', {
                    connUserSocketId: socket.id
                })
            })
        }

        chatRoomUpdates.updateChatrooms()
    }
}

module.exports = roomLeaveHandler