const User = require("../../models/user")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email.toLowerCase() })

        if (user && (await bcrypt.compare(password, user.password))) {
            // Send new token
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

            return res.status(200).json({
                userDetails: {
                    email: user.email,
                    token: token,
                    username: user.username,
                }
            })
        }
        res.status(400).send("Invalid credentials. Please try again")
    } catch(err) {
        return res.status(500).send("Error occured. Try logging in again")
    }
    
}

module.exports = postLogin