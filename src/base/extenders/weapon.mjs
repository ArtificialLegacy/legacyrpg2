import Item from '../items.mjs';

const _ = undefined;

class Weapon extends Item {
  constructor(tempName, tempID, tempDescription, tempNeedsAmmo, tempBaseDurability, tempStrength, tempSellPrice, tempAmmoUsed=null, tempWeight, tempSalvageItems){
    super(tempName, tempID, tempDescription, false, true, true, false, tempNeedsAmmo, false, true, true, false, false, "weapon", 1, 1, tempBaseDurability, _, tempStrength, _, _, _, tempSellPrice, _, tempAmmoUsed, _, tempWeight, tempSalvageItems);
  }
}

export default Weapon;
