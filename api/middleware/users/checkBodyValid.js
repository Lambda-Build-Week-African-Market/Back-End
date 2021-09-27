
const bcryptjs = require('bcryptjs')

const checkBodyValid = (req, res, next) => {

    let {username = 'user', password, email} = req.body

    const isUnValid = username && username.length > 0 && username.length < 25

    // if (!isUnValid) {
    //     username = 'User'
    // }

    const isPwValid = password && password.length > 0 && password.length < 50

    const isEmailValid = email && email.length > 0

    const isValid = isUnValid && isPwValid && isEmailValid

    const hashRounds = process.env.BCRYPT_ROUNDS || 8

    if (isValid) {
        req.old = password
        password = bcryptjs.hashSync(password, hashRounds)
        req.body.password = password
        next()
    } else {
        res.status(401).json({message: 'Body is invalid'})
    }

}

module.exports = checkBodyValid