import settings from './config.js';

const Discord = settings.Discord;
const fs = settings.fs;
const bot = settings.bot;
const data = settings.data;

import commands from './base/commandExport.mjs';

bot.on("ready", async () => {
    if(bot.guilds.size > 1) {
        bot.user.setActivity(`Legacy-RPG on ${bot.guilds.size} servers!`);
        console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`)
    } else {
        bot.user.setActivity(`Legacy-RPG on ${bot.guilds.size} server!`);
        console.log(`${bot.user.username} is online on ${bot.guilds.size} server!`)
    }
    bot.user.setStatus("online");
});

bot.on("guildMemberAdd", async member => {
    
})

bot.on("guildCreate", async guild => {
    console.log("Joined a new guild: " + guild.name);
    if(bot.guilds.size > 1) {
        bot.user.setActivity(`Legacy-RPG on ${bot.guilds.size} servers!`);
    } else {
        bot.user.setActivity(`Legacy-RPG on ${bot.guilds.size} server!`);
    }
});

bot.on("guildDelete", async guild => {
    console.log("Left a guild: " + guild.name);
    if(bot.guilds.size > 1) {
        bot.user.setActivity(`Legacy-RPG on ${bot.guilds.size} servers!`);
    } else {
        bot.user.setActivity(`Legacy-RPG on ${bot.guilds.size} server!`);
    }
});

const token = JSON.parse(fs.readFileSync("./token.json", "utf8"));
bot.login(token.token);
