const { get } = require("snekfetch");

exports.run = async(client, message, args, tools) => {
    const text = args.join(" ");
    const { body } = await get(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`);
    return message.channel.send({
      embed: {
        author: {
      name: "🤖 Clyde",
        "description": "Selam. Ben Clyde. Discord'un botuyum.",
        "color": "6192321",
        "image": {
           "url": body.message
        }
        }
  }
    })
}
  exports.conf = {
    aliases: [],
  };
  
  exports.help = {
    name: 'clyde'
  }
