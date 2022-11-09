const Channel = require('../models/channel')
const chatUpdates = require('./updates/chat')


// Function below will be called from the socketServer whenever the client side
// emits an event of 'channel-chat-history'
const channelChatHistoryHandler = async (socket, data) => {
    try {
        const { channelId } = data

        const channel = await Channel.findById(channelId)

        chatUpdates.updateChannelChatHistory(channel._id.toString(), socket.id)

    } catch (err) {
        console.log(err)
    }
}

module.exports = channelChatHistoryHandler