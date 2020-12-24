const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let{body} = await superagent
  .get(`http://aws.random.cat/meow`);

  let catembed = new Discord.RichEmbed()
  .setColor("#4ea4ed")
  .setTitle("🐱 Meow!")
  .setImage(body.file);

  message.channel.send(catembed);
}

exports.conf = {
    aliases: ['kitty']
  };

module.exports.help = {
  name: "cat"

}
