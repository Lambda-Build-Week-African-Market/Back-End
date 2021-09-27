
const express = require('express')
const { insert } = require('../../models/users/loginAndRegister')
const router = express.Router()

router.post('/', async (req, res) => {

    try {
        const item = await insert(req.body)
        res.status(201).json(item)
    } catch(err) {
        res.status(500).json({message: 'Item could not be added at this time'})
    }

})

module.exports = router