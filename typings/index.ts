/// <reference path="index.d.ts" />

import {
    getCategoryCHNJoke,
    getDadjoke,
    getFact,
    getPunchLine,
    getRandomCHNJoke,
    getRandomJoke,
    getRandomTrumpQuote,
    matchChuckJoke,
    matchJoke
} from "random-jokes"

getCategoryCHNJoke().then((joke) => {
    console.log(joke)
})


getDadjoke().then((joke) => {
    console.log(joke)
})

getFact().then((joke) => {
    console.log(joke)
})

getPunchLine().then((punchline) => {
    console.log(punchline, punchline.setup, punchline.punchline)
})

getRandomJoke().then((joke) => {
    console.log(joke, joke.safe, joke.joke)
})

getRandomCHNJoke().then((joke) => {
    console.log(joke)
})

getRandomTrumpQuote().then((TrumpQuote) => {
    console.log(TrumpQuote, TrumpQuote.quote, TrumpQuote.target)
})

matchChuckJoke().then((jokes) => {
    console.log(jokes)
})

matchJoke().then((joke) => {
    console.log(joke, joke.setup, joke.delivery, joke.safe)
})