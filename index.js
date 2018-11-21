const Discord = require('discord.js'); // calls the discord.js library 
const Bot = new Discord.Client(); 
const TOKIN = ''; // Make your own bot at discordapp.com/developer and copy the tokin ID. Paste it here. 
const name = ''; // pick the name you want 

Bot.on('ready', function() {
    console.log('ready');
}); // just a message to let you know the bot is responsive 

Bot.on('guildMemberAdd', function(member){
    member.setNickname(name)
}); // everytime a new member joins, their nickname is changed to the nickname you want 

Bot.login(TOKIN); // calls the tokin
