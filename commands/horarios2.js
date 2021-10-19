const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('horáriosg2')
		.setDescription('Horário das aulas.'),
	async execute(interaction) {
		return interaction.reply(`Horário 3° Ano G2

        Seg: 
        7:20 - 8:10 Biologia
        8:10 - 9h Biologia
        9:20 - 10:10 Matemática 2
        10:10 - 11:00 Matemática 2
        11:00 - 11:50 Redação
        
        Ter: 
        7:20 - 8:10 História
        8:10 - 9h História
        9:20 - 10:10 Horário de Estudo
        10:10 - 11:00 Física
        11:00 - 11:50 Física
        
        Quar:
        7:20 - 8:10 Inglês
        8:10 - 9h Filosofia
        9:20 - 10:10 Educação Física 
        10:10 - 11:00 Sociologia
        11:00 - 11:50 Horário de Estudo
        
        Qui: 
        7:20 - 8:10 Quimica
        8:10 - 9h Quimica
        9:20 - 10:10 Literatura
        10:10 - 11:00 Gramática
        11:00 - 11:50 Gramática
        
        Sex:
        7:20 - 8:10 Matemática 1
        8:10 - 9h Matemática 1
        9:20 - 10:10 Geografia 
        10:10 - 11:00 Geografia
        11:00 - 11:50 Espanhol`);
	},
}