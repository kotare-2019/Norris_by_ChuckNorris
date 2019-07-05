const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/favourites', (req, res) => {
  db.getFavourites()
    .then(favourites => {
      res.send(favourites)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/insertFavourite', (req, res) => {
  const newFav = {
    id: req.body.id,
    value: req.body.value
  }
  console.log(req.body)
  db.insertFavouriteQuote(newFav)
    .then(favourite => { res.send(favourite) })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router