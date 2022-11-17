const express = require('express')
const router = express.Router()

const db = require('../db/connection')

module.exports = router

router.get('/', (req, res) => {
  //retrieve images too!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  db.getMoodboard()
    .then((moodboard) => {
      res.json(moodboard)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({
        message: 'there is an error in the server, hope u know how to code eek',
      })
    })
})

router.post('/', (req, res) => {
  const { description, category } = req.body
  //include multer post route!!!!!!!!!!!!!!!!!!!!!!!!!
  db.addMoodboard({ description, category })
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'ah dang the server has an error :(' })
    })
})
