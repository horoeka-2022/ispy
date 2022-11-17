const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getImg,
  addImg,
}

function getImg(db = connection) {
  return db('moodboard').select()
}

function addImg(inputImg, db = connection) {
  return db('moodboard').insert(inputImg)
}