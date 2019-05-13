const seed = require('seed-random')
const nouns = require('readable-id/nouns')

function generateAccount(accountName) {
    const random = seed(accountName)
    return {
        name: accountName,
        usage: Math.round(random() * 100),
        allocation: Math.round(random() * 100) + 100
    }
}

function generateAccountsByUsername(username, count = 2) {
    const random = seed(username)
    const accounts = []
    for (let i = 0; i < count; i++) {
        const accountName = nouns[Math.floor(random() * nouns.length)]
        accounts.push(generateAccount(accountName))
    }
    return accounts
}

module.exports = { generateAccount, generateAccountsByUsername }