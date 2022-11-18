const serverStore = require('../../serverStore')

const updateChatrooms = (toSpecifiedTargetId = null) => {
    const io = serverStore.getSocketServerInstance()
    const activeRooms = serverStore.getActiveRooms()

    if (toSpecifiedTargetId) {
        io.to(toSpecifiedTargetId).emit('active-rooms', {
            activeRooms
        })
    } else {
        io.emit('active-rooms', {activeRooms})
    }
}



module.exports = {
    updateChatrooms
}