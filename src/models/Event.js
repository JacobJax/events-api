const mongoose = require('mongoose')

// create event schema
const eventSchema = mongoose.Schema({
   title: String,
   time: String,
   link: String
})

// export schema as a mongoose  model
module.exports = mongoose.model('Event', eventSchema)