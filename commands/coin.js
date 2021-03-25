module.exports = {
    name: 'coin',
    execute(message, args) {
        const Discord = require ('discord.js');
        let number = Math.floor(Math.random() * 2);
        if (number == 1) {
            message.channel.send('Heads :coin:')
        }
        if (number == 0) {
            message.channel.send('Tails :coin:')
        }
    }
};