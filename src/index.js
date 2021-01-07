const fetch = require('node-fetch');

const joke = async () => {
    const jokedata = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    
    const jokeObj = await jokedata.json();
    
    if(!jokeObj.status === '200') {
        return new Error(`Timeout out: Status: ${jokeObj.status}`)
    }
    
    return jokeObj.joke
}


module.exports.getdadjoke = joke