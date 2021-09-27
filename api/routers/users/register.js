const express = require('express')
const router = express.Router()

// THE PATH TO THIS WILL CHANGE
const {insert} = require('../../models/users/loginAndRegister')

router.post('/', async (req, res, next) => {

    // HASH HANDLED IN MIDDLEWARE

    try {
        const user = await insert(req.body)
        res.status(201).json(user)
    } catch(err) {
        res.status(500).json({message: "User could not be added at this time"})
    }

})

module.exports = router