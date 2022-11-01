const mongoose = require('mongoose')

const Schema = mongoose.Schema


const conversationSchema = new Schema({
    // Participants will keep track of all the users in a specific conversation,
    // regardless of whether they're sender or receiver of messages
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    // Using ref for User and Message, we can connect the specific messages in a conversation
    // based on the participants
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Message'
        }
    ]
})

module.exports = mongoose.model('Conversation', conversationSchema)