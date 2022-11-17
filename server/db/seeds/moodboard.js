exports.seed = function (knex) {
  return knex('moodboard')
    .del()
    .then(function () {
      return knex('moodboard').insert([
        {
          id: 1,
          description: 'sunset pic',
          category: 'sunset',
        },
        {
          id: 2,
          description: 'sunset pic',
          category: 'sunset',
        },
        {
          id: 3,
          description: 'sunset pic',
          category: 'sunset',
        },
        {
          id: 4,
          description: 'sunset pic',
          category: 'sunset',
        },
        {
          id: 5,
          description: 'sunset pic',
          category: 'sunset',
        },
        {
          id: 6,
          description: 'sunset pic',
          category: 'sunset',
        },
        {
          id: 7,
          description: 'sunset pic',
          category: 'sunset',
        },
        {
          id: 8,
          description: 'sunset pic',
          category: 'sunset',
        },
      ])
    })
}
