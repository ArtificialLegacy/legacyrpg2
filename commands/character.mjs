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
  if(tempArgs[0] == "create"){
    if(!tempArgs[1]){
      message.reply(callbacks.noCommandValue);
      return;
    } // name
    if(!tempArgs[2]){
      message.reply(callbacks.notEInfo);
      return;
    } // icon
    if(!tempArgs[3]){
      message.reply(callbacks.notEInfo);
      return;
    } // class
  }
});

export default character;
