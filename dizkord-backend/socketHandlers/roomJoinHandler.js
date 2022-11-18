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

    chatRoomUpdates.updateChatrooms()
}

module.exports = roomJoinHandler