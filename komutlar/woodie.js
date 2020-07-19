const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Keykubat**")
        .setImage("https://i.imgur.com/NLsHnlQ.png")
        .setThumbnail("https://i.imgur.com/jmtxczW.png")
        .setColor(0x00AE86)
        .addField("Adı", "Keykubat", true)
        .addField("Yetenekleri", `
        *İnsanları tek görüşte ondan nefret etmelerini sağlayabilmek
   *Şizofrenlik
   `, true)
   .addField("Motto", ``, true)
   .addField("", "")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'Keykubat', 
  description: 'Keykubat Karakteri hakkında bilgi verir',
  usage: 'Keykubat'
};
