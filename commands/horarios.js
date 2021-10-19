const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('horáriosg1')
		.setDescription('Horário das aulas.'),
	async execute(interaction) {
		return interaction.reply(`Horário 3° Ano G1

        Seg: 
        7:20 - 8:10 Gramática
        8:10 - 9h Gramática
        9:20 - 10:10 Redação
        10:10 - 11:00 Física
        11:00 - 11:50 Física
        
        Ter: 
        7:20 - 8:10 Biologia
        8:10 - 9h Biologia
        9:20 - 10:10 História
        10:10 - 11:00 História
        11:00 - 11:50 Horário de Estudo
        
        Quar:
        7:20 - 8:10 Educação Física 
        8:10 - 9h Inglês
        9:20 - 10:10 Geografia
        10:10 - 11:00 Geografia
        11:00 - 11:50 Filosófia
        
        Qui: 
        7:20 - 8:10 Espanhol
        8:10 - 9h Literatura
        9:20 - 10:10 Horário de Estudo
        10:10 - 11:00 Quimica
        11:00 - 11:50 Quimica
        
        Sex:
        7:20 - 8:10 Matemática 2
        8:10 - 9h Matemática 2
        9:20 - 10:10 Matemática 1 
        10:10 - 11:00 Matemática 1
        11:00 - 11:50 Sociologia`);
	},
}
