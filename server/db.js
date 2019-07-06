const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

//Favourites List
function getFavourites(db = database) {
  return db('favourites').select()
}

function insertFavouriteQuote(quote, db = database) {
  return db('favourites').insert({
    quote: quote.value,
    norris_id: quote.id
  })
}

//Blacklist
function getBlacklist(db = database) {
  return db('blacklist').select()
}

function insertBlackListQuote(quote, db = database) {
  return db('blacklist').insert({
    quote: quote.value,
    norris_id: quote.id
  })
}


module.exports = {
  getFavourites,
  insertFavouriteQuote,
  getBlacklist,
  insertBlackListQuote
}