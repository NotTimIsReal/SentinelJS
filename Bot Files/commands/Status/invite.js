const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Returns the invite for the bot.'),
	async execute(interaction) {

		const embed = new MessageEmbed()
		.setColor('RANDOM')
		.setTitle("Invite Link!")
		.addFields([
			{
				name: "Patreon",
				value: "[Here](https://www.patreon.com/user?u=50781264) is the patreon link.",
				inline: true
			},{
				name: "Website",
				value: "[Here](https://sentinel.theuntraceable.tk) is the website link.",
				inline: true
			},{
				name: "Support Server",
				value: "[Here](https://discord.gg/d5WFqqTpXR) is an invite to the support server"
			}
		])
		.setDescription(`[Thank you for adding me!](https://dsc.gg/security)`)
		.setTimestamp()
			return await interaction.reply({ephemeral:true ,embeds: [embed] });
	},
};