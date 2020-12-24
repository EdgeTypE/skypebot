const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

const status = {
    online: "Aktif",
    idle: "Boşta",
    dnd: "Rahatsız Etmeyin",
    offline: "Çevrimdışı"
  }

module.exports.run = async (bot, message, args) => {
    if(!args[0]){
        let authorembed = new Discord.RichEmbed()
        .setAuthor(`ℹ️ ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .setColor("#4ea4ed")
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription(`**Kişi Statüsü:** ${status[message.author.presence.status]}\n \n**Katılım Tarih:** ${moment.utc(message.author.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}\n**Kayıt Tarihi:** ${moment.utc(message.author.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
        .setFooter(`Member ID: ${message.author.id}`)
        message.channel.send(authorembed)
    }
    if(args[0]){
      let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      let userembed = new Discord.RichEmbed()
      .setAuthor(`ℹ️ ${member.user.username}#${member.user.discriminator}`, member.user.displayAvatarURL)
      .setColor("#4ea4ed")
      .setThumbnail(member.user.displayAvatarURL)
      .setDescription(`**Kişi Statüsü:** ${status[member.presence.status]}\n \n**Katılım Tarihi:** ${moment.utc(member.user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}\n**Kayıt Tarihi:** ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
      .setFooter(`ID: ${member.id}`)
      message.channel.send(userembed)
    }
}

exports.conf = {
    aliases: ['userstats','uinfo']
  };

module.exports.help = {
  name: "userinfo"

}
