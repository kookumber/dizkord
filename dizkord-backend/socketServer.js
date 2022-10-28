// serverJS file will use the below function

const registerSocketServer = (server) => {
    const io = require('socket.io')(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    })

    // On connection, the socket will have all details of connected user
    io.on('connection', (socket) => {
        console.log('User connected')
        console.log(socket.id)
    })
}

module.exports = {registerSocketServer}