const jwt = require('jsonwebtoken')

const config = process.env

// This will be our middleware to verify auth token for user so they can access protected routes
const verifyToken = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['authorization'];

    if (!token) {
        return res.status(403).send('A token is required for authentication')
    }

    try {
        // This removes the Bearer keyword for the token
        token = token.replace(/^Bearer\s+/, "")
        // This decodes the web token response
        const decoded = jwt.verify(token, config.TOKEN_KEY)
        req.user = decoded;
    } catch(err) {
        return res.status(401).send('Invalid Token')
    }
    // If try works, just execute next step
    return next()
}

module.exports = verifyToken