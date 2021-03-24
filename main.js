const Discord = require ('discord.js');
const api = require('random-stuff-api');
const client = new Discord.Client();

const prefix = 'A!';    
const fs=require('fs');
client.commands=new Discord.Collection();
const commandFiles=fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command=require(`./commands/${file}`)
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Aleph is online');
    client.user.setActivity('Hi I am new here!', {type: "WATCHING"});
});

client.on('message', message => {
    if (!message.content.startsWith(prefix)|| message.author.bot)return;
    const args=message.content.slice(prefix.length).split(/ +/);
    const command=args.shift().toLowerCase();
    if (command ==='ping')
 {  
        message.channel.send(`Pong! **${Math.round(client.uptime)} ms**`);
}
else if(command=== 'serverinfo')
{
    client.commands.get('server').execute(message, args);
}
else if(command=== 'avatar')
{
    client.commands.get('avatar').execute(message, args);
}
else if(command === 'purge')
    {
        const amount = parseInt(args[0])+ 1;

	if (isNaN(amount)) {
        return message.reply('hey that doesn\'t seem to be a valid number.');
    }
        else if (amount <=1 || amount > 100) {
            return message.reply('Fam, you need to input a number between 1 and 99.');
    }
    else{
        message.channel.bulkDelete(amount);
        
        
    }}
    else if(command=== 'insult')
{
    api.random.insult()
  .then(insult => {
    message.channel.send(insult)
  })
  

    }
else if(command==='rickroll')
{
    client.commands.get('rickroll').execute(message, args);
}
else if(command==='kick')
{
    client.commands.get('kick').execute(message, args);
}
else if(command==='ban')
{
    client.commands.get('ban').execute(message, args);
}
else if(command==='botinfo')
{
 
    


    
    const embed = new Discord.MessageEmbed()
    .setTitle("Information About Aleph Bot")
    .setThumbnail("https://images-ext-1.discordapp.net/external/mX4VYawMgMbA72fIeBxTHdzu9Ai5AdslEVmapECEkoA/https/cdn.discordapp.com/icons/530711950456389642/9f82ef02a86ff9092c9404c7669985d9.webp")
    .setDescription(`<a:emoji_41:800328754442141746>**Made with** :heart: by Pride and Vortex \n<a:emoji_41:800328754442141746>**Prefix :** "A!"\n<a:emoji_41:800328754442141746>**Ping :** \`${client.uptime} ms\` \n<a:emoji_41:800328754442141746>**Support server link:** https://discord.gg/EkpY8ajXC9 \n <a:emoji_41:800328754442141746>**Servers i am in:** ${client.guilds.cache.size} `)
    .setFooter(`Asked by ${message.author.tag}`,message.author.displayAvatarURL())
    
    message.channel.send(embed);
    
    }
else if(command==='dankmeme')
{
    api.image.dankmeme()
    .then(dankmeme => {
        message.channel.send(dankmeme)
      })
}
/*else if(command===embed)*/ /*
{
    client.commands.get('embed').execute(message, args)
}*/
else if(command==='hpmeme')
{
    api.image.hpmeme()
    .then(hpmeme => {
        message.channel.send(hpmeme)
      })
}
else if(command==='aww')
{
    api.image.aww()
    .then(aww => {
        message.channel.send(aww)
      })
}
else if(command==='wholesome')
{
    api.image.wholesome()
    .then(wholesome => {
        message.channel.send(wholesome)
      })
}
else if(command==='deadinside')
{
    api.image.deadinside()
    .then(deadinside => {
        message.channel.send(deadinside)
      })
}
else if(command==='randomhex')
{
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    const embed = new Discord.MessageEmbed()
    .setTitle(`Hex code - #${randomColor}`)
    .setColor(`${randomColor}`)
    
    message.channel.send(embed)
}


else if(command==='membercount')
{
    client.commands.get('membercount').execute(message, args);
}

else if(command==='mute')
{
    let muteRole = message.guild.roles.cache.find(r => r.name.toLowerCase()===("muted")||r.name===("Muted"));
        const prefix='A!';
        var muteUser = message.mentions.members.first();
        var muteReason = message.content.slice(prefix.length + 27);
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bruh get some permissions first");
    if (!muteUser) return message.channel.send("Atleast mention a valid member, dummy");
    if (!message.guild.roles.cache.some(r => r.name.toLowerCase()===("muted"))) return message.channel.send("Can't find a role called \"muted\"");
    if (!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send("Aw man, I Don't have the right permissions");
    if (!muteReason) muteReason = "No reason given";
    var muteEmbed = new Discord.MessageEmbed() 
    .setTitle("Mute")
    .setDescription(`:mute: **Successfully Muted** ${muteUser} \n** Muted By:** ${message.author.tag} \n **Reason :** ${muteReason} `)
    .setFooter(`Asked by ${message.author.tag}`,message.author.displayAvatarURL())
    message.channel.send(muteEmbed)
    muteUser.roles.add(muteRole).catch(console.error);

}

else if(command==='unmute')
{
    let muteRole = message.guild.roles.cache.find(r => r.name.toLowerCase()===("muted")||r.name===("Muted"));
    var muteUser = message.mentions.members.first();
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bruh get some permissions first");
    if (!muteUser) return message.channel.send("Atleast mention a valid member, dummy");
    if (!message.guild.roles.cache.some(r => r.name.toLowerCase()===("muted"))) return message.channel.send("Can't find a role called \"muted\"");
    if (!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send("Aw man, I Don't have the right permissions");
    var unmuteEmbed = new Discord.MessageEmbed()
    .setTitle("Unmute")
    .setDescription(`:speaker: **Successfully Unmuted** ${muteUser}`)
    .setFooter(`Asked by ${message.author.tag}`,message.author.displayAvatarURL())

    muteUser.roles.remove(muteRole).catch(console.error);
    message.channel.send(unmuteEmbed)
}
else if(command==='nick')
{
        let member=message.author
        if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('Dang, I don\'t have permission to change your nickname!');
        if (!message.member.permissions.has('CHANGE_NICKNAME')) return message.channel.send('Bruh get some permissions first!');
        let newnick= message.content.slice(prefix.length + 4)
        //if (member.roles.highest.position > client.guilds.roles.highest.position) return message.channel.send('You have roles higher than mine, can\'t change your nickname');
        if(newnick==='') return message.channel.send('Dude, include a valid nickname!')    ;
        
        message.member.setNickname(newnick);
        
        message.channel.send('Changed Nickname!').catch(console.error());
        
        
    
}
else if(command==='changenick')
{   let member = message.mentions.members.first();
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('Dang, I don\'t have permission to change your nickname!');
    if (!message.member.permissions.has('MANAGE_NICKNAMES')) return message.channel.send('Bruh get some permissions first!');
    
    let newnick= message.content.slice(prefix.length + 33)
    if(newnick==='') return message.channel.send('Dude, include a valid nickname!');
    member.setNickname(newnick);
    message.channel.send('Changed Nickname!')
}
else if(command==='coin'||command==='toss')
{
     
    client.commands.get('coin').execute(message, args);
}
else if(command==='rps')
{
     
    client.commands.get('rps').execute(message, args);
}
else if(command==='invite')
{
     
    const embed=new Discord.MessageEmbed()
    .setTitle("Aleph's Invite Link")
    .setURL(`https://discord.com/oauth2/authorize?client_id=799909443008724993&scope=bot&permissions=8`)
    .setFooter(`Asked by ${message.author.tag}`,message.author.displayAvatarURL())

    message.channel.send(embed)
}

else if(command==='help')
{
    
    client.commands.get('help').execute(message, args);
}
else if(command==='users')
{
    message.channel.send(`${client.users.cache.size}`)
    
}
else if(command==='unban')
{
if(!message.member.hasPermission("BAN_MEMBERS")) {
    return message.channel.send(`Bruh, get some permissions first`)
  }
  
  if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
    return message.channel.send(` Gosh I do not have permissions to unban anyone`)
  }
  
  let userID = args[0]
  if(!args[0])return message.channel.send("Do that again but this time mention the person you wanna unban ")
    message.guild.fetchBans().then(bans=> {
    if(bans.size == 0) return 
    let bUser = bans.find(b => b.user.id == userID)
    if(!bUser) return message.channel.send("Hey, That user isn't even banned")
    message.guild.members.unban(bUser.user) 
    message.channel.send(`Unbanned ${bUser.user.username}`)
   
})}
else if(command==='addrole'){
    client.commands.get('addrole').execute(message,args)
}
});



client.login('TOKEN');
