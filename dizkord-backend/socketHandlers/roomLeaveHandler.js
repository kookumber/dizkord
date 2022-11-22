const serverStore = require('../serverStore')
const chatRoomUpdates = require('./updates/chatrooms')

const roomLeaveHandler = (socket, data) => {
    const { roomId } = data
    // Get the current room user is in through getActiveRoom function
    // Which will search array of active video chat room objects by the roomId
    const activeRoom = serverStore.getActiveRoom(roomId)

    if (activeRoom) {
        serverStore.leaveActiveRoom(roomId, socket.id)
        chatRoomUpdates.updateChatrooms()
    }
}

module.exports = roomLeaveHandler