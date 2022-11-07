const Server = require('../../models/server')
const Channel = require('../../models/channel')
const serversUpdate = require('../../socketHandlers/updates/servers')

const postServer = async (req, res) => {
    
    const { serverName, owner } = req.body
    
    const server = await Server.create({
        serverName: serverName,
        owner: owner,
        channels: []
    })
    
    const generalChannel = await Channel.create({
        channelName: 'general',
        description: '',
        channelServer: server._id,
        messages: []

    })

    server.channels.push(generalChannel._id)
    server.participants.push(owner)
    server.save()
    
    // We'll call this function here to update the store state with servers user is apart of
    serversUpdate.updateUsersServers(owner)

    return res.status(201).send('Server has been created!')
}

module.exports = postServer