const {find} = require('../../models/items/item')

const checkItemNameUnused = (req, res, next) => {

    const {name} = req.body

    const findName = find({name: name})

    if (!findName) {
        next()
    } else {
        res.status(401).json({message: 'Item name already exists'})
    }

}

module.exports = checkItemNameUnused