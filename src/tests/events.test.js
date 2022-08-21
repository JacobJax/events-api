const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')

beforeAll(done => {
   done()
})
 
afterAll(done => {
   // Closing the DB connection allows Jest to exit successfully.
   mongoose.connection.close()
   done()
})

// test events route
describe('It returns an events object', () => {
   it('GET: /events -> gets all events', () => {
      return request(app).get('/events')
         .expect('Content-Type', /json/)
         .expect(200)
         .then( response => {
            expect(response.body).toEqual(
               expect.arrayContaining([
                  expect.objectContaining({
                     title: expect.any(String),
                     time: expect.any(String),
                     link: expect.any(String)
                  }),
               ])
            )
         })
   })
})