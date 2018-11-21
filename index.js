const Discord = require('discord.js'); // calls the discord.js library 
const Bot = new Discord.Client(); 
const TOKIN = ''; // calls the discord bot tokin. Make your own bot at discordapp.com/developer 
const name = ''; 

Bot.on('ready', function() {
    console.log('ready');
}); // just a message to let you know the bot is responsive 

Bot.on('guildMemberAdd', function(member){
    member.setNickname(name)
}); // everytime a new member joins, their nickname is changed to the nickname you want 

Bot.login(TOKIN); // calls the tokin
