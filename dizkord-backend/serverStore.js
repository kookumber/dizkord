const connectedUsers = new Map();

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
    console.log('new connected users')
    console.log(connectedUsers)
};

const removeConnectedUser = (socketId) => {
    if (connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId)
        console.log('a user has disconnected')
        console.log(connectedUsers)
    }
}

const getOnlineUsers = (userId) => {
    const onlineUsers = []

    connectedUsers.forEach((val, key) => {
        if (val.userId === userId) {
            onlineUsers.push(key)
        }
    })

    return onlineUsers
}

module.exports = {
    addNewConnectedUser,
    removeConnectedUser,
    getOnlineUsers,
    getSocketServerInstance,
    setSocketServerInstance
}