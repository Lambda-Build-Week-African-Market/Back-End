
const express = require('express')

const cors = require('cors')
const helmet = require('helmet')

const {checkUserBodyValid,
    checkEmailUnused,
    checkEmailExists,
    checkPasswordsMatch,
    checkItemBodyValid,
    checkItemNameUnused,
    checkItemExists,
    authorized} = require('./middleware/allMiddleware')

const {registerRouter, loginRouter, newItemRouter, searchItemRouter, updateItemRouter, deleteItemRouter} = require('./routers/allRoutes')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

// WILL NEED UPDATE AND DELETE FOR USERS
server.use('/api/register', checkUserBodyValid, checkEmailUnused, registerRouter)
server.use('/api/login', checkUserBodyValid, checkEmailExists, checkPasswordsMatch, loginRouter)
server.use('/api/item/new', authorized, checkItemBodyValid, checkItemNameUnused, newItemRouter)
server.use('/api/item/search', authorized, searchItemRouter)
// WILL BE UPDATE AND DELETE FOR ITEMS BELOW
server.use('/api/item/update', authorized, checkItemExists, updateItemRouter)
server.use('/api/item/delete', authorized, checkItemExists, deleteItemRouter)

server.get('/', (req, res, next) => {

    res.status(200).json({message: 'Server responsive'})

})

module.exports = server