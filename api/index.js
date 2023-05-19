import express from 'express'

const apiKey = process.env.MAILCHIMP_API_KEY || 'YOUR_API_KEY'

const app = express()
app.use(express.json())

app.post('/subscribe', async(req, res) => {
  //make our api request to Mailchimp
})

export default {
  path: '/api',
  handler: app
}