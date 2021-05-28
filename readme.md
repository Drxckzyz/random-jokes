# About

Random Jokes is a package that allows you to get different type of jokes

## Types of Jokes:

- Normal Jokes
- Dad Jokes
- Jokes with Punchlines
- Chuck Norris Jokes

Also has some extras like facts and trump quotes

## Setup:

You simply just import what you you want

```js
    const {
    getDadjoke,
    getPunchLine,
    getRandomCHNJoke,
    getCategoryCHNJoke,
    matchChuckJoke,
    matchJoke,
    getRandomJoke
    getRandomTrumpQuote,
    getFact
} = require('random-jokes')
```

## Usage:

Below is an Example of using async with a few of the Jokes

```js
const { getDadjoke, getPunchLine, getRandomJoke } = require("random-jokes")(
  async () => {
    //return as a string
    const dadJoke = await getDadjoke();

    console.log(dadJoke);

    // return an object, with the setup and delivery
    const punchline = await getPunchLine();

    console.log(punchline);

    // if a joke is considered to be in one of these categories it will not return it
    const blacklist = [
      "nsfw",
      "religious",
      "political",
      "racist",
      "sexist",
      "explicit",
    ];

    //returns an object with the joke and a property 'safe' to show whether the joke is safe or not
    //param takes either a string or array
    const joke = await getRandomJoke(blacklist | "nsfw");

    console.log(joke);
  }
)();
```

Below are non-async example

```js
const {
  getRandomCHNJoke,
  getCategoryCHNJoke,
  matchChuckJoke,
  matchJoke,
} = require("random-jokes");

matchChuckJoke().then((jokes) => {
  console.log(jokes);
});

matchJoke().then((joke) => {
  console.log(joke, joke.setup, joke.delivery, joke.safe);
});

/**
 * @description List of valid categories
 * "Categories": [
      "animal",
      "career",
      "celebrity",
      "dev",
      "explicit",
      "fashion",
      "food",
      "history",
      "money",
      "movie",
      "music",
      "political",
      "religion",
      "science",
      "sport",
      "travel"
    ]
*/

getCategoryCHNJoke("dev").then((joke) => {
  console.log(joke);
});

getRandomCHNJoke().then((joke) => {
  console.log(joke);
});
```

## Extras:

Here are some extra things:

- Trump Quote
- Facts

```js
const { getRandomTrumpQuote, getFact } = require("random-jokes");

getRandomTrumpQuote().then((TrumpQuote) => {
  console.log(TrumpQuote, TrumpQuote.quote, TrumpQuote.target);
});

getFact().then((joke) => {
  console.log(joke);
});
```

Like this package, be sure to give the github repo a star!

### Found a bug?

Create a new [issue!](https://github.com/Drxckzyz/random-jokes/issues)
