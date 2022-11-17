exports.up = function (knex) {
  return knex.schema.createTable('moodboard', (table) => {
    table.increments('id').primary()
    // ^ image url or whatev
    table.string('description')
    table.string('category')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('moodboard')
}
