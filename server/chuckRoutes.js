const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

//GET SINGLE QUOTE FROM WEBSITE
router.get('/', (req, res) => {
  request
    .get(`https://api.chucknorris.io/jokes/random`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body)
      }
    })
})

// router.get('/getFavQuotes', (req, res) => {
//   request
//     .get(`https://api.chucknorris.io/jokes/random`)
//     .end((err, result) => {
//       if (err) {
//         res.status(500).send(err.message)
//       } else {
//         res.json(result.body)
//       }
//     })
// })

module.exports = router