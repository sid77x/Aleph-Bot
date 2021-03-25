module.exports={

       
    name: 'server',
    description: "This is the serverinfo command",
    execute(message, args,){
        const Discord = require ('discord.js');
        const serverEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.guild}'s information`)
            .setThumbnail(message.guild.iconURL())
            .addField("Owner", `The owner of this server is <@!${message.guild.ownerID}>`)
            .addField("Member Count", `This server has **${message.guild.memberCount} members**`)
            .addField("Emoji Count", `This server has **${message.guild.emojis.cache.size} emojis**`)
            .addField("Roles Count", `This server has **${message.guild.roles.cache.size} roles**`)
            .setFooter(`Asked by ${message.author.tag}`,message.author.displayAvatarURL())
            
        if (message.author.bot) {
            serverEmbed.setColor('#FF0000');
        }  message.channel.send(serverEmbed);
    
    
    }}
