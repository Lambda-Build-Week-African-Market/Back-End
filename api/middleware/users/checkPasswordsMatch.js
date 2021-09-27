
const bcryptjs = require('bcryptjs')

const checkPasswordsMatch = (req, res, next) => {

    const {old} = req
    const {user} = req

    if (user && bcryptjs.compareSync(old, user.password)) {
        next()
    } else {
        res.status(401).json({message: 'Body invalid'})
    }

}

module.exports = checkPasswordsMatch