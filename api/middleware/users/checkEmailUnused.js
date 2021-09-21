
const {find} = require('../../models/users/loginAndRegister')

const checkEmailUnused = (req, res, next) => {

    const {email} = req.body

    const findEmail = find({email: email})

    if (!findEmail) {
        next()
    } else {
        res.status(401).json({message: 'Email is already in use'})
    }

}

module.exports = checkEmailUnused