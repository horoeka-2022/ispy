const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

module.exports = {
  getMoodboard,
  addMoodboard,
  getImg,
  addImg,
}

function getMoodboard(db = connection) {
  return db('moodboard').select()
}

function addMoodboard(myPost, db = connection) {
  const { description } = myPost
  return db('moodboard').insert({ description })
}

function getImg(db = connection) {
  return db('moodboard').select()
}

function addImg(inputImg, db = connection) {
  return db('moodboard').insert(inputImg)
}
