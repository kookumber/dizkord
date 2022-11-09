const Conversation = require('../../models/conversation')
const serverStore = require('../../serverStore')
const Channel = require('../../models/channel')
const Server = require('../../models/server')

const updateChatHistory = async (conversationId, toSpecifiedSocketId = null) => {
    const conversation = await Conversation.findById(conversationId).populate({
        path: 'messages',
        model: 'Message',
        populate: {
            path: 'author',
            model: 'User',
            select: 'username _id'
        }
    })
    
    if (conversation) {
        const io = serverStore.getSocketServerInstance()

        if (toSpecifiedSocketId) {
            // Initial update of chat history
            return io.to(toSpecifiedSocketId).emit('direct-chat-history', {
                messages: conversation.messages,
                participants: conversation.participants
            })
        }

        // Check if users of this conversation are online
        // If so, emmit an update of messages to them
        conversation.participants.forEach(userId => {
            const activeConnections = serverStore.getActiveConnections(userId.toString())

            activeConnections.forEach(socketId => {
                io.to(socketId).emit('direct-chat-history', {
                    messages: conversation.messages,
                    participants: conversation.participants
                })
            })
        })
    }
}

const updateChannelChatHistory = async (channelId, toSpecifiedSocketId = null) => {
    const channel = await Channel.findById(channelId).populate({
        path: 'messages',
        model: 'Message',
        populate: {
            path: 'author',
            model: 'User',
            select: 'username _id'
        }
    })

    if (channel) {
        
        const io = serverStore.
        
        getSocketServerInstance()
        
        const channelsServer = await Server.find({
            channels: channelId
        })
        
        if (channelsServer[0]) {
            if (toSpecifiedSocketId) {
                // Initial update of chat history
                return io.to(toSpecifiedSocketId).emit('channel-chat-history', {
                    messages: channel.messages,
                    participants: channelsServer.participants
                })
            }

            // For every participant of the given channel, we'll grab their id then look for active connections
            // that those participants have, then emit to each connection the new messages
            channelsServer[0].participants.forEach((participantId) => {
                const activeConnections = serverStore.getActiveConnections(participantId.toString())

                activeConnections.forEach((socketId) => {
                    io.to(socketId).emit('channel-chat-history', {
                        messages: channel.messages,
                        participants: channelsServer.participants
                    })
                })
            })
        }
    }
}

module.exports = {
    updateChatHistory,
    updateChannelChatHistory
}