const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const database = require('knex')(config)

function getAllQuotes(db = database) {
  db('favourites').select()
}

function insertFavouriteQuote(quote, db = database) {
  db('favourites').insert({
    quote: quote.value,
    norris_id: quote.id
  })
}


module.exports = {
  getAllQuotes,
  insertFavouriteQuote,
}