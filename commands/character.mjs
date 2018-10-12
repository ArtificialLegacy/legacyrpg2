import Command from '../base/commands.mjs';
import settings from '../config.js';
const Discord = settings.Discord;
const bot = settings.bot;
const data = settings.data;
import callbacks from '../index/callbacks.mjs';

let character = new Command("character", 315, "rpg", "Creates and edits your character.", (tempMessage, tempArgs, tempPrefix) => {
  if(!tempArgs[0]){
    message.reply(callbacks.noSubcommand); 
    return;
  }
});

export default character;
