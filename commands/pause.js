
const botconfig = require("../botconfig.json");
const tokens = require("../tokens.json");
const index = require("../index.js");
const GOOGLE_API_KEY = tokens.youtubekey;
const Discord = require("discord.js");
const Util = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');

let inline = true;
let volumeValue = 5;
let curSent = 0;

var server;

module.exports = {
    name: 'pause',
    description: 'Pauses the current song.',
	async execute(bot, message, args){

        const queue = bot.queue.get(message.guild.id);
        const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.reply('**You must be in a voice channel to use this command.**');
        if (!queue.playing) return message.reply('There is no music playing right now.');
     
		if (queue) {
			queue.connection.dispatcher.pause();
            queue.playing = false;
			return message.channel.send(`⏸ Paused - **${queue.songs[0].title}**`);
		}
		return message.channel.send('There is nothing playing to pause.');
        
	},
};