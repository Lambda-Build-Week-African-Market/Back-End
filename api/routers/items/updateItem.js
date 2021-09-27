const express = require('express')
const {update} = require('../../models/items/item')
const router = express.Router()

router.put('/', async (req, res) => {

    try {
        const updated = await update(req.id, req.body)
        res.status(200).json(updated)
    } catch(err) {
        res.status(500).json({message: 'Item could not be updated at this time'})
    }

})

module.exports = router