const Discord = require('discord.js'); 
const Bot = new Discord.Client(); 
const TOKIN = 'NTE0Nzc1OTI5NDE1Nzk0NzA5.DtbhDg.17eT46gouP4kkmYY-zGLWbPSlsk'; 

Bot.on('ready', function() {
    console.log('ready');
});

Bot.on('guildMemberAdd', function(member){

    member.setNickname('enter name here')
});

Bot.login(TOKIN);