const mongoose = require('mongoose')

// This is a basic model to create a new user that we can post to the database
const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    username: { type: String },
    password: { type: String },
})

module.exports = mongoose.model("User", userSchema)