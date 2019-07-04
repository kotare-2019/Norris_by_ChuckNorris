const path = require('path')
const express = require('express')

const chuckRoutes = require('./chuckRoutes')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/getNorrisQuote', chuckRoutes)

module.exports = server
