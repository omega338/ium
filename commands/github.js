const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let githubEmbed = new Discord.RichEmbed()
    .setColor('#ffffff ')
    .addField("Github", "https://github.com/tetra-dev/ium")

    return message.channel.send(githubEmbed);
}

const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    message.channel.send("**ium's github **https://github.com/tetra-dev/ium");
}

