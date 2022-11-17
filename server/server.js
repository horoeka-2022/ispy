const express = require('express')
const path = require('path')
const moodboard = require('./routes/moodboard')

const cors = require('cors')
const fs = require('fs')
// multer must haves:
const multer = require('multer')
const upload = multer({ dest: './server/public/uploads/' })

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use(cors('*'))
server.use('/api/v1/moodboard', moodboard)

// server.get('/', (req, res) => {
//   res.send('yay!')
// })

// server.get('*', (req, res) => {
//   res.sendFile(path.join('public', 'index.html'))
// })

// //multer logic for uploading images
server.post('/uploadFile', upload.single('avatar'), function (req, res) {
  const fileType = req.file.mimetype.split('/')[1]
  console.log(fileType)
  console.log(req.body)
  // can access the description in form, by accessing req.body.text....
  const newFileName = req.file.filename + '.' + fileType
  fs.rename(
    `./server/public/uploads/${req.file.filename}`,
    `./server/public/uploads/${newFileName}`,
    function () {
      console.log('callback')
    }
  )
  // call db function to add image filename and the img description into the database...
  const imgForDb = {
    img: `./server/public/uploads/${newFileName}`,
    description: 'my fav pic',
    category: 'sunset'

  }
  res.sendStatus(200)
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})
module.exports = server
