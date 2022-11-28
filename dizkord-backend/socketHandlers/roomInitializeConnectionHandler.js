const roomInitializeConnectionHandler = (socket, data) => {
    // get socket id of user to know who we need to send data they need to initialize connection
    const { connUserSocketId } = data
    const initializeData = { connUserSocketId: socket.id }
    socket.to(connUserSocketId).emit("conn-init", initializeData)
}

module.exports = roomInitializeConnectionHandler