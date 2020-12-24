const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]){
    let image = message.author.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setAuthor(`👤 ${message.author.username}#${message.author.discriminator}`)
    .setColor("#4ea4ed")
    .setImage(image)
     message.channel.send(embed);
  }
  if(args[0]){
    let user = message.mentions.users.first();
    let image = user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setAuthor(`👤 ${user.username}#${user.discriminator}`)
    .setColor("#4ea4ed")
    .setImage(image)
    message.channel.send(embed);
  }

}

exports.conf = {
    aliases: []
  };

module.exports.help = {
  name: "avatar"
}
