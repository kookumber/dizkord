const Message = require('../models/message')
const Channel = require('../models/channel')
const chatUpdates = require('./updates/chat')


const channelMessageHandler = async (socket, data) => {
    try {
        // Get id of person sending message
        const { userId } = socket.user
        
        // Get data from the client side
        const { channelId, content } = data

        // Create new message in database using the data we received from client
        const message = await Message.create({
            content: content,
            author: userId,
            date: new Date(),
            type: 'GROUP'
        })
        
        // Find channel given by client to save to variable
        const channel = await Channel.findById(channelId)
        
        // Push the new message to the channel messages array then save
        channel.messages.push(message._id)
        await channel.save()

        chatUpdates.updateChannelChatHistory(channel._id.toString())

    } catch (err) {
        console.log(err)
    }
}

module.exports = channelMessageHandler