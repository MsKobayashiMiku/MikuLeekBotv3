(function() {
	$.bind('discordChannelCommand', function(event) {
		var channel = event.getChannel(),
			command = event.getCommand(),
			args = event.getArgs();
		
		if 	(command.equalsIgnoreCase('nameofcommand')) {
			$.discord.say(channel, "(file Image.gif)");
		}
	});
	
	$.bind('initReady', function() {
		$.discord.registerCommand('./custom/discord/commands/NameOfScript.js', 'NameOfCommand', 0);
	});
})();