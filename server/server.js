const express = require('express')
const path = require('path')
const moodboard = require('./routes/moodboard')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/moodboard', moodboard)

server.get('*', (req, res) => {
  res.sendFile(path.join('public', 'index.html'))
})
module.exports = server
