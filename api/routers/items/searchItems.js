
const express = require('express')
const {find} = require('../../models/items/item')
const router = express.Router()

router.post('/', (req, res, next) => {

    const {key, value} = req.body

    const search = find({[key]: value})

    res.status(200).json(search)

})

module.exports = router