
// IMPORT DB
const server = require('./server')

const request = require('supertest')
const { expectCt } = require('helmet')

describe("Test Server Integration", () => {

    describe("Test endpoints respond", () => {

        it('localhost responds', async () => {
            let res = await request(server).get('/')
            expect(res.status).toBeTruthy()
        })

        it('Register endpoint responds', async () => {
            let res = await request(server).get('/api/register')
            expect(res.status).toBeTruthy()
        })

        it('Login endpoint responds', async () => {
            let res = await request(server).get('/api/login')
            expect(res.status).toBeTruthy()
        })

        it('Item endpoint responds', async () => {
            let res = await request(server).get('/api/item')
            expect(res.status).toBeTruthy()
        })

    })

})