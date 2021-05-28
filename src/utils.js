const fetch = require('node-fetch')

async function get(endpoint) {
    const res = await fetch(endpoint, {
        headers: {
            'Accept': 'application/json',
            'User-Agent': 'random-jokes (https://github.com/Drxckzyz/random-jokes)'
        }
    })

    const data = await res.json()

    return data
}

module.exports = {
    get,
}