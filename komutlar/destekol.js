const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Skype**")
        .setImage("https://i.pinimg.com/originals/ba/d2/93/bad293d77e09748f485665a25b631261.jpg")
        .setThumbnail("https://images.discordapp.net/avatars/510114241307607051/b9f0bb37abe8613f965616d4666a6ca8.png?size=512")
        .setColor(0x00AE86)
        .addField("Adı", "Skype", true)
        .addField("Yetenekleri", `
        *İnsanları eğlendirmek
   *Sana yardım etmek
   `, true)
   .addField("Motto", `Skype kalbimizde yaşıyor`, true)
   .addField("İşte Ücretsiz Destek Linki", "https://top.gg/bot/510114241307607051/vote")
   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'destekol', 
  description: 'Skype Bota destek olursun.',
  usage: 'destekol'
};
