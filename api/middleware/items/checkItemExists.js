
const {find} = require('../../models/items/item')

const checkItemExists = (req, res, next) => {

    const {name} = req.body

    const findItem = find({name: name})

    if (name) {
        req.id = findItem.item_id
        next()
    } else {
        res.status(401).json({message: 'Item does not exist'})
    }

}

module.exports = checkItemExists