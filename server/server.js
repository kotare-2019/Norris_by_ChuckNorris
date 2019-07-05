const path = require('path')
const express = require('express')

const chuckRoutes = require('./routes/chuckExtRoutes')
const chuckDbRoutes = require('./routes/chuckDbRoutes')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({ extended: true }))

server.use('/getNorrisQuote', chuckRoutes)
server.use('/chuckDbRoutes', chuckDbRoutes)

module.exports = server
