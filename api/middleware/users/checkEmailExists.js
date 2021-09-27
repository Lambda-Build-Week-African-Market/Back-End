
const {find} = require('../../models/users/loginAndRegister')

const checkEmailExists = async (req, res, next) => {

    const {email} = req.body

    const findEmail = await find({email: email})

    if (findEmail) {
        req.user = findEmail
        next()
    } else {
        res.status(401).json({message: 'Email not found'})
    }

}

module.exports = checkEmailExists
