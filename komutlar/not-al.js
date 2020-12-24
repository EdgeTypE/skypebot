const snekfetch = require('snekfetch');

module.exports.run = async (bot, message, args) => {
	if (!args.slice(0)
		.join(' ')) return message.channel.send(':warning: Neyi not almak istediğini yazmalısın.')
	snekfetch.post('https://hastebin.com/documents')
		.send(args.slice(0)
			.join(' '))
		.then(body => {
			message.channel.send(':ballot_box_with_check: Yazdığın yazı şuraya not alındı: https://hastebin.com/' + body.body.key);
		});
	}
module.exports.conf = {
	aliases: ["hb","haste","paste","not-al"]
}
		
module.exports.help = {
	name: "not-al"
}
