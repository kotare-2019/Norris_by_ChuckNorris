
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('blacklist').del()
    .then(function () {
      // Inserts seed entries
      return knex('blacklist').insert([
        { norris_id: 'qyiEeNq7QXWc2ODugw1gFw', quote: 'Chuck Norris can watch videos…nstagram!' }
      ]);
    });
};
