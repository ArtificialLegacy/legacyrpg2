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
    
    if(tempArgs[3] !== "warrior" && tempArgs[3] !== "archer" && tempArgs[3] !== "mage" && tempArgs[3] !== "dwarf"){
      tempMessage.reply("Invalid class.");
    }
    
    let characters = data.get("characters");
    if(!characters[tempMessage.guild.id]){
      characters[tempMessage.guild.id] = {};
    }
    if(!characters[tempMessage.guild.id][tempMessage.author.id]){
      characters[tempMessage.guild.id][tempMessage.author.id] = {
        "name": tempArgs[1],
        "icon": tempArgs[2],
        "class": tempArgs[3],
      };
    }
    
    
  }
});

export default character;
