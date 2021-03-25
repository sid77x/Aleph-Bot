
module.exports={
    
       
    name: 'kick',
    description: "This is the kick command",
    execute(message, args,){
        const Discord = require ('discord.js');
        const member = message.mentions.members.first();
        if(member.user.username===message.author.username)
        {
            message.channel.send("Dang, you really wanna kick yourself?")
        }
      else  {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Bruh get some permissions first")
        if(!args[0]) return message.channel.send("Try that again but this time tag someone to ban")
let User = message.guild.member(message.mentions.users.first()) 
if (!User) return message.channel.send("Lol that isnt even a user").catch(console.error)
if (User.hasPermission("KICK_MEMBERS")) return message.reply("They have a role higher than mine, cant kick em :(")
let kickReason = args.join(" ").slice(22);
if (kickReason==="") {
kickReason = "None"

}
User.kick({reason: kickReason})
message.channel.send(`Succesfully kicked ${User}`)}
        
    }}