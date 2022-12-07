const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const socketServer = require('./socketServer')
const authRoutes = require('./routes/authRoutes')
const friendInviteRoutes = require('./routes/friendInviteRoutes')
const serverRoutes = require('./routes/serverRoutes')
const channelRoutes = require('./routes/channelRoutes')

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

const allowedOrigins = ['http://localhost:3000', 'https://dizkord.onrender.com', 'https://dizkord.onrender.com/conversations/@me']

app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) === -1) {
            return callback(new Error('Access from specified Origin now allowed'), false)
        }
        return callback(null, true)
    }
}));

// Register routes here
app.use('/api/auth', authRoutes)
app.use("/api/friend-invite", friendInviteRoutes)
app.use('/api/server', serverRoutes)
app.use('/api/channels', channelRoutes)

const server = http.createServer(app)

// Here we run the registerSocketServer function we create so socket will be
// added to http server
socketServer.registerSocketServer(server)

// Mongoose is package that lets us work with MongoDB easily
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB successfully")
        server.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`)
        })
    }).catch(err => {
        console.log('Database connection failed. Server not started');
        console.log(err);
    });