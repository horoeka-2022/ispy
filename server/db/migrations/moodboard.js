exports.up = (knex) => {
  return knex.schema.createTable('moodboard', (table) => {
    table.increments('id')
    table.string('description')
    table.string('img')
    table.string('category')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('moodboard')
}
