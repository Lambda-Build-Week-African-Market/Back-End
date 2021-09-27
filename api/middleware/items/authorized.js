
const SECRET = require('../../../config/jwtConfig')

const jwt = require('jsonwebtoken')

const authorized = (req, res, next) => {

    const token = req.headers.authorization

    console.log(token)

    if (!token) {

        res.status(401).json({message: 'You are not authorized to view this resource'})

    } else {

        jwt.verify(token, SECRET, (err, decoded) => {

            if (err) {
                console.log(err)
                res.status(401).json({message: 'Token is invalid'})
            } else {
                next()
            }

        })

    }

}

module.exports = authorized