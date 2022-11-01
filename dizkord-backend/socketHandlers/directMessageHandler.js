const Message = require('../models/message')
const Conversation = require('../models/conversation')
const chatUpdates = require('./updates/chat')

const directMessageHandler = async (socket, data) => {
    try {
        // UserId is the person sending the message
        const { userId } = socket.user

        // This data is from the client side
        const { receiverUserId, content } = data

        // Create new message in database using the data we received from client
        const message = await Message.create({
            content: content,
            authorId: userId,
            date: new Date(),
            type: "DIRECT"
        })

        // Find if conversation exists with the two users, if not create new
        const conversation = await Conversation.findOne({
            // $all is special mongoose function that will find everything that meets criteria
            participants: { $all: [userId, receiverUserId]}
        })

        if (conversation) {
            // Every time directMessageHandler is called, we start by creating a new message in the DB
            // Once that's done, we can simply push the auto generated _id to the messages array in conversations
            // Because we use ref: Message, the conversation Schema will grab the rest of the data for that message
            conversation.messages.push(message._id)
            await conversation.save()

            // Perform live update to sender and receiver if they're online
            chatUpdates.updateChatHistory(conversation._id.toString())
        } else {
            // Create new conversation if one doesn't exist yet
            const newConversation = await Conversation.create({
                participants: [userId, receiverUserId],
                messages: [message._id]
            })

            // Perform live update to sender and receiver if they're online
            chatUpdates.updateChatHistory(conversation._id.toString())
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = directMessageHandler