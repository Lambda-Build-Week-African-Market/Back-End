const express = require('express')
const router = express.Router()

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

// NEED MIDDLEWARE TO FINISH
// router.post('/', (req, res, next) => {

//     res.status(200).json({message: "/api/login online"})

// })

module.exports = router