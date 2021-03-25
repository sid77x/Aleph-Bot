module.exports={

       
    name: 'rickroll',
    description: "This is the rickroll command",
    execute(message, args,){
        const Discord = require ('discord.js');
       const member = message.mentions.members.first();
       if(member.user.username===message.author.username)
       {
           message.channel.send("Dang, you really wanna rickroll yourself?")
       }
      
       else{
        const embed=new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${member.user.username} get rickrolled!`)
        .setImage(`https://cdn.discordapp.com/attachments/799997465276973066/800017417979822130/ricky.gif`)
        .setFooter(`Asked by ${message.author.tag}`,message.author.displayAvatarURL())
        message.channel.send(embed);
    }
    }
   
}
     