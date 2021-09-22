const registerRouter = require('./users/register')
const loginRouter = require('./users/login')
const newItemRouter = require('./items/newItem')

module.exports = {
    registerRouter,
    loginRouter,
    newItemRouter
}