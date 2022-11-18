const serverStore = require('../serverStore')
const chatRoomUpdates = require('./updates/chatrooms')

// This function gets called in the socketServer file whenever the client emits a room-create event
// and we'll pass the socket as the parameter to get details of the user creating the room
const roomCreateHandler = (socket) => {
    console.log('Room Create event')
    // Get the socket and user id from the client's socket connection
    const socketId = socket.id
    const userId = socket.user.userId

    // call the addNewActiveRoom function from serverStore which will create a new chat room and 
    // add that new room to the current active chat rooms
    const roomDetails = serverStore.addNewActiveRoom(userId, socketId)

    // Once room details are created, we'll pass that data to the client side
    // by emitting the 'room-create' event
    socket.emit('room-create', {
        roomDetails
    })
    
    chatRoomUpdates.updateChatrooms()
}

module.exports = roomCreateHandler
