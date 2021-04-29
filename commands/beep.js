// This is an array that we will use in a message type
const replies = [
    'boop! 🤖',
    'E aí, tudo em cima?! 👌',
    'Ao seu serviço, mestre! 🤖',
    'Não, eu não sou uma IA. 😒'
];

//Use this for a message reply in any channel
// if(msg.content === 'beep') {
//     msg.reply('boop! 🤖');
// }

//Use this for a message reply in a specific channel
// if(msg.channel == '837006100061749259' && msg.content === 'beep') {
//     msg.reply('boop! 🤖');
// }
module.exports = function (msg, args) {
    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[index]);
}