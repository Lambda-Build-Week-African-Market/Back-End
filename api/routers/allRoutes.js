const registerRouter = require('./users/register')
const loginRouter = require('./users/login')
const newItemRouter = require('./items/newItem')
const searchItemRouter = require('./items/searchItems')
const updateItemRouter = require('./items/updateItem')
const deleteItemRouter = require('./items/deleteItem')

module.exports = {
    registerRouter,
    loginRouter,
    newItemRouter,
    searchItemRouter,
    updateItemRouter,
    deleteItemRouter
}