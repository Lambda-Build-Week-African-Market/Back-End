
const express = require('express')

const cors = require('cors')
const helmet = require('helmet')

const {registerRouter, loginRouter, itemRouter} = require('./routers/allRoutes')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/register', registerRouter)
server.use('/api/login', loginRouter)
server.use('/api/item', itemRouter)

server.get('/', (req, res, next) => {

    res.status(200).json({message: 'Server responsive'})

})

module.exports = server