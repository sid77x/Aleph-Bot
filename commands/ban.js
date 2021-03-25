
module.exports={
    
       
    name: 'ban',
    description: "This is the ban command",
    execute(message, args,){
        const Discord = require ('discord.js');
        const member = message.mentions.members.first();
        if(member.user.username===message.author.username)
        {
            message.channel.send("Dang, you really wanna ban yourself?")
        }
      else  {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Bruh get some permissions first")
let User = message.guild.member(message.mentions.users.first())
if (!User) return message.channel.send("Lol that isnt even a user")
if (User.hasPermission("BAN_MEMBERS")) return message.reply("They have a role higher than mine, cant ban em :(")
let banReason = args.join(" ").slice(22);
if (!banReason) {
  banReason = "None"

}

User.ban({reason: banReason})
message.channel.send(`Banned ${User} Get rekt! <a:emoji_40:800225814901162005>  `)}
        
    }}