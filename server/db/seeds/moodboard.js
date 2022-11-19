exports.seed = function (knex) {
  return knex('moodboard')
    .del()
    .then(function () {
      return knex('moodboard').insert([
        {
          id: 1,
          description: 'cat',
          img: './uploads/ac36d0c6d08b851c696de372568bd8d0.jpeg',
          category: 'cat',
        },
      ])
    })
}
