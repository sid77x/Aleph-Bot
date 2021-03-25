module.exports={

       
    name: 'warn',
    description: "This is the warn command",
    execute(message, args,){
        const Discord = require ('discord.js');
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.senda("Bruh atleast get some permissions first")
        
    }}