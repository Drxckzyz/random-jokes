const { get } = require('./utils')
const { dadjoke, punchlines, chuckNorris, v2jokeapi } = require('./json/endpoints.json')
/**
 * @name getDadjoke
 * @description Gets a Dad Joke
 * @returns {Promise<string>}
 */
async function getDadjoke() {
    const jokeobj = await get(dadjoke)

    return jokeobj.joke
}

/**
 * @name getPunchLine
 * @description Gets a Punch line with its setup
 * @returns {Promise<object>}
 */
async function getPunchLine() {
    const pobj = await get(punchlines)

    return {
        setup: pobj.setup,
        punchline: pobj.punchline,
    }
}

/**
 * @name getCHNJoke
 * @description Gets a Random Chuck Norris Joke 
 * @returns {Promise<string>}
 */
async function getRandomCHNJoke() {
    const chnjoke = await get(chuckNorris.random)

    return chnjoke.value
}

/**
 * @name getCategoryCHNJoke
 * @description Gets a Chuck Norris Joke by the specified Category
 * @param {string} [category]
 * @returns {Promise<string>}
 */
async function getCategoryCHNJoke(category = "dev") {
    validateOptions('chnjoke', category)

    const chn = await get(chuckNorris.category.replace('{category}', category))

    return chn.value
}

/**
 * @name matchChuckJoke
 * @description Gets a Chuck Norris Joke by a search match
 * @param {string} [serach]
 * @returns {Promise<Array<object>> | null}
 */
async function matchChuckJoke(serach = null) {
    validateOptions('match', serach)

    const mchn = await get(chuckNorris.query.replace('{string}', serach))

    if (mchn.total === 0) return []

    const a = []

    for (const e of mchn.result) {
        a.push({
            joke: e.value,
        })
    }

    return a
}

/**
 * @name matchJoke
 * @description Gets a Joke by a search match
 * @param {string} [serach]
 * @returns {Promise<object> | null}
 */
async function matchJoke(search = null) {
    validateOptions('match', search)

    const data = await get(v2jokeapi.jokeMatch.replace("{string}", search))

    if (data.error && data.message === 'No matching joke found') return null
    else return {
        safe: data.safe,
        setup: data.setup,
        delivery: data.delivery,
    }
}

/**
 * @name getRandomJoke
 * @description Gets a random joke that is not flagged with an option in the blacklist param
 * @param {Array<string> | string} [blacklist]
 * @returns {Promise<string>}
 */
async function getRandomJoke(blacklist = []) {
    if (Array.isArray(blacklist) && !blacklist.length) {
        const j = await get(v2jokeapi.any)

        return {
            safe: j.safe,
            joke: j.joke,
        }
    } else {
        validateOptions('joke', blacklist)

        let toreplace

        if (Array.isArray(blacklist)) {
            toreplace = blacklist.join(", ")
        } else {
            toreplace = blacklist
        }

        const j = await get(v2jokeapi.blacklists.replace('{arraylist}', toreplace))

        return {
            safe: j.safe,
            joke: j.joke,
        }
    }
}

function validateOptions(type, option) {
    if (type === 'chnjoke') {
        if (!chuckNorris.Categories.includes(option)) throw new TypeError(`An Invalid option was provided for Category of Chuck Norris Joke\nOptions are: ${chuckNorris.Categories.join(", ")}`)
    } else if (type === 'match') {
        if (option == null) throw new Error('Please provide a query for the match')
        else if (typeof option != 'string') throw new TypeError("Query for match must be a string")
    } else if (type === 'joke') {
        if (typeof option === 'string') {
            if (!v2jokeapi.blacklistsOptions.includes(option)) throw new TypeError(`An Invalid option was provided for the joke blacklist\nOptions are: ${v2jokeapi.blacklistsOptions.join(", ")}`)
        } else if (Array.isArray(option)) {
            for (const a of option) {
                if (!v2jokeapi.blacklistsOptions.includes(a)) throw new TypeError(`An Invalid option was provided for the joke blacklist\nOptions are: ${v2jokeapi.blacklistsOptions.join(", ")}`)
            }
        } else throw new Error("An Invalid param was provided for the vote blacklist, it must either be an Array or String.")
    }
}

module.exports = {
    getDadjoke,
    getPunchLine,
    getRandomCHNJoke,
    getCategoryCHNJoke,
    matchChuckJoke,
    matchJoke,
    getRandomJoke,
}