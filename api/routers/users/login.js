const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')

const SECRET = require('../../../config/jwtConfig')

const tokenMaker = user => {

    const payload = {
        subject: user.user_id,
        username: user.username,
        email: user.email
    }

    const options = {
        expiresIn: "12h"
    }

    return jwt.sign(payload, SECRET, options)

}

router.post('/', (req, res, next) => {

    const {user} = req

    const token = tokenMaker(user)

    res.status(200).json({message: `${user.username} logged in, your token is:`,
    token})

})

module.exports = router