# About

Get dad joke is a simple package that returns dad jokes from [icanha's dad joke api](https://icanhazdadjoke.com/api)

## Instalation
```js
npm install get-dadjoke
```

### Example

```js
const { Client } = require('discord.js');
const client = new Client();

const { getdadjoke } = require('get-dadjoke');


client.on('ready', () => {
    console.log(`${client.user.tag} has logged in!`)
})

client.on('message', async (msg) => {
    if(msg.content === 'joke') {
    
       const joke = await getdadjoke()
       
        msg.channel.send(joke);
    }
})

client.login('toek goes here');
```

The function is asynchronous because we need to wait for the api to return a joke, so not using async/await will end up in an empty message!

### Found a bug

Create a new [issue!](https://github.com/Drxckzyz/get-dadjoke/issues)
