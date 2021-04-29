//This code is for we use async requests with fetch
const fetch = require('node-fetch');

//This code bringing the gif with an specific request: excited. But, in the 
//request comes with random gif of the search. If the member write any word
//before "!gif" the keyword is changed and bring the gif with word in command
module.exports = async function (msg, args) {
    let keywords = 'happiness';

    if(args.length > 0) {
        keywords = args.join(" ");
    }

    //This Token is available in https://tenor.com/gifapi/documentation
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    msg.channel.send('Hoje o server tá como? '+json.results[index].url);
}