message.guild.channels.create('name', {
	type: 'GUILD_TEXT',
    permissionOverwrites: [{
    	id: message.guild.id,
        allow: ['VIEW_CHANNEL'],
        deny: ['SEND_MESSAGES'],
	}]
});
console.info(`name channel: mapus | type: text channel`)
