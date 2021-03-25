module.exports={

       
    name: 'avatar',
    description: "This is the avatar command",
    execute(message, args,){
        const Discord = require ('discord.js');
     // Import the discord.js-avatgar package.
const avatarEmbed = require('discord.js-avatar');
 

avatarEmbed(message, language = 'english');

}}