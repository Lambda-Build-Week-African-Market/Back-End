
const express = require('express')

const cors = require('cors')
const helmet = require('helmet')

const {checkUserBodyValid, checkEmailUnused, checkEmailExists, checkPasswordsMatch} = require('./middleware/allMiddleware')

const {registerRouter, loginRouter, itemRouter} = require('./routers/allRoutes')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/register', checkUserBodyValid, checkEmailUnused, registerRouter)
server.use('/api/login', checkUserBodyValid, checkEmailExists, checkPasswordsMatch, loginRouter)
server.use('/api/item', itemRouter)

server.get('/', (req, res, next) => {

    res.status(200).json({message: 'Server responsive'})

})

module.exports = server