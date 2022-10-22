const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes')

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

// Regiter routes here
app.use('/api/auth', authRoutes)

const server = http.createServer(app)

// Mongoose is package that lets us work with MongoDB easily
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`)
        })
    }).catch(err => {
        console.log('Database connection failed. Server not started');
        console.log(err);
    });