/*
module.exports={
    
       
    name: 'embed',
    description: "This is the embed command",
    execute(message, args,){
        const Discord = require ('discord.js');
function sendEmbed(message) {
    let command = message.content;
    let channel = message.channel;
    let author = message.author;

    // get title string coordinates in command
    let titleStart = command.indexOf('[');
    let titleEnd = command.indexOf(']');
    let title = command.substr(titleStart + 1, titleEnd - titleStart - 1);

    // get description string coordinates in command
    // -> (start after +1 so we don't count '[' or ']' twice)
    let descStart = command.indexOf('[', titleStart + 1);
    let descEnd = command.indexOf(']', titleEnd + 1);
    let description = command.substr(descStart + 1, descEnd - descStart - 1);

    // next create rich embed
    const embed = new Discord.MessageEmbed({
        title: title,
        description: description
    });

    // set author based of passed-in message
    embed.setAuthor(author.username, author.displayAvatarURL);

    // send embed to channel
   message.channel.send(embed);
}}}*/