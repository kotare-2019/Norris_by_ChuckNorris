
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favourites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favourites').insert([
        {norris_id: '1', quote: 'That shit makes my throat hurt -Dans everywhere'},
        {norris_id: '2', quote: 'Sicko -Pano Skylakis'},
        {norris_id: '3', quote: 'HIC* -Tess Meyer'},
        {norris_id: '4', quote: 'I got a flat -Hamish Smith' }
      ]);
    });
};
