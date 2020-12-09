const Discord = require("discord.js");

module.exports = {
  name: "say",
  category: "Utility",
  description: "Make the bot say your favourite quotes.",
  usage: "[channel(optional)] [quote]",
  cooldown: 5,
  reqPermissions: ["KICK_MEMBERS"],
  sped: true,
  execute(bot, message, args) {
    let logchannel = bot.channels.cache.get('563402253139050496');
    const stud = '548949555597803550'
    const regex = /<#\d{18}>/g
    if (!args[0]) {
      return message.channel.send(":x: | You need a quote to type in!")
    } else if (regex.test(args[0])) {
      const channel = message.mentions.channels.first()
      const channelarg = args.shift()
      const quote = args.join(" ");
      
      if (quote.length < 1 || quote.length > 512) return message.channel.send(":x: | The quote must be in rage of 1 to 512 characters.");
      channel.send(quote).then(() => message.channel.send(`Quote message has been sent.`).then(m => m.delete({timeout: 2500})));
      if (message.channel.guild.id = stud) return logchannel.send({embed: {title: "(To Specific Channel) Say Command Executed!", description:`${message.author} has used the say command in ${message.channel} to ${channel}! Quote: ${quote}`, color:'#f83e42'}})
      message.delete({ timeout: 2500, reason: `Quote message: ${quote}` })
    } else {
      const quote = args.join(" ");
      
      if (quote.length < 1 || quote.length > 512) return message.channel.send(":x: | The quote must be in rage of 1 to 512 characters.");
      message.channel.send(quote);
      message.delete({reason: `Quote message: ${quote}` });
      if (message.guild.id = stud) return logchannel.send({embed: {title: "Say Command Executed!", description:`${message.author} has used the say command in ${message.channel}! Quote: ${quote}`, color:'#f83e42'}})
    } 
  }
};
