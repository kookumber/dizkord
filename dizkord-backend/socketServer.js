const authSocket = require('./middleware/authSocket')
const newConnectionHandler = require('./socketHandlers/newConnectionHandler')
const disconnectHandler = require('./socketHandlers/disconnectHandler')
const serverStore = require('./serverStore')
const directMessageHandler = require('./socketHandlers/directMessageHandler')
const directChatHistoryHandler = require('./socketHandlers/directChatHistoryHandler')
const channelMessageHandler = require('./socketHandlers/channelMessageHandler')
const channelChatHistoryHandler = require('./socketHandlers/channelChatHistoryHandler')
const roomCreateHandler = require('./socketHandlers/roomCreateHandler')
const roomJoinHandler = require('./socketHandlers/roomJoinHandler')

// serverJS file will use the below function
const registerSocketServer = (server) => {
    const io = require("socket.io")(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });

    // We use this so we can set io instance in our serverStore to use easily
    serverStore.setSocketServerInstance(io)

    io.use((socket, next) => {
        authSocket(socket, next)
    })

    const emitOnlineUsers = () => {
        const onlineUsers = serverStore.getOnlineUsers()
        io.emit('online-users', { onlineUsers })
    }

    // On connection, the socket will have all details of connected user
    io.on('connection', (socket) => {
        // console.log('User connected')
        // console.log(socket.id)
        
        // New connection handler
        newConnectionHandler(socket, io)
        // Run function once upon successful connection to get list of online users
        emitOnlineUsers()

        // This listens to events from the client side, specifically anytime the sendDirectMessage
        // function in the socketConnection file is called, which emits the message data via direct-message 
        socket.on('direct-message', (data) => {
            directMessageHandler(socket, data)
        })

        socket.on('direct-chat-history', (data) => {
            directChatHistoryHandler(socket, data)
        })

        // This will listen to events for messages from the channel when messages are submitted
        socket.on('channel-chat-message', (data) => {
            channelMessageHandler(socket, data)
        })

        // This will update the chat history of the channel when event submitted from client
        socket.on('channel-chat-history', (data) => {
            channelChatHistoryHandler(socket, data)
        })

        // roomCreateHandler will emit event with new room
        socket.on('room-create', () => {
            roomCreateHandler(socket)
        })

        socket.on('room-join', (data) => {
            roomJoinHandler(socket, data)
        })

        socket.on('disconnect', () => {
            disconnectHandler(socket)
        })

    })

    // After the socket connection is up, we'll send the list of all online users to everyone connected to socket server
    // Doing this via interval, the site will update online users every 8 seconds
    setInterval(() => {
        emitOnlineUsers()
    }, [8000])
    
}

module.exports = { registerSocketServer }