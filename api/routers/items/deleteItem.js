const express = require('express')
const {remove} = require('../../models/items/item')
const router = express.Router()

router.put('/', async (req, res) => {

    try {
        const removed = await remove(req.id)
        res.status(200).json(removed)
    } catch(err) {
        res.status(500).json({message: 'Item could not be deleted at this time'})
    }

})

module.exports = router