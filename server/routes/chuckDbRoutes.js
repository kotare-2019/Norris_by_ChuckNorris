const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/favourites', (req, res) => {
  db.getFavourites()
    .then(favourites => {
      res.send(favourites) //res.send or res.JSON ??
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router