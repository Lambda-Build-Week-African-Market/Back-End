
// IMPORT DB
const server = require('./server')

const request = require('supertest')
const db = require('../data/dbconfig')

const testRegisterData = {
    username: 'testUsername',
    password: 'testPass',
    email: 'real@email.com'
}

const testLoginData = {
    password: 'testPass',
    email: 'real@email.com'
}

const testItemData = {
    location: 'testLocation',
    name: 'testName',
    description: 'test description',
    price: 5
}

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

afterAll(async () => {
    await db.destroy()
})

describe("Test Server Integration", () => {

    describe("Test endpoints respond", () => {

        it('localhost responds', async () => {
            let res = await request(server).get('/')
            expect(res.status).toEqual(200)
        })

        it('Register endpoint responds', async () => {
            let res = await request(server).post('/api/register').send(testRegisterData)
            expect(res.status).toEqual(201)
        })

        it('Login endpoint responds', async () => {
            let res = await request(server).post('/api/login').send(testLoginData)
            expect(res.status).toEqual(200)
        })

        it('New item endpoint responds', async () => {
            let res = await request(server).post('/api/item/new').send(testItemData)
            expect(res.status).toEqual(201)
        })

        it('Update item endpoint responds', async () => {
            let res = await request(server).put('/api/item/update').send({...testItemData, price: 7})
            expect(res.status).toEqual(200)
        })

        it('Search item endpoint responds', async () => {
            let res = await request(server).post('/api/item/search')
            expect(res.status).toEqual(200)
        })

        it('Delete item endpoint responds', async () => {
            let res = await request(server).put('/api/item/delete')
            expect(res.status).toEqual(200)
        })

    })

})