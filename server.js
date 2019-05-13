const express = require('express')
const app = express()
const port = process.env.PORT || 8080

const api = express.Router()

const dummy = require('./dummy')

api.get('/accounts', (req, res) => {
    const accountName = req.query.accountname
    if (accountName) {
        return res.json([dummy.generateAccount(accountName)])
    }
    const username = req.query.username
    if (username) {
        return res.json(dummy.generateAccountsByUsername(username, 2))
    }
    return res.json([])
})

// Question: How do i get the usage for a user on a specific account?
api.get('/users/:id', (req, res) => {
    const id = req.params.id
    const account = dummy.generateAccountName(id)
    res.json([{
    }])
})

app.use('/api', api)

app.listen(port)