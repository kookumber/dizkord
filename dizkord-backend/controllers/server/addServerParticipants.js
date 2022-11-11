const Server = require('../../models/server')
const serversUpdate = require('../../socketHandlers/updates/servers')
const ObjectId = require('mongoose').Types.ObjectId

const addServerParticipants = async (req, res) => {

    try {
        const { serverSearch, userId } = req.body

        // Since we're allowing a user to join a server by filling out the invite form
        // with a serverName or server id, we'll check if they used the serverId
        let server;
        if (ObjectId.isValid(serverSearch)) {
            server = await Server.findById(serverSearch)
        } else {
            server = await Server.findOne({ serverName: serverSearch })
        }
        
        if (server) {
            server.participants.push(userId)
            server.save()

            await Server.find({
                participants: userId  
            }).populate('participants', '_id username email')

            serversUpdate.updateUsersServers(userId)

        } else {
            console.log("Could not find server")
            return res.status(500).send('Server link or details could not be found')
        }
    } catch (err) {
        console.log(err)
        return res.status(500).send('Something went wrong. Please try again.')
    }
}

module.exports = addServerParticipants