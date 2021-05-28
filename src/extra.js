const { get } = require('./utils')
const { trump, fact: facturl } = require('./json/endpoints.json')

/**
 * @name getRandomTrumpQuote
 * @description Returns an object with a quote from trump and who it is targeted at
 * @returns {Promise<object>}
 */
async function getRandomTrumpQuote() {
    const t = await get(trump)

    return {
        quote: t.value,
        target: t.tags.length > 0 ? t.tags[0] : "Unknown"
    }
}

/**
 * @name getFact
 * @description Returns a random fact
 * @returns {Promise<string>}
 */
async function getFact() {
    const fact = await get(facturl)

    return fact.text
}

module.exports = {
    getRandomTrumpQuote,
    getFact,
}