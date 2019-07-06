const express = require('express')

const db = require('../db')

const router = express.Router()

//Favourites Routes
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
  db.insertFavouriteQuote(newFav)
    .then(favourite => { res.send(favourite) })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

//Blacklist Routes
router.get('/blacklist', (req, res) => {
  db.getBlacklist()
    .then(blacklist => {
      res.send(blacklist)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/insertBlacklist', (req, res) => {
  const newBlacklist = {
    id: req.body.id,
    value: req.body.value
  }
  db.insertBlackListQuote(newBlacklist)
    .then(newid => { res.send(newid) })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router