//This code is for we use async requests with fetch
const fetch = require("node-fetch");

//This code are bringing the js files with commands
const beep = require('./commands/beep');
const gif = require('./commands/gif');
const mood = require('./commands/mood');

const commands = {
    gif, beep, mood
}

module.exports = async function (msg) {
    // //Use this code for debug message contents
    // console.log(msg.content);

    //Use this + array for an aleatory message
    if(msg.channel == '837006100061749259') {

        let tokens = msg.content.split(" ");
        let command = tokens.shift();

        //This code will respond to requests that precede exclamation point "!"
        if(command.charAt(0) === "!"){
            command = command.substring(1);
            commands[command](msg,tokens);
        }
    }
}