const serverStore = require('../../serverStore')
const Server = require('../../models/server')

// We'll use this function in our server controller for postServer 
// and the new connection handler to update list of servers
const updateUsersServers = async (userId) => {
    try {

        const usersServers = await Server.find({
            participants: userId
        }).populate('channels', '_id channelName description')

        const usersConnections = serverStore.getActiveConnections(userId)
        const io = serverStore.getSocketServerInstance()

        // This will update list of servers the user is apart of
        usersConnections.forEach((userSocketId) => {
            io.to(userSocketId).emit('users-servers', {
                usersServers: usersServers ? usersServers : []
            })
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    updateUsersServers
}