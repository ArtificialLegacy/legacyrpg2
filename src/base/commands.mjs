class Command {
  constructor(tempName, tempCooldown, tempCategory, tempDescription, tempAction) {
    this.name = tempName;
    this.cooldown = tempCooldown;
    this.category = tempCategory;
    this.description = tempDescription;
    this.action = tempAction;
    this.activeCooldowns = {};
  }
  run(tempMessage, tempArgs, tempPrefix) {
    if(!this.activeCooldowns[tempMessage.author.id]) {
      this.action(tempMessage, tempArgs, tempPrefix);
      this.activeCooldowns[tempMessage.author.id] = true;;
      console.log(`Command: ${this.name} run by ${tempMessage.author.id}; Raw message: ${tempMessage.content}`);
      setTimeout(() => {
            this.activeCooldown = false;
            tempMessage.reply(callbacks.cooldownActive);
        }, this.cooldown * 1000);
    } else {
      tempMessage.reply(callbacks.cooldownFinish);
    }
  } 
}

export default Command;
