const registerRouter = require('./users/register')
const loginRouter = require('./users/login')
const newItemRouter = require('./items/newItem')
const searchItemRouter = require('./items/searchItems')

module.exports = {
    registerRouter,
    loginRouter,
    newItemRouter,
    searchItemRouter
}