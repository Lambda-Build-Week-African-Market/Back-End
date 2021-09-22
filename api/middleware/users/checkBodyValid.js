
const bcryptjs = require('bcryptjs')

const checkBodyValid = (req, res, next) => {

    const {username, password, email} = req.body

    const isUnValid = username && username.length > 0 && username.length < 25

    if (!isUnValid) {
        username = 'User'
    }

    const isPwValid = password && password.length > 0 && password.length < 25

    const isEmailValid = email && email.length > 0

    const isValid = isUnValid && isPwValid && isEmailValid

    const hashRounds = process.env.BCRYPT_ROUNDS

    if (isValid) {
        password = bcryptjs.hashSync(password, hashRounds)
        next()
    } else {
        res.status(401).json({message: 'Body is invalid'})
    }

}

module.exports = checkBodyValid