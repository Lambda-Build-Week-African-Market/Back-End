
const db = require('../../../data/dbconfig')

const find = (filter) => {

    if (!filter) {
        return db('users')
    } else {
        return db('users').where(filter).first()
    }

}

const insert = async (user) => {

    const [user_id] = await db('users').insert(user)
    return find({user_id})

}

module.exports = {
    find, insert
}