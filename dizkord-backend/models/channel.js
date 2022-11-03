const mongoose = require('mongoose')
const Schema = mongoose.Schema

const channelSchema = new Schema({
    channelName: {
        type: String
    },
    description: {
        type: String
    },
    channelServer: {
        type: Schema.Types.ObjectId,
        ref: 'Server'
    },
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Message'
        }
    ]
})

module.exports = mongoose.model('Channel', channelSchema)