import settings from '../config.js';
const Discord = settings.Discord;
const fs = settings.fs;
const data = settings.data;
const bot = settings.bot;

import callbacks from '../index/callbacks.mjs';
import Command from '../base/commands.mjs';

let debug = new Command("debug", 0, "admin", "Bot debugging command. (Devs only)", (tempMessage, tempArgs, tempPrefix) => {
  if(!tempMessage.author.id === "261619158096150528") return tempMessage.reply(callbacks.noPermission);

    let value = (eval(tempArgs.join(" ")));

    let embed = new Discord.RichEmbed()
    .setDescription("Eval")
    .setColor("#8e278e")
    .addField("Requested User", tempMessage.author)
    .addField("Input", tempArgs)
    .addField("Result", value);

    tempMessage.channel.send(embed);
});

export default debug;

/*
  Warning: This command is to be used in vain. Don't use this command for basic debugging on a public server. ALWAYS keep this command private to the bot owner.
*/
