
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('favourites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favourites').insert([
        { norris_id: '3', quote: 'HIC* -Tess Meyer' }
      ]);
    });
};
