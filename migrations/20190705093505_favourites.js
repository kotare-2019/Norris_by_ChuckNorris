
exports.up = function (knex, Promise) {
  return knex.schema.createTable('favourites', table => {
    table.increments('id').primary()
    table.string('quote', 1000)
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('favourites')
};
