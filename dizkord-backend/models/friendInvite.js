const mongoose = require('mongoose')
const Schema = mongoose.Schema

const friendInviteSchema = new mongoose.Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model("FriendInvite", friendInviteSchema)