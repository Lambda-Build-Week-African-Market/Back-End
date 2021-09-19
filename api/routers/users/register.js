const express = require('express')
const router = express.Router()

const {insert} = require('../../models/users/loginAndRegister')

// router.get('/', async (req, res, next) => {

//     try {
//         const users = await find({email: 'test3@email.com'})
//         res.status(200).json(users)
//     } catch (err) {
//         res.status(200).json({message: '/api/register online'})
//     }

// })

router.post('/', async (req, res, next) => {

    try {
        const user = await insert(req.body)
        res.status(201).json(user)
    } catch(err) {
        res.status(500).json({message: "user could not be added at this time"})
    }

})

module.exports = router