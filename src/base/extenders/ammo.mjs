import Item from '../items.mjs';

const _ = undefined;

class Ammo extends Item {
  constructor(tempName, tempID, tempDescription, tempIsSellable, tempCount, tempMaxStack, tempSellPrice, tempAmmoType, tempWeight){
    super(tempName, tempID, tempDescription, false, false, false, true, false, true, false, tempIsSellable, false, false, "ammo", tempCount, tempMaxStack, _, _, _, _, tempSellPrice, _, _, tempAmmoType, tempWeight);
  }
}

export default Ammo;
