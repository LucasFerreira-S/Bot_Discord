const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Exibir informações do servidor.'),
	async execute(interaction) {
		return interaction.reply(`Nome Servidor: ${interaction.guild.name}\nTotal de membros: ${interaction.guild.memberCount}`);
	},
}