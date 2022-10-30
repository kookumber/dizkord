const mongoose = require('mongoose')
const Schema = mongoose.Schema

// This is a basic model to create a new user that we can post to the database
const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    username: { type: String },
    password: { type: String },
    friends: [{ type: Schema.Types.Object, ref: 'User' }]
})

module.exports = mongoose.model("User", userSchema)