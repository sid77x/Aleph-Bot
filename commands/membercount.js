module.exports={

       
    name: 'membercount',
    description: "This is the membercount command",
    execute(message, args,){
        
        const Discord = require ('discord.js');
        const embed= new Discord.MessageEmbed()
        .setTitle(`${message.guild}'s Member Count`)
        .setDescription(`${message.guild.memberCount}`)
        .setColor(`#0000aa`)
        message.channel.send(embed)
    }
}