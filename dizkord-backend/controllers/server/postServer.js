const Server = require('../../models/server')
const Channel = require('../../models/channel')

const postServer = async (req, res) => {
    try {
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

    } catch (err) {
        console.log(err)
        return res.status(500).send("Error occured. Please try again")
    }
}

module.exports = postServer