const Channel = require('../../models/channel')
const Server = require('../../models/server')
const serversUpdate = require('../../socketHandlers/updates/servers')

const postChannel = async (req, res) => {
    
    const { channelName, channelServer, user } = req.body
    
    const newChannel = await Channel.create({
        channelName: channelName,
        description: '',
        channelServer: channelServer,
        messages: []
    })

    // Find the server channel belongs to so we push the newly create channel
    // into that server's channel array and save it
    const channelsServer = await Server.findById(channelServer)
    channelsServer.channels.push(newChannel._id)
    channelsServer.save()

    // Run this socket handler here to update the global state of servers
    // to reflect the new channel we created, allowing the react component to rerender
    serversUpdate.updateUsersServers(user)

    return res.status(201).send({newChannel: newChannel, server: channelsServer})
    
}

module.exports = postChannel