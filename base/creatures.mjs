class Creature {
  constructor(tempName, tempId, tempHealth, tempDamage, tempTier, tempXp=0, tempDrops=null){
    this.name = tempName;
    this.id = tempId;
    this.health = tempHealth;
    this.damage = tempDamage;
    this.drops = tempDrops;
    this.xp = tempXp;
    this.tier = tempTier;
  }
}

export default Creature;
