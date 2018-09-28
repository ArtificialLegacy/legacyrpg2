class Item {
 constructor(tempName, tempID, tempDescription, tempIsTool, tempIsWeapon, tempIsDurable, tempNeedsAmmo, tempIsAmmo, tempIsSellable, tempIsConsumable, tempType="static", tempToolStrength=null, tempWeaponStrength=null, tempCanMine=null, tempDurability=null, tempConsumableStats=[null,null], tempSellPrice=null, tempUsedAmmo=null, tempAmmoType=null, tempSalvageItems=null, tempEvent=()=>{}){
  this.name = tempName; // Item display name.
  this.id = tempID; // Item internal name;
  this.description = tempDescription; // Item details;
  this.isTool = tempIsTool; // boolean
  this.isWeapon = tempIsWeapon; // boolean
  this.isDurable = tempIsDurable; // boolean
  this.toolStrength = tempToolStrength; // Optional; Integer
  this.weaponStrength = tempWeaponStrength; // Optional; Integer
  this.canMine = tempCanMine; // Optional; Array; ["wood", "minerals", "fish", "prey"]
  this.durability = tempDurability; // Optional; Integer
  this.type = tempType; // Optional; String; ["static", "weapon", "shield", "helmet", "chestplate", "gloves", "leggings", "boots", "trinket"]
  this.event = tempEvent; // Optional; Function; Triggered when item is used;
  this.needsAmmo = tempNeedsAmmo; // Boolean
  this.isAmmo = tempIsAmmo; // Boolean
  this.usedAmmo = tempUsedAmmo; // Optional
  this.ammoType = tempAmmoType; // Optional
  this.salvageItems = tempSalvageItems; // Optional; Array; Based on item ID
  this.isSellable = tempIsSellable; // Boolean
  this.sellPrice = tempSellPrice; // Optional; Integer
  this.isConsumable = tempIsConsumable; // Boolean
  this.consumableStats = tempConsumableStats; // Optional; Array [health, hunger]
 }
}

export default Item;
