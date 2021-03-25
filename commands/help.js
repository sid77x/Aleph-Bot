module.exports={

       
    name: 'help',
    description: "This is the help command",
    execute(message, args,){
        const Discord = require ('discord.js');
        if((args[0]) === 'general')
        {
            const serverEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle(`Aleph's Help`)
        .setThumbnail(`https://images-ext-1.discordapp.net/external/mX4VYawMgMbA72fIeBxTHdzu9Ai5AdslEVmapECEkoA/https/cdn.discordapp.com/icons/530711950456389642/9f82ef02a86ff9092c9404c7669985d9.webp`)
        .addField("General Commands", `\`ping\`- checks the latency of the bot\n \`avatar\` - Shows the avatar of the mentioned user\n \`botinfo\` - shows information about the bot \n \`serverinfo\` - shows information about the server \n \`membercount \` - shows the number of members in the server \n \`invite\` - Displays the invite link for the bot \n   `)
        .setFooter(`Asked by ${message.author.tag}`,message.author.displayAvatarURL())
        message.channel.send(serverEmbed)
    }

            else if((args[0]) === 'moderation')
            {
                const serverEmbed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle(`Aleph's Help`)
            .setThumbnail(`https://images-ext-1.discordapp.net/external/mX4VYawMgMbA72fIeBxTHdzu9Ai5AdslEVmapECEkoA/https/cdn.discordapp.com/icons/530711950456389642/9f82ef02a86ff9092c9404c7669985d9.webp`)
            .addField("Moderation Commands", `\`kick\`- used to kick a member \n \`ban\`- used to ban a user \n\`unban\` - used to unban the mentioned user\n \`purge\`- used to delete a certain number of messages \n\`nick\`- used to change your own nickname\n \`changenick\` - Used to change the nickname of the mentioned user\n \`mute\` - Used to mute the mentioned user \n\`unmute\` - Used to unmute the mentioned user`)
            .setFooter(`Asked by ${message.author.tag}`,message.author.displayAvatarURL())
            message.channel.send(serverEmbed)
        }
        else if((args[0]) === 'fun')
        {
            const serverEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle(`Aleph's Help`)
        .setThumbnail(`https://images-ext-1.discordapp.net/external/mX4VYawMgMbA72fIeBxTHdzu9Ai5AdslEVmapECEkoA/https/cdn.discordapp.com/icons/530711950456389642/9f82ef02a86ff9092c9404c7669985d9.webp`)
        .addField("Fun Commands", `\`insult\` - randomly insults the mentioned user \n \`dankmeme\` - displays a dank meme\n \`rickroll\` - used to rickroll the mentioned user\n \`coin\` - flips a coin\n \`rps\` - play rock paper scissors \n\`randomhex\` - displays a random Hexadecimal value and color \n \`wholesome\` - Displays a wholesome pic/gif \n  \`aww\` - displays a cute gif/picture \n \`deadinside\` - displays a "watch people die inside" moment \n \`hpmeme\` - Displays a harry potter meme \n   `)
        .setFooter(`Asked by ${message.author.tag}`,message.author.displayAvatarURL())
        message.channel.send(serverEmbed)
        }
        else{
            const serverEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle(`Aleph's Help`)
        .setThumbnail(`https://images-ext-1.discordapp.net/external/mX4VYawMgMbA72fIeBxTHdzu9Ai5AdslEVmapECEkoA/https/cdn.discordapp.com/icons/530711950456389642/9f82ef02a86ff9092c9404c7669985d9.webp`)
        .addField("Bot prefix: A!" , `**Use the following for a detailed list of commands** \n \`A!help general\` - for a list of general commands \n \`A!help moderation\` - for a list of moderation related commands \n \`A!help fun\` - for a list of fun commands`)
        .addField('\n Support server link', 'https://discord.gg/EkpY8ajXC9' )
        .setFooter(`Asked by ${message.author.tag}`,message.author.displayAvatarURL())
        message.channel.send(serverEmbed)
        }
    }}