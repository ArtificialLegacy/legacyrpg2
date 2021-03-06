import Command from '../base/commands.mjs';
import settings from '../config.js';
const Discord = settings.Discord;
const bot = settings.bot;
const fs = settings.fs;

import commands from '../base/commandExport.mjs';

let help = new Command("help", 30, "info", "Displays info on all commands.", (tempMessage, tempArgs, tempPrefix) => {
  let cmdSort = {
    "info": [],
    "admin": [],
    "rpg": []
  }
  
  for (var sort in commands) {
    if (!commands.hasOwnProperty(sort)) {
        continue;
    }
    if(commands[sort].category == "info"){
      cmdSort.info.push(commands[sort]);
    } else if(commands[sort].category == "admin"){
      cmdSort.admin.push(commands[sort]);
    } else if(commands[sort].category == "rpg"){
      cmdSort.rpg.push(commands[sort]);
    } else {
      continue;
    }
}
  
  let embed = new Discord.RichEmbed()
    .setTitle("Help")
    .setColor("#8e278e");
    
    if(cmdSort.info.length !== 0){
      embed.addField("**Info Commands**", "** **");
      for(let i = 0; i < cmdSort.info.length; i++){
        embed.addField(cmdSort.info[i].name, cmdSort.info[i].description);
      }
    }
    
    if(cmdSort.rpg.length !== 0){
      embed.addField("**RPG Commands**", "** **");
      for(let i = 0; i < cmdSort.rpg.length; i++){
        embed.addField(cmdSort.rpg[i].name, cmdSort.rpg[i].description);
      }
    }
    
    if(cmdSort.admin.length !== 0){
      embed.addField("**Admin Commands**", "** **");
      for(let i = 0; i < cmdSort.admin.length; i++){
        embed.addField(cmdSort.admin[i].name, cmdSort.admin[i].description);
      }
    }
    
    tempMessage.channel.send(embed);
});

export default help;
