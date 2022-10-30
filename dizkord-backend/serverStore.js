const connectedUsers = new Map();

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

module.exports = {
    addNewConnectedUser,
    removeConnectedUser
}