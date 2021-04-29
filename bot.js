//Message created for we know bot.js is executing in terminal
console.log('Beep beep! 🤖');

//This code is for we use the token in .env file
require("dotenv").config();

//This code is for we use async requests with fetch
const fetch = require('node-fetch');

//Code created for we use discord.js and execute bot in your discord server
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN); //the code in parentesis is your token.

client.on('ready', readyDiscord);

//Message created for we know bot.js connected in discord server
function readyDiscord() {
    console.log('🤖 ✔️');
}

const commandHandler = require('./commands');

//Function created for starting reply messages
client.on("message", commandHandler);