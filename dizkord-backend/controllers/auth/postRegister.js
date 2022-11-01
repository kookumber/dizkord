const User = require('../../models/user')
const bcrypt = require("bcryptjs") // We have this in our package json
const jwt = require("jsonwebtoken")

const postRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user exists
        const userExists = await User.exists({ email: email.toLowerCase() })
        if (userExists) {
            return res.status(409).send('Email already in use.')
        }

        // Need to encrypt password so we don't see it
        const encryptedPassword = await bcrypt.hash(password, 10)

        // Create user document and save to mongoDB database we created
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword
        })

        //  Create JWT token we send to client so user can access protected routes
        const token = jwt.sign(
            {
                userId: user._id,
                email
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: '24h'
            }
        )

        res.status(200).json({
            userDetails: {
                _id: user._id,
                email: user.email,
                token: token,
                username: user.username,
            }
        })
    } catch(err) {
        return res.status(500).send("Error occured. Please try again.")
    }
    
}

module.exports = postRegister