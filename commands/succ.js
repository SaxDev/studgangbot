const Discord = require("discord.js");

module.exports = {
  name: "succ",
  category: "Fun",
  description: "You know ;)",
  aliases: ["givehead"],
  usage: "[mention]",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
    const author = message.author;
    const reciever = message.mentions.users.first();
    if (!reciever) return message.channel.send(":x: | You need someone to succ, mention them!");
    const response = [
      `UwU ${author} gives ${reciever} a lil succy <:pepeOK:567778750104731648>`,
      `${author} makes ${reciever} cum from giving such good succs!`,
      `Extreme succing from ${author} incoming to ${reciever}...`,
      `${author} starts to give ${reciever} the best succs!`,
      `Call backup! ${author} has made ${reciever} bust everywhere!`,
      `Woah! Why is Sensei here while ${author} is giving ${reciever} a succ?`,
      `${author} has been caught giving ${reciever} succs by Noodle! C'mon guys, you could've hidden it better. ;3`,
      `Ahem, why is ${author} so good at giving succs to ${reciever}?`,
      `:point_right::point_left::flushed: Why is ${author} so good at giving succs to ${reciever}?`,
      `Oh shiet oh frick, ${author} has covered all around with white stuff! We are going to have a white Christmas!`,
      `Guess what. ${author} is the fricking worse at giving succs but ${reciever} still likes it. :point_right::point_left::weary: How cute :3`,
      `Once again, ${author} is giving ${reciever} succs.`,
      `${author} and ${reciever} are once again being too loud and getting caught by Mommy stud doing the bad.`,
      `UwU succy wuccy, ${author} gives ${reciever} best succs.`,
      `:face_with_raised_eyebrow: ${author} still gives ${reciever} succs while Barak Obama watches them.`,
      `HEY guys, MTV cribs here- oh god ${author} and ${reciever} at it again.`,
      `*holds camera as ${author} is going down on ${reciever}*`
    ]
    const images = [
      'https://cdn.discordapp.com/attachments/687865931938136109/699937238351347842/Byd3kktw-.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699937238754131968/rJWRykFvZ.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699937239378952262/HJRIlihCZ.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699937239802708068/SkqbJ0KYZ.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699937240511414272/rJMskkFvb.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699937241124044860/SJS1lyYwW.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699937242097123388/H1jnJktPb.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699937242503970886/B1rpeTqZf.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699937242902429736/rJX0eac-z.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699937359545761862/rJ2IfTq-f.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699937360204529694/SydAx69ZM.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699937360820961310/rJx5xa9bf.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699937361823531068/Sky0l65WM.gif',
      'https://cdn.discordapp.com/attachments/687865931938136109/699937362326716416/BkiRKrLBz.gif'
    ]
    
    const answer = response[Math.floor(Math.random() * response.length)];  
    const image = images[Math.floor(Math.random() * images.length)];
  
    const succEmbed = new Discord.MessageEmbed()
    .setDescription(answer)
    .setImage(image)
    .setColor('RANDOM')
    message.channel.send(succEmbed)
  }
};