
exports.up = function (knex, Promise) {
  return knex.schema.createTable('favourites', table => {
    table.increments('id').primary()
    table.string('quote', 1000)
    table.string('norris_id')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('favourites')
};
