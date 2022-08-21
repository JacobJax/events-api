const express = require('express')
const Event = require('../models/Event')
const router = express()

router.get('/', async (req, res) => {
   try {

      // query all events
      const events = await Event.find()
      // return events
      res.status(200).send(events)

   } catch (error) {
      // return error response
      res.status(404).send({ err: "An error occured" })
   }
})

// export router
module.exports = router