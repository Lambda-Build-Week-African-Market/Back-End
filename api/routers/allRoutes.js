const registerRouter = require('./users/register')
const loginRouter = require('./users/login')
const itemRouter = require('./items/item')

module.exports = {
    registerRouter,
    loginRouter,
    itemRouter
}