const hastebin = require('hastebin-gen');

exports.run = (client, msg, args) => {
	    let haste = args.slice(0).join(" ")
        let type = args.slice(1).join(" ")
        if (!args[0]) { return msg.channel.send(":x: Lan, kel! Ne boş yazıyon? Ne biliyim ben senin ne yazcağını? Ne boş insansın ya?") }
        hastebin(haste, type).then(r => {
            msg.channel.send(":white_check_mark: Tamamdır, not aldım dediklerini: " + r);
        }).catch(console.error);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'not-al',
  description: 'Yazdığınızı not alır',
  usage: 'not-al [komut]'
};
