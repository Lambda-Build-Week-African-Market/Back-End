
const db = require('../../../data/dbconfig')

const find = (filter) => {

    if (!filter) {
        return db('items')
    } else {
        return db('items').where(filter).first()
    }

}

const insert = async (item) => {

    const [item_id] = await db('items').insert(item)
    return find({item_id})

}

// BUILD LATER
const update = async (item) => {

    return db

}

// BUILD LATER
const remove = async (item) => {

    return db

}

module.exports = {
    find, insert, update, remove
}