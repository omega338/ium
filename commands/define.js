const urban = require('relevant-urban'), Discord = require('discord.js');

  module.exports = {
      name: 'define',
      description: 'Searches urban dictionary.',
      aliases: ['urban', 'definition', 'meaning'],
      usage: '<word>',
      args: true,
      async execute(bot, message, args){
        if(!args[0]) return message.channel.send('**Please specify some a word to define.** `ium define <word>`');

        let res = await urban(args.join(' ')).catch(e => {
            return message.channel.send(`**Definition not found.**`);
        });
    
        let urbanEmbed = new Discord.RichEmbed()
            .setColor(`#f5a3fa`)
            .setTitle(res.word)
            .setURL(res.urbanURL)
            .setDescription(`**Defintion**\n${res.definition}\n\n**Example**\n*${res.example}*`)
    
        message.channel.send(urbanEmbed);
      },
  };