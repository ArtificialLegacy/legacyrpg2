class Item {
 constructor(tempName, tempID, tempDescription, tempIsTool, tempIsWeapon, tempIsDurable, tempIsStackable, tempNeedsAmmo, tempIsAmmo, tempIsSalvagable, tempIsSellable, tempIsConsumable, tempIsFuel, tempType="static", tempCount=null, tempMaxStack=null, tempBaseDurability=null, tempToolStrength=null, tempWeaponStrength=null, tempCanMine=null, tempDurability=null, tempConsumableStats=[null,null], tempSellPrice=null, tempFuelPower, tempUsedAmmo=null, tempAmmoType=null, tempWeight=null, tempSalvageItems=null){
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
  this.type = tempType; // Optional; String; ["static", "weapon", "shield", "helmet", "chestplate", "gloves", "leggings", "boots", "trinket", "ammo"]
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
  this.isStackable = tempIsStackable; // Boolean
  this.maxStack = tempMaxStack; // Integer; Must be positive
  this.baseDurability = tempBaseDurability; // Integer; Must be positive
  this.count = tempCount; // Integer; Must be positive
  this.isSalvagable = tempIsSalvagable; // Boolean
  this.weight = tempWeight; // Optional; Integer; Hunger cost of equiping
  this.isFuel = tempIsFuel; // Boolean
  this.fuelPower = tempFuelPower; // Optional; Integer
 }
}

export default Item;
