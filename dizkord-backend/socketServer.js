const authSocket = require('./middleware/authSocket')
const newConnectionHandler = require('./socketHandlers/newConnectionHandler')
const disconnectHandler = require('./socketHandlers/disconnectHandler')

// serverJS file will use the below function
const registerSocketServer = (server) => {
    const io = require("socket.io")(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });

    io.use((socket, next) => {
        authSocket(socket, next)
    })

    // On connection, the socket will have all details of connected user
    io.on('connection', (socket) => {
        console.log('User connected')
        console.log(socket.id)
        
        // New connection handler
        newConnectionHandler(socket, io)

        socket.on('disconnect', () => {
            disconnectHandler(socket)
        })
    })
}

module.exports = { registerSocketServer }