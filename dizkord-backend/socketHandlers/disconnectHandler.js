const serverStore = require('../serverStore')
const roomLeaveHandler = require('./roomLeaveHandler')

const disconnectHandler = (socket) => {

    // Upon disconnection, look for active rooms to see if the user might be in one
    const activeRooms = serverStore.getActiveRooms()

    activeRooms.forEach((activeRoom) => {
        // Loop through active chat rooms and check those rooms participants
        // We use the some function to see if any participant has the same socketId as the current user
        // This will return a boolean for true or false
        // console.log('this is active room', activeRoom)
        const userInRoom = activeRoom.participants.some((participant) => {
            return participant.socketId === socket.id
        })
        console.log('user in room true?', userInRoom)
        // If user is in a chat room, we'll run the roomLeaveHandler and pass
        // in the socket and roomId of the room we found the the user in
        if (userInRoom) {
            roomLeaveHandler(socket, { roomId: activeRoom.roomId })
        }
    })

    serverStore.removeConnectedUser(socket.id)
}

module.exports = disconnectHandler