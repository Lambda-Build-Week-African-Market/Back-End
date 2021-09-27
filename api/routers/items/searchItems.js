
const express = require('express')
const {find} = require('../../models/items/item')
const router = express.Router()

router.post('/', (req, res, next) => {

    const {key, value} = req.body

    let search = ''

    if (key && value) {
        search = find({[key]: value})
    } else {
        search = find()
    }

    res.status(200).json(search)

})

module.exports = router