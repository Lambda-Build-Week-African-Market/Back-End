
const bcryptjs = require('bcryptjs')

const checkPasswordsMatch = (req, res, next) => {

    const {password} = req.body
    const {user} = req

    console.log('req.body')
    console.log(req.body)
    console.log('user')
    console.log(user)
    console.log('password')
    console.log(password)

    if (user && bcryptjs.compareSync(password, user.password)) {
        next()
    } else {
        res.status(401).json({message: 'Body invalid'})
    }

}

module.exports = checkPasswordsMatch