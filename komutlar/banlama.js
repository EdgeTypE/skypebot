message.guild.channels.create('mapus', {
	type: 'GUILD_TEXT',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
	}]
});
console.info(`name channel: name | type: text channel`)
