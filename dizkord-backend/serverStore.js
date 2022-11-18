const { v4: uuidv4 } = require('uuid')

const connectedUsers = new Map();
let activeRooms = []

// We get io here so we can use easily across our store
let io = null

const setSocketServerInstance = (ioInstance) => {
    io = ioInstance
}

const getSocketServerInstance = () => {
    return io
}

const addNewConnectedUser = ({ socketId, userId }) => {
    connectedUsers.set(socketId, { userId })
    // console.log('new connected users')
    // console.log(connectedUsers)
};

const removeConnectedUser = (socketId) => {
    if (connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId)
        console.log('a user has disconnected')
        // console.log(connectedUsers)
    }
}

const getActiveConnections = (userId) => {
    const activeConnections = []

    connectedUsers.forEach((val, key) => {
        if (val.userId === userId) {
            activeConnections.push(key)
        }
    })

    return activeConnections
}

const getOnlineUsers = () => {
    const onlineUsers = []

    connectedUsers.forEach((val, key) => {
        onlineUsers.push({ socketId: key, userId: val.userId })
    })
    return onlineUsers
}

// ------------- Functions for chat room ---------------//

// This will get called in our roomCreateHandler file once the socketServer recieves a room-create event
const addNewActiveRoom = (userId, socketId) => {
    const newActiveRoom = {
        roomCreator: {
            userId,
            socketId
        },
        participants: [
            {
                userId,
                socketId
            }
        ],
        // uuidv4 is from a npm package we install to allow creating random id
        roomId: uuidv4()
    }
    // Using spread operator for active rooms instead of push
    activeRooms = ([...activeRooms, newActiveRoom])
    console.log(activeRooms)
    return newActiveRoom
}

const getActiveRooms = () => {
    return [...activeRooms]
}

const getActiveRoom = (roomId) => {
    const activeRoom = activeRooms.find((room) => room.roomId === roomId)

    // Do the spread operator so we return just a copy of the activeRoom
    return {
        ...activeRoom,
    }
} 

const joinActiveRoom = (roomId, newParticipant) => {
    // Find the room in array of activeRooms and filter to get a copy
    const room = activeRooms.find((room) => room.roomId === roomId)
    // We'll then filter out the room the that we're joining so we can modify with 
    // the new participant
    activeRooms = activeRooms.filter((room) => room.roomId !== roomId)
    // Here we add the new participant to list of participants
    const updatedRoom = {
        ...room,
        participants: [...room.participants, newParticipant]
    }
    // Push the updated room details back to activeRooms array
    activeRooms.push(updatedRoom)
}

module.exports = {
    addNewConnectedUser,
    removeConnectedUser,
    getActiveConnections,
    getOnlineUsers,
    getSocketServerInstance,
    setSocketServerInstance,
    addNewActiveRoom,
    getActiveRooms,
    getActiveRoom,
    joinActiveRoom
}