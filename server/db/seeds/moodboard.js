exports.seed = function (knex) {
  return knex('moodboard')
    .del()
    .then(function () {
      return knex('moodboard').insert([
        {
          id: 1,
          img: 'https://c.tadst.com/gfx/600x337/barcelona-morning-sky.jpg?1',
          description: 'sunset pic',
          category: 'sunset',
        },
        {
          id: 2,
          img: 'https://c.tadst.com/gfx/600x337/barcelona-morning-sky.jpg?1',
          description: 'sunset pic',
          category: 'sunset',
        },
        {
          id: 3,
          img: 'https://c.tadst.com/gfx/600x337/barcelona-morning-sky.jpg?1',
          description: 'sunset pic',
          category: 'sunset',
        },
        {
          id: 4,
          img: 'https://c.tadst.com/gfx/600x337/barcelona-morning-sky.jpg?1',
          description: 'sunset pic',
          category: 'sunset',
        },
        {
          id: 5,
          img: 'https://c.tadst.com/gfx/600x337/barcelona-morning-sky.jpg?1',
          description: 'sunset pic',
          category: 'sunset',
        },
        {
          id: 6,
          img: 'https://c.tadst.com/gfx/600x337/barcelona-morning-sky.jpg?1',
          description: 'sunset pic',
          category: 'sunset',
        },
        {
          id: 7,
          img: 'https://c.tadst.com/gfx/600x337/barcelona-morning-sky.jpg?1',
          description: 'sunset pic',
          category: 'sunset',
        },
        {
          id: 8,
          img: 'https://c.tadst.com/gfx/600x337/barcelona-morning-sky.jpg?1',
          description: 'sunset pic',
          category: 'sunset',
        },
      ])
    })
}
