const types = ['animated', 'regular'];
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.channel.send(":warning: Önce bir emoji girmelisin.");
    const type = args[0].toLowerCase();
		const emojis = message.guild.emojis.filter(emoji => type === 'animated' ? emoji.animated : !emoji.animated);
		if (!emojis.size) return message.channel.send(`:warning: Bu sunucu ${type} emojilere sahip değil.`);
    let emotelist = new Discord.RichEmbed()
    .setAuthor("😃 Emoji Listesi", message.guild.displayAvatarURL)
    .setColor("#4ea4ed")
    .setDescription(emojis.map(emoji => emoji.toString()).join(' '), { split: { char: ' ' } });
    return message.channel.send(emotelist)
};
exports.conf = {
    aliases: ["emotes","emoji-listesi"]
  };

module.exports.help = {
  name: "emoji-listesi"

}
