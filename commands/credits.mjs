import Command from '../base/commands.mjs';
import settings from '../config.js';
const Discord = settings.Discord;
const bot = settings.bot;

let botinfo = new Command("botinfo", 30, "info", "Shows ping and bot information.", (tempMessage, tempArgs, tempPrefix) => {
  let embed = new Discord.RichEmbed()
    .setTitle("Credits")
    .setColor("#8e278e")
    .addField("Main Developer", "SnowflakeLegacy#0682");

    tempMessage.channel.send(embed);
});

export default botinfo;
