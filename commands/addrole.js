const Discord = require("discord.js");

module.exports = {
  name: "add-role",
  category: "Utility",
  description: "Add roles to users!",
  aliases: ["role-add", "roleadd","addrole"],
  usage: "[user] [role]",
  reqPermissions: ["MANAGE_ROLES"],
  cooldown: 3,
  async execute(bot, message, args) {
    let logchannel = bot.channels.cache.get('563402253139050496');
    let reason = `Responsible Moderator: ${message.author.tag}`
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if(!message.member.hasPermission("MANAGE_ROLES")){
        message.channel.send(" ");
    }

    else{

        if(!rMember) 
            return message.channel.send("I couldn't find that user.");

        let role = args.join(" ").slice(23);
        if(!role) 
            return message.channel.send(":x: | Please specify a role!");

        let gRole = message.guild.roles.cache.find(roles => roles.name === role);
        if(!gRole) 
            return message.channel.send(":x: | I Couldn't find that role.");

        if(rMember.roles.cache.has(gRole.id)) 
            return message.channel.send(":x: | That user already has that role."); 

        else{
            rMember.roles.add(gRole.id).catch(console.error);

            try{ 
                rMember.send(`You have been given the role **${gRole.name}** in **${message.guild.name}**`);
                message.channel.send(`:thumbsup:Role given.`)
                logchannel.send({embed: {title: "New Role-Add Command Log!", description:`${message.author} has given ${rMember} the role ${gRole.name}!`, color:'#f83e42'}});
            }
            catch(e){
                console.log(e.stack);
                message.channel.send(`:thumbsup:Role recieved.`)
          }
        }
      }
   }
};