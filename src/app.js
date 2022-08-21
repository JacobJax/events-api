const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const eventsRouter = require('./routes/events')
const app = express()


// add router middleware
app.use('/events', eventsRouter)

// connect to db
mongoose.connect(process.env.DB_URI)

app.listen(8081)

// export app for testing
module.exports = app